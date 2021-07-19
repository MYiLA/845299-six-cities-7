import { PropsWithChildren, ReactElement } from 'react';
import useCommentsList from '../../hooks/selectors/use-comments-list';
import { sortByNowToOld } from '../../utils/common';
import Spinner from './spinner';
import CommentsListView from './comments-list-view';
import { CommentsListParams } from './types';

function CommentsList(params: PropsWithChildren<CommentsListParams>): ReactElement {
  const { isAuth = false, hotelId } = params;
  const { comments, isLoading } = useCommentsList(hotelId);
  const shownComments = [...comments].sort(
    (comment1, comment2) => sortByNowToOld(comment1.date, comment2.date),
  ).slice(0, 10);

  if (isLoading) {
    return <Spinner />;
  }

  return (
    <CommentsListView
      commentsTotal={comments.length}
      shownComments={shownComments}
      isAuth={isAuth}
      hotelId={hotelId}
    />
  );
}

export default CommentsList;
