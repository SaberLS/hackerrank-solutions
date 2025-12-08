import eslint from '@eslint/js'
import eslintPluginUnicorn from 'eslint-plugin-unicorn'
import { defineConfig } from 'eslint/config'
import globals from 'globals'
import type { Config, ConfigArray } from 'typescript-eslint'
import tseslint from 'typescript-eslint'

const createConfig = (__dirname: string): Config => {
  console.info({ __dirname })
  const ts = defineConfig(
    eslint.configs.recommended,
    tseslint.configs.recommendedTypeChecked,
    tseslint.configs.stylisticTypeChecked
  ).map(config => ({
    ...config,
    files: ['**/*.{mts,cts,tsx,ts}'],
  }))

  const baseEslintConfig = [
    {
      name: 'Ignores',
      ignores: ['public/**', 'node_modules/**', 'dist/**'],
    },
    {
      files: ['**/*.{mts,cts,tsx,ts}'],
      languageOptions: {
        parserOptions: {
          projectService: true,
          tsconfigRootDir: __dirname,
        },
      },
    },
    ...ts,
    {
      settings: {
        react: {
          version: 'detect',
        },
      },
    },
    eslintPluginUnicorn.configs.recommended,
    {
      rules: {
        'no-undef': 'error',
        'react/react-in-jsx-scope': 'off',
        'unicorn/prevent-abbreviations': 'off',
      },
    },
    {
      files: ['**/*.{jsx,tsx}'],
      rules: {
        'no-console': 'warn',
        'unicorn/filename-case': [
          'error',
          {
            case: 'pascalCase',
          },
        ],
      },
    },
    {
      files: ['**/*.{js,mjs,mts,cts,cjs,ts,}'],
      rules: {
        'unicorn/filename-case': 'off',
      },
    },
    {
      files: ['**/*solutions/**/*.{js,mjs,mts,cts,cjs,ts,}'],
      rules: {
        'unicorn/filename-case': [
          'error',
          {
            case: 'kebabCase',
          },
        ],
      },
    },
    {
      files: ['**/*.{js,mjs,mts,cts,cjs,ts,jsx,tsx}'],
      languageOptions: {
        ecmaVersion: 'latest',
        globals: { ...globals.node },
      },
    },
  ]

  return baseEslintConfig as ConfigArray
}

export default createConfig
export { createConfig }
