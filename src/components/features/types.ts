import React from 'react';
import { Hotel, City } from '../../data-type';

export interface CardProps {
  cardData: Hotel,
  onMouseOver?: () => void,
  cardType?: string,
  className?: string,
  children?: React.ReactElement,
}

export interface OffersListProps {
  hotelsData: Hotel[]
}

export interface MapProps {
  city: City,
  points: Hotel[],
  selectedPoint?: Hotel
}
