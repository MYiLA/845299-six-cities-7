import { PropsWithChildren, ReactElement, useState } from 'react';
import { Hotel } from '../../data-type';
import CardCities from './card/card-cities';
import Map from './map';
import SortingDropdown from './sorting-dropdown';
import { OffersListParams } from './types';

function OffersList(params: PropsWithChildren<OffersListParams>): ReactElement {
  const { activeCity, hotels } = params;
  const [activeCard, setActiveCard] = useState<Hotel>();

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
