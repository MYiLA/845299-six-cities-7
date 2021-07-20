import { PropsWithChildren, ReactElement } from 'react';
import useHotel from '../../hooks/selectors/use-hotel';
import NotFoundPage from './not-found';
import { MESSAGE_NOT_INTERNET } from '../../const';
import Spinner from '../features/spinner';
import ErrorMessage from '../features/error-message';
import { RoomParams } from './type';
import RoomView from './room-view';

function Room(params: PropsWithChildren<RoomParams>): ReactElement {
  const { isAuth = false } = params;
  const {
    hotels = [], hotel, isLoadingHotel, isError,
  } = useHotel();

  if (isLoadingHotel) {
    return <Spinner />;
  }

  if (isError) {
    return <ErrorMessage text={`Не удалось загрузить информацио об отеле. ${MESSAGE_NOT_INTERNET}`} />;
  }

  if (hotel === undefined) {
    return <NotFoundPage />;
  }

  return (
    <RoomView isAuth={isAuth} hotel={hotel} hotels={hotels} />
  );
}

export default Room;
