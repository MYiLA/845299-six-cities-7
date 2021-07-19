import { Hotel } from '../../data-type';
import { api } from '../../services/rtk-api';

const useFavoritesHotels = (): Hotel[] => api.endpoints.getFavorites.useQuery().data ?? [];

export default useFavoritesHotels;
