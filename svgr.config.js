module.exports = {
  plugins: [
    '@svgr/plugin-svgo',
    '@svgr/plugin-jsx',
  ],
  svgoConfig: {
    plugins: [
      { removeViewBox: false },
      { cleanupIDs: false },
      { mergePaths: true },
      { collapseGroups: false },
    ],
  },
};
