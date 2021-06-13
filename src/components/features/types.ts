import { Hotel } from '../../data-type';

export interface CardProps {
  cardData: Hotel,
  cardType?: string
}

export interface OffersListProps {
  hotelsData: Array<Hotel>
}
