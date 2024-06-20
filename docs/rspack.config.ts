import path from 'node:path';
import rspack from '@rspack/core';
import {
  type EmitStoriesEntrypointConfig,
  emitStoriesEntrypoint,
  watchStories,
} from '@krutoo/showcase/build';

export default async function (env: any) {
  const isProduction = process.env.NODE_ENV === 'production';

  const storiesConfig: EmitStoriesEntrypointConfig = {
    filename: './.generated/entries.js',
    storiesGlob: './stories/**/*.story.{mdx,tsx}',
    storiesRootDir: './stories/',
    rawImport: mod => ({ importPath: `!${mod.importPath}?raw` }),
  };

  // собираем точку входа
  await emitStoriesEntrypoint(storiesConfig);

  // обновляем точку входа при изменениях в файловой системе
  if (env?.RSPACK_SERVE) {
    watchStories(storiesConfig);
  }

  return {
    entry: {
      sandbox: './src/sandbox/index.tsx',
      showcase: './src/showcase/index.tsx',
    },
    output: {
      path: path.resolve(import.meta.dirname, 'dist'),
      filename: '[name].[contenthash:5].js',
      clean: true,
    },
    mode: isProduction ? 'production' : undefined,
    devtool: isProduction ? false : undefined,
    resolve: {
      extensions: ['.js', '.jsx', '.ts', '.tsx'],
      alias: {
        '#found-stories$': path.resolve(import.meta.dirname, storiesConfig.filename),

        '@sima-land/ui-nucleons': path.resolve(import.meta.dirname, '../src/'),
        '#docs-utils$': path.resolve(import.meta.dirname, './src/docs-utils.tsx'),

        // это нужно чтобы react и react-dom были загружены строго единожды
        // (из-за того что исходный код компонентов лежит в родительском каталоге они могут подключать react / react - dom из своих node_modules)
        react: path.resolve('./node_modules/react'),
        'react-dom': path.resolve('./node_modules/react-dom'),
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
                  localIdentName: isProduction ? '[hash:7]' : '[name]__[local]__[hash:3]',
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
                  localIdentName: isProduction ? '[hash:7]' : '[name]__[local]__[hash:3]',
                  exportLocalsConvention: 'as-is',
                  namedExport: false,
                },
              },
            },
            {
              loader: 'sass-loader',
              options: {
                implementation: 'sass-embedded',
                api: 'modern-compiler',
              },
            },
          ],
        },
        {
          test: /\.mdx?$/,
          use: [
            {
              loader: '@mdx-js/loader',
            },
          ],
        },
        {
          test: /\.(apng|avif|gif|jpg|jpeg|png|webp)$/i,
          type: 'asset',
          generator: {
            filename: 'static/[contenthash][ext]',
          },
        },
        {
          resourceQuery: /raw/,
          type: 'asset/source',
        },
      ],
    },
    plugins: [
      new rspack.CssExtractRspackPlugin({
        filename: '[name].[contenthash:5].css',
      }),
      new rspack.HtmlRspackPlugin({
        filename: 'index.html',
        template: './src/showcase/index.html',
        chunks: ['showcase'],
        scriptLoading: 'module',
        inject: 'body',
      }),
      new rspack.HtmlRspackPlugin({
        filename: 'sandbox.html',
        template: './src/sandbox/index.html',
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
      port: 9009,
      compress: true,
      allowedHosts: 'all',
      liveReload: true,
      hot: false,
    },
  } satisfies rspack.Configuration;
}
