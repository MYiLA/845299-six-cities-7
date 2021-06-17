import React from 'react';
import { Hotel } from '../../data-type';

export interface CardProps {
  cardData: Hotel,
  cardType?: string,
  className?: string,
  children?: React.ReactElement,
}

export interface OffersListProps {
  hotelsData: Hotel[]
}
