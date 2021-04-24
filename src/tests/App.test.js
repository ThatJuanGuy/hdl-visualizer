import { render, screen } from '@testing-library/react';
import App from '../components/App/App';

test('renders title', () => {
  render(<App />);
  const linkElement = screen.getByText(/HDL Visualizer/i);
  expect(linkElement).toBeInTheDocument();
});
