type CompanyLogoProps = {
  companyId: 'fullstack-labs' | 'pluriza' | 'idi';
  size?: number;
};

export function CompanyLogo({ companyId, size = 32 }: CompanyLogoProps) {
  const common = {
    width: size,
    height: size,
    viewBox: '0 0 64 64',
    role: 'img'
  };

  if (companyId === 'fullstack-labs') {
    return (
      <svg {...common} aria-label="Fullstack Labs">
        <rect x="6" y="6" width="52" height="52" rx="12" fill="none" stroke="#5fe3c0" strokeWidth="4" />
        <path d="M16 20h20v8H16zM16 34h28v8H16zM16 48h16v8H16z" fill="#7aa2ff" />
      </svg>
    );
  }

  if (companyId === 'pluriza') {
    return (
      <svg {...common} aria-label="Pluriza">
        <circle cx="22" cy="32" r="14" fill="none" stroke="#7aa2ff" strokeWidth="4" />
        <circle cx="42" cy="24" r="10" fill="none" stroke="#5fe3c0" strokeWidth="4" />
        <circle cx="42" cy="44" r="10" fill="none" stroke="#5fe3c0" strokeWidth="4" />
      </svg>
    );
  }

  return (
    <svg {...common} aria-label="Fundación IDI">
      <rect x="10" y="10" width="44" height="44" rx="8" fill="none" stroke="#7aa2ff" strokeWidth="4" />
      <path d="M18 46c4-8 8-12 14-12s10 4 14 12" fill="none" stroke="#5fe3c0" strokeWidth="4" />
      <circle cx="32" cy="26" r="6" fill="#5fe3c0" />
    </svg>
  );
}
