module.exports = {
  env:
    {
      browser:
        true,
      jest:
        true,
    },
  plugins:
    [
      '@typescript-eslint',
      'react',
    ],
  settings:
    {
      react:
        {
          pragma:
            'React',
          version:
            '18.0',
        },
      'import/resolver':
        {
          alias: {
            map: [['@', './src']],
            extensions: ['.ts', '.tsx', '.js', '.jsx', '.json'],
          },
          node:
            {
              extensions:
                [
                  '.js',
                  '.jsx',
                  '.ts',
                  '.tsx',
                ],
              moduleDirectory:
                [
                  'node_modules',
                  './',
                ],
            },
        },
    },
  extends:
    [
      'airbnb',
      'airbnb/hooks',
    ],
  parser:
    '@typescript-eslint/parser',
  parserOptions:
    {
      ecmaFeatures:
        {
          jsx:
            true,
        },
    },
  rules:
    {
      '@typescript-eslint/ban-ts-comment': 'off',
      '@typescript-eslint/ban-ts-ignore': 'off',
      '@typescript-eslint/camelcase': 'off',
      '@typescript-eslint/explicit-module-boundary-types': 'off',
      '@typescript-eslint/no-explicit-any': 'off',
      '@typescript-eslint/no-undef': 'off',
      '@typescript-eslint/no-use-before-define': 'off',
      '@typescript-eslint/no-var-requires': 'off',
      'import/extensions': [
        'error',
        'ignorePackages',
        {
          js: 'never',
          jsx: 'never',
          ts: 'never',
          tsx: 'never',
        },
      ],
      'import/prefer-default-export': 'off',
      'no-console': 'warn',
      'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
      'no-eval': 'error',
      'react/function-component-definition': 'off',
      'react/jsx-filename-extension': [
        2,
        {
          extensions: [
            '.js',
            '.jsx',
            '.ts',
            '.tsx',
          ],
        },
      ],
      'react/react-in-jsx-scope': 'off',
    },
  overrides: [
    {
      files: ['src/stores/*.ts'], // Adjust the path to your folder and file extensions
      rules: {
        'no-param-reassign': 'off',
      },
    },
  ],
};
