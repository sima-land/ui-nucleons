module.exports = {
  process: (sourceText, sourcePath) => `module.exports = ${JSON.stringify(sourcePath.replace(process.cwd(), ''))};`,
};
