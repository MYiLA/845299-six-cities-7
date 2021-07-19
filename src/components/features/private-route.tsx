/* eslint-disable react/jsx-props-no-spreading */
import { ReactElement } from 'react';
import { Redirect, Route } from 'react-router';
import { PrivateRouteParams } from './types';

export default function PrivateRoute(
  { isAuth, authPath, ...routeProps }: PrivateRouteParams,
): ReactElement {
  if (isAuth) {
    return <Route {...routeProps} />;
  }
  return <Redirect to={{ pathname: authPath }} />;
}
