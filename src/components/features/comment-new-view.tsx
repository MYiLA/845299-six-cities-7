import { Fragment, ReactElement } from 'react';
import { stars } from '../../const';
import { CommentNewViewParams } from './types';

function CommentNewView(params: CommentNewViewParams): ReactElement {
  const {
    onSubmit, onChange, rating, setRating, isFormDisabled, comment, setComment, isSubmitDisabled,
  } = params;

  return (
    <form className="reviews__form form" action="#" method="post" onSubmit={onSubmit} onChange={onChange}>
      <label
        className="reviews__label form__label"
        htmlFor="review"
      >
        Your review
      </label>
      <div className="reviews__rating-form form__rating">
        {stars.map((star) => (
          <Fragment key={star}>
            <input
              className="form__rating-input visually-hidden"
              name="rating"
              defaultValue={star}
              id={`${star}-stars`}
              type="radio"
              checked={star === rating}
              onChange={() => setRating(star)}
              disabled={isFormDisabled}
            />
            <label className="reviews__rating-label form__rating-label" htmlFor={`${star}-stars`} title="perfect">
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
        value={comment}
        onChange={({ target }) => setComment(target.value)}
        disabled={isFormDisabled}
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
          disabled={isSubmitDisabled}
        >
          Submit
        </button>
      </div>
    </form>
  );
}

export default CommentNewView;
