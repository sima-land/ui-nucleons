/* eslint-disable require-jsdoc, jsdoc/require-jsdoc */
import copyfiles from 'copyfiles';

const copy = (p, o = {}) => new Promise(r => copyfiles(p, o, r));

async function main() {
  // копируем остальные файлы из исходников т.к. tsc прогнал только скрипты
  await copy(['./src/**/*', 'dist'], {
    up: 1,
    exclude: ['./src/**/*.ts', './src/**/*.tsx', './src/**/__test__/**', './src/**/__stories__/**'],
  });
}

main();
