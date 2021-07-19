import { Hotel } from '../../data-type';
import { api } from '../../services/rtk-api';

const useFavoritesHotels = (): {
  hotels: Hotel[],
  isError: boolean,
} => {
  const { data: hotels = [], isError } = api.endpoints.getFavorites.useQuery();
  return { hotels, isError };
};

export default useFavoritesHotels;
