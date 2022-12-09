const babel = require('@babel/core');
const babelConfig = require('../../babel.config');
const svgr = require('@svgr/core');
const svgrConfig = require('../../svgr.config');

module.exports = {
  process(sourceText, sourcePath) {
    const code = svgr.transform.sync(sourceText, svgrConfig, { filePath: sourcePath });

    return babel.transformSync(code, { filename: sourcePath, ...babelConfig });
  },
};
