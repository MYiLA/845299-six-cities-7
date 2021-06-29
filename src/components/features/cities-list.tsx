import React from 'react';
import { Link } from 'react-router-dom';
import { AppRoute } from '../../const';
import { useCityChanger } from './model';
import { useCitiesListData } from '../../utils/selectors';

function CitiesList(): React.ReactElement {
  const { activeCity, cities } = useCitiesListData();
  const onChangeCity = useCityChanger();

  return (
    <div className="tabs">
      <section className="locations container">
        <ul className="locations__list tabs__list">
          {cities.map((city) => (
            <li key={city.name} className="locations__item">
              <Link
                className={`locations__item-link tabs__item ${city.name === activeCity.name ? 'tabs__item--active' : ''}`}
                to={`${AppRoute.MAIN}/:${city.name}`}
                onClick={() => { onChangeCity(city); }}
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
