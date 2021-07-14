import { SortingType } from "../../const";
import { City, Hotel } from "../../data-type";
import { api } from "../../services/rtk-api";
import { sorting } from "../../utils/sorting";

interface useCurrentHotelsParams {
  activeCity?: City,
  sortingType?: string
}

export const useCurrentHotels = (params: useCurrentHotelsParams): { hotels: Hotel[] | any[], isLoading: boolean } => {
  const { activeCity, sortingType = SortingType.POPULAR.path } = params;
    if (activeCity === undefined) {
      // TODO показать ошибку, что такого города в меню сайта нет
      return { hotels: [], isLoading: false }
    }

    const hotels = api.endpoints.getHotels.useQuery().data ?? [];
    const isLoading = api.endpoints.getHotels.useQuery().isLoading;

    if (hotels.length === 0) {
      return { hotels, isLoading };
    };

    const activeHotels = hotels.filter(
      (hotel) => (hotel.city.name === activeCity?.name),
    );

    return { hotels: sorting[sortingType](activeHotels), isLoading };
  }
