/* eslint-disable require-jsdoc */
const fs = require('fs');
const path = require('path');
const rimraf = require('rimraf');
const copyfiles = require('copyfiles');

async function main () {
  const local = (...p) => path.resolve(__dirname, ...p);
  const copy = (p, o = {}) => new Promise(r => copyfiles(p, o, r));
  const rm = (p, o = {}) => new Promise(r => rimraf(p, o, r));

  // копируем стили из исходников т.к. tsc прогнал только скрипты
  await copy(['./src/components/**/*.scss', 'build'], {
    up: 1,
    exclude: [
      './src/components/**/__test__/**',
      './src/components/**/__stories__/**',
    ],
  });

  // перемещаем из build/components в build
  if (fs.existsSync(local('.temp-build'))) {
    fs.rmSync(local('.temp-build'), { recursive: true });
  }
  fs.renameSync(local('build/components'), local('.temp-build'));
  fs.renameSync(local('.temp-build'), local('build'));

  // формируем пакет
  await copy(['package.json', 'build']);
  await copy(['README.md', 'build']);

  // удаляем тесты и stories
  await rm('./build/**/__test__');
  await rm('./build/**/__stories__');
}

main();
