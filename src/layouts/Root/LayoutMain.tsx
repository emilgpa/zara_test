import { PropsWithChildren } from "react";
import styled from "styled-components";
import { HeaderHeight } from "./LayoutHeader";

const Root = styled.main`
  padding-top: ${HeaderHeight}px;
  padding-bottom: 50px;
  width: 100%;
`;

export const LayoutMain = ({ children }: PropsWithChildren<unknown>) => {
  return <Root>{children}</Root>;
};
