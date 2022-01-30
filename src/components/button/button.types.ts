import { MouseEventHandler } from "react";

export interface ButtonProps{
  text?: string,
  primary?: boolean,
  disables?: boolean,
  size?: "small" | "medium" | "large",
  onClick?: MouseEventHandler<HTMLButtonElement>

}