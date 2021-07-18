/* eslint-disable react/jsx-props-no-spreading */
import { ReactElement } from 'react';
import { Redirect, Route, RouteProps } from 'react-router';

export type PrivateRouteParams = {
  isAuth: boolean;
  authPath: string;
} & RouteProps;

export default function PrivateRoute(
  { isAuth, authPath, ...routeProps }: PrivateRouteParams,
): ReactElement {
  if (isAuth) {
    return <Route {...routeProps} />;
  }
  return <Redirect to={{ pathname: authPath }} />;
}
