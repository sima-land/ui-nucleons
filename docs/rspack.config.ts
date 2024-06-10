import path from 'node:path';
import rspack from '@rspack/core';
import { emitStoriesEntrypoint } from './.build/emit-entrypoint.js';

const entrypoint = './.tmp/entries.ts';

export default async function () {
  await emitStoriesEntrypoint({
    filename: entrypoint,
    storiesGlob: './docs/**/*.tsx',
    storiesRootDir: './docs/',
  });

  return {
    entry: {
      sandbox: './src/internal/sandbox/index.tsx',
      showcase: './src/internal/showcase/index.tsx',
    },
    output: {
      path: path.resolve(import.meta.dirname, 'dist'),
      filename: '[name].js',
      clean: true,
    },
    resolve: {
      extensions: ['.js', '.jsx', '.ts', '.tsx'],
      alias: {
        // это нужно чтобы react и react-dom были загружены строго единожды
        // (из-за того что исходный код компонентов лежит в родительском каталоге они могут подключать react / react - dom из своих node_modules)
        react: path.resolve('./node_modules/react'),
        'react-dom': path.resolve('./node_modules/react-dom'),

        // для внутреннего использования
        '#found-stories$': path.resolve(import.meta.dirname, entrypoint),
        '#valid-stories$': path.resolve(import.meta.dirname, './src/internal/valid-stories.ts'),
        '#components': path.resolve(import.meta.dirname, './src/internal/showcase/components/'),

        // для конкретной документации
        '@sima-land/ui-nucleons': path.resolve(import.meta.dirname, '../src/'),
        '#docs-utils$': path.resolve(import.meta.dirname, './src/docs-utils.tsx'),
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
        {
          resourceQuery: /raw/,
          type: 'asset/source',
        },
      ],
    },
    plugins: [
      new rspack.CssExtractRspackPlugin(),
      new rspack.HtmlRspackPlugin({
        filename: 'index.html',
        template: './src/internal/showcase/index.html',
        chunks: ['showcase'],
        scriptLoading: 'module',
        inject: 'body',
      }),
      new rspack.HtmlRspackPlugin({
        filename: 'sandbox.html',
        template: './src/internal/sandbox/index.html',
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
      // @todo так почему-то вообще не работает live reload
      hot: false,
      // liveReload: true,
    },
  } satisfies rspack.Configuration;
}
