module.exports = {
  extends: require.resolve('@dev-dep/linters/eslint'),
  rules: {
    'react/prop-types': 'error',
  },
  overrides: [
    {
      files: [
        './**/__stories__/**/*',
        './**/__stories__/**/*',
        './**/*.test.*',
        './**/*.test.*',
        '*.ts',
        '*.tsx',
      ],
      rules: {
        'require-jsdoc': 'off',
        'react/prop-types': 'off',
        'import/no-anonymous-default-export': 'off',
      },
    },
    {
      files: [
        '*.ts',
        '*.tsx',
      ],
      plugins: [
        '@typescript-eslint',
      ],
      parserOptions: {
        parser: '@typescript-eslint/parser',
      },
      extends: [
        'plugin:@typescript-eslint/recommended',
      ],
      rules: {
        indent: 'off',
        '@typescript-eslint/indent': [
          'error',
          2,
          {
            SwitchCase: 1,
            MemberExpression: 1,
            ObjectExpression: 1,
            ignoredNodes: [
              'TemplateLiteral *',
            ],
          },
        ],
        '@typescript-eslint/no-explicit-any': 'off',
        'no-extra-parens': 'off',
        'no-unused-vars': 'off',
        '@typescript-eslint/no-unused-vars': 'error',
        '@typescript-eslint/no-extra-parens': [
          'error',
          'all',
          {
            ignoreJSX: 'all',
            nestedBinaryExpressions: false,
          },
        ],
        'no-use-before-define': 'off',
        '@typescript-eslint/no-use-before-define': 'error',
        '@typescript-eslint/explicit-module-boundary-types': 'off',
        'jsdoc/require-param-type': 'off',
        'jsdoc/require-returns-type': 'off',
        'jsdoc/require-yields': 'off',
      },
    },
  ],
};
