(function e(t, n, r) {
    function s(o, u) {
        if (!n[o]) {
            if (!t[o]) {
                var a = typeof require == "function" && require;
                if (!u && a) return a(o, !0);
                if (i) return i(o, !0);
                var f = new Error("Cannot find module '" + o + "'");
                throw f.code = "MODULE_NOT_FOUND", f
            }
            var l = n[o] = {
                exports: {}
            };
            t[o][0].call(l.exports, function(e) {
                var n = t[o][1][e];
                return s(n ? n : e)
            }, l, l.exports, e, t, n, r)
        }
        return n[o].exports
    }
    var i = typeof require == "function" && require;
    for (var o = 0; o < r.length; o++) s(r[o]);
    return s
})({
    1: [function(require, module, exports) {
        'use strict';
        Object.defineProperty(exports, "__esModule", {
            value: true
        });
        exports.NEW_VERSION_DATE = exports.AUTO_UPDATE_BASE_URL = exports.AUTO_UPDATE_DELAY_INIT = exports.WINDOW_PASSPHRASE_PRELOAD = exports.WINDOW_WALLET = exports.WINDOW_PASSPHRASE = exports.WINDOW_NETWORK = exports.WINDOW_MNEMONIC = exports.WINDOW_MAIN = exports.EXODUS_EXCHANGE_SERVER = exports.EXODUS_EXCHANGE_STAGING_SERVER = exports.EXODUS_EXCHANGE_PRODUCTION_SERVER = exports.EXODUS_EXCHANGE_LOCAL_SERVER = exports.EXODUS_SERVER = exports.EXODUS_STAGING_SERVER = exports.EXODUS_PRODUCTION_SERVER = exports.EXODUS_TESTING_SERVER = exports.EXODUS_LOCAL_SERVER = exports.EXODUS_DISPLAY_NAME = exports.COMPANY = exports.PACKAGE = exports.BITCOIN_FEE_LIMIT = exports.DUST_VALUES = exports.ENV_BUILD_EDEN = exports.ENV_BUILD_EXODUS = exports.ENV_BUILD_NAME = exports.ENV_PROD = exports.ENV_DEV = undefined;
        var _path = require('path');
        var _path2 = _interopRequireDefault(_path);
        var _ms = require('ms');
        var _ms2 = _interopRequireDefault(_ms);
        var _package = require(13);
        var _package2 = _interopRequireDefault(_package);

        function _interopRequireDefault(obj) {
            return obj && obj.__esModule ? obj : {
                default: obj
            };
        }
        const ENV_DEV = exports.ENV_DEV = "production" === 'development';
        const ENV_PROD = exports.ENV_PROD = "production" === 'production';
        const ENV_BUILD_NAME = exports.ENV_BUILD_NAME = "eden" || '';
        const ENV_BUILD_EXODUS = exports.ENV_BUILD_EXODUS = ENV_BUILD_NAME === '';
        const ENV_BUILD_EDEN = exports.ENV_BUILD_EDEN = ENV_BUILD_NAME === 'eden';
        const DUST_VALUES = exports.DUST_VALUES = {
            bitcoin: Math.max(6000, 148 * 125),
            bcash: 6000,
            bgold: 6000,
            litecoin: 60000,
            dash: 5500,
            decred: 70000,
            digibyte: 1000,
            vertcoin: 20000,
            zcash: 1500
        };
        const BITCOIN_FEE_LIMIT = exports.BITCOIN_FEE_LIMIT = 0.2;
        const PACKAGE = exports.PACKAGE = _package2.default;
        const COMPANY = exports.COMPANY = 'Exodus Movement, Inc.';
        const EXODUS_DISPLAY_NAME = exports.EXODUS_DISPLAY_NAME = "eden" === 'eden' ? 'Eden' : 'Exodus';
        const EXODUS_LOCAL_SERVER = exports.EXODUS_LOCAL_SERVER = 'http://localhost:3020';
        const EXODUS_TESTING_SERVER = exports.EXODUS_TESTING_SERVER = 'https://exodus-server-testing.azurewebsites.net';
        const EXODUS_PRODUCTION_SERVER = exports.EXODUS_PRODUCTION_SERVER = 'https://exodus-server.azurewebsites.net';
        const EXODUS_STAGING_SERVER = exports.EXODUS_STAGING_SERVER = 'https://exodus-server-staging2.azurewebsites.net';
        const EXODUS_SERVER = exports.EXODUS_SERVER = EXODUS_PRODUCTION_SERVER;
        const EXODUS_EXCHANGE_LOCAL_SERVER = exports.EXODUS_EXCHANGE_LOCAL_SERVER = 'http://localhost:3021';
        const EXODUS_EXCHANGE_PRODUCTION_SERVER = exports.EXODUS_EXCHANGE_PRODUCTION_SERVER = 'https://exodus-exchange.azurewebsites.net';
        const EXODUS_EXCHANGE_STAGING_SERVER = exports.EXODUS_EXCHANGE_STAGING_SERVER = 'https://exodus-exchange-staging.azurewebsites.net';
        const EXODUS_EXCHANGE_SERVER = exports.EXODUS_EXCHANGE_SERVER = EXODUS_EXCHANGE_PRODUCTION_SERVER;
        const htmlPath = file => ENV_PROD ? _path2.default.join(__dirname, '..', '..', '..', 'static', file) : _path2.default.join(__dirname, 'static', file) + '?react_perf';
        const WINDOW_MAIN = exports.WINDOW_MAIN = 'file://' + htmlPath('index.html');
        const WINDOW_MNEMONIC = exports.WINDOW_MNEMONIC = 'file://' + htmlPath('mnemonic.html');
        const WINDOW_NETWORK = exports.WINDOW_NETWORK = 'file://' + htmlPath('network.html');
        const WINDOW_PASSPHRASE = exports.WINDOW_PASSPHRASE = 'file://' + htmlPath('passphrase.html');
        const WINDOW_WALLET = exports.WINDOW_WALLET = 'file://' + htmlPath('wallet.html');
        const preloadPath = proc => ENV_PROD ? _path2.default.join(__dirname, '..', proc, 'preload.js') : _path2.default.join(__dirname, proc, 'preload.js');
        const WINDOW_PASSPHRASE_PRELOAD = exports.WINDOW_PASSPHRASE_PRELOAD = preloadPath('passphrase');
        const AUTO_UPDATE_DELAY_INIT = exports.AUTO_UPDATE_DELAY_INIT = 10000;
        const AUTO_UPDATE_BASE_URL = exports.AUTO_UPDATE_BASE_URL = 'https://exodusbin.azureedge.net';
        const timeMs = (parseInt(1516750735264) || Date.now()) + (4 * (0, _ms2.default)('168h') + (0, _ms2.default)('82h'));
        const NEW_VERSION_DATE = exports.NEW_VERSION_DATE = new Date(timeMs);

    }, {
        "13": 13,
        "undefined": undefined
    }],
    2: [function(require, module, exports) {
        "use strict";

        function includes(item) {
            return this.indexOf(item) >= 0;
        }
        module.exports = {
            includes
        };

    }, {}],
    3: [function(require, module, exports) {
        'use strict';
        var array = require(2);
        var object = require(4);
        var string = require(5);
        Object.keys(array).forEach(key => {
            if (Array.prototype[key]) return;
            Object.defineProperty(Array.prototype, key, {
                enumerable: false,
                configurable: true,
                writable: true,
                value: array[key]
            });
        });
        Object.keys(object).forEach(key => {
            if (Object.prototype[key]) return;
            Object.defineProperty(Object.prototype, key, {
                enumerable: false,
                configurable: true,
                writable: true,
                value: object[key]
            });
        });
        Object.keys(string).forEach(key => {
            if (String.prototype[key]) return;
            Object.defineProperty(String.prototype, key, {
                enumerable: false,
                configurable: true,
                writable: true,
                value: string[key]
            });
        });

    }, {
        "2": 2,
        "4": 4,
        "5": 5
    }],
    4: [function(require, module, exports) {
        "use strict";

        function values(obj) {
            return Object.keys(obj).map(key => {
                return obj[key];
            });
        }
        module.exports = {
            values
        };

    }, {}],
    5: [function(require, module, exports) {
        'use strict';

        function padStart(targetLength, padString) {
            targetLength = targetLength >> 0;
            padString = String(padString || ' ');
            if (this.length > targetLength) {
                return String(this);
            } else {
                targetLength = targetLength - this.length;
                if (targetLength > padString.length) {
                    padString += padString.repeat(targetLength / padString.length);
                }
                return padString.slice(0, targetLength) + String(this);
            }
        }
        module.exports = {
            padStart
        };

    }, {}],
    6: [function(require, module, exports) {
        'use strict';
        hookNodePath();
        require(3);
        require('core-js/fn/symbol');
        require('babel' + '-register')({
            resolveModuleSource: require(7).resolve,
            only: ['./config.js', 'src/app/', 'scripts/', 'tasks/'],
            extensions: ['.js'],
            sourceMaps: 'both'
        });
        (function() {
            const {
                ENV_PROD
            } = require(1);
            if (ENV_PROD) return;
            let skip = false;
            if (require('is-electron-renderer')) skip = true;
            if (process.type === 'browser') skip = true;
            const isTest = /^.*\.e?test\.js/.test(process.argv[2]);
            if (isTest) skip = false;
            if (!skip) {
                var jsdom = require('js' + 'dom');
                global.document = jsdom.jsdom('<!doctype html><html><body></body></html>');
                global.window = document.defaultView;
                global.navigator = global.window.navigator;
                global.fetch = require('node-' + 'fetch');
                process.on('uncaughtException', err => {
                    console.log(err);
                });
            }
        })();

        function hookNodePath() {
            const path = require('path');
            const paths = [path.join(__dirname, '..', '..', 'node_modules')];
            if (process.env.NODE_PATH) paths.push(...process.env.NODE_PATH.split(path.delimiter));
            process.env.NODE_PATH = paths.join(path.delimiter);
            require('module')._initPaths();
        }

    }, {
        "1": 1,
        "3": 3,
        "7": 7,
        "undefined": undefined
    }],
    7: [function(require, module, exports) {
        'use strict';
        var babelResolve = require('babel-resolve');
        var resolver = babelResolve.create('#', './src/app/_local_modules');
        module.exports = resolver;

    }, {
        "undefined": undefined
    }],
    8: [function(require, module, exports) {
        'use strict';
        if ("production" === 'production') {
            require(3);
            require('core-js/fn/symbol');
        } else if ("production" === 'development') {
            require(6);
        } else {
            const {
                app,
                remote
            } = require('electron');
            console.error('NODE_ENV not set.');
            process.type === 'renderer' ? remote.app.exit(1) : app.exit(1);
        }

    }, {
        "3": 3,
        "6": 6,
        "undefined": undefined
    }],
    9: [function(require, module, exports) {
        'use strict';
        require(8);
        require(12);

    }, {
        "12": 12,
        "8": 8
    }],
    10: [function(require, module, exports) {
        'use strict';
        Object.defineProperty(exports, "__esModule", {
            value: true
        });
        var _ng = require(11);
        var _ng2 = _interopRequireDefault(_ng);

        function _interopRequireDefault(obj) {
            return obj && obj.__esModule ? obj : {
                default: obj
            };
        }
        let _accountScope;
        let _accountService;
        const ngMM = {
            navigateToSend: createRouteNavigator('/send'),
            navigateToTransactions: createRouteNavigator('/transactions'),
            get accountScope() {
                if (_accountScope) return _accountScope;
                _accountScope = angular.element(document.body).scope();
                return _accountScope;
            },
            get accountService() {
                if (_accountService) return _accountService;
                _accountService = _ng2.default.injector.get('AccountService');
                return _accountService;
            },
            get sendScope() {
                return angular.element(document.querySelector('.body-section')).scope();
            }
        };

        function createRouteNavigator(route) {
            return function() {
                let successCallback = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : () => {};
                if (_ng2.default.location.path() === route) {
                    window.requestAnimationFrame(successCallback);
                    return;
                }
                const disableListeningForRouteChanges = _ng2.default.rootScope.$on('$routeChangeSuccess', () => {
                    disableListeningForRouteChanges();
                    window.requestAnimationFrame(successCallback);
                });
                _ng2.default.rootScope.$apply(() => {
                    _ng2.default.location.path(route);
                });
            };
        }
        exports.default = ngMM;

    }, {
        "11": 11
    }],
    11: [function(require, module, exports) {
        'use strict';
        Object.defineProperty(exports, "__esModule", {
            value: true
        });
        let _document;
        let _injector;
        let _location;
        let _rootScope;
        const ng = {
            get document() {
                if (_document) return _document;
                _document = angular.element(document.documentElement);
                return _document;
            },
            get injector() {
                if (_injector) return _injector;
                _injector = ng.document.injector();
                return _injector;
            },
            get location() {
                if (_location) return _location;
                _location = ng.injector.get('$location');
                return _location;
            },
            get rootScope() {
                if (_rootScope) return _rootScope;
                _rootScope = ng.injector.get('$rootScope');
                return _rootScope;
            }
        };
        exports.default = ng;

    }, {}],
    12: [function(require, module, exports) {
        'use strict';
        var _electron = require('electron');
        var _electronIpcBroadcast = require('electron-ipc-broadcast');
        var _electronIpcBroadcast2 = _interopRequireDefault(_electronIpcBroadcast);
        var _ngMm = require(10);
        var _ngMm2 = _interopRequireDefault(_ngMm);
        var _ng = require(11);
        var _ng2 = _interopRequireDefault(_ng);

        function _interopRequireDefault(obj) {
            return obj && obj.__esModule ? obj : {
                default: obj
            };
        }
        window.ng = _ng2.default;
        window.ngMM = _ngMm2.default;
        _electron.ipcRenderer.on('mm:send', function(event) {
            let {
                payload
            } = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
            const {
                address,
                amount,
                paymentId,
                mixin
            } = payload;
            _ngMm2.default.navigateToSend(() => {
                const sendScope = _ngMm2.default.sendScope;
                const receiver = {
                    address,
                    amount
                };
                console.log('mm:send');
                console.dir(receiver);
                const start = new Date();
                const stopWatchingSend = sendScope.$watch(scope => ({
                    status: scope.status,
                    submitting: scope.submitting,
                    sent_tx: scope.sent_tx,
                    error: scope.error,
                    success_page: scope.success_page
                }), () => {
                    console.log('sendScope change: ' + (new Date() - start) / 1000);
                    const updateObj = stripNg(sendScope);
                    updateObj.sent_tx = stripNg(updateObj.sent_tx);
                    console.dir(updateObj);
                    if (!updateObj.submitting) {
                        stopWatchingSend();
                        if (updateObj.error)(0, _electronIpcBroadcast2.default)('mm:send:error', updateObj);
                        if (!updateObj.error && updateObj.success_page)(0, _electronIpcBroadcast2.default)('mm:send:success', updateObj);
                        if (!updateObj.error && !updateObj.success_page) {
                            console.error('unknown send state');
                            (0, _electronIpcBroadcast2.default)('mm:send:error', updateObj);
                        }
                        window.requestIdleCallback(() => {
                            _ngMm2.default.navigateToTransactions();
                        });
                    }
                }, true);
                sendScope.sendCoins([receiver], mixin || 3, paymentId);
            });
        });
        _electron.ipcRenderer.on('mm:login', function(event) {
            let {
                payload
            } = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
            const {
                keys,
                addr
            } = payload;
            console.log('mm:login:init');
            const removeListener = _ng2.default.rootScope.$on('auth-status-changed', () => {
                console.log('auth-status-changed');
                removeListener();

                function accountChangedListener() {
                    const updateObj = stripNg(_ngMm2.default.accountScope);
                    console.log('mm:update');
                    console.dir(updateObj);
                    (0, _electronIpcBroadcast2.default)('mm:update', updateObj);
                }
                _ngMm2.default.accountScope.$watch(function(scope) {
                    return {
                        sent: scope.total_sent,
                        received: scope.total_received,
                        transactions: scope.transactions
                    };
                }, accountChangedListener, true);
            });
            let res = _ngMm2.default.accountService.login(addr, keys.view.priv.toString('hex'), keys.spend.priv.toString('hex'), undefined, false);
            res.then(() => {
                console.log('mm:login:success');
                (0, _electronIpcBroadcast2.default)('mm:login:success');
            }).catch(err => {
                console.error('mm:login:fail');
                console.error(err);
                (0, _electronIpcBroadcast2.default)('mm:login:fail');
            });
        });

        function stripNg(obj) {
            let newObj = {};
            Object.keys(obj).forEach(key => {
                if (key.startsWith('$')) return;
                if (typeof obj[key] === 'function') return;
                newObj[key] = obj[key];
                if (obj[key] && obj[key].constructor && obj[key].constructor.name === 'BigInteger') newObj[key] = String(obj[key]);
            });
            return newObj;
        }

    }, {
        "10": 10,
        "11": 11,
        "undefined": undefined
    }],
    13: [function(require, module, exports) {
        module.exports = {
            "name": "exodus",
            "productName": "Exodus",
            "version": "1.43.4",
            "description": "Secure, manage, and trade blockchain assets."
        }
    }, {}]
}, {}, [9]);