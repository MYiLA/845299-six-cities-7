import { Action, ActionChangeCity } from './types';
import { City } from '../data-type';

export const ActionType = {
  CHANGE_CITY: 'hotels/changeCity',
  FILLING_HOTELS: 'hotels/fillingHotels',
};

export const ActionCreator = {
  changeCity: (activeCity: City): ActionChangeCity => ({
    type: ActionType.CHANGE_CITY,
    activeCity,
  }),
  fillingHotels: (): Action => ({
    type: ActionType.FILLING_HOTELS,
  }),
};
