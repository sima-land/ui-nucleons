module.exports = {
  presets: [
    [
      '@babel/preset-env',
      {
        modules: false,
        targets: {
          node: true,
        },
      },
    ],
    [
      '@babel/preset-react',
      {
        runtime: 'classic', // ВАЖНО: для того чтобы ESM работал и в react 17 и в react 18
      },
    ],
    '@babel/preset-typescript',
  ],
  plugins: ['./.babel/plugin-node-module-resolution.mjs'],
};
