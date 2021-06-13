import React from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import { AppRoute } from '../../const';
import MainPage from '../pages/main';
import FavoritesPage from '../pages/favorites';
import RoomPage from '../pages/room';
import SignInPage from '../pages/sign-in';
import NotFoundPage from '../pages/not-found';
import { AppProps } from './types';

export default function App({ hotelsData }: AppProps): React.ReactElement {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path={AppRoute.MAIN}>
          <MainPage
            hotelsData={hotelsData}
          />
        </Route>
        <Route exact path={AppRoute.FAVORITES}>
          <FavoritesPage
            hotelsData={hotelsData.filter((item) => item.isFavorite)}
          />
        </Route>
        <Route exact path={AppRoute.LOGIN}>
          <SignInPage />
        </Route>
        <Route exact path={AppRoute.OFFER}>
          <RoomPage
            hotelsData={hotelsData}
          />
        </Route>
        <Route>
          <NotFoundPage />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}
