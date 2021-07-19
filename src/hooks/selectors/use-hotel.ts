import { useParams } from 'react-router-dom';
import { Hotel } from '../../data-type';
import { api } from '../../services/rtk-api';

const useHotel = (): {
  hotels: Hotel[],
  hotel?: Hotel,
  isLoadingHotel: boolean,
  isError: boolean,
} => {
  const { id } = useParams<{ id: string }>();
  const { data: hotel, isLoading, isError } = api.endpoints.getHotelId.useQuery(Number(id));
  const hotels = api.endpoints.getHotelIdNearby.useQuery(Number(id)).data ?? [];

  return {
    hotels, hotel, isLoadingHotel: isLoading, isError,
  };
};

export default useHotel;
