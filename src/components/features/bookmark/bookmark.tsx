import { ReactElement, MouseEvent } from "react";
import { useHistory } from "react-router-dom";
import { AppRoute, BookmarkType } from "../../../const";
import { useLogin } from '../../../hooks/selectors/use-login';
import { usePostFavoriteStatusMutation } from "../../../services/rtk-api";
import { BookmarkParams } from "../types";

const defaultStyle = {
  type: BookmarkType.PROPERTY,
  width: 31,
  height: 33,
}

function Bookmark(props: BookmarkParams): ReactElement {
  const { id, isFavorite, style = defaultStyle } = props;
  const { type, width, height } = style;

  const { isAuth } = useLogin()
  const history = useHistory();
  const [favoriteStatus] = usePostFavoriteStatusMutation();

  const onSetFavorite = (evt: MouseEvent<HTMLElement>) => {
    evt.preventDefault();

    if (!isAuth) {
      history.push(AppRoute.LOGIN);
      return
    }

    const changedStatus = !isFavorite ? 1 : 0;
    const data = {id, status: changedStatus};
    const apiResult = favoriteStatus(data);

    apiResult.unwrap()
    .catch(({data}) => {
      // TODO вывести сообщение с ошибкой
      throw new Error(data.error);
    })
  }

  return (
    <>
      <button className={`${type}__bookmark-button button ${isFavorite ? `${type}__bookmark-button--active` : ''}`} type="button" onClick={onSetFavorite}>
        <svg className={`${type}__bookmark-icon`} width={width} height={height}>
          <use xlinkHref="#icon-bookmark" />
        </svg>
        <span className="visually-hidden">To bookmarks</span>
      </button>
    </>
  )
}

export default Bookmark;
