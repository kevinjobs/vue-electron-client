module.exports = {
  root: true,
  env: {
    node: true
  },
  'extends': [
    'plugin:vue/essential',
    '@vue/standard'
  ],
  rules: {
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'semi': ['off', 'always'],
    'indent': ['error', 2],
    'space-before-function-paren': 0,
    'object-curly-spacing': 0
  },
  parserOptions: {
    parser: 'babel-eslint'
  }
}