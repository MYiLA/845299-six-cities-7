import {
  FormEvent, ReactElement, useCallback, useState
} from 'react';
import { messageDisplayTime } from '../../const';
import ErrorMessage from './error-message';
import { usePostCommentMutation } from '../../services/rtk-api';
import CommentNewView from './comment-new-view';

const isValidComment = (comment: string) => {
  if (comment.length >= 50 && comment.length <= 300) {
    return true;
  }
  return false;
};

function CommentNew(params: {hotelId: number}): ReactElement {
  const { hotelId } = params;
  const [postComment] = usePostCommentMutation();
  const [isSubmitDisabled, setIsSubmitDisabled] = useState<boolean>(true);
  const [isFormDisabled, setIsFormDisabled] = useState<boolean>(false);
  const [isShowError, setIsShowError] = useState<boolean>(false);
  const [comment, setComment] = useState<string>('');
  const [rating, setRating] = useState<number>(0);

  const onChange = useCallback(() => {
    if (isValidComment(comment) && rating !== 0) {
      setIsSubmitDisabled(false);
    }
  }, [comment, rating]);

  const onSubmit = useCallback((evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();

    setIsFormDisabled(true);
    setIsSubmitDisabled(true);

    const data = { id: hotelId, body: { comment, rating } };
    const apiResult = postComment(data);

    apiResult.unwrap().then(() => {
      setIsFormDisabled(false);
      setRating(0);
      setComment('');
    }).catch(() => {
      setIsFormDisabled(false);
      setIsSubmitDisabled(false);
      setIsShowError(true);
      setTimeout(() => setIsShowError(false), messageDisplayTime);
    });
  }, [comment, rating]);

  return (
    <>
      {(isShowError
        && <ErrorMessage text="Не удалось отправить сообщение. Попробуйте ещё раз" />
      )}
      <CommentNewView
        onSubmit={onSubmit}
        onChange={onChange}
        rating={rating}
        setRating={setRating}
        isFormDisabled={isFormDisabled}
        comment={comment}
        setComment={setComment}
        isSubmitDisabled={isSubmitDisabled}
      />
    </>
  );
}

export default CommentNew;
