module.exports = {
  'src/**/*.{js,jsx,ts,tsx}': [
    'eslint --fix --ext .js,.jsx,.ts,.tsx',
  ],
  'src/**/*.scss': [
    'stylelint',
  ],
};
