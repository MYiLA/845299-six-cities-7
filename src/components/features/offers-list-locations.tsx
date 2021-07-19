import { PropsWithChildren, ReactElement } from 'react';
import { Link } from 'react-router-dom';
import { Hotel } from '../../data-type';
import { getRoute } from '../../utils/common';
import CardFavorites from './card/card-favorites';
import { OffersListLocationParams, Location } from './types';

function OffersListLocations(params: PropsWithChildren<OffersListLocationParams>): ReactElement {
  const { hotels } = params;

  const locationHotels = hotels.reduce((acc: Location, hotel: Hotel) => {
    const cityName = hotel.city.name;

    if (cityName in acc) {
      acc[cityName].push(hotel);
    } else {
      acc[cityName] = [hotel];
    }

    return acc;
  }, {});

  return (
    <section className="favorites">
      <h1 className="favorites__title">Saved listing</h1>
      <ul className="favorites__list">
        {Object.entries(locationHotels).map((location) => (
          <li key={location[0]} className="favorites__locations-items">
            <div className="favorites__locations locations locations--current">
              <div className="locations__item">
                <Link className="locations__item-link" to={getRoute(location[0])}>
                  <span>{location[0]}</span>
                </Link>
              </div>
            </div>
            <div className="favorites__places">
              {location[1].map((hotel: Hotel) => (
                <CardFavorites
                  key={hotel.id}
                  cardData={hotel}
                />
              ))}
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default OffersListLocations;
