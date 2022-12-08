import { HTMLProps } from "react";

export interface IInputProps extends HTMLProps<HTMLInputElement>{
  value: string;
  error?: string;
  onChange(e: React.ChangeEvent<HTMLInputElement>): void;
  onBlur?(e?: React.FocusEvent<HTMLInputElement>): void;
  onFocus?(e?: React.FocusEvent<HTMLInputElement>): void;
}
