const { src, dest, series } = require('gulp');
const del = require('del');

/**
 * Очищает 'build'
 * @return {*} test
 */
const clean = () => del(['build']);

/**
 * Перемещает необходимые файлы в 'build'
 * @return {*} test
 */
const move = () => src([
  'package.json',
  'README.md',
  './src/components/**/*',
  '!./src/components/**/*.md',
  '!./src/components/**/__test__/**',
  '!./src/components/**/__stories__/**',
]).pipe(dest('build'));

const build = series(clean, move);

exports.build = build;
exports.default = build;
