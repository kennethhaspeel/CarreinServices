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