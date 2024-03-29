import React from 'react';
import renderer from 'react-test-renderer';

import Navbar from '../../components/Navbar';

it('matches display snapshot', () => {
  const tree = renderer.create(
    <Navbar />,
  ).toJSON();
  expect(tree).toMatchSnapshot();
});
