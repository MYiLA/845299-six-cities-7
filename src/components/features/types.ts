import { ReactElement } from 'react';
import { City, Hotel } from '../../data-type';

export interface CardParams {
  cardData: Hotel,
  onMouseOver?: () => void,
  cardType?: string,
  className?: string,
  children?: ReactElement,
}

export interface OffersListParams {
  hotelsData: Hotel[]
}

export interface MapParams {
  activeCity: City,
  selectedPoint?: Hotel,
  hotels: Hotel[]
}

export interface BookmarkParams {
  id: number,
  isFavorite: boolean,
  style?: {
   type: string,
   width: number,
   height: number,
  },
}
