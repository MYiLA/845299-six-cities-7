import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { api } from "../../services/rtk-api";

export const useIsEmpty = (): boolean => {

  const { city } = useParams<{ city:string | undefined }>();
  const isEmpty = useSelector(() => (

    !api.endpoints.getHotels.useQuery().data?.some(
      (hotel) => (hotel.city.name === city),
    )
  ))

  return isEmpty;
};
