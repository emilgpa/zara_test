import { PropsWithChildren } from "react";

export const TableHeadCell = ({ children }: PropsWithChildren<unknown>) => {
  return <th>{children}</th>;
};
