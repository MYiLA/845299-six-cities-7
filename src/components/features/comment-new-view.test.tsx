import { fireEvent, render } from '@testing-library/react';
import { SNAP_DESC } from '../../const';
import CommentNewView from './comment-new-view';

let onSubmit = () => null;
let onChange = () => null;
let setComment = () => null;
let setRating = () => null;
const rating = 3;
const comment = 'Этот комментарий слишком короткий';
const commentNew = 'Комментарий нормальной длинны, чтобы можно было отправить и проверить отправку формы';
const isFormDisabled = true;
const isSubmitDisabled = true;

describe('поведение компонента bookmark-view', () => {
  beforeEach(() => {
    onSubmit = jest.fn();
    onChange = jest.fn();
    setComment = jest.fn();
    setRating = jest.fn();
  });

  it('отрисовывает рейтинг', () => {
    const { container } = render(
      <CommentNewView
        onSubmit={onSubmit}
        onChange={onChange}
        setComment={setComment}
        setRating={setRating}
        rating={rating}
        comment={comment}
        isFormDisabled={isFormDisabled}
        isSubmitDisabled={isSubmitDisabled}
      />,
    );
    const inputStar = container.querySelector('[id=\'3-stars\']') as HTMLInputElement;
    expect(inputStar.checked).toBe(true);
  });

  it('отрисовывает комментарий', () => {
    const { container } = render(
      <CommentNewView
        onSubmit={onSubmit}
        onChange={onChange}
        setComment={setComment}
        setRating={setRating}
        rating={rating}
        comment={comment}
        isFormDisabled={isFormDisabled}
        isSubmitDisabled={isSubmitDisabled}
      />,
    );

    expect(container.querySelector('.reviews__textarea.form__textarea')?.textContent).toBe(comment);
  });

  it('блокирует форму', () => {
    const { container } = render(
      <CommentNewView
        onSubmit={onSubmit}
        onChange={onChange}
        setComment={setComment}
        setRating={setRating}
        rating={rating}
        comment={comment}
        isFormDisabled={isFormDisabled}
        isSubmitDisabled={isSubmitDisabled}
      />,
    );
    const formElement = container.querySelector('.form__textarea') as HTMLTextAreaElement;
    const inputElement = container.querySelector('.form__rating-input') as HTMLInputElement;
    expect(formElement.disabled).toBe(true);
    expect(inputElement.disabled).toBe(true);
  });

  it('блокирует кнопку отправки', () => {
    const { container } = render(
      <CommentNewView
        onSubmit={onSubmit}
        onChange={onChange}
        setComment={setComment}
        setRating={setRating}
        rating={rating}
        comment={comment}
        isFormDisabled={isFormDisabled}
        isSubmitDisabled={isSubmitDisabled}
      />,
    );

    const submitElement = container.querySelector('.form__submit') as HTMLButtonElement;
    expect(submitElement.disabled).toBe(true);
  });

  it('обрабатывает изменения в комментарии', () => {
    const { container } = render(
      <CommentNewView
        onSubmit={onSubmit}
        onChange={onChange}
        setComment={setComment}
        setRating={setRating}
        rating={rating}
        comment={comment}
        isFormDisabled={false}
        isSubmitDisabled={isSubmitDisabled}
      />,
    );

    const textareaElement = container.querySelector('.form__textarea') as HTMLTextAreaElement;
    fireEvent.change(textareaElement, { target: { value: commentNew } });
    expect(onChange).toBeCalled();
    expect(setComment).toBeCalled();
  });

  it('обрабатывает изменения в рейтинге', () => {
    const { container } = render(
      <CommentNewView
        onSubmit={onSubmit}
        onChange={onChange}
        setComment={setComment}
        setRating={setRating}
        rating={rating}
        comment={comment}
        isFormDisabled={false}
        isSubmitDisabled={isSubmitDisabled}
      />,
    );
    const inputStar = container.querySelector('[id=\'2-stars\']') as HTMLInputElement;
    fireEvent.click(inputStar);
    expect(onChange).toBeCalled();
    expect(setRating).toBeCalled();
  });

  it('обрабатывает отправку отзыва', () => {
    const { container } = render(
      <CommentNewView
        onSubmit={onSubmit}
        onChange={onChange}
        setComment={setComment}
        setRating={setRating}
        rating={rating}
        comment={comment}
        isFormDisabled={isFormDisabled}
        isSubmitDisabled={false}
      />,
    );

    const submitElement = container.querySelector('.form__submit') as HTMLButtonElement;
    fireEvent.submit(submitElement);
    expect(onSubmit).toBeCalled();
  });

  it(SNAP_DESC, () => {
    const { container } = render(
      <CommentNewView
        onSubmit={onSubmit}
        onChange={onChange}
        setComment={setComment}
        setRating={setRating}
        rating={rating}
        comment={comment}
        isFormDisabled={isFormDisabled}
        isSubmitDisabled={false}
      />,
    );
    expect(container).toMatchSnapshot();
  });
});
