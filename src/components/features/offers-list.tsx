import React, { useState } from 'react';
import { shallowEqual, useSelector } from 'react-redux';
import { Hotel } from '../../data-type';
import { State } from '../../store/types';
import CardCities from './card/card-cities';
import Map from './map';

function OffersList(): React.ReactElement {
  const { shownHotels, city } = useSelector((state: State) => ({
    shownHotels: state.hotels.filter(
      (hotel) => (hotel.city.name === state.activeCity.name),
    ),
    city: state.activeCity,
  }), shallowEqual);

  const [activeCard, setActiveCard] = useState<Hotel>();

  return (
    <div className="cities">
      {shownHotels.length !== 0 && (
        <div className="cities__places-container container">
          <section className="cities__places places">
            <h2 className="visually-hidden">Places</h2>
            <b className="places__found">
              {shownHotels.length}
              {' '}
              places to stay in
              {' '}
              {city.name}
            </b>
            <form className="places__sorting" action="#" method="get">
              <span className="places__sorting-caption">Sort by</span>
              {' '}
              <span className="places__sorting-type" role="button" tabIndex={0}>
                Popular
                <svg className="places__sorting-arrow" width={7} height={4}>
                  <use xlinkHref="#icon-arrow-select" />
                </svg>
              </span>
              <ul className="places__options places__options--custom places__options--opened">
                <li className="places__option places__option--active">
                  <div role="button" tabIndex={0}>
                    Popular
                  </div>
                </li>
                <li className="places__option">
                  <div role="button" tabIndex={0}>
                    Price: low to high
                  </div>
                </li>
                <li className="places__option">
                  <div role="button" tabIndex={0}>
                    Price: high to low
                  </div>
                </li>
                <li className="places__option">
                  <div role="button" tabIndex={0}>
                    Top rated first
                  </div>
                </li>
              </ul>
            </form>
            <div className="cities__places-list places__list tabs__content">
              {shownHotels.map((item) => (
                <CardCities
                  key={item.id}
                  onMouseOver={() => {
                    setActiveCard(item);
                  }}
                  cardData={item}
                />
              ))}
            </div>
          </section>
          <div className="cities__right-section">
            <section className="cities__map map">
              <Map selectedPoint={activeCard} />
            </section>
          </div>
        </div>
      )}
      {shownHotels.length === 0 && (
        <div className="cities__places-container cities__places-container--empty container">
          <section className="cities__no-places">
            <div className="cities__status-wrapper tabs__content">
              <b className="cities__status">No places to stay available</b>
              <p className="cities__status-description">We could not find any property available at the moment in Dusseldorf</p>
            </div>
          </section>
          <div className="cities__right-section" />
        </div>
      )}
    </div>

  );
}

export default OffersList;
