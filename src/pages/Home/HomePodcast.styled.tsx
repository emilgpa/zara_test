import styled from "styled-components";
import { NavLink } from "../../components/NavLink/NavLink";

export const Root = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  grid-gap: 16px;
`;

export const Image = styled.img`
  border-radius: 100%;
  width: fit-content;
`;

export const Title = styled.span`
  font-size: 12px;
  text-align: center;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-decoration: none;

  &:visited {
    text-decoration: none;
  }
  &:hover {
    color: white;
  }
`;

export const LinkStyled = styled(NavLink)`
  text-decoration: none;
`;
