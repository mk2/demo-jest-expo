import { render } from '@testing-library/react-native';
import React from 'react';
import App from '../App';

it('works', () => {
  const { getByText } = render(<App />);

  expect(getByText('Hello Expo')).toBeTruthy();
});
