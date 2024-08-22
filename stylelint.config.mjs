export default {
  extends: import.meta.resolve('@sima-land/linters/stylelint'),
  ignoreFiles: ['**/*.js', '**/*.jsx', '**/*.ts', '**/*.tsx'],
  rules: {
    'scss/dollar-variable-colon-space-after': null,
  },
};
