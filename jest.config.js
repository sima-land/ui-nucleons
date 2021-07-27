module.exports = {
  preset: 'ts-jest/presets/js-with-babel',
  globalSetup: '<rootDir>/.jest/global-setup.js',
  setupFiles: [
    './.jest/setup.js',
  ],
  transform: {
    // svg заменяем на React-компоненты
    '\\.svg$': '<rootDir>/.jest/transforms/svg.js',

    // генерируем css-модули
    '\\.module\\.(css|scss)$': 'jest-css-modules-transform',

    // все что должно заменяться на строку с url
    '\\.(jpg|jpeg|png|gif|eot|otf|ttf|woff|woff2)$': '<rootDir>/.jest/transforms/media.js',
  },
  moduleNameMapper: {
    // обычные стили делаем просто пустыми модулями
    '(?<!(.+\\.module))(\\.css|\\.scss)$': '<rootDir>/.jest/mocks/style.js',
  },
  transformIgnorePatterns: [
    // из некоторых пакетов мы берем стили так что игнорируем только скрипты
    '/node_modules/.+js$',
  ],
  snapshotSerializers: ['enzyme-to-json/serializer'],
  testPathIgnorePatterns: ['<rootDir>/.yarn-cache/', '<rootDir>/node_modules/'],
  modulePathIgnorePatterns: ['<rootDir>/.yarn-cache/', '<rootDir>/build/'],
  coveragePathIgnorePatterns: [
    '\\.css$',
    '\\.scss$',
    '\\.svg$',
    '/.jest/',
  ],
  clearMocks: true,
  coverageThreshold: {
    global: {
      branches: 100,
      functions: 100,
      lines: 100,
      statements: 100,
    },
  },
};
