import { CommentGet } from '../../data-type';
import { api } from '../../services/rtk-api';

const useCommentsList = (hotelId: number): {
  comments: CommentGet[],
  isLoading: boolean,
  isError: boolean,
} => {
  const { data, isLoading, isError } = api.endpoints.getComments.useQuery(hotelId);

  return { comments: data ?? [], isLoading, isError };
};

export default useCommentsList;
