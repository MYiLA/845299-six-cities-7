import { PropsWithChildren, ReactElement, useState } from 'react';
import { City, Hotel } from '../../data-type';
import CardCities from './card/card-cities';
import Map from './map';
import SortingDropdown from './sorting-dropdown'

//TODO вынести интерфейсы в отдельный файл
interface OffersListParams {
  activeCity: City,
  hotels: Hotel[],
  sortType?: string,
}

function OffersList(params: PropsWithChildren<OffersListParams>): ReactElement {
  const { activeCity, hotels } = params
  const [activeCard, setActiveCard] = useState<Hotel>();

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
          <SortingDropdown />
          <div className="cities__places-list places__list tabs__content">
            {hotels.map((item) => (
              <CardCities
                key={item.id}
                onMouseEnter={() => {
                  setActiveCard(item);
                }}
                onMouseLeave={() => setActiveCard(undefined)}
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
