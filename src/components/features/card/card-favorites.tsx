import { ReactElement } from 'react';
import { CardParams } from '../types';
import { CardType } from '../../../const';
import Card from './card';

const imgSize = {
  width: 150,
  height: 110,
};

function CardCities(params: CardParams): ReactElement {
  const { className = '', cardData } = params;

  return (
    <Card
      className={`favorites__card ${className}`}
      cardData={cardData}
      cardType={CardType.FAVORITES}
      imgSize={imgSize}
    />
  );
}

export default CardCities;
