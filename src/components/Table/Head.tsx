import { PropsWithChildren } from "react";

export const TableHead = ({ children }: PropsWithChildren<unknown>) => {
  return <thead>{children}</thead>;
};
