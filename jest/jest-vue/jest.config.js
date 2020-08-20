module.exports = {
  moduleFileExtensions: ['js', 'jsx', 'json', 'vue'],
  transform: {
    '^.+\\.vue$': 'vue-jest',
    '.+\\.(css|styl|less|sass|scss|svg|png|jpg|ttf|woff|woff2)$': 'jest-transform-stub',
    '^.+\\.jsx?$': 'babel-jest'
  },
  transformIgnorePatterns: ['/node_modules/'],
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1'
  },
  snapshotSerializers: ['jest-serializer-vue'],
  testMatch: [
    '**/__tests__/unit/**/*.(spec|test).(js|jsx|ts|tsx)|**/__tests__/**/*.(js|jsx|ts|tsx)'
  ],
  collectCoverageFrom: ['src/utils/**/*.{js,vue}', '!src/utils/auth.js', '!src/utils/request.js', 'src/components/**/*.{js,vue}', '!**/node_modules/**'],
  coverageDirectory: '<rootDir>/__tests__/unit/coverage',
  testPathIgnorePatterns: ['/.eslintrc/.js'],
  // collectCoverage: true,
  coverageReporters: [
    'lcov',
    'text-summary'
  ],
  testURL: 'http://localhost/',
  watchPlugins: ['jest-watch-typeahead/filename', 'jest-watch-typeahead/testname']
}
