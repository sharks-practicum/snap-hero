import { HTMLProps } from "react";

export interface IInputProps extends HTMLProps<HTMLInputElement>{
  value: string;
  error?: string;
  showType: "primary"|"secondary";
  onChange(e: React.ChangeEvent<HTMLInputElement>): void;
}
