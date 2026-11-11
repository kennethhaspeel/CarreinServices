import { ComponentType, SVGProps } from "react";

export type Icoon = {
  icon: ComponentType<SVGProps<SVGSVGElement>>;
  titel: string;
  omschrijving: string;
};