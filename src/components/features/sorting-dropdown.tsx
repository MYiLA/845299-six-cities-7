import { ReactElement, useState } from 'react';
import { useHistory, useParams } from "react-router-dom";
import { AppRoute, SortingType } from '../../const';
import { getRoute } from '../../utils/common';

function SortingDropdown(): ReactElement {
  const history = useHistory();
  const { city, sorting = SortingType.POPULAR.path } = useParams<{ city:string | undefined, sorting: string | undefined }>();
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const sortingArr = Object.values(SortingType);
  const activeSorting = sortingArr.find((sort) => sort.path === sorting) ?? SortingType.POPULAR;

  return (
    <form className="places__sorting" action="#" method="get">
      <span className="places__sorting-caption">Sort by</span>
      {' '}
      <span
        className="places__sorting-type"
        role="button"
        tabIndex={0}
        onClick={() => setIsOpen(!isOpen)}
        onMouseEnter={() => setIsOpen(true)}
      >
        {activeSorting.name}
        <svg className="places__sorting-arrow" width={7} height={4}>
          <use xlinkHref="#icon-arrow-select" />
        </svg>
      </span>
      <ul
        className={`places__options places__options--custom ${isOpen ? 'places__options--opened' : ''}`}
        onMouseLeave={() => setIsOpen(false)}
      >
        {sortingArr.map((sortTypeName) => (
        <li key={sortTypeName.path} className={`places__option ${activeSorting.path === sortTypeName.path ? 'places__option--active' : ''}`}>
          <div role="button" tabIndex={0} onClick={() => history.push(`${getRoute(AppRoute.MAIN)}${city}/${sortTypeName.path}`)}>
            {sortTypeName.name}
          </div>
        </li>
        ))}
      </ul>
  </form>
  );
}

export default SortingDropdown;
