import { ActionType } from './action';
import { State, Action } from './types';

// TODO в initialState использовать город текущего пользователя
const initialState: State = {
  city: {
    location: {
      latitude: 52.370216,
      longitude: 4.895168,
      zoom: 10,
    },
    name: 'Amsterdam',
  },
  hotels: [],
};

// TODO переделать действия
export const reducer = (state = initialState, action: Action): State => {
  switch (action.type) {
    case ActionType.ACTION_1:
      return {
        ...state,
        // step: state.step + action.payload,
      };
    case ActionType.ACTION_2:
      return {
        ...state,
        // mistakes: state.mistakes + action.payload,
      };
    default:
      return state;
  }
};
