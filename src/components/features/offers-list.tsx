import { PropsWithChildren, ReactElement, useState } from 'react';
import { City, Hotel } from '../../data-type';
import CardCities from './card/card-cities';
import Map from './map';

//TODO вынести интерфейсы в отдельный файл
interface OffersListParams {
  activeCity: City,
  hotels: Hotel[]
}

function OffersList(params: PropsWithChildren<OffersListParams>): ReactElement {
  const { activeCity, hotels } = params
  const [activeCard, setActiveCard] = useState<Hotel>();

  console.log(activeCard)

  if (hotels.length === 0) {
    return (
      <div className="cities">
        <div className="cities__places-container cities__places-container--empty container">
          <section className="cities__no-places">
            <div className="cities__status-wrapper tabs__content">
              <b className="cities__status">No places to stay available</b>
              <p className="cities__status-description">We could not find any property available at the moment in Dusseldorf</p>
            </div>
          </section>
          <div className="cities__right-section" />
        </div>
      </div>
    )
  }

  return (
    <div className="cities">
      <div className="cities__places-container container">
        <section className="cities__places places">
          <h2 className="visually-hidden">Places</h2>
          <b className="places__found">
            {hotels.length}
            {' '}
            places to stay in
            {' '}
            {activeCity.name}
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
            {hotels.map((item) => (
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
            <Map activeCity={activeCity} selectedPoint={activeCard} hotels={hotels} />
          </section>
        </div>
      </div>
    </div>
  );
}

export default OffersList;
