import { InitialStateType } from '../../store/reducer';
import { selectSityList } from './use-cities-list';

describe('поведение выборщика сведений об активном городе', () => {
  describe('когда в состоянии нет списка городов', () => {
    it('ломается с ошибкой', () => {
      expect(() => selectSityList({} as InitialStateType, '')).toThrowError()
    });
  });

  describe('когда город не найден', () => {
    it('возвращает activeCity = undefined', () => {
      const { activeCity } = selectSityList({cities: []} as InitialStateType, 'несуществующий город' );
      expect(activeCity).toBeUndefined();
    });
  });
});
