type BlockProps = {
  label: string;
  accent?: 'mint' | 'blue';
};

export function DiagramBlock({ label, accent = 'mint' }: BlockProps) {
  const fill = accent === 'mint' ? '#5fe3c0' : '#7aa2ff';
  const stroke = '#1b2237';
  return (
    <svg width="180" height="72" viewBox="0 0 180 72" role="img" aria-label={label}>
      <rect
        x="4"
        y="4"
        width="172"
        height="64"
        rx="12"
        fill="rgba(255,255,255,0.04)"
        stroke={stroke}
        strokeWidth="2"
      />
      <text
        x="90"
        y="40"
        textAnchor="middle"
        fontFamily="var(--font-display, 'Space Grotesk', sans-serif)"
        fontSize="14"
        fontWeight="600"
        fill={fill}
      >
        {label}
      </text>
    </svg>
  );
}

type ArrowProps = {
  from?: string;
  to?: string;
};

export function DiagramArrow({ from, to }: ArrowProps) {
  const label = [from, to].filter(Boolean).join(' → ');
  return (
    <svg width="60" height="72" viewBox="0 0 60 72" role="img" aria-label={label}>
      <defs>
        <marker id="arrowhead" markerWidth="8" markerHeight="8" refX="4" refY="4" orient="auto">
          <polygon points="0 0, 8 4, 0 8" fill="#7aa2ff" />
        </marker>
      </defs>
      <line
        x1="12"
        y1="36"
        x2="48"
        y2="36"
        stroke="#7aa2ff"
        strokeWidth="3"
        markerEnd="url(#arrowhead)"
      />
    </svg>
  );
}
