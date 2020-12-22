module.exports = {
  extends: [
    'airbnb',
    'eslint:recommended',
    'plugin:import/errors',
    'plugin:react/recommended',
    'plugin:vue/recommended',
    'plugin:jsx-a11y/recommended',
    'plugin:prettier/recommended',
    'prettier/react',
    'prettier/vue',
  ],
  plugins: ['react-hooks'],
  rules: {
    'prettier/prettier': ['error'],
    'no-var': 'error',
    'prefer-const': 'error',
    'prefer-arrow-callback': 'error',
    'no-unused-vars': 'warn',
    quotes: ['error', 'single'],
    indent: [
      'error',
      2,
      {
        SwitchCase: 1,
        ignoredNodes: ['TemplateLiteral'],
      },
    ],
    'template-curly-spacing': 0,
  },
}
