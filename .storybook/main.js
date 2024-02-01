module.exports = {
  stories: ['./index.stories.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],

  staticDirs: [{ from: './assets', to: '/assets' }],

  addons: [
    !process.env.TEST_ENV && {
      name: '@storybook/addon-storysource',
      options: {
        loaderOptions: {
          injectStoryParameters: false,
        },
      },
    },
    !process.env.TEST_ENV && '@storybook/addon-backgrounds',
    {
      name: '@storybook/addon-docs',
      options: {
        transcludeMarkdown: true,
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

  framework: {
    name: '@storybook/react-webpack5',
    options: {},
  },

  docs: {
    autodocs: true,
  },

  core: {
    disableTelemetry: true,
  },

  babel: async () => ({
    presets: [
      '@babel/preset-env',
      ['@babel/preset-react', { runtime: 'automatic' }],
      '@babel/preset-typescript',
    ],
  }),
};
