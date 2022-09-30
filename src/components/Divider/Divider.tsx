import styled, { css } from "styled-components";

const Root = styled.div<DividerProps>(({ direction, color }) => {
  if (direction === "h") {
    return css`
      width: 100%;
      border-top: 1px solid ${color};
    `;
  }
  if (direction === "v") {
    return css`
      height: 100%;
      border-right: 1px solid ${color};
    `;
  }
  return ``;
});

interface DividerProps {
  direction: "h" | "v";
  color: string;
}

export const Divider = ({ direction, color }: DividerProps) => {
  return <Root direction={direction} color={color} />;
};
