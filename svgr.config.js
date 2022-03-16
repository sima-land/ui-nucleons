module.exports = {
  plugins: ['@svgr/plugin-svgo', '@svgr/plugin-jsx'],
  svgo: true,
  svgoConfig: {
    plugins: [
      {
        name: 'preset-default',
        params: {
          overrides: {
            removeViewBox: false,
            cleanupIDs: false,
            collapseGroups: false,
          },
        },
      },
    ],
  },
};
