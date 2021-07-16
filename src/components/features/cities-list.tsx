import { Link } from 'react-router-dom';
import { ReactElement, PropsWithChildren } from 'react';
import { City } from '../../data-type';
import { getRoute } from '../../utils/common';

interface CitiesListParams {
  activeCity: City,
  cities: City[]
}

function CitiesList( params: PropsWithChildren<CitiesListParams> ): ReactElement {
  const { activeCity, cities } = params

  return (
    <div className="tabs">
      <section className="locations container">
        <ul className="locations__list tabs__list">
          {cities.map((city) => (
            <li key={city.name} className="locations__item">
              <Link
                className={`locations__item-link tabs__item ${city.name === activeCity.name ? 'tabs__item--active' : ''}`}
                to={getRoute(city.name)}
              >
                <span>{city.name}</span>
              </Link>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}

export default CitiesList;
