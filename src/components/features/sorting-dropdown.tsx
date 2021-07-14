import { ReactElement, useState } from 'react';
import { SortingType } from '../../const';

function SortingDropdown(): ReactElement {
  const [activeSorting, setActiveSorting] = useState<string>(SortingType.POPULAR);
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <form className="places__sorting" action="#" method="get">
      <span className="places__sorting-caption">Sort by</span>
      {' '}
      <span className="places__sorting-type" role="button" tabIndex={0} onClick={() => setIsOpen(!isOpen)}>
        {activeSorting}
        <svg className="places__sorting-arrow" width={7} height={4}>
          <use xlinkHref="#icon-arrow-select" />
        </svg>
      </span>
      <ul className={`places__options places__options--custom ${isOpen ? 'places__options--opened' : ''}`}>
        {Object.values(SortingType).map((sortTypeName) => (
        <li key={sortTypeName} className={`places__option ${activeSorting === sortTypeName ? 'places__option--active' : ''}`}>
          <div role="button" tabIndex={0} onClick={() => setActiveSorting(sortTypeName)}>
            {sortTypeName}
          </div>
        </li>
        ))}
      </ul>
  </form>
  );
}

export default SortingDropdown;
