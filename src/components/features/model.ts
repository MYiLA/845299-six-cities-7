import { useDispatch } from 'react-redux';
import { AnyAction } from 'redux';
import { ActionCreator } from '../../store/action';
import { City } from '../../data-type';

export const useCityChanger = (): (city: City) => AnyAction => {
  const dispatch = useDispatch();
  return (city) => dispatch(ActionCreator.changeCity(city));
};
