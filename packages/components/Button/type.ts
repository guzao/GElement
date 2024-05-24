import type { Component, Ref } from "vue"

export type NativeType = "button" | "submit" | "reset"

export type ButtonSize = "default" | "large" | "small"

export type ButtonType = "primary" | "success" | "warning" | "danger" | "info"

export interface ButtonProps {
  tag?: string | Component;
  type?: ButtonType;
  size?: ButtonSize;
  plain?: boolean;
  round?: boolean;
  text?: boolean;
  circle?: boolean;
  disabled?: boolean;
  autofocus?: boolean;
  nativeType?: NativeType;
  icon?: string;
  loading?: boolean;
  loadingIcon?: string;
  useThrottle?: boolean;
  throttleDuration?: number;
}

export interface ButtonEmtis {
  (event: 'click', value: MouseEvent): void
} 

export interface ButtonInstance {
  ref: Ref<HTMLButtonElement | void>
}