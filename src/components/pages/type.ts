import { Hotel } from '../../data-type';

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
