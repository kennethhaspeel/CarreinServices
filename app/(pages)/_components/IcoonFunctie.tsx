import type { SVGProps } from "react";

const iconProps: SVGProps<SVGSVGElement> = {
  width: 64,
  height: 64,
  viewBox: "0 0 48 48",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2.5,
  strokeLinecap: "round",
  strokeLinejoin: "round",
  "aria-hidden": true,
};
export function StarIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg {...iconProps} {...props}>
      <path d="m24 4 6 13 14 2-10 10 3 14-13-7-13 7 3-14L4 19l14-2 6-13Z" />
    </svg>
  );
}

export function HeartIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg {...iconProps} {...props}>
      <path d="M24 42S5 30 5 17a10 10 0 0 1 19-4 10 10 0 0 1 19 4c0 13-19 25-19 25Z" />
    </svg>
  );
}

export function UsersIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg {...iconProps} {...props}>
      <circle cx="24" cy="15" r="6" />
      <circle cx="10" cy="20" r="4.5" />
      <circle cx="38" cy="20" r="4.5" />
      <path d="M12 40c0-7 5-12 12-12s12 5 12 12" />
      <path d="M2 36c0-5 3-8 8-8M46 36c0-5-3-8-8-8" />
    </svg>
  );
}

export function GearIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg {...iconProps} {...props}>
      <circle cx="24" cy="24" r="7" />
      <path d="M24 4v6M24 38v6M4 24h6M38 24h6M9.9 9.9l4.2 4.2M33.9 33.9l4.2 4.2M9.9 38.1l4.2-4.2M33.9 14.1l4.2-4.2" />
      <circle cx="24" cy="24" r="14" />
    </svg>
  );
}

export function TrophyIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg {...iconProps} {...props}>
      <path d="M14 6h20v12a10 10 0 0 1-20 0V6Z" />
      <path d="M14 10H6c0 8 3 12 9 13M34 10h8c0 8-3 12-9 13" />
      <path d="M24 28v8M16 42h16M18 36h12" />
    </svg>
  );
}

export function HandshakeIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg {...iconProps} {...props}>
      <path d="M2 18l10-4 8 2-8 8 8 10c2 2 5 1 6-1l-6-7 6-5 8 8c2 2 5 1 5-1" />
      <path d="M46 18l-10-4-8 2-6 4M2 18v14M46 18v14" />
    </svg>
  );
}

export function PinIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg {...iconProps} {...props}>
      <path d="M24 44S8 30 8 19a16 16 0 0 1 32 0c0 11-16 25-16 25Z" />
      <circle cx="24" cy="19" r="5.5" />
    </svg>
  );
}

export function WhatsAppIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg {...iconProps} {...props}>
      <path d="M6 42l3-10a18 18 0 1 1 7 7L6 42Z" />
      <path d="M18 17c0 7 6 13 13 13l2-3-4-2-2 2c-3-1-5-3-6-6l2-2-2-4-3 2Z" />
    </svg>
  );
}
export function LeafIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg {...iconProps} {...props}>
      <path d="M7 36C3 23 10 14 23 12c8-1 13-3 17-6 2 17-2 29-15 33-5 2-10 1-13-1" />
      <path d="M5 42c8-10 17-17 27-23" />
    </svg>
  );
}

export function ShieldIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg {...iconProps} {...props}>
      <path d="M24 4c5 5 10 7 17 7v12c0 10-6 16-17 21C13 39 7 33 7 23V11c7 0 12-2 17-7Z" />
    </svg>
  );
}

export function HomeIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg {...iconProps} {...props}>
      <path d="M4 23 24 5l20 18" />
      <path d="M9 20v23h11V31h8v12h11V20" />
    </svg>
  );
}

export function ClockIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg {...iconProps} {...props}>
      <circle cx="24" cy="24" r="20" />
      <path d="M24 12v13l10 4" />
    </svg>
  );
}