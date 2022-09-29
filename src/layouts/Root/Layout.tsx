import React from "react";
import styled from "styled-components";
import { LayoutHeader } from "./LayoutHeader";
import { LayoutMain } from "./LayoutMain";

const Root = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  margin: auto;
`;

export const Layout = ({ children }: React.PropsWithChildren<unknown>) => {
  return (
    <Root>
      <LayoutHeader />
      <LayoutMain>{children}</LayoutMain>
    </Root>
  );
};
