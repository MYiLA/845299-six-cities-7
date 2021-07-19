import { PropsWithChildren, ReactElement } from 'react';
import { useHistory } from 'react-router';
import { AppRoute } from '../../const';
import { getRoute } from '../../utils/common';
import { SortingDropdownBtnParams } from './types';

function SortingDropdownBtn(params: PropsWithChildren<SortingDropdownBtnParams>): ReactElement {
  const { sortType, activeSortType, city } = params;
  const history = useHistory();

  return (
    <li className={`places__option ${activeSortType.path === sortType.path ? 'places__option--active' : ''}`}>
      <div
        role="button"
        tabIndex={0}
        onClick={() => history.push(`${getRoute(AppRoute.MAIN)}${city}/${sortType.path}`)}
        onKeyDown={(ev) => {
          if (ev.key === 'Enter') {
            history.push(`${getRoute(AppRoute.MAIN)}${city}/${sortType.path}`);
          }
        }}
      >
        {sortType.name}
      </div>
    </li>
  );
}

export default SortingDropdownBtn;
