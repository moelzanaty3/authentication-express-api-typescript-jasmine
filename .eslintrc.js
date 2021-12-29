module.exports = {
  env: {
    es2021: true,
    node: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'prettier',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 13,
    sourceType: 'module',
  },
  plugins: ['@typescript-eslint', 'prettier'],
  rules: {
    'prettier/prettier': 2, // Means error
    semi: ['error', 'never'],
    quotes: ['error', 'single'],
    'no-console': 1, // Means warning
    'no-var': 'error',
    'prefer-const': 'error',
  },
}
