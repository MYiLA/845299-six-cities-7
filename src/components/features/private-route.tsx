import { Redirect, Route, RouteProps } from 'react-router';

export type PrivateRouteParams = {
  isAuth: boolean;
  authPath: string;
} & RouteProps;

export default function PrivateRoute({isAuth, authPath, ...routeProps}: PrivateRouteParams) {
  if(isAuth) {
    return <Route {...routeProps} />;
  } else {
    return <Redirect to={{ pathname: authPath }} />;
  }
};
