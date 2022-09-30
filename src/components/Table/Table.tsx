import { PropsWithChildren } from "react";

export const Table = ({ children }: PropsWithChildren<unknown>) => {
  return <table>{children}</table>;
};
