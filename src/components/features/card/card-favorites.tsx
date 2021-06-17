import React from 'react';
import { CardProps } from '../types';
import { CardType } from '../../../const';
import Card from './card';

function CardCities(props: CardProps): React.ReactElement {
  const { className = '', cardData } = props;

  return (
    <Card
      className={`favorites__card ${className}`}
      cardData={cardData}
      cardType={CardType.FAVORITES}
    />
  );
}

export default CardCities;
