module.exports = {
  extends: require.resolve('@dev-dep/linters/stylelint'),
  ignoreFiles: [
    '**/*.js',
    '**/*.jsx',
    '**/*.ts',
    '**/*.tsx',
  ],
};
