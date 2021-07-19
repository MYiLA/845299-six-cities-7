import { ReactElement } from 'react';
import { Link } from 'react-router-dom';
import { AppRoute } from '../../const';
import { getRoute } from '../../utils/common';

function NotFound(): ReactElement {
  return (
    <div className="page page--gray page--login">
      <main className="page__main page__main--login">
        <div className="page__login-container container">
          <section className="login">
            <h1>404 Not Found</h1>
            <Link className="form__submit button" to={getRoute(AppRoute.DEFAULT_CITY)}>Go back</Link>
          </section>
        </div>
      </main>
    </div>
  );
}

export default NotFound;
