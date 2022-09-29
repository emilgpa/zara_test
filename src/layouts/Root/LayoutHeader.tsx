import styled from "styled-components";
import { NavLink } from "../../components/NavLink";
import { useRouteNavigateContext } from "../../contexts/RouteNavigateContext";

export const HeaderHeight = 86;

const Header = styled.header`
  position: fixed;
  top: 0;
  display: flex;
  justify-content: center;
  width: 100%;
  max-width: 820px;
  height: ${HeaderHeight}px;
  padding: 20px 0 0;
  background-color: #242424;
  z-index: 1;
`;

const LinkHome = styled(NavLink)`
  text-transform: uppercase;
  text-decoration: none;
  font-weight: 700;
  border: 1px solid white;
  height: fit-content;
  padding: 4px 8px;

  &:hover {
    color: white;
  }
`;

const WrapperIndicator = styled.div`
  position: absolute;
  right: 0;
`;

const RouteLoadingIndicator = styled.div`
  width: 25px;
  height: 25px;
  border-radius: 100%;
  border: 2px solid #0c8dde;
  background-color: #48a3ed;
`;

export const LayoutHeader = () => {
  const { isRouteLoading } = useRouteNavigateContext();
  return (
    <Header>
      <LinkHome to="/">Podcaster</LinkHome>
      <WrapperIndicator>
        {isRouteLoading && <RouteLoadingIndicator />}
      </WrapperIndicator>
    </Header>
  );
};
