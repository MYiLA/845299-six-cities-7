import { ReactElement } from 'react';
import { CardProps } from '../types';
import { CardType } from '../../../const';
import Card from './card';

function CardCities(props: CardProps): ReactElement {
  const { className = '', cardData } = props;
  const { isPremium } = cardData;

  return (
    <Card
      className={`near-places__card ${className}`}
      cardData={cardData}
      cardType={CardType.NEAR_PLACES}
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
