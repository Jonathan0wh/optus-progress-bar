import { render, screen } from '@testing-library/react';

import ProgressBar from '../ProgressBar';

describe('ProgressBar Component', () => {
  test('render ProgressBar component with default 0% progress', () => {
    const { asFragment } = render(<ProgressBar />);
    const label = screen.getByText('0%');

    expect(label).toBeInTheDocument();
    expect(asFragment()).toMatchSnapshot();
  });

  test('render ProgressBar component with 50% progress', () => {
    const { asFragment } = render(<ProgressBar currentPercentage={50} />);
    const label = screen.getByText('50%');

    expect(label).toBeInTheDocument();
    expect(asFragment()).toMatchSnapshot();
  });
});
