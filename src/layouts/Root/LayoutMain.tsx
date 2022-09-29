import { PropsWithChildren } from "react";
import { Root } from "./LayoutMain.styled";

export const LayoutMain = ({ children }: PropsWithChildren<unknown>) => {
  return <Root>{children}</Root>;
};
