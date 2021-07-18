import { render, fireEvent } from '@testing-library/react';
import { createMemoryHistory, MemoryHistory } from 'history';
import { Router } from 'react-router-dom';
import NotFound from './not-found';

const renderOptions = (history: MemoryHistory<unknown>) => ({
  wrapper: (props) => (
    <Router history={history}>
      {props.children}
    </Router>
  )
});

describe('поведение компонента not found', () => {
  it('делает разметку на экране', () => {
    const history = createMemoryHistory();
    const { getByText } = render(<NotFound />, renderOptions(history));
    expect(getByText('404 Not Found')).toBeTruthy();
  });

  it('делает разметку ссылки на стартовую страницу', () => {
    const history = createMemoryHistory();
    const { getByText } = render(<NotFound />, renderOptions(history));
    const link = getByText('Go back');
    expect(link).toBeTruthy();
  })

  it('переходит на париж по клику', () => {
    const history = createMemoryHistory();
    const { getByText } = render(<NotFound />, renderOptions(history));
    const link = getByText('Go back');
    fireEvent.click(link);
    expect(history.location.pathname).toBe('/Paris')
  })
});
