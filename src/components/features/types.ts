import {
  ReactElement, MouseEvent, FormEvent, CSSProperties
} from 'react';
import { RouteProps } from 'react-router';
import {
  City, CommentGet, Host, Hotel
} from '../../data-type';

export interface CardParams {
  cardData: Hotel,
  onMouseEnter?: () => void,
  onMouseLeave?: () => void,
  cardType?: string,
  className?: string,
  children?: ReactElement,
  imgSize?: {
    width: number,
    height: number,
  }
}

export interface OffersListParams {
  activeCity: City,
  hotels: Hotel[],
  sortType?: string,
}

export interface MapParams {
  activeCity: City,
  selectedPoint?: Hotel,
  hotels: Hotel[]
}

export interface BookmarkParams {
  id: number,
  isFavorite: boolean,
  style?: {
   type: string,
   width: number,
   height: number,
  },
}

export interface BookmarkViewParams {
  onSetFavorite: (evt: MouseEvent<HTMLElement>) => void,
  type: string,
  isFavorite: boolean,
  width: number,
  height: number,
}

export interface CitiesListParams {
  activeCity: City,
  cities: City[]
}

export interface CommentNewViewParams {
  onSubmit: (evt: FormEvent<HTMLFormElement>) => void,
  onChange: () => void,
  rating: number,
  setRating: (star: number) => void,
  isFormDisabled: boolean,
  comment: string,
  setComment: (value: string) => void,
  isSubmitDisabled: boolean,
}

export interface CommentParams {
  commentData: CommentGet
}

export interface CommentsListViewParams {
  commentsTotal: number,
  shownComments: CommentGet[],
  isAuth: boolean,
  hotelId: number
}

export interface CommentsListParams {
  hotelId: number,
  isAuth?: boolean,
}

export interface ErrorMessageParams {
  text: string
}

export interface HeaderViewParams {
  isAuth: boolean,
  avatarStyles: CSSProperties,
  email?: string,
  onSignOut: (evt: MouseEvent<HTMLElement>) => void,
}

export interface OffersListLocationParams {
  hotels: Hotel[],
}

export interface Location {
  [key: string]: Hotel[];
}

export type PrivateRouteParams = {
  isAuth: boolean;
  authPath: string;
} & RouteProps;

export interface SortingDropdownBtnParams {
  sortType: {
    name: string,
    path: string
  },
  activeSortType: {
    name: string,
    path: string
  },
  city: string
}

export interface HostParams {
  host: Host,
}
