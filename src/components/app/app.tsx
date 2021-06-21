import React from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import { AppRoute } from '../../const';
import MainPage from '../pages/main';
import FavoritesPage from '../pages/favorites';
import RoomPage from '../pages/room';
import SignInPage from '../pages/sign-in';
import NotFoundPage from '../pages/not-found';
import { AppProps } from './types';

export default function App({ hotels }: AppProps): React.ReactElement {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path={AppRoute.MAIN}>
          <MainPage
            hotelsData={hotels}
          />
        </Route>
        <Route exact path={AppRoute.FAVORITES}>
          <FavoritesPage
            hotelsData={hotels.filter((item) => item.isFavorite)}
          />
        </Route>
        <Route exact path={AppRoute.LOGIN}>
          <SignInPage />
        </Route>
        <Route exact path={`${AppRoute.OFFER}/:id`}>
          <RoomPage
            hotelsData={hotels}
          />
        </Route>
        <Route>
          <NotFoundPage />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}
