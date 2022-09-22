import { render, screen } from '@testing-library/react';
import { MyComponent } from './index';

test('render Hello Test', () => {
  render(<MyComponent />);
  screen.debug();
  expect(screen.getByText('Hello Test')).toBeInTheDocument();
});
