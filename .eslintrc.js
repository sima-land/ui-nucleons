module.exports = {
  extends: require.resolve('@dev-dep/linters/eslint'),
  rules: {
    'react/prop-types': 'error',
  },
  overrides: [
    {
      files: [
        './**/__stories__/**/*.js',
        './**/__stories__/**/*.jsx',
        './**/*.test.js',
        './**/*.test.jsx',
      ],
      rules: {
        'require-jsdoc': 'off',
        'react/prop-types': 'off',
      },
    },
  ],
};
