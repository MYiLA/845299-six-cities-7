import { Hotel } from '../../data-type';

export interface MainPageProps {
  hotelsData: Hotel[],
}

export type FavoritesPageProps = MainPageProps;

export type RoomPageProps = MainPageProps;
