import React from 'react';
import renderer from 'react-test-renderer';

import Profile from '../../pages/Profile';

it('matches display snapshot', () => {
  const tree = renderer.create(
    <Profile />,
  ).toJSON();
  expect(tree).toMatchSnapshot();
});
