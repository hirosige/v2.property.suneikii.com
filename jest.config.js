module.exports = {
  setupFiles: [
    '<rootDir>/jest.setup.js',
  ],
  testPathIgnorePatterns: [
    '<rootDir>/.next/',
    '<rootDir>/node_modules/',
  ],
  testMatch: [
    '**/?(*.)(spec|test).js?(x)',
  ],
};
