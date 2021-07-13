import { Fragment, ReactElement, useState } from 'react';
import { CommentPost } from '../../data-type';

const stars = [5, 4, 3, 2, 1];

function NewComment(): ReactElement {
  const [userComment, setUserComment] = useState<CommentPost>(
    {
      comment: '',
      rating: 0,
    },
  );

  return (
    <form className="reviews__form form" action="#" method="post">
      <label className="reviews__label form__label" htmlFor="review">Your review</label>
      <div className="reviews__rating-form form__rating">
        {stars.map((star) => (
          <Fragment key={`star-${star}`}>
            <input
              className="form__rating-input visually-hidden"
              name="rating"
              defaultValue={star}
              id={`${star}-stars`}
              type="radio"
              checked={star === userComment.rating}
              onChange={() => {
                setUserComment({
                  ...userComment,
                  rating: star,
                });
              }}
            />
            <label htmlFor={`${star}-stars`} className="reviews__rating-label form__rating-label" title="perfect">
              <svg className="form__star-image" width={37} height={33}>
                <use xlinkHref="#icon-star" />
              </svg>
            </label>
          </Fragment>
        ))}
      </div>
      <textarea
        className="reviews__textarea form__textarea"
        id="review"
        name="review"
        placeholder="Tell how was your stay, what you like and what can be improved"
        value={userComment.comment}
        onChange={({ target }) => {
          setUserComment({
            ...userComment,
            comment: target.value,
          });
        }}
      />
      <div className="reviews__button-wrapper">
        <p className="reviews__help">
          To submit review please make sure to set
          {' '}
          <span className="reviews__star">rating</span>
          {' '}
          and describe your stay with at least
          {' '}
          <b className="reviews__text-amount">50 characters</b>
          .
        </p>
        <button
          className="reviews__submit form__submit button"
          type="submit"
          disabled
          onSubmit={(evt) => {
            evt.preventDefault();
          }}
        >
          Submit

        </button>
      </div>
    </form>
  );
}

export default NewComment;
