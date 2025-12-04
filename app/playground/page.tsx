"use client";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Link from "next/link";

export default function Playground() {
  return (
    <main className="min-h-screen bg-page-gradient bg-grid">
      <section className="py-16 md:py-20">
        <div className="max-w-5xl mx-auto px-4 flex flex-col gap-6">
          <div className="grid gap-6 grid-cols-1 md:grid-cols-2 xl:grid-cols-3">
            <Card className="flex flex-col gap-4">
              <CardHeader className="flex flex-col gap-3">
                <div className="flex items-center gap-3">
                  <div>
                    <CardTitle>PDF Util</CardTitle>
                    <CardDescription>
                      Merge multiple PDF documents into one
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="flex flex-col gap-4">
                <p className="text-base text-base-muted">
                  Have you ever had the urge to merge multiple PDF documents
                  into one?
                </p>
                <div className="pt-2">
                  <Link href="/pdf-util" className="inline-flex">
                    <Button variant="ghost" size="md">
                      Go to PDF Util
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </main>
  );
}
