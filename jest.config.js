module.exports = {
  testMatch: ['**/*.test.ts'],
  collectCoverageFrom: ['src/**/*.ts'],
  transform: {
    '^.+\\.(t|j)sx?$': '@swc/jest',
  },
};
