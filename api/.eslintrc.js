module.exports = {
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: 'tsconfig.json',
    sourceType: 'module'
  },
  plugins: ['@typescript-eslint/eslint-plugin', 'simple-import-sort'],
  extends: ['plugin:@typescript-eslint/eslint-recommended', 'plugin:@typescript-eslint/recommended'],
  root: true,
  env: {
    node: true,
    jest: true
  },
  rules: {
    '@typescript-eslint/interface-name-prefix': 'off',
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    'simple-import-sort/imports': 'warn',
    'simple-import-sort/exports': 'warn',
    'array-bracket-newline': [
      'warn',
      {
        multiline: true,
        minItems: 4
      }
    ],
    'array-bracket-spacing': [
      'warn',
      'always',
      {
        singleValue: false
      }
    ],
    'array-element-newline': [
      'warn',
      {
        multiline: true,
        minItems: 4
      }
    ],
    'max-len': [
      'warn',
      {
        code: 120
      }
    ],
    'object-curly-newline': [
      'warn',
      {
        ObjectExpression: { multiline: true, minProperties: 2 },
        ObjectPattern: { multiline: true, minProperties: 2 },
        ImportDeclaration: { multiline: true, minProperties: 3 },
        ExportDeclaration: { multiline: true, minProperties: 3 }
      }
    ],
    'no-trailing-spaces': 'warn'
  }
};
