import { ReactElement } from 'react';

function DropdownSort(): ReactElement {
  return (
    <form className="places__sorting" action="#" method="get">
      <span className="places__sorting-caption">Sort by</span>
      {' '}
      <span className="places__sorting-type" role="button" tabIndex={0}>
        Popular
        <svg className="places__sorting-arrow" width={7} height={4}>
          <use xlinkHref="#icon-arrow-select" />
        </svg>
      </span>
      <ul className="places__options places__options--custom places__options--opened">
        <li className="places__option places__option--active">
          <div role="button" tabIndex={0}>
            Popular
          </div>
        </li>
        <li className="places__option">
          <div role="button" tabIndex={0}>
            Price: low to high
          </div>
        </li>
        <li className="places__option">
          <div role="button" tabIndex={0}>
            Price: high to low
          </div>
        </li>
        <li className="places__option">
          <div role="button" tabIndex={0}>
            Top rated first
          </div>
        </li>
      </ul>
  </form>
  );
}

export default DropdownSort;
