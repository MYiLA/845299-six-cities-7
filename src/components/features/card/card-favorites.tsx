import { ReactElement } from 'react';
import { CardParams } from '../types';
import { CardType } from '../../../const';
import Card from './card';

function CardCities(props: CardParams): ReactElement {
  const { className = '', cardData } = props;
  const imgSize = {
    width: 150,
    height: 110,
  };

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
