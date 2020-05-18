import React from 'react';

import Loader from './Loader';

export default {
  component: Loader,
  title: 'Loader',
  decorators: [story => <div style={{ padding: '3rem' }}>{story()}</div>],
};

export const Default = () => <Loader />;

export const Big = () => <Loader size={100} />;
