const currentUTCTime = new Date().toISOString().replace(/[T:]/g, '-').replace(/\..+/, '');

exports.config = {

    baseUrl: 'https://www.pecodesoftware.com',

    runner: 'local',

    hostname: 'localhost',
    port: 4444,
    path: '/wd/hub',

    specs: [
        './src/specs/**/*.ts'
    ],

    maxInstances: 2,

    capabilities: [
        {
            browserName: 'chrome',
            'selenoid:options': {
                enableVNC: true,
                enableVideo: true,
                videoName: `${currentUTCTime}-chrome.mp4`
            },
            'goog:chromeOptions': {
                args: ['--incognito']
            },
        },
        {
            browserName: 'firefox',
            'selenoid:options': {
                enableVNC: true,
                enableVideo: true,
                videoName: `${currentUTCTime}-firefox.mp4`
            },
            'moz:firefoxOptions': {
                args: ['--private']
            },
        },
        {
            browserName: 'MicrosoftEdge',
            'selenoid:options': {
                enableVNC: true,
                enableVideo: true,
                videoName: `${currentUTCTime}-edge.mp4`
            }
        }
    ],

    logLevel: 'error',

    // If you want your test run to stop after a specific number of test failures, use bail.
    // (It defaults to 0, which runs all tests no matter what.)
    bail: 0,

    // Default timeout for all waitFor* commands.
    waitforTimeout: 10000,

    // Default timeout in milliseconds for request
    // if browser driver or grid doesn't send response
    connectionRetryTimeout: 90000,
    connectionRetryCount: 3,
    services: [],
    framework: 'mocha',

    // The number of times to retry the entire specfile when it fails as a whole
    // specFileRetries: 1,

    reporters: ['spec',
        ['mochawesome',{
            outputDir: './output/mochawesome-json-report',
            outputFileFormat: function(opts) {
                return `results-${opts.cid}.json`
            }
        }]
    ],

    mochawesomeOpts: {
        includeScreenshots: true,
        screenshotUseRelativePath: true
    },


    // Options to be passed to Mocha.
    // See the full list at http://mochajs.org/
    mochaOpts: {
        ui: 'bdd',
        require: [
            'tsconfig-paths/register'
        ],
        timeout: 60000
    },

    // onPrepare: function (config, capabilities) {
    // },

    before: function (capabilities, specs) {
        require('ts-node').register({files: true});
        browser.setWindowSize(1920, 1080);
    },

    afterTest: function (test, context, {error, result, duration, passed, retries}) {
        if (test.error !== undefined) {
            browser.takeScreenshot();
        }
    },

    onComplete: function (exitCode, config, capabilities, results) {
        const mergeResults = require('wdio-mochawesome-reporter/mergeResults');
        mergeResults('./output/mochawesome-json-report', "results-*");
    }
};
