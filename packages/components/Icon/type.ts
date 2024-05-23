import type {  } from 'vue'

type IconTpe = "primary" | "success" | "warning" | "danger" | "info"

type IconSize = "2xs"| "xs"| "sm"| "lg"| "xl"| "2xl"| "1x"| "2x"| "3x"| "4x"| "5x"| "6x"| "7x"| "8x"| "9x"| "10x"

export interface IconProps {
  border?: boolean;
  fixedWidth?: boolean;
  flip?: "horizontal" | "vertical" | "both";
  icon: object | Array<string> | string ;
  mask?: object | Array<string> | string;
  listItem?: boolean;
  pull?: "right" | "left";
  pulse?: boolean;
  rotation?: 90 | 180 | 270 | "90" | "180" | "270";
  swapOpacity?: boolean;
  size?: IconSize,
  spin?: boolean;
  transform?: object | string;
  symbol?: boolean | string;
  title?: string;
  inverse?: boolean;
  bounce?: boolean;
  shake?: boolean;
  beat?: boolean;
  fade?: boolean;
  beatFade?: boolean;
  spinPulse?: boolean;
  spinReverse?: boolean;
  type?: IconTpe;
  color?: string;
}