import { Hotel, City } from '../data-type';

export interface InitialStateType {
  cities: City[],
  hotels: Hotel[],
  authorizationStatus: string
}
