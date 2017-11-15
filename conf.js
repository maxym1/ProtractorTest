// An example configuration file.
exports.config = {
    directConnect: true,

    // Capabilities to be passed to the webdriver instance.
    capabilities: {
        'browserName': 'chrome'
    },

    // Framework to use. Jasmine is recommended.
    framework: 'jasmine',

    params: {
        url: 'https://www.etsy.com/'
    },

    // Spec patterns are relative to the current working directory when
    // protractor is called.
    specs: ['testcases/cart.spec.js'],

    onPrepare: function () {
        browser.ignoreSynchronization = true;
        var AllureReporter = require('jasmine-allure-reporter');
        jasmine.getEnv().addReporter(new AllureReporter({
            resultsDir: 'allure-results'
        }));

        var AllureReporter = require('jasmine-allure-reporter');
        jasmine.getEnv().addReporter(new AllureReporter());
        jasmine.getEnv().afterEach(function(done){
            browser.takeScreenshot().then(function (png) {
                allure.createAttachment('Screenshot', function () {
                    return new Buffer(png, 'base64')
                }, 'image/png')();
                done();
            })
        });

    },

    // multiCapabilities: [
    //     {
    //     browserName: 'firefox'
    //     },
    //
    //     {
    //     browserName: 'chrome'
    //     }
    //     ],

    // Options to be passed to Jasmine.
    jasmineNodeOpts: {
        defaultTimeoutInterval: 30000
    }
};