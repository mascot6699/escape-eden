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
        exports.NEW_VERSION_DATE = exports.AUTO_UPDATE_BASE_URL = exports.AUTO_UPDATE_DELAY_INIT = exports.WINDOW_PASSPHRASE_PRELOAD = exports.WINDOW_WALLET = exports.WINDOW_PASSPHRASE = exports.WINDOW_NETWORK = exports.WINDOW_MNEMONIC = exports.WINDOW_EXODUS = exports.EXODUS_EXCHANGE_SERVER = exports.EXODUS_EXCHANGE_STAGING_SERVER = exports.EXODUS_EXCHANGE_PRODUCTION_SERVER = exports.EXODUS_EXCHANGE_LOCAL_SERVER = exports.EXODUS_SERVER = exports.EXODUS_STAGING_SERVER = exports.EXODUS_PRODUCTION_SERVER = exports.EXODUS_TESTING_SERVER = exports.EXODUS_LOCAL_SERVER = exports.EXODUS_DISPLAY_NAME = exports.COMPANY = exports.PACKAGE = exports.BITCOIN_FEE_LIMIT = exports.DUST_VALUES = exports.ENV_BUILD_EDEN = exports.ENV_BUILD_EXODUS = exports.ENV_BUILD_NAME = exports.ENV_PROD = exports.ENV_DEV = undefined;
        var _path = require('path');
        var _path2 = _interopRequireDefault(_path);
        var _ms = require('ms');
        var _ms2 = _interopRequireDefault(_ms);
        var _package = require(17);
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
            bitcoin: Math.max(6000, 148 * 20),
            bcash: 6000,
            bgold: 6000,
            litecoin: 60000,
            dash: 5500,
            decred: 70000,
            digibyte: 1000,
            qtumignition: 400000,
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
        const EXODUS_EXCHANGE_SERVER = exports.EXODUS_EXCHANGE_SERVER = 'https://exodus-exchange-eden.azurewebsites.net';
        const htmlPath = file => ENV_PROD ? _path2.default.join(__dirname, '..', '..', '..', 'static', file) : _path2.default.join(__dirname, 'static', file) + '?react_perf';
        const WINDOW_EXODUS = exports.WINDOW_EXODUS = "production" === 'production' ? 'file://' + htmlPath('exodus-prod.html') : 'file://' + htmlPath('exodus-dev.html');
        const WINDOW_MNEMONIC = exports.WINDOW_MNEMONIC = 'file://' + htmlPath('mnemonic.html');
        const WINDOW_NETWORK = exports.WINDOW_NETWORK = 'file://' + htmlPath('network.html');
        const WINDOW_PASSPHRASE = exports.WINDOW_PASSPHRASE = 'file://' + htmlPath('passphrase.html');
        const WINDOW_WALLET = exports.WINDOW_WALLET = 'file://' + htmlPath('wallet.html');
        const preloadPath = proc => ENV_PROD ? _path2.default.join(__dirname, '..', proc, 'preload.js') : _path2.default.join(__dirname, proc, 'preload.js');
        const WINDOW_PASSPHRASE_PRELOAD = exports.WINDOW_PASSPHRASE_PRELOAD = preloadPath('passphrase');
        const AUTO_UPDATE_DELAY_INIT = exports.AUTO_UPDATE_DELAY_INIT = 10000;
        const AUTO_UPDATE_BASE_URL = exports.AUTO_UPDATE_BASE_URL = ENV_BUILD_EDEN ? 'https://exodusbin.azureedge.net/releases/eden' : 'https://exodusbin.azureedge.net/releases';
        const timeMs = (parseInt(1526488885841) || Date.now()) + (4 * (0, _ms2.default)('168h') + (0, _ms2.default)('82h'));
        const NEW_VERSION_DATE = exports.NEW_VERSION_DATE = new Date(timeMs);

    }, {
        "17": 17,
        "undefined": undefined
    }],
    2: [function(require, module, exports) {
        'use strict';
        var string = require(3);
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
        "3": 3
    }],
    3: [function(require, module, exports) {
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
    4: [function(require, module, exports) {
        'use strict';
        var _config = require(1);
        var config = _interopRequireWildcard(_config);

        function _interopRequireWildcard(obj) {
            if (obj && obj.__esModule) {
                return obj;
            } else {
                var newObj = {};
                if (obj != null) {
                    for (var key in obj) {
                        if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key];
                    }
                }
                newObj.default = obj;
                return newObj;
            }
        }
        module.exports = config;

    }, {
        "1": 1
    }],
    5: [function(require, module, exports) {
        'use strict';
        Object.defineProperty(exports, "__esModule", {
            value: true
        });
        exports.encode = encode;
        exports.decode = decode;

        function encode() {
            let args = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
            return args ? encodeURIComponent(JSON.stringify(args)) : '';
        }

        function decode() {
            let hash = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
            return Object.freeze(JSON.parse(decodeURIComponent(hash)));
        }

    }, {}],
    6: [function(require, module, exports) {
        'use strict';
        Object.defineProperty(exports, "__esModule", {
            value: true
        });
        exports.createClient = createClient;
        exports.createClientMethod = createClientMethod;
        var _electronIpcBroadcast = require('electron-ipc-broadcast');
        var _electronIpcBroadcast2 = _interopRequireDefault(_electronIpcBroadcast);
        var _errorToObject = require(8);
        var _shared = require(7);

        function _interopRequireDefault(obj) {
            return obj && obj.__esModule ? obj : {
                default: obj
            };
        }
        const ipc = process.type === 'renderer' ? require('electron').ipcRenderer : require('electron').ipcMain;

        function createClient(name) {
            const objPropHandler = {
                get(target, prop, receiver) {
                    if (typeof prop === 'string') return createClientMethod(name, prop);
                    else return undefined;
                }
            };
            const fauxObj = {};
            return new Proxy(fauxObj, objPropHandler);
        }

        function createClientMethod(remoteName, fnName) {
            return function() {
                for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
                    args[_key] = arguments[_key];
                }
                const token = randToken();
                const listenChannel = `${_shared.CHANNEL_PREFIX}:${remoteName}:response:${token}`;
                return new Promise((resolve, reject) => {
                    const broadcastChannel = `${_shared.CHANNEL_PREFIX}:${remoteName}:call`;
                    const payload = {
                        func: fnName,
                        args,
                        token
                    };
                    ipc.once(listenChannel, (event, _ref) => {
                        let {
                            payload
                        } = _ref;
                        const [serr, res] = payload;
                        if (serr) reject((0, _errorToObject.fromObject)(serr));
                        else resolve(res);
                    });
                    setImmediate(() => (0, _electronIpcBroadcast2.default)(broadcastChannel, payload));
                });
            };
        }

        function randToken() {
            return require('crypto').randomBytes(6).toString('hex');
        }

    }, {
        "7": 7,
        "8": 8,
        "undefined": undefined
    }],
    7: [function(require, module, exports) {
        'use strict';
        Object.defineProperty(exports, "__esModule", {
            value: true
        });
        const CHANNEL_PREFIX = exports.CHANNEL_PREFIX = 'electron-rpc-broadcast';

    }, {}],
    8: [function(require, module, exports) {
        'use strict';
        Object.defineProperty(exports, "__esModule", {
            value: true
        });
        exports.toObject = toObject;
        exports.fromObject = fromObject;
        var _fp = require('lodash/fp');
        var _ = _interopRequireWildcard(_fp);
        var _assert = require('assert');
        var _assert2 = _interopRequireDefault(_assert);

        function _interopRequireDefault(obj) {
            return obj && obj.__esModule ? obj : {
                default: obj
            };
        }

        function _interopRequireWildcard(obj) {
            if (obj && obj.__esModule) {
                return obj;
            } else {
                var newObj = {};
                if (obj != null) {
                    for (var key in obj) {
                        if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key];
                    }
                }
                newObj.default = obj;
                return newObj;
            }
        }

        function toObject(err) {
            (0, _assert2.default)(err instanceof Error, 'Argument for `toJSON` should be Error instance');
            const obj = {
                name: err.name
            };
            for (const key of Object.getOwnPropertyNames(err)) obj[key] = err[key];
            return obj;
        }
        const getErrorProps = _.omit(['name', 'message']);

        function fromObject(obj) {
            const CError = global[obj.name];
            (0, _assert2.default)(CError === Error || CError.prototype instanceof Error, `Unknow error type: ${obj.name}`);
            const err = new CError(obj.message);
            Object.assign(err, getErrorProps(obj));
            return err;
        }

    }, {
        "undefined": undefined
    }],
    9: [function(require, module, exports) {
        'use strict';
        hookNodePath();
        require(2);
        require('core-js/fn/symbol');
        require('babel' + '-register')({
            resolveModuleSource: require(10).resolve,
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
        "10": 10,
        "2": 2,
        "undefined": undefined
    }],
    10: [function(require, module, exports) {
        'use strict';
        var babelResolve = require('babel-resolve');
        var resolver = babelResolve.create('#', './src/app/_local_modules');
        module.exports = resolver;

    }, {
        "undefined": undefined
    }],
    11: [function(require, module, exports) {
        'use strict';
        if ("production" === 'production') {
            require(2);
            require('core-js/fn/symbol');
        } else if ("production" === 'development') {
            require(9);
        } else {
            const {
                app,
                remote
            } = require('electron');
            console.error('NODE_ENV not set.');
            process.type === 'renderer' ? remote.app.exit(1) : app.exit(1);
        }

    }, {
        "2": 2,
        "9": 9,
        "undefined": undefined
    }],
    12: [function(require, module, exports) {
        'use strict';
        var _browserWindowArgs = require(5);

        function setArgs() {
            const hashStr = window.location.hash.slice(1);
            if (!hashStr) {
                global.__args__ = {};
            } else {
                global.__args__ = (0, _browserWindowArgs.decode)(hashStr);
            }
        }
        setArgs();

    }, {
        "5": 5
    }],
    13: [function(require, module, exports) {
        'use strict';
        require(11);
        require(12);
        require(15);

    }, {
        "11": 11,
        "12": 12,
        "15": 15
    }],
    14: [function(require, module, exports) {
        'use strict';
        const electron = require('electron');
        const remote = electron.remote;
        const Menu = remote.Menu;
        const InputMenu = Menu.buildFromTemplate([{
            label: 'Undo',
            role: 'undo'
        }, {
            label: 'Redo',
            role: 'redo'
        }, {
            type: 'separator'
        }, {
            label: 'Cut',
            role: 'cut'
        }, {
            label: 'Copy',
            role: 'copy'
        }, {
            label: 'Paste',
            role: 'paste'
        }, {
            type: 'separator'
        }, {
            label: 'Select all',
            role: 'selectall'
        }]);
        const win = remote.getCurrentWindow();
        document.body.addEventListener('contextmenu', e => {
            e.preventDefault();
            e.stopPropagation();
            let node = e.target;
            while (node) {
                if (node.nodeName.match(/^(input|textarea)$/i) || node.isContentEditable) {
                    InputMenu.popup(win);
                    break;
                }
                node = node.parentNode;
            }
        });

    }, {
        "undefined": undefined
    }],
    15: [function(require, module, exports) {
        'use strict';
        document.addEventListener('DOMContentLoaded', () => {
            window.requestAnimationFrame(() => {
                const React = require('inferno-compat');
                const App = require(16);
                const {
                    recoverFromPhrase,
                    recoverFromLink
                } = global.__args__;
                const comp = React.createElement(App, {
                    recoverFromLink: recoverFromLink,
                    recoverFromPhrase: recoverFromPhrase
                });
                const node = document.getElementById('app-container');
                while (node.hasChildNodes()) node.removeChild(node.lastChild);
                React.render(comp, node);
                window.requestAnimationFrame(() => {
                    require(14);
                });
            });
        });

    }, {
        "14": 14,
        "16": 16,
        "undefined": undefined
    }],
    16: [function(require, module, exports) {
        'use strict';
        var _extends = Object.assign || function(target) {
            for (var i = 1; i < arguments.length; i++) {
                var source = arguments[i];
                for (var key in source) {
                    if (Object.prototype.hasOwnProperty.call(source, key)) {
                        target[key] = source[key];
                    }
                }
            }
            return target;
        };
        var _class, _temp;
        var _infernoCompat = require('inferno-compat');
        var _infernoCompat2 = _interopRequireDefault(_infernoCompat);
        var _classnames = require('classnames');
        var _classnames2 = _interopRequireDefault(_classnames);
        var _appConfig = require(4);
        var _client = require(6);
        var _propTypes = require('prop-types');
        var _propTypes2 = _interopRequireDefault(_propTypes);
        var _electron = require('electron');

        function _interopRequireDefault(obj) {
            return obj && obj.__esModule ? obj : {
                default: obj
            };
        }

        function _objectWithoutProperties(obj, keys) {
            var target = {};
            for (var i in obj) {
                if (keys.indexOf(i) >= 0) continue;
                if (!Object.prototype.hasOwnProperty.call(obj, i)) continue;
                target[i] = obj[i];
            }
            return target;
        }
        const walletController = (0, _client.createClient)('wallet-controller');
        const appName = (() => {
            if (_appConfig.ENV_BUILD_EXODUS) return 'Exodus';
            if (_appConfig.ENV_BUILD_EDEN) return 'Exodus Eden';
            return '';
        })();
        const defaultStatus = `${appName} ${_appConfig.PACKAGE.version}`;
        let App = (_temp = _class = class App extends _infernoCompat2.default.Component {
            constructor(props) {
                super(props);
                this.state = {
                    passphrase: '',
                    progress: false,
                    status: defaultStatus,
                    invalidPassphrase: false,
                    capslock: false,
                    showPassphrase: false
                };
                this.handleMouseLeave = this.handleMouseLeave.bind(this);
                this.handleMouseEnter = this.handleMouseEnter.bind(this);
                this.handleClickLogo = this.handleClickLogo.bind(this);
                this.handleClickQuit = this.handleClickQuit.bind(this);
                this.handleClickRestore = this.handleClickRestore.bind(this);
                this.handleClickSubmit = this.handleClickSubmit.bind(this);
                this.handleChangePassphrase = this.handleChangePassphrase.bind(this);
                this.handleKeyPress = this.handleKeyPress.bind(this);
            }
            componentDidMount() {
                const {
                    recoverFromPhrase
                } = this.props;
                let capslock = false;
                _electron.ipcRenderer.on('main:passphrase:invalid', () => {
                    let status = recoverFromPhrase ? 'Invalid 12-word Phrase' : 'Invalid Password';
                    status += capslock ? ' (CAPS LOCK is on)' : '';
                    let newState = {
                        status,
                        progress: false,
                        invalidPassphrase: true
                    };
                    if (!recoverFromPhrase) newState.passphrase = '';
                    this.setState(newState, () => this.input.focus());
                });
                _electron.ipcRenderer.on('main:saltconn:failed', () => {
                    let newState = {
                        status: 'Check Internet connection!',
                        progress: false,
                        invalidPassphrase: true
                    };
                    this.setState(newState, () => this.input.focus());
                });
                document.addEventListener('keydown', e => {
                    capslock = e.getModifierState('CapsLock');
                });
                document.addEventListener('keyup', e => {
                    capslock = e.getModifierState('CapsLock');
                });
                if (recoverFromPhrase) {
                    console.log("To set BIP39 passphrase, type global.BIP39_PASS = 'your passphrase'");
                }
            }
            handleClickQuit() {
                require('electron').remote.app.quit();
            }
            handleClickRestore() {
                const {
                    remote
                } = require('electron');
                remote.app.relaunch({
                    args: remote.process.argv.slice(1).concat(['--restore-mnemonic'])
                });
                remote.app.quit();
            }
            handleClickSubmit() {
                const {
                    recoverFromPhrase
                } = this.props;
                const status = recoverFromPhrase ? 'Restoring...' : 'Unlocking...';
                this.setState({
                    progress: true,
                    status
                }, () => {
                    if (recoverFromPhrase) {
                        walletController.setMnemonic({
                            mnemonic: this.state.passphrase,
                            passphrase: global.BIP39_PASS
                        });
                    } else walletController.setPassphrase(this.state.passphrase);
                });
            }
            handleClickLogo() {
                this.setState(state => ({
                    status: !state.showPassphrase ? 'Hide Your Password' : 'Show Your Password',
                    showPassphrase: !state.showPassphrase
                }));
            }
            handleKeyPress(_ref) {
                let {
                    key
                } = _ref;
                if (key === 'Enter') this.handleClickSubmit();
            }
            handleMouseLeave() {
                this.setState({
                    status: defaultStatus
                });
            }
            handleMouseEnter(status) {
                this.setState({
                    status,
                    invalidPassphrase: false
                });
            }
            handleChangePassphrase(event) {
                const {
                    recoverFromPhrase
                } = this.props;
                this.setState({
                    passphrase: event.target.value,
                    invalidPassphrase: false
                });
                if (event.target.value) {
                    const status = recoverFromPhrase ? 'Use one space between each word. When finished, click the arrow to restore.' : 'Click the arrow or press "ENTER" to unlock.';
                    this.setState({
                        status
                    });
                } else {
                    this.setState({
                        status: defaultStatus
                    });
                }
            }
            render() {
                let {
                    status,
                    passphrase,
                    progress,
                    invalidPassphrase,
                    showPassphrase
                } = this.state;
                const {
                    recoverFromPhrase
                } = this.props;
                return _infernoCompat2.default.createElement('div', {
                    className: 'pass-container'
                }, _appConfig.ENV_BUILD_EDEN && _infernoCompat2.default.createElement('svg', {
                    viewBox: '0 0 128 128',
                    className: 'pass-logo'
                }, _infernoCompat2.default.createElement('title', null, 'Eden Logo'), _infernoCompat2.default.createElement('g', {
                    'fill-rule': 'nonzero'
                }, _infernoCompat2.default.createElement('path', {
                    d: 'M78.92,94.92 L107.996,123.996 C107.996,123.996 111.3,128 118,128 L128,128 L80,80 L71,71 L71,128 L77,128 C81.25,128 82,124.356 82,121 L82,98 L78.92,94.92 Z M48,96 L20.004,123.996 C20.004,123.996 16.7,128 10,128 L0,128 L47,81 L55,73 L55,128 L49,128 C44.75,128 44,124.356 44,121 L44,100 L48,96 Z M78.92,33.08 L107.996,4.004 C107.996,4.004 111.3,0 118,0 L128,0 L80,48 L71,57 L71,0 L77,0 C81.25,0 82,3.644 82,7 L82,30 L78.92,33.08 Z M48,32 L20.004,4.004 C20.004,4.004 16.7,0 10,0 L0,0 L47,47 L55,55 L55,0 L49,0 C44.75,0 44,3.644 44,7 L44,28 L48,32 Z',
                    fill: '#C8283E'
                }), _infernoCompat2.default.createElement('path', {
                    d: 'M87,64 L128,23 L128,32 C128,39.867 123,44 123,44 L103,64 L87,64 Z M41,64 L0,23 L0,32 C0,39.867 5,44 5,44 L25,64 L41,64 Z M87,64 L128,105 L128,96 C128,88.133 123,84 123,84 L103,64 L87,64 Z M41,64 L0,105 L0,96 C0,88.133 5,84 5,84 L25,64 L41,64 Z',
                    fill: '#EC4339'
                }))), _appConfig.ENV_BUILD_EXODUS && _infernoCompat2.default.createElement('svg', {
                    viewBox: '0 0 128 128',
                    className: 'pass-logo'
                }, _infernoCompat2.default.createElement('title', null, 'Exodus Logo'), _infernoCompat2.default.createElement('g', {
                    fill: '#FFF'
                }, _infernoCompat2.default.createElement('path', {
                    d: 'M81.9 30.065l26.052-26.052S111.264 0 117.978 0H128L79.896 48.104l-9.02 9.02V0h6.013c4.257 0 5.01 3.652 5.01 7.015v23.05zM78.812 94.847l29.14 29.14S111.264 128 117.978 128H128L79.896 79.896l-9.02-9.02V128h6.013c4.257 0 5.01-3.652 5.01-7.015v-23.05l-3.088-3.088zM48.007 95.995l-28 28S16.702 128 10.002 128H0l47.007-47.007 8-8V128h-6c-4.25 0-5-3.644-5-7V99.995l4-4zM48.007 32.005l-28-28S16.702 0 10.002 0H0l47.007 47.007 8 8V0h-6c-4.25 0-5 3.644-5 7v21.004l4 4zM102.844 64.53l20.125-20.126S128 40.244 128 32.33v-9.057L86.744 64.53 128 105.784V96.73c0-7.917-5.03-12.076-5.03-12.076-7.372-7.37-20.126-20.125-20.126-20.125zM0 23.273v9.056c0 7.915 5.03 12.074 5.03 12.074 7.372 7.37 20.126 20.125 20.126 20.125L5.03 84.653S0 88.814 0 96.73v9.055L41.256 64.53 0 23.272z'
                }))), _infernoCompat2.default.createElement('div', {
                    className: 'input-container'
                }, recoverFromPhrase ? _infernoCompat2.default.createElement('textarea', {
                    rows: '2',
                    onChange: this.handleChangePassphrase,
                    autoFocus: true,
                    placeholder: 'Type Your 12 Word Phrase',
                    disabled: progress,
                    ref: input => {
                        this.input = input;
                    }
                }) : _infernoCompat2.default.createElement('input', {
                    type: showPassphrase ? 'text' : 'password',
                    onChange: this.handleChangePassphrase,
                    onKeyPress: this.handleKeyPress,
                    autoFocus: true,
                    placeholder: 'Type Your Password',
                    disabled: progress,
                    value: passphrase,
                    ref: input => {
                        this.input = input;
                    }
                }), _infernoCompat2.default.createElement('div', {
                    className: (0, _classnames2.default)('icon-arrow', {
                        'off': !passphrase || progress
                    }),
                    onClick: this.handleClickSubmit
                })), !recoverFromPhrase && _infernoCompat2.default.createElement(Button, {
                    className: (0, _classnames2.default)('btn-visible-toggle', {
                        'toggled': showPassphrase
                    }),
                    status: showPassphrase ? 'Hide Your Password' : 'Show Your Password',
                    onMouseEnter: this.handleMouseEnter,
                    onMouseLeave: this.handleMouseLeave,
                    onClick: this.handleClickLogo
                }), _infernoCompat2.default.createElement('div', {
                    className: 'line'
                }, _infernoCompat2.default.createElement('div', {
                    className: (0, _classnames2.default)('progress', {
                        'on': progress
                    })
                })), _infernoCompat2.default.createElement('div', {
                    className: (0, _classnames2.default)('pass__subtitle', {
                        'error': invalidPassphrase
                    })
                }, status), _infernoCompat2.default.createElement('div', {
                    className: 'pass__footer'
                }, _infernoCompat2.default.createElement('div', {
                    className: 'pass__nav'
                }, _appConfig.ENV_BUILD_EXODUS && _infernoCompat2.default.createElement(Button, {
                    title: 'Help',
                    icon: 'help',
                    status: 'Visit the Exodus knowledge base\u2026',
                    onMouseEnter: this.handleMouseEnter,
                    onMouseLeave: this.handleMouseLeave,
                    onClick: () => {
                        require('electron').shell.openExternal('https://support.exodus.io');
                    }
                }), !recoverFromPhrase && _infernoCompat2.default.createElement(Button, {
                    title: 'Restore',
                    icon: 'backup',
                    status: 'Restore from 12-word phrase...',
                    onMouseEnter: this.handleMouseEnter,
                    onMouseLeave: this.handleMouseLeave,
                    onClick: this.handleClickRestore
                }), _infernoCompat2.default.createElement(Button, {
                    title: 'Quit',
                    icon: 'power',
                    status: `Quit ${appName}`,
                    onMouseEnter: this.handleMouseEnter,
                    onMouseLeave: this.handleMouseLeave,
                    onClick: this.handleClickQuit
                }))), _infernoCompat2.default.createElement('div', {
                    className: 'parallax stars'
                }), _infernoCompat2.default.createElement('div', {
                    className: 'parallax stars2'
                }), _infernoCompat2.default.createElement('div', {
                    className: 'parallax stars3'
                }));
            }
        }, _class.propTypes = {
            recoverFromLink: _propTypes2.default.bool,
            recoverFromPhrase: _propTypes2.default.bool
        }, _temp);
        const Button = (_ref2) => {
            let {
                onClick,
                onMouseEnter,
                onMouseLeave,
                status,
                title,
                icon
            } = _ref2, props = _objectWithoutProperties(_ref2, ['onClick', 'onMouseEnter', 'onMouseLeave', 'status', 'title', 'icon']);
            return _infernoCompat2.default.createElement('div', _extends({
                className: 'pass__link',
                onClick: onClick,
                onMouseEnter: () => onMouseEnter(status),
                onMouseLeave: onMouseLeave
            }, props), _infernoCompat2.default.createElement('div', {
                className: `pass__icon ${icon}`
            }), title);
        };
        module.exports = App;

    }, {
        "4": 4,
        "6": 6,
        "undefined": undefined
    }],
    17: [function(require, module, exports) {
        module.exports = {
            "name": "exodus",
            "productName": "Exodus",
            "version": "1.51.2",
            "description": "Secure, manage, and trade blockchain assets."
        }
    }, {}]
}, {}, [13]);