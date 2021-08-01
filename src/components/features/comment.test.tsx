import { render, screen } from '@testing-library/react';
import { SNAP_DESC } from '../../const';
import Comment from './comment';

const commentData = {
  id: 1,
  user: {
    id: 15,
    isPro: false,
    name: 'Kendall',
    avatarUrl: 'https://7.react.pages.academy/static/avatar/6.jpg',
  },
  rating: 3,
  comment: 'Тестовый комментарий про отель',
  date: '2021-07-12T11:09:43.784Z',
};

describe('поведение компонента bookmark-view', () => {
  beforeEach(() => {
    render(
      <Comment
        commentData={commentData}
      />,
    );
  });

  it('отрисовывает комментарий', () => {
    const inputStar = screen.getByTestId('rating');
    expect(inputStar.getAttribute('style')).toBe('width: 60%;');
    // comment: 'Тестовый комментарий про отель',
    // date: '2021-07-12T11:09:43.784Z',
  });

  it('отрисовывает пользователя, написавшего комментарий', () => {

    // isPro: false,
    // name: 'Kendall',
    // avatarUrl: 'https://7.react.pages.academy/static/avatar/6.jpg',
  });

  it(SNAP_DESC, () => {
    // const {container} = render(<Mistakes count={mistakesCount} />);
    // expect(container).toMatchSnapshot();
  });
});
