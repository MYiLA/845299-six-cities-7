import { SortingType } from '../../const';
import { City, Hotel } from '../../data-type';
import { api } from '../../services/rtk-api';
import sorting from '../../utils/sorting';

interface useCurrentHotelsParams {
  activeCity?: City,
  sortingType?: string
}

const useCurrentHotels = (params: useCurrentHotelsParams): {
  hotels: Hotel[] | [],
  isLoading: boolean,
  isError: boolean
} => {
  const { activeCity, sortingType = SortingType.POPULAR.path } = params;
  const { data: hotels = [], isLoading, isError } = api.endpoints.getHotels.useQuery();

  if (hotels.length === 0) {
    return { hotels, isLoading, isError };
  }

  const activeHotels = hotels.filter(
    (hotel) => (hotel.city.name === activeCity?.name),
  );

  return { hotels: sorting[sortingType](activeHotels), isLoading, isError };
};

export default useCurrentHotels;
