import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import App from './App';

describe('App', () => {
  test('renders progress bars demo', () => {
    render(<App />);
    const linkElement = screen.getByText(/Progress Bars Demo/i);

    expect(linkElement).toBeInTheDocument();
  });

  test('-25 and -25 on progress bar 1', () => {
    render(<App />);
    userEvent.click(screen.getByText('-25'));
    userEvent.click(screen.getByText('-25'));
    const label = screen.getByTestId('progress-bar-1');

    expect(label.innerHTML).toEqual('0%');
  });

  test('-25 on progress bar 1', () => {
    render(<App />);
    userEvent.click(screen.getByText('-25'));
    const label = screen.getByTestId('progress-bar-1');

    expect(label.innerHTML).toEqual('0%');
  });

  test('-10 on progress bar 2', () => {
    render(<App />);

    userEvent.click(screen.getByText('#progress1'));
    userEvent.click(screen.getByText('#progress2'));
    userEvent.click(screen.getByText('-10'));
    const label = screen.getByTestId('progress-bar-2');

    expect(label.innerHTML).toEqual('40%');
  });

  test('+10 on progress bar 2', () => {
    render(<App />);

    userEvent.click(screen.getByText('#progress1'));
    userEvent.click(screen.getByText('#progress2'));
    userEvent.click(screen.getByText('+10'));
    const label = screen.getByTestId('progress-bar-2');

    expect(label.innerHTML).toEqual('60%');
  });

  test('+25 on progress bar 3', () => {
    render(<App />);

    userEvent.click(screen.getByText('#progress1'));
    userEvent.click(screen.getByText('#progress3'));
    userEvent.click(screen.getByText('+25'));
    const label = screen.getByTestId('progress-bar-3');

    expect(label.innerHTML).toEqual('100%');
  });

  test('+25 and + 25 on progress bar 3', () => {
    render(<App />);

    userEvent.click(screen.getByText('#progress1'));
    userEvent.click(screen.getByText('#progress3'));
    userEvent.click(screen.getByText('+25'));
    userEvent.click(screen.getByText('+25'));
    const label = screen.getByTestId('progress-bar-3');

    expect(label.innerHTML).toEqual('125%');
  });
});
