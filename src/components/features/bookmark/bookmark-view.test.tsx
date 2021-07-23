import { fireEvent, render } from '@testing-library/react';
import { Router } from 'react-router-dom';
import { createMemoryHistory, MemoryHistory } from 'history';
import { PropsWithChildren } from 'react';
import { BookmarkType, SNAP_DESC } from '../../../const';
import BookmarkView from './bookmark-view';

let history = {} as MemoryHistory<unknown>;
let isFavorite = true;
const type = BookmarkType.PROPERTY;
const width = 31;
const height = 33;

describe('поведение компонента bookmark-view', () => {
  beforeEach(() => {
    history = createMemoryHistory();
  });

  it('делает разметку на экране', () => {
    const onSetFavorite = jest.fn();
    const { container } = render(
      <Router history={history}>
        <BookmarkView
          isFavorite={isFavorite}
          onSetFavorite={onSetFavorite}
          type={type}
          width={width}
          height={height}
        />
      </Router>,
    );

    expect(container.querySelector(`.${type}__bookmark-button--active`)).toBeTruthy();
    const bookmarkIcon = container.querySelector('.property__bookmark-icon');
    expect(bookmarkIcon).toBeTruthy();
    if (bookmarkIcon !== null) {
      expect(bookmarkIcon.getAttribute('width')).toBe('31');
      expect(bookmarkIcon.getAttribute('height')).toBe('33');
    }
  });

  it('обрабатывает клик по кнопке', () => {
    const onSetFavorite = jest.fn(() => {
      isFavorite = !isFavorite;
    });
    const { container } = render(
      <Router history={history}>
        <BookmarkView
          isFavorite={isFavorite}
          onSetFavorite={onSetFavorite}
          type={type}
          width={width}
          height={height}
        />
      </Router>,
    );

    const button = container.querySelector('.button');
    if (button !== null) {
      fireEvent.click(button);
    }
    expect(container.querySelector(`.${type}__bookmark-button--active`)).toBe(undefined);
  });

  // it(SNAP_DESC, () => {
  //   const history = createMemoryHistory();
  //   const { container } = render(
  //     <BookmarkView
  //       isFavorite={isFavorite}
  //       onSetFavorite={onSetFavorite}
  //       type={type}
  //       width={width}
  //       height={height}
  //     />,
  //     renderOptions(history),
  //   );
  //   expect(container).toMatchSnapshot();
  // });
});
