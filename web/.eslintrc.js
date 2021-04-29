module.exports = {
  parser: "@typescript-eslint/parser",
  parserOptions: {
    project: "tsconfig.json",
    sourceType: "module",
  },
  plugins: [
    "@typescript-eslint/eslint-plugin",
    "simple-import-sort",
    "modules-newline",
  ],
  extends: ["airbnb-typescript/base"],
  root: true,
  env: {
    node: true,
    jest: true,
  },
  rules: {
    "array-bracket-spacing": [
      "warn",
      "always",
      {
        singleValue: false,
      },
    ],
    "class-methods-use-this": "off",
    "import/prefer-default-export": "off",
    "modules-newline/import-declaration-newline": "warn",
    "multiline-ternary": ["warn", "always"],
    "object-curly-newline": [
      "warn",
      {
        ImportDeclaration: { multiline: true, minProperties: 3 },
      },
    ],
    "object-shorthand": "off",
    "operator-linebreak": [
      "warn",
      "after",
      { overrides: { "?": "before", ":": "before" } },
    ],
    "simple-import-sort/imports": "warn",
    "simple-import-sort/exports": "warn",
    "@typescript-eslint/comma-dangle": "off",
  },
};
