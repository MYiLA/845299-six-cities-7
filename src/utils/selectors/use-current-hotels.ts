import { City, Hotel } from "../../data-type";
import { api } from "../../services/rtk-api";

export const useCurrentHotels = (activeCity: City): Hotel[] => {
    const hotels = api.endpoints.getHotels.useQuery().data ?? [];

    if (hotels.length === 0) {
      return hotels
    }

    return hotels.filter(
      (hotel) => (hotel.city.name === activeCity.name),
    )
  }
