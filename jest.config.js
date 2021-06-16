module.exports = {
  preset: 'ts-jest',
  transform: {
    '^.+\\.(ts)$': 'ts-jest',
  },
  roots: ['<rootDir>/lib'],
  moduleFileExtensions: ['ts', 'js'],
}
