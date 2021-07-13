import { useParams } from "react-router-dom";
import { Hotel } from "../../data-type";
import { api } from "../../services/rtk-api";

export const useHotel = (): {
  hotels: Hotel[];
  hotel?: Hotel
} => {
    const { id } = useParams<{ id: string }>();
    const hotel = api.endpoints.getHotelId.useQuery(Number(id)).data;
    const hotels = api.endpoints.getHotelIdNearby.useQuery(Number(id)).data ?? [];

    return { hotels, hotel }
};
