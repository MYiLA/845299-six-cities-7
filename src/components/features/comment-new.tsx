import { FormEvent, Fragment, ReactElement, useState } from 'react';
import { messageDisplayTime } from '../../const';
import ErrorMessage from './error-message';
import { usePostCommentMutation } from '../../services/rtk-api';

const stars = [5, 4, 3, 2, 1];

const isValidComment = (comment: string) => {
  if (comment.length >= 50 && comment.length <= 300) {
    return true;
  }
  return false;
}

function CommentNew(params: {hotelId: number}): ReactElement {
  const { hotelId } = params;
  const [postComment] = usePostCommentMutation();
  const [isSubmitDisabled, setIsSubmitDisabled] = useState<boolean>(true);
  const [isFormDisabled, setIsFormDisabled] = useState<boolean>(false);
  const [isShowError, setIsShowError] = useState<boolean>(false);
  const [comment, setComment] = useState<string>('');
  const [rating, setRating] = useState<number>(0);

  const onChange = () => {
    if (isValidComment(comment) && rating !== 0) {
      setIsSubmitDisabled(false);
    }
  }

  const onSubmit = (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();

    setIsFormDisabled(true);
    setIsSubmitDisabled(true);

    const data = {id: hotelId, body: { comment, rating }};
    const apiResult = postComment(data);

    apiResult.unwrap().then(() => {
      setIsFormDisabled(false);
      setRating(0);
      setComment('');
    }).catch(() => {
      setIsFormDisabled(false);
      setIsSubmitDisabled(false);
      setIsShowError(true);
      setTimeout(()=> setIsShowError(false), messageDisplayTime);
    })
  }

  return (
    <>
    {(isShowError &&
      <ErrorMessage text="Не удалось отправить сообщение. Попробуйте ещё раз" />
    )}
    <form className="reviews__form form" action="#" method="post" onSubmit={onSubmit} onChange={onChange}>
      <label className="reviews__label form__label" htmlFor="review">Your review</label>
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
        value={comment}
        onChange={({ target }) => setComment(target.value)}
        disabled={ isFormDisabled }
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
    </>
  );
}

export default CommentNew;
