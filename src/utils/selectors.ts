import { useParams } from 'react-router-dom';
import { shallowEqual, useSelector } from 'react-redux';
import { InitialStateType } from '../store/types';
import { City, Hotel } from '../data-type';

export const useRoomData = (): {
  hotels: Hotel[];
  hotel?: Hotel
} => {
  const { id }: { id:string } = useParams();
  const { city }: { city:string } = useParams();
  const activeCityName = city;

  return useSelector((state: InitialStateType) => (
    {
      hotels: state.hotels.filter(
        (item) => (item.city.name === activeCityName),
      ),
      hotel: state.hotels.find((item) => item.id === parseInt(id, 10)),
    }
  ), shallowEqual);
};

export const useFavoritesData = (): {
  hotels: Hotel[];
} => useSelector((state: InitialStateType) => ({
  hotels: state.hotels.filter(
    (item) => item.isFavorite,
  ),
}), shallowEqual);

export const useCitiesListData = (activeCityName: string | undefined): {
  activeCity?: City | undefined;
  cities: City[];
} => {
  const activeCity = useSelector((state: InitialStateType) => {
    return state.cities.find((item) => item.name === activeCityName)
  })

  const cities = useSelector((state: InitialStateType) => state.cities)

  return { activeCity, cities }
};

export const useCurrentHotelsData = (): {
  currentHotels: Hotel[];
  city: City;
} => {
  const { city }: { city:string } = useParams();
  const activeCityName = city;

  return useSelector((state: InitialStateType) => {
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

export const useIsEmpty = (): boolean => {
  const { city } = useParams<{ city:string | undefined }>();
  const activeCityName = city;

  return useSelector((state: InitialStateType) => (
    state.hotels.some(
      (hotel) => (hotel.city.name === activeCityName),
    )),
  shallowEqual);
};
