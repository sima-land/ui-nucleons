/* eslint-disable require-jsdoc */
const rimraf = require('rimraf');
const copyfiles = require('copyfiles');

async function main () {
  const copy = (p, o = {}) => new Promise(r => copyfiles(p, o, r));
  const rm = (p, o = {}) => new Promise(r => rimraf(p, o, r));

  // копируем остальные файлы из исходников т.к. tsc прогнал только скрипты
  await copy(['./src/**/*', 'build'], {
    up: 1,
    exclude: [
      './src/**/*.ts',
      './src/**/*.tsx',
      './src/**/__test__/**',
      './src/**/__stories__/**',
    ],
  });

  // формируем пакет
  await copy(['package.json', 'build']);
  await copy(['README.md', 'build']);

  // удаляем тесты и stories
  await rm('./build/**/__test__');
  await rm('./build/**/__stories__');
}

main();
