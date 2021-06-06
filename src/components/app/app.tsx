import React from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import { AppRoute } from '../../const';
import MainPage from '../pages/main';
import FavoritesPage from '../pages/favorites';
import RoomPage from '../pages/room';
import SignInPage from '../pages/sign-in';
import NotFoundPage from '../pages/not-found';
import { PageMainProps } from '../pages/types';

export default function App({ cardCount, placesToStay }: PageMainProps): React.ReactElement {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path={AppRoute.MAIN}>
          <MainPage
            cardCount={cardCount}
            placesToStay={placesToStay}
          />
        </Route>
        <Route exact path={AppRoute.FAVORITES}>
          <FavoritesPage />
        </Route>
        <Route exact path={AppRoute.LOGIN}>
          <SignInPage />
        </Route>
        <Route exact path={AppRoute.OFFER}>
          <RoomPage />
        </Route>
        <Route>
          <NotFoundPage />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}
