import { render } from '@testing-library/react';
import { SNAP_DESC } from '../../const';
import CommentNewView from './comment-new-view';

let onSubmit = () => null;
let onChange = () => null;
let setComment = () => null;
let setRating = () => null;
const rating = 4;
const comment = 'Этот комментарий слишком короткий';
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
    // expect(container.querySelectorAll('.game__mistakes .wrong').length).toBe(mistakesCount);
  });

  // it('отрисовывает комментарий', () => {
  //   const { container } = render(
  //     <CommentNewView
  //       onSubmit={onSubmit}
  //       onChange={onChange}
  //       setComment={setComment}
  //       setRating={setRating}
  //       rating={rating}
  //       comment={comment}
  //       isFormDisabled={isFormDisabled}
  //       isSubmitDisabled={isSubmitDisabled}
  //     />,
  //   );
  //   // expect(container.querySelectorAll('.game__mistakes .wrong').length).toBe(mistakesCount);
  // });

  // it('блокирует форму', () => {
  //   const { container } = render(
  //     <CommentNewView
  //       onSubmit={onSubmit}
  //       onChange={onChange}
  //       setComment={setComment}
  //       setRating={setRating}
  //       rating={rating}
  //       comment={comment}
  //       isFormDisabled={isFormDisabled}
  //       isSubmitDisabled={isSubmitDisabled}
  //     />,
  //   );
  //   // expect(container.querySelectorAll('.game__mistakes .wrong').length).toBe(mistakesCount);
  // });

  // it('блокирует кнопку отправки', () => {
  //   const { container } = render(
  //     <CommentNewView
  //       onSubmit={onSubmit}
  //       onChange={onChange}
  //       setComment={setComment}
  //       setRating={setRating}
  //       rating={rating}
  //       comment={comment}
  //       isFormDisabled={isFormDisabled}
  //       isSubmitDisabled={isSubmitDisabled}
  //     />,
  //   );
  //   // expect(container.querySelectorAll('.game__mistakes .wrong').length).toBe(mistakesCount);
  // });

  // it('обрабатывает изменения в комментарии', () => {
  //   const { container } = render(
  //     <CommentNewView
  //       onSubmit={onSubmit}
  //       onChange={onChange}
  //       setComment={setComment}
  //       setRating={setRating}
  //       rating={rating}
  //       comment={comment}
  //       isFormDisabled={false}
  //       isSubmitDisabled={isSubmitDisabled}
  //     />,
  //   );

  //   // const button = container.querySelector('.button');
  //   // if (button !== null) {
  //   //   fireEvent.click(button);
  //   // }
  //   // expect(onSetFavorite).toBeCalled();
  // });

  // it('обрабатывает изменения в рейтинге', () => {
  //   const { container } = render(
  //     <CommentNewView
  //       onSubmit={onSubmit}
  //       onChange={onChange}
  //       setComment={setComment}
  //       setRating={setRating}
  //       rating={rating}
  //       comment={comment}
  //       isFormDisabled={false}
  //       isSubmitDisabled={isSubmitDisabled}
  //     />,
  //   );
  // });

  // it('обрабатывает клик по кнопке отправки отзыва', () => {
  //   const { container } = render(
  //     <CommentNewView
  //       onSubmit={onSubmit}
  //       onChange={onChange}
  //       setComment={setComment}
  //       setRating={setRating}
  //       rating={rating}
  //       comment={comment}
  //       isFormDisabled={isFormDisabled}
  //       isSubmitDisabled={false}
  //     />,
  //   );
  // });

  // it(SNAP_DESC, () => {
  //   // const {container} = render(<Mistakes count={mistakesCount} />);
  //   // expect(container).toMatchSnapshot();
  // });
});
