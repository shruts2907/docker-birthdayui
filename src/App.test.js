import React from 'react';
import { render } from '@testing-library/react';
import renderer from 'react-test-renderer';
import App from './components/App';

test('Renders greetings Hello', () => {
  const { getByText } = render(<App />);
  const greetElement = getByText(/Hello/i);
  expect(greetElement).toBeInTheDocument();
});

test('App snapshot test updated', () => {
  const component = renderer.create(<App />);
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
