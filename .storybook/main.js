module.exports = {
  core: {
    builder: 'webpack5',
  },
  stories: ['./index.stories.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: [
    !process.env.TEST_ENV && '@storybook/addon-storysource',
    !process.env.TEST_ENV && '@storybook/addon-backgrounds',
    {
      name: '@storybook/addon-docs',
      options: {
        transcludeMarkdown: true,
        sourceLoaderOptions: {
          injectStoryParameters: false,
        },
      },
    },
  ].filter(Boolean),

  typescript: process.env.TEST_ENV
    ? undefined
    : {
        check: false,
        checkOptions: {},
        reactDocgen: 'react-docgen-typescript',
        reactDocgenTypescriptOptions: {
          shouldExtractLiteralValuesFromEnum: true,
          propFilter: prop => !prop.parent || !/node_modules/.test(prop.parent.fileName),
        },
      },
};
