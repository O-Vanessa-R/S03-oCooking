import { ReactNode, useState } from "react";

interface ErrorProps {
  fallback: ReactNode;
  children: ReactNode;
}

const ErrorBoundaryComponent = ({ fallback, children }: ErrorProps) => {
  const [hasError, setHasError] = useState(false);

  const componentDidCatch = () => {};

  return <>{hasError ? fallback : children}</>;
};
