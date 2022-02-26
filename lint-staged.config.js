module.exports = {
  // '*.{js,ts}': ['pnpm run lint:eslint', 'pnpm run lint:prettier', 'pnpm run test'],
  '*.{js,ts}': ['pnpm run lint:eslint', 'pnpm run lint:prettier'],
  'package.json': ['pnpm run lint:prettier']
}
