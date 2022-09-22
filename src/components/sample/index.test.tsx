import { render, screen } from '@testing-library/react';
import { MyComponent } from './index';

test('render Hello Test', () => {
  render(<MyComponent />);
  expect(screen.getByText('Hello Test')).toBeInTheDocument();
});
