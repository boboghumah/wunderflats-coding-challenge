var seleniumServer = require('selenium-server');
var chromedriver = require('chromedriver');
var geckodriver = require('geckodriver');


var config = {
  src_folders: ['tests'],
  output_folder: 'reports', 
  page_objects_path:'page_objects',

  selenium: {
    start_process: true,
    server_path: seleniumServer.path,
    port: 4444, 
    cli_args: {
      'webdriver.chrome.driver': chromedriver.path,
      'webdriver.gecko.driver': geckodriver.path,
      
    }
  },

  test_workers: {
    enabled: true,
    workers: 'auto'
  },

  test_settings: {
    default: {
      screenshots: {
        enabled: true,
        on_failure : true,
        on_error : false,
        path : 'reports'
      },
      globals: {
        waitForConditionTimeout: 5000
      },
      desiredCapabilities: {
        browserName: 'chrome',
        javascriptEnabled: true,
        acceptSslCerts: true,
        nativeEvents: true
      }
    },
   
    chrome: {
      desiredCapabilities: {
        browserName: 'chrome',
        javascriptEnabled: true,
        acceptSslCerts: true,
        nativeEvents: true
      }
    },
    firefox: {
      desiredCapabilities: {
        browserName: 'firefox',
        javascriptEnabled: false,
        acceptSslCerts: false,
        nativeEvents: false
      }
    },
    safari: {
      desiredCapabilities: {
        browserName: 'safari',
        javascriptEnabled: false,
        acceptSslCerts: false,
        nativeEvents: false
      }
    }
  }
  
};

module.exports = config;
