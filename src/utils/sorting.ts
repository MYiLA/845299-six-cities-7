import { SortingType } from '../const';
import { Hotel } from '../data-type';

const sortByPriceHighToLow = (hotel1: Hotel, hotel2: Hotel): number => hotel2.price - hotel1.price;
const sortByPriceLowToHigh = (hotel1: Hotel, hotel2: Hotel): number => hotel1.price - hotel2.price;
const sortByRatedFirst = (hotel1: Hotel, hotel2: Hotel): number => hotel2.rating - hotel1.rating;

type Sorting = {
  [key: string]: (hotels: Hotel[]) => Hotel[];
}

export const sorting: Sorting = {
  [SortingType.POPULAR.path]: (hotels) => hotels,
  [SortingType.PRICE_HIGH_TO_LOW.path]: (hotels) => hotels.sort(sortByPriceHighToLow),
  [SortingType.PRICE_LOW_TO_HIGH.path]: (hotels) => hotels.sort(sortByPriceLowToHigh),
  [SortingType.TOP_RATED_FIRST.path]: (hotels) => hotels.sort(sortByRatedFirst),
}
