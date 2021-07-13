import { ReactElement } from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import { AppRoute } from '../../const';
import { getRoute } from '../../utils/common';
import MainPage from '../pages/main';
import FavoritesPage from '../pages/favorites';
import RoomPage from '../pages/room';
import SignInPage from '../pages/sign-in';
import NotFoundPage from '../pages/not-found';
import PrivateRoute from '../features/private-route';
import { useLogin } from '../../hooks/selectors/use-login';

function App(): ReactElement {
  const { isAuth } = useLogin()

  return (
    <>
    <BrowserRouter>
      <Switch>
        <PrivateRoute isAuth={isAuth} authPath={getRoute(AppRoute.LOGIN)} path={getRoute(AppRoute.FAVORITES)} >
          <FavoritesPage />
        </PrivateRoute>
        <Route exact path={getRoute(AppRoute.LOGIN)}>
          <SignInPage />
        </Route>
        <Route exact path={`${getRoute(AppRoute.OFFER)}/:id`}>
          <RoomPage />
        </Route>
        <Route exact path={`${getRoute(AppRoute.MAIN)}:city?`}>
          <MainPage />
        </Route>
        <Route>
          <NotFoundPage />
        </Route>
      </Switch>
    </BrowserRouter>
    </>
  );
}

export default App;
