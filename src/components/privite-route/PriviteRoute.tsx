import { Navigate } from "react-router-dom";
import { AppRoute, AuthStatus } from "../../utils/const";

type PrivateRouteProps = {
  authStatus: AuthStatus;
  children: JSX.Element;
}

export default function PriviteRoute({authStatus, children}: PrivateRouteProps):JSX.Element{
  return(
    authStatus === AuthStatus.Auth
      ? children
      : <Navigate to={AppRoute.auth} />
  )
}
