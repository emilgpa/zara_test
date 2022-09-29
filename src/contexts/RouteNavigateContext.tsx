import {
  createContext,
  PropsWithChildren,
  useContext,
  useTransition,
} from "react";
import { useNavigate } from "react-router-dom";

interface RouteNavigateContextProps {
  navigate: ReturnType<typeof useNavigate>;
  isRouteLoading: boolean;
  startTransition: React.TransitionStartFunction;
}

const RouteNavigateContext = createContext<
  RouteNavigateContextProps | undefined
>(undefined);

/**
 * NavigationProvider provides startTransition for routes via anchor
 * @param param0
 * @returns
 */
export const RouteNavigateProvider = ({
  children,
}: PropsWithChildren<unknown>) => {
  const navigate = useNavigate();
  const [isPending, startTransition] = useTransition();

  const ctx: RouteNavigateContextProps = {
    navigate,
    startTransition,
    isRouteLoading: isPending,
  };

  return (
    <RouteNavigateContext.Provider value={ctx}>
      {children}
    </RouteNavigateContext.Provider>
  );
};

export const useRouteNavigateContext = () => {
  const ctx = useContext(RouteNavigateContext);
  if (!ctx) {
    throw new TypeError("the RouteNavigateContext is mandatory");
  }
  return ctx;
};
