module.exports = {
  trailingComma: 'all',
  tabWidth: 2,
  semi: true,
  singleQuote: true,
  endOfLine: 'lf',
  printWidth: 140,
  bracketSpacing: true,
  arrowParens: 'always',
  importOrder: [
    './styles/entry.scss',
    '^react',
    '^antd',
    '^(?!(([./])|(@|src)/))',
    '^(@|src)/',
    '^[./].*(?<!(css|scss|less|sass))$',
    '\\.(css|scss|less|sass)$',
  ],
  // fix pnpm prettier 集成问题，see: https://github.com/trivago/prettier-plugin-sort-imports/issues/51#issuecomment-1018985805
  plugins: [require.resolve('@trivago/prettier-plugin-sort-imports')],
};
