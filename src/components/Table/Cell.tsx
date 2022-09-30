import { PropsWithChildren } from "react";

export const TableCell = ({ children }: PropsWithChildren<unknown>) => {
  return <td>{children}</td>;
};
