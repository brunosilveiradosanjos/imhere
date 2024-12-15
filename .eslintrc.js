module.exports = {
    env: {
      browser: true,
      es2021: true,
    },
    extends: [
      'eslint:recommended',
      'plugin:prettier/recommended', // Use the recommended rules from @eslint-plugin-prettier
    ],
    parserOptions: {
      ecmaVersion: 12,
      sourceType: 'module',
    },
    rules: {
      semi: ['error', 'never'], // No semicolons
      quotes: ['error', 'single'], // Single quotes
    },
  }