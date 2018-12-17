const path = require('path');
const ENV = require('./test.env');

module.exports = {
<<<<<<< HEAD
=======
  rootDir: './',
>>>>>>> a5a8b34c36f7f6beca9dbe466fe4bbfaae1e530c
  moduleFileExtensions: ['js', 'json', 'vue', 'ts', 'tsx', 'jsx', 'node'],
  testMatch: ['<rootDir>/**/__tests__/*.js'],

  globals: {
    ENV,
  },
  transform: {
    '^.+\\.js$':'babel-jest',
  },
};
