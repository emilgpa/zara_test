import styled from "styled-components";
import { NavLink } from "../../components/NavLink/NavLink";
import { HeaderHeight } from "../Root/LayoutHeader.styled";

export const Root = styled.div`
  display: grid;
  grid-template-columns: 250px auto;
  margin: auto;
  max-width: 820px;
  margin: auto;
  gap: 32px;
`;

export const Aside = styled.aside`
  display: flex;
  flex-direction: column;
  align-items: center;

  position: sticky;
  top: ${HeaderHeight}px;
  height: fit-content;

  gap: 16px;
`;

export const Logo = styled.img`
  width: fit-content;
  display: block;
`;

export const ChannelLink = styled(NavLink)`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-decoration: none;
`;

export const Title = styled.span`
  text-align: center;
  font-size: 16px;
`;

export const Author = styled.span`
  text-align: center;
  font-size: 14px;
`;

export const Description = styled.div`
  text-align: center;
`;
