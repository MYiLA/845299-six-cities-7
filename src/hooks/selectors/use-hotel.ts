import { useParams } from "react-router-dom";
import { Hotel } from "../../data-type";
import { api } from "../../services/rtk-api";

export const useHotel = (): {
  hotels: Hotel[],
  hotel?: Hotel,
  isLoadingHotel: boolean,
} => {
    const { id } = useParams<{ id: string }>();
    const { data, isLoading } = api.endpoints.getHotelId.useQuery(Number(id));
    const hotels = api.endpoints.getHotelIdNearby.useQuery(Number(id)).data ?? [];

    return { hotels, hotel: data, isLoadingHotel: isLoading }
};
