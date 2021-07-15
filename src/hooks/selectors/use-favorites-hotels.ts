import { Hotel } from "../../data-type";
import { api } from "../../services/rtk-api";

export const useFavoritesHotels = (): Hotel[] => api.endpoints.getFavorites.useQuery().data ?? []
