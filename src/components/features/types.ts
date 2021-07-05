import { ReactElement } from 'react';
import { City, Hotel } from '../../data-type';

export interface CardProps {
  cardData: Hotel,
  onMouseOver?: () => void,
  cardType?: string,
  className?: string,
  children?: ReactElement,
}

export interface OffersListProps {
  hotelsData: Hotel[]
}

export interface MapParams {
  activeCity: City,
  selectedPoint?: Hotel
}
