import { defineConfig } from '@rsbuild/core';
import { pluginReact } from '@rsbuild/plugin-react';

const path = require('path');
const deps = require('./package.json').dependencies;

export default defineConfig({
  server: {
    port: 11072,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, PATCH, OPTIONS',
      'Access-Control-Allow-Headers': 'X-Requested-With, content-type, Authorization'
    }
  },
  output: {
    target: 'web',
    charset: 'utf8',
    filenameHash: 'fullhash:16',
    filename: {
      js: '[name].[contenthash].chunk.js',
      css: '[name].[contenthash].chunk.css'
    },
    distPath: {
      root: 'dist',
      js: './',
      jsAsync: './',
      css: './',
      cssAsync: './',
    },
    cleanDistPath: true
  },
  performance: {
    bundleAnalyze: {
      analyzerMode: 'static'
    }
  },
  source: {
    alias: {
      '@': path.resolve(__dirname, './src')
    },
    entry: {
      index: path.resolve(__dirname, './src/index.ts'),
    },
    tsconfigPath: './tsconfig.base.json',
  },
  html: {
    template: './src/index.html',
  },
  moduleFederation: {
    options: {
      name: `${process.env.PUBLIC_ID}`,
      filename: 'vendor.js',
      remotes: {
        core: `core@${process.env.PUBLIC_CORE_ENTRY}`
      },
      exposes: {
        './App': './src/App',
      },
      shared: {
        react: {
          singleton: true,
          requiredVersion: deps.react
        },
        'react-dom': {
          singleton: true,
          requiredVersion: deps['react-dom']
        },
        'react-router-dom': {
          singleton: true,
          requiredVersion: deps['react-router-dom']
        },
        '@fluentui/react-components': {
          singleton: true,
          requiredVersion: deps['@fluentui/react-components']
        },
        '@fluentui/react-icons': {
          singleton: true,
          requiredVersion: deps['@fluentui/react-icons']
        }
      }
    }
  },
  plugins: [pluginReact()]
});
