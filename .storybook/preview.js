import { withA11y } from '@storybook/addon-a11y';
import { action } from '@storybook/addon-actions';
import '@storybook/addon-console';
import { withConsole } from '@storybook/addon-console';
import { addDecorator, addParameters } from '@storybook/react';
import Router from 'next/router';
import { jsxDecorator } from 'storybook-addon-jsx';
import withFormik from 'storybook-formik';

const actionWithPromise = e => {
  action('link clicked')(e);
  return new Promise(resolve => resolve());
};

Router.router = {
  push: actionWithPromise,
  replace: actionWithPromise,
  prefetch: actionWithPromise,
};

addParameters({
  backgrounds: [
    { name: 'default', value: '#171717', default: true },
    { name: 'almond', value: '#eee0cb' },
    { name: 'tuscany', value: '#baa898' },
  ],
});

addDecorator(withA11y);
addDecorator(jsxDecorator);
addDecorator(withFormik);
addDecorator((storyFn, context) => withConsole()(storyFn)(context));
