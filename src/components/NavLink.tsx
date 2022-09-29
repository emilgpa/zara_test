import { forwardRef } from "react";
import {
  Link as RRLink,
  LinkProps,
  useLinkClickHandler,
} from "react-router-dom";
import { useRouteNavigateContext } from "../contexts/RouteNavigateContext";

interface NavLinkBaseProps {
  to: string;
}
type NavLinkProps = LinkProps &
  Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, "href" | "onClick">;

export const NavLink = forwardRef<HTMLAnchorElement, NavLinkProps>(
  ({ replace, state, target, to, children, ...rest }, ref) => {
    const { startTransition } = useRouteNavigateContext();
    const innerOnClick = useLinkClickHandler(to, { replace, state, target });

    return (
      <RRLink
        to={to}
        onClick={(e) => {
          e.preventDefault();
          startTransition(() => innerOnClick(e));
        }}
        ref={ref}
        replace={replace}
        state={state}
        target={target}
        {...rest}
      >
        {children}
      </RRLink>
    );
  }
);
