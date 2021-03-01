module.exports = {
  extends: require.resolve('@dev-dep/linters/stylelint'),
  ignoreFiles: [
    '**/*.ts',
    '**/*.tsx',
  ],
};
