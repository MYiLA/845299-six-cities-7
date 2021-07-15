import { CommentGet } from "../../data-type";
import { api } from "../../services/rtk-api";

export const useCommentsList = (hotelId: number): CommentGet[] => {
  const comments = api.endpoints.getComments.useQuery(hotelId).data ?? [];

  return comments;
};
