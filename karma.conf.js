module.exports = function(config) {
    config.set({
      frameworks: ['jasmine'],
      files: [
        'https://cdnjs.cloudflare.com/ajax/libs/angular.js/1.8.2/angular.min.js',
        'https://cdnjs.cloudflare.com/ajax/libs/angular-mocks/1.8.2/angular-mocks.js',
        'app/scripts/app.js',
        'test/**/*.spec.js'
      ],
      browsers: ['Chrome'],
      reporters: ['progress'],
      port: 9876,
      colors: true,
      logLevel: config.LOG_INFO,
      autoWatch: true,
      singleRun: false,
      concurrency: Infinity
    })
  }
  