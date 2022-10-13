module.exports = {
  core: {
    builder: 'webpack5',
  },
  stories: ['./index.stories.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: [
    '@storybook/addon-actions',
    '@storybook/addon-storysource',
    '@storybook/addon-backgrounds',
    {
      name: '@storybook/addon-docs',
      options: {
        transcludeMarkdown: true,
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
