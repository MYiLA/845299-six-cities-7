import React from 'react';
import { CardProps } from '../types';
import { CardType } from '../../../const';
import Card from './card';

function CardCities(props: CardProps): React.ReactElement {
  const { className = '', cardData } = props;
  const { isPremium } = cardData;

  return (
    <Card
      className={`cities__place-card ${className}`}
      cardData={cardData}
      cardType={CardType.CITIES}
    >
      {isPremium
        ? (
          <div className="place-card__mark">
            <span>Premium</span>
          </div>
        ) : <> </>}
    </Card>
  );
}

export default CardCities;
