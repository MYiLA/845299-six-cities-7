import { ReactElement } from 'react';
import { useParams, Redirect } from 'react-router-dom';
import MainView from './main-view';
import NotFound from './not-found';
import { useCitiesList } from '../../hooks/selectors/use-cities-list';
import useIsEmpty from '../../hooks/selectors/use-is-empty';
import { AppRoute } from '../../const';
import { getRoute } from '../../utils/common';
import useCurrentHotels from '../../hooks/selectors/use-current-hotels';
import ErrorMessage from '../features/error-message';

function Main(): ReactElement {
  const { city, sorting } = useParams<{ city:string | undefined, sorting: string | undefined }>();
  const isEmpty = useIsEmpty();
  const { activeCity, cities } = useCitiesList(city);
  const { hotels, isLoading, isError } = useCurrentHotels({ activeCity, sortingType: sorting });

  if (typeof city === 'undefined' || city === '') {
    return <Redirect to={getRoute(AppRoute.DEFAULT_CITY)} />;
  }

  if (typeof activeCity === 'undefined') {
    return <NotFound />;
  }

  return (
    <>
      {(isError
      && <ErrorMessage text="Не удалось загрузить отели. Проверьте интернет-соединение и перезагрузите страницу" />
      )}
      <MainView
        isLoading={isLoading}
        activeCity={activeCity}
        isEmpty={isEmpty}
        cities={cities}
        hotels={hotels}
      />
    </>
  );
}

export default Main;
