import { ReactElement } from 'react';
import { CardParams } from '../types';
import { CardType } from '../../../const';
import Card from './card';

function CardCities(props: CardParams): ReactElement {
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
