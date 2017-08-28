exports.config = {framework: 'jasmine',
    seleniumAddress: 'http://localhost:4444/wd/hub',
    specs: ['../test_spec/**/*.js'],

  capabilities: {
        'browserName': 'chrome',
        'chromeOptions': {
          'args': ['start-maximized'],
        },
      },

  };
