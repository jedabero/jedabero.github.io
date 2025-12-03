"use client";

import { useMemo, useRef, useState } from "react";
import {
  Download,
  Files,
  Loader2,
  ShieldCheck,
  Sparkles,
  Wand2,
} from "lucide-react";
import { PDFDocument } from "pdf-lib";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { cn } from "@/lib/utils";

type StatusType = "idle" | "info" | "ok" | "error" | "warn";

type Status = {
  type: StatusType;
  message: string;
};

type SkippedFile = { name: string; reason: string };
type FailedFile = { name: string; error: string };

const initialStatus: Status = {
  type: "idle",
  message: "Esperando selección de archivos…",
};

const statusTone: Record<StatusType, string> = {
  idle: "text-base-muted",
  info: "text-accent-blue",
  ok: "text-accent-mint",
  warn: "text-amber-300",
  error: "text-red-300",
};

const statusBadgeVariant: Record<StatusType, "muted" | "blue" | "mint"> = {
  idle: "muted",
  info: "blue",
  ok: "mint",
  warn: "blue",
  error: "blue",
};

function formatSize(bytes: number) {
  return `${(bytes / (1024 * 1024)).toFixed(2)} MB`;
}

function generateOutputFileName() {
  const now = new Date();
  const pad = (n: number) => n.toString().padStart(2, "0");
  return `merged-${now.getFullYear()}${pad(now.getMonth() + 1)}${pad(
    now.getDate()
  )}-${pad(now.getHours())}${pad(now.getMinutes())}${pad(
    now.getSeconds()
  )}.pdf`;
}

async function mergePdfFiles(files: File[]) {
  const mergedPdf = await PDFDocument.create();
  const skipped: SkippedFile[] = [];
  const failed: FailedFile[] = [];

  // Procesamos en orden para respetar la selección y evitar picos de memoria.
  for (const file of files) {
    if (!file) continue;

    const name = file.name || "archivo.pdf";
    const isPdfType =
      file.type === "application/pdf" || name.toLowerCase().endsWith(".pdf");
    if (!isPdfType) {
      skipped.push({ name, reason: "Tipo de archivo no es PDF." });
      continue;
    }

    try {
      const arrayBuffer = await file.arrayBuffer();
      const pdf = await PDFDocument.load(arrayBuffer, {
        ignoreEncryption: true,
      });

      const pageCount = pdf.getPageCount();
      if (pageCount === 0) {
        skipped.push({ name, reason: "El PDF no contiene páginas." });
        continue;
      }

      const pages = await mergedPdf.copyPages(
        pdf,
        Array.from({ length: pageCount }, (_, i) => i)
      );
      pages.forEach((page) => mergedPdf.addPage(page));
    } catch (error) {
      failed.push({
        name,
        error: (error as Error)?.message || "Error desconocido",
      });
    }
  }

  if (mergedPdf.getPageCount() === 0) {
    throw new Error(
      "No se pudo generar el PDF combinado (no se añadió ninguna página)."
    );
  }

  const bytes = await mergedPdf.save();
  return { bytes, skipped, failed };
}

function downloadMergedPdf(bytes: Uint8Array) {
  const blob = new Blob([bytes as BlobPart], { type: "application/pdf" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = generateOutputFileName();
  document.body.appendChild(link);
  link.click();
  link.remove();
  URL.revokeObjectURL(url);
}

export default function PrintUtil() {
  const inputRef = useRef<HTMLInputElement>(null);
  const [files, setFiles] = useState<File[]>([]);
  const [status, setStatus] = useState<Status>(initialStatus);
  const [skipped, setSkipped] = useState<SkippedFile[]>([]);
  const [failed, setFailed] = useState<FailedFile[]>([]);
  const [isMerging, setIsMerging] = useState(false);

  const hasDetails = skipped.length > 0 || failed.length > 0;

  const hintText = useMemo(
    () =>
      files.length > 1
        ? "El orden de combinación será el mismo que tu selección."
        : "Puedes seleccionar múltiples archivos a la vez.",
    [files.length]
  );

  const resetSelection = () => {
    setFiles([]);
    setSkipped([]);
    setFailed([]);
    setStatus(initialStatus);
    if (inputRef.current) {
      inputRef.current.value = "";
    }
  };

  const handleFilesSelected = (event: React.ChangeEvent<HTMLInputElement>) => {
    const selected = Array.from(event.target.files ?? []);
    setFiles(selected);
    setSkipped([]);
    setFailed([]);
    setStatus(
      selected.length
        ? {
            type: "info",
            message: `Has seleccionado ${selected.length} archivo(s). Pulsa "Combinar y descargar".`,
          }
        : initialStatus
    );
  };

  const handleMerge = async () => {
    if (!files.length) {
      setStatus({
        type: "warn",
        message: "Selecciona al menos un archivo PDF.",
      });
      return;
    }

    setIsMerging(true);
    setSkipped([]);
    setFailed([]);
    setStatus({
      type: "info",
      message: "Procesando PDFs… Esto puede tardar según el tamaño y cantidad.",
    });

    const start = performance.now();
    try {
      const {
        bytes,
        skipped: skippedFiles,
        failed: failedFiles,
      } = await mergePdfFiles(files);
      downloadMergedPdf(bytes);

      const total = files.length;
      const okCount = total - skippedFiles.length - failedFiles.length;
      const duration = performance.now() - start;

      setSkipped(skippedFiles);
      setFailed(failedFiles);
      setStatus({
        type: "ok",
        message: `Combinación completada. Archivos combinados: ${okCount}/${total}. Tiempo: ${duration.toFixed(
          0
        )} ms.`,
      });
    } catch (error) {
      setStatus({
        type: "error",
        message: `Ocurrió un error al combinar los PDFs: ${
          (error as Error)?.message || String(error)
        }`,
      });
    } finally {
      setIsMerging(false);
    }
  };

  return (
    <main className="min-h-screen bg-page-gradient bg-grid text-base-text">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-4 py-10 lg:flex-row lg:items-start lg:px-8">
        <Card className="flex-1 border-white/10 bg-base-surface/90">
          <CardHeader className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-full border border-accent-mint/30 bg-accent-mint/10 text-lg font-semibold text-accent-mint shadow-lg shadow-accent-mint/15">
                PDF
              </div>
              <div>
                <CardTitle className="text-xl">Combinar PDFs (local)</CardTitle>
                <CardDescription className="text-base-muted">
                  Selecciona varios PDFs y combínalos en tu navegador con
                  pdf-lib. Nada se sube a servidores.
                </CardDescription>
              </div>
            </div>
            <Badge variant="mint" className="gap-2">
              <ShieldCheck className="h-4 w-4" />
              Local y privado
            </Badge>
          </CardHeader>

          <CardContent className="space-y-6">
            <div className="space-y-2">
              <label
                htmlFor="fileInput"
                className="text-sm font-semibold text-base-text/90"
              >
                1. Selecciona uno o más archivos PDF
              </label>
              <input
                id="fileInput"
                ref={inputRef}
                type="file"
                accept="application/pdf,.pdf"
                multiple
                onChange={handleFilesSelected}
                className="w-full cursor-pointer rounded-lg border border-white/10 bg-base-bg/60 px-4 py-3 text-sm text-base-text file:mr-4 file:cursor-pointer file:rounded-md file:border-0 file:bg-accent-mint/20 file:px-3 file:py-2 file:text-sm file:font-semibold file:text-accent-mint hover:border-accent-mint/40 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-mint/60"
              />
              <div
                className={cn(
                  "rounded-lg border border-white/5 bg-base-bg/50 p-3 text-sm text-base-text/90",
                  files.length === 0 && "text-base-muted border-dashed"
                )}
              >
                {files.length === 0 ? (
                  <div className="flex items-center gap-2 text-sm text-base-muted">
                    <Files className="h-4 w-4" />
                    No hay archivos seleccionados.
                  </div>
                ) : (
                  <ul className="space-y-1">
                    {files.map((file, index) => (
                      <li
                        key={`${file.name}-${index}`}
                        className="flex items-center gap-2"
                      >
                        <span className="rounded-full bg-white/5 px-2 py-0.5 text-xs text-base-muted">
                          {index + 1}
                        </span>
                        <span className="truncate text-sm">{file.name}</span>
                        <span className="text-xs text-base-muted">
                          ({formatSize(file.size)})
                        </span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
              <p className="text-xs text-base-muted">{hintText}</p>
            </div>

            <div className="flex flex-wrap items-center gap-3">
              <Button
                onClick={handleMerge}
                disabled={isMerging}
                className="gap-2"
              >
                {isMerging ? (
                  <Loader2 className="h-4 w-4 animate-spin" />
                ) : (
                  <Download className="h-4 w-4" />
                )}
                Combinar y descargar
              </Button>
              <Button
                variant="ghost"
                onClick={resetSelection}
                disabled={isMerging || files.length === 0}
              >
                Limpiar selección
              </Button>
              <Badge variant="muted" className="gap-2">
                <Sparkles className="h-4 w-4 text-accent-blue" />
                Usa pdf-lib en el navegador
              </Badge>
            </div>

            <div className="rounded-lg border border-white/10 bg-white/5 px-4 py-3">
              <div className="flex items-center gap-3">
                <Badge variant={statusBadgeVariant[status.type]}>Estado</Badge>
                <span className={cn("text-sm", statusTone[status.type])}>
                  {status.message}
                </span>
              </div>
            </div>

            {hasDetails && (
              <details className="rounded-lg border border-white/10 bg-base-bg/70 p-4 text-sm text-base-muted">
                <summary className="cursor-pointer text-base-text">
                  Ver detalles de omitidos / errores
                </summary>
                <div className="mt-3 space-y-2">
                  {skipped.length > 0 && (
                    <div>
                      <p className="font-semibold text-base-text">
                        Archivos omitidos:
                      </p>
                      <ul className="ml-4 list-disc space-y-1">
                        {skipped.map((item, index) => (
                          <li key={`${item.name}-${index}`}>
                            <span className="text-base-text">{item.name}</span>:{" "}
                            {item.reason}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                  {failed.length > 0 && (
                    <div>
                      <p className="font-semibold text-base-text">
                        Archivos con error:
                      </p>
                      <ul className="ml-4 list-disc space-y-1">
                        {failed.map((item, index) => (
                          <li key={`${item.name}-${index}`}>
                            <span className="text-base-text">{item.name}</span>:{" "}
                            {item.error}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              </details>
            )}
          </CardContent>
        </Card>

        <Card className="w-full max-w-xl border-white/10 bg-base-surface/80">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-lg">
              <Wand2 className="h-5 w-5 text-accent-mint" />
              Trucos rápidos
            </CardTitle>
            <CardDescription className="text-base-muted">
              Consejos para que la combinación sea más confiable y ligera.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4 text-sm text-base-muted">
            <div className="rounded-lg border border-white/10 bg-white/5 p-3">
              <p className="font-semibold text-base-text">
                Ordena antes de cargar
              </p>
              <p>
                El orden sigue tu selección. Repite la carga si quieres
                reorganizar.
              </p>
            </div>
            <div className="rounded-lg border border-white/10 bg-white/5 p-3">
              <p className="font-semibold text-base-text">Manténlo local</p>
              <p>
                El procesamiento ocurre solo en tu navegador. Ideal para
                documentos sensibles.
              </p>
            </div>
            <div className="rounded-lg border border-white/10 bg-white/5 p-3">
              <p className="font-semibold text-base-text">
                Evita archivos dañados
              </p>
              <p>
                Si un PDF falla o está vacío se omitirá; revisa el panel de
                detalles para más info.
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </main>
  );
}
