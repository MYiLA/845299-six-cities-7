import { fireEvent, render } from '@testing-library/react';
import { Router } from 'react-router-dom';
import { createMemoryHistory, MemoryHistory } from 'history';
import { BookmarkType, SNAP_DESC } from '../../../const';
import BookmarkView from './bookmark-view';

let history = {} as MemoryHistory<unknown>;
let onSetFavorite = () => null;
const isFavorite = true;
const type = BookmarkType.PROPERTY;
const width = 31;
const height = 33;

describe('поведение компонента bookmark-view', () => {
  beforeEach(() => {
    history = createMemoryHistory();
    onSetFavorite = jest.fn();
  });

  it('делает разметку на экране', () => {
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

  it('обрабатывает клик по флажку-кнопке', () => {
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
    expect(onSetFavorite).toBeCalled();
  });

  it(SNAP_DESC, () => {
    const { container } = render(
      <BookmarkView
        isFavorite={isFavorite}
        onSetFavorite={onSetFavorite}
        type={type}
        width={width}
        height={height}
      />,
    );
    expect(container).toMatchSnapshot();
  });
});
