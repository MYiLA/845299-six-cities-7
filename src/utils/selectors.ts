import { useParams } from 'react-router-dom';
import { shallowEqual, useSelector } from 'react-redux';
import { State } from '../store/types';
import { City, Hotel } from '../data-type';
// const { city }: { city:string } = useParams();

export const useRoomData = (): {
  hotels: Hotel[];
  hotel?: Hotel
} => {
  const { id }: { id:string } = useParams();
  const { city }: { city:string } = useParams();
  const activeCityName = city.split(':')[1];

  return useSelector((state: State) => (
    {
      hotels: state.hotels.filter(
        (item) => (item.city.name === activeCityName),
      ),
      hotel: state.hotels.find((item) => item.id === parseInt(id.split(':')[1], 10)),
    }
  ), shallowEqual);
};

export const useFavoritesData = (): {
  hotels: Hotel[];
} => useSelector((state: State) => ({
  hotels: state.hotels.filter(
    (item) => item.isFavorite,
  ),
}), shallowEqual);

export const useCitiesListData = (): {
  activeCity: City;
  cities: City[];
} => {
  const { city }: { city:string } = useParams();
  const activeCityName = city.split(':')[1];
  // тут много дублирования c activeCityName. Нужно рефакторить
  // учесть момент, когда города нет в списке (выбросить ошибку)
  // и подумать над более изящным решением получения города по умолчанию
  // возможно нужно удалить действия для стора, связанные со сменой активного города
  return useSelector((state: State) => {
    const activeCity = (
      state.cities.find((item) => item.name === activeCityName)
    ) || state.cities[0];

    return ({
      activeCity,
      cities: state.cities,
    });
  }, shallowEqual);
};

export const useCurrentHotelsData = (): {
  currentHotels: Hotel[];
  city: City;
} => {
  const { city }: { city:string } = useParams();
  const activeCityName = city.split(':')[1];

  return useSelector((state: State) => {
    const activeCity = (
      state.cities.find((item) => item.name === activeCityName)
    ) || state.cities[0];

    return ({
      currentHotels: state.hotels.filter(
        (hotel) => (hotel.city.name === activeCityName),
      ),
      city: activeCity,
    });
  }, shallowEqual);
};

export const useMainData = (): {
  isEmpty: boolean
} => {
  const { city }: { city:string } = useParams();
  const activeCityName = city.split(':')[1];

  return useSelector((state: State) => ({
    isEmpty: state.hotels.filter(
      (hotel) => (hotel.city.name === activeCityName),
    ).length === 0,
  }),
  shallowEqual);
};
