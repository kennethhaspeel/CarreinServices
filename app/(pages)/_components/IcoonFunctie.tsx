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
export function CheckBox() {
  return (
    <span
      aria-hidden="true"
      className="flex h-5 w-5 shrink-0 items-center justify-center rounded bg-[#0868ed]"
    >
      <svg
        viewBox="0 0 12 12"
        className="h-3 w-3"
        fill="none"
        stroke="white"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="m2 6 3 3 5-6" />
      </svg>
    </span>
  );
}
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

export function SearchIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg {...iconProps} {...props}>
      <circle cx="21" cy="21" r="13" />
      <path d="m31 31 12 12" />
    </svg>
  );
}

export function BrushIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg {...iconProps} {...props}>
      <path d="m40 6-18 22" />
      <path d="M18 28c-6 0-10 4-10 10 0 3-2 4-4 5 8 3 18 1 22-6 2-4 0-9-8-9Z" />
    </svg>
  );
}

export function SteamIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 64 64"
      fill="none"
      stroke="currentColor"
      strokeWidth="3"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      <path d="M17 42a11 11 0 0 1-1-22 16 16 0 0 1 32 0 11 11 0 0 1-1 22" />
      <path d="M24 33c-4 4 4 6 0 10s4 6 0 10" />
      <path d="M32 33c-4 4 4 6 0 10s4 6 0 10" />
      <path d="M40 33c-4 4 4 6 0 10s4 6 0 10" />
    </svg>
  );
}
export function SparklesIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg {...iconProps} {...props}>
      <path d="M22 6c1 9 5 13 14 14-9 1-13 5-14 14-1-9-5-13-14-14 9-1 13-5 14-14Z" />
      <path d="M38 30c.5 4 2 5.500 6 6-4 .5-5.500 2-6 6-.5-4-2-5.500-6-6 4-.5 5.500-2 6-6Z" />
    </svg>
  );
}

export function CalendarIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg {...iconProps} {...props}>
      <rect x="6" y="9" width="36" height="33" rx="4" />
      <path d="M6 19h36M15 4v9M33 4v9" />
    </svg>
  );
}
export function SprayBottleIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg {...iconProps} {...props}>
      <path d="M22 8h20v7H22z" />
      <path d="M25 15v9l-7 7v25a3 3 0 0 0 3 3h20a3 3 0 0 0 3-3V31l-7-7v-9" />
      <path d="M25 24h12M24 50h14" />
      <path d="M42 11h5M50 11h5M49 6l4-3M49 16l4 3" />
    </svg>
  );
}

export function CleaningToolIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg {...iconProps} {...props}>
      <path d="m14 48 7-7" />
      <path d="m20 43 7 7" />
      <path d="m18 39 19-19 9 9-19 19z" />
      <path d="m25 32 9 9M30 27l9 9M35 22l9 9" />
      <path d="M43 18a8 8 0 0 1 12-10 8 8 0 0 1-10 12" />
      <path d="m12 46-5 5M17 51l-5 5" />
    </svg>
  );
}

export function LeatherIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg {...iconProps} {...props}>
      <path d="M25 5h14c0 8 6 11 14 8l5 10c-12 8-12 23 0 33l-5 9c-9-4-16-2-21 5-5-7-12-9-21-5l-5-9c12-10 12-25 0-33l5-10c8 3 14 0 14-8Z" />
    </svg>
  );
}

export function StoelIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...iconProps}
      {...props}
      viewBox="0 0 120 160"
      fill="none"
      aria-label="Illustratie van een stoel"
      role="img"
    >
      <g stroke="currentColor" strokeWidth="5" strokeLinecap="round">
        <path d="M37 68 42 21 Q44 8 58 8 H76 Q89 8 88 22 L84 72" />
        <path d="M26 76 Q32 69 55 69 H85 Q91 69 87 76 Q82 85 60 86 H35 Q23 85 22 80 Q21 78 26 76Z" />
        <path d="M33 84 21 151 M49 86 48 154 M76 84 93 151 M86 80 105 145" />
      </g>
    </svg>
  );
}
export function DiamondIcon(props: SVGProps<SVGSVGElement>) {
  return (
<svg {...iconProps} {...props} viewBox="0 0 80 80">
      <path
        d="M23 30L31 20H49L57 30L40 56L23 30Z"
        fill="#F8FAFC"
        stroke="#F8FAFC"
        strokeWidth={1.5}
        strokeLinejoin="round"
      />
      <path
        d="M23 30H57M31 20L35 30L40 56L45 30L49 20M35 30H45"
        stroke="#071521"
        strokeWidth={1.5}
        strokeLinejoin="round"
      />
    </svg>
  );
}
export function SmellIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg {...iconProps} {...props}>
      <g
    stroke="#F8FAFC"
    stroke-width="2.8"
    stroke-linecap="round"
    stroke-linejoin="round"
  >
    <path d="M15 38c6-6 6-12 1-17-4-4-3-9 1-13" />
    <path d="M24 40c6-6 6-12 1-17-4-4-3-9 1-13" />
    <path d="M33 38c6-6 6-12 1-17-4-4-3-9 1-13" />
  </g>
    </svg>
  );
}

export function CarIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg {...iconProps} {...props} viewBox="0 0 48 48" fill="none">
<g
    stroke="#F8FAFC"
    stroke-width="2.4"
    stroke-linecap="round"
    stroke-linejoin="round"
  >
    <path d="M12 17 15.8 8.8A3.5 3.5 0 0 1 19 7h10a3.5 3.5 0 0 1 3.2 1.8L36 17c2.8.4 4.5 2.5 4.5 5.2v9.2a3 3 0 0 1-3 3h-2.3l-1.4-3H14.2l-1.4 3h-2.3a3 3 0 0 1-3-3v-9.2c0-2.7 1.7-4.8 4.5-5.2Z" />
    <path d="m15 17 2.5-6h13l2.5 6M8.5 25h5m21 0h5" />
    <circle cx="15" cy="23" r="2" />
    <circle cx="33" cy="23" r="2" />
  </g>
    </svg>
  );
}
export function MoneyIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg {...iconProps} {...props} viewBox="0 0 48 48" fill="none" >
      <g
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <ellipse cx="30" cy="12" rx="8" ry="3.5" />
        <path d="M22 12v6c0 2 3.6 3.5 8 3.5s8-1.5 8-3.5v-6" />
        <path d="M22 18v6c0 2 3.6 3.5 8 3.5s8-1.5 8-3.5v-6" />
        <path d="M30 33.5c4.4 0 8-1.5 8-3.5v-6" />
        <ellipse cx="18" cy="24" rx="8" ry="3.5" />
        <path d="M10 24v6c0 2 3.6 3.5 8 3.5s8-1.5 8-3.5v-6" />
        <path d="M10 30v6c0 2 3.6 3.5 8 3.5s8-1.5 8-3.5v-6" />
      </g>
    </svg>
  );
}