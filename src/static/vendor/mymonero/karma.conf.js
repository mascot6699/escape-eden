// Karma configuration

module.exports = function(config) {
    config.set({

        // base path that will be used to resolve all patterns (eg. files, exclude)
        basePath: '',


        // frameworks to use
        // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
        frameworks: ['jasmine'],


        // list of files / patterns to load in the browser
        files: [
            "html/bower_components/jquery/dist/jquery.min.js",
            "html/bower_components/fastclick/lib/fastclick.js",
            "html/bower_components/angular/angular.min.js",
            "html/bower_components/angular-mocks/angular-mocks.js",
            "html/bower_components/angular-route/angular-route.min.js",
            "html/bower_components/ngInfiniteScroll/build/ng-infinite-scroll.min.js",
            "html/bower_components/ng-idle/angular-idle.min.js",
            "html/bower_components/zeroclipboard/dist/ZeroClipboard.min.js",
            "html/bower_components/ng-clip/dest/ng-clip.min.js",
            "html/bower_components/moment/min/moment-with-locales.min.js",
            "html/js/crc32.js",
            "html/js/mnemonic.js",
            "html/js/lib/qrcode.min.js",
            "html/js/lib/biginteger.js",
            "html/js/config.example.js",
            "html/js/crypto.js",
            "html/js/base58.js",
            "html/js/cn_util.js",
            "html/js/app.js",
            "html/js/filters/*.js",
            "html/js/services/*.js",
            "html/js/controllers/*.js",
            "html/js/directives/*.js",
            "html/js/routes.js",

            "jasmine/spec/SpecHelper.js",
            "jasmine/spec/*Spec.js",

            "html/partials/*.html",
            "html/modals/*.html"
        ],


        // list of files to exclude
        exclude: [],


        // preprocess matching files before serving them to the browser
        // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
        preprocessors: {
            "html/partials/*.html": ["ng-html2js"],
            "html/modals/*.html": ["ng-html2js"]
        },


        ngHtml2JsPreprocessor: {
            stripPrefix: "html/",
            moduleName: "thinWallet.templates"
        },


        // test results reporter to use
        // possible values: 'dots', 'progress'
        // available reporters: https://npmjs.org/browse/keyword/karma-reporter
        reporters: ['progress'],


        // web server port
        port: 9876,


        // enable / disable colors in the output (reporters and logs)
        colors: true,


        // level of logging
        // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
        logLevel: config.LOG_INFO,


        // enable / disable watching file and executing tests whenever any file changes
        autoWatch: true,


        // start these browsers
        // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
        browsers: [],


        // Continuous Integration mode
        // if true, Karma captures browsers, runs the tests and exits
        singleRun: false
    });
};
