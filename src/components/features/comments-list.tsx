import { PropsWithChildren, ReactElement } from 'react';
import CommentNew from './comment-new';
import Comment from './comment';
import { useCommentsList } from '../../hooks/selectors/use-comments-list';

interface CommentsListParams {
  hotelId: number,
  isAuth?: boolean,
}

function CitiesList( params: PropsWithChildren<CommentsListParams> ): ReactElement {
  const { isAuth = false, hotelId } = params;
  const comments = useCommentsList(hotelId);

  return (
    <section className="property__reviews reviews">
      <h2 className="reviews__title">
        Reviews ·
        {' '}
        <span className="reviews__amount">{comments.length}</span>
      </h2>
      <ul className="reviews__list">
      {comments.map((comment) => (
        <Comment commentData={comment} />
      ))}
      </ul>
      {isAuth && (
        <CommentNew />
      )}
    </section>
  );
}

export default CitiesList;
