module.exports = {
  process: (src, filename, { rootDir }) => `module.exports = ${JSON.stringify(filename.replace(rootDir, ''))};`,
};
