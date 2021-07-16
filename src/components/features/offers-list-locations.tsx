import { PropsWithChildren, ReactElement } from "react";
import { Link } from 'react-router-dom';
import { AppRoute } from "../../const";
import { Hotel } from "../../data-type";
import { getRoute } from "../../utils/common";
import CardFavorites from './card/card-favorites';

interface OffersListLocationParams {
  hotels: Hotel[],
}

function OffersListLocations(params: PropsWithChildren<OffersListLocationParams>): ReactElement {
  const { hotels } = params;

  return (
    <section className="favorites">
      <h1 className="favorites__title">Saved listing</h1>
      <ul className="favorites__list">
        <li className="favorites__locations-items">
          <div className="favorites__locations locations locations--current">
            <div className="locations__item">
              <Link className="locations__item-link" to={getRoute(AppRoute.DEFAULT_CITY)}>
                <span>Amsterdam</span>
              </Link>
            </div>
          </div>
          <div className="favorites__places">
            {hotels.map((item) => (
              <CardFavorites
                key={item.id}
                cardData={item}
              />
            ))}
          </div>
        </li>
        <li className="favorites__locations-items">
          <div className="favorites__locations locations locations--current">
            <div className="locations__item">
              <Link className="locations__item-link" to={getRoute(AppRoute.OFFER)}>
                <span>Cologne</span>
              </Link>
            </div>
          </div>
          <div className="favorites__places">
            {hotels.map((item) => (
              <CardFavorites
                key={item.id}
                cardData={item}
              />
            ))}
          </div>
        </li>
      </ul>
    </section>
  )
}

export default OffersListLocations;
