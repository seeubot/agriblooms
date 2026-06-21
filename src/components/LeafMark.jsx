// Recurring two-leaf brand motif (PRD §2: "two overlapping leaf shapes, dark + light green").
// This is a placeholder graphic device for dividers/bullets/icons — swap with the
// official vector logo file from AgriBlooms before final design lock (see PRD note).

export default function LeafMark({ size = 40, className = "" }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 64 64"
      className={className}
      aria-hidden="true"
    >
      <path
        d="M30 8C18 14 11 26 14 40c2 9 10 15 19 15 4 0 8-1 11-4-10-2-17-9-19-19-2-9 0-18 5-24z"
        fill="var(--forest)"
      />
      <path
        d="M34 12c10 5 15 16 12 28-2 8-9 13-17 13-3 0-6-1-9-2 9-3 15-11 16-21 1-7-1-13-2-18z"
        fill="var(--sage)"
        opacity="0.92"
      />
    </svg>
  );
}

export function LeafDivider({ className = "" }) {
  return (
    <div className={`leaf-divider ${className}`} aria-hidden="true">
      <span className="leaf-divider-line" />
      <LeafMark size={28} />
      <span className="leaf-divider-line" />
    </div>
  );
}
