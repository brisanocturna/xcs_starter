// Karma configuration

const webpackConfig = require('./webpack.config');

const bootstrapFile = './test/index.js';
const preprocessor = {};
preprocessor[bootstrapFile] = ['webpack', 'sourcemap'];

webpackConfig.output = {};
webpackConfig.output.filename = 'spec.js';
webpackConfig.entry = {};

module.exports = (config) => {
  config.set({
    basePath: '',
    frameworks: ['jasmine'],
    files: [
      { pattern: 'test/*Test.js', watched: false },
      { pattern: 'test/**/*Test.js', watched: false }
    ],
    preprocessors: {
      'test/*Test.js': ['webpack'],
      'test/**/*Test.js': ['webpack']
    },
    webpack: webpackConfig,
    webpackServer: {
      noInfo: true
    },

    reporters: ['mocha'],

    // web server port
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: false,

    browsers: ['Chrome', 'PhantomJS'],
    phantomjsLauncher: {
      exitOnResourceError: true
    }
  });
};
