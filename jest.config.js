module.exports = {
    preset: 'ts-jest',
    testEnvironment: 'node',
    moduleNameMapper: {
      '^@/(.*)$': '<rootDir>/src/$1',
    },
    testMatch: [
      '<rootDir>/__tests__/**/*.{ts,tsx}',
      '<rootDir>/*.{spec,test}.{ts,tsx}',
    ],
};


