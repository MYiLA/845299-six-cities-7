import { shallowEqual, useSelector } from "react-redux";
import { City, Hotel } from "../../data-type";
import { api } from "../../services/rtk-api";

export const useCurrentHotels = (activeCity: City): Hotel[] => useSelector(
  () => {
    const hotels = api.endpoints.getHotels.useQuery().data ?? [];

    if (hotels.length === 0) {
      return hotels
    }

    return hotels.filter(
      (hotel) => (hotel.city.name === activeCity.name),
    )
  }, shallowEqual
);
