import path from 'node:path';
import rspack from '@rspack/core';

/** @type {import('@rspack/core').Configuration} */
export default {
  entry: {
    main: './.build/src/main/index.tsx',
    sandbox: './.build/src/sandbox/index.tsx',
  },
  output: {
    path: path.resolve(import.meta.dirname, 'dist'),
    filename: '[name].js',
    clean: true,
  },
  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx'],
    alias: {
      '#stories': path.resolve(import.meta.dirname, './.tmp/entries.ts'),
      '@sima-land/ui-nucleons': path.resolve(import.meta.dirname, '../src/'),
    },
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx|ts|tsx)$/,
        exclude: /node_modules/,
        loader: 'builtin:swc-loader',
        options: {
          sourceMap: true,
          jsc: {
            parser: {
              syntax: 'typescript',
              jsx: true,
            },
            transform: {
              react: {
                runtime: 'automatic',
              },
            },
          },
        },
        type: 'javascript/auto',
      },
      {
        test: /\.css$/i,
        use: [
          rspack.CssExtractRspackPlugin.loader,
          {
            loader: 'css-loader',
            options: {
              modules: {
                auto: /\.(module|m)\.css$/i,
                localIdentName: '[name]__[local]__[hash:3]',
                exportLocalsConvention: 'as-is',
                namedExport: false,
              },
            },
          },
        ],
      },
      {
        test: /\.scss$/i,
        use: [
          rspack.CssExtractRspackPlugin.loader,
          {
            loader: 'css-loader',
            options: {
              modules: {
                auto: /\.(module|m)\.scss$/i,
                localIdentName: '[name]__[local]__[hash]',
                exportLocalsConvention: 'as-is',
                namedExport: false,
              },
            },
          },
          {
            loader: 'sass-loader',
            options: {
              api: 'modern-compiler',
              implementation: 'sass-embedded',
            },
          },
        ],
      },
      {
        test: /\.(apng|avif|gif|jpg|jpeg|png|webp)$/i,
        type: 'asset',
      },
    ],
  },
  plugins: [
    new rspack.CssExtractRspackPlugin(),
    new rspack.HtmlRspackPlugin({
      filename: 'index.html',
      template: './.build/src/main/index.html',
      chunks: ['main'],
      scriptLoading: 'module',
      inject: 'body',
    }),
    new rspack.HtmlRspackPlugin({
      filename: 'sandbox.html',
      template: './.build/src/sandbox/index.html',
      chunks: ['sandbox'],
      scriptLoading: 'module',
      inject: 'body',
    }),
    new rspack.CopyRspackPlugin({
      patterns: [
        {
          from: 'public',
          to: 'public',
        },
      ],
    }),
  ],
  experiments: {
    css: false,
    outputModule: true,
  },
  devServer: {
    hot: false,
    liveReload: true,
  },
};
