require('@rushstack/eslint-patch/modern-module-resolution');

module.exports = {
  extends: [
    require.resolve('@sima-land/linters/eslint'),
    'plugin:storybook/recommended',
    'plugin:storybook/csf',
    'plugin:storybook/csf-strict',
  ],
  overrides: [
    {
      files: ['./**/__stories__/**/*', './**/__stories__/**/*', './**/*.test.*'],
      rules: {
        'require-jsdoc': 'off',
        'jsdoc/require-jsdoc': 'off',
      },
    },
    {
      files: ['./**/__stories__/**/*', './**/__stories__/**/*'],
      rules: {
        'import/no-anonymous-default-export': 'off',
      },
    },
    {
      files: ['*.stories.@(ts|tsx|js|jsx|mjs|cjs)'],
      rules: {
        'storybook/no-title-property-in-meta': 'off',
      },
    },
  ],
};
