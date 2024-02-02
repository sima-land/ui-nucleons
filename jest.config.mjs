/** @type {import('jest').Config} */
const config = {
  testEnvironment: 'jsdom',
  globalSetup: '<rootDir>/.jest/global-setup.js',
  setupFiles: ['<rootDir>/.jest/setup.js'],
  testMatch: ['**/?(*.)+(test).[jt]s?(x)'],
  transform: {
    '^.+\\.(t|j)sx?$': ['babel-jest', { configFile: './.jest/babel.config.json' }],

    // css-модули
    '\\.(module|m)\\.(css|scss)$': 'jest-css-modules-transform',

    // обычные стили
    '(?<!(.+\\.(module|m)))(\\.css|\\.scss)$': '<rootDir>/.jest/transforms/empty.js',

    // asset'ы
    '\\.(apng|avif|gif|jpg|jpeg|png|webp)$': '<rootDir>/.jest/transforms/asset.js',
  },
  transformIgnorePatterns: [
    // из некоторых пакетов мы берем стили так что игнорируем только скрипты
    '/node_modules/.+js$',
  ],
  testPathIgnorePatterns: ['<rootDir>/.yarn-cache/', '<rootDir>/node_modules/'],
  modulePathIgnorePatterns: ['<rootDir>/.yarn-cache/', '<rootDir>/build/'],
  coveragePathIgnorePatterns: [
    '\\.png$',
    '\\.css$',
    '\\.scss$',
    '/\\.jest/',
    '__test__',

    // deprecated
    '<rootDir>/src/box',
    '<rootDir>/src/text',
    '<rootDir>/src/styling',
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

export default config;
