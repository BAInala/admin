module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
    es6: true,
  },
  extends: [
    'plugin:vue/vue3-essential',
    '@vue/standard'
  ],
  parserOptions: {
    parser: 'babel-eslint'
  },
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger':'off',
    'no-unused-vars': 'off',
    'no-redeclare': 'warn',
    'eqeqeq':"off"
  },
  parserOptions: {
    parser: 'babel-eslint'
  }
}
