import React from "react";
import { Root } from "./Layout.styled";
import { LayoutHeader } from "./LayoutHeader";
import { LayoutMain } from "./LayoutMain";

export const Layout = ({ children }: React.PropsWithChildren<unknown>) => {
  return (
    <Root>
      <LayoutHeader />
      <LayoutMain>{children}</LayoutMain>
    </Root>
  );
};
