import { Hotel, City } from '../data-type';

export interface State {
  city: City,
  hotels: Hotel[],
}

export interface Action {
  type: string,
}
