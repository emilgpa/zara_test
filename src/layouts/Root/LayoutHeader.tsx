import { useRouteNavigateContext } from "../../contexts/RouteNavigateContext";
import {
  Header,
  LinkHome,
  LoadingRouteIndicator,
  WrapperIndicator,
} from "./LayoutHeader.styled";

export const LayoutHeader = () => {
  const { isRouteLoading } = useRouteNavigateContext();
  return (
    <Header>
      <LinkHome to="/">Podcaster</LinkHome>
      <WrapperIndicator>
        {isRouteLoading && <LoadingRouteIndicator />}
      </WrapperIndicator>
    </Header>
  );
};
