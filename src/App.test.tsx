import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import App from './App';
import { store } from './app/store';

test('[smoke test] renders the basic default grid', () => {
  render(<Provider store={store}><App /></Provider>);
  
  const aliveFilterOption = screen.getByText(/alive/i);
  const deadFilterOption = screen.getByText(/dead/i);

  expect(aliveFilterOption).toBeInTheDocument();
  expect(deadFilterOption).toBeInTheDocument();
});
