module.exports = {
  core: {
    builder: 'webpack5',
  },
  stories: ['../src/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: [
    '@storybook/addon-actions',
    '@storybook/addon-storysource',
    '@storybook/addon-backgrounds',
    {
      name: '@storybook/addon-docs',
      options: {
        sourceLoaderOptions: {
          injectStoryParameters: false,
        },
      },
    },
  ],
  typescript: {
    check: false,
    checkOptions: {},
    reactDocgen: 'react-docgen-typescript',
    reactDocgenTypescriptOptions: {
      shouldExtractLiteralValuesFromEnum: true,
      propFilter: prop => !prop.parent || !/node_modules/.test(prop.parent.fileName),
    },
  },
};
