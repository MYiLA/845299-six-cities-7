import { useSelector } from "react-redux";
import { City } from "../../data-type";
import { InitialStateType } from "../../store/reducer";

export const useCitiesList = (activeCityName: string | undefined): {
  activeCity: City | undefined;
  cities: City[];
} => {
  const activeCity = useSelector((state: InitialStateType) => state.cities.find(
    (item) => item.name === activeCityName)
  )
  const cities = useSelector((state: InitialStateType) => state.cities)

  return { activeCity, cities }
};
