
import { ReactElement } from 'react';
import { Link } from 'react-router-dom';
import { AppRoute } from '../../const';
import { useLogin } from '../../hooks/selectors/use-login';
import { api } from '../../services/rtk-api';
import { getRoute } from '../../utils/common';

function Header(): ReactElement {
  const { data, isAuth } = useLogin()
  const [deleteLogout] = api.endpoints.deleteLogout.useMutation();

  const onSignOut = () => {
    const apiResult = deleteLogout();
    apiResult.unwrap().then(() => {
      sessionStorage.removeItem('token')
    })
    .catch(({response}) => {
      throw new Error(response.error);
    })
  }

  const avatarStyles = {
    backgroundImage: `url(${data?.avatarUrl})`,
 } as React.CSSProperties;

  return (
    <header className="header">
      <div className="container">
        <div className="header__wrapper">
          <div className="header__left">
            <Link className="header__logo-link header__logo-link--active" to={getRoute(AppRoute.DEFAULT_CITY)}>
              <img className="header__logo" src="img/logo.svg" alt="6 cities logo" width={81} height={41} />
            </Link>
          </div>
          <nav className="header__nav">
            <ul className="header__nav-list">
              {(isAuth &&
              <li className="header__nav-item user">
                <Link className="header__nav-link header__nav-link--profile" to={getRoute(AppRoute.FAVORITES)}>
                  <div className="header__avatar-wrapper user__avatar-wrapper" style={avatarStyles} />
                  <span className="header__user-name user__name">{data?.email}</span>
                </Link>
              </li>
              )}
              <li className="header__nav-item">
                {(isAuth &&
                <Link className="header__nav-link" to={getRoute(AppRoute.DEFAULT_CITY)} onClick={onSignOut}>
                  <span className="header__signout">Sign out</span>
                </Link>
                )}
                {(!isAuth &&
                <Link className="header__nav-link" to={getRoute(AppRoute.LOGIN)}>
                  <span className="header__signout">Sign in</span>
                </Link>
                )}
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}

export default Header;
