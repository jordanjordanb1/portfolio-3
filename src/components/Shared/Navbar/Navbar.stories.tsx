import React from 'react';
import Navbar from './Navbar';
import { withKnobs, number } from '@storybook/addon-knobs';

export default {
  component: Navbar,
  title: 'Navbar',
  decorators: [withKnobs],
};

export const Default = () => {
  const elevation = number('Elevation', 0, {
    range: true,
    min: 0,
    max: 24,
    step: 1,
  });

  return <Navbar elevation={elevation} analytics={false} />;
};
