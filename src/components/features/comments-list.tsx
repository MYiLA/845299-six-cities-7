import { PropsWithChildren, ReactElement } from 'react';
import CommentNew from './comment-new';
import Comment from './comment';
import { useCommentsList } from '../../hooks/selectors/use-comments-list';
import { sortByNowToOld } from '../../utils/common';
import Spinner from './spinner';

interface CommentsListParams {
  hotelId: number,
  isAuth?: boolean,
}

function CitiesList( params: PropsWithChildren<CommentsListParams> ): ReactElement {
  const { isAuth = false, hotelId } = params;
  const {comments, isLoading} = useCommentsList(hotelId)
  const shownComments = [...comments].sort(
    (comment1, comment2) => sortByNowToOld(comment1.date, comment2.date)
  ).slice(0, 10);

  if (isLoading) {
    return <Spinner />
  }

  return (
    <section className="property__reviews reviews">
      <h2 className="reviews__title">
        Reviews ·
        {' '}
        <span className="reviews__amount">{comments.length}</span>
      </h2>
      <ul className="reviews__list">
      {shownComments.map((comment) => (
        <Comment key={comment.id} commentData={comment} />
      ))}
      </ul>
      {isAuth && (
        <CommentNew hotelId={hotelId} />
      )}
    </section>
  );
}

export default CitiesList;
