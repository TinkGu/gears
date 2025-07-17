module.exports = {
  root: true,
  extends: ['react-ts-sonar'],
  rules: {
    'no-console': 'error',
    'import/named': 0,
    'sonarjs/prefer-immediate-return': 0,
    'import/no-unresolved': 0,
  },
  overrides: [
    {
      files: ['scripts/*/*.js'],
      rules: {
        '@typescript-eslint/no-var-requires': 'off',
      },
    },
    {
      files: ['**/demos/**/*'],
      rules: {
        'no-inline-styles/no-inline-styles': 'off',
        'no-console': 'off',
      },
    },
  ],
};
