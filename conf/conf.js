exports.config = {framework: 'jasmine',
    seleniumAddress: 'http://localhost:4444/wd/hub',
    specs: ['../test_spec/**/*.js'],

   capabilities: {
        'browserName': 'chrome',
        // 'shardTestFiles': true,
        // 'maxInstances': 2,
        'chromeOptions': {
          'args': ['start-maximized'],
        },
      },
        
       /*    
      // ability to validate both Firefox and Chrome at the same time
      multiCapabilities: [
        {
          'browserName': 'chrome',
          'shardTestFiles': true,
          'maxInstances': 2,
        },
        {
          'browserName': 'firefox',
          'shardTestFiles': true,
          'maxInstances': 2,
        }],
        */
  };
