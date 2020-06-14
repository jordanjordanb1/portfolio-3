import React from 'react';
import RightSideNav from './RightSideNav';
import { withKnobs, number } from '@storybook/addon-knobs';

export default {
  component: RightSideNav,
  title: 'Right Side Nav',
  decorators: [withKnobs],
};

export const Default = () => {
  const elevation = number('Elevation', 0, {
    range: true,
    min: 0,
    max: 24,
    step: 1,
  });

  return <RightSideNav />;
};
