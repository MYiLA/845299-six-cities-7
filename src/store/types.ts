import { Hotel, City } from '../data-type';

export interface State {
  cities: City[],
  hotels: Hotel[],
}

export interface Action {
  type: string,
}

export interface ActionChangeCity {
  type: string,
  activeCity: City,
}
