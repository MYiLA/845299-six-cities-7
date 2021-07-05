import { Hotel, City, CommentGet } from '../data-type';

export interface InitialStateType {
  cities: City[],
  hotels: Hotel[],
  hotelsNearby: Hotel[],
  comments: CommentGet[],
  authorizationStatus: string
}
