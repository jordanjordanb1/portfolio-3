import React from 'react';
import Branding from './Branding';
import { withKnobs, text, select } from '@storybook/addon-knobs';

export default {
  component: Branding,
  title: 'Navbar Branding',
  decorators: [withKnobs],
};

export const Default = () => {
  const name = text('Name', 'Jordan Barbosa');
  const variant = select('Variant', ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'], 'h1');

  return <Branding variant={variant} href="/" text={name} />;
};
