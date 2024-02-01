/* eslint-disable require-jsdoc, jsdoc/require-jsdoc */
import copyfiles from 'copyfiles';

function copy(paths, options = {}) {
  return new Promise((done, fail) => {
    copyfiles(paths, options, error => {
      error ? fail(error) : done();
    });
  });
}

// копируем остальные файлы из исходников т.к. tsc прогнал только скрипты
await copy(['./src/**/*', 'build'], {
  up: 1,
  exclude: [
    './src/**/*.ts',
    './src/**/*.tsx',
    './src/**/*.js',
    './src/**/*.jsx',
    './src/**/__test__/**',
    './src/**/__stories__/**',
  ],
});

// формируем пакет
await copy(['package.json', 'build']);
await copy(['README.md', 'build']);
