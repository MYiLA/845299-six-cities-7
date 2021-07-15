import dayjs from 'dayjs';
import { PropsWithChildren, ReactElement } from 'react';
import { CommentGet } from '../../data-type';
import { getRating } from '../../utils/common';

interface CommentParams {
  commentData: CommentGet
}

function Comment(params: PropsWithChildren<CommentParams>): ReactElement {
  const{ commentData } = params;
  const { user, rating, comment, date } = commentData;
  const { avatarUrl, name } = user;

  return (
    <li className="reviews__item">
      <div className="reviews__user user">
        <div className="reviews__avatar-wrapper user__avatar-wrapper">
          <img className="reviews__avatar user__avatar" src={avatarUrl} width={54} height={54} alt="Reviews avatar" />
        </div>
        <span className="reviews__user-name">
          {name}
        </span>
      </div>
      <div className="reviews__info">
        <div className="reviews__rating rating">
          <div className="reviews__stars rating__stars">
            <span style={{ width: getRating(rating) }} />
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <p className="reviews__text">
          {comment}
        </p>
        <time className="reviews__time" dateTime={dayjs(date).format('YYYY-MM-DD')}>{dayjs(date).format('MMMM YYYY')}</time>
      </div>
    </li>
  );
}

export default Comment;
