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
await copy(['./src/**/*', 'dist'], {
  up: 1,
  exclude: ['./src/**/*.ts', './src/**/*.tsx', './src/**/__test__/**', './src/**/__stories__/**'],
});
