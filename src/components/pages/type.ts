import { City, Hotel } from '../../data-type';

export interface InputCheckType {
  data: string,
  message: string,
  success: boolean
}

export interface RoomParams {
  isAuth?: boolean,
}

export interface RoomViewParams {
  isAuth: boolean,
  hotel: Hotel,
  hotels: Hotel[],
}

export interface MainViewParams {
  isLoading: boolean,
  activeCity: City,
  isEmpty: boolean,
  cities: City[],
  hotels: Hotel[],
}
