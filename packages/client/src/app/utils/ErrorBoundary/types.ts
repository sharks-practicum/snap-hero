import { ErrorInfo } from "react";

export interface IErrorBoundaryState {
  error: Error | null;
  errorInfo: ErrorInfo | null;
}
export interface IErrorBoundaryProps {
  children: JSX.Element,
}
