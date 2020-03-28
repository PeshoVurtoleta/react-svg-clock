import React from 'react';
import { shallow, render } from "enzyme";
import App from './App';

test('<App />', () => {
  const wrapper = render(<App />);

  expect(wrapper).toMatchSnapshot();
});