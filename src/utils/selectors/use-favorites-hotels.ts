import { shallowEqual, useSelector } from "react-redux";
import { Hotel } from "../../data-type";
import { InitialStateType } from "../../store/reducer";

export const useFavoritesHotels = (): Hotel[] => useSelector(
  (state: InitialStateType) => state.hotels.filter(
    (item) => item.isFavorite,
  ), shallowEqual);
