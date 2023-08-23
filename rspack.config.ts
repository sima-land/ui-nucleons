import path from 'node:path';
import { prepare } from './showcase';

module.exports = async function () {
  const bundle = path.resolve(process.cwd(), './.showcase/all.js');

  await prepare({
    stories: './src/**/__stories__/*.stories.tsx',
    output: bundle,
  });

  return {
    target: 'web',
    entry: {
      main: './.showcase/src/index.tsx',
      story: './.showcase/src/story.tsx',
    },
    output: {
      chunkFormat: 'commonjs',
      path: path.resolve(__dirname, 'dist'),
    },
    resolve: {
      alias: {
        stories: bundle,
        '@sima-land/ui-nucleons': path.resolve(__dirname, './src/'),
      },
    },
    builtins: {
      html: [
        {
          filename: 'index.html',
          template: path.resolve(__dirname, './.showcase/src/index.html'),
          chunks: ['main'],
        },
        {
          filename: 'story.html',
          template: path.resolve(__dirname, './.showcase/src/story.html'),
          chunks: ['story'],
        },
      ],
    },
    devServer: {
      allowedHosts: 'all',
    },
    module: {
      rules: [
        {
          test: /\.css$/i,
          type: 'css',
        },
        {
          test: /\.(module|m)\.css$/i,
          type: 'css/module',
        },
        {
          test: /\.(module|m)\.scss$/,
          use: 'sass-loader',
          type: 'css/module',
        },
        {
          test: /\.(apng|avif|gif|jpg|jpeg|png|webp)$/,
          type: 'asset/resource',
          generator: {
            filename: `static/[name][ext]`,
          },
        },
      ],
    },
  };
};
