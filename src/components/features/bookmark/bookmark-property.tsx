import { ReactElement } from 'react';
import { BookmarkParams } from '../types';
import { BookmarkType } from '../../../const';
import Bookmark from './bookmark';

function BookmarkProperty(props: BookmarkParams): ReactElement {
  const { id, isFavorite } = props;

  const style = {
    type: BookmarkType.PROPERTY,
    width: 31,
    height: 33,
  }

  return (
    <Bookmark
      id={id}
      isFavorite={isFavorite}
      style={style}
    />
  );
}

export default BookmarkProperty;
