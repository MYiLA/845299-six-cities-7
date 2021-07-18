import { shallowEqual, useSelector } from "react-redux";
import { City } from "../../data-type";
import { InitialStateType } from "../../store/reducer";

export const selectSityList = (state: InitialStateType, activeCityName: string | undefined) => {
  return {
    activeCity: state.cities.find((item) => item.name === activeCityName),
    cities: state.cities
  }
}

export const useCitiesList = (activeCityName: string | undefined): {
  activeCity?: City;
  cities: City[];
} => {
  return useSelector((state: InitialStateType) => selectSityList(state, activeCityName), shallowEqual);
};
