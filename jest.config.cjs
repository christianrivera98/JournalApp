module.exports = {
    testEnvironment: 'jest-environment-jsdom',
    setupFiles: ['./jest.setup.js'],
    transformIgnorePatterns: [],
    transform: {
        '^.+\\.js$': 'babel-jest', // Uso Babel para transpilar los archivos JS
      },
}