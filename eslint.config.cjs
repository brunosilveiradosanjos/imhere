module.exports = {
  languageOptions: {
    globals: {
      // Define any global variables if needed
    },
    parserOptions: {
      ecmaVersion: 12,
      sourceType: 'module', // Optional depending on your setup
    },
  },
  rules: {
    semi: ['error', 'never'],
    quotes: ['error', 'single'],
  },
}
