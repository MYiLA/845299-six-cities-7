import { useSelector } from "react-redux";
import { City, Hotel } from "../../data-type";
import { InitialStateType } from "../../store/reducer";

export const useCurrentHotels = (activeCity: City): {
  currentHotels: Hotel[];
} => {

  const currentHotels = useSelector((state: InitialStateType) => state.hotels.filter(
    (hotel) => (hotel.city.name === activeCity.name),
  ))

  return { currentHotels }
};
