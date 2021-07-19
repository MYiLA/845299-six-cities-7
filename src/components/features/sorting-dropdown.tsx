import { ReactElement, useState } from 'react';
import { useParams } from 'react-router-dom';
import { SortingType } from '../../const';
import SortingDropdownBtn from './sorting-dropdown-btn';

function SortingDropdown(): ReactElement {
  const { city, sorting = SortingType.POPULAR.path } = useParams<{
    city: string,
    sorting: string | undefined
  }>();
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const sortingArr = Object.values(SortingType);
  const activeSortType = sortingArr.find((sort) => sort.path === sorting) ?? SortingType.POPULAR;

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
        onKeyDown={(ev) => {
          if (ev.key === 'Enter') {
            setIsOpen(!isOpen);
          }
        }}
      >
        {activeSortType.name}
        <svg className="places__sorting-arrow" width={7} height={4}>
          <use xlinkHref="#icon-arrow-select" />
        </svg>
      </span>
      <ul
        className={`places__options places__options--custom ${isOpen ? 'places__options--opened' : ''}`}
        onMouseLeave={() => setIsOpen(false)}
      >
        {sortingArr.map((sortTypeName) => (
          <SortingDropdownBtn
            key={sortTypeName.path}
            sortType={sortTypeName}
            activeSortType={activeSortType}
            city={city}
          />
        ))}
      </ul>
    </form>
  );
}

export default SortingDropdown;
