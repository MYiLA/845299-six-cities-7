import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { Hotel } from "../../data-type";
import { api } from "../../services/rtk-api";
import { InitialStateType } from "../../store/reducer";

export const useHotel = (): {
  hotels: Hotel[];
  hotel?: Hotel
} => {

  const { id } = useParams<{ id: string }>();

  // const uniqueId = Symbol(id);

  const hotels = useSelector((state: InitialStateType) => state.hotelsNearby);
  const hotel = useSelector((state: InitialStateType) => state.hotels.find(
    (item) => item.id === parseInt(id, 10)
  ));
  // const hotel = useSelector(() => api.endpoints.getHotelId.useQuery(id).data);

  return { hotels, hotel }
};
