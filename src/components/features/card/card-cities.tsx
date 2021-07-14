import { ReactElement } from 'react';
import { CardParams } from '../types';
import { CardType } from '../../../const';
import Card from './card';

function CardCities(props: CardParams): ReactElement {
  const { className = '', cardData, onMouseOver } = props;
  const { isPremium } = cardData;
  const imgSize = {
    width: 260,
    height: 200,
  };

  return (
    <Card
      className={`cities__place-card ${className}`}
      cardData={cardData}
      cardType={CardType.CITIES}
      onMouseOver={onMouseOver}
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
