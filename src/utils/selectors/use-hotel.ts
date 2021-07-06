import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { Hotel } from "../../data-type";
import { InitialStateType } from "../../store/reducer";

export const useHotel = (): {
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
