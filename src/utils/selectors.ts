import { useParams } from 'react-router-dom';
import { shallowEqual, useSelector } from 'react-redux';
import { InitialStateType } from '../store/types';
import { City, Hotel } from '../data-type';


export const useRoomData = (): {
  hotels: Hotel[];
  hotel?: Hotel
} => {

  const { id } = useParams<{ id:string }>();

  const hotels = useSelector((state: InitialStateType) => state.hotelsNearby);
  const hotel = useSelector((state: InitialStateType) => state.hotels.find(
    (item) => item.id === parseInt(id, 10)
  ));

  return { hotels, hotel }
};


export const useFavoritesHotels = (): Hotel[] => useSelector(
  (state: InitialStateType) => state.hotels.filter(
    (item) => item.isFavorite,
  ), shallowEqual)


export const useCitiesListData = (activeCityName: string | undefined): {
  activeCity?: City | undefined;
  cities: City[];
} => {

  const activeCity = useSelector((state: InitialStateType) => state.cities.find(
    (item) => item.name === activeCityName)
  )
  const cities = useSelector((state: InitialStateType) => state.cities)

  return { activeCity, cities }
};

// TODO поправить обёртки
export const useCurrentHotelsData = (activeCity: City): {
  currentHotels: Hotel[];
} => {

  const currentHotels = useSelector((state: InitialStateType) => state.hotels.filter(
    (hotel) => (hotel.city.name === activeCity.name),
  ))

  return { currentHotels }
};


export const useIsEmpty = (): boolean => {

  const { city } = useParams<{ city:string | undefined }>();
  const isEmpty = useSelector((state: InitialStateType) => (
    !state.hotels.some(
      (hotel) => (hotel.city.name === city),
    )
  ))

  return isEmpty;
};
