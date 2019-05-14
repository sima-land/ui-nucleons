const { NODE_ENV } = process.env;

module.exports = {};
if (NODE_ENV === 'test') {
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
    ],
  };
}
