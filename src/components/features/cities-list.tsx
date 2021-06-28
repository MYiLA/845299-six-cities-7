import React from 'react';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { AppRoute } from '../../const';
import { ActionCreator } from '../../store/action';
import { City } from '../../data-type';
import { State } from '../../store/types';

function CitiesList(): React.ReactElement {
  const dispatch = useDispatch();

  const { activeCity, cities } = useSelector((state: State) => ({
    activeCity: state.activeCity,
    cities: state.cities,
  }), shallowEqual);

  const onChangeCity = (city: City) => {
    dispatch(ActionCreator.changeCity(city));
  };

  return (
    <div className="tabs">
      <section className="locations container">
        <ul className="locations__list tabs__list">
          {cities.map((city) => (
            <li key={city.name} className="locations__item">
              <Link
                className={`locations__item-link tabs__item ${city.name === activeCity.name ? 'tabs__item--active' : ''}`}
                to={AppRoute.MAIN}
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
