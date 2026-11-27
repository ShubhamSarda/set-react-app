import '@testing-library/jest-dom/vitest';
import { render, screen } from '@testing-library/react';
import App from './App.jsx';

test('renders the Learn React link', () => {
  render(<App />);

  expect(screen.getByRole('link', { name: 'Learn React' })).toBeInTheDocument();
});
