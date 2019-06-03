module.exports = {
  presets: [
    [
      '@babel/preset-env',
      {
        targets: {
          node: 'current',
        },
      },
    ],
    '@babel/preset-react',
  ],
  plugins: [
    '@babel/plugin-proposal-class-properties',
    '@babel/plugin-proposal-object-rest-spread',
    [
      'inline-react-svg',
      {
        svgo: {
          plugins: [{
            removeAttrs: {
              attrs: '(data-name)',
            },
          }, {
            cleanupIDs: true,
          }],
        },
      },
    ],
  ],
};
