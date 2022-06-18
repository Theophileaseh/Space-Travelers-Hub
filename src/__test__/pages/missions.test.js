import React from 'react';
import renderer from 'react-test-renderer';

import Missions from '../../pages/Missions';

it('matches display snapshot', () => {
  const tree = renderer.create(
    <Missions />,
  ).toJSON();
  expect(tree).toMatchSnapshot();
});
