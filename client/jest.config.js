module.exports = {
    testEnvironment: 'jsdom',
    moduleNameMapper: {
      // Support CSS/Tailwind modules
      '\\.(css|scss|sass|less)$': 'identity-obj-proxy',
      // Support path aliases from tsconfig.json like @/components
      '^@/(.*)$': '<rootDir>/$1',
    },
    setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
    testPathIgnorePatterns: ['<rootDir>/.next/', '<rootDir>/node_modules/'],
    transform: {
      '^.+\\.(ts|tsx|js|jsx)$': 'babel-jest',
    },
    transformIgnorePatterns: ['/node_modules/'],
  };
  