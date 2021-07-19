import { PropsWithChildren, ReactElement } from 'react';
import CommentNew from './comment-new';
import Comment from './comment';
import { CommentsListViewParams } from './types';

function CommentsListView(params: PropsWithChildren<CommentsListViewParams>): ReactElement {
  const {
    commentsTotal, shownComments, isAuth, hotelId,
  } = params;

  return (
    <section className="property__reviews reviews">
      <h2 className="reviews__title">
        Reviews ·
        {' '}
        <span className="reviews__amount">{commentsTotal}</span>
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

export default CommentsListView;
