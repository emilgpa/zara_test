import { PropsWithChildren } from "react";

export const TableRow = ({ children }: PropsWithChildren<unknown>) => {
  return <tr>{children}</tr>;
};
