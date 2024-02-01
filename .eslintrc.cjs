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
      files: ['./**/*.{jsx,tsx}'],
      rules: {
        'react/jsx-uses-react': 'off',
        'react/react-in-jsx-scope': 'off',
      },
    },

    // stories
    {
      files: ['./**/__stories__/**/*'],
      rules: {
        'no-alert': 'off',
        'no-console': 'off',
        'import/no-anonymous-default-export': 'off',
        'storybook/no-title-property-in-meta': 'off',
      },
    },

    // тесты и stories
    {
      files: ['./**/__stories__/**/*', './**/*.test.*', './**/*.spec.*'],
      rules: {
        'require-jsdoc': 'off',
        'jsdoc/require-jsdoc': 'off',
      },
    },
  ],
};
