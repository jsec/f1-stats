module.exports = {
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: 'tsconfig.json',
    sourceType: 'module'
  },
  plugins: ['@typescript-eslint/eslint-plugin', 'simple-import-sort', 'modules-newline'],
  extends: [
    //'plugin:@typescript-eslint/eslint-recommended',
    //'plugin:@typescript-eslint/recommended',
    'airbnb-typescript'
  ],
  root: true,
  env: {
    node: true,
    jest: true
  },
  rules: {
    'array-bracket-spacing': [
      'warn',
      'always',
      {
        singleValue: false
      }
    ],
    'import/prefer-default-export': 'off',
    'modules-newline/import-declaration-newline': 'warn',
    'object-curly-newline': [
      'warn',
      {
        ImportDeclaration: { multiline: true, minProperties: 3 }
      }
    ],
    'object-shorthand': 'off',
    '@typescript-eslint/comma-dangle': 'off'
  }
};
