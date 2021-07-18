import { ReactElement } from 'react';
import { CardParams } from '../types';
import { CardType } from '../../../const';
import Card from './card';

const imgSize = {
  width: 260,
  height: 200,
};

function CardCities(params: CardParams): ReactElement {
  const { className = '', cardData, onMouseEnter, onMouseLeave } = params;
  const { isPremium } = cardData;

  return (
    <Card
      className={`cities__place-card ${className}`}
      cardData={cardData}
      cardType={CardType.CITIES}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      imgSize={imgSize}
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
