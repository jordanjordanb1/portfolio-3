import React from 'react';
import Button from './Default';
import { withKnobs, text, select, boolean } from '@storybook/addon-knobs';
import styled from 'styled-components/macro';

const DecoratorDiv = styled.div`
  display: flex;
  justify-content: space-evenly;
  width: 50%;
  margin: 0 auto;
  flex-wrap: wrap;
  height: auto;
  align-content: strech;

  && > * {
    margin-top: 30px;
  }
`;

export default {
  title: 'Buttons',
  component: Button,
  decorators: [(storyFn: any) => <DecoratorDiv>{storyFn()}</DecoratorDiv>, withKnobs],
};

export const Default = () => {
  const innerText = text('Text', 'Custom Button');
  const variant = select('Variant', ['text', 'outlined', 'contained'], 'outlined');
  const size = select('Size', ['small', 'medium', 'large'], 'medium');
  const rounded = boolean('Rounded', false);
  const disable = boolean('Disable', false);
  const disableElevation = boolean('Disable Elevation', false);
  const disableRipple = boolean('Disable Ripple', false);
  const disableFocusRipple = boolean('Disable Focus Ripple', false);
  const disableTouchRipple = boolean('Disable Touch Ripple', false);

  return (
    <>
      <Button href="/" variant="text">
        Submit
      </Button>
      <Button variant="outlined">Click Me</Button>
      <Button href="/" variant="contained">
        Login
      </Button>
      <Button href="/" disabled variant="text">
        Disabled
      </Button>
      <Button
        href="/"
        disableElevation
        disableRipple
        disableFocusRipple
        disableTouchRipple
        variant="contained"
      >
        No Styles
      </Button>
      <Button variant="contained">Just a button</Button>
      <br />
      <br />
      <br />
      <Button
        variant={variant}
        size={size}
        rounded={rounded}
        disabled={disable}
        disableElevation={disableElevation}
        disableRipple={disableRipple}
        disableFocusRipple={disableFocusRipple}
        disableTouchRipple={disableTouchRipple}
      >
        {innerText}
      </Button>
      <Button
        variant={variant}
        size={size}
        rounded={rounded}
        disabled={disable}
        disableElevation={disableElevation}
        disableRipple={disableRipple}
        disableFocusRipple={disableFocusRipple}
        disableTouchRipple={disableTouchRipple}
      >
        {innerText}
      </Button>
      <Button
        variant={variant}
        size={size}
        rounded={rounded}
        disabled={disable}
        disableElevation={disableElevation}
        disableRipple={disableRipple}
        disableFocusRipple={disableFocusRipple}
        disableTouchRipple={disableTouchRipple}
      >
        {innerText}
      </Button>
      <Button
        variant={variant}
        size={size}
        rounded={rounded}
        disabled={disable}
        disableElevation={disableElevation}
        disableRipple={disableRipple}
        disableFocusRipple={disableFocusRipple}
        disableTouchRipple={disableTouchRipple}
      >
        {innerText}
      </Button>
    </>
  );
};
