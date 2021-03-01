const babel = require('@babel/core');
const babelJestPreset = require('babel-preset-jest');

const svgr = require('@svgr/core').default;
const svgrOptions = require('../../svgr.config');

module.exports = {
  process: (src, filename) => {
    const code = svgr.sync(src, svgrOptions, { filePath: filename });

    return babel.transformSync(code, {
      filename,
      presets: [babelJestPreset],
    }).code;
  },
};
