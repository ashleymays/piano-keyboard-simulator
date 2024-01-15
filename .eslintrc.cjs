module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  extends: ['google', 'plugin:react/recommended'],
  overrides: [
    {
      env: {
        node: true
      },
      files: ['.eslintrc.{js,cjs}'],
      parserOptions: {
        sourceType: 'script'
      }
    }
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module'
  },
  plugins: ['react', 'prettier'],
  rules: {
    'comma-dangle': 'off',
    'object-curly-spacing': 'off',
    'prefer-const': 'error',
    'react/react-in-jsx-scope': 'off',
    indent: 'off',
    'require-jsdoc': 'warn',
    'react/prop-types': 'warn',
    'guard-for-in': 'off',
    'max-len': 'warn'
  }
};
