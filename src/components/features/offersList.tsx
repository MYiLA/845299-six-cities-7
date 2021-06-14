import React, { useState } from 'react';
import { CardType } from '../../const';
import { Hotel } from '../../data-type';
import { OffersListProps } from './types';
import Card from './card';

function OffersList(props : OffersListProps): React.ReactElement {
  const { hotelsData } = props;
  const [activeCard, setActiveCard] = useState<Hotel>();

  return (
    <div className="cities__places-container container">
      <section className="cities__places places">
        <h2 className="visually-hidden">Places</h2>
        <b className="places__found">
          {hotelsData.length}
          {' '}
          places to stay in Amsterdam
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
          {hotelsData.map((item) => (
            // TODO пока сделала лишнюю обёртку. На артикль не дает вешать события еслинт -
            // типа не интеррактивный элемент
            <div
              key={item.id}
              role="button"
              tabIndex={0}
              onMouseOver={() => {
                // TODO слишком часто вызывается, когда курсор перемещается
                // между интеррактивными внутренними элементами. Нужно подумать, как избежать этого
                setActiveCard(item);
              }}
              onFocus={() => {
                setActiveCard(item);
              }}
            >
              <Card
                cardData={item}
                cardType={CardType.CITIES}
              />
            </div>
          ))}
        </div>
      </section>
      <div className="cities__right-section">
        <section className="cities__map map" />
      </div>
    </div>
  );
}

export default OffersList;
