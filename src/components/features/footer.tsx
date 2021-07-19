import { ReactElement } from 'react';
import { Link } from 'react-router-dom';
import { AppRoute } from '../../const';
import { getRoute } from '../../utils/common';

function Footer(): ReactElement {
  return (
    <footer className="footer container">
      <Link className="footer__logo-link" to={getRoute(AppRoute.DEFAULT_CITY)}>
        <img className="footer__logo" src="img/logo.svg" alt="6 cities logo" width={64} height={33} />
      </Link>
    </footer>
  );
}

export default Footer;
