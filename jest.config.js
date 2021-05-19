module.exports = {
  preset: 'ts-jest/presets/js-with-babel',
  globalSetup: '<rootDir>/jest/global-setup.js',
  setupFiles: [
    './jest/setup.js',
  ],
  transform: {
    '\\.svg$': '<rootDir>/jest/transforms/svg.js',
    '\\.(css|scss)$': 'jest-css-modules-transform',
    '\\.(jpg|jpeg|png|gif|eot|otf|ttf|woff|woff2)$': '<rootDir>/jest/transforms/media.js',
  },
  transformIgnorePatterns: [
    '/node_modules/.+(js|jsx)$',
  ],
  snapshotSerializers: ['enzyme-to-json/serializer'],
  testPathIgnorePatterns: ['<rootDir>/.yarn-cache/', '<rootDir>/node_modules/'],
  modulePathIgnorePatterns: ['<rootDir>/.yarn-cache/', '<rootDir>/build/'],
  coveragePathIgnorePatterns: [
    '\\.css$',
    '\\.scss$',
    '\\.svg$',
    '/jest/',
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
