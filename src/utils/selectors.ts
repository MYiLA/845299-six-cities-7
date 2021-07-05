import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
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


export const useFavoritesHotels = (): {
  hotels: Hotel[];
} => {

  const hotels = useSelector((state: InitialStateType) => state.hotels.filter(
    (item) => item.isFavorite,
  ))

  return { hotels }
};


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


export const useCurrentHotelsData = (): {
  currentHotels: Hotel[];
  activeCity: City;
} => {

  const { city } = useParams<{ city:string | undefined }>();
  const currentHotels = useSelector((state: InitialStateType) => state.hotels.filter(
    (hotel) => (hotel.city.name === city),
  ))
  const activeCity = useSelector((state: InitialStateType) => state.cities.find(
    (item) => item.name === city
    ) || state.cities[0])

  return { activeCity, currentHotels }
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
