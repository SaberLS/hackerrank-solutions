/**
 * @see https://prettier.io/docs/configuration
 * @type {import("prettier").Config}
 */
const config = {
  trailingComma: 'es5',
  useTabs: false,
  tabWidth: 2,
  endOfLine: 'lf',
  printWidth: 80,
  singleQuote: true,
  semi: false,
  bracketSpacing: true,
  objectWrap: 'preserve',
  arrowParens: 'avoid',
  experimentalTernaries: true,
  embeddedLanguageFormatting: 'auto',
  proseWrap: 'always',
  jsxSingleQuote: false,
  bracketSameLine: false,
  singleAttributePerLine: true,
  htmlWhitespaceSensitivity: 'css',
}

export default config
