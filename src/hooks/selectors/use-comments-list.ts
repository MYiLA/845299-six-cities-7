import { CommentGet } from "../../data-type";
import { api } from "../../services/rtk-api";

export const useCommentsList = (hotelId: number): {
  comments: CommentGet[],
  isLoading: boolean,
} => {
  const { data, isLoading } = api.endpoints.getComments.useQuery(hotelId);

  return { comments: data ?? [], isLoading };
};
