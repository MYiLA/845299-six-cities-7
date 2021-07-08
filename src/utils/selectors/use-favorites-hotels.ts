import { shallowEqual, useSelector } from "react-redux";
import { Hotel } from "../../data-type";
import { api } from "../../services/rtk-api";

export const useFavoritesHotels = (): Hotel[] => useSelector (
  () => {
    const hotels = api.endpoints.getHotels.useQuery().data ?? [];

    if (hotels.length === 0) {
      return hotels
    }

    return hotels.filter(
      (item) => item.isFavorite,
    )
  }, shallowEqual
);
