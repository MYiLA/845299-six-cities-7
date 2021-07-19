import { ReactElement } from 'react';
import { BookmarkParams } from '../types';
import { BookmarkType } from '../../../const';
import Bookmark from './bookmark';

const style = {
  type: BookmarkType.PROPERTY,
  width: 31,
  height: 33,
};

function BookmarkProperty(params: BookmarkParams): ReactElement {
  const { id, isFavorite } = params;

  return (
    <Bookmark
      id={id}
      isFavorite={isFavorite}
      style={style}
    />
  );
}

export default BookmarkProperty;
