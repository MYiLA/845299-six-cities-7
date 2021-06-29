import { useDispatch } from 'react-redux';
import { ActionCreator } from '../../store/action';
import { ActionChangeCity } from '../../store/types';
import { City } from '../../data-type';

export const useCityChanger = (): (city: City) => ActionChangeCity => {
  const dispatch = useDispatch();
  return (city) => dispatch(ActionCreator.changeCity(city));
};
