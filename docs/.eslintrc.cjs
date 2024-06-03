module.exports = {
  overrides: [
    {
      files: ['./**/*.{js,jsx,ts,tsx}'],
      rules: {
        'no-alert': 'off',
        'require-jsdoc': 'off',
        'jsdoc/require-jsdoc': 'off',
        'import/no-anonymous-default-export': 'off',
      },
    },
  ],
};
