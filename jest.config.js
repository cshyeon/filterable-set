module.exports = {
  coverageDirectory: './coverage/',
  collectCoverage: true,
  transform: {
    '^.+\\.ts$': 'ts-jest'
  },
  testRegex: '\\.test\\.ts$',
  moduleFileExtensions: [
    'ts', 'js'
  ],
  globals: {
    'ts-jest': {
      enableTsDiagnostics: true
    }
  }

};
