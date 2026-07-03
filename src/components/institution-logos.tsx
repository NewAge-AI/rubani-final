import type { SVGProps } from "react";

type ActualLogoProps = SVGProps<SVGSVGElement> & {
  alt: string;
  objectPosition?: string;
  src: string;
};

function ActualLogo({
  alt,
  className,
  objectPosition,
  src,
}: ActualLogoProps) {
  return (
    <img
      alt={alt}
      className={`dark:grayscale dark:invert object-contain opacity-75 ${className ?? ""}`}
      decoding="async"
      loading="lazy"
      style={objectPosition ? { objectPosition } : undefined}
      src={src}
    />
  );
}

function ActualLogoIcon({ alt, className, objectPosition, src }: ActualLogoProps) {
  return (
    <img
      alt={alt}
      className={`dark:grayscale dark:invert object-cover opacity-75 ${className ?? ""}`}
      decoding="async"
      loading="lazy"
      style={{ objectPosition: objectPosition ?? "left center" }}
      src={src}
    />
  );
}

export function BankOfKigaliLogo(props: SVGProps<SVGSVGElement>) {
  return (
    <ActualLogo
      {...props}
      alt="Bank of Kigali logo"
      src="/logos/institutions/bank-of-kigali.png"
    />
  );
}

export function EquityBankLogo(props: SVGProps<SVGSVGElement>) {
  return (
    <ActualLogo
      {...props}
      alt="Equity Bank logo"
      src="/logos/institutions/equity.png"
    />
  );
}

export function SafaricomMpesaLogo(props: SVGProps<SVGSVGElement>) {
  return (
    <ActualLogo
      {...props}
      alt="M-PESA logo"
      src="/logos/institutions/mpesa.svg"
    />
  );
}

export function SafaricomMpesaIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <ActualLogoIcon
      {...props}
      alt="M-PESA logo icon"
      src="/logos/institutions/mpesa.svg"
    />
  );
}

export function KenyaRevenueAuthorityLogo(props: SVGProps<SVGSVGElement>) {
  return (
    <ActualLogo
      {...props}
      alt="Kenya Revenue Authority logo"
      src="/logos/institutions/kra.webp"
    />
  );
}

export function KenyaRevenueAuthorityIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <ActualLogoIcon
      {...props}
      alt="Kenya Revenue Authority logo icon"
      src="/logos/institutions/kra.webp"
    />
  );
}

export function ECitizenLogo(props: SVGProps<SVGSVGElement>) {
  return (
    <ActualLogo
      {...props}
      alt="eCitizen logo"
      src="/logos/institutions/ecitizen.png"
    />
  );
}

export function ECitizenIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <ActualLogoIcon
      {...props}
      alt="eCitizen logo icon"
      objectPosition="left center"
      src="/logos/institutions/ecitizen.png"
    />
  );
}

export function IprsLogo(props: SVGProps<SVGSVGElement>) {
  return (
    <ActualLogo
      {...props}
      alt="IPRS government services logo"
      src="/logos/institutions/iprs.png"
    />
  );
}

export function IprsIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <ActualLogoIcon
      {...props}
      alt="IPRS government services logo icon"
      objectPosition="left center"
      src="/logos/institutions/iprs.png"
    />
  );
}

export function MtnLogo(props: SVGProps<SVGSVGElement>) {
  return (
    <ActualLogo
      {...props}
      alt="MTN logo"
      src="/logos/institutions/mtn.svg"
    />
  );
}

export function MtnIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <ActualLogo
      {...props}
      alt="MTN logo icon"
      src="/logos/institutions/mtn.svg"
    />
  );
}

export function PostgreSqlLogo(props: SVGProps<SVGSVGElement>) {
  return (
    <ActualLogo
      {...props}
      alt="PostgreSQL logo"
      src="/logos/institutions/postgresql.svg"
    />
  );
}

export function PostgreSqlIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <ActualLogo
      {...props}
      alt="PostgreSQL logo icon"
      src="/logos/institutions/postgresql.svg"
    />
  );
}

export function TemenosLogo(props: SVGProps<SVGSVGElement>) {
  return (
    <ActualLogo
      {...props}
      alt="Temenos logo"
      src="/logos/institutions/temenos.svg"
    />
  );
}

export function TemenosIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <ActualLogoIcon
      {...props}
      alt="Temenos logo icon"
      src="/logos/institutions/temenos.svg"
    />
  );
}

export function SapLogo(props: SVGProps<SVGSVGElement>) {
  return (
    <ActualLogo
      {...props}
      alt="SAP logo"
      src="/logos/institutions/sap.svg"
    />
  );
}

export function SapIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <ActualLogo
      {...props}
      alt="SAP logo icon"
      src="/logos/institutions/sap.svg"
    />
  );
}
