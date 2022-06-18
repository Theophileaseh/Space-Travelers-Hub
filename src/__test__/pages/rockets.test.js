import React from 'react';
import renderer from 'react-test-renderer';

import Rockets from '../../pages/Rockets';

it('matches display snapshot', () => {
  const tree = renderer.create(
    <Rockets />,
  ).toJSON();
  expect(tree).toMatchSnapshot();
});
