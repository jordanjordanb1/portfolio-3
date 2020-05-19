const path = require('path');
const merge = require('webpack-merge');

module.exports = {
  stories: ['../src/components/**/*.stories.(ts|tsx|js|jsx)'],
  addons: [
    '@storybook/addon-actions',
    '@storybook/addon-links',
    'storybook-addon-jsx/register',
    '@storybook/preset-create-react-app',
    '@storybook/addon-knobs/register',
    '@storybook/addon-viewport/register',
    '@storybook/addon-storysource',
    '@storybook/addon-backgrounds/register',
    '@storybook/addon-a11y/register',
    'storybook-formik/register',
  ],
  webpackFinal: async config =>
    merge.smart(config, {
      module: {
        rules: [
          {
            test: /\.(ts|tsx)$/,
            loader: require.resolve('babel-loader'),
            options: {
              presets: [['react-app', { flow: false, typescript: true }]],
            },
          },
          {
            test: /\.stories\.tsx?$/,
            loaders: [
              {
                loader: require.resolve('@storybook/source-loader'),
                options: { parser: 'typescript' },
              },
            ],
            enforce: 'pre',
          },
        ],
      },
      resolve: {
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
        alias: {
          '@/analytics': path.join(__dirname, '../src/utils/analytics'),
          '@/interfaces': path.join(__dirname, '../typescript/interfaces'),
          '@/components': path.join(__dirname, '../src/components'),
          '@/shared': path.join(__dirname, '../src/components/Shared'),
          '@/config': path.join(__dirname, '../src/config'),
          '@/redux': path.join(__dirname, '../src/redux'),
          '@/utils': path.join(__dirname, '../src/utils'),
          '@/stories': path.join(__dirname, '../src/stories'),
        },
      },
    }),
};
