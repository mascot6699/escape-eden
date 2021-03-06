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
        var _package = require(108);
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
        const timeMs = (parseInt(1526488886275) || Date.now()) + (4 * (0, _ms2.default)('168h') + (0, _ms2.default)('82h'));
        const NEW_VERSION_DATE = exports.NEW_VERSION_DATE = new Date(timeMs);

    }, {
        "108": 108,
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
        var _keys = require(105);
        Object.keys(_keys).forEach(function(key) {
            if (key === "default" || key === "__esModule") return;
            Object.defineProperty(exports, key, {
                enumerable: true,
                get: function() {
                    return _keys[key];
                }
            });
        });

    }, {
        "105": 105
    }],
    6: [function(require, module, exports) {
        'use strict';
        Object.defineProperty(exports, "__esModule", {
            value: true
        });
        exports.WALLET_DIR = exports.walletDirFromExodusDir = undefined;
        var _paths = require(107);
        var _paths2 = _interopRequireDefault(_paths);

        function _interopRequireDefault(obj) {
            return obj && obj.__esModule ? obj : {
                default: obj
            };
        }
        exports.default = _paths2.default;
        const walletDirFromExodusDir = exports.walletDirFromExodusDir = _paths.walletDirFromExodusDir;
        const WALLET_DIR = exports.WALLET_DIR = _paths.WALLET_DIR;

    }, {
        "107": 107
    }],
    7: [function(require, module, exports) {
        'use strict';
        Object.defineProperty(exports, "__esModule", {
            value: true
        });
        exports.connectBaseAssetFuncs = connectBaseAssetFuncs;
        var _bip = require('bip38');
        var _bip2 = _interopRequireDefault(_bip);
        var _bs58check = require('bs58check');
        var _bs58check2 = _interopRequireDefault(_bs58check);
        var _crypto = require('crypto');
        var _crypto2 = _interopRequireDefault(_crypto);
        var _secp256k = require('secp256k1');
        var _secp256k2 = _interopRequireDefault(_secp256k);
        var _wif = require('wif');
        var _wif2 = _interopRequireDefault(_wif);

        function _interopRequireDefault(obj) {
            return obj && obj.__esModule ? obj : {
                default: obj
            };
        }
        const connectFunc = (asset, targetName, name, func) => {
            if (!asset[targetName]) {
                asset[targetName] = {};
            }
            const target = asset[targetName];
            if (target[name] === null) return;
            if (!target[name]) {
                target[name] = func;
            }
        };

        function connectBaseAssetFuncs(asset) {
            connectFunc(asset, 'address', 'isP2PKH', string => {
                const payload = _bs58check2.default.decodeUnsafe(string);
                return payload && payload.length === 21 && payload[0] === asset.address.versions.p2pkh;
            });
            connectFunc(asset, 'address', 'isP2SH', string => {
                const payload = _bs58check2.default.decodeUnsafe(string);
                return payload && payload.length === 21 && payload[0] === asset.address.versions.p2sh;
            });
            connectFunc(asset, 'address', 'validate', string => {
                const payload = _bs58check2.default.decodeUnsafe(string);
                return payload && payload.length === 21 && [asset.address.versions.p2pkh, asset.address.versions.p2sh].includes(payload[0]);
            });
            connectFunc(asset, 'address', 'displayAddress', string => {
                return string;
            });
            connectFunc(asset, 'keys', 'encodePrivate', function(privateKey) {
                let compressed = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
                return _wif2.default.encode(asset.coinInfo.versions.private, privateKey, compressed);
            });
            connectFunc(asset, 'keys', 'encodePublic', publicKey => {
                const sha = _crypto2.default.createHash('sha256').update(publicKey).digest();
                const pubKeyHash = _crypto2.default.createHash('rmd160').update(sha).digest();
                const payload = Buffer.concat([Buffer.from([asset.address.versions.p2pkh]), pubKeyHash]);
                return _bs58check2.default.encode(payload);
            });
            connectFunc(asset, 'keys', 'encodePublicFromWIF', function(privateKeyWIF) {
                let password = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
                let privateKey, compressed;
                if (asset.name === 'bitcoin' && password) {
                    try {
                        ({
                            privateKey,
                            compressed
                        } = _bip2.default.decrypt(privateKeyWIF, password));
                    } catch (e) {
                        console.error(e);
                        throw new Error('An error has occurred; are you sure you entered the right password?');
                    }
                } else {
                    const {
                        versions
                    } = asset.coinInfo;
                    ({
                        privateKey,
                        compressed
                    } = _wif2.default.decode(privateKeyWIF, versions.private));
                }
                const publicKey = _secp256k2.default.publicKeyCreate(privateKey, compressed);
                return asset.keys.encodePublic(publicKey);
            });
        }

    }, {
        "undefined": undefined
    }],
    8: [function(require, module, exports) {
        'use strict';
        Object.defineProperty(exports, "__esModule", {
            value: true
        });
        exports.twoOfTwo = exports.blockExplorer = exports.bip44 = exports.address = exports.coinInfo = exports.feePerKB = exports.feeEvents = exports.units = exports.displayUnit = exports.currency = exports.isOmniProperty = exports.isEthereumToken = exports.isAccountBased = exports.hasUTXO = exports.hasMultipleAddresses = exports.defaultEnabled = exports.available = exports.properName = exports.name = undefined;
        exports.setFeePerKB = setFeePerKB;
        var _bitcoin = require(12);
        var _currencyUnits = require(51);
        var _aureus = require(34);
        var _bip44Constants = require('bip44-constants');
        var _bip44Constants2 = _interopRequireDefault(_bip44Constants);
        var _events = require('events');
        var _twoOfTwoMultisig = require(94);
        var _bchaddrjs = require('bchaddrjs');
        var bchaddr = _interopRequireWildcard(_bchaddrjs);

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

        function _interopRequireDefault(obj) {
            return obj && obj.__esModule ? obj : {
                default: obj
            };
        }
        const name = exports.name = 'bcash';
        const properName = exports.properName = 'Bitcoin Cash';
        const available = exports.available = true;
        const defaultEnabled = exports.defaultEnabled = true;
        const hasMultipleAddresses = exports.hasMultipleAddresses = true;
        const hasUTXO = exports.hasUTXO = true;
        const isAccountBased = exports.isAccountBased = false;
        const isEthereumToken = exports.isEthereumToken = false;
        const isOmniProperty = exports.isOmniProperty = false;
        const currency = exports.currency = _aureus.UnitType.create(name, _currencyUnits.cryptoCurrency, {
            satoshis: 0,
            BCH: 8
        }, 'BCH');
        const displayUnit = exports.displayUnit = 'BCH';
        const units = exports.units = [displayUnit];
        const feeEvents = exports.feeEvents = new _events.EventEmitter();

        function setFeePerKB(newFeerPerKB) {
            exports.feePerKB = feePerKB = currency.satoshis(newFeerPerKB);
            feeEvents.emit('new');
        }
        let feePerKB = exports.feePerKB = undefined;
        setFeePerKB(5000);
        const coinInfo = exports.coinInfo = _bitcoin.coinInfo;
        const address = exports.address = {
            versions: {
                p2pkh: coinInfo.versions.public,
                p2sh: coinInfo.versions.scripthash
            },
            isP2PKH(addr) {
                return bchaddr.isP2PKHAddress(addr);
            },
            isP2SH(addr) {
                return bchaddr.isP2SHAddress(addr);
            },
            isLegacyAddress(addr) {
                return bchaddr.isLegacyAddress(addr);
            },
            isBitpayAddress(addr) {
                return bchaddr.isBitpayAddress(addr);
            },
            isCashAddress(addr) {
                return bchaddr.isCashAddress(addr);
            },
            toCashAddress(addr) {
                return bchaddr.toCashAddress(addr).split(':')[1];
            },
            toLegacyAddress(addr) {
                return bchaddr.toLegacyAddress(addr);
            },
            toBitpayAddress(addr) {
                return bchaddr.toBitpayAddress(addr);
            },
            validate(addr) {
                try {
                    return (address.isP2PKH(addr) || address.isP2SH(addr)) && (address.isLegacyAddress(addr) || address.isBitpayAddress(addr) || address.isCashAddress(addr));
                } catch (err) {
                    return false;
                }
            },
            displayAddress(addr) {
                return address.toCashAddress(addr);
            }
        };
        const bip44 = exports.bip44 = _bip44Constants2.default[displayUnit];
        const blockExplorer = exports.blockExplorer = {
            addressUrl: addr => {
                return `https://blockdozer.com/address/${addr}`;
            },
            txUrl: txId => `https://blockdozer.com/tx/${txId}`
        };
        const twoOfTwo = exports.twoOfTwo = (0, _twoOfTwoMultisig.alice)({
            network: coinInfo
        });

    }, {
        "12": 12,
        "34": 34,
        "51": 51,
        "94": 94,
        "undefined": undefined
    }],
    9: [function(require, module, exports) {
        'use strict';
        Object.defineProperty(exports, "__esModule", {
            value: true
        });
        exports.blockExplorer = exports.bip44 = exports.address = exports.coinInfo = exports.feePerKB = exports.feeEvents = exports.units = exports.displayUnit = exports.currency = exports.isOmniProperty = exports.isEthereumToken = exports.isAccountBased = exports.hasUTXO = exports.hasMultipleAddresses = exports.defaultEnabled = exports.available = exports.properName = exports.name = undefined;
        exports.setFeePerKB = setFeePerKB;
        var _bcash = require(8);
        var _currencyUnits = require(51);
        var _aureus = require(34);
        var _bip44Constants = require('bip44-constants');
        var _bip44Constants2 = _interopRequireDefault(_bip44Constants);
        var _events = require('events');

        function _interopRequireDefault(obj) {
            return obj && obj.__esModule ? obj : {
                default: obj
            };
        }
        const name = exports.name = 'bcashclaim';
        const properName = exports.properName = 'Bitcoin Cash Claim';
        const available = exports.available = false;
        const defaultEnabled = exports.defaultEnabled = true;
        const hasMultipleAddresses = exports.hasMultipleAddresses = true;
        const hasUTXO = exports.hasUTXO = true;
        const isAccountBased = exports.isAccountBased = false;
        const isEthereumToken = exports.isEthereumToken = false;
        const isOmniProperty = exports.isOmniProperty = false;
        const currency = exports.currency = _aureus.UnitType.create(name, _currencyUnits.cryptoCurrency, {
            satoshis: 0,
            BCH: 8
        }, 'BCH');
        const displayUnit = exports.displayUnit = 'BCH';
        const units = exports.units = [displayUnit];
        const feeEvents = exports.feeEvents = new _events.EventEmitter();

        function setFeePerKB(newFeerPerKB) {
            exports.feePerKB = feePerKB = currency.satoshis(newFeerPerKB);
            feeEvents.emit('new');
        }
        let feePerKB = exports.feePerKB = undefined;
        setFeePerKB(5000);
        const coinInfo = exports.coinInfo = _bcash.coinInfo;
        const address = exports.address = {
            versions: {
                p2pkh: coinInfo.versions.public,
                p2sh: coinInfo.versions.scripthash
            }
        };
        const bip44 = exports.bip44 = _bip44Constants2.default['BTC'];
        const blockExplorer = exports.blockExplorer = {
            addressUrl: address => `https://blockdozer.com/insight/address/${address}`,
            txUrl: txId => `https://blockdozer.com/insight/tx/${txId}`
        };

    }, {
        "34": 34,
        "51": 51,
        "8": 8,
        "undefined": undefined
    }],
    10: [function(require, module, exports) {
        'use strict';
        Object.defineProperty(exports, "__esModule", {
            value: true
        });
        exports.twoOfTwo = exports.blockExplorer = exports.bip44 = exports.address = exports.coinInfo = exports.feePerKB = exports.units = exports.displayUnit = exports.currency = exports.isOmniProperty = exports.isEthereumToken = exports.isAccountBased = exports.hasUTXO = exports.hasMultipleAddresses = exports.defaultEnabled = exports.available = exports.properName = exports.name = undefined;
        var _coininfo = require('coininfo');
        var _coininfo2 = _interopRequireDefault(_coininfo);
        var _currencyUnits = require(51);
        var _aureus = require(34);
        var _bip44Constants = require('bip44-constants');
        var _bip44Constants2 = _interopRequireDefault(_bip44Constants);
        var _twoOfTwoMultisig = require(94);

        function _interopRequireDefault(obj) {
            return obj && obj.__esModule ? obj : {
                default: obj
            };
        }
        const name = exports.name = 'bgold';
        const properName = exports.properName = 'Bitcoin Gold';
        const available = exports.available = true;
        const defaultEnabled = exports.defaultEnabled = true;
        const hasMultipleAddresses = exports.hasMultipleAddresses = true;
        const hasUTXO = exports.hasUTXO = true;
        const isAccountBased = exports.isAccountBased = false;
        const isEthereumToken = exports.isEthereumToken = false;
        const isOmniProperty = exports.isOmniProperty = false;
        const currency = exports.currency = _aureus.UnitType.create(name, _currencyUnits.cryptoCurrency, {
            satoshis: 0,
            BTG: 8
        }, 'BTG');
        const displayUnit = exports.displayUnit = 'BTG';
        const units = exports.units = [displayUnit];
        const feePerKB = exports.feePerKB = currency.satoshis(10000);
        const coinInfo = exports.coinInfo = (0, _coininfo2.default)(properName);
        const address = exports.address = {
            versions: {
                p2pkh: coinInfo.versions.public,
                p2sh: coinInfo.versions.scripthash
            }
        };
        const bip44 = exports.bip44 = _bip44Constants2.default[displayUnit];
        const blockExplorer = exports.blockExplorer = {
            addressUrl: address => `https://explorer.bitcoingold.org/insight/address/${address}`,
            txUrl: txId => `https://explorer.bitcoingold.org/insight/tx/${txId}`
        };
        const twoOfTwo = exports.twoOfTwo = (0, _twoOfTwoMultisig.alice)({
            network: coinInfo
        });

    }, {
        "34": 34,
        "51": 51,
        "94": 94,
        "undefined": undefined
    }],
    11: [function(require, module, exports) {
        'use strict';
        Object.defineProperty(exports, "__esModule", {
            value: true
        });
        exports.twoOfTwo = exports.blockExplorer = exports.bip44 = exports.address = exports.coinInfo = exports.feePerKB = exports.units = exports.displayUnit = exports.currency = exports.isOmniProperty = exports.isEthereumToken = exports.isAccountBased = exports.hasUTXO = exports.hasMultipleAddresses = exports.defaultEnabled = exports.available = exports.properName = exports.name = undefined;
        var _bgold = require(10);
        var _currencyUnits = require(51);
        var _aureus = require(34);
        var _bip44Constants = require('bip44-constants');
        var _bip44Constants2 = _interopRequireDefault(_bip44Constants);
        var _twoOfTwoMultisig = require(94);

        function _interopRequireDefault(obj) {
            return obj && obj.__esModule ? obj : {
                default: obj
            };
        }
        const name = exports.name = 'bgoldclaim';
        const properName = exports.properName = 'Bitcoin Gold Claim';
        const available = exports.available = false;
        const defaultEnabled = exports.defaultEnabled = true;
        const hasMultipleAddresses = exports.hasMultipleAddresses = true;
        const hasUTXO = exports.hasUTXO = true;
        const isAccountBased = exports.isAccountBased = false;
        const isEthereumToken = exports.isEthereumToken = false;
        const isOmniProperty = exports.isOmniProperty = false;
        const currency = exports.currency = _aureus.UnitType.create(name, _currencyUnits.cryptoCurrency, {
            satoshis: 0,
            BTG: 8
        }, 'BTG');
        const displayUnit = exports.displayUnit = 'BTG';
        const units = exports.units = [displayUnit];
        const feePerKB = exports.feePerKB = currency.satoshis(1000);
        const coinInfo = exports.coinInfo = _bgold.coinInfo;
        const address = exports.address = {
            versions: {
                p2pkh: coinInfo.versions.public,
                p2sh: coinInfo.versions.scripthash
            }
        };
        const bip44 = exports.bip44 = _bip44Constants2.default['BTC'];
        const blockExplorer = exports.blockExplorer = {
            addressUrl: address => `https://explorer.bitcoingold.org/insight/address/${address}`,
            txUrl: txId => `https://explorer.bitcoingold.org/insight/tx/${txId}`
        };
        const twoOfTwo = exports.twoOfTwo = (0, _twoOfTwoMultisig.alice)({
            network: coinInfo
        });

    }, {
        "10": 10,
        "34": 34,
        "51": 51,
        "94": 94,
        "undefined": undefined
    }],
    12: [function(require, module, exports) {
        'use strict';
        Object.defineProperty(exports, "__esModule", {
            value: true
        });
        exports.twoOfTwo = exports.blockExplorer = exports.bip44 = exports.address = exports.coinInfo = exports.feePerKB = exports.feeEvents = exports.units = exports.displayUnit = exports.currency = exports.isOmniProperty = exports.isEthereumToken = exports.isAccountBased = exports.hasUTXO = exports.hasMultipleAddresses = exports.defaultEnabled = exports.available = exports.properName = exports.name = undefined;
        exports.setFeePerKB = setFeePerKB;
        var _coininfo = require('coininfo');
        var _coininfo2 = _interopRequireDefault(_coininfo);
        var _bech = require('bech32');
        var _bech2 = _interopRequireDefault(_bech);
        var _currencyUnits = require(51);
        var _aureus = require(34);
        var _bip44Constants = require('bip44-constants');
        var _bip44Constants2 = _interopRequireDefault(_bip44Constants);
        var _events = require('events');
        var _twoOfTwoMultisig = require(94);

        function _interopRequireDefault(obj) {
            return obj && obj.__esModule ? obj : {
                default: obj
            };
        }
        const name = exports.name = 'bitcoin';
        const properName = exports.properName = 'Bitcoin';
        const available = exports.available = true;
        const defaultEnabled = exports.defaultEnabled = true;
        const hasMultipleAddresses = exports.hasMultipleAddresses = true;
        const hasUTXO = exports.hasUTXO = true;
        const isAccountBased = exports.isAccountBased = false;
        const isEthereumToken = exports.isEthereumToken = false;
        const isOmniProperty = exports.isOmniProperty = false;
        const currency = exports.currency = _aureus.UnitType.create(name, _currencyUnits.cryptoCurrency, {
            satoshis: 0,
            bits: 2,
            BTC: 8
        }, 'BTC');
        const displayUnit = exports.displayUnit = 'BTC';
        const units = exports.units = [displayUnit];
        const feeEvents = exports.feeEvents = new _events.EventEmitter();

        function setFeePerKB(newFeerPerKB) {
            console.log(`bitcoin fee: ${newFeerPerKB/1000|0} sat/byte`);
            exports.feePerKB = feePerKB = currency.satoshis(newFeerPerKB);
            feeEvents.emit('new');
        }
        let feePerKB = exports.feePerKB = undefined;
        setFeePerKB(380000);
        const coinInfo = exports.coinInfo = (0, _coininfo2.default)(name);
        const address = exports.address = {
            versions: {
                p2pkh: coinInfo.versions.public,
                p2sh: coinInfo.versions.scripthash
            },
            isP2WPKH(addr) {
                try {
                    const decoded = _bech2.default.decode(addr);
                    if (decoded.prefix !== 'bc') return false;
                    if (decoded.words[0] !== 0) return false;
                    if (_bech2.default.fromWords(decoded.words.slice(1)).length !== 20) return false;
                    return true;
                } catch (e) {
                    return false;
                }
            },
            isP2WSH(addr) {
                try {
                    const decoded = _bech2.default.decode(addr);
                    if (decoded.prefix !== 'bc') return false;
                    if (decoded.words[0] !== 0) return false;
                    if (_bech2.default.fromWords(decoded.words.slice(1)).length !== 32) return false;
                    return true;
                } catch (e) {
                    return false;
                }
            },
            validate(addr) {
                return ['isP2PKH', 'isP2SH', 'isP2WPKH', 'isP2WSH'].some(method => this[method](addr));
            }
        };
        const bip44 = exports.bip44 = _bip44Constants2.default[displayUnit];
        const blockExplorer = exports.blockExplorer = {
            addressUrl: address => `https://live.blockcypher.com/btc/address/${address}/`,
            txUrl: txId => `https://live.blockcypher.com/btc/tx/${txId}/`
        };
        const twoOfTwo = exports.twoOfTwo = (0, _twoOfTwoMultisig.alice)({
            network: coinInfo
        });

    }, {
        "34": 34,
        "51": 51,
        "94": 94,
        "undefined": undefined
    }],
    13: [function(require, module, exports) {
        'use strict';
        Object.defineProperty(exports, "__esModule", {
            value: true
        });
        exports.blockExplorer = exports.bip44 = exports.feePerKB = exports.isOmniProperty = exports.isEthereumToken = exports.isAccountBased = exports.hasUTXO = exports.hasMultipleAddresses = undefined;
        exports._createSimpleSend = _createSimpleSend;
        var _bitcoreLib = require('bitcore-lib');
        var bitcore = _interopRequireWildcard(_bitcoreLib);
        var _ethereumjsUtil = require('ethereumjs-util');
        var _ethereumjsUtil2 = _interopRequireDefault(_ethereumjsUtil);
        var _util = require(52);
        var _ = require(12);
        var bitcoin = _interopRequireWildcard(_);

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
        const hasMultipleAddresses = exports.hasMultipleAddresses = false;
        const hasUTXO = exports.hasUTXO = false;
        const isAccountBased = exports.isAccountBased = true;
        const isEthereumToken = exports.isEthereumToken = false;
        const isOmniProperty = exports.isOmniProperty = true;

        function updateFee() {
            exports.feePerKB = feePerKB = bitcoin.feePerKB;
        }
        let feePerKB = exports.feePerKB = undefined;
        bitcoin.feeEvents.on('new', updateFee);
        updateFee();
        const bip44 = exports.bip44 = bitcoin.bip44;
        const blockExplorer = exports.blockExplorer = {
            addressUrl: address => `https://omniexplorer.info/lookupadd.aspx?address=${address}`,
            txUrl: txId => `https://omniexplorer.info/lookuptx.aspx?txid=${txId}`
        };

        function _createSimpleSend(omniPropertyId, currency) {
            const prefix = Buffer.concat([_ethereumjsUtil2.default.toBuffer('0x6f6d6e69'), _ethereumjsUtil2.default.toBuffer('0x0000'), _ethereumjsUtil2.default.toBuffer('0x0000'), _ethereumjsUtil2.default.zeros(4 - _ethereumjsUtil2.default.toBuffer(omniPropertyId).length), _ethereumjsUtil2.default.toBuffer(omniPropertyId)]);
            return {
                parseTx(rawTx) {
                    const tx = new bitcore.Transaction(rawTx);
                    for (const output of tx.outputs) {
                        const chunks = output.script.chunks;
                        if (chunks.length === 2 && chunks[0].opcodenum === bitcore.Opcode.OP_RETURN && chunks[1].buf && chunks[1].buf.length === 20 && chunks[1].buf.slice(0, 12).equals(prefix)) {
                            return currency.baseUnit(_ethereumjsUtil2.default.bufferToHex(chunks[1].buf.slice(12)));
                        }
                    }
                    return null;
                },
                buildOutputScript(amount) {
                    const bufAmount = (0, _util.currency2buffer)(amount);
                    return Buffer.concat([_ethereumjsUtil2.default.toBuffer('0x6a14'), prefix, _ethereumjsUtil2.default.zeros(8 - bufAmount.length), bufAmount]);
                }
            };
        }

    }, {
        "12": 12,
        "52": 52,
        "undefined": undefined
    }],
    14: [function(require, module, exports) {
        'use strict';
        Object.defineProperty(exports, "__esModule", {
            value: true
        });
        exports.blockExplorer = exports.bip44 = exports.address = exports.coinInfo = exports.feePerKB = exports.units = exports.displayUnit = exports.currency = exports.isOmniProperty = exports.isEthereumToken = exports.isAccountBased = exports.hasUTXO = exports.hasMultipleAddresses = exports.defaultEnabled = exports.available = exports.properName = exports.name = undefined;
        var _coininfo = require('coininfo');
        var _coininfo2 = _interopRequireDefault(_coininfo);
        var _aureus = require(34);
        var _currencyUnits = require(51);
        var _bip44Constants = require('bip44-constants');
        var _bip44Constants2 = _interopRequireDefault(_bip44Constants);

        function _interopRequireDefault(obj) {
            return obj && obj.__esModule ? obj : {
                default: obj
            };
        }
        const name = exports.name = 'dash';
        const properName = exports.properName = 'Dash';
        const available = exports.available = true;
        const defaultEnabled = exports.defaultEnabled = true;
        const hasMultipleAddresses = exports.hasMultipleAddresses = true;
        const hasUTXO = exports.hasUTXO = true;
        const isAccountBased = exports.isAccountBased = false;
        const isEthereumToken = exports.isEthereumToken = false;
        const isOmniProperty = exports.isOmniProperty = false;
        const currency = exports.currency = _aureus.UnitType.create(name, _currencyUnits.cryptoCurrency, {
            duffs: 0,
            DASH: 8
        }, 'DASH');
        const displayUnit = exports.displayUnit = 'DASH';
        const units = exports.units = [displayUnit];
        const feePerKB = exports.feePerKB = currency.duffs(10000);
        const coinInfo = exports.coinInfo = (0, _coininfo2.default)(name);
        const address = exports.address = {
            versions: {
                p2pkh: coinInfo.versions.public,
                p2sh: coinInfo.versions.scripthash
            }
        };
        const bip44 = exports.bip44 = _bip44Constants2.default['DSH'];
        const blockExplorer = exports.blockExplorer = {
            addressUrl: address => `https://insight.dashevo.org/insight/address/${address}`,
            txUrl: txId => `https://insight.dashevo.org/insight/tx/${txId}`
        };

    }, {
        "34": 34,
        "51": 51,
        "undefined": undefined
    }],
    15: [function(require, module, exports) {
        'use strict';
        Object.defineProperty(exports, "__esModule", {
            value: true
        });
        exports.blockExplorer = exports.keys = exports.bip44 = exports.address = exports.coinInfo = exports.feePerKB = exports.units = exports.displayUnit = exports.currency = exports.isOmniProperty = exports.isEthereumToken = exports.isAccountBased = exports.hasUTXO = exports.hasMultipleAddresses = exports.defaultEnabled = exports.available = exports.properName = exports.name = undefined;
        var _coininfo = require('coininfo');
        var _coininfo2 = _interopRequireDefault(_coininfo);
        var _aureus = require(34);
        var _crypto = require('crypto');
        var _crypto2 = _interopRequireDefault(_crypto);
        var _currencyUnits = require(51);
        var _blakeHash = require('blake-hash');
        var _blakeHash2 = _interopRequireDefault(_blakeHash);
        var _bs58checkBlake = require(43);
        var _bs58checkBlake2 = _interopRequireDefault(_bs58checkBlake);
        var _bip44Constants = require('bip44-constants');
        var _bip44Constants2 = _interopRequireDefault(_bip44Constants);
        var _dcrcoreLib = require('dcrcore-lib');
        var _dcrcoreLib2 = _interopRequireDefault(_dcrcoreLib);

        function _interopRequireDefault(obj) {
            return obj && obj.__esModule ? obj : {
                default: obj
            };
        }
        const name = exports.name = 'decred';
        const properName = exports.properName = 'Decred';
        const available = exports.available = true;
        const defaultEnabled = exports.defaultEnabled = true;
        const hasMultipleAddresses = exports.hasMultipleAddresses = true;
        const hasUTXO = exports.hasUTXO = true;
        const isAccountBased = exports.isAccountBased = false;
        const isEthereumToken = exports.isEthereumToken = false;
        const isOmniProperty = exports.isOmniProperty = false;
        const currency = exports.currency = _aureus.UnitType.create(name, _currencyUnits.cryptoCurrency, {
            atom: 0,
            DCR: 8
        }, 'DCR');
        const displayUnit = exports.displayUnit = 'DCR';
        const units = exports.units = [displayUnit];
        const feePerKB = exports.feePerKB = currency.DCR(0.001);
        const coinInfo = exports.coinInfo = (0, _coininfo2.default)(name);
        const address = exports.address = {
            versions: {
                p2pkh: coinInfo.versions.public,
                p2sh: coinInfo.versions.scripthash
            },
            isP2PKH(string) {
                const payload = _bs58checkBlake2.default.decodeUnsafe(string);
                return payload && payload.length === 22 && payload.readUInt16BE(0) === address.versions.p2pkh;
            },
            isP2SH(string) {
                const payload = _bs58checkBlake2.default.decodeUnsafe(string);
                return payload && payload.length === 22 && payload.readUInt16BE(0) === address.versions.p2sh;
            },
            validate(string) {
                const payload = _bs58checkBlake2.default.decodeUnsafe(string);
                return payload && payload.length === 22 && [address.versions.p2pkh, address.versions.p2sh].includes(payload.readUInt16BE(0));
            }
        };
        const bip44 = exports.bip44 = _bip44Constants2.default[displayUnit];
        const keys = exports.keys = {
            encodePublicFromWIF(privateKeyWIF) {
                return _dcrcoreLib2.default.PrivateKey(privateKeyWIF).toAddress().toString();
            },
            encodePrivate(privateKey) {
                const version = Buffer.alloc(2);
                version.writeUInt16BE(coinInfo.versions.private);
                const buffer = Buffer.concat([version, Buffer.from([0x00]), privateKey, Buffer.from([0x01])]);
                return _bs58checkBlake2.default.encode(buffer);
            },
            encodePublic(publicKey) {
                const payload = Buffer.alloc(2 + 20);
                payload.writeUInt16BE(coinInfo.versions.public);
                const hash32 = (0, _blakeHash2.default)('blake256').update(publicKey).digest();
                const hash20 = _crypto2.default.createHash('ripemd160').update(hash32).digest();
                hash20.copy(payload, 2);
                return _bs58checkBlake2.default.encode(payload);
            }
        };
        const blockExplorer = exports.blockExplorer = {
            addressUrl: address => `https://mainnet.decred.org/address/${address}`,
            txUrl: txId => `https://mainnet.decred.org/tx/${txId}`
        };

    }, {
        "34": 34,
        "43": 43,
        "51": 51,
        "undefined": undefined
    }],
    16: [function(require, module, exports) {
        'use strict';
        Object.defineProperty(exports, "__esModule", {
            value: true
        });
        exports.twoOfTwo = exports.blockExplorer = exports.bip44 = exports.address = exports.coinInfo = exports.feePerKB = exports.units = exports.displayUnit = exports.currency = exports.isOmniProperty = exports.isEthereumToken = exports.isAccountBased = exports.hasUTXO = exports.hasMultipleAddresses = exports.defaultEnabled = exports.available = exports.properName = exports.name = undefined;
        var _coininfo = require('coininfo');
        var _coininfo2 = _interopRequireDefault(_coininfo);
        var _aureus = require(34);
        var _currencyUnits = require(51);
        var _bip44Constants = require('bip44-constants');
        var _bip44Constants2 = _interopRequireDefault(_bip44Constants);
        var _twoOfTwoMultisig = require(94);

        function _interopRequireDefault(obj) {
            return obj && obj.__esModule ? obj : {
                default: obj
            };
        }
        const name = exports.name = 'digibyte';
        const properName = exports.properName = 'DigiByte';
        const available = exports.available = true;
        const defaultEnabled = exports.defaultEnabled = false;
        const hasMultipleAddresses = exports.hasMultipleAddresses = true;
        const hasUTXO = exports.hasUTXO = true;
        const isAccountBased = exports.isAccountBased = false;
        const isEthereumToken = exports.isEthereumToken = false;
        const isOmniProperty = exports.isOmniProperty = false;
        const currency = exports.currency = _aureus.UnitType.create(name, _currencyUnits.cryptoCurrency, {
            satoshis: 0,
            DGB: 8
        }, 'DGB');
        const displayUnit = exports.displayUnit = 'DGB';
        const units = exports.units = [displayUnit];
        const feePerKB = exports.feePerKB = currency.satoshis(225000);
        const coinInfo = exports.coinInfo = (0, _coininfo2.default)(name);
        const address = exports.address = {
            versions: {
                p2pkh: coinInfo.versions.public,
                p2sh: coinInfo.versions.scripthash
            }
        };
        const bip44 = exports.bip44 = _bip44Constants2.default[displayUnit];
        const blockExplorer = exports.blockExplorer = {
            addressUrl: address => `https://digiexplorer.info/address/${address}`,
            txUrl: txId => `https://digiexplorer.info/tx/${txId}`
        };
        const twoOfTwo = exports.twoOfTwo = (0, _twoOfTwoMultisig.alice)({
            network: coinInfo
        });

    }, {
        "34": 34,
        "51": 51,
        "94": 94,
        "undefined": undefined
    }],
    17: [function(require, module, exports) {
        'use strict';
        Object.defineProperty(exports, "__esModule", {
            value: true
        });
        exports.getRegisteredAddress = exports.eosCrowdSale = undefined;
        let getRegisteredAddress = exports.getRegisteredAddress = (() => {
            var _ref = _asyncToGenerator(function*(fromEthAddress) {
                const functionSig = utils.getFunctionSignature('keys(address)');
                const payload = utils.formatInputInt(fromEthAddress);
                const data = {
                    from: fromEthAddress,
                    to: eosCrowdSale,
                    data: `0x${functionSig}${payload}`
                };
                const rawResult = yield(0, _exodusEthereumServer.withFallback)(_exodusEthereumServer.eth.ethCall, etherscan.ethCall)(data);
                const start = utils.getOutputLength(rawResult.slice(2));
                return utils.formatOutputString(rawResult.slice(2 + start));
            });
            return function getRegisteredAddress(_x) {
                return _ref.apply(this, arguments);
            };
        })();
        exports.getRegistrationPayload = getRegistrationPayload;
        var _etherscan = require(61);
        var etherscan = _interopRequireWildcard(_etherscan);
        var _exodusEthereumServer = require(66);
        var _utils = require(18);
        var utils = _interopRequireWildcard(_utils);

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

        function _asyncToGenerator(fn) {
            return function() {
                var gen = fn.apply(this, arguments);
                return new Promise(function(resolve, reject) {
                    function step(key, arg) {
                        try {
                            var info = gen[key](arg);
                            var value = info.value;
                        } catch (error) {
                            reject(error);
                            return;
                        }
                        if (info.done) {
                            resolve(value);
                        } else {
                            return Promise.resolve(value).then(function(value) {
                                step("next", value);
                            }, function(err) {
                                step("throw", err);
                            });
                        }
                    }
                    return step("next");
                });
            };
        }
        const eosCrowdSale = exports.eosCrowdSale = '0xd0a6E6C54DbC68Db5db3A091B171A77407Ff7ccf';

        function getRegistrationPayload(fromEthAddress, eosAddress) {
            const functionSig = utils.getFunctionSignature('register(string)');
            const addressPayload = utils.formatInputString(eosAddress);
            const firstParamPayload = utils.formatInputInt('20');
            return `0x${functionSig}${firstParamPayload}${addressPayload}`;
        }

    }, {
        "18": 18,
        "61": 61,
        "66": 66
    }],
    18: [function(require, module, exports) {
        'use strict';
        Object.defineProperty(exports, "__esModule", {
            value: true
        });
        exports.isBigNumber = isBigNumber;
        exports.isString = isString;
        exports.fromUtf8 = fromUtf8;
        exports.toUtf8 = toUtf8;
        exports.formatInputInt = formatInputInt;
        exports.formatInputString = formatInputString;
        exports.getOutputLength = getOutputLength;
        exports.formatOutputString = formatOutputString;
        exports.getFunctionSignature = getFunctionSignature;
        var _bignumber = require('bignumber.js');
        var _bignumber2 = _interopRequireDefault(_bignumber);
        var _bn = require('bn.js');
        var _bn2 = _interopRequireDefault(_bn);
        var _ethereumjsUtil = require('ethereumjs-util');
        var _lodash = require('lodash');
        var lodash = _interopRequireWildcard(_lodash);

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

        function _interopRequireDefault(obj) {
            return obj && obj.__esModule ? obj : {
                default: obj
            };
        }

        function isBigNumber(object) {
            return object instanceof _bignumber2.default || object && object.constructor && object.constructor.name === 'BigNumber';
        }

        function isString(object) {
            return typeof object === 'string' || object && object.constructor && object.constructor.name === 'String';
        }

        function fromUtf8(value) {
            return '0x' + Buffer.from(value, 'utf8').toString('hex');
        }

        function toUtf8(hex) {
            if (hex.startsWith('0x')) {
                hex = hex.substr(2);
            }
            return Buffer.from(hex, 'hex').toString('utf8');
        }

        function formatInputInt(value) {
            const bigNumber = new _bn2.default(value, 16);
            return lodash.padStart(bigNumber.toTwos(256).toString(16), 64, 0);
        }

        function formatInputString(value) {
            const result = fromUtf8(value).substr(2);
            const length = result.length / 2;
            const l = Math.floor((result.length + 63) / 64);
            const newResult = lodash.padEnd(result, l * 64, 0);
            return formatInputInt(length.toString(16)) + newResult;
        }

        function getOutputLength(param) {
            return new _bignumber2.default(param.slice(0, 64), 16).toNumber() * 2;
        }

        function formatOutputString(param) {
            const length = new _bignumber2.default(param.slice(0, 64), 16).toNumber() * 2;
            return toUtf8(param.substr(64, length));
        }

        function getFunctionSignature(name) {
            return (0, _ethereumjsUtil.sha3)(name).toString('hex').slice(0, 8);
        }

    }, {
        "undefined": undefined
    }],
    19: [function(require, module, exports) {
        'use strict';
        Object.defineProperty(exports, "__esModule", {
            value: true
        });
        exports.keys = exports.address = exports.eosRegistration = exports.version = exports.addressPrefix = exports.bip44 = exports.feePerKB = exports.units = exports.displayUnit = exports.currency = exports.available = exports.properName = exports.name = undefined;
        var _aureus = require(34);
        var _bip44Constants = require('bip44-constants');
        var _bip44Constants2 = _interopRequireDefault(_bip44Constants);
        var _bs = require('bs58');
        var _bs2 = _interopRequireDefault(_bs);
        var _bigi = require('bigi');
        var _bigi2 = _interopRequireDefault(_bigi);
        var _bs58check = require('bs58check');
        var _bs58check2 = _interopRequireDefault(_bs58check);
        var _createHash = require('create-hash');
        var _createHash2 = _interopRequireDefault(_createHash);
        var _currencyUnits = require(51);
        var _ecurve = require('ecurve');
        var _ecurve2 = _interopRequireDefault(_ecurve);
        var _registration2 = require(17);
        var _registration = _interopRequireWildcard(_registration2);

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

        function _interopRequireDefault(obj) {
            return obj && obj.__esModule ? obj : {
                default: obj
            };
        }
        var secp256k1G = _ecurve2.default.getCurveByName('secp256k1').G;
        const name = exports.name = 'eosio';
        const properName = exports.properName = 'EOS';
        const available = exports.available = false;
        const currency = exports.currency = _aureus.UnitType.create(name, _currencyUnits.cryptoCurrency, {
            larimer: 0,
            EOS: 8
        }, 'EOS');
        const displayUnit = exports.displayUnit = 'EOS';
        const units = exports.units = [displayUnit];
        const feePerKB = exports.feePerKB = currency.larimer(1000);
        const bip44 = exports.bip44 = _bip44Constants2.default[displayUnit];
        const addressPrefix = exports.addressPrefix = displayUnit;
        const version = exports.version = 0x80;
        const eosRegistration = exports.eosRegistration = _registration.eosCrowdSale;
        const hash = {
            ripemd160(data) {
                return (0, _createHash2.default)('rmd160').update(data).digest();
            },
            sha256(data, encoding) {
                return (0, _createHash2.default)('sha256').update(data).digest(encoding);
            }
        };

        function decodeString(input) {
            return _bs58check2.default.decode(input).slice(1, 33);
        }

        function encodeBuffer(privateKey) {
            const result = Buffer.alloc(33);
            result.writeUInt8(version, 0);
            privateKey.copy(result, 1);
            return _bs58check2.default.encode(result);
        }
        const address = exports.address = {
            validate(addressString) {
                if (addressString.slice(0, 3) !== addressPrefix) {
                    return false;
                }
                const payload = _bs2.default.decodeUnsafe(addressString.slice(3));
                return payload && payload.length === 37;
            },
            isP2PKH: null,
            isP2SH: null
        };
        const keys = exports.keys = {
            decodePrivateFromWIF(privateKeyWIF) {
                return decodeString(privateKeyWIF);
            },
            encodePublicFromWIF(privateKeyWIF) {
                const privateKey = keys.decodePrivateFromWIF(privateKeyWIF);
                const publicKey = secp256k1G.multiply(_bigi2.default.fromBuffer(privateKey)).getEncoded(true);
                return keys.encodePublic(publicKey);
            },
            encodePrivate(privateKey) {
                return encodeBuffer(privateKey);
            },
            encodePublic(publicKey) {
                const pubChecksum = hash.ripemd160(publicKey);
                const address = Buffer.concat([publicKey, pubChecksum.slice(0, 4)]);
                const encodedKey = _bs2.default.encode(address);
                return addressPrefix + encodedKey;
            }
        };
        exports.registration = _registration;

    }, {
        "17": 17,
        "34": 34,
        "51": 51,
        "undefined": undefined
    }],
    20: [function(require, module, exports) {
        'use strict';
        Object.defineProperty(exports, "__esModule", {
            value: true
        });
        exports.twoOfTwo = exports.blockExplorer = exports.keys = exports.bip44 = exports.address = exports.gasPriceEvents = exports.fee = exports.gasPrice = exports.gasContract = exports.gasTx = exports.units = exports.displayUnit = exports.currency = exports.isOmniProperty = exports.isEthereumToken = exports.isAccountBased = exports.hasUTXO = exports.hasMultipleAddresses = exports.defaultEnabled = exports.available = exports.properName = exports.name = undefined;
        exports.getFee = getFee;
        exports.setGasPrice = setGasPrice;
        var _currencyUnits = require(51);
        var _aureus = require(34);
        var _etherscan = require(61);
        var etherscan = _interopRequireWildcard(_etherscan);
        var _exodusEthereumServer = require(66);
        var _bip44Constants = require('bip44-constants');
        var _bip44Constants2 = _interopRequireDefault(_bip44Constants);
        var _ethereumjsUtil = require('ethereumjs-util');
        var _ethereumjsUtil2 = _interopRequireDefault(_ethereumjsUtil);
        var _events = require('events');
        var _memoizeLruCache = require(70);
        var _memoizeLruCache2 = _interopRequireDefault(_memoizeLruCache);
        var _twoOfTwoEcdsaThreshold = require(90);

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

        function _asyncToGenerator(fn) {
            return function() {
                var gen = fn.apply(this, arguments);
                return new Promise(function(resolve, reject) {
                    function step(key, arg) {
                        try {
                            var info = gen[key](arg);
                            var value = info.value;
                        } catch (error) {
                            reject(error);
                            return;
                        }
                        if (info.done) {
                            resolve(value);
                        } else {
                            return Promise.resolve(value).then(function(value) {
                                step("next", value);
                            }, function(err) {
                                step("throw", err);
                            });
                        }
                    }
                    return step("next");
                });
            };
        }
        const name = exports.name = 'ethereum';
        const properName = exports.properName = 'Ethereum';
        const available = exports.available = true;
        const defaultEnabled = exports.defaultEnabled = true;
        const hasMultipleAddresses = exports.hasMultipleAddresses = false;
        const hasUTXO = exports.hasUTXO = false;
        const isAccountBased = exports.isAccountBased = true;
        const isEthereumToken = exports.isEthereumToken = false;
        const isOmniProperty = exports.isOmniProperty = false;
        const currency = exports.currency = _aureus.UnitType.create(name, _currencyUnits.cryptoCurrency, {
            wei: 0,
            Kwei: 3,
            Mwei: 6,
            Gwei: 9,
            szabo: 12,
            finney: 15,
            ETH: 18
        }, 'ETH');
        const displayUnit = exports.displayUnit = 'ETH';
        const units = exports.units = [displayUnit];
        const gasTx = exports.gasTx = 21e3;
        const gasContract = exports.gasContract = 1e6;
        let gasPrice = exports.gasPrice = undefined;
        let fee = exports.fee = undefined;

        function getFee(gasLimit, customGasPrice) {
            return currency.wei((customGasPrice || gasPrice).toBase().toNumber() * gasLimit);
        }
        const gasPriceEvents = exports.gasPriceEvents = new _events.EventEmitter();
        gasPriceEvents.setMaxListeners(0);

        function setGasPrice(newGasPrice) {
            if (gasPrice && gasPrice.toNumber() === newGasPrice) return;
            console.log(`ethereum gas: ${newGasPrice}`);
            exports.gasPrice = gasPrice = currency.wei(newGasPrice);
            exports.fee = fee = getFee(gasTx);
            gasPriceEvents.emit('new');
        }
        setGasPrice(200e9);
        const address = exports.address = {
            validate(address) {
                if (typeof address !== 'string') return false;
                if (address.slice(0, 2) !== '0x' || address.length !== 42) return false;
                if (/^0x[0-9A-F]{40}$/.test(address) || /^0x[0-9a-f]{40}$/.test(address)) return true;
                return _ethereumjsUtil2.default.isValidChecksumAddress(address);
            },
            isContract: (0, _memoizeLruCache2.default)((() => {
                var _ref = _asyncToGenerator(function*(address) {
                    const code = yield(0, _exodusEthereumServer.withFallback)(_exodusEthereumServer.eth.getCode, etherscan.getCode)(address);
                    return code.length > 2;
                });
                return function(_x) {
                    return _ref.apply(this, arguments);
                };
            })(), key => key, {
                max: 100
            }),
            isP2PKH: null,
            isP2SH: null
        };
        const bip44 = exports.bip44 = _bip44Constants2.default[displayUnit];
        const keys = exports.keys = {
            encodePrivate(privKey) {
                return '0x' + privKey.toString('hex');
            },
            encodePublic(compressedPubKey) {
                const hash160bits = _ethereumjsUtil2.default.publicToAddress(compressedPubKey, true);
                return _ethereumjsUtil2.default.toChecksumAddress(hash160bits.toString('hex'));
            },
            encodePublicFromWIF: null
        };
        const blockExplorer = exports.blockExplorer = {
            addressUrl: address => `https://etherscan.io/address/${address}`,
            txUrl: txId => `https://etherscan.io/tx/${txId}`
        };
        const twoOfTwo = exports.twoOfTwo = (0, _twoOfTwoEcdsaThreshold.alice)({
            publicKeyEncode: keys.encodePublic
        });

    }, {
        "34": 34,
        "51": 51,
        "61": 61,
        "66": 66,
        "70": 70,
        "90": 90,
        "undefined": undefined
    }],
    21: [function(require, module, exports) {
        module.exports = [{
                "name": "adtoken",
                "properName": "AdToken",
                "decimals": 9,
                "displayUnit": "ADT",
                "blockExplorer": "0xD0D6D6C5Fe4a677D343cC433536BB717bAe167dD",
                "addresses": {
                    "current": "0xD0D6D6C5Fe4a677D343cC433536BB717bAe167dD"
                }
            },
            {
                "name": "aeron",
                "properName": "Aeron",
                "decimals": 8,
                "displayUnit": "ARN",
                "blockExplorer": "0xBA5F11b16B155792Cf3B2E6880E8706859A8AEB6",
                "addresses": {
                    "current": "0xBA5F11b16B155792Cf3B2E6880E8706859A8AEB6"
                }
            },
            {
                "name": "aeternity",
                "properName": "Aeternity",
                "decimals": 18,
                "displayUnit": "AE",
                "blockExplorer": "0x5ca9a71b1d01849c0a95490cc00559717fcf0d1d",
                "addresses": {
                    "current": "0x5CA9a71B1d01849C0a95490Cc00559717fCF0D1d"
                }
            },
            {
                "name": "aion",
                "properName": "Aion",
                "decimals": 8,
                "displayUnit": "AION",
                "blockExplorer": "0x4CEdA7906a5Ed2179785Cd3A40A69ee8bc99C466",
                "addresses": {
                    "current": "0x4CEdA7906a5Ed2179785Cd3A40A69ee8bc99C466"
                }
            },
            {
                "name": "airswap",
                "properName": "AirSwap",
                "decimals": 4,
                "displayUnit": "AST",
                "blockExplorer": "AirSwap",
                "addresses": {
                    "current": "0x27054b13b1B798B345b591a4d22e6562d47eA75a"
                }
            },
            {
                "name": "amber",
                "properName": "Amber",
                "decimals": 18,
                "displayUnit": "AMB",
                "blockExplorer": "0x4DC3643DbC642b72C158E7F3d2ff232df61cb6CE",
                "addresses": {
                    "current": "0x4DC3643DbC642b72C158E7F3d2ff232df61cb6CE"
                }
            },
            {
                "name": "appcoins",
                "properName": "AppCoins",
                "decimals": 18,
                "displayUnit": "APPC",
                "blockExplorer": "0x1a7a8BD9106F2B8D977E08582DC7d24c723ab0DB",
                "addresses": {
                    "current": "0x1a7a8BD9106F2B8D977E08582DC7d24c723ab0DB"
                }
            },
            {
                "name": "aragon",
                "properName": "Aragon",
                "decimals": 18,
                "displayUnit": "ANT",
                "blockExplorer": "Aragon",
                "addresses": {
                    "current": "0x960b236A07cf122663c4303350609A66A7B288C0"
                }
            },
            {
                "name": "augur",
                "properName": "Augur",
                "decimals": 18,
                "displayUnit": "REP",
                "blockExplorer": "REP",
                "addresses": {
                    "current": "0xE94327D07Fc17907b4DB788E5aDf2ed424adDff6",
                    "previous": [
                        "0x48c80F1f4D53D5951e5D5438B54Cba84f29F32a5"
                    ]
                }
            },
            {
                "name": "bancor",
                "properName": "Bancor",
                "decimals": 18,
                "displayUnit": "BNT",
                "blockExplorer": "Bancor",
                "addresses": {
                    "current": "0x1F573D6Fb3F13d689FF844B4cE37794d79a7FF1C"
                }
            },
            {
                "name": "bat",
                "properName": "BAT",
                "decimals": 18,
                "displayUnit": "BAT",
                "blockExplorer": "BAT",
                "addresses": {
                    "current": "0x0D8775F648430679A709E98d2b0Cb6250d2887EF"
                }
            },
            {
                "name": "binance",
                "properName": "Binance",
                "decimals": 18,
                "displayUnit": "BNB",
                "blockExplorer": "BNB",
                "addresses": {
                    "current": "0xB8c77482e45F1F44dE1745F52C74426C631bDD52"
                }
            },
            {
                "name": "bread",
                "properName": "Bread",
                "decimals": 18,
                "displayUnit": "BRD",
                "blockExplorer": "0x558EC3152e2eb2174905cd19AeA4e34A23DE9aD6",
                "addresses": {
                    "current": "0x558EC3152e2eb2174905cd19AeA4e34A23DE9aD6"
                }
            },
            {
                "name": "chainlink",
                "properName": "ChainLink",
                "decimals": 18,
                "displayUnit": "LINK",
                "blockExplorer": "0x514910771af9ca656af840dff83e8264ecf986ca",
                "addresses": {
                    "current": "0x514910771AF9Ca656af840dff83E8264EcF986CA"
                }
            },
            {
                "name": "cindicator",
                "properName": "Cindicator",
                "decimals": 18,
                "displayUnit": "CND",
                "blockExplorer": "0xd4c435F5B09F855C3317c8524Cb1F586E42795fa",
                "addresses": {
                    "current": "0xd4c435F5B09F855C3317c8524Cb1F586E42795fa"
                }
            },
            {
                "name": "civic",
                "properName": "Civic",
                "decimals": 8,
                "displayUnit": "CVC",
                "blockExplorer": "Civic",
                "addresses": {
                    "current": "0x41e5560054824eA6B0732E656E3Ad64E20e94E45"
                }
            },
            {
                "name": "dai",
                "properName": "Dai",
                "decimals": 18,
                "displayUnit": "DAI",
                "blockExplorer": "0x89d24a6b4ccb1b6faa2625fe562bdd9a23260359",
                "addresses": {
                    "current": "0x89d24A6b4CcB1B6fAA2625fE562bDD9a23260359"
                }
            },
            {
                "name": "decentraland",
                "properName": "Decentraland",
                "decimals": 18,
                "displayUnit": "MANA",
                "blockExplorer": "0x0F5D2fB29fb7d3CFeE444a200298f468908cC942",
                "addresses": {
                    "current": "0x0F5D2fB29fb7d3CFeE444a200298f468908cC942"
                }
            },
            {
                "name": "dent",
                "properName": "Dent",
                "decimals": 8,
                "displayUnit": "DENT",
                "blockExplorer": "0x3597bfd533a99c9aa083587b074434e61eb0a258",
                "addresses": {
                    "current": "0x3597bfD533a99c9aa083587B074434E61Eb0A258"
                }
            },
            {
                "name": "dentacoin",
                "properName": "Dentacoin",
                "decimals": 0,
                "displayUnit": "DCN",
                "blockExplorer": "0x08d32b0da63e2C3bcF8019c9c5d849d7a9d791e6",
                "addresses": {
                    "current": "0x08d32b0da63e2C3bcF8019c9c5d849d7a9d791e6"
                }
            },
            {
                "name": "digix",
                "properName": "DigixDAO",
                "decimals": 9,
                "displayUnit": "DGD",
                "blockExplorer": "DGD",
                "addresses": {
                    "current": "0xE0B7927c4aF23765Cb51314A0E0521A9645F0E2A"
                }
            },
            {
                "name": "district0x",
                "properName": "District0x",
                "decimals": 18,
                "displayUnit": "DNT",
                "blockExplorer": "district0x",
                "addresses": {
                    "current": "0x0AbdAce70D3790235af448C88547603b945604ea"
                }
            },
            {
                "name": "dragon",
                "properName": "Dragon",
                "decimals": 18,
                "displayUnit": "DRGN",
                "blockExplorer": "0x419c4db4b9e25d6db2ad9691ccb832c8d9fda05e",
                "addresses": {
                    "current": "0x419c4dB4B9e25d6Db2AD9691ccb832C8D9fDA05E"
                }
            },
            {
                "name": "edgeless",
                "properName": "Edgeless",
                "decimals": 0,
                "displayUnit": "EDG",
                "blockExplorer": "Edgeless",
                "addresses": {
                    "current": "0x08711D3B02C8758F2FB3ab4e80228418a7F8e39c"
                }
            },
            {
                "name": "eos",
                "properName": "EOS",
                "decimals": 18,
                "displayUnit": "EOS",
                "blockExplorer": "EOS",
                "addresses": {
                    "current": "0x86Fa049857E0209aa7D9e616F7eb3b3B78ECfdb0"
                }
            },
            {
                "name": "ethos",
                "properName": "Ethos",
                "decimals": 8,
                "displayUnit": "ETHOS",
                "blockExplorer": "Ethos",
                "addresses": {
                    "current": "0x5Af2Be193a6ABCa9c8817001F45744777Db30756"
                }
            },
            {
                "name": "firstblood",
                "properName": "FirstBlood",
                "decimals": 18,
                "displayUnit": "1ST",
                "blockExplorer": "FirstBlood",
                "addresses": {
                    "current": "0xAf30D2a7E90d7DC361c8C4585e9BB7D2F6f15bc7"
                }
            },
            {
                "name": "funfair",
                "properName": "FunFair",
                "decimals": 8,
                "displayUnit": "FUN",
                "blockExplorer": "FunFair",
                "addresses": {
                    "current": "0x419D0d8BdD9aF5e606Ae2232ed285Aff190E711b"
                }
            },
            {
                "name": "genesisvision",
                "properName": "GenesisVision",
                "decimals": 18,
                "displayUnit": "GVT",
                "blockExplorer": "genesis-vision",
                "addresses": {
                    "current": "0x103c3A209da59d3E7C4A89307e66521e081CFDF0"
                }
            },
            {
                "name": "gnosis",
                "properName": "Gnosis",
                "decimals": 18,
                "displayUnit": "GNO",
                "blockExplorer": "Gnosis",
                "addresses": {
                    "current": "0x6810e776880C02933D47DB1b9fc05908e5386b96"
                }
            },
            {
                "name": "golem",
                "properName": "Golem",
                "decimals": 18,
                "displayUnit": "GNT",
                "blockExplorer": "Golem",
                "addresses": {
                    "current": "0xa74476443119A942dE498590Fe1f2454d7D4aC0d"
                }
            },
            {
                "name": "icon",
                "properName": "ICON",
                "decimals": 18,
                "displayUnit": "ICX",
                "blockExplorer": "0xb5a5f22694352c15b00323844ad545abb2b11028",
                "addresses": {
                    "current": "0xb5A5F22694352C15B00323844aD545ABb2B11028"
                }
            },
            {
                "name": "iconomi",
                "properName": "Iconomi",
                "decimals": 18,
                "displayUnit": "ICN",
                "blockExplorer": "ICONOMI",
                "addresses": {
                    "current": "0x888666CA69E0f178DED6D75b5726Cee99A87D698"
                }
            },
            {
                "name": "iexec",
                "properName": "iExec RLC",
                "decimals": 9,
                "displayUnit": "RLC",
                "blockExplorer": "RLC",
                "addresses": {
                    "current": "0x607F4C5BB672230e8672085532f7e901544a7375"
                }
            },
            {
                "name": "kin",
                "properName": "Kin",
                "decimals": 18,
                "displayUnit": "KIN",
                "blockExplorer": "0x818fc6c2ec5986bc6e2cbf00939d90556ab12ce5",
                "addresses": {
                    "current": "0x818Fc6C2Ec5986bc6E2CBf00939d90556aB12ce5"
                }
            },
            {
                "name": "kucoin",
                "properName": "KuCoin",
                "decimals": 6,
                "displayUnit": "KCS",
                "blockExplorer": "0x039b5649a59967e3e936d7471f9c3700100ee1ab",
                "addresses": {
                    "current": "0x039B5649A59967e3e936D7471f9c3700100Ee1ab"
                }
            },
            {
                "name": "kyber",
                "properName": "Kyber",
                "decimals": 18,
                "displayUnit": "KNC",
                "blockExplorer": "KyberNetwork",
                "addresses": {
                    "current": "0xdd974D5C2e2928deA5F71b9825b8b646686BD200"
                }
            },
            {
                "name": "loopring",
                "properName": "Loopring",
                "decimals": 18,
                "displayUnit": "LRC",
                "blockExplorer": "0xEF68e7C694F40c8202821eDF525dE3782458639f",
                "addresses": {
                    "current": "0xEF68e7C694F40c8202821eDF525dE3782458639f"
                }
            },
            {
                "name": "lunyr",
                "properName": "Lunyr",
                "decimals": 18,
                "displayUnit": "LUN",
                "blockExplorer": "0xfa05A73FfE78ef8f1a739473e462c54bae6567D9",
                "addresses": {
                    "current": "0xfa05A73FfE78ef8f1a739473e462c54bae6567D9"
                }
            },
            {
                "name": "maker",
                "properName": "Maker",
                "decimals": 18,
                "displayUnit": "MKR",
                "blockExplorer": "Maker",
                "addresses": {
                    "current": "0x9f8F72aA9304c8B593d555F12eF6589cC3A579A2"
                }
            },
            {
                "name": "matchpool",
                "properName": "Matchpool",
                "decimals": 3,
                "displayUnit": "GUP",
                "blockExplorer": "Guppy",
                "addresses": {
                    "current": "0xf7B098298f7C69Fc14610bf71d5e02c60792894C"
                }
            },
            {
                "name": "medishares",
                "properName": "MediShares",
                "decimals": 18,
                "displayUnit": "MDS",
                "blockExplorer": "0x66186008C1050627F979d464eABb258860563dbE",
                "addresses": {
                    "current": "0x66186008C1050627F979d464eABb258860563dbE"
                }
            },
            {
                "name": "melonport",
                "properName": "Melonport",
                "decimals": 18,
                "displayUnit": "MLN",
                "blockExplorer": "Melon",
                "addresses": {
                    "current": "0xBEB9eF514a379B997e0798FDcC901Ee474B6D9A1"
                }
            },
            {
                "name": "metal",
                "properName": "Metal",
                "decimals": 8,
                "displayUnit": "MTL",
                "blockExplorer": "Metal",
                "addresses": {
                    "current": "0xF433089366899D83a9f26A773D59ec7eCF30355e"
                }
            },
            {
                "name": "monaco",
                "properName": "Monaco",
                "decimals": 8,
                "displayUnit": "MCO",
                "blockExplorer": "Monaco",
                "addresses": {
                    "current": "0xB63B606Ac810a52cCa15e44bB630fd42D8d1d83d"
                }
            },
            {
                "name": "numeraire",
                "properName": "Numeraire",
                "decimals": 18,
                "displayUnit": "NMR",
                "blockExplorer": "Numeraire",
                "addresses": {
                    "current": "0x1776e1F26f98b1A5dF9cD347953a26dd3Cb46671"
                }
            },
            {
                "name": "omisego",
                "properName": "OmiseGo",
                "decimals": 18,
                "displayUnit": "OMG",
                "blockExplorer": "OmiseGo",
                "addresses": {
                    "current": "0xd26114cd6EE289AccF82350c8d8487fedB8A0C07"
                }
            },
            {
                "name": "pillar",
                "properName": "Pillar",
                "decimals": 18,
                "displayUnit": "PLR",
                "blockExplorer": "0xe3818504c1B32bF1557b16C238B2E01Fd3149C17",
                "addresses": {
                    "current": "0xe3818504c1B32bF1557b16C238B2E01Fd3149C17"
                }
            },
            {
                "name": "poet",
                "properName": "Po.et",
                "decimals": 8,
                "displayUnit": "POE",
                "blockExplorer": "0x0e0989b1f9b8a38983c2ba8053269ca62ec9b195",
                "addresses": {
                    "current": "0x0e0989b1f9B8A38983c2BA8053269Ca62Ec9B195"
                }
            },
            {
                "name": "polymath",
                "properName": "Polymath",
                "decimals": 18,
                "displayUnit": "POLY",
                "blockExplorer": "0x9992ec3cf6a55b00978cddf2b27bc6882d88d1ec",
                "addresses": {
                    "current": "0x9992eC3cF6A55b00978cdDF2b27BC6882d88D1eC"
                }
            },
            {
                "name": "populous",
                "properName": "Populous",
                "decimals": 8,
                "displayUnit": "PPT",
                "blockExplorer": "Populous",
                "addresses": {
                    "current": "0xd4fa1460F537bb9085d22C7bcCB5DD450Ef28e3a"
                }
            },
            {
                "name": "powerledger",
                "properName": "Power Ledger",
                "decimals": 6,
                "displayUnit": "POWR",
                "blockExplorer": "0x595832f8fc6bf59c85c527fec3740a1b7a361269",
                "addresses": {
                    "current": "0x595832F8FC6BF59c85C527fEC3740A1b7a361269"
                }
            },
            {
                "name": "qash",
                "properName": "Qash",
                "decimals": 6,
                "displayUnit": "QASH",
                "blockExplorer": "Qash",
                "addresses": {
                    "current": "0x618E75Ac90b12c6049Ba3b27f5d5F8651b0037F6"
                }
            },
            {
                "name": "qtum",
                "properName": "QTUM",
                "decimals": 18,
                "displayUnit": "QTUM",
                "blockExplorer": "Qtum",
                "addresses": {
                    "current": "0x9a642d6b3368ddc662CA244bAdf32cDA716005BC"
                }
            },
            {
                "name": "quantstamp",
                "properName": "Quantstamp",
                "decimals": 18,
                "displayUnit": "QSP",
                "blockExplorer": "0x99ea4dB9EE77ACD40B119BD1dC4E33e1C070b80d",
                "addresses": {
                    "current": "0x99ea4dB9EE77ACD40B119BD1dC4E33e1C070b80d"
                }
            },
            {
                "name": "raiden",
                "properName": "Raiden",
                "decimals": 18,
                "displayUnit": "RDN",
                "blockExplorer": "0x255Aa6DF07540Cb5d3d297f0D0D4D84cb52bc8e6",
                "addresses": {
                    "current": "0x255Aa6DF07540Cb5d3d297f0D0D4D84cb52bc8e6"
                }
            },
            {
                "name": "rchain",
                "properName": "RChain",
                "decimals": 8,
                "displayUnit": "RHOC",
                "blockExplorer": "0x168296bb09e24a88805cb9c33356536b980d3fc5",
                "addresses": {
                    "current": "0x168296bb09e24A88805CB9c33356536B980D3fC5"
                }
            },
            {
                "name": "request",
                "properName": "Request",
                "decimals": 18,
                "displayUnit": "REQ",
                "blockExplorer": "0x8f8221afbb33998d8584a2b05749ba73c37a938a",
                "addresses": {
                    "current": "0x8f8221aFbB33998d8584A2B05749bA73c37a938a"
                }
            },
            {
                "name": "revain",
                "properName": "Revain",
                "decimals": 0,
                "displayUnit": "R",
                "blockExplorer": "0x48f775efbe4f5ece6e0df2f7b5932df56823b990",
                "addresses": {
                    "current": "0x48f775EFBE4F5EcE6e0DF2f7b5932dF56823B990"
                }
            },
            {
                "name": "ripio",
                "properName": "Ripio",
                "decimals": 18,
                "displayUnit": "RCN",
                "blockExplorer": "RipioCreditNetwork",
                "addresses": {
                    "current": "0xF970b8E36e23F7fC3FD752EeA86f8Be8D83375A6"
                }
            },
            {
                "name": "rivetz",
                "properName": "Rivetz",
                "decimals": 18,
                "displayUnit": "RVT",
                "blockExplorer": "0x3d1BA9be9f66B8ee101911bC36D3fB562eaC2244",
                "addresses": {
                    "current": "0x3d1BA9be9f66B8ee101911bC36D3fB562eaC2244"
                }
            },
            {
                "name": "salt",
                "properName": "SALT",
                "decimals": 8,
                "displayUnit": "SALT",
                "blockExplorer": "0x4156D3342D5c385a87D264F90653733592000581",
                "addresses": {
                    "current": "0x4156D3342D5c385a87D264F90653733592000581"
                }
            },
            {
                "name": "santiment",
                "properName": "Santiment",
                "decimals": 18,
                "displayUnit": "SAN",
                "blockExplorer": "SAN",
                "addresses": {
                    "current": "0x7C5A0CE9267ED19B22F8cae653F198e3E8daf098"
                }
            },
            {
                "name": "singulardtv",
                "properName": "SingularDTV",
                "decimals": 0,
                "displayUnit": "SNGLS",
                "blockExplorer": "SNGLS",
                "addresses": {
                    "current": "0xaeC2E87E0A235266D9C5ADc9DEb4b2E29b54D009"
                }
            },
            {
                "name": "status",
                "properName": "Status",
                "decimals": 18,
                "displayUnit": "SNT",
                "blockExplorer": "StatusNetwork",
                "addresses": {
                    "current": "0x744d70FDBE2Ba4CF95131626614a1763DF805B9E"
                }
            },
            {
                "name": "storj",
                "properName": "Storj",
                "decimals": 8,
                "displayUnit": "STORJ",
                "blockExplorer": "Storj",
                "addresses": {
                    "current": "0xB64ef51C888972c908CFacf59B47C1AfBC0Ab8aC"
                }
            },
            {
                "name": "storm",
                "properName": "Storm",
                "decimals": 18,
                "displayUnit": "STORM",
                "blockExplorer": "0xD0a4b8946Cb52f0661273bfbC6fD0E0C75Fc6433",
                "addresses": {
                    "current": "0xD0a4b8946Cb52f0661273bfbC6fD0E0C75Fc6433"
                }
            },
            {
                "name": "substratum",
                "properName": "Substratum",
                "decimals": 2,
                "displayUnit": "SUB",
                "blockExplorer": "0x12480E24eb5bec1a9D4369CaB6a80caD3c0A377A",
                "addresses": {
                    "current": "0x12480E24eb5bec1a9D4369CaB6a80caD3c0A377A"
                }
            },
            {
                "name": "taas",
                "properName": "TAAS",
                "decimals": 6,
                "displayUnit": "TAAS",
                "blockExplorer": "0xE7775A6e9Bcf904eb39DA2b68c5efb4F9360e08C",
                "addresses": {
                    "current": "0xE7775A6e9Bcf904eb39DA2b68c5efb4F9360e08C"
                }
            },
            {
                "name": "tenx",
                "properName": "TenX",
                "decimals": 18,
                "displayUnit": "PAY",
                "blockExplorer": "TenXPay",
                "addresses": {
                    "current": "0xB97048628DB6B661D4C2aA833e95Dbe1A905B280"
                }
            },
            {
                "name": "timenewbank",
                "properName": "Time Bank",
                "decimals": 18,
                "displayUnit": "TNB",
                "blockExplorer": "0xf7920b0768ecb20a123fac32311d07d193381d6f",
                "addresses": {
                    "current": "0xF7920B0768Ecb20A123fAc32311d07D193381d6f"
                }
            },
            {
                "name": "tron",
                "properName": "Tron",
                "decimals": 6,
                "displayUnit": "TRX",
                "blockExplorer": "Tronix",
                "addresses": {
                    "current": "0xf230b790E05390FC8295F4d3F60332c93BEd42e2"
                }
            },
            {
                "name": "vechain",
                "properName": "VeChain",
                "decimals": 18,
                "displayUnit": "VEN",
                "blockExplorer": "0xd850942ef8811f2a866692a623011bde52a462c1",
                "addresses": {
                    "current": "0xD850942eF8811f2A866692A623011bDE52a462C1"
                }
            },
            {
                "name": "veritaseum",
                "properName": "Veritaseum",
                "decimals": 18,
                "displayUnit": "VERI",
                "blockExplorer": "0x8f3470A7388c05eE4e7AF3d01D8C722b0FF52374",
                "addresses": {
                    "current": "0x8f3470A7388c05eE4e7AF3d01D8C722b0FF52374"
                }
            },
            {
                "name": "viberate",
                "properName": "Viberate",
                "decimals": 18,
                "displayUnit": "VIB",
                "blockExplorer": "0x2C974B2d0BA1716E644c1FC59982a89DDD2fF724",
                "addresses": {
                    "current": "0x2C974B2d0BA1716E644c1FC59982a89DDD2fF724"
                }
            },
            {
                "name": "walton",
                "properName": "Walton",
                "decimals": 18,
                "displayUnit": "WTC",
                "blockExplorer": "0xb7cb1c96db6b22b0d3d9536e0108d062bd488f74",
                "addresses": {
                    "current": "0xb7cB1C96dB6B22b0D3d9536E0108d062BD488F74"
                }
            },
            {
                "name": "wax",
                "properName": "Wax",
                "decimals": 8,
                "displayUnit": "WAX",
                "blockExplorer": "0x39Bb259F66E1C59d5ABEF88375979b4D20D98022",
                "addresses": {
                    "current": "0x39Bb259F66E1C59d5ABEF88375979b4D20D98022"
                }
            },
            {
                "name": "wetrust",
                "properName": "WeTrust",
                "decimals": 6,
                "displayUnit": "TRST",
                "blockExplorer": "Trustcoin",
                "addresses": {
                    "current": "0xCb94be6f13A1182E4A4B6140cb7bf2025d28e41B"
                }
            },
            {
                "name": "wings",
                "properName": "Wings",
                "decimals": 18,
                "displayUnit": "WINGS",
                "blockExplorer": "WINGS",
                "addresses": {
                    "current": "0x667088b212ce3d06a1b553a7221E1fD19000d9aF"
                }
            },
            {
                "name": "zerox",
                "properName": "0x",
                "decimals": 18,
                "displayUnit": "ZRX",
                "blockExplorer": "ZRX",
                "addresses": {
                    "current": "0xE41d2489571d322189246DaFA5ebDe1F4699F498"
                }
            }
        ]

    }, {}],
    22: [function(require, module, exports) {
        'use strict';
        Object.defineProperty(exports, "__esModule", {
            value: true
        });
        var _aureus = require(34);
        var _currencyUnits = require(51);
        var _util = require(52);
        var _ethereumjsUtil = require('ethereumjs-util');
        var _ethereumjsUtil2 = _interopRequireDefault(_ethereumjsUtil);
        var _ = require(20);
        var ethereum = _interopRequireWildcard(_);
        var _tokens = require(21);
        var _tokens2 = _interopRequireDefault(_tokens);

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

        function _interopRequireDefault(obj) {
            return obj && obj.__esModule ? obj : {
                default: obj
            };
        }
        const listDefaultEnabled = ['augur', 'bancor', 'bat', 'civic', 'edgeless', 'eos', 'gnosis', 'golem', 'iexec', 'matchpool', 'omisego', 'salt', 'status', 'zerox'];
        const gasTx = 120e3;
        const tokenTemplate = {
            hasMultipleAddresses: false,
            hasUTXO: false,
            isAccountBased: true,
            isEthereumToken: true,
            isOmniProperty: false,
            gasTx,
            fee: ethereum.getFee(gasTx),
            address: {
                validate: ethereum.address.validate,
                isP2PKH() {},
                isP2SH() {}
            },
            bip44: ethereum.bip44,
            keys: {
                encodePrivate: ethereum.keys.encodePrivate,
                encodePublic: ethereum.keys.encodePublic,
                encodePublicFromWIF() {}
            }
        };

        function createContract(addresses, currency) {
            const TRANSFER_METHOD_ID = '0xa9059cbb';
            const TRANSFER_EVENT_ID = '0xddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef';
            const transfer = {
                METHOD_ID: TRANSFER_METHOD_ID,
                EVENT_ID: TRANSFER_EVENT_ID,
                build(to, amount) {
                    const bufAmount = (0, _util.currency2buffer)(amount);
                    return Buffer.concat([_ethereumjsUtil2.default.toBuffer(TRANSFER_METHOD_ID), _ethereumjsUtil2.default.zeros(12), _ethereumjsUtil2.default.toBuffer(to), _ethereumjsUtil2.default.zeros(32 - bufAmount.length), bufAmount]);
                },
                test(data) {
                    return _ethereumjsUtil2.default.bufferToHex(data.slice(0, 4)) === TRANSFER_METHOD_ID;
                },
                parse(data) {
                    if (!transfer.test(data)) throw new Error('It is not transfer data');
                    return {
                        to: _ethereumjsUtil2.default.bufferToHex(data.slice(16, 36)),
                        amount: currency.baseUnit(_ethereumjsUtil2.default.bufferToHex(data.slice(36, 68)))
                    };
                }
            };
            return {
                addresses,
                transfer
            };
        }
        exports.default = _tokens2.default.map(fixture => {
            const currency = _aureus.UnitType.create(fixture.name, _currencyUnits.cryptoCurrency, {
                base: 0,
                [fixture.displayUnit]: fixture.decimals
            }, fixture.displayUnit);
            const token = Object.assign({}, tokenTemplate, {
                name: fixture.name,
                properName: fixture.properName,
                available: true,
                defaultEnabled: listDefaultEnabled.includes(fixture.name),
                currency,
                displayUnit: fixture.displayUnit,
                units: [fixture.displayUnit],
                blockExplorer: {
                    addressUrl: address => `https://etherscan.io/token/${fixture.blockExplorer}?a=${address}`,
                    txUrl: txId => `https://etherscan.io/tx/${txId}`
                },
                contract: createContract(fixture.addresses, currency)
            });
            ethereum.gasPriceEvents.on('new', () => {
                token.fee = ethereum.getFee(gasTx);
            });
            return token;
        });

    }, {
        "20": 20,
        "21": 21,
        "34": 34,
        "51": 51,
        "52": 52,
        "undefined": undefined
    }],
    23: [function(require, module, exports) {
        'use strict';
        Object.defineProperty(exports, "__esModule", {
            value: true
        });
        exports.twoOfTwo = exports.blockExplorer = exports.keys = exports.bip44 = exports.address = exports.gasPriceEvents = exports.fee = exports.gasPrice = exports.gasContract = exports.gasTx = exports.units = exports.displayUnit = exports.currency = exports.isOmniProperty = exports.isEthereumToken = exports.isAccountBased = exports.hasUTXO = exports.hasMultipleAddresses = exports.defaultEnabled = exports.available = exports.properName = exports.name = undefined;
        exports.getFee = getFee;
        exports.setGasPrice = setGasPrice;
        var _currencyUnits = require(51);
        var _aureus = require(34);
        var _etcchain = require(59);
        var etcchain = _interopRequireWildcard(_etcchain);
        var _exodusEthereumServer = require(66);
        var _bip44Constants = require('bip44-constants');
        var _bip44Constants2 = _interopRequireDefault(_bip44Constants);
        var _events = require('events');
        var _ethereum = require(20);
        var ethereum = _interopRequireWildcard(_ethereum);
        var _memoizeLruCache = require(70);
        var _memoizeLruCache2 = _interopRequireDefault(_memoizeLruCache);
        var _twoOfTwoEcdsaThreshold = require(90);

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

        function _asyncToGenerator(fn) {
            return function() {
                var gen = fn.apply(this, arguments);
                return new Promise(function(resolve, reject) {
                    function step(key, arg) {
                        try {
                            var info = gen[key](arg);
                            var value = info.value;
                        } catch (error) {
                            reject(error);
                            return;
                        }
                        if (info.done) {
                            resolve(value);
                        } else {
                            return Promise.resolve(value).then(function(value) {
                                step("next", value);
                            }, function(err) {
                                step("throw", err);
                            });
                        }
                    }
                    return step("next");
                });
            };
        }
        const name = exports.name = 'ethereumclassic';
        const properName = exports.properName = 'ETH Classic';
        const available = exports.available = true;
        const defaultEnabled = exports.defaultEnabled = true;
        const hasMultipleAddresses = exports.hasMultipleAddresses = ethereum.hasMultipleAddresses;
        const hasUTXO = exports.hasUTXO = ethereum.hasUTXO;
        const isAccountBased = exports.isAccountBased = ethereum.isAccountBased;
        const isEthereumToken = exports.isEthereumToken = ethereum.isEthereumToken;
        const isOmniProperty = exports.isOmniProperty = ethereum.isOmniProperty;
        const currency = exports.currency = _aureus.UnitType.create(name, _currencyUnits.cryptoCurrency, {
            wei: 0,
            Kwei: 3,
            Mwei: 6,
            Gwei: 9,
            szabo: 12,
            finney: 15,
            ETC: 18
        }, 'ETC');
        const displayUnit = exports.displayUnit = 'ETC';
        const units = exports.units = [displayUnit];
        const gasTx = exports.gasTx = 21e3;
        const gasContract = exports.gasContract = 1e6;
        let gasPrice = exports.gasPrice = undefined;
        let fee = exports.fee = undefined;

        function getFee(gasLimit, customGasPrice) {
            return currency.wei((customGasPrice || gasPrice).toBase().toNumber() * gasLimit);
        }
        const gasPriceEvents = exports.gasPriceEvents = new _events.EventEmitter();

        function setGasPrice(newGasPrice) {
            if (gasPrice && gasPrice.toNumber() === newGasPrice) return;
            console.log(`ethereumclassic gas: ${newGasPrice}`);
            exports.gasPrice = gasPrice = currency.wei(newGasPrice);
            exports.fee = fee = getFee(gasTx);
            gasPriceEvents.emit('new');
        }
        setGasPrice(50e9);
        const address = exports.address = {
            validate: ethereum.address.validate,
            isContract: (0, _memoizeLruCache2.default)((() => {
                var _ref = _asyncToGenerator(function*(address) {
                    const code = yield(0, _exodusEthereumServer.withFallback)(_exodusEthereumServer.etc.getCode, etcchain.getCode)(address);
                    return code.length > 2;
                });
                return function(_x) {
                    return _ref.apply(this, arguments);
                };
            })(), key => key, {
                max: 100
            }),
            isP2PKH: null,
            isP2SH: null
        };
        const bip44 = exports.bip44 = _bip44Constants2.default[displayUnit];
        const keys = exports.keys = {
            encodePrivate: ethereum.keys.encodePrivate,
            encodePublic: ethereum.keys.encodePublic,
            encodePublicFromWIF: null
        };
        const blockExplorer = exports.blockExplorer = {
            addressUrl: address => `https://gastracker.io/addr/${address}`,
            txUrl: txId => `https://gastracker.io/tx/${txId}`
        };
        const twoOfTwo = exports.twoOfTwo = (0, _twoOfTwoEcdsaThreshold.alice)({
            publicKeyEncode: keys.encodePublic
        });

    }, {
        "20": 20,
        "34": 34,
        "51": 51,
        "59": 59,
        "66": 66,
        "70": 70,
        "90": 90,
        "undefined": undefined
    }],
    24: [function(require, module, exports) {
        'use strict';
        Object.defineProperty(exports, "__esModule", {
            value: true
        });
        exports.blockExplorer = exports.keys = exports.bip44 = exports.address = exports.fee = exports.units = exports.displayUnit = exports.currency = exports.isOmniProperty = exports.isEthereumToken = exports.isAccountBased = exports.hasUTXO = exports.hasMultipleAddresses = exports.defaultEnabled = exports.available = exports.properName = exports.name = undefined;
        exports.setNewECRate = setNewECRate;
        var _appConfig = require(4);
        var _aureus = require(34);
        var _currencyUnits = require(51);
        var _bip44Constants = require('bip44-constants');
        var _bip44Constants2 = _interopRequireDefault(_bip44Constants);
        var _factomjsLib = require('factomjs-lib');
        var _factomjsLib2 = _interopRequireDefault(_factomjsLib);

        function _interopRequireDefault(obj) {
            return obj && obj.__esModule ? obj : {
                default: obj
            };
        }
        const name = exports.name = 'factom';
        const properName = exports.properName = 'Factom';
        const available = exports.available = _appConfig.ENV_DEV || _appConfig.ENV_BUILD_EDEN;
        const defaultEnabled = exports.defaultEnabled = false;
        const hasMultipleAddresses = exports.hasMultipleAddresses = false;
        const hasUTXO = exports.hasUTXO = false;
        const isAccountBased = exports.isAccountBased = true;
        const isEthereumToken = exports.isEthereumToken = false;
        const isOmniProperty = exports.isOmniProperty = false;
        const currency = exports.currency = _aureus.UnitType.create(name, _currencyUnits.cryptoCurrency, {
            factoshis: 0,
            FCT: 8
        }, 'FCT');
        const displayUnit = exports.displayUnit = 'FCT';
        const units = exports.units = [displayUnit];

        function setNewECRate(newECRate) {
            exports.fee = fee = currency.factoshis(newECRate * 12);
        }
        let fee = exports.fee = undefined;
        setNewECRate(1e4);
        const address = exports.address = {
            validate: _factomjsLib2.default.address.fct.isValidHumanReadable,
            isP2PKH: null,
            isP2SH: null
        };
        const bip44 = exports.bip44 = _bip44Constants2.default[displayUnit];
        const keys = exports.keys = {
            encodePrivate(privateKey) {
                return _factomjsLib2.default.privateKey.fct.toHumanReadable(privateKey);
            },
            encodePublic(publicKey, privateKey) {
                if (privateKey) publicKey = _factomjsLib2.default.crypto.publicKeyCreate(privateKey);
                const rcd1 = _factomjsLib2.default.rcd.createRCD1(publicKey);
                const rcdHash = _factomjsLib2.default.rcd.getHash(rcd1);
                return _factomjsLib2.default.address.fct.toHumanReadable(rcdHash);
            },
            encodePublicFromWIF: null
        };
        const blockExplorer = exports.blockExplorer = {
            addressUrl: address => `https://explorer.factom.org/address/${address}`,
            txUrl: txId => `https://explorer.factom.org/tx/${txId}`
        };

    }, {
        "34": 34,
        "4": 4,
        "51": 51,
        "undefined": undefined
    }],
    25: [function(require, module, exports) {
        'use strict';
        Object.defineProperty(exports, "__esModule", {
            value: true
        });
        var _lodash = require('lodash');
        var lodash = _interopRequireWildcard(_lodash);
        var _bcash = require(8);
        var bcash = _interopRequireWildcard(_bcash);
        var _bcashclaim = require(9);
        var bcashclaim = _interopRequireWildcard(_bcashclaim);
        var _bgold = require(10);
        var bgold = _interopRequireWildcard(_bgold);
        var _bgoldclaim = require(11);
        var bgoldclaim = _interopRequireWildcard(_bgoldclaim);
        var _bitcoin = require(12);
        var bitcoin = _interopRequireWildcard(_bitcoin);
        var _dash = require(14);
        var dash = _interopRequireWildcard(_dash);
        var _decred = require(15);
        var decred = _interopRequireWildcard(_decred);
        var _digibyte = require(16);
        var digibyte = _interopRequireWildcard(_digibyte);
        var _eosio = require(19);
        var eosio = _interopRequireWildcard(_eosio);
        var _ethereum = require(20);
        var ethereum = _interopRequireWildcard(_ethereum);
        var _ethereumclassic = require(23);
        var ethereumclassic = _interopRequireWildcard(_ethereumclassic);
        var _factom = require(24);
        var factom = _interopRequireWildcard(_factom);
        var _litecoin = require(26);
        var litecoin = _interopRequireWildcard(_litecoin);
        var _qtumignition = require(28);
        var qtumignition = _interopRequireWildcard(_qtumignition);
        var _monero = require(27);
        var monero = _interopRequireWildcard(_monero);
        var _ripple = require(29);
        var ripple = _interopRequireWildcard(_ripple);
        var _vertcoin = require(31);
        var vertcoin = _interopRequireWildcard(_vertcoin);
        var _zcash = require(32);
        var zcash = _interopRequireWildcard(_zcash);
        var _baseasset = require(7);
        var _tokens = require(22);
        var _tokens2 = _interopRequireDefault(_tokens);
        var _tether = require(30);
        var tether = _interopRequireWildcard(_tether);

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
        const assets = [bcash, bcashclaim, bgold, bgoldclaim, bitcoin, dash, decred, digibyte, eosio, ethereum, ethereumclassic, factom, litecoin, qtumignition, monero, ripple, vertcoin, zcash];
        assets.push(..._tokens2.default);
        assets.push(tether);
        for (let prop in assets) {
            let asset = assets[prop];
            if (asset) {
                (0, _baseasset.connectBaseAssetFuncs)(asset);
            }
        }
        exports.default = lodash.sortBy(assets, [asset => asset.properName.toLowerCase()]).reduce((obj, asset) => {
            return Object.assign(obj, {
                [asset.name]: asset
            });
        }, {});

    }, {
        "10": 10,
        "11": 11,
        "12": 12,
        "14": 14,
        "15": 15,
        "16": 16,
        "19": 19,
        "20": 20,
        "22": 22,
        "23": 23,
        "24": 24,
        "26": 26,
        "27": 27,
        "28": 28,
        "29": 29,
        "30": 30,
        "31": 31,
        "32": 32,
        "7": 7,
        "8": 8,
        "9": 9,
        "undefined": undefined
    }],
    26: [function(require, module, exports) {
        'use strict';
        Object.defineProperty(exports, "__esModule", {
            value: true
        });
        exports.twoOfTwo = exports.blockExplorer = exports.bip44 = exports.address = exports.coinInfo = exports.feePerKB = exports.units = exports.displayUnit = exports.currency = exports.isOmniProperty = exports.isEthereumToken = exports.isAccountBased = exports.hasUTXO = exports.hasMultipleAddresses = exports.defaultEnabled = exports.available = exports.properName = exports.name = undefined;
        var _coininfo = require('coininfo');
        var _coininfo2 = _interopRequireDefault(_coininfo);
        var _currencyUnits = require(51);
        var _aureus = require(34);
        var _bip44Constants = require('bip44-constants');
        var _bip44Constants2 = _interopRequireDefault(_bip44Constants);
        var _twoOfTwoMultisig = require(94);

        function _interopRequireDefault(obj) {
            return obj && obj.__esModule ? obj : {
                default: obj
            };
        }
        const name = exports.name = 'litecoin';
        const properName = exports.properName = 'Litecoin';
        const available = exports.available = true;
        const defaultEnabled = exports.defaultEnabled = true;
        const hasMultipleAddresses = exports.hasMultipleAddresses = true;
        const hasUTXO = exports.hasUTXO = true;
        const isAccountBased = exports.isAccountBased = false;
        const isEthereumToken = exports.isEthereumToken = false;
        const isOmniProperty = exports.isOmniProperty = false;
        const currency = exports.currency = _aureus.UnitType.create(name, _currencyUnits.cryptoCurrency, {
            latoshis: 0,
            LTC: 8
        }, 'LTC');
        const displayUnit = exports.displayUnit = 'LTC';
        const units = exports.units = [displayUnit];
        const feePerKB = exports.feePerKB = currency.latoshis(300000);
        const coinInfo = exports.coinInfo = (0, _coininfo2.default)(name);
        const address = exports.address = {
            versions: {
                p2pkh: coinInfo.versions.public,
                p2sh: coinInfo.versions.scripthash
            }
        };
        const bip44 = exports.bip44 = _bip44Constants2.default[displayUnit];
        const blockExplorer = exports.blockExplorer = {
            addressUrl: address => `https://live.blockcypher.com/ltc/address/${address}/`,
            txUrl: txId => `https://live.blockcypher.com/ltc/tx/${txId}/`
        };
        const twoOfTwo = exports.twoOfTwo = (0, _twoOfTwoMultisig.alice)({
            network: coinInfo
        });

    }, {
        "34": 34,
        "51": 51,
        "94": 94,
        "undefined": undefined
    }],
    27: [function(require, module, exports) {
        'use strict';
        Object.defineProperty(exports, "__esModule", {
            value: true
        });
        exports.blockExplorer = exports.keys = exports.bip44 = exports.address = exports.fee = exports.units = exports.displayUnit = exports.currency = exports.isOmniProperty = exports.isEthereumToken = exports.isAccountBased = exports.hasUTXO = exports.hasMultipleAddresses = exports.defaultEnabled = exports.available = exports.properName = exports.name = undefined;
        var _appConfig = require(4);
        var _aureus = require(34);
        var _currencyUnits = require(51);
        var _bip44Constants = require('bip44-constants');
        var _bip44Constants2 = _interopRequireDefault(_bip44Constants);
        var _monerojsUtil = require(74);
        var moneroUtil = _interopRequireWildcard(_monerojsUtil);

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

        function _interopRequireDefault(obj) {
            return obj && obj.__esModule ? obj : {
                default: obj
            };
        }
        const name = exports.name = 'monero';
        const properName = exports.properName = 'Monero';
        const available = exports.available = true;
        const defaultEnabled = exports.defaultEnabled = true;
        const hasMultipleAddresses = exports.hasMultipleAddresses = false;
        const hasUTXO = exports.hasUTXO = true;
        const isAccountBased = exports.isAccountBased = true;
        const isEthereumToken = exports.isEthereumToken = false;
        const isOmniProperty = exports.isOmniProperty = false;
        const currency = exports.currency = _aureus.UnitType.create(name, _currencyUnits.cryptoCurrency, {
            atomic: 0,
            XMR: 12
        }, 'XMR');
        const displayUnit = exports.displayUnit = 'XMR';
        const units = exports.units = [displayUnit];
        const fee = exports.fee = currency.XMR('0.026');
        const address = exports.address = {
            isP2PKH: null,
            isP2SH: null,
            validate(address) {
                return moneroUtil.address.isValid(address);
            }
        };
        const bip44 = exports.bip44 = _bip44Constants2.default[displayUnit];
        const keys = exports.keys = {
            encodePrivate(privateKey) {
                return Buffer.from(privateKey).reverse().toString('hex');
            },
            encodePublic(publicKey, privateKey) {
                const spendPrivateKey = moneroUtil.crypto.reduceECKey(Buffer.from(privateKey));
                const spendPublicKey = moneroUtil.crypto.createECPublicKey(spendPrivateKey);
                const viewPrivateKey = moneroUtil.crypto.createECPrivateKey(spendPrivateKey);
                const viewPublicKey = moneroUtil.crypto.createECPublicKey(viewPrivateKey);
                const addr = moneroUtil.address.create(spendPublicKey, viewPublicKey);
                return addr;
            },
            encodePublicFromWIF: null
        };
        const blockExplorer = exports.blockExplorer = {
            addressUrl: address => '',
            txUrl: txId => `https://moneroblocks.info/tx/${txId}`
        };

    }, {
        "34": 34,
        "4": 4,
        "51": 51,
        "74": 74,
        "undefined": undefined
    }],
    28: [function(require, module, exports) {
        'use strict';
        Object.defineProperty(exports, "__esModule", {
            value: true
        });
        exports.twoOfTwo = exports.blockExplorer = exports.keys = exports.bip44 = exports.address = exports.coinInfo = exports.feePerKB = exports.units = exports.displayUnit = exports.currency = exports.isOmniProperty = exports.isEthereumToken = exports.isAccountBased = exports.hasUTXO = exports.hasMultipleAddresses = exports.defaultEnabled = exports.available = exports.properName = exports.name = undefined;
        var _appConfig = require(4);
        var _coininfo = require('coininfo');
        var _coininfo2 = _interopRequireDefault(_coininfo);
        var _bs58check = require('bs58check');
        var _bs58check2 = _interopRequireDefault(_bs58check);
        var _wif = require('wif');
        var _wif2 = _interopRequireDefault(_wif);
        var _crypto = require('crypto');
        var _crypto2 = _interopRequireDefault(_crypto);
        var _currencyUnits = require(51);
        var _aureus = require(34);
        var _bip44Constants = require('bip44-constants');
        var _bip44Constants2 = _interopRequireDefault(_bip44Constants);
        var _twoOfTwoMultisig = require(94);

        function _interopRequireDefault(obj) {
            return obj && obj.__esModule ? obj : {
                default: obj
            };
        }
        const name = exports.name = 'qtumignition';
        const properName = exports.properName = 'Qtum Ignition';
        const coininfoName = 'qtum';
        const available = exports.available = _appConfig.ENV_DEV;
        const defaultEnabled = exports.defaultEnabled = false;
        const hasMultipleAddresses = exports.hasMultipleAddresses = true;
        const hasUTXO = exports.hasUTXO = true;
        const isAccountBased = exports.isAccountBased = false;
        const isEthereumToken = exports.isEthereumToken = false;
        const isOmniProperty = exports.isOmniProperty = false;
        const currency = exports.currency = _aureus.UnitType.create(name, _currencyUnits.cryptoCurrency, {
            satoshis: 0,
            QTUM: 8
        }, 'QTUM');
        const displayUnit = exports.displayUnit = 'QTUM';
        const units = exports.units = [displayUnit];
        const feePerKB = exports.feePerKB = currency.satoshis(600000);
        const coinInfo = exports.coinInfo = (0, _coininfo2.default)(coininfoName);
        const address = exports.address = {
            versions: {
                p2pkh: coinInfo.versions.public,
                p2sh: coinInfo.versions.scripthash
            },
            isP2PKH(string) {
                const payload = _bs58check2.default.decodeUnsafe(string);
                return payload && payload.length === 21 && payload[0] === address.versions.p2pkh;
            },
            isP2SH(string) {
                const payload = _bs58check2.default.decodeUnsafe(string);
                return payload && payload.length === 21 && payload[0] === address.versions.p2sh;
            },
            validate(string) {
                const payload = _bs58check2.default.decodeUnsafe(string);
                return payload && payload.length === 21 && [address.versions.p2pkh, address.versions.p2sh].includes(payload[0]);
            }
        };
        const bip44 = exports.bip44 = _bip44Constants2.default[displayUnit];
        const keys = exports.keys = {
            encodePrivate(privateKey) {
                const versions = coinInfo.versions;
                return _wif2.default.encode(versions.private, privateKey, true);
            },
            encodePublic(publicKey) {
                const sha = _crypto2.default.createHash('sha256').update(publicKey).digest();
                const pubKeyHash = _crypto2.default.createHash('rmd160').update(sha).digest();
                const payload = Buffer.concat([Buffer.from([address.versions.p2pkh]), pubKeyHash]);
                return _bs58check2.default.encode(payload);
            }
        };
        const blockExplorer = exports.blockExplorer = {
            addressUrl: address => `https://explorer.qtum.org/address/${address}`,
            txUrl: txId => `https://explorer.qtum.org/tx/${txId}`
        };
        const twoOfTwo = exports.twoOfTwo = (0, _twoOfTwoMultisig.alice)({
            network: coinInfo
        });

    }, {
        "34": 34,
        "4": 4,
        "51": 51,
        "94": 94,
        "undefined": undefined
    }],
    29: [function(require, module, exports) {
        'use strict';
        Object.defineProperty(exports, "__esModule", {
            value: true
        });
        exports.blockExplorer = exports.keys = exports.bip44 = exports.address = exports.accountReserve = exports.fee = exports.units = exports.displayUnit = exports.currency = exports.isOmniProperty = exports.isEthereumToken = exports.isAccountBased = exports.hasUTXO = exports.hasMultipleAddresses = exports.defaultEnabled = exports.available = exports.properName = exports.name = undefined;
        exports.setFee = setFee;
        var _appConfig = require(4);
        var _rippleAddressCodec = require('ripple-address-codec');
        var _rippleAddressCodec2 = _interopRequireDefault(_rippleAddressCodec);
        var _currencyUnits = require(51);
        var _aureus = require(34);
        var _bip44Constants = require('bip44-constants');
        var _bip44Constants2 = _interopRequireDefault(_bip44Constants);
        var _address = require(75);

        function _interopRequireDefault(obj) {
            return obj && obj.__esModule ? obj : {
                default: obj
            };
        }
        const name = exports.name = 'ripple';
        const properName = exports.properName = 'Ripple';
        const available = exports.available = _appConfig.ENV_DEV || _appConfig.ENV_BUILD_EDEN;
        const defaultEnabled = exports.defaultEnabled = false;
        const hasMultipleAddresses = exports.hasMultipleAddresses = false;
        const hasUTXO = exports.hasUTXO = false;
        const isAccountBased = exports.isAccountBased = true;
        const isEthereumToken = exports.isEthereumToken = false;
        const isOmniProperty = exports.isOmniProperty = false;
        const currency = exports.currency = _aureus.UnitType.create(name, _currencyUnits.cryptoCurrency, {
            drop: 0,
            XRP: 6
        }, 'XRP');
        const displayUnit = exports.displayUnit = 'XRP';
        const units = exports.units = [displayUnit];

        function setFee(value) {
            if (fee && fee.toNumber() === value) return;
            console.log(`set ripple fee: ${value} drops`);
            exports.fee = fee = currency.baseUnit(value);
        }
        let fee = exports.fee = undefined;
        setFee(10);
        const accountReserve = exports.accountReserve = currency.XRP(20);
        const address = exports.address = {
            validate: _rippleAddressCodec2.default.isValidAccountID,
            isP2PKH: null,
            isP2SH: null
        };
        const bip44 = exports.bip44 = _bip44Constants2.default[displayUnit];
        const keys = exports.keys = {
            encodePrivate(privateKey) {
                return '00' + privateKey.toString('hex').toUpperCase();
            },
            encodePublic: _address.derive,
            encodePublicFromWIF: null
        };
        const blockExplorer = exports.blockExplorer = {
            addressUrl: address => `https://bithomp.com/explorer/${address}`,
            txUrl: txId => `https://xrpcharts.ripple.com/#/transactions/${txId}`
        };

    }, {
        "34": 34,
        "4": 4,
        "51": 51,
        "75": 75,
        "undefined": undefined
    }],
    30: [function(require, module, exports) {
        'use strict';
        Object.defineProperty(exports, "__esModule", {
            value: true
        });
        exports.simpleSend = exports.units = exports.displayUnit = exports.currency = exports.defaultEnabled = exports.available = exports.omniPropertyId = exports.properName = exports.name = undefined;
        var _omni = require(13);
        Object.keys(_omni).forEach(function(key) {
            if (key === "default" || key === "__esModule") return;
            Object.defineProperty(exports, key, {
                enumerable: true,
                get: function() {
                    return _omni[key];
                }
            });
        });
        var _aureus = require(34);
        var _currencyUnits = require(51);
        const name = exports.name = 'tether';
        const properName = exports.properName = 'Tether';
        const omniPropertyId = exports.omniPropertyId = 31;
        const available = exports.available = false;
        const defaultEnabled = exports.defaultEnabled = false;
        const currency = exports.currency = _aureus.UnitType.create(name, _currencyUnits.cryptoCurrency, {
            atomic: 0,
            USDT: 8
        }, 'USDT');
        const displayUnit = exports.displayUnit = 'USDT';
        const units = exports.units = [displayUnit];
        const simpleSend = exports.simpleSend = (0, _omni._createSimpleSend)(omniPropertyId, currency);

    }, {
        "13": 13,
        "34": 34,
        "51": 51
    }],
    31: [function(require, module, exports) {
        'use strict';
        Object.defineProperty(exports, "__esModule", {
            value: true
        });
        exports.twoOfTwo = exports.blockExplorer = exports.bip44 = exports.address = exports.coinInfo = exports.feePerKB = exports.units = exports.displayUnit = exports.currency = exports.isOmniProperty = exports.isEthereumToken = exports.isAccountBased = exports.hasUTXO = exports.hasMultipleAddresses = exports.defaultEnabled = exports.available = exports.properName = exports.name = undefined;
        var _coininfo = require('coininfo');
        var _coininfo2 = _interopRequireDefault(_coininfo);
        var _currencyUnits = require(51);
        var _aureus = require(34);
        var _bip44Constants = require('bip44-constants');
        var _bip44Constants2 = _interopRequireDefault(_bip44Constants);
        var _twoOfTwoMultisig = require(94);

        function _interopRequireDefault(obj) {
            return obj && obj.__esModule ? obj : {
                default: obj
            };
        }
        const name = exports.name = 'vertcoin';
        const properName = exports.properName = 'Vertcoin';
        const available = exports.available = true;
        const defaultEnabled = exports.defaultEnabled = false;
        const hasMultipleAddresses = exports.hasMultipleAddresses = true;
        const hasUTXO = exports.hasUTXO = true;
        const isAccountBased = exports.isAccountBased = false;
        const isEthereumToken = exports.isEthereumToken = false;
        const isOmniProperty = exports.isOmniProperty = false;
        const currency = exports.currency = _aureus.UnitType.create(name, _currencyUnits.cryptoCurrency, {
            satoshis: 0,
            VTC: 8
        }, 'VTC');
        const displayUnit = exports.displayUnit = 'VTC';
        const units = exports.units = [displayUnit];
        const feePerKB = exports.feePerKB = currency.satoshis(155000);
        const coinInfo = exports.coinInfo = (0, _coininfo2.default)(name);
        const address = exports.address = {
            versions: {
                p2pkh: coinInfo.versions.public,
                p2sh: coinInfo.versions.scripthash
            }
        };
        const bip44 = exports.bip44 = _bip44Constants2.default[displayUnit];
        const blockExplorer = exports.blockExplorer = {
            addressUrl: address => `https://insight.vertcoin.org/address/${address}`,
            txUrl: txId => `https://insight.vertcoin.org/tx/${txId}`
        };
        const twoOfTwo = exports.twoOfTwo = (0, _twoOfTwoMultisig.alice)({
            network: coinInfo
        });

    }, {
        "34": 34,
        "51": 51,
        "94": 94,
        "undefined": undefined
    }],
    32: [function(require, module, exports) {
        'use strict';
        Object.defineProperty(exports, "__esModule", {
            value: true
        });
        exports.blockExplorer = exports.keys = exports.bip44 = exports.address = exports.coinInfo = exports.feePerKB = exports.units = exports.displayUnit = exports.currency = exports.isOmniProperty = exports.isEthereumToken = exports.isAccountBased = exports.hasUTXO = exports.hasMultipleAddresses = exports.defaultEnabled = exports.available = exports.properName = exports.name = undefined;
        var _coininfo = require('coininfo');
        var _coininfo2 = _interopRequireDefault(_coininfo);
        var _bs58check = require('bs58check');
        var _bs58check2 = _interopRequireDefault(_bs58check);
        var _crypto = require('crypto');
        var _crypto2 = _interopRequireDefault(_crypto);
        var _currencyUnits = require(51);
        var _aureus = require(34);
        var _bip44Constants = require('bip44-constants');
        var _bip44Constants2 = _interopRequireDefault(_bip44Constants);

        function _interopRequireDefault(obj) {
            return obj && obj.__esModule ? obj : {
                default: obj
            };
        }
        const name = exports.name = 'zcash';
        const properName = exports.properName = 'Zcash';
        const available = exports.available = true;
        const defaultEnabled = exports.defaultEnabled = false;
        const hasMultipleAddresses = exports.hasMultipleAddresses = false;
        const hasUTXO = exports.hasUTXO = true;
        const isAccountBased = exports.isAccountBased = false;
        const isEthereumToken = exports.isEthereumToken = false;
        const isOmniProperty = exports.isOmniProperty = false;
        const currency = exports.currency = _aureus.UnitType.create(name, _currencyUnits.cryptoCurrency, {
            satoshis: 0,
            ZEC: 8
        }, 'ZEC');
        const displayUnit = exports.displayUnit = 'ZEC';
        const units = exports.units = [displayUnit];
        const feePerKB = exports.feePerKB = currency.ZEC('0.0001');
        const coinInfo = exports.coinInfo = (0, _coininfo2.default)(name);
        const address = exports.address = {
            versions: {
                p2pkh: coinInfo.versions.public,
                p2sh: coinInfo.versions.scripthash
            },
            isP2PKH(string) {
                const payload = _bs58check2.default.decodeUnsafe(string);
                return payload && payload.length === 22 && payload.readUInt16BE(0) === address.versions.p2pkh;
            },
            isP2SH(string) {
                const payload = _bs58check2.default.decodeUnsafe(string);
                return payload && payload.length === 22 && payload.readUInt16BE(0) === address.versions.p2sh;
            },
            validate(string) {
                const payload = _bs58check2.default.decodeUnsafe(string);
                return payload && payload.length === 22 && [address.versions.p2pkh, address.versions.p2sh].includes(payload.readUInt16BE(0));
            }
        };
        const bip44 = exports.bip44 = _bip44Constants2.default[displayUnit];
        const keys = exports.keys = {
            encodePublic(publicKey) {
                const sha = _crypto2.default.createHash('sha256').update(publicKey).digest();
                const pubKeyHash = _crypto2.default.createHash('rmd160').update(sha).digest();
                const payload = Buffer.allocUnsafe(22);
                payload.writeUInt16BE(address.versions.p2pkh);
                pubKeyHash.copy(payload, 2);
                return _bs58check2.default.encode(payload);
            }
        };
        const blockExplorer = exports.blockExplorer = {
            addressUrl: address => `https://explorer.zcha.in/accounts/${address}/`,
            txUrl: txId => `https://explorer.zcha.in/transactions/${txId}/`
        };

    }, {
        "34": 34,
        "51": 51,
        "undefined": undefined
    }],
    33: [function(require, module, exports) {
        'use strict';
        Object.defineProperty(exports, "__esModule", {
            value: true
        });
        exports.default = conversion;
        var _assert = require('assert');
        var _isNumberUnit = require(35);
        var _isNumberUnit2 = _interopRequireDefault(_isNumberUnit);

        function _interopRequireDefault(obj) {
            return obj && obj.__esModule ? obj : {
                default: obj
            };
        }

        function conversion(numberUnit1, numberUnit2) {
            (0, _assert.ok)((0, _isNumberUnit2.default)(numberUnit1) && (0, _isNumberUnit2.default)(numberUnit2), 'Must pass in an instance of NumberUnit for both parameters.');
            const ut1 = numberUnit1.unitType;
            const ut2 = numberUnit2.unitType;
            let converter = function converter(someNumberUnit) {
                (0, _assert.ok)((0, _isNumberUnit2.default)(someNumberUnit), 'Must pass in an instance of a NumberUnit to convert.');
                const ut = someNumberUnit.unitType;
                (0, _assert.ok)(ut === ut1 || ut === ut2, `${ut.path} should be either ${ut1.path} or ${ut2.path}`);
                if (ut === ut1) {
                    let normalizeNum = someNumberUnit.to(numberUnit1.unitName);
                    let newNumber = normalizeNum._number.times(numberUnit2._number).div(numberUnit1._number);
                    return ut2[numberUnit2.unitName](newNumber).toBase().round().to(numberUnit2.unitName);
                } else if (ut === ut2) {
                    let normalizeNum = someNumberUnit.to(numberUnit2.unitName);
                    let newNumber = normalizeNum._number.times(numberUnit1._number).div(numberUnit2._number);
                    return ut1[numberUnit1.unitName](newNumber).toBase().round().to(numberUnit1.unitName);
                }
            };
            return converter;
        }

    }, {
        "35": 35,
        "undefined": undefined
    }],
    34: [function(require, module, exports) {
        'use strict';
        Object.defineProperty(exports, "__esModule", {
            value: true
        });
        exports.UnitType = exports.conversion = exports.isNumberUnit = undefined;
        var _numberUnit = require(36);
        var _numberUnit2 = _interopRequireDefault(_numberUnit);
        var _isNumberUnit2 = require(35);
        var _isNumberUnit3 = _interopRequireDefault(_isNumberUnit2);
        var _conversion2 = require(33);
        var _conversion3 = _interopRequireDefault(_conversion2);
        var _unitType = require(37);
        var _unitType2 = _interopRequireDefault(_unitType);

        function _interopRequireDefault(obj) {
            return obj && obj.__esModule ? obj : {
                default: obj
            };
        }
        exports.default = _numberUnit2.default;
        const isNumberUnit = exports.isNumberUnit = _isNumberUnit3.default;
        const conversion = exports.conversion = _conversion3.default;
        const UnitType = exports.UnitType = _unitType2.default;

    }, {
        "33": 33,
        "35": 35,
        "36": 36,
        "37": 37
    }],
    35: [function(require, module, exports) {
        'use strict';
        Object.defineProperty(exports, "__esModule", {
            value: true
        });
        exports.default = isNumberUnit;

        function isNumberUnit(obj) {
            if (typeof obj !== 'object') return false;
            return '_number' in obj && 'unit' in obj && 'unitType' in obj && 'baseUnit' in obj && 'rootUnitType' in obj;
        }

    }, {}],
    36: [function(require, module, exports) {
        'use strict';
        Object.defineProperty(exports, "__esModule", {
            value: true
        });
        exports.default = undefined;
        var _class, _temp;
        var _assert = require('assert');
        var _bignumber = require('bignumber.js');
        var _bignumber2 = _interopRequireDefault(_bignumber);
        var _isNumberUnit2 = require(35);
        var _isNumberUnit3 = _interopRequireDefault(_isNumberUnit2);

        function _interopRequireDefault(obj) {
            return obj && obj.__esModule ? obj : {
                default: obj
            };
        }
        _bignumber2.default.config({
            ERRORS: false,
            DECIMAL_PLACES: 20,
            precision: 20
        });
        let NumberUnit = (_temp = _class = class NumberUnit {
            static create(number, unit, options) {
                return new NumberUnit(number, unit, options);
            }
            constructor(number, unit) {
                let {
                    strict
                } = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
                this._number = new _bignumber2.default(number);
                this.unit = unit;
                this.unitType = unit.unitType;
                this.baseUnit = unit.unitType.baseUnit;
                this.defaultUnit = unit.unitType.defaultUnit;
                this.rootUnitType = unit.unitType.rootUnitType;
                this.unitName = this.unit.unitName;
                this.strict = strict == null ? NumberUnit.strict : strict;
            }
            abs() {
                return new NumberUnit(this._number.abs(), this.unit, {
                    strict: this.strict
                });
            }
            add(number) {
                number = this._coerceToNumberUnit(number);
                let base = number.toBase();
                let thisBase = this.toBase();
                let sumBase = base._number.plus(thisBase._number);
                return new NumberUnit(sumBase, this.baseUnit).to(this.unit);
            }
            clampLowerZero() {
                const zero = new NumberUnit(0, this.unit);
                if (this.gte(zero)) return this;
                else return zero;
            }
            clone() {
                return new NumberUnit(this._number, this.unit);
            }
            equals(number) {
                let base = number.toBase();
                let thisBase = this.toBase();
                return base._number.equals(thisBase._number);
            }
            gt(number) {
                let base = number.toBase();
                let thisBase = this.toBase();
                return thisBase._number.gt(base._number);
            }
            gte(number) {
                let base = number.toBase();
                let thisBase = this.toBase();
                return thisBase._number.gte(base._number);
            }
            inspect() {
                return `<NumberUnit: ${this.toString()} >`;
            }
            isZero() {
                return this.toNumber() === 0;
            }
            lt(number) {
                let base = number.toBase();
                let thisBase = this.toBase();
                return thisBase._number.lt(base._number);
            }
            lte(number) {
                let base = number.toBase();
                let thisBase = this.toBase();
                return thisBase._number.lte(base._number);
            }
            mul(num) {
                const base = this.toBase();
                base._number = base._number.mul(num).round();
                return base.to(this.unit);
            }
            floor() {
                return new NumberUnit(this._number.floor(), this.unit, {
                    strict: this.strict
                });
            }
            round() {
                return new NumberUnit(this._number.round(), this.unit, {
                    strict: this.strict
                });
            }
            ceil() {
                return new NumberUnit(this._number.ceil(), this.unit, {
                    strict: this.strict
                });
            }
            toFixed(x, rm) {
                if (rm === 'floor') rm = 3;
                if (rm === 'ceil') rm = 2;
                return new NumberUnit(this._number.toFixed(x, rm), this.unit, {
                    strict: this.strict
                });
            }
            negate() {
                return new NumberUnit(this._number.neg(), this.unit, {
                    strict: this.strict
                });
            }
            subtract(number) {
                number = this._coerceToNumberUnit(number);
                let base = number.toBase();
                let thisBase = this.toBase();
                let sumBase = thisBase._number.minus(base._number);
                return new NumberUnit(sumBase, this.baseUnit).to(this.unit);
            }
            toBase() {
                if (this.unit.multiplier === 1) {
                    return this.clone();
                }
                let newNumber = this._number.times(this.unit.multiplier);
                return new NumberUnit(newNumber, this.baseUnit);
            }
            toDefault() {
                return this.to(this.defaultUnit);
            }
            to(unit, conversionUnit) {
                if (typeof unit === 'string') {
                    unit = this.unitType.units[unit];
                }(0, _assert.ok)(typeof unit === 'string' || typeof unit === 'function', 'Unit must be either a string or a function from UnitType.');
                (0, _assert.strictEqual)(this.rootUnitType, unit.rootUnitType, `Incompatible root unit types: ${this.rootUnitType.label} and ${unit.rootUnitType.label}`);
                if (this.unit.unitType !== unit.unitType) {
                    if (!conversionUnit) throw new Error('Incompatible unit types. Must specify a conversion.');
                    if (typeof conversionUnit !== 'function') {
                        if (this.unitType !== conversionUnit.from.unitType) throw new Error('Conversion unit from is of different type.');
                        let normalizeNum = this.to(this.unitType[conversionUnit.fromUnit]);
                        let newNumber = normalizeNum._number.times(conversionUnit.toValue).div(conversionUnit.fromValue);
                        return new NumberUnit(newNumber, conversionUnit.to.unitType[conversionUnit.toUnit]);
                    } else {
                        return conversionUnit(this);
                    }
                } else {
                    var base = this.toBase();
                    let newNumber = base._number.div(unit.multiplier);
                    return new NumberUnit(newNumber, unit);
                }
            }
            toJSON() {
                return {
                    value: this._number.toString(),
                    unit: this.unitName,
                    unitType: this.unitType.path,
                    type: 'NumberUnit'
                };
            }
            toNumber() {
                return this._number.toNumber();
            }
            toString() {
                let {
                    unit = true, format = undefined
                } = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
                if (!format) {
                    return this._number.toString() + (unit ? ' ' + this.unitName : '');
                } else {
                    return format(this._number, this.unit);
                }
            }
            valueOf() {
                return this.toDefault().toNumber();
            }
            get value() {
                return this.toString();
            }
            get isNegative() {
                return this._number.isNegative();
            }
            _coerceToNumberUnit(number) {
                let isNU = NumberUnit.isNumberUnit(number);
                if (!isNU && this.strict) throw new Error("Strict mode: can't perform operation on anything other than instance of NumberUnit");
                if (isNU) return number;
                else return new NumberUnit(number, this.unit);
            }
        }, _class.isNumberUnit = _isNumberUnit3.default, _class.strict = false, _temp);
        exports.default = NumberUnit;

    }, {
        "35": 35,
        "undefined": undefined
    }],
    37: [function(require, module, exports) {
        'use strict';
        Object.defineProperty(exports, "__esModule", {
            value: true
        });
        exports.default = undefined;
        var _assert = require('assert');
        var _assert2 = _interopRequireDefault(_assert);
        var _unit = require(38);
        var Unit = _interopRequireWildcard(_unit);

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

        function _interopRequireDefault(obj) {
            return obj && obj.__esModule ? obj : {
                default: obj
            };
        }
        let UnitType = class UnitType {
            static create(label, parent, definitions, defaultUnit) {
                return new UnitType(label, parent, definitions, defaultUnit);
            }
            constructor(label, parent, definitions, defaultUnit) {
                (0, _assert2.default)(label, 'UnitType:constructor(): Must specify a unit type label.');
                (0, _assert2.default)(parent ? parent instanceof UnitType : true, 'UnitType:constructor(): Parent unit must be of type Unit or null.');
                this.label = label;
                this.path = parent ? parent.path + '/' + label : label;
                this.rootUnitType = parent ? parent.rootUnitType : this;
                if (definitions) {
                    (0, _assert2.default)(defaultUnit, 'if unit definitions are defined, a defaultUnit must be defined');
                    this._applyDefinitions(definitions, defaultUnit);
                }
            }
            _applyDefinitions(definitions, defaultUnit) {
                this.units = {};
                Object.keys(definitions).forEach(key => {
                    this.units[key] = Unit.create(this, key, definitions[key]);
                    this[key] = this.units[key];
                });
                let baseUnits = Object.keys(this.units).filter(unit => this.units[unit].multiplier === 1);
                this.baseUnit = baseUnits ? baseUnits[0] : null;
                (0, _assert2.default)(this.baseUnit, `UnitType.create(${this.label}): At least one unit must have a multiplier of 1 (power of 0).`);
                this.baseUnit = this.units[this.baseUnit];
                this.defaultUnit = this.units[defaultUnit];
                (0, _assert2.default)(this.defaultUnit, 'Incorrect default unit key set. Mispelling on default unit?');
            }
            inspect() {
                return this.toString();
            }
            parse(str) {
                _assert2.default.strictEqual(typeof str, 'string');
                let [amount, unit] = str.split(' ');
                (0, _assert2.default)(unit, 'Number unit string not proper format. Should be number and unit.');
                (0, _assert2.default)(this.units[unit], 'Unit not found.');
                return this.units[unit](amount);
            }
            toString() {
                return this.path;
            }
            get ZERO() {
                return this.defaultUnit(0);
            }
        };
        exports.default = UnitType;

    }, {
        "38": 38,
        "undefined": undefined
    }],
    38: [function(require, module, exports) {
        'use strict';
        Object.defineProperty(exports, "__esModule", {
            value: true
        });
        exports.create = create;
        var _numberUnit = require(36);
        var _numberUnit2 = _interopRequireDefault(_numberUnit);
        var _isNumberUnit = require(35);
        var _isNumberUnit2 = _interopRequireDefault(_isNumberUnit);

        function _interopRequireDefault(obj) {
            return obj && obj.__esModule ? obj : {
                default: obj
            };
        }

        function create(unitType, name, power) {
            let numberUnitCreator = val => {
                if ((0, _isNumberUnit2.default)(val)) {
                    return val.to(numberUnitCreator);
                } else {
                    return _numberUnit2.default.create(val, numberUnitCreator);
                }
            };
            numberUnitCreator.unitName = name;
            numberUnitCreator.power = power;
            numberUnitCreator.multiplier = Math.pow(10, power);
            numberUnitCreator.unitType = unitType;
            numberUnitCreator.rootUnitType = unitType.rootUnitType;
            numberUnitCreator.toJSON = function() {
                return {
                    unitName: numberUnitCreator.unitName,
                    multiplier: numberUnitCreator.multiplier,
                    unitType: numberUnitCreator.unitType.path,
                    rootUnitType: numberUnitCreator.rootUnitType
                };
            };
            numberUnitCreator.inspect = function() {
                return numberUnitCreator.toJSON();
            };
            numberUnitCreator.toString = function() {
                return numberUnitCreator.unitName;
            };
            return numberUnitCreator;
        }

    }, {
        "35": 35,
        "36": 36
    }],
    39: [function(require, module, exports) {
        'use strict';
        Object.defineProperty(exports, "__esModule", {
            value: true
        });
        exports.HMAC = HMAC;
        exports.KDF = KDF;
        exports.getMetadataId = getMetadataId;
        exports.Encrypt = Encrypt;
        exports.Decrypt = Decrypt;
        var _crypto = require('crypto');
        var _crypto2 = _interopRequireDefault(_crypto);
        var _secretBox = require('secret-box');
        var _secretBox2 = _interopRequireDefault(_secretBox);
        var _bitcoinSeed = require('bitcoin-seed');
        var bitcoinSeed = _interopRequireWildcard(_bitcoinSeed);
        var _bip = require(41);
        var _exodusPurpose = require(68);
        var _exodusPurpose2 = _interopRequireDefault(_exodusPurpose);

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

        function _interopRequireDefault(obj) {
            return obj && obj.__esModule ? obj : {
                default: obj
            };
        }

        function HMAC(buffer, secret) {
            return _crypto2.default.createHmac('sha256', secret).update(buffer).digest();
        }

        function KDF(buffer, salt, iterations) {
            iterations = iterations || 512;
            return _crypto2.default.pbkdf2Sync(buffer, salt, iterations, 32, 'sha1');
        }

        function getMetadataId(entropy) {
            const hdkey = (0, _bip.fromMasterSeed)(bitcoinSeed.fromEntropy(entropy).seed);
            return hdkey.derive(`m/${_exodusPurpose2.default}'/1'/1`, 'backup-key').publicKey;
        }

        function Encrypt(buffer, key) {
            return _secretBox2.default.encrypt(buffer, key, {
                n: Math.pow(2, 16)
            });
        }

        function Decrypt(encrypted, key) {
            return _secretBox2.default.decrypt(encrypted, key);
        }

    }, {
        "41": 41,
        "68": 68,
        "undefined": undefined
    }],
    40: [function(require, module, exports) {
        'use strict';
        Object.defineProperty(exports, "__esModule", {
            value: true
        });
        let PUT = (() => {
            var _ref = _asyncToGenerator(function*(url, params) {
                const resp = yield(0, _nodeFetch2.default)(url, {
                    method: 'PUT',
                    headers: {
                        'Accept': 'application/json, text/plain, */*',
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(params)
                });
                return resp.json();
            });
            return function PUT(_x, _x2) {
                return _ref.apply(this, arguments);
            };
        })();
        var _assert = require('assert');
        var _assert2 = _interopRequireDefault(_assert);
        var _bip = require('bip39');
        var _bip2 = _interopRequireDefault(_bip);
        var _crypto = require(39);
        var crypto = _interopRequireWildcard(_crypto);
        var _download = require('download');
        var _download2 = _interopRequireDefault(_download);
        var _nodeFetch = require('node-fetch');
        var _nodeFetch2 = _interopRequireDefault(_nodeFetch);
        var _formData = require('form-data');
        var _formData2 = _interopRequireDefault(_formData);
        var _fsExtra = require('fs-extra');
        var _fsExtra2 = _interopRequireDefault(_fsExtra);
        var _os = require('os');
        var _os2 = _interopRequireDefault(_os);
        var _path = require('path');
        var _path2 = _interopRequireDefault(_path);
        var _appConfig = require(4);
        var _restoreLink = require('@exodus/restore-link');
        var _restoreLink2 = _interopRequireDefault(_restoreLink);
        var _wallet = require(104);
        var _wallet2 = _interopRequireDefault(_wallet);

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

        function _interopRequireDefault(obj) {
            return obj && obj.__esModule ? obj : {
                default: obj
            };
        }

        function _asyncToGenerator(fn) {
            return function() {
                var gen = fn.apply(this, arguments);
                return new Promise(function(resolve, reject) {
                    function step(key, arg) {
                        try {
                            var info = gen[key](arg);
                            var value = info.value;
                        } catch (error) {
                            reject(error);
                            return;
                        }
                        if (info.done) {
                            resolve(value);
                        } else {
                            return Promise.resolve(value).then(function(value) {
                                step("next", value);
                            }, function(err) {
                                step("throw", err);
                            });
                        }
                    }
                    return step("next");
                });
            };
        }

        function concat(buffer, suffix) {
            if (typeof suffix === 'number') {
                (0, _assert2.default)(suffix >= 0 && suffix <= 255, 'suffix must be between 0 and 255');
                suffix = Buffer.from([suffix]);
            }
            return Buffer.concat([buffer, suffix]);
        }
        const TABLE_NAME = 'cdata';
        const backupBlobUrl = id => `https://exodusapp.blob.core.windows.net/${TABLE_NAME}/${id}`;
        let Client = class Client {
            constructor(url) {
                this.url = url;
            }
            create(wallet, passphrase, email) {
                var _this = this;
                return _asyncToGenerator(function*() {
                    if (!Buffer.isBuffer(passphrase)) passphrase = Buffer.from(passphrase);
                    const entropy = Buffer.from(_bip2.default.mnemonicToEntropy(wallet._seed.mnemonic.toString('utf8')), 'hex');
                    const H = crypto.HMAC(entropy, concat(passphrase, 1));
                    const Y = crypto.KDF(passphrase, H);
                    const saltParams = {
                        H: H.toString('base64'),
                        Y: Y.toString('base64'),
                        email
                    };
                    const res = yield PUT(_this.url + '/v1/salt', saltParams);
                    if (res.status !== 'success') throw res;
                    const salt = Buffer.from(res.data, 'base64');
                    if (salt.length !== 32) throw new Error('Expected 256 bit salt, got ' + res.data);
                    const combinedKey = crypto.KDF(passphrase, salt);
                    const s = crypto.Encrypt(entropy, combinedKey);
                    const params = {
                        H,
                        s,
                        e: Buffer.from(email, 'utf8')
                    };
                    const linkEnc = _restoreLink2.default.encode(params);
                    const emailParams = {
                        email,
                        link: linkEnc,
                        build: _appConfig.ENV_BUILD_NAME
                    };
                    PUT(_this.url + '/v1/email', emailParams).catch(console.error);
                    return {
                        params
                    };
                })();
            }
            backupWallet(wallet) {
                var _this2 = this;
                return _asyncToGenerator(function*() {
                    const entropy = Buffer.from(_bip2.default.mnemonicToEntropy(wallet._seed.mnemonic.toString('utf8')), 'hex');
                    const metadataId = crypto.getMetadataId(entropy);
                    const infoFile = wallet._walletPaths.infoFile;
                    const stats = yield _fsExtra2.default.lstat(infoFile);
                    const form = new _formData2.default();
                    form.append('file', _fsExtra2.default.createReadStream(infoFile), {
                        knownLength: stats.size
                    });
                    form.append('K', metadataId.toString('base64'));
                    const resp = yield(0, _nodeFetch2.default)(_this2.url + '/v1/backup', {
                        method: 'PUT',
                        body: form
                    });
                    const json = yield resp.json();
                    if (json.status !== 'success') throw json;
                })();
            }
            recoverEntropy(params, passphrase) {
                var _this3 = this;
                return _asyncToGenerator(function*() {
                    if (!Buffer.isBuffer(passphrase)) passphrase = Buffer.from(passphrase, 'utf8');
                    (0, _assert2.default)(Buffer.isBuffer(params.H), 'Expected Buffer params.H, got ' + params.H);
                    (0, _assert2.default)(Buffer.isBuffer(params.s), 'Expected Buffer params.s, got ' + params.s);
                    const Y = crypto.KDF(passphrase, params.H);
                    const saltParams = {
                        H: params.H.toString('base64'),
                        Y: Y.toString('base64')
                    };
                    const res = yield PUT(_this3.url + '/v1/salt', saltParams);
                    if (res.status !== 'success') throw res;
                    const salt = Buffer.from(res.data, 'base64');
                    if (salt.length !== 32) throw new Error('Expected 256 bit salt, got ' + res.data);
                    const combinedKey = crypto.KDF(passphrase, salt);
                    const entropy = crypto.Decrypt(params.s, combinedKey);
                    return entropy;
                })();
            }
            recoverWallet(passphrase, entropy, dest) {
                return _asyncToGenerator(function*() {
                    const infoFile = _path2.default.join(_os2.default.tmpdir(), 'exodus' + String(Date.now()));
                    try {
                        const metadataId = crypto.getMetadataId(entropy).toString('hex');
                        const url = backupBlobUrl(metadataId);
                        yield new Promise(function(resolve, reject) {
                            (0, _download2.default)(url).on('error', reject).pipe(_fsExtra2.default.createWriteStream(infoFile)).on('error', reject).on('finish', resolve);
                        });
                    } catch (e) {
                        if (e.statusCode === 404) {
                            const K = crypto.HMAC(entropy, concat(Buffer.from(passphrase), 2)).toString('hex');
                            const url = backupBlobUrl(K);
                            yield new Promise(function(resolve, reject) {
                                (0, _download2.default)(url).on('error', reject).pipe(_fsExtra2.default.createWriteStream(infoFile)).on('error', reject).on('finish', resolve);
                            });
                        } else {
                            throw e;
                        }
                    }
                    const wallet = yield _wallet2.default.createFromRecovery(dest, passphrase, entropy, infoFile);
                    yield _fsExtra2.default.remove(infoFile);
                    return wallet;
                })();
            }
            recoverWalletFromMnemonic(dest, mnemonic, mnemonicPassphrase) {
                return _asyncToGenerator(function*() {
                    const infoFile = _path2.default.join(_os2.default.tmpdir(), 'exodus' + String(Date.now()));
                    const entropy = Buffer.from(_bip2.default.mnemonicToEntropy(mnemonic), 'hex');
                    try {
                        const metadataId = crypto.getMetadataId(entropy).toString('hex');
                        const url = backupBlobUrl(metadataId);
                        yield new Promise(function(resolve, reject) {
                            (0, _download2.default)(url).on('error', reject).pipe(_fsExtra2.default.createWriteStream(infoFile)).on('error', reject).on('finish', resolve);
                        });
                    } catch (e) {
                        console.error('Error retriving info file (not fatal):');
                        console.error(e);
                    }
                    const wallet = yield _wallet2.default.createFromMnemonicRecoveryPhrase(dest, infoFile, mnemonic, mnemonicPassphrase);
                    yield _fsExtra2.default.remove(infoFile);
                    return wallet;
                })();
            }
        };
        Client.API_URL = _appConfig.EXODUS_SERVER;
        exports.default = Client;

    }, {
        "104": 104,
        "39": 39,
        "4": 4,
        "undefined": undefined
    }],
    41: [function(require, module, exports) {
        'use strict';
        Object.defineProperty(exports, "__esModule", {
            value: true
        });
        exports.default = exports.HARDENED_OFFSET = undefined;
        exports.fromMasterSeed = fromMasterSeed;
        var _assert = require('assert');
        var _assert2 = _interopRequireDefault(_assert);
        var _hdkey = require('hdkey');
        var _hdkey2 = _interopRequireDefault(_hdkey);
        var _assets = require(25);
        var _assets2 = _interopRequireDefault(_assets);

        function _interopRequireDefault(obj) {
            return obj && obj.__esModule ? obj : {
                default: obj
            };
        }
        const HARDENED_OFFSET = exports.HARDENED_OFFSET = _hdkey2.default.HARDENED_OFFSET;

        function fromMasterSeed() {
            return BIP32.create(_hdkey2.default.fromMasterSeed.apply(_hdkey2.default, arguments), 'master');
        }
        let BIP32 = class BIP32 {
            constructor(hdkey) {
                let tag = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
                let {
                    spendable = false, coin
                } = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
                this._hdkey = hdkey;
                this.coin = coin;
                this.tag = tag;
                if (coin)(0, _assert2.default)(typeof coin === 'string', `coin must be a string, not ${typeof coin}`);
                if (spendable) {
                    (0, _assert2.default)(coin, 'if spendable is set to true, then coin must be set');
                }
                this.isSpendable = spendable;
            }
            static create(hdkey, tag) {
                let {
                    spendable = false, coin
                } = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
                return new BIP32(hdkey, tag, {
                    spendable,
                    coin
                });
            }
            static fromJSON(jsonStrOrObj) {
                if (typeof strOrObj === 'string') jsonStrOrObj = JSON.parse(jsonStrOrObj);
                let hdkey = _hdkey2.default.fromJSON(jsonStrOrObj);
                let {
                    isSpendable,
                    tag,
                    coin
                } = jsonStrOrObj;
                return new BIP32(hdkey, tag, {
                    spendable: isSpendable,
                    coin
                });
            }
            static fromXPub(base58xpub) {
                let opts = {};
                let tag = 'tag-does-not-matter';
                if ((arguments.length <= 1 ? 0 : arguments.length - 1) === 1) opts = arguments.length <= 1 ? undefined : arguments[1];
                if ((arguments.length <= 1 ? 0 : arguments.length - 1) === 2) {
                    tag = arguments.length <= 1 ? undefined : arguments[1];
                    opts = arguments.length <= 2 ? undefined : arguments[2];
                }
                const hdkey = _hdkey2.default.fromExtendedKey(base58xpub);
                return new BIP32(hdkey, tag, opts);
            }
            derive(numOrPath, newTag) {
                let {
                    spendable = false, coin = this.coin
                } = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
                _assert2.default.strictEqual(typeof newTag, 'string', 'tag should be a string');
                if (typeof numOrPath === 'number') {
                    (0, _assert2.default)(!Number.isNaN(numOrPath), 'derive(): is passing number, verify not NaN');
                    return BIP32.create(this._hdkey.deriveChild(numOrPath), newTag, {
                        spendable,
                        coin
                    });
                } else if (typeof numOrPath === 'string') {
                    return BIP32.create(this._hdkey.derive(numOrPath), newTag, {
                        spendable,
                        coin
                    });
                } else {
                    throw new Error('derive(): Unknown type.');
                }
            }
            inspect() {
                let ret = this.toJSON();
                if (this.isSpendable) {
                    ret = Object.assign({}, ret, {
                        wif: this.privateEncoded,
                        address: this.publicAddress
                    });
                }
                return ret;
            }
            toJSON() {
                let json = this._hdkey.toJSON();
                json.tag = this.tag;
                json.coin = this.coin;
                json.isSpendable = this.isSpendable;
                return json;
            }
            toString() {
                return JSON.stringify(this.inspect(), null, 2);
            }
            get privateEncoded() {
                if (this.isSpendable && typeof this.coin === 'string') {
                    return _assets2.default[this.coin].keys.encodePrivate(this.privateKey);
                } else {
                    throw new Error('bip32.privateEncoded: not spendable');
                }
            }
            get privateKey() {
                return this._hdkey.privateKey;
            }
            get publicEncoded() {
                if (this.isSpendable && typeof this.coin === 'string') {
                    return _assets2.default[this.coin].keys.encodePublic(this.publicKey, this.privateKey);
                } else {
                    throw new Error('bip32.publicEncoded: not spendable');
                }
            }
            get publicKey() {
                return this._hdkey.publicKey;
            }
            get xPub() {
                return this._hdkey.publicExtendedKey;
            }
        };
        exports.default = BIP32;

    }, {
        "25": 25,
        "undefined": undefined
    }],
    42: [function(require, module, exports) {
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
    43: [function(require, module, exports) {
        'use strict';
        Object.defineProperty(exports, "__esModule", {
            value: true
        });
        var _base = require('bs58check/base');
        var _base2 = _interopRequireDefault(_base);
        var _blakeHash = require('blake-hash');
        var _blakeHash2 = _interopRequireDefault(_blakeHash);

        function _interopRequireDefault(obj) {
            return obj && obj.__esModule ? obj : {
                default: obj
            };
        }

        function blake256x2(buffer) {
            buffer = (0, _blakeHash2.default)('blake256').update(buffer).digest();
            return (0, _blakeHash2.default)('blake256').update(buffer).digest();
        }
        exports.default = (0, _base2.default)(blake256x2);

    }, {
        "undefined": undefined
    }],
    44: [function(require, module, exports) {
        'use strict';
        var assert = require('assert');
        var opcodes = require(47);

        function verifuint(value, max) {
            assert(typeof value === 'number', 'cannot write a non-number as a number');
            assert(value >= 0, 'specified a negative value for writing an unsigned value');
            assert(value <= max, 'value is larger than maximum value for type');
            assert(Math.floor(value) === value, 'value has a fractional component');
        }

        function pushDataSize(i) {
            return i < opcodes.OP_PUSHDATA1 ? 1 : i < 0xff ? 2 : i < 0xffff ? 3 : 5;
        }

        function readPushDataInt(buffer, offset) {
            var opcode = buffer.readUInt8(offset);
            var number, size;
            if (opcode < opcodes.OP_PUSHDATA1) {
                number = opcode;
                size = 1;
            } else if (opcode === opcodes.OP_PUSHDATA1) {
                number = buffer.readUInt8(offset + 1);
                size = 2;
            } else if (opcode === opcodes.OP_PUSHDATA2) {
                number = buffer.readUInt16LE(offset + 1);
                size = 3;
            } else {
                assert.equal(opcode, opcodes.OP_PUSHDATA4, 'Unexpected opcode');
                number = buffer.readUInt32LE(offset + 1);
                size = 5;
            }
            return {
                opcode: opcode,
                number: number,
                size: size
            };
        }

        function readUInt64LE(buffer, offset) {
            var a = buffer.readUInt32LE(offset);
            var b = buffer.readUInt32LE(offset + 4);
            b *= 0x100000000;
            verifuint(b + a, 0x001fffffffffffff);
            return b + a;
        }

        function readVarInt(buffer, offset) {
            var t = buffer.readUInt8(offset);
            var number, size;
            if (t < 253) {
                number = t;
                size = 1;
            } else if (t < 254) {
                number = buffer.readUInt16LE(offset + 1);
                size = 3;
            } else if (t < 255) {
                number = buffer.readUInt32LE(offset + 1);
                size = 5;
            } else {
                number = readUInt64LE(buffer, offset + 1);
                size = 9;
            }
            return {
                number: number,
                size: size
            };
        }

        function writePushDataInt(buffer, number, offset) {
            var size = pushDataSize(number);
            if (size === 1) {
                buffer.writeUInt8(number, offset);
            } else if (size === 2) {
                buffer.writeUInt8(opcodes.OP_PUSHDATA1, offset);
                buffer.writeUInt8(number, offset + 1);
            } else if (size === 3) {
                buffer.writeUInt8(opcodes.OP_PUSHDATA2, offset);
                buffer.writeUInt16LE(number, offset + 1);
            } else {
                buffer.writeUInt8(opcodes.OP_PUSHDATA4, offset);
                buffer.writeUInt32LE(number, offset + 1);
            }
            return size;
        }

        function writeUInt64LE(buffer, value, offset) {
            verifuint(value, 0x001fffffffffffff);
            buffer.writeInt32LE(value & -1, offset);
            buffer.writeUInt32LE(Math.floor(value / 0x100000000), offset + 4);
        }

        function varIntSize(i) {
            return i < 253 ? 1 : i < 0x10000 ? 3 : i < 0x100000000 ? 5 : 9;
        }

        function writeVarInt(buffer, number, offset) {
            var size = varIntSize(number);
            if (size === 1) {
                buffer.writeUInt8(number, offset);
            } else if (size === 3) {
                buffer.writeUInt8(253, offset);
                buffer.writeUInt16LE(number, offset + 1);
            } else if (size === 5) {
                buffer.writeUInt8(254, offset);
                buffer.writeUInt32LE(number, offset + 1);
            } else {
                buffer.writeUInt8(255, offset);
                writeUInt64LE(buffer, number, offset + 1);
            }
            return size;
        }
        module.exports = {
            pushDataSize: pushDataSize,
            readPushDataInt: readPushDataInt,
            readUInt64LE: readUInt64LE,
            readVarInt: readVarInt,
            varIntSize: varIntSize,
            writePushDataInt: writePushDataInt,
            writeUInt64LE: writeUInt64LE,
            writeVarInt: writeVarInt
        };

    }, {
        "47": 47,
        "undefined": undefined
    }],
    45: [function(require, module, exports) {
        'use strict';
        var crypto = require('crypto');

        function hash160(buffer) {
            return ripemd160(sha256(buffer));
        }

        function hash256(buffer) {
            return sha256(sha256(buffer));
        }

        function ripemd160(buffer) {
            return crypto.createHash('rmd160').update(buffer).digest();
        }

        function sha256(buffer) {
            return crypto.createHash('sha256').update(buffer).digest();
        }
        module.exports = {
            ripemd160: ripemd160,
            sha256: sha256,
            hash160: hash160,
            hash256: hash256
        };

    }, {
        "undefined": undefined
    }],
    46: [function(require, module, exports) {
        'use strict';
        module.exports = {
            scripts: require(49),
            Script: require(48),
            Transaction: require(50)
        };

    }, {
        "48": 48,
        "49": 49,
        "50": 50
    }],
    47: [function(require, module, exports) {
        "use strict";
        module.exports = {
            OP_FALSE: 0,
            OP_0: 0,
            OP_PUSHDATA1: 76,
            OP_PUSHDATA2: 77,
            OP_PUSHDATA4: 78,
            OP_1NEGATE: 79,
            OP_RESERVED: 80,
            OP_1: 81,
            OP_TRUE: 81,
            OP_2: 82,
            OP_3: 83,
            OP_4: 84,
            OP_5: 85,
            OP_6: 86,
            OP_7: 87,
            OP_8: 88,
            OP_9: 89,
            OP_10: 90,
            OP_11: 91,
            OP_12: 92,
            OP_13: 93,
            OP_14: 94,
            OP_15: 95,
            OP_16: 96,
            OP_NOP: 97,
            OP_VER: 98,
            OP_IF: 99,
            OP_NOTIF: 100,
            OP_VERIF: 101,
            OP_VERNOTIF: 102,
            OP_ELSE: 103,
            OP_ENDIF: 104,
            OP_VERIFY: 105,
            OP_RETURN: 106,
            OP_TOALTSTACK: 107,
            OP_FROMALTSTACK: 108,
            OP_2DROP: 109,
            OP_2DUP: 110,
            OP_3DUP: 111,
            OP_2OVER: 112,
            OP_2ROT: 113,
            OP_2SWAP: 114,
            OP_IFDUP: 115,
            OP_DEPTH: 116,
            OP_DROP: 117,
            OP_DUP: 118,
            OP_NIP: 119,
            OP_OVER: 120,
            OP_PICK: 121,
            OP_ROLL: 122,
            OP_ROT: 123,
            OP_SWAP: 124,
            OP_TUCK: 125,
            OP_CAT: 126,
            OP_SUBSTR: 127,
            OP_LEFT: 128,
            OP_RIGHT: 129,
            OP_SIZE: 130,
            OP_INVERT: 131,
            OP_AND: 132,
            OP_OR: 133,
            OP_XOR: 134,
            OP_EQUAL: 135,
            OP_EQUALVERIFY: 136,
            OP_RESERVED1: 137,
            OP_RESERVED2: 138,
            OP_1ADD: 139,
            OP_1SUB: 140,
            OP_2MUL: 141,
            OP_2DIV: 142,
            OP_NEGATE: 143,
            OP_ABS: 144,
            OP_NOT: 145,
            OP_0NOTEQUAL: 146,
            OP_ADD: 147,
            OP_SUB: 148,
            OP_MUL: 149,
            OP_DIV: 150,
            OP_MOD: 151,
            OP_LSHIFT: 152,
            OP_RSHIFT: 153,
            OP_BOOLAND: 154,
            OP_BOOLOR: 155,
            OP_NUMEQUAL: 156,
            OP_NUMEQUALVERIFY: 157,
            OP_NUMNOTEQUAL: 158,
            OP_LESSTHAN: 159,
            OP_GREATERTHAN: 160,
            OP_LESSTHANOREQUAL: 161,
            OP_GREATERTHANOREQUAL: 162,
            OP_MIN: 163,
            OP_MAX: 164,
            OP_WITHIN: 165,
            OP_RIPEMD160: 166,
            OP_SHA1: 167,
            OP_SHA256: 168,
            OP_HASH160: 169,
            OP_HASH256: 170,
            OP_CODESEPARATOR: 171,
            OP_CHECKSIG: 172,
            OP_CHECKSIGVERIFY: 173,
            OP_CHECKMULTISIG: 174,
            OP_CHECKMULTISIGVERIFY: 175,
            OP_NOP1: 176,
            OP_NOP2: 177,
            OP_NOP3: 178,
            OP_NOP4: 179,
            OP_NOP5: 180,
            OP_NOP6: 181,
            OP_NOP7: 182,
            OP_NOP8: 183,
            OP_NOP9: 184,
            OP_NOP10: 185,
            OP_PUBKEYHASH: 253,
            OP_PUBKEY: 254,
            OP_INVALIDOPCODE: 255
        };

    }, {}],
    48: [function(require, module, exports) {
        'use strict';
        var assert = require('assert');
        var bufferutils = require(44);
        var crypto = require(45);
        var opcodes = require(47);

        function Script(buffer, chunks) {
            assert(Buffer.isBuffer(buffer));
            assert(Array.isArray(chunks));
            this.buffer = buffer;
            this.chunks = chunks;
        }
        Script.fromASM = function(asm) {
            var strChunks = asm.split(' ');
            var chunks = strChunks.map(function(strChunk) {
                if (strChunk in opcodes) {
                    return opcodes[strChunk];
                } else {
                    return Buffer.from(strChunk, 'hex');
                }
            });
            return Script.fromChunks(chunks);
        };
        Script.fromBuffer = function(buffer) {
            var chunks = [];
            var i = 0;
            while (i < buffer.length) {
                var opcode = buffer.readUInt8(i);
                if (opcode > opcodes.OP_0 && opcode <= opcodes.OP_PUSHDATA4) {
                    var d = bufferutils.readPushDataInt(buffer, i);
                    i += d.size;
                    var data = buffer.slice(i, i + d.number);
                    i += d.number;
                    chunks.push(data);
                } else {
                    chunks.push(opcode);
                    i += 1;
                }
            }
            return new Script(buffer, chunks);
        };
        Script.fromChunks = function(chunks) {
            assert(Array.isArray(chunks));
            var bufferSize = chunks.reduce(function(accum, chunk) {
                if (Buffer.isBuffer(chunk)) {
                    return accum + bufferutils.pushDataSize(chunk.length) + chunk.length;
                }
                return accum + 1;
            }, 0.0);
            var buffer = Buffer.alloc(bufferSize);
            var offset = 0;
            chunks.forEach(function(chunk) {
                if (Buffer.isBuffer(chunk)) {
                    offset += bufferutils.writePushDataInt(buffer, chunk.length, offset);
                    chunk.copy(buffer, offset);
                    offset += chunk.length;
                } else {
                    buffer.writeUInt8(chunk, offset);
                    offset += 1;
                }
            });
            assert.equal(offset, buffer.length, 'Could not decode chunks');
            return new Script(buffer, chunks);
        };
        Script.fromHex = function(hex) {
            return Script.fromBuffer(Buffer.from(hex, 'hex'));
        };
        Script.EMPTY = Script.fromChunks([]);
        Script.prototype.getHash = function() {
            return crypto.hash160(this.buffer);
        };
        Script.prototype.without = function(needle) {
            return Script.fromChunks(this.chunks.filter(function(op) {
                return op !== needle;
            }));
        };
        var reverseOps = [];
        for (var op in opcodes) {
            var code = opcodes[op];
            reverseOps[code] = op;
        }
        Script.prototype.toASM = function() {
            return this.chunks.map(function(chunk) {
                if (Buffer.isBuffer(chunk)) {
                    return chunk.toString('hex');
                } else {
                    return reverseOps[chunk];
                }
            }).join(' ');
        };
        Script.prototype.toBuffer = function() {
            return this.buffer;
        };
        Script.prototype.toHex = function() {
            return this.toBuffer().toString('hex');
        };
        module.exports = Script;

    }, {
        "44": 44,
        "45": 45,
        "47": 47,
        "undefined": undefined
    }],
    49: [function(require, module, exports) {
        'use strict';
        var assert = require('assert');
        var Script = require(48);
        var ops = require(47);

        function pubKeyHashInput(signature, pubKey) {
            assert(Buffer.isBuffer(signature));
            return Script.fromChunks([signature, pubKey.toBuffer()]);
        }

        function pubKeyHashOutput(hash) {
            assert(Buffer.isBuffer(hash));
            return Script.fromChunks([ops.OP_DUP, ops.OP_HASH160, hash, ops.OP_EQUALVERIFY, ops.OP_CHECKSIG]);
        }

        function scriptHashOutput(hash) {
            assert(Buffer.isBuffer(hash));
            return Script.fromChunks([ops.OP_HASH160, hash, ops.OP_EQUAL]);
        }

        function witnessOutput(hash) {
            assert(Buffer.isBuffer(hash));
            return Script.fromChunks([ops.OP_0, hash]);
        }
        module.exports = {
            pubKeyHashInput,
            pubKeyHashOutput,
            scriptHashOutput,
            witnessOutput
        };

    }, {
        "47": 47,
        "48": 48,
        "undefined": undefined
    }],
    50: [function(require, module, exports) {
        'use strict';
        var assert = require('assert');
        var bufferutils = require(44);
        var crypto = require(45);
        var opcodes = require(47);
        var Script = require(48);

        function Transaction() {
            this.version = 1;
            this.locktime = 0;
            this.ins = [];
            this.outs = [];
        }
        Transaction.DEFAULT_SEQUENCE = 0xffffffff;
        Transaction.SIGHASH_ALL = 0x01;
        Transaction.SIGHASH_NONE = 0x02;
        Transaction.SIGHASH_SINGLE = 0x03;
        Transaction.SIGHASH_ANYONECANPAY = 0x80;
        Transaction.prototype.addInput = function(hash, index) {
            hash = Buffer.from(hash, 'hex');
            [].reverse.call(hash);
            assert(Buffer.isBuffer(hash));
            assert.equal(typeof index, 'number');
            assert.equal(hash.length, 32, 'Expected hash length of 32, got ' + hash.length);
            return this.ins.push({
                hash: hash,
                index: index,
                script: Script.EMPTY,
                sequence: Transaction.DEFAULT_SEQUENCE
            }) - 1;
        };
        Transaction.prototype.addOutput = function(scriptPubKey, value) {
            assert.equal(typeof value, 'number');
            assert(scriptPubKey instanceof Script);
            return this.outs.push({
                script: scriptPubKey,
                value: value
            }) - 1;
        };
        Transaction.prototype.toBuffer = function() {
            var txInSize = this.ins.reduce(function(a, x) {
                return a + (40 + bufferutils.varIntSize(x.script.buffer.length) + x.script.buffer.length);
            }, 0);
            var txOutSize = this.outs.reduce(function(a, x) {
                return a + (8 + bufferutils.varIntSize(x.script.buffer.length) + x.script.buffer.length);
            }, 0);
            var buffer = Buffer.alloc(8 + bufferutils.varIntSize(this.ins.length) + bufferutils.varIntSize(this.outs.length) + txInSize + txOutSize);
            var offset = 0;

            function writeSlice(slice) {
                slice.copy(buffer, offset);
                offset += slice.length;
            }

            function writeUInt32(i) {
                buffer.writeUInt32LE(i, offset);
                offset += 4;
            }

            function writeUInt64(i) {
                bufferutils.writeUInt64LE(buffer, i, offset);
                offset += 8;
            }

            function writeVarInt(i) {
                var n = bufferutils.writeVarInt(buffer, i, offset);
                offset += n;
            }
            writeUInt32(this.version);
            writeVarInt(this.ins.length);
            this.ins.forEach(function(txin) {
                writeSlice(txin.hash);
                writeUInt32(txin.index);
                writeVarInt(txin.script.buffer.length);
                writeSlice(txin.script.buffer);
                writeUInt32(txin.sequence);
            });
            writeVarInt(this.outs.length);
            this.outs.forEach(function(txout) {
                writeUInt64(txout.value);
                writeVarInt(txout.script.buffer.length);
                writeSlice(txout.script.buffer);
            });
            writeUInt32(this.locktime);
            return buffer;
        };
        Transaction.prototype.toHex = function() {
            return this.toBuffer().toString('hex');
        };
        Transaction.prototype.hashForSignature = function(inIndex, prevOutScript, hashType) {
            assert.equal(typeof inIndex, 'number');
            assert.equal(typeof hashType, 'number');
            assert(prevOutScript instanceof Script, 'prevOutScript type Script');
            assert(inIndex >= 0, 'Invalid vin index');
            assert(inIndex < this.ins.length, 'Invalid vin index');
            var txTmp = this.clone();
            var hashScript = prevOutScript.without(opcodes.OP_CODESEPARATOR);
            txTmp.ins.forEach(function(txin) {
                txin.script = Script.EMPTY;
            });
            txTmp.ins[inIndex].script = hashScript;
            var hashTypeModifier = hashType & 0x1f;
            if (hashTypeModifier === Transaction.SIGHASH_NONE) {
                assert(false, 'SIGHASH_NONE not yet supported');
            } else if (hashTypeModifier === Transaction.SIGHASH_SINGLE) {
                assert(false, 'SIGHASH_SINGLE not yet supported');
            }
            if (hashType & Transaction.SIGHASH_ANYONECANPAY) {
                assert(false, 'SIGHASH_ANYONECANPAY not yet supported');
            }
            var hashTypeBuffer = Buffer.alloc(4);
            hashTypeBuffer.writeInt32LE(hashType, 0);
            var buffer = Buffer.concat([txTmp.toBuffer(), hashTypeBuffer]);
            return crypto.hash256(buffer);
        };
        Transaction.prototype.getHash = function() {
            return crypto.hash256(this.toBuffer());
        };
        Transaction.prototype.getId = function() {
            return [].reverse.call(this.getHash());
        };
        Transaction.prototype.clone = function() {
            var newTx = new Transaction();
            newTx.version = this.version;
            newTx.locktime = this.locktime;
            newTx.ins = this.ins.map(function(txin) {
                return {
                    hash: txin.hash,
                    index: txin.index,
                    script: txin.script,
                    sequence: txin.sequence
                };
            });
            newTx.outs = this.outs.map(function(txout) {
                return {
                    script: txout.script,
                    value: txout.value
                };
            });
            return newTx;
        };
        Transaction.fromBuffer = function(buffer) {
            var offset = 0;

            function readSlice(n) {
                offset += n;
                return buffer.slice(offset - n, offset);
            }

            function readUInt32() {
                var i = buffer.readUInt32LE(offset);
                offset += 4;
                return i;
            }

            function readUInt64() {
                var i = bufferutils.readUInt64LE(buffer, offset);
                offset += 8;
                return i;
            }

            function readVarInt() {
                var vi = bufferutils.readVarInt(buffer, offset);
                offset += vi.size;
                return vi.number;
            }
            var tx = new Transaction();
            tx.version = readUInt32();
            var vinLen = readVarInt();
            for (var i = 0; i < vinLen; ++i) {
                var hash = readSlice(32);
                var vout = readUInt32();
                var scriptLen = readVarInt();
                var script = readSlice(scriptLen);
                var sequence = readUInt32();
                tx.ins.push({
                    hash: hash,
                    index: vout,
                    script: Script.fromBuffer(script),
                    sequence: sequence
                });
            }
            var voutLen = readVarInt();
            for (i = 0; i < voutLen; ++i) {
                var value = readUInt64();
                let scriptLen = readVarInt();
                let script = readSlice(scriptLen);
                tx.outs.push({
                    value: value,
                    script: Script.fromBuffer(script)
                });
            }
            tx.locktime = readUInt32();
            assert.equal(offset, buffer.length, 'Transaction has unexpected data');
            return tx;
        };
        Transaction.fromHex = function(hex) {
            return Transaction.fromBuffer(Buffer.from(hex, 'hex'));
        };
        Transaction.prototype.setInputScript = function(index, script) {
            this.ins[index].script = script;
        };
        module.exports = Transaction;

    }, {
        "44": 44,
        "45": 45,
        "47": 47,
        "48": 48,
        "undefined": undefined
    }],
    51: [function(require, module, exports) {
        'use strict';
        Object.defineProperty(exports, "__esModule", {
            value: true
        });
        exports.fiatCurrency = exports.cryptoCurrency = exports.currency = undefined;
        var _aureus = require(34);
        const currency = exports.currency = _aureus.UnitType.create('currency');
        const cryptoCurrency = exports.cryptoCurrency = _aureus.UnitType.create('crypto-currency', currency);
        const fiatCurrency = exports.fiatCurrency = _aureus.UnitType.create('fiat', currency);

    }, {
        "34": 34
    }],
    52: [function(require, module, exports) {
        'use strict';
        Object.defineProperty(exports, "__esModule", {
            value: true
        });
        exports.currency2buffer = currency2buffer;
        var _ethereumjsUtil = require('ethereumjs-util');

        function currency2buffer(value) {
            const hexValue = value.toBase()._number.toString(16);
            if (hexValue.includes('.')) {
                throw new RangeError(`${value.toBase().toString()} can not be converted to Buffer`);
            }
            return Buffer.from((0, _ethereumjsUtil.padToEven)(hexValue), 'hex');
        }

    }, {
        "undefined": undefined
    }],
    53: [function(require, module, exports) {
        'use strict';
        Object.defineProperty(exports, "__esModule", {
            value: true
        });
        exports.default = dateStr;

        function dateStr(date) {
            date = date || new Date();
            const year = date.getFullYear().toString();
            const month = ('0' + (1 + date.getMonth())).slice(-2);
            const day = ('0' + date.getDate()).slice(-2);
            const hour = ('0' + date.getHours()).slice(-2);
            const minute = ('0' + date.getMinutes()).slice(-2);
            const second = ('0' + date.getSeconds()).slice(-2);
            return `${year}-${month}-${day}_${hour}-${minute}-${second}`;
        }

    }, {}],
    54: [function(require, module, exports) {
        'use strict';
        Object.defineProperty(exports, "__esModule", {
            value: true
        });
        exports.createClient = createClient;
        exports.createClientMethod = createClientMethod;
        var _electronIpcBroadcast = require('electron-ipc-broadcast');
        var _electronIpcBroadcast2 = _interopRequireDefault(_electronIpcBroadcast);
        var _errorToObject = require(58);
        var _shared = require(56);

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
        "56": 56,
        "58": 58,
        "undefined": undefined
    }],
    55: [function(require, module, exports) {
        'use strict';
        Object.defineProperty(exports, "__esModule", {
            value: true
        });
        exports.createServer = createServer;
        var _aw = require('aw');
        var _aw2 = _interopRequireDefault(_aw);
        var _electronIpcBroadcast = require('electron-ipc-broadcast');
        var _electronIpcBroadcast2 = _interopRequireDefault(_electronIpcBroadcast);
        var _errorToObject = require(58);
        var _shared = require(56);

        function _interopRequireDefault(obj) {
            return obj && obj.__esModule ? obj : {
                default: obj
            };
        }

        function _asyncToGenerator(fn) {
            return function() {
                var gen = fn.apply(this, arguments);
                return new Promise(function(resolve, reject) {
                    function step(key, arg) {
                        try {
                            var info = gen[key](arg);
                            var value = info.value;
                        } catch (error) {
                            reject(error);
                            return;
                        }
                        if (info.done) {
                            resolve(value);
                        } else {
                            return Promise.resolve(value).then(function(value) {
                                step("next", value);
                            }, function(err) {
                                step("throw", err);
                            });
                        }
                    }
                    return step("next");
                });
            };
        }
        const ipc = process.type === 'renderer' ? require('electron').ipcRenderer : require('electron').ipcMain;

        function createServer(name, obj) {
            let getErrRes = (() => {
                var _ref3 = _asyncToGenerator(function*(func, args) {
                    if (typeof obj[func] === 'function') {
                        return (0, _aw2.default)({
                            context: obj
                        })(Reflect.apply)(obj[func], obj, args);
                    }
                    try {
                        return [null, obj[func]];
                    } catch (err) {
                        return [err];
                    }
                });
                return function getErrRes(_x3, _x4) {
                    return _ref3.apply(this, arguments);
                };
            })();
            const listenChannel = `${_shared.CHANNEL_PREFIX}:${name}:call`;
            const listener = (() => {
                var _ref2 = _asyncToGenerator(function*(event, _ref) {
                    let {
                        payload
                    } = _ref;
                    const {
                        func,
                        args,
                        token
                    } = payload;
                    const [err, res] = yield getErrRes(func, args);
                    const serr = err ? (0, _errorToObject.toObject)(err) : null;
                    (0, _electronIpcBroadcast2.default)(`${_shared.CHANNEL_PREFIX}:${name}:response:${token}`, [serr, res]);
                });
                return function listener(_x, _x2) {
                    return _ref2.apply(this, arguments);
                };
            })();
            ipc.on(listenChannel, listener);
            return {
                stop: () => ipc.removeListener(listenChannel, listener)
            };
        }

    }, {
        "56": 56,
        "58": 58,
        "undefined": undefined
    }],
    56: [function(require, module, exports) {
        'use strict';
        Object.defineProperty(exports, "__esModule", {
            value: true
        });
        const CHANNEL_PREFIX = exports.CHANNEL_PREFIX = 'electron-rpc-broadcast';

    }, {}],
    57: [function(require, module, exports) {
        'use strict';
        Object.defineProperty(exports, "__esModule", {
            value: true
        });
        exports.backupDir = backupDir;
        exports.dataDir = dataDir;
        exports.desktopDir = desktopDir;
        exports.exportsDir = exportsDir;
        exports.walletDir = walletDir;
        exports.walletBackupDir = walletBackupDir;
        var _isElectronRenderer = require('is-electron-renderer');
        var _isElectronRenderer2 = _interopRequireDefault(_isElectronRenderer);
        var _ospath = require('ospath');
        var _ospath2 = _interopRequireDefault(_ospath);
        var _path = require('path');
        var _path2 = _interopRequireDefault(_path);
        var _paths = require(6);

        function _interopRequireDefault(obj) {
            return obj && obj.__esModule ? obj : {
                default: obj
            };
        }

        function backupDir() {
            return _path2.default.join(dataDir(), 'backups');
        }

        function dataDir() {
            if (typeof process.type === 'undefined') {
                return _path2.default.join(_ospath2.default.data(), 'exodus');
            }
            const {
                app,
                remote
            } = require('electron');
            if (_isElectronRenderer2.default) {
                return remote.app.getPath('userData');
            } else {
                return app.getPath('userData');
            }
        }

        function desktopDir() {
            const {
                app,
                remote
            } = require('electron');
            if (_isElectronRenderer2.default) {
                return remote.app.getPath('desktop');
            } else {
                return app.getPath('desktop');
            }
        }

        function exportsDir() {
            const dir = global.EXPORTS_DIR || _path2.default.join(desktopDir(), 'exodus-exports');
            return dir;
        }

        function walletDir() {
            return _path2.default.join(dataDir(), _paths.WALLET_DIR);
        }

        function walletBackupDir() {
            return _path2.default.join(backupDir(), 'wallet');
        }

    }, {
        "6": 6,
        "undefined": undefined
    }],
    58: [function(require, module, exports) {
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
    59: [function(require, module, exports) {
        'use strict';
        Object.defineProperty(exports, "__esModule", {
            value: true
        });
        exports.estimateGas = exports.sendRawTransaction = exports.getCode = exports.getTransactionCount = exports.gasPrice = exports.getTransactionReceipt = exports.fetchTxlist = exports.fetchBalance = undefined;
        let request = (() => {
            var _ref = _asyncToGenerator(function*(url) {
                let params = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
                let responseAs = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'text';
                const query = Object.keys(params).map(function(key) {
                    return `${key}=${params[key]}`;
                }).join('&');
                const response = yield(0, _nodeFetch2.default)(url + '?' + query, {
                    timeout: (0, _ms2.default)('15s')
                });
                if (response.status >= 200 && response.status < 300) {
                    if (response.status === 204) return null;
                    return response[responseAs]();
                }
                throw new Error(response.statusText);
            });
            return function request(_x3) {
                return _ref.apply(this, arguments);
            };
        })();
        let requestProxy = (() => {
            var _ref2 = _asyncToGenerator(function*(method, data) {
                return request(`https://etcchain.com/gethProxy/` + method, data, 'json');
            });
            return function requestProxy(_x4, _x5) {
                return _ref2.apply(this, arguments);
            };
        })();
        let fetchBalance = exports.fetchBalance = (() => {
            var _ref3 = _asyncToGenerator(function*(address) {
                const data = yield request('https://etcchain.com/api/v1/getAddressBalance', {
                    address
                });
                _assert2.default.equal(JSON.parse(data).address, address, 'Address should be same');
                const match = /balance":(\d+)\.(\d+)/.exec(data);
                if (match === null) throw new Error('Balance not found');
                while (match[2].length < 18) match[2] = match[2] + '0';
                let balance = match[1] + match[2];
                while (balance[0] === '0') balance = balance.slice(1);
                return balance;
            });
            return function fetchBalance(_x6) {
                return _ref3.apply(this, arguments);
            };
        })();
        let fetchTxlist = exports.fetchTxlist = (() => {
            var _ref4 = _asyncToGenerator(function*(address, page) {
                const params = {
                    address,
                    sort: 'asc',
                    page: '0x' + page.toString(16),
                    offset: '0x64'
                };
                return request('https://etcchain.com/api/v1/getTransactionsByAddress', params, 'json');
            });
            return function fetchTxlist(_x7, _x8) {
                return _ref4.apply(this, arguments);
            };
        })();
        let gasPrice = exports.gasPrice = (() => {
            var _ref6 = _asyncToGenerator(function*() {
                return requestProxy('eth_gasPrice', {});
            });
            return function gasPrice() {
                return _ref6.apply(this, arguments);
            };
        })();
        let getTransactionCount = exports.getTransactionCount = (() => {
            var _ref7 = _asyncToGenerator(function*(address) {
                return requestProxy('eth_getTransactionCount', {
                    address,
                    tag: 'latest'
                });
            });
            return function getTransactionCount(_x10) {
                return _ref7.apply(this, arguments);
            };
        })();
        let getCode = exports.getCode = (() => {
            var _ref8 = _asyncToGenerator(function*(address) {
                return requestProxy('eth_getCode', {
                    address,
                    tag: 'latest'
                });
            });
            return function getCode(_x11) {
                return _ref8.apply(this, arguments);
            };
        })();
        let sendRawTransaction = exports.sendRawTransaction = (() => {
            var _ref9 = _asyncToGenerator(function*(data) {
                return requestProxy('eth_sendRawTransaction', {
                    hex: '0x' + data
                });
            });
            return function sendRawTransaction(_x12) {
                return _ref9.apply(this, arguments);
            };
        })();
        let estimateGas = exports.estimateGas = (() => {
            var _ref10 = _asyncToGenerator(function*(data) {
                throw new Error('Not supported right now!');
            });
            return function estimateGas(_x13) {
                return _ref10.apply(this, arguments);
            };
        })();
        var _assert = require('assert');
        var _assert2 = _interopRequireDefault(_assert);
        var _nodeFetch = require('node-fetch');
        var _nodeFetch2 = _interopRequireDefault(_nodeFetch);
        var _ms = require('ms');
        var _ms2 = _interopRequireDefault(_ms);
        var _memoizeLruCache = require(70);
        var _memoizeLruCache2 = _interopRequireDefault(_memoizeLruCache);

        function _interopRequireDefault(obj) {
            return obj && obj.__esModule ? obj : {
                default: obj
            };
        }

        function _asyncToGenerator(fn) {
            return function() {
                var gen = fn.apply(this, arguments);
                return new Promise(function(resolve, reject) {
                    function step(key, arg) {
                        try {
                            var info = gen[key](arg);
                            var value = info.value;
                        } catch (error) {
                            reject(error);
                            return;
                        }
                        if (info.done) {
                            resolve(value);
                        } else {
                            return Promise.resolve(value).then(function(value) {
                                step("next", value);
                            }, function(err) {
                                step("throw", err);
                            });
                        }
                    }
                    return step("next");
                });
            };
        }
        const getTransactionReceipt = exports.getTransactionReceipt = (0, _memoizeLruCache2.default)((() => {
            var _ref5 = _asyncToGenerator(function*(hash) {
                return request('https://etcchain.com/gethProxy/eth_getTransactionReceipt', {
                    hex: hash
                }, 'json');
            });
            return function(_x9) {
                return _ref5.apply(this, arguments);
            };
        })(), key => key, {
            max: 1000
        });

    }, {
        "70": 70,
        "undefined": undefined
    }],
    60: [function(require, module, exports) {
        'use strict';
        Object.defineProperty(exports, "__esModule", {
            value: true
        });
        exports.tokenBalance = exports.fetchTxlistinternal = exports.fetchTxlist = exports.fetchBalance = undefined;
        let fetchBalance = exports.fetchBalance = (() => {
            var _ref2 = _asyncToGenerator(function*(address) {
                const balance = yield _request('balance', {
                    address
                });
                const isValid = /^[0-9]+$/.test(balance);
                if (!isValid) throw new RangeError(`Invalid balance: ${balance}`);
                return balance;
            });
            return function fetchBalance(_x) {
                return _ref2.apply(this, arguments);
            };
        })();
        let fetchTxlist = exports.fetchTxlist = (() => {
            var _ref3 = _asyncToGenerator(function*(address, options) {
                const params = Object.assign({
                    startblock: 0,
                    endblock: 'latest'
                }, options, {
                    address
                });
                const txlist = yield _request('txlist', params);
                (0, _assert2.default)(Array.isArray(txlist), `Invalid transactions: ${txlist}`);
                return txlist;
            });
            return function fetchTxlist(_x2, _x3) {
                return _ref3.apply(this, arguments);
            };
        })();
        let fetchTxlistinternal = exports.fetchTxlistinternal = (() => {
            var _ref4 = _asyncToGenerator(function*(address, options) {
                const params = Object.assign({
                    startblock: 0,
                    endblock: 'latest'
                }, options, {
                    address
                });
                const txlist = yield _request('txlistinternal', params);
                (0, _assert2.default)(Array.isArray(txlist), `Invalid transactions: ${txlist}`);
                return txlist;
            });
            return function fetchTxlistinternal(_x4, _x5) {
                return _ref4.apply(this, arguments);
            };
        })();
        let tokenBalance = exports.tokenBalance = (() => {
            var _ref5 = _asyncToGenerator(function*(token, address) {
                const params = {
                    [token.length === 42 ? 'contractaddress' : 'tokenname']: token,
                    address,
                    tag: 'latest'
                };
                const balance = yield _request('tokenbalance', params);
                const isValid = /^[0-9]+$/.test(balance);
                if (!isValid) throw new RangeError(`Invalid balance: ${balance}`);
                return balance;
            });
            return function tokenBalance(_x6, _x7) {
                return _ref5.apply(this, arguments);
            };
        })();
        var _assert = require('assert');
        var _assert2 = _interopRequireDefault(_assert);
        var _request2 = require(64);
        var _request3 = _interopRequireDefault(_request2);

        function _interopRequireDefault(obj) {
            return obj && obj.__esModule ? obj : {
                default: obj
            };
        }

        function _asyncToGenerator(fn) {
            return function() {
                var gen = fn.apply(this, arguments);
                return new Promise(function(resolve, reject) {
                    function step(key, arg) {
                        try {
                            var info = gen[key](arg);
                            var value = info.value;
                        } catch (error) {
                            reject(error);
                            return;
                        }
                        if (info.done) {
                            resolve(value);
                        } else {
                            return Promise.resolve(value).then(function(value) {
                                step("next", value);
                            }, function(err) {
                                step("throw", err);
                            });
                        }
                    }
                    return step("next");
                });
            };
        }
        const isValidResponseCheck = x => x.status === '1' && x.message === 'OK' || x.message === 'No transactions found';
        const _request = (() => {
            var _ref = _asyncToGenerator(function*() {
                for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
                    args[_key] = arguments[_key];
                }
                return (0, _request3.default)(isValidResponseCheck, 'account', ...args);
            });
            return function _request() {
                return _ref.apply(this, arguments);
            };
        })();

    }, {
        "64": 64,
        "undefined": undefined
    }],
    61: [function(require, module, exports) {
        'use strict';
        Object.defineProperty(exports, "__esModule", {
            value: true
        });
        exports.ethCall = exports.ws = exports.getLogs = exports.gasPrice = exports.getCode = exports.estimateGas = exports.getTransactionCount = exports.sendRawTransaction = exports.tokenBalance = exports.fetchTxlistinternal = exports.fetchTxlist = exports.fetchBalance = undefined;
        exports.filterTxsSent = filterTxsSent;
        exports.filterTxsReceived = filterTxsReceived;
        var _account = require(60);
        var _proxy = require(63);
        var _logs = require(62);
        var _ws2 = require(65);
        var _ws3 = _interopRequireDefault(_ws2);

        function _interopRequireDefault(obj) {
            return obj && obj.__esModule ? obj : {
                default: obj
            };
        }
        const fetchBalance = exports.fetchBalance = _account.fetchBalance;
        const fetchTxlist = exports.fetchTxlist = _account.fetchTxlist;
        const fetchTxlistinternal = exports.fetchTxlistinternal = _account.fetchTxlistinternal;
        const tokenBalance = exports.tokenBalance = _account.tokenBalance;
        const sendRawTransaction = exports.sendRawTransaction = _proxy.sendRawTransaction;
        const getTransactionCount = exports.getTransactionCount = _proxy.getTransactionCount;
        const estimateGas = exports.estimateGas = _proxy.estimateGas;
        const getCode = exports.getCode = _proxy.getCode;
        const gasPrice = exports.gasPrice = _proxy.gasPrice;
        const getLogs = exports.getLogs = _logs.getLogs;
        const ws = exports.ws = _ws3.default;
        const ethCall = exports.ethCall = _proxy.ethCall;

        function filterTxsSent(addr, etherscanTxs) {
            return etherscanTxs.filter(tx => tx.from.toLowerCase() === addr.toLowerCase());
        }

        function filterTxsReceived(addr, etherscanTxs) {
            return etherscanTxs.filter(tx => tx.to.toLowerCase() === addr.toLowerCase());
        }

    }, {
        "60": 60,
        "62": 62,
        "63": 63,
        "65": 65
    }],
    62: [function(require, module, exports) {
        'use strict';
        Object.defineProperty(exports, "__esModule", {
            value: true
        });
        exports.getLogs = undefined;
        let getLogs = exports.getLogs = (() => {
            var _ref2 = _asyncToGenerator(function*(address, fromBlock, toBlock, options) {
                const params = Object.assign({}, options, {
                    address,
                    fromBlock,
                    toBlock
                });
                const events = yield _request('getLogs', params);
                (0, _assert2.default)(Array.isArray(events), `Invalid transactions: ${events}`);
                return events;
            });
            return function getLogs(_x, _x2, _x3, _x4) {
                return _ref2.apply(this, arguments);
            };
        })();
        var _assert = require('assert');
        var _assert2 = _interopRequireDefault(_assert);
        var _request2 = require(64);
        var _request3 = _interopRequireDefault(_request2);

        function _interopRequireDefault(obj) {
            return obj && obj.__esModule ? obj : {
                default: obj
            };
        }

        function _asyncToGenerator(fn) {
            return function() {
                var gen = fn.apply(this, arguments);
                return new Promise(function(resolve, reject) {
                    function step(key, arg) {
                        try {
                            var info = gen[key](arg);
                            var value = info.value;
                        } catch (error) {
                            reject(error);
                            return;
                        }
                        if (info.done) {
                            resolve(value);
                        } else {
                            return Promise.resolve(value).then(function(value) {
                                step("next", value);
                            }, function(err) {
                                step("throw", err);
                            });
                        }
                    }
                    return step("next");
                });
            };
        }
        const isValidResponseCheck = x => x.status === '1' && x.message === 'OK' || x.message === 'No records found';
        const _request = (() => {
            var _ref = _asyncToGenerator(function*() {
                for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
                    args[_key] = arguments[_key];
                }
                return (0, _request3.default)(isValidResponseCheck, 'logs', ...args);
            });
            return function _request() {
                return _ref.apply(this, arguments);
            };
        })();

    }, {
        "64": 64,
        "undefined": undefined
    }],
    63: [function(require, module, exports) {
        'use strict';
        Object.defineProperty(exports, "__esModule", {
            value: true
        });
        exports.ethCall = exports.gasPrice = exports.getCode = exports.estimateGas = exports.getTransactionCount = exports.sendRawTransaction = undefined;
        let sendRawTransaction = exports.sendRawTransaction = (() => {
            var _ref2 = _asyncToGenerator(function*(data) {
                const txhash = yield _request('eth_sendRawTransaction', {
                    hex: '0x' + data
                });
                const isValidTxHash = /^0x[0-9a-fA-F]{64}$/.test(txhash);
                if (!isValidTxHash) throw new Error(`Invalid tx hash: ${txhash}`);
                return txhash.slice(2);
            });
            return function sendRawTransaction(_x) {
                return _ref2.apply(this, arguments);
            };
        })();
        let getTransactionCount = exports.getTransactionCount = (() => {
            var _ref3 = _asyncToGenerator(function*(address) {
                return _request('eth_getTransactionCount', {
                    address
                });
            });
            return function getTransactionCount(_x2) {
                return _ref3.apply(this, arguments);
            };
        })();
        let estimateGas = exports.estimateGas = (() => {
            var _ref4 = _asyncToGenerator(function*(data) {
                return _request('eth_estimateGas', data);
            });
            return function estimateGas(_x3) {
                return _ref4.apply(this, arguments);
            };
        })();
        let getCode = exports.getCode = (() => {
            var _ref5 = _asyncToGenerator(function*(address) {
                const code = yield _request('eth_getCode', {
                    address
                });
                const isValidCode = /^0x[0-9a-fA-F]*$/.test(code) && code.length % 2 === 0;
                if (!isValidCode) throw new Error(`Invalid address code: ${code}`);
                return code;
            });
            return function getCode(_x4) {
                return _ref5.apply(this, arguments);
            };
        })();
        let gasPrice = exports.gasPrice = (() => {
            var _ref6 = _asyncToGenerator(function*() {
                const price = yield _request('eth_gasPrice');
                const isValidPrice = /^0x[0-9a-fA-F]+$/.test(price);
                if (!isValidPrice) throw new Error(`Invalid price: ${price}`);
                return price;
            });
            return function gasPrice() {
                return _ref6.apply(this, arguments);
            };
        })();
        let ethCall = exports.ethCall = (() => {
            var _ref7 = _asyncToGenerator(function*(data) {
                return _request('eth_call', data);
            });
            return function ethCall(_x5) {
                return _ref7.apply(this, arguments);
            };
        })();
        var _request2 = require(64);
        var _request3 = _interopRequireDefault(_request2);

        function _interopRequireDefault(obj) {
            return obj && obj.__esModule ? obj : {
                default: obj
            };
        }

        function _asyncToGenerator(fn) {
            return function() {
                var gen = fn.apply(this, arguments);
                return new Promise(function(resolve, reject) {
                    function step(key, arg) {
                        try {
                            var info = gen[key](arg);
                            var value = info.value;
                        } catch (error) {
                            reject(error);
                            return;
                        }
                        if (info.done) {
                            resolve(value);
                        } else {
                            return Promise.resolve(value).then(function(value) {
                                step("next", value);
                            }, function(err) {
                                step("throw", err);
                            });
                        }
                    }
                    return step("next");
                });
            };
        }
        const isValidResponseCheck = x => x.result !== undefined;
        const _request = (() => {
            var _ref = _asyncToGenerator(function*() {
                for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
                    args[_key] = arguments[_key];
                }
                return (0, _request3.default)(isValidResponseCheck, 'proxy', ...args);
            });
            return function _request() {
                return _ref.apply(this, arguments);
            };
        })();

    }, {
        "64": 64
    }],
    64: [function(require, module, exports) {
        'use strict';
        Object.defineProperty(exports, "__esModule", {
            value: true
        });
        var _ms = require('ms');
        var _ms2 = _interopRequireDefault(_ms);
        var _makeConcurrent = require('make-concurrent');
        var _makeConcurrent2 = _interopRequireDefault(_makeConcurrent);
        var _fetchival = require('fetchival');
        var _fetchival2 = _interopRequireDefault(_fetchival);
        var _nodeFetch = require('node-fetch');
        var _nodeFetch2 = _interopRequireDefault(_nodeFetch);
        var _appConfig = require(4);

        function _interopRequireDefault(obj) {
            return obj && obj.__esModule ? obj : {
                default: obj
            };
        }

        function _asyncToGenerator(fn) {
            return function() {
                var gen = fn.apply(this, arguments);
                return new Promise(function(resolve, reject) {
                    function step(key, arg) {
                        try {
                            var info = gen[key](arg);
                            var value = info.value;
                        } catch (error) {
                            reject(error);
                            return;
                        }
                        if (info.done) {
                            resolve(value);
                        } else {
                            return Promise.resolve(value).then(function(value) {
                                step("next", value);
                            }, function(err) {
                                step("throw", err);
                            });
                        }
                    }
                    return step("next");
                });
            };
        }
        _fetchival2.default.fetch = _nodeFetch2.default;
        const ETHERSCAN_API_URL = 'https://api.etherscan.io/api';
        const ETHERSCAN_API_KEY = (() => {
            if (_appConfig.ENV_BUILD_EXODUS) return 'XM3VGRSNW1TMSIR14I9MVFP15X74GNHTRI';
            if (_appConfig.ENV_BUILD_EDEN) return 'ZZXQ5MQF9H1Q6NMBPKICFUHEIJI3V9ZBIF';
            return '';
        })();
        exports.default = (0, _makeConcurrent2.default)((() => {
            var _ref = _asyncToGenerator(function*(isValidResponseCheck, module, action) {
                let params = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};
                const queryParams = Object.assign({}, params, {
                    module,
                    action,
                    apiKey: ETHERSCAN_API_KEY
                });
                const data = yield(0, _fetchival2.default)(ETHERSCAN_API_URL, {
                    timeout: (0, _ms2.default)('15s')
                }).get(queryParams);
                if (!isValidResponseCheck(data)) throw new Error(`Invalid response: ${JSON.stringify(data)}`);
                return data.result;
            });
            return function(_x2, _x3, _x4) {
                return _ref.apply(this, arguments);
            };
        })(), {
            concurrency: 3
        });

    }, {
        "4": 4,
        "undefined": undefined
    }],
    65: [function(require, module, exports) {
        'use strict';
        Object.defineProperty(exports, "__esModule", {
            value: true
        });
        var _events = require('events');
        var _ms = require('ms');
        var _ms2 = _interopRequireDefault(_ms);
        var _ws = require('ws');
        var _ws2 = _interopRequireDefault(_ws);

        function _interopRequireDefault(obj) {
            return obj && obj.__esModule ? obj : {
                default: obj
            };
        }
        const RECONNECT_INTERVAL = (0, _ms2.default)('10s');

        function createWebSocket(url) {
            const addresses = new Set();
            const events = new _events.EventEmitter().setMaxListeners(20);
            const pingMessage = JSON.stringify({
                event: 'ping'
            });
            let ws;
            let wsOpened = false;
            let opened = false;
            let openTimeoutId;
            let pingIntervalId;

            function subscribeAddress(address) {
                const data = JSON.stringify({
                    event: 'txlist',
                    address
                });
                ws.send(data);
            }

            function onMessage(data) {
                data = JSON.parse(data);
                switch (data.event) {
                    case 'txlist':
                        for (const tx of data.result) events.emit(`address-${data.address}`, tx);
                        break;
                    case 'subscribe-txlist':
                        const match = data.message.toLowerCase().match(/0x[0-9a-f]{40}/);
                        if (match && data.status === '1') events.emit(`address-${match[0]}-subscribed`);
                        else ws.close();
                        break;
                }
            }

            function isOpened() {
                return wsOpened;
            }

            function open() {
                opened = true;
                clearTimeout(openTimeoutId);
                if (ws) return;
                ws = new _ws2.default(url);
                ws.on('message', data => {
                    try {
                        onMessage(data);
                    } catch (err) {}
                });
                ws.once('open', () => {
                    for (const address of addresses.values()) subscribeAddress(address);
                    pingIntervalId = setInterval(() => ws.send(pingMessage), (0, _ms2.default)('20s'));
                    wsOpened = true;
                    events.emit('open');
                });
                ws.once('close', () => {
                    ws = null;
                    clearInterval(pingIntervalId);
                    if (opened) openTimeoutId = setTimeout(open, RECONNECT_INTERVAL);
                    wsOpened = false;
                    events.emit('close');
                });
            }

            function close() {
                opened = false;
                clearTimeout(openTimeoutId);
                if (!ws) return;
                ws.close();
                ws = null;
            }

            function watch(address) {
                address = address.toLowerCase();
                if (addresses.has(address)) return;
                addresses.add(address);
                if (wsOpened) subscribeAddress(address);
            }
            return {
                events,
                isOpened,
                open,
                close,
                watch
            };
        }
        exports.default = createWebSocket('wss://socket.etherscan.io/wshandler');

    }, {
        "undefined": undefined
    }],
    66: [function(require, module, exports) {
        'use strict';
        Object.defineProperty(exports, "__esModule", {
            value: true
        });
        exports.etc = exports.eth = undefined;
        exports.withFallback = withFallback;
        var _urlJoin = require('url-join');
        var _urlJoin2 = _interopRequireDefault(_urlJoin);
        var _url = require('url');
        var _url2 = _interopRequireDefault(_url);
        var _fetchival = require('fetchival');
        var _fetchival2 = _interopRequireDefault(_fetchival);
        var _nodeFetch = require('node-fetch');
        var _nodeFetch2 = _interopRequireDefault(_nodeFetch);
        var _ms = require('ms');
        var _ms2 = _interopRequireDefault(_ms);
        var _ws = require(67);
        var _ws2 = _interopRequireDefault(_ws);

        function _interopRequireDefault(obj) {
            return obj && obj.__esModule ? obj : {
                default: obj
            };
        }

        function _asyncToGenerator(fn) {
            return function() {
                var gen = fn.apply(this, arguments);
                return new Promise(function(resolve, reject) {
                    function step(key, arg) {
                        try {
                            var info = gen[key](arg);
                            var value = info.value;
                        } catch (error) {
                            reject(error);
                            return;
                        }
                        if (info.done) {
                            resolve(value);
                        } else {
                            return Promise.resolve(value).then(function(value) {
                                step("next", value);
                            }, function(err) {
                                step("throw", err);
                            });
                        }
                    }
                    return step("next");
                });
            };
        }
        _fetchival2.default.fetch = _nodeFetch2.default;

        function create(API_URL) {
            let request = (() => {
                var _ref = _asyncToGenerator(function*(module) {
                    let params = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
                    const url = (0, _urlJoin2.default)(API_URL, module);
                    try {
                        return yield(0, _fetchival2.default)(url, {
                            timeout: (0, _ms2.default)('15s')
                        }).get(params);
                    } catch (err) {
                        let nerr = err;
                        if (err.response && err.response.status === 500) {
                            try {
                                const data = yield err.response.json();
                                const msg = data.error.replace(/^RPC error \(code: -\d+\): /, '');
                                nerr = new Error(msg);
                            } catch (err) {}
                        }
                        throw nerr;
                    }
                });
                return function request(_x2) {
                    return _ref.apply(this, arguments);
                };
            })();
            return {
                ws: (0, _ws2.default)(() => {
                    const obj = _url2.default.parse(API_URL);
                    obj.protocol = 'wss:';
                    return _url2.default.format(obj);
                }),
                getBalance(address, opts) {
                    return _asyncToGenerator(function*() {
                        opts = Object.assign({
                            startblock: 'earliest',
                            endblock: 'pending'
                        }, opts);
                        return request('balance', {
                            address,
                            from: opts.startblock,
                            to: opts.endblock
                        });
                    })();
                },
                getHistory(address, opts) {
                    return _asyncToGenerator(function*() {
                        opts = Object.assign({
                            startblock: 'earliest',
                            endblock: 'pending',
                            limit: 1000
                        }, opts);
                        return request('history', {
                            address,
                            from: opts.startblock,
                            to: opts.endblock,
                            limit: opts.limit
                        });
                    })();
                },
                gasPrice() {
                    return _asyncToGenerator(function*() {
                        return request('proxy', {
                            method: 'eth_gasPrice'
                        });
                    })();
                },
                getTransactionCount(address) {
                    var _arguments = arguments;
                    return _asyncToGenerator(function*() {
                        let tag = _arguments.length > 1 && _arguments[1] !== undefined ? _arguments[1] : 'latest';
                        return request('proxy', {
                            method: 'eth_getTransactionCount',
                            address,
                            tag
                        });
                    })();
                },
                getCode(address) {
                    var _arguments2 = arguments;
                    return _asyncToGenerator(function*() {
                        let tag = _arguments2.length > 1 && _arguments2[1] !== undefined ? _arguments2[1] : 'latest';
                        return request('proxy', {
                            method: 'eth_getCode',
                            address,
                            tag
                        });
                    })();
                },
                sendRawTransaction(data) {
                    return _asyncToGenerator(function*() {
                        return request('proxy', {
                            method: 'eth_sendRawTransaction',
                            hex: '0x' + data
                        });
                    })();
                },
                estimateGas(data) {
                    var _arguments3 = arguments;
                    return _asyncToGenerator(function*() {
                        let tag = _arguments3.length > 1 && _arguments3[1] !== undefined ? _arguments3[1] : 'latest';
                        return request('proxy', Object.assign({
                            method: 'eth_estimateGas'
                        }, data, {
                            tag
                        }));
                    })();
                },
                ethCall(data) {
                    var _arguments4 = arguments;
                    return _asyncToGenerator(function*() {
                        let tag = _arguments4.length > 1 && _arguments4[1] !== undefined ? _arguments4[1] : 'latest';
                        return request('proxy', Object.assign({
                            method: 'eth_call'
                        }, data, {
                            tag
                        }));
                    })();
                }
            };
        }
        const eth = exports.eth = create('https://ethereum.exodus.io/v1/');
        const etc = exports.etc = create('https://ethereumclassic.exodus.io/v1/');

        function withFallback(fn, fn2) {
            return _asyncToGenerator(function*() {
                try {
                    return yield fn(...arguments);
                } catch (err1) {
                    try {
                        return yield fn2(...arguments);
                    } catch (err2) {
                        const err = new Error(`${err1.message} | ${err2.message}`);
                        throw Object.assign(err, {
                            err1,
                            err2
                        });
                    }
                }
            });
        }

    }, {
        "67": 67,
        "undefined": undefined
    }],
    67: [function(require, module, exports) {
        'use strict';
        Object.defineProperty(exports, "__esModule", {
            value: true
        });
        exports.default = createWebSocket;
        var _events = require('events');
        var _ws = require('ws');
        var _ws2 = _interopRequireDefault(_ws);
        var _ms = require('ms');
        var _ms2 = _interopRequireDefault(_ms);

        function _interopRequireDefault(obj) {
            return obj && obj.__esModule ? obj : {
                default: obj
            };
        }
        const RECONNECT_INTERVAL = (0, _ms2.default)('10s');

        function createWebSocket(getURL) {
            const addresses = new Set();
            const events = new _events.EventEmitter();
            let ws;
            let pingIntervalId = null;
            let opened = false;
            let openTimeoutId;

            function subscribeAddress(address) {
                const data = JSON.stringify({
                    type: 'subscribe-address',
                    address
                });
                ws.send(data);
            }

            function subscribeGasPrice() {
                const data = JSON.stringify({
                    type: 'subscribe-gasprice'
                });
                ws.send(data);
            }

            function onMessage(data) {
                data = JSON.parse(data);
                switch (data.type) {
                    case 'address':
                        events.emit(`address-${data.address}`);
                        break;
                    case 'gasprice':
                        events.emit('gasprice', data.gasprice);
                        break;
                }
            }

            function open() {
                opened = true;
                clearTimeout(openTimeoutId);
                if (ws) return;
                ws = new _ws2.default(getURL());
                ws.on('error', () => {});
                ws.on('message', data => {
                    try {
                        onMessage(data);
                    } catch (err) {}
                });
                ws.once('open', () => {
                    for (const address of addresses.values()) subscribeAddress(address);
                    subscribeGasPrice();
                    pingIntervalId = setInterval(() => ws.ping(), (0, _ms2.default)('10s'));
                    events.emit('open');
                });
                ws.once('close', () => {
                    ws = null;
                    clearInterval(pingIntervalId);
                    pingIntervalId = null;
                    if (opened) openTimeoutId = setTimeout(open, RECONNECT_INTERVAL);
                    events.emit('close');
                });
            }

            function close() {
                opened = false;
                clearTimeout(openTimeoutId);
                if (!ws) return;
                ws.removeAllListeners();
                ws.close();
                ws = null;
                clearInterval(pingIntervalId);
                pingIntervalId = null;
                events.emit('close');
            }

            function watch(address) {
                if (addresses.has(address)) return;
                addresses.add(address);
                if (ws) subscribeAddress(address);
            }
            return {
                events,
                open,
                close,
                watch,
                isOpened: () => !!pingIntervalId
            };
        }

    }, {
        "undefined": undefined
    }],
    68: [function(require, module, exports) {
        'use strict';
        Object.defineProperty(exports, "__esModule", {
            value: true
        });
        exports.default = parseInt(Buffer.from('exo').toString('hex'), '16');

    }, {}],
    69: [function(require, module, exports) {
        'use strict';
        Object.defineProperty(exports, "__esModule", {
            value: true
        });
        exports.default = makeError;

        function _objectWithoutProperties(obj, keys) {
            var target = {};
            for (var i in obj) {
                if (keys.indexOf(i) >= 0) continue;
                if (!Object.prototype.hasOwnProperty.call(obj, i)) continue;
                target[i] = obj[i];
            }
            return target;
        }

        function makeError(_ref) {
            let {
                code,
                message
            } = _ref, props = _objectWithoutProperties(_ref, ['code', 'message']);
            let codeStr = normalizeCodeToString(code);
            message = props.msg || message || '';
            message = codeStr ? `${codeStr}: ${message}` : message;
            let err = new Error(message);
            if (code) err.code = code;
            Object.keys(props).forEach(key => err[key] = props[key]);
            return err;
        }

        function normalizeCodeToString(code) {
            if (typeof code === 'symbol') return String(code).slice(7, -1);
            if (typeof code === 'string') return code;
            return '';
        }

    }, {}],
    70: [function(require, module, exports) {
        'use strict';
        Object.defineProperty(exports, "__esModule", {
            value: true
        });
        exports.default = function(fn, resolver, options) {
            const cache = new _lruCache2.default(options);
            return function() {
                const key = resolver(...arguments);
                if (!cache.has(key)) {
                    cache.set(key, fn(...arguments));
                }
                return cache.get(key);
            };
        };
        var _lruCache = require('lru-cache');
        var _lruCache2 = _interopRequireDefault(_lruCache);

        function _interopRequireDefault(obj) {
            return obj && obj.__esModule ? obj : {
                default: obj
            };
        }

    }, {
        "undefined": undefined
    }],
    71: [function(require, module, exports) {
        'use strict';
        Object.defineProperty(exports, "__esModule", {
            value: true
        });
        exports.create = create;
        exports.isValid = isValid;
        var _assert = require('assert');
        var _assert2 = _interopRequireDefault(_assert);
        var _bs = require(72);
        var bs58 = _interopRequireWildcard(_bs);
        var _crypto = require(73);

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

        function _interopRequireDefault(obj) {
            return obj && obj.__esModule ? obj : {
                default: obj
            };
        }

        function create(spendKey, viewKey, paymentId) {
            let bytes;
            if (paymentId) {
                _assert2.default.equal(paymentId.length, 8);
                bytes = Buffer.concat([Buffer.from([0x13]), spendKey, viewKey, paymentId]);
            } else {
                bytes = Buffer.concat([Buffer.from([0x12]), spendKey, viewKey]);
            }
            let checkSum = (0, _crypto.keccak256)(bytes).slice(0, 4);
            return bs58.encode(Buffer.concat([bytes, checkSum]));
        }

        function isValid(address) {
            let buffer = bs58.decode(address);
            if (buffer[0] !== 0x12 && buffer[0] !== 0x13) return false;
            let checkSum = (0, _crypto.keccak256)(buffer.slice(0, -4)).slice(0, 4);
            if (!buffer.slice(-4).equals(checkSum)) return false;
            return true;
        }

    }, {
        "72": 72,
        "73": 73,
        "undefined": undefined
    }],
    72: [function(require, module, exports) {
        'use strict';
        Object.defineProperty(exports, "__esModule", {
            value: true
        });
        exports.encode = encode;
        exports.decode = decode;
        var _bs = require('bs58');
        var _bs2 = _interopRequireDefault(_bs);

        function _interopRequireDefault(obj) {
            return obj && obj.__esModule ? obj : {
                default: obj
            };
        }
        const ENCODED_BLOCK_SIZES = [0, 2, 3, 5, 6, 7, 9, 10, 11];

        function encode(buffer) {
            let result = '';
            for (let offset = 0; offset < buffer.length; offset += 8) {
                let bytes = buffer.slice(offset, offset + 8);
                let t = _bs2.default.encode(bytes);
                for (let size = ENCODED_BLOCK_SIZES[bytes.length]; t.length < size; t = '1' + t);
                result += t;
            }
            return result;
        }

        function decode(data) {
            let buffers = [];
            for (let offset = 0; offset < data.length; offset += 11) {
                let t = data.slice(offset, offset + 11);
                let size = ENCODED_BLOCK_SIZES.indexOf(t.length);
                buffers.push(Buffer.from(_bs2.default.decode(t).slice(-size)));
            }
            return Buffer.concat(buffers);
        }

    }, {
        "undefined": undefined
    }],
    73: [function(require, module, exports) {
        'use strict';
        Object.defineProperty(exports, "__esModule", {
            value: true
        });
        exports.ed25519 = undefined;
        exports.keccak256 = keccak256;
        exports.deriveKeys = deriveKeys;
        exports.reduceECKey = reduceECKey;
        exports.createECPrivateKey = createECPrivateKey;
        exports.createECPublicKey = createECPublicKey;
        exports.generateKeyDerivation = generateKeyDerivation;
        exports.derivePublicKey = derivePublicKey;
        exports.derivePrivateKey = derivePrivateKey;
        var _elliptic = require('elliptic');
        var _bn = require('bn.js');
        var _bn2 = _interopRequireDefault(_bn);
        var _browserifySha = require('browserify-sha3');

        function _interopRequireDefault(obj) {
            return obj && obj.__esModule ? obj : {
                default: obj
            };
        }
        const ed = new _elliptic.eddsa('ed25519');
        const ed25519 = exports.ed25519 = ed;

        function keccak256(buffer) {
            return Buffer.from(new _browserifySha.SHA3Hash(256).update(buffer).digest('hex'), 'hex');
        }

        function deriveKeys(privKey) {
            let spendPrivateKey = reduceECKey(privKey);
            let spendPublicKey = createECPublicKey(spendPrivateKey);
            let viewPrivateKey = createECPrivateKey(spendPrivateKey);
            let viewPublicKey = createECPublicKey(viewPrivateKey);
            return {
                spend: {
                    priv: spendPrivateKey,
                    pub: spendPublicKey
                },
                view: {
                    priv: viewPrivateKey,
                    pub: viewPublicKey
                }
            };
        }

        function reduceECKey(buffer) {
            return new _bn2.default(buffer, 'le').umod(ed.curve.n).toArrayLike(Buffer, 'le', 32);
        }

        function createECPrivateKey(buffer) {
            return reduceECKey(keccak256(reduceECKey(buffer)));
        }

        function createECPublicKey(buffer) {
            let point = ed.curve.g.mul(new _bn2.default(buffer, 'le').umod(ed.curve.n));
            return Buffer.from(ed.encodePoint(point));
        }

        function generateKeyDerivation(pub, priv) {
            let point = ed.decodePoint(Array.from(pub)).mul(new _bn2.default(priv, 'le')).dbl().dbl().dbl();
            return Buffer.from(ed.encodePoint(point));
        }

        function derivePublicKey(derivation, outputIndex, pub) {}

        function derivePrivateKey(derivation, outputIndex, priv) {}

    }, {
        "undefined": undefined
    }],
    74: [function(require, module, exports) {
        'use strict';
        Object.defineProperty(exports, "__esModule", {
            value: true
        });
        exports.crypto = exports.bs58 = exports.address = undefined;
        var _address = require(71);
        var address = _interopRequireWildcard(_address);
        var _bs = require(72);
        var bs58 = _interopRequireWildcard(_bs);
        var _crypto = require(73);
        var crypto = _interopRequireWildcard(_crypto);

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
        exports.address = address;
        exports.bs58 = bs58;
        exports.crypto = crypto;

    }, {
        "71": 71,
        "72": 72,
        "73": 73
    }],
    75: [function(require, module, exports) {
        'use strict';
        Object.defineProperty(exports, "__esModule", {
            value: true
        });
        exports.derive = derive;
        var _rippleAddressCodec = require('ripple-address-codec');
        var _rippleAddressCodec2 = _interopRequireDefault(_rippleAddressCodec);
        var _crypto = require(76);

        function _interopRequireDefault(obj) {
            return obj && obj.__esModule ? obj : {
                default: obj
            };
        }

        function derive(publicKey) {
            return _rippleAddressCodec2.default.encodeAccountID((0, _crypto.ripemd160)((0, _crypto.sha256)(publicKey)));
        }

    }, {
        "76": 76,
        "undefined": undefined
    }],
    76: [function(require, module, exports) {
        'use strict';
        Object.defineProperty(exports, "__esModule", {
            value: true
        });
        exports.sha512half = sha512half;
        exports.sha256 = sha256;
        exports.ripemd160 = ripemd160;
        var _createHash = require('create-hash');
        var _createHash2 = _interopRequireDefault(_createHash);

        function _interopRequireDefault(obj) {
            return obj && obj.__esModule ? obj : {
                default: obj
            };
        }

        function sha512half() {
            for (var _len = arguments.length, buffers = Array(_len), _key = 0; _key < _len; _key++) {
                buffers[_key] = arguments[_key];
            }
            return buffers.reduce((hash, buffer) => hash.update(buffer), (0, _createHash2.default)('sha512')).digest().slice(0, 32);
        }

        function sha256(buffer) {
            return (0, _createHash2.default)('sha256').update(buffer).digest();
        }

        function ripemd160(buffer) {
            return (0, _createHash2.default)('ripemd160').update(buffer).digest();
        }

    }, {
        "undefined": undefined
    }],
    77: [function(require, module, exports) {
        'use strict';
        Object.defineProperty(exports, "__esModule", {
            value: true
        });
        exports.deriveKeypair = deriveKeypair;
        exports.sign = sign;
        var _rippleAddressCodec = require('ripple-address-codec');
        var _rippleAddressCodec2 = _interopRequireDefault(_rippleAddressCodec);
        var _elliptic = require('elliptic');
        var _elliptic2 = _interopRequireDefault(_elliptic);
        var _bn = require('bn.js');
        var _bn2 = _interopRequireDefault(_bn);
        var _crypto = require(76);

        function _interopRequireDefault(obj) {
            return obj && obj.__esModule ? obj : {
                default: obj
            };
        }
        const Ed25519 = _elliptic2.default.eddsa('ed25519');
        const Secp256k1 = _elliptic2.default.ec('secp256k1');
        const secp256k1 = {
            _deriveScalar(bytes, discrim) {
                const order = Secp256k1.curve.n;
                for (let i = 0; i <= 0xFFFFFFFF; ++i) {
                    const buffers = [bytes];
                    if (discrim !== undefined) buffers.push(new _bn2.default(discrim).toBuffer('le', 4));
                    buffers.push(new _bn2.default(i).toBuffer('le', 4));
                    const key = new _bn2.default((0, _crypto.sha512half)(...buffers));
                    if (key.cmpn(0) > 0 && key.cmp(order) < 0) return key;
                }
                throw new Error('impossible unicorn ;)');
            },
            _derivePrivateKey(seed) {
                const privateGen = secp256k1._deriveScalar(seed);
                const publicGen = Secp256k1.g.mul(privateGen);
                return secp256k1._deriveScalar(Buffer.from(publicGen.encodeCompressed()), 0).add(privateGen).mod(Secp256k1.curve.n);
            },
            deriveKeypair(entropy) {
                const privateKey = secp256k1._derivePrivateKey(entropy).toBuffer('be', 33);
                const publicKey = Buffer.from(Secp256k1.keyFromPrivate(privateKey.slice(1)).getPublic().encodeCompressed());
                return {
                    privateKey,
                    publicKey
                };
            },
            sign(message, privateKey) {
                return Buffer.from(Secp256k1.sign((0, _crypto.sha512half)(message), privateKey, {
                    canonical: true
                }).toDER());
            }
        };
        const ed25519 = {
            deriveKeypair(entropy) {
                const privateKey = Buffer.from([0xED, ...(0, _crypto.sha512half)(entropy)]);
                const publicKey = Buffer.from([0xED, ...Ed25519.keyFromSecret(privateKey.slice(1)).pubBytes()]);
                return {
                    privateKey,
                    publicKey
                };
            },
            sign(message, privateKey) {
                return Buffer.from(Ed25519.sign(message, privateKey.slice(1)).toBytes());
            }
        };

        function deriveKeypair(seed) {
            const decoded = _rippleAddressCodec2.default.decodeSeed(seed);
            const fns = decoded.type === 'ed25519' ? ed25519 : secp256k1;
            return fns.deriveKeypair(Buffer.from(decoded.bytes));
        }

        function sign(message, privateKey) {
            const fns = privateKey.length === 33 && privateKey[0] === 0xed ? ed25519 : secp256k1;
            return fns.sign(message, privateKey);
        }

    }, {
        "76": 76,
        "undefined": undefined
    }],
    78: [function(require, module, exports) {
        'use strict';
        Object.defineProperty(exports, "__esModule", {
            value: true
        });
        exports.getHash = getHash;
        exports.toBuffer = toBuffer;
        var _bn = require('bn.js');
        var _bn2 = _interopRequireDefault(_bn);
        var _rippleAddressCodec = require('ripple-address-codec');
        var _rippleAddressCodec2 = _interopRequireDefault(_rippleAddressCodec);
        var _crypto = require(76);

        function _interopRequireDefault(obj) {
            return obj && obj.__esModule ? obj : {
                default: obj
            };
        }
        const HASH_PREFIX = Buffer.from('54584E00', 'hex');

        function getHash(buffer) {
            return (0, _crypto.sha512half)(HASH_PREFIX, buffer).toString('hex').toUpperCase();
        }

        function toBuffer(obj) {
            let {
                sign = false
            } = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

            function intFieldToBuffer(field, size) {
                const value = typeof obj[field] === 'string' ? parseFloat(obj[field], 10) : obj[field];
                const isValid = Number.isFinite(value) && value % 1 === 0 && value >= 0;
                if (isValid) return new _bn2.default(value).toBuffer('be', size);
                throw new RangeError(`Invalid field ${field}: ${value}`);
            }
            const buffers = [];
            if (sign) buffers.push(Buffer.from('53545800', 'hex'));
            if (obj.TransactionType !== 'Payment') throw new Error('Not supported');
            buffers.push(Buffer.from('12', 'hex'));
            buffers.push(Buffer.from('0000', 'hex'));
            buffers.push(Buffer.from('22', 'hex'));
            buffers.push(intFieldToBuffer('Flags', 4));
            buffers.push(Buffer.from('24', 'hex'));
            buffers.push(intFieldToBuffer('Sequence', 4));
            if (obj.DestinationTag) {
                buffers.push(Buffer.from('2e', 'hex'));
                buffers.push(intFieldToBuffer('DestinationTag', 4));
            }
            buffers.push(Buffer.from('201b', 'hex'));
            buffers.push(intFieldToBuffer('LastLedgerSequence', 4));
            buffers.push(Buffer.from('61', 'hex'));
            buffers.push(Buffer.from('40', 'hex'));
            buffers.push(intFieldToBuffer('Amount', 7));
            buffers.push(Buffer.from('68', 'hex'));
            buffers.push(Buffer.from('40', 'hex'));
            buffers.push(intFieldToBuffer('Fee', 7));
            buffers.push(Buffer.from('73', 'hex'));
            buffers.push(Buffer.from([Buffer.from(obj.SigningPubKey, 'hex').length]));
            buffers.push(Buffer.from(obj.SigningPubKey, 'hex'));
            if (!sign) {
                buffers.push(Buffer.from('74', 'hex'));
                buffers.push(Buffer.from([Buffer.from(obj.TxnSignature, 'hex').length]));
                buffers.push(Buffer.from(obj.TxnSignature, 'hex'));
            }
            buffers.push(Buffer.from('81', 'hex'));
            buffers.push(Buffer.from('14', 'hex'));
            buffers.push(Buffer.from(_rippleAddressCodec2.default.decodeAccountID(obj.Account)));
            buffers.push(Buffer.from('83', 'hex'));
            buffers.push(Buffer.from('14', 'hex'));
            buffers.push(Buffer.from(_rippleAddressCodec2.default.decodeAccountID(obj.Destination)));
            return Buffer.concat(buffers);
        }

    }, {
        "76": 76,
        "undefined": undefined
    }],
    79: [function(require, module, exports) {
        'use strict';
        Object.defineProperty(exports, "__esModule", {
            value: true
        });
        exports.default = function(assetName, data, hdkey) {
            const txb = new _bitcoinforksjsLib.TransactionBuilder();
            txb.enableBitcoinCash(true);
            for (const input of data.inputs) {
                const script = _bitcoinforksjsLib.address.toOutputScript(input.address);
                txb.addInput(input.txId, input.vout, _bitcoinforksjsLib.Transaction.DEFAULT_SEQUENCE, script);
            }
            for (const [address, amount] of data.outputs) txb.addOutput(address, amount);
            const hashType = _bitcoinforksjsLib.Transaction.SIGHASH_ALL | _bitcoinforksjsLib.Transaction.SIGHASH_BITCOINCASHBIP143;
            if (data.privateKeys) {
                const pkMap = _lodash2.default.fromPairs(data.privateKeys.map(privateKeyWIF => {
                    const kp = _bitcoinforksjsLib.ECPair.fromWIF(privateKeyWIF);
                    return [kp.getAddress(), kp];
                }));
                data.inputs.forEach((_ref, index) => {
                    let {
                        address,
                        value
                    } = _ref;
                    return txb.sign(index, pkMap[address], null, hashType, value);
                });
            } else {
                const getPK = _lodash2.default.memoize(address => {
                    const path = data.addressPathsMap[address];
                    return _bitcoinforksjsLib.ECPair.fromWIF(hdkey.derive(path, 'spendable', {
                        spendable: true
                    }).privateEncoded);
                });
                data.inputs.forEach((_ref2, index) => {
                    let {
                        address,
                        value
                    } = _ref2;
                    return txb.sign(index, getPK(address), null, hashType, value);
                });
            }
            const tx = txb.build();
            const rawTx = tx.toBuffer();
            const txId = tx.getId().toString('hex');
            return {
                rawTx,
                txId
            };
        };
        var _lodash = require('lodash');
        var _lodash2 = _interopRequireDefault(_lodash);
        var _bitcoinforksjsLib = require('bitcoinforksjs-lib');

        function _interopRequireDefault(obj) {
            return obj && obj.__esModule ? obj : {
                default: obj
            };
        }

    }, {
        "undefined": undefined
    }],
    80: [function(require, module, exports) {
        'use strict';
        Object.defineProperty(exports, "__esModule", {
            value: true
        });
        exports.default = function(assetName, data, hdkey) {
            const txb = new _bitcoinforksjsLib.TransactionBuilder(_bitcoinforksjsLib.networks.bitcoingold);
            txb.enableBitcoinGold(true);
            for (const input of data.inputs) {
                const script = _bitcoinforksjsLib.address.toOutputScript(input.address, _bitcoinforksjsLib.networks.bitcoingold);
                txb.addInput(input.txId, input.vout, _bitcoinforksjsLib.Transaction.DEFAULT_SEQUENCE, script);
            }
            for (const [address, amount] of data.outputs) txb.addOutput(address, amount);
            const hashType = _bitcoinforksjsLib.Transaction.SIGHASH_ALL | _bitcoinforksjsLib.Transaction.SIGHASH_BITCOINCASHBIP143;
            if (data.privateKeys) {
                const pkMap = _lodash2.default.fromPairs(data.privateKeys.map(privateKeyWIF => {
                    const kp = _bitcoinforksjsLib.ECPair.fromWIF(privateKeyWIF, _bitcoinforksjsLib.networks.bitcoingold);
                    return [kp.getAddress(), kp];
                }));
                data.inputs.forEach((_ref, index) => {
                    let {
                        address,
                        value
                    } = _ref;
                    return txb.sign(index, pkMap[address], null, hashType, value);
                });
            } else {
                const getPK = _lodash2.default.memoize(address => {
                    const path = data.addressPathsMap[address];
                    return _bitcoinforksjsLib.ECPair.fromWIF(hdkey.derive(path, 'spendable', {
                        spendable: true
                    }).privateEncoded, _bitcoinforksjsLib.networks.bitcoingold);
                });
                data.inputs.forEach((_ref2, index) => {
                    let {
                        address,
                        value
                    } = _ref2;
                    return txb.sign(index, getPK(address), null, hashType, value);
                });
            }
            const tx = txb.build();
            const rawTx = tx.toBuffer();
            const txId = tx.getId().toString('hex');
            return {
                rawTx,
                txId
            };
        };
        var _lodash = require('lodash');
        var _lodash2 = _interopRequireDefault(_lodash);
        var _bitcoinforksjsLib = require('bitcoinforksjs-lib');

        function _interopRequireDefault(obj) {
            return obj && obj.__esModule ? obj : {
                default: obj
            };
        }

    }, {
        "undefined": undefined
    }],
    81: [function(require, module, exports) {
        'use strict';
        Object.defineProperty(exports, "__esModule", {
            value: true
        });
        exports.default = function(assetName, data, hdkey) {
            const asset = _assets2.default[assetName];
            const {
                versions
            } = asset.coinInfo;
            const tx = new _cointx.Transaction();
            for (const _ref of data.inputs) {
                const {
                    txId,
                    vout
                } = _ref;
                tx.addInput(txId, vout);
            }
            for (const [address, amount] of data.outputs) tx.addOutput(addressToScript(asset, address), amount);
            if (data.privateKeys) {
                const pkMap = _lodash2.default.fromPairs(data.privateKeys.map(privateKeyWIF => {
                    const address = asset.keys.encodePublicFromWIF(privateKeyWIF);
                    return [address, privateKeyWIF];
                }));
                data.inputs.forEach((_ref2, index) => {
                    let {
                        address
                    } = _ref2;
                    return sign(tx, index, pkMap[address], versions.private);
                });
            } else {
                const getPK = _lodash2.default.memoize(address => {
                    const path = data.addressPathsMap[address];
                    return hdkey.derive(path, 'spendable', {
                        spendable: true
                    }).privateEncoded;
                });
                data.inputs.forEach((_ref3, index) => {
                    let {
                        address
                    } = _ref3;
                    return sign(tx, index, getPK(address), versions.private);
                });
            }
            const rawTx = tx.toBuffer();
            const txId = tx.getId().toString('hex');
            return {
                rawTx,
                txId
            };
        };
        var _bigi = require('bigi');
        var _bigi2 = _interopRequireDefault(_bigi);
        var _ecdsa = require('ecdsa');
        var _ecdsa2 = _interopRequireDefault(_ecdsa);
        var _bs58check = require('bs58check');
        var _bs58check2 = _interopRequireDefault(_bs58check);
        var _bech = require('bech32');
        var _bech2 = _interopRequireDefault(_bech);
        var _wif = require('wif');
        var _wif2 = _interopRequireDefault(_wif);
        var _secp256k = require('secp256k1');
        var _secp256k2 = _interopRequireDefault(_secp256k);
        var _crypto = require('crypto');
        var _crypto2 = _interopRequireDefault(_crypto);
        var _lodash = require('lodash');
        var _lodash2 = _interopRequireDefault(_lodash);
        var _assets = require(25);
        var _assets2 = _interopRequireDefault(_assets);
        var _cointx = require(46);

        function _interopRequireDefault(obj) {
            return obj && obj.__esModule ? obj : {
                default: obj
            };
        }

        function addressToScript(asset, address) {
            if (asset.address.isP2PKH(address)) {
                const payload = _bs58check2.default.decodeUnsafe(address);
                return _cointx.scripts.pubKeyHashOutput(payload.slice(-20));
            }
            if (asset.address.isP2SH(address)) {
                const payload = _bs58check2.default.decodeUnsafe(address);
                return _cointx.scripts.scriptHashOutput(payload.slice(-20));
            }
            if (asset.address.isP2WPKH && asset.address.isP2WPKH(address) || asset.address.isP2WSH && asset.address.isP2WSH(address)) {
                const decoded = _bech2.default.decode(address);
                if (decoded.words[0] !== 0) throw new Error('#simple-tx.addressToScript: non-zero witness versions not supported');
                const hash = Buffer.from(_bech2.default.fromWords(decoded.words.slice(1)));
                return _cointx.scripts.witnessOutput(hash);
            }
            throw new Error(`#simple-tx.addressToScript: ${address} unrecognized address type.`);
        }

        function sign(tx, index, privateKeyWIF, privateVersion) {
            const {
                privateKey,
                compressed
            } = _wif2.default.decode(privateKeyWIF, privateVersion);
            const publicKey = _secp256k2.default.publicKeyCreate(privateKey, compressed);
            const sha = _crypto2.default.createHash('sha256').update(publicKey).digest();
            const pubKeyHash = _crypto2.default.createHash('rmd160').update(sha).digest();
            var prevOutScript = _cointx.scripts.pubKeyHashOutput(pubKeyHash);
            var hash = tx.hashForSignature(index, prevOutScript, _cointx.Transaction.SIGHASH_ALL);
            var hashBuf = Buffer.from(hash);
            var d = _bigi2.default.fromBuffer(privateKey);
            var sig = _ecdsa2.default.sign(hashBuf, d);
            var scriptSig = sig.toScriptSignature(_cointx.Transaction.SIGHASH_ALL);
            tx.setInputScript(index, _cointx.Script.fromChunks([scriptSig, publicKey]));
        }

    }, {
        "25": 25,
        "46": 46,
        "undefined": undefined
    }],
    82: [function(require, module, exports) {
        'use strict';
        Object.defineProperty(exports, "__esModule", {
            value: true
        });
        exports.default = function(assetName, data, hdkey) {
            const tx = _dcrcoreLib2.default.Transaction();
            for (const input of data.inputs) {
                tx.from({
                    txId: input.txId,
                    outputIndex: input.vout,
                    address: input.address,
                    script: _dcrcoreLib2.default.Script.fromAddress(input.address),
                    atoms: input.value
                });
            }
            for (const [address, amount] of data.outputs) tx.to(address, amount);
            if (data.privateKeys) {
                for (const privateKey of data.privateKeys) tx.sign(_dcrcoreLib2.default.PrivateKey(privateKey));
            } else {
                const getPrivateKeyFromPath = _lodash2.default.memoize(path => {
                    return _dcrcoreLib2.default.PrivateKey(hdkey.derive(path, 'spendable', {
                        spendable: true
                    }).privateEncoded);
                });
                for (const input of data.inputs) {
                    const path = data.addressPathsMap[input.address];
                    tx.sign(getPrivateKeyFromPath(path));
                }
            }
            const rawTx = tx.toBuffer();
            const txId = tx._getHash().reverse().toString('hex');
            return {
                rawTx,
                txId
            };
        };
        var _lodash = require('lodash');
        var _lodash2 = _interopRequireDefault(_lodash);
        var _dcrcoreLib = require('dcrcore-lib');
        var _dcrcoreLib2 = _interopRequireDefault(_dcrcoreLib);

        function _interopRequireDefault(obj) {
            return obj && obj.__esModule ? obj : {
                default: obj
            };
        }

    }, {
        "undefined": undefined
    }],
    83: [function(require, module, exports) {
        'use strict';
        Object.defineProperty(exports, "__esModule", {
            value: true
        });
        exports.default = function(assetName, data, hdkey) {
            const tx = new _ethereumjsTx2.default(data);
            const privateKey = data.privateKey || hdkey.derive('m/0/0', 'tag-does-not-matter', {
                spendable: true
            }).privateKey;
            tx.sign(privateKey);
            const rawTx = tx.serialize();
            const txId = tx.hash().toString('hex');
            return {
                rawTx,
                txId
            };
        };
        var _ethereumjsTx = require('ethereumjs-tx');
        var _ethereumjsTx2 = _interopRequireDefault(_ethereumjsTx);

        function _interopRequireDefault(obj) {
            return obj && obj.__esModule ? obj : {
                default: obj
            };
        }

    }, {
        "undefined": undefined
    }],
    84: [function(require, module, exports) {
        'use strict';
        Object.defineProperty(exports, "__esModule", {
            value: true
        });
        exports.default = function(assetName, _ref, hdkey) {
            let {
                tx
            } = _ref;
            const {
                privateKey
            } = hdkey.derive('m/0/0', 'tag-does-not-matter', {
                spendable: true
            });
            _factomjsLib2.default.transaction.signInput(tx, 0, privateKey);
            const rawTx = _factomjsLib2.default.encoding.Transaction.encode(tx);
            const txId = _factomjsLib2.default.transaction.getSigHash(tx).toString('hex');
            return {
                rawTx,
                txId
            };
        };
        var _factomjsLib = require('factomjs-lib');
        var _factomjsLib2 = _interopRequireDefault(_factomjsLib);

        function _interopRequireDefault(obj) {
            return obj && obj.__esModule ? obj : {
                default: obj
            };
        }

    }, {
        "undefined": undefined
    }],
    85: [function(require, module, exports) {
        'use strict';
        Object.defineProperty(exports, "__esModule", {
            value: true
        });
        exports.default = function(assetName, data, hdkey) {
            const createTx = selectCreateTx(assetName);
            return createTx(assetName, data, hdkey);
        };
        var _bcash = require(79);
        var _bcash2 = _interopRequireDefault(_bcash);
        var _bgold = require(80);
        var _bgold2 = _interopRequireDefault(_bgold);
        var _bitcoin = require(81);
        var _bitcoin2 = _interopRequireDefault(_bitcoin);
        var _decred = require(82);
        var _decred2 = _interopRequireDefault(_decred);
        var _ethereum = require(83);
        var _ethereum2 = _interopRequireDefault(_ethereum);
        var _factom = require(84);
        var _factom2 = _interopRequireDefault(_factom);
        var _ripple = require(86);
        var _ripple2 = _interopRequireDefault(_ripple);

        function _interopRequireDefault(obj) {
            return obj && obj.__esModule ? obj : {
                default: obj
            };
        }

        function selectCreateTx(assetName) {
            switch (assetName) {
                case 'bcash':
                case 'bcashclaim':
                    return _bcash2.default;
                case 'bgold':
                case 'bgoldclaim':
                    return _bgold2.default;
                case 'bitcoin':
                case 'dash':
                case 'digibyte':
                case 'litecoin':
                case 'qtumignition':
                case 'vertcoin':
                case 'zcash':
                    return _bitcoin2.default;
                case 'decred':
                    return _decred2.default;
                case 'ethereum':
                case 'ethereumclassic':
                    return _ethereum2.default;
                case 'factom':
                    return _factom2.default;
                case 'ripple':
                    return _ripple2.default;
                default:
                    throw new Error(`${assetName} is unsupported for transaction signing in the wallet process`);
            }
        }

    }, {
        "79": 79,
        "80": 80,
        "81": 81,
        "82": 82,
        "83": 83,
        "84": 84,
        "86": 86
    }],
    86: [function(require, module, exports) {
        'use strict';
        Object.defineProperty(exports, "__esModule", {
            value: true
        });
        exports.default = function(assetName, _ref, hdkey) {
            let {
                to,
                destTag,
                amount,
                fee,
                sequence,
                ledgerCurrentIndex,
                publicKey,
                privateKey
            } = _ref;
            if (!publicKey || !privateKey) {
                ({
                    privateKey,
                    publicKey
                } = hdkey.derive('m/0/0', 'tag-does-not-matter', {
                    spendable: true
                }));
            }
            const tx = {
                Account: _assets2.default.ripple.keys.encodePublic(publicKey),
                Amount: amount,
                Destination: to,
                DestinationTag: destTag,
                Fee: fee,
                Flags: 0x80000000,
                LastLedgerSequence: ledgerCurrentIndex + 3,
                Sequence: sequence,
                TransactionType: 'Payment',
                SigningPubKey: publicKey.toString('hex').toUpperCase()
            };
            tx.TxnSignature = keypairs.sign((0, _tx.toBuffer)(tx, {
                sign: true
            }), privateKey);
            const rawTx = (0, _tx.toBuffer)(tx);
            return {
                rawTx,
                txId: (0, _tx.getHash)(rawTx)
            };
        };
        var _assets = require(25);
        var _assets2 = _interopRequireDefault(_assets);
        var _keypairs = require(77);
        var keypairs = _interopRequireWildcard(_keypairs);
        var _tx = require(78);

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

        function _interopRequireDefault(obj) {
            return obj && obj.__esModule ? obj : {
                default: obj
            };
        }

    }, {
        "25": 25,
        "77": 77,
        "78": 78
    }],
    87: [function(require, module, exports) {
        'use strict';
        Object.defineProperty(exports, "__esModule", {
            value: true
        });
        exports.default = function(_ref) {
            let {
                publicKeyEncode
            } = _ref;
            return {
                type: 'ecdsa-threshold',
                pairingData,
                publicKeys: (0, _publicKeys2.default)(publicKeyEncode)
            };
        };
        var _pairingData = require(88);
        var pairingData = _interopRequireWildcard(_pairingData);
        var _publicKeys = require(89);
        var _publicKeys2 = _interopRequireDefault(_publicKeys);

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

    }, {
        "88": 88,
        "89": 89
    }],
    88: [function(require, module, exports) {
        'use strict';
        Object.defineProperty(exports, "__esModule", {
            value: true
        });
        exports.generate = generate;
        exports.validate = validate;
        var _crypto = require('crypto');
        var _crypto2 = _interopRequireDefault(_crypto);
        var _secp256k = require('secp256k1');
        var secp256k1 = _interopRequireWildcard(_secp256k);

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

        function _interopRequireDefault(obj) {
            return obj && obj.__esModule ? obj : {
                default: obj
            };
        }

        function generate(hdkey, code) {
            const sha = _crypto2.default.createHash('sha256').update(code).digest();
            const sigObj = secp256k1.sign(sha, hdkey.privateKey);
            return {
                data: {
                    publicKey: hdkey.publicKey.toString('hex')
                },
                proof: {
                    signature: sigObj.signature.toString('hex')
                }
            };
        }

        function validate(code, _ref, _ref2) {
            let {
                publicKey
            } = _ref;
            let {
                signature
            } = _ref2;
            if (!publicKey) return false;
            const sha = _crypto2.default.createHash('sha256').update(code).digest();
            return secp256k1.verify(sha, Buffer.from(signature, 'hex'), Buffer.from(publicKey, 'hex'));
        }

    }, {
        "undefined": undefined
    }],
    89: [function(require, module, exports) {
        'use strict';
        Object.defineProperty(exports, "__esModule", {
            value: true
        });
        exports.default = function(encode) {
            function generate(hdkey, _ref) {
                let {
                    publicKey
                } = _ref;
                const privateKey = hdkey.privateKey;
                return secp256k1.publicKeyTweakMul(Buffer.from(publicKey, 'hex'), privateKey);
            }
            return {
                generate,
                encode
            };
        };
        var _secp256k = require('secp256k1');
        var secp256k1 = _interopRequireWildcard(_secp256k);

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

    }, {
        "undefined": undefined
    }],
    90: [function(require, module, exports) {
        'use strict';
        Object.defineProperty(exports, "__esModule", {
            value: true
        });
        var _alice = require(87);
        Object.defineProperty(exports, 'alice', {
            enumerable: true,
            get: function() {
                return _interopRequireDefault(_alice).default;
            }
        });

        function _interopRequireDefault(obj) {
            return obj && obj.__esModule ? obj : {
                default: obj
            };
        }

    }, {
        "87": 87
    }],
    91: [function(require, module, exports) {
        'use strict';
        Object.defineProperty(exports, "__esModule", {
            value: true
        });
        exports.default = function(_ref) {
            let {
                network
            } = _ref;
            return {
                type: 'multisig',
                network: network,
                pairingData,
                publicKeys: (0, _publicKeys2.default)(network)
            };
        };
        var _pairingData = require(92);
        var pairingData = _interopRequireWildcard(_pairingData);
        var _publicKeys = require(93);
        var _publicKeys2 = _interopRequireDefault(_publicKeys);

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

    }, {
        "92": 92,
        "93": 93
    }],
    92: [function(require, module, exports) {
        'use strict';
        Object.defineProperty(exports, "__esModule", {
            value: true
        });
        exports.generate = generate;
        exports.validate = validate;
        var _crypto = require('crypto');
        var _crypto2 = _interopRequireDefault(_crypto);
        var _secp256k = require('secp256k1');
        var secp256k1 = _interopRequireWildcard(_secp256k);
        var _hdkey = require('hdkey');
        var _hdkey2 = _interopRequireDefault(_hdkey);

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

        function _interopRequireDefault(obj) {
            return obj && obj.__esModule ? obj : {
                default: obj
            };
        }

        function generate(hdkey, code) {
            const sha = _crypto2.default.createHash('sha256').update(code).digest();
            const sigObj = secp256k1.sign(sha, hdkey.privateKey);
            return {
                data: {
                    xPub: hdkey.publicExtendedKey
                },
                proof: {
                    signature: sigObj.signature.toString('hex')
                }
            };
        }

        function validate(code, _ref, _ref2) {
            let {
                xPub
            } = _ref;
            let {
                signature
            } = _ref2;
            if (!xPub) return false;
            const sha = _crypto2.default.createHash('sha256').update(code).digest();
            const hdkey = _hdkey2.default.fromExtendedKey(xPub);
            return secp256k1.verify(sha, Buffer.from(signature, 'hex'), hdkey.publicKey);
        }

    }, {
        "undefined": undefined
    }],
    93: [function(require, module, exports) {
        'use strict';
        Object.defineProperty(exports, "__esModule", {
            value: true
        });
        exports.default = function(network) {
            function generate(hdkey, _ref, path) {
                let {
                    xPub
                } = _ref;
                const mobileHDKey = _hdkey2.default.fromExtendedKey(xPub);
                const publicKeys = [hdkey.derive(path).publicKey, mobileHDKey.derive(path).publicKey];
                const redeemScript = _bitcoinjsLib2.default.script.multisig.output.encode(2, publicKeys);
                return _bitcoinjsLib2.default.script.scriptHash.output.encode(_bitcoinjsLib2.default.crypto.hash160(redeemScript));
            }

            function encode(publicKey) {
                return _bitcoinjsLib2.default.address.fromOutputScript(publicKey, network.toBitcoinJS());
            }
            return {
                generate,
                encode
            };
        };
        var _hdkey = require('hdkey');
        var _hdkey2 = _interopRequireDefault(_hdkey);
        var _bitcoinjsLib = require('bitcoinjs-lib');
        var _bitcoinjsLib2 = _interopRequireDefault(_bitcoinjsLib);

        function _interopRequireDefault(obj) {
            return obj && obj.__esModule ? obj : {
                default: obj
            };
        }

    }, {
        "undefined": undefined
    }],
    94: [function(require, module, exports) {
        arguments[4][90][0].apply(exports, arguments)
    }, {
        "90": 90,
        "91": 91
    }],
    95: [function(require, module, exports) {
        'use strict';
        hookNodePath();
        require(2);
        require('core-js/fn/symbol');
        require('babel' + '-register')({
            resolveModuleSource: require(96).resolve,
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
        "2": 2,
        "96": 96,
        "undefined": undefined
    }],
    96: [function(require, module, exports) {
        'use strict';
        var babelResolve = require('babel-resolve');
        var resolver = babelResolve.create('#', './src/app/_local_modules');
        module.exports = resolver;

    }, {
        "undefined": undefined
    }],
    97: [function(require, module, exports) {
        'use strict';
        if ("production" === 'production') {
            require(2);
            require('core-js/fn/symbol');
        } else if ("production" === 'development') {
            require(95);
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
        "95": 95,
        "undefined": undefined
    }],
    98: [function(require, module, exports) {
        'use strict';
        Object.defineProperty(exports, "__esModule", {
            value: true
        });
        var _aw = require('aw');
        var _aw2 = _interopRequireDefault(_aw);
        var _backupClient = require(40);
        var _backupClient2 = _interopRequireDefault(_backupClient);
        var _instance = require(101);
        var _instance2 = _interopRequireDefault(_instance);
        var _keys = require(105);
        var walletKeys = _interopRequireWildcard(_keys);
        var _appConfig = require(4);

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

        function _interopRequireDefault(obj) {
            return obj && obj.__esModule ? obj : {
                default: obj
            };
        }

        function _asyncToGenerator(fn) {
            return function() {
                var gen = fn.apply(this, arguments);
                return new Promise(function(resolve, reject) {
                    function step(key, arg) {
                        try {
                            var info = gen[key](arg);
                            var value = info.value;
                        } catch (error) {
                            reject(error);
                            return;
                        }
                        if (info.done) {
                            resolve(value);
                        } else {
                            return Promise.resolve(value).then(function(value) {
                                step("next", value);
                            }, function(err) {
                                step("throw", err);
                            });
                        }
                    }
                    return step("next");
                });
            };
        }
        const api = new _backupClient2.default(_appConfig.EXODUS_SERVER);
        const account = {
            create(passphrase, email) {
                return _asyncToGenerator(function*() {
                    _instance2.default.backupOnChange = false;
                    if (!Buffer.isBuffer(passphrase)) passphrase = Buffer.from(passphrase, 'utf8');
                    yield _instance2.default.current.updatePassphrase(passphrase);
                    const [err] = yield(0, _aw2.default)(api.create, {
                        context: api
                    })(_instance2.default.current, passphrase, email);
                    if (err) {
                        console.error(err);
                        throw err;
                    }
                    let now = new Date().toISOString();
                    let status = {
                        email,
                        first: now,
                        last: now
                    };
                    yield _instance2.default.current.updateKeyData(walletKeys.backup(), status);
                    const [err2] = yield(0, _aw2.default)(api.backupWallet, {
                        context: api
                    })(_instance2.default.current);
                    if (err2) {
                        console.error(err2);
                        throw err2;
                    }
                    _instance2.default.backupOnChange = true;
                    return status;
                })();
            }
        };
        exports.default = account;

    }, {
        "101": 101,
        "105": 105,
        "4": 4,
        "40": 40,
        "undefined": undefined
    }],
    99: [function(require, module, exports) {
        'use strict';
        var _browserWindowArgs = require(42);

        function setArgs() {
            const hashStr = window.location.hash.slice(1);
            if (!hashStr) throw new Error('walletDir not set.');
            const args = (0, _browserWindowArgs.decode)(hashStr);
            global.__args__ = args;
        }
        setArgs();

    }, {
        "42": 42
    }],
    100: [function(require, module, exports) {
        'use strict';
        console.time('wallet-load');
        require(97);
        require(99);
        require(102);

    }, {
        "102": 102,
        "97": 97,
        "99": 99
    }],
    101: [function(require, module, exports) {
        'use strict';
        Object.defineProperty(exports, "__esModule", {
            value: true
        });
        exports.trapUpdate = trapUpdate;
        var _lodash = require('lodash');
        var _ms = require('ms');
        var _ms2 = _interopRequireDefault(_ms);
        var _keys = require(105);
        var walletKeys = _interopRequireWildcard(_keys);
        var _backupClient = require(40);
        var _backupClient2 = _interopRequireDefault(_backupClient);

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

        function _interopRequireDefault(obj) {
            return obj && obj.__esModule ? obj : {
                default: obj
            };
        }

        function _asyncToGenerator(fn) {
            return function() {
                var gen = fn.apply(this, arguments);
                return new Promise(function(resolve, reject) {
                    function step(key, arg) {
                        try {
                            var info = gen[key](arg);
                            var value = info.value;
                        } catch (error) {
                            reject(error);
                            return;
                        }
                        if (info.done) {
                            resolve(value);
                        } else {
                            return Promise.resolve(value).then(function(value) {
                                step("next", value);
                            }, function(err) {
                                step("throw", err);
                            });
                        }
                    }
                    return step("next");
                });
            };
        }
        const backupClient = new _backupClient2.default(_backupClient2.default.API_URL);
        const aw = require('aw')({
            callback: false,
            context: backupClient
        });
        let walletInstance = {
            backupOnChange: true,
            set current(val) {
                this.wallet = trapUpdate(val);
                this._wallet = val;
            },
            get current() {
                return this.backupOnChange ? this.wallet : this._wallet;
            }
        };
        exports.default = walletInstance;
        const backupWallet = (0, _lodash.debounce)(_asyncToGenerator(function*() {
            console.log('Backing up...');
            let status = yield walletInstance._wallet.fetchKeyData(walletKeys.backup());
            if (!status) return console.warn('Skipping backup since status is empty.');
            if (!walletInstance.backupOnChange) return console.warn('Skipping backup since backupOnChange is false.');
            let [backupErr] = yield aw(backupClient.backupWallet)(walletInstance.current);
            if (backupErr) {
                console.error(backupErr);
                throw backupErr;
            }
            status = Object.assign({}, status, {
                last: new Date().toISOString()
            });
            yield walletInstance._wallet.updateKeyData(walletKeys.backup(), status);
            console.log('Backed up successfully.');
        }), (0, _ms2.default)('10s'), {
            leading: false,
            trailing: true,
            maxWait: (0, _ms2.default)('20s')
        });

        function trapUpdate(obj) {
            console.log('trap backup!!');
            let handler = {
                get(target, propKey, receiver) {
                    if (propKey !== 'updateKeyData') return target[propKey];
                    const updateKeyData = target[propKey];
                    return _asyncToGenerator(function*() {
                        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
                            args[_key] = arguments[_key];
                        }
                        yield updateKeyData.apply(target, args);
                        backupWallet();
                    });
                }
            };
            return new Proxy(obj, handler);
        }

    }, {
        "105": 105,
        "40": 40,
        "undefined": undefined
    }],
    102: [function(require, module, exports) {
        'use strict';
        let run = (() => {
            var _ref = _asyncToGenerator(function*(argsObj) {
                console.timeEnd('wallet-load');
                console.time('wallet-run');
                const walletDir = argsObj.walletDir;
                const walletExists = yield _wallet2.default.exists(walletDir);
                let wallet;
                if (walletExists) {
                    try {
                        if (argsObj.recoveryPhrase) wallet = yield recoverFromPhrase(argsObj);
                        else if (argsObj.recoveryLink) wallet = yield recoverFromLink(argsObj);
                        else wallet = yield loadExisting(argsObj);
                        console.log('wallet load success: ' + argsObj.walletDir);
                    } catch (err) {
                        console.log('**** WALLET LOAD FAIL');
                        console.error(err);
                        console.log('');
                        if (!err.message || !err.message.match(/unable to authenticate data/) && !err.message.match(/salt failed/)) {
                            walletController.setError(err.message);
                        }
                        if (err.message && err.message.match(/salt failed/)) {
                            return walletController.setSaltConnectionFailed();
                        } else {
                            return walletController.setInvalidPassphrase();
                        }
                    }
                } else {
                    try {
                        wallet = yield _wallet2.default.createWithPassphraseFile(walletDir);
                    } catch (err) {
                        console.error('create wallet fail');
                        return console.error(err);
                    }
                }
                _instance2.default.current = wallet;
                global.walletInstance = _instance2.default;
                (0, _server.createServer)('wallet', _instance2.default.current);
                (0, _server.createServer)('account', _account2.default);
                let action;
                if (wallet.needsRefresh) action = 'refreshAll';
                else if (argsObj.recoveryPhrase) action = 'restored';
                walletController.setWalletLoaded(true, action);
                console.timeEnd('wallet-run');
            });
            return function run(_x) {
                return _ref.apply(this, arguments);
            };
        })();
        let loadExisting = (() => {
            var _ref2 = _asyncToGenerator(function*() {
                let {
                    walletDir,
                    passphrase
                } = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
                const walletPaths = (0, _paths2.default)(walletDir);
                const walletExists = yield _wallet2.default.exists(walletDir);
                if (!walletExists) throw new Error('Wallet does not exist.');
                let wallet;
                const passphraseFileExists = yield walletPaths.passphraseFileExists();
                if (passphraseFileExists) {
                    wallet = yield _wallet2.default.loadWithPassphraseFile(walletPaths.walletDir);
                } else {
                    wallet = yield _wallet2.default.load(walletPaths.walletDir, passphrase);
                }
                const backupKey = walletKeys.backup();
                const backup = yield wallet.fetchKeyData(backupKey);
                if (backup && !Object.keys(backup).length) {
                    yield wallet.deleteKeyData(backupKey);
                }
                return wallet;
            });
            return function loadExisting() {
                return _ref2.apply(this, arguments);
            };
        })();
        let recoverFromPhrase = (() => {
            var _ref4 = _asyncToGenerator(function*(_ref3) {
                let {
                    walletDir,
                    recoveryPhrase,
                    recoveryPhrasePassphrase
                } = _ref3;
                recoveryPhrase = normalizeRestorePhrase(recoveryPhrase);
                if (!require('bip39').validateMnemonic(recoveryPhrase)) {
                    throw new Error('Invalid recovery phrase.');
                }
                const walletExists = yield _wallet2.default.exists(walletDir);
                if (walletExists) {
                    const backupDestDir = _path2.default.join((0, _env.walletBackupDir)(), (0, _dateStr2.default)(), 'exodus.wallet');
                    yield(0, _aw2.default)(_fsExtra2.default.move)(walletDir, backupDestDir);
                }
                const wallet = yield api.recoverWalletFromMnemonic(walletDir, recoveryPhrase, recoveryPhrasePassphrase);
                yield wallet.deleteKeyData(walletKeys.backup());
                return wallet;
            });
            return function recoverFromPhrase(_x3) {
                return _ref4.apply(this, arguments);
            };
        })();
        let recoverFromLink = (() => {
            var _ref6 = _asyncToGenerator(function*(_ref5) {
                let {
                    walletDir,
                    recoveryLink,
                    passphrase
                } = _ref5;
                const params = (0, _restoreLink.decodeLink)(recoveryLink);
                const [err, entropy] = yield(0, _aw2.default)({
                    context: api
                })(api.recoverEntropy)(params, passphrase);
                if (err) throw err;
                const backupDestDir = _path2.default.join((0, _env.walletBackupDir)(), (0, _dateStr2.default)(), 'exodus.wallet');
                const walletExists = yield _wallet2.default.exists(walletDir);
                if (walletExists) {
                    yield(0, _aw2.default)(_fsExtra2.default.move)(walletDir, backupDestDir);
                }
                const [receoverDataErr, wallet] = yield(0, _aw2.default)({
                    context: api
                })(api.recoverWallet)(passphrase, entropy, walletDir);
                if (receoverDataErr) {
                    if (yield _fsExtra2.default.pathExists(backupDestDir)) {
                        yield(0, _aw2.default)(_fsExtra2.default.move)(backupDestDir, walletDir, {
                            overwrite: true
                        });
                    }
                    throw receoverDataErr;
                }
                return wallet;
            });
            return function recoverFromLink(_x4) {
                return _ref6.apply(this, arguments);
            };
        })();
        var _aw = require('aw');
        var _aw2 = _interopRequireDefault(_aw);
        var _fsExtra = require('fs-extra');
        var _fsExtra2 = _interopRequireDefault(_fsExtra);
        var _path = require('path');
        var _path2 = _interopRequireDefault(_path);
        var _wallet = require(104);
        var _wallet2 = _interopRequireDefault(_wallet);
        var _instance = require(101);
        var _instance2 = _interopRequireDefault(_instance);
        var _paths = require(107);
        var _paths2 = _interopRequireDefault(_paths);
        var _keys = require(5);
        var walletKeys = _interopRequireWildcard(_keys);
        var _server = require(55);
        var _client = require(54);
        var _dateStr = require(53);
        var _dateStr2 = _interopRequireDefault(_dateStr);
        var _env = require(57);
        var _backupClient = require(40);
        var _backupClient2 = _interopRequireDefault(_backupClient);
        var _appConfig = require(4);
        var _account = require(98);
        var _account2 = _interopRequireDefault(_account);
        var _restoreLink = require('@exodus/restore-link');

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

        function _interopRequireDefault(obj) {
            return obj && obj.__esModule ? obj : {
                default: obj
            };
        }

        function _asyncToGenerator(fn) {
            return function() {
                var gen = fn.apply(this, arguments);
                return new Promise(function(resolve, reject) {
                    function step(key, arg) {
                        try {
                            var info = gen[key](arg);
                            var value = info.value;
                        } catch (error) {
                            reject(error);
                            return;
                        }
                        if (info.done) {
                            resolve(value);
                        } else {
                            return Promise.resolve(value).then(function(value) {
                                step("next", value);
                            }, function(err) {
                                step("throw", err);
                            });
                        }
                    }
                    return step("next");
                });
            };
        }
        const api = new _backupClient2.default(_appConfig.EXODUS_SERVER);
        const walletController = (0, _client.createClient)('wallet-controller');

        function normalizeRestorePhrase(restorePhrase) {
            if (!restorePhrase.includes('\n')) return restorePhrase;
            restorePhrase = restorePhrase.trim();
            return restorePhrase.split('\n').join(' ');
        }
        run(global.__args__).then(() => {}).catch(err => console.error(err));

    }, {
        "101": 101,
        "104": 104,
        "107": 107,
        "4": 4,
        "40": 40,
        "5": 5,
        "53": 53,
        "54": 54,
        "55": 55,
        "57": 57,
        "98": 98,
        "undefined": undefined
    }],
    103: [function(require, module, exports) {
        'use strict';
        Object.defineProperty(exports, "__esModule", {
            value: true
        });
        var _es6Enum = require('es6-enum');
        var _es6Enum2 = _interopRequireDefault(_es6Enum);

        function _interopRequireDefault(obj) {
            return obj && obj.__esModule ? obj : {
                default: obj
            };
        }
        exports.default = (0, _es6Enum2.default)('PASS_FILE_NOT_EXISTS');

    }, {
        "undefined": undefined
    }],
    104: [function(require, module, exports) {
        'use strict';
        Object.defineProperty(exports, "__esModule", {
            value: true
        });
        exports.default = undefined;
        var _assert = require('assert');
        var _assert2 = _interopRequireDefault(_assert);
        var _bip = require('bip39');
        var _bip2 = _interopRequireDefault(_bip);
        var _crypto = require('crypto');
        var _crypto2 = _interopRequireDefault(_crypto);
        var _fsExtra = require('fs-extra');
        var _fsExtra2 = _interopRequireDefault(_fsExtra);
        var _bitcoinSeed = require('bitcoin-seed');
        var bitcoinSeed = _interopRequireWildcard(_bitcoinSeed);
        var _bip3 = require(41);
        var _exodusPurpose = require(68);
        var _exodusPurpose2 = _interopRequireDefault(_exodusPurpose);
        var _factomjsLib = require('factomjs-lib');
        var _factomjsLib2 = _interopRequireDefault(_factomjsLib);
        var _makeConcurrent = require('make-concurrent');
        var _makeConcurrent2 = _interopRequireDefault(_makeConcurrent);
        var _secoKeyval = require('seco-keyval');
        var _secoKeyval2 = _interopRequireDefault(_secoKeyval);
        var _secoRw = require('seco-rw');
        var _secoRw2 = _interopRequireDefault(_secoRw);
        var _bufferNoise = require('buffer-noise');
        var _bufferNoise2 = _interopRequireDefault(_bufferNoise);
        var _zlib = require('zlib');
        var _appConfig = require(4);
        var _paths = require(107);
        var _paths2 = _interopRequireDefault(_paths);
        var _passphraseFile = require(106);
        var _makeError = require(69);
        var _makeError2 = _interopRequireDefault(_makeError);
        var _errors = require(103);
        var _errors2 = _interopRequireDefault(_errors);
        var _assets = require(25);
        var _assets2 = _interopRequireDefault(_assets);
        var _simpleTx = require(85);
        var _simpleTx2 = _interopRequireDefault(_simpleTx);

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

        function _interopRequireDefault(obj) {
            return obj && obj.__esModule ? obj : {
                default: obj
            };
        }

        function _asyncToGenerator(fn) {
            return function() {
                var gen = fn.apply(this, arguments);
                return new Promise(function(resolve, reject) {
                    function step(key, arg) {
                        try {
                            var info = gen[key](arg);
                            var value = info.value;
                        } catch (error) {
                            reject(error);
                            return;
                        }
                        if (info.done) {
                            resolve(value);
                        } else {
                            return Promise.resolve(value).then(function(value) {
                                step("next", value);
                            }, function(err) {
                                step("throw", err);
                            });
                        }
                    }
                    return step("next");
                });
            };
        }
        const {
            expand: expand32k,
            shrink: shrink32k
        } = (0, _bufferNoise2.default)(Math.pow(2, 15));
        const header = {
            appName: 'Exodus',
            appVersion: _appConfig.PACKAGE.version
        };
        const kvLockCall = (0, _makeConcurrent2.default)((() => {
            var _ref = _asyncToGenerator(function*(method) {
                const lockFile = `${this._walletPaths.infoFile}.lock`;
                yield _fsExtra2.default.outputFile(lockFile, '');
                try {
                    for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
                        args[_key - 1] = arguments[_key];
                    }
                    yield this._kv[method](...args);
                } catch (err) {
                    throw err;
                } finally {
                    yield _fsExtra2.default.remove(lockFile);
                }
            });
            return function(_x) {
                return _ref.apply(this, arguments);
            };
        })(), {
            concurrency: 1
        });
        let Wallet = class Wallet {
            constructor() {
                this._kv = null;
                this._seed = null;
                this._walletPaths = null;
                this._HDKeys = {
                    master: null
                };
                this.needsRefresh = false;
            }
            static create(walletDir, passphrase) {
                var _arguments = arguments;
                return _asyncToGenerator(function*() {
                    let {
                        seed,
                        infoFileExists
                    } = _arguments.length > 2 && _arguments[2] !== undefined ? _arguments[2] : {};
                    yield _fsExtra2.default.mkdirs(walletDir);
                    const walletPaths = (0, _paths2.default)(walletDir);
                    const seedExists = yield walletPaths.seedFileExists();
                    if (seedExists) throw new Error(`${walletPaths.seedFile} exists. Cannot create wallet.`);
                    if (!infoFileExists) {
                        const infoExists = yield walletPaths.infoFileExists();
                        if (infoExists) throw new Error(`${walletPaths.infoFile} exists. Cannot create wallet.`);
                    }
                    if (!seed) seed = bitcoinSeed.fromRandom();
                    (0, _assert2.default)(bitcoinSeed.isBitcoinSeed(seed), 'If passing in `seed`, must be bitcoin-seed.');
                    const seedBuffer = seed.serialize();
                    const seco = (0, _secoRw2.default)(walletPaths.seedFile, passphrase, header);
                    yield seco.write(expand32k((0, _zlib.gzipSync)(seedBuffer)));
                    seco.destroy();
                    let wallet = new Wallet();
                    wallet._setSeed(seed);
                    wallet._walletPaths = walletPaths;
                    yield wallet._openKV(passphrase, !infoFileExists);
                    return wallet;
                })();
            }
            static createFromRecovery(walletDir, passphrase, entropy, tempInfoFile) {
                return _asyncToGenerator(function*() {
                    const walletPaths = (0, _paths2.default)(walletDir);
                    const mnemonic = _bip2.default.entropyToMnemonic(entropy.toString('hex'));
                    const seed = bitcoinSeed.fromMnemonic(mnemonic);
                    yield _fsExtra2.default.copy(tempInfoFile, walletPaths.infoFile);
                    return Wallet.create(walletDir, passphrase, {
                        seed,
                        infoFileExists: true
                    });
                })();
            }
            static createFromMnemonicRecoveryPhrase(walletDir, tempInfoFile, mnemonic, mnemonicPassphrase) {
                return _asyncToGenerator(function*() {
                    const passphrase = _crypto2.default.randomBytes(32).toString('base64');
                    yield(0, _passphraseFile.writePassphraseFile)(walletDir, passphrase);
                    const seed = bitcoinSeed.fromMnemonic(mnemonic, mnemonicPassphrase);
                    const infoFileExists = yield _fsExtra2.default.pathExists(tempInfoFile);
                    if (infoFileExists) {
                        const walletPaths = (0, _paths2.default)(walletDir);
                        yield _fsExtra2.default.copy(tempInfoFile, walletPaths.infoFile);
                    }
                    return Wallet.create(walletDir, passphrase, {
                        seed,
                        infoFileExists
                    });
                })();
            }
            static createWithPassphraseFile(walletDir) {
                return _asyncToGenerator(function*() {
                    const passphrase = _crypto2.default.randomBytes(32).toString('base64');
                    yield(0, _passphraseFile.writePassphraseFile)(walletDir, passphrase);
                    return Wallet.create(walletDir, passphrase);
                })();
            }
            static exists(walletDir) {
                return _asyncToGenerator(function*() {
                    const walletPaths = (0, _paths2.default)(walletDir);
                    return walletPaths.seedFileExists();
                })();
            }
            static load(walletPath, passphrase) {
                return _asyncToGenerator(function*() {
                    const walletPaths = (0, _paths2.default)(walletPath);
                    const seedExists = yield walletPaths.seedFileExists();
                    if (!seedExists) throw new Error(`${walletPaths.seedFile} does not exists. Cannot load wallet.`);
                    let wallet = new Wallet();
                    const seco = (0, _secoRw2.default)(walletPaths.seedFile, passphrase);
                    let seed = yield seco.read();
                    seco.destroy();
                    wallet._setSeed(bitcoinSeed.fromBuffer((0, _zlib.gunzipSync)(shrink32k(seed))));
                    wallet._walletPaths = walletPaths;
                    yield wallet._openKV(passphrase);
                    return wallet;
                })();
            }
            static loadWithPassphraseFile(walletPath) {
                return _asyncToGenerator(function*() {
                    const walletPaths = (0, _paths2.default)(walletPath);
                    const passExists = yield walletPaths.passphraseFileExists();
                    if (!passExists) throw (0, _makeError2.default)({
                        code: _errors2.default.PASS_FILE_NOT_EXISTS
                    });
                    const data = yield(0, _passphraseFile.readPassphraseFile)(walletPaths.walletDir);
                    if (!data) throw new Error('No data from readPassphraseFile');
                    if (!('passphrase' in data)) throw new Error('Passhrase not in data.');
                    return Wallet.load(walletPath, data.passphrase);
                })();
            }
            _openKV(passphrase, create) {
                var _this = this;
                return _asyncToGenerator(function*() {
                    const infoExists = yield _this._walletPaths.infoFileExists();
                    if (!create && !infoExists) {
                        console.warn(`${_this._walletPaths.infoFile} does not exist. Continuing.`);
                        _this.needsRefresh = true;
                    }
                    _this._kv = new _secoKeyval2.default(_this._walletPaths.infoFile, header);
                    const deterministicKey = _this._getDeterministicKey();
                    try {
                        yield _this._kv.open(deterministicKey);
                    } catch (e) {
                        const isWrongPass = /unsupported state or unable to authenticate data/i.test(e);
                        if (isWrongPass) {
                            console.log("deterministic key doesn't work; trying again with passphrase");
                            yield _this._kv.open(passphrase);
                            yield _this._kv.changePassphraseOnNextWrite(deterministicKey);
                        } else {
                            console.error('Unable to open info.seco; creating new one');
                            console.error(e);
                            yield _fsExtra2.default.remove(_this._walletPaths.infoFile);
                            _this._kv = new _secoKeyval2.default(_this._walletPaths.infoFile, header);
                            yield _this._kv.open(deterministicKey);
                            _this.needsRefresh = true;
                        }
                    }
                    if (!infoExists) {
                        yield _this._kv.set('config', {
                            exodusVersion: _appConfig.PACKAGE.version
                        });
                    }
                })();
            }
            updatePassphrase(passphrase) {
                var _this2 = this;
                return _asyncToGenerator(function*() {
                    const seedExists = yield _this2._walletPaths.seedFileExists();
                    if (!seedExists) throw new Error(`${_this2._walletPaths.seedFile} does not exist. Cannot update passphrase.`);
                    const infoExists = yield _this2._walletPaths.infoFileExists();
                    if (!infoExists) throw new Error(`${_this2._walletPaths.infoFile} does not exist. Cannot update passphrase.`);
                    const seedBuffer = _this2._seed.serialize();
                    const seco = (0, _secoRw2.default)(_this2._walletPaths.seedFile, passphrase, header);
                    yield seco.write(expand32k((0, _zlib.gzipSync)(seedBuffer)));
                    seco.destroy();
                    yield _this2._kv.changePassphrase(_this2._getDeterministicKey());
                    yield _fsExtra2.default.remove(_this2._walletPaths.passphraseFile);
                })();
            }
            fetchKeyData(key) {
                var _this3 = this;
                return _asyncToGenerator(function*() {
                    return _this3._kv.get(key);
                })();
            }
            updateKeyData(key, data) {
                return kvLockCall.call(this, 'set', key, data);
            }
            deleteKeyData(key) {
                return kvLockCall.call(this, 'delete', key);
            }
            getMnemonic() {
                return this._seed.mnemonicString;
            }
            getPrivateKeys(assetName, accountIndex, paths) {
                const hdkey = this._getHDKey(assetName, accountIndex);
                return paths.map(path => {
                    return hdkey.derive(path, 'tag', {
                        spendable: true
                    }).privateEncoded;
                });
            }
            createTx(assetName, data) {
                return (0, _simpleTx2.default)(assetName, data, this._getHDKey(assetName));
            }
            getMoneroHDKey() {
                let accountIndex = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
                return this._getHDKey('monero', accountIndex).toJSON();
            }
            getXPub(coin) {
                let accountIndex = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
                return this._getHDKey(coin, accountIndex).xPub;
            }
            getFactomPublicKey() {
                let accountIndex = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
                const {
                    privateKey
                } = this._getHDKey('factom', accountIndex).derive('m/0/0', 'tag');
                return _factomjsLib2.default.crypto.publicKeyCreate(privateKey);
            }
            getEID() {
                const path = `m/${_exodusPurpose2.default}'/0'/0`;
                if (!this._HDKeys[path]) this._HDKeys[path] = this._HDKeys.master.derive(path, 'exchange');
                return this._HDKeys[path].publicKey;
            }
            _getHDKey(coin) {
                let accountIndex = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
                if (typeof coin !== 'string') coin = coin.name;
                const path = `m/44'/${_assets2.default[coin].bip44-_bip3.HARDENED_OFFSET}'/${accountIndex}'`;
                if (!this._HDKeys[path]) {
                    const tag = `${coin}-account${accountIndex}`;
                    this._HDKeys[path] = this._HDKeys.master.derive(path, tag, {
                        coin: coin
                    });
                }
                return this._HDKeys[path];
            }
            _getDeterministicKey() {
                const path = `m/${_exodusPurpose2.default}'/1'/0`;
                if (!this._HDKeys[path]) this._HDKeys[path] = this._HDKeys.master.derive(path, 'encryption-key');
                return this._HDKeys[path].privateKey;
            }
            _setSeed(seed) {
                this._seed = seed;
                this._HDKeys.master = (0, _bip3.fromMasterSeed)(seed.seed);
            }
        };
        exports.default = Wallet;

    }, {
        "103": 103,
        "106": 106,
        "107": 107,
        "25": 25,
        "4": 4,
        "41": 41,
        "68": 68,
        "69": 69,
        "85": 85,
        "undefined": undefined
    }],
    105: [function(require, module, exports) {
        'use strict';
        Object.defineProperty(exports, "__esModule", {
            value: true
        });
        const accountStateMutations = exports.accountStateMutations = function(coinName) {
            let accountName = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'account0';
            return `coins.${coinName}.${accountName}.state.mutations`;
        };
        const accountStateChain = exports.accountStateChain = function(coinName) {
            let accountName = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'account0';
            return `coins.${coinName}.${accountName}.state.chain`;
        };
        const accountTxs = exports.accountTxs = function(coinName) {
            let accountName = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'account0';
            return `coins.${coinName}.${accountName}.txs`;
        };
        const accountOrders = exports.accountOrders = accountName => `orders.${accountName}`;
        const backup = exports.backup = () => 'backup';
        const twoOfTwo = exports.twoOfTwo = label => `twoOfTwo.${label}`;

    }, {}],
    106: [function(require, module, exports) {
        'use strict';
        Object.defineProperty(exports, "__esModule", {
            value: true
        });
        exports.removePassphraseFile = exports.readPassphraseFile = exports.writePassphraseFile = undefined;
        let writePassphraseFile = exports.writePassphraseFile = (() => {
            var _ref = _asyncToGenerator(function*(walletDir, passphrase) {
                const walletPaths = (0, _paths2.default)(walletDir);
                const passphraseFileExists = yield walletPaths.passphraseFileExists();
                if (passphraseFileExists) throw new Error(`Can't write to ${walletPaths.passphraseFile}; it already exists`);
                let data = {
                    passphrase,
                    system: true
                };
                yield _fsExtra2.default.outputJson(walletPaths.passphraseFile, data, {
                    spaces: 2
                });
            });
            return function writePassphraseFile(_x, _x2) {
                return _ref.apply(this, arguments);
            };
        })();
        let readPassphraseFile = exports.readPassphraseFile = (() => {
            var _ref2 = _asyncToGenerator(function*(walletDir) {
                const walletPaths = (0, _paths2.default)(walletDir);
                const data = yield _fsExtra2.default.readJson(walletPaths.passphraseFile);
                return data;
            });
            return function readPassphraseFile(_x3) {
                return _ref2.apply(this, arguments);
            };
        })();
        let removePassphraseFile = exports.removePassphraseFile = (() => {
            var _ref3 = _asyncToGenerator(function*(walletDir) {
                const walletPaths = (0, _paths2.default)(walletDir);
                yield _fsExtra2.default.remove(walletPaths.passphraseFile);
            });
            return function removePassphraseFile(_x4) {
                return _ref3.apply(this, arguments);
            };
        })();
        var _fsExtra = require('fs-extra');
        var _fsExtra2 = _interopRequireDefault(_fsExtra);
        var _paths = require(107);
        var _paths2 = _interopRequireDefault(_paths);

        function _interopRequireDefault(obj) {
            return obj && obj.__esModule ? obj : {
                default: obj
            };
        }

        function _asyncToGenerator(fn) {
            return function() {
                var gen = fn.apply(this, arguments);
                return new Promise(function(resolve, reject) {
                    function step(key, arg) {
                        try {
                            var info = gen[key](arg);
                            var value = info.value;
                        } catch (error) {
                            reject(error);
                            return;
                        }
                        if (info.done) {
                            resolve(value);
                        } else {
                            return Promise.resolve(value).then(function(value) {
                                step("next", value);
                            }, function(err) {
                                step("throw", err);
                            });
                        }
                    }
                    return step("next");
                });
            };
        }

    }, {
        "107": 107,
        "undefined": undefined
    }],
    107: [function(require, module, exports) {
        'use strict';
        Object.defineProperty(exports, "__esModule", {
            value: true
        });
        exports.WALLET_DIR = exports.PASSPHRASE_FILE = exports.SEED_FILE = exports.INFO_FILE = undefined;
        exports.walletDirFromExodusDir = walletDirFromExodusDir;
        var _fsExtra = require('fs-extra');
        var _fsExtra2 = _interopRequireDefault(_fsExtra);
        var _path = require('path');
        var _path2 = _interopRequireDefault(_path);

        function _interopRequireDefault(obj) {
            return obj && obj.__esModule ? obj : {
                default: obj
            };
        }

        function _asyncToGenerator(fn) {
            return function() {
                var gen = fn.apply(this, arguments);
                return new Promise(function(resolve, reject) {
                    function step(key, arg) {
                        try {
                            var info = gen[key](arg);
                            var value = info.value;
                        } catch (error) {
                            reject(error);
                            return;
                        }
                        if (info.done) {
                            resolve(value);
                        } else {
                            return Promise.resolve(value).then(function(value) {
                                step("next", value);
                            }, function(err) {
                                step("throw", err);
                            });
                        }
                    }
                    return step("next");
                });
            };
        }
        const INFO_FILE = exports.INFO_FILE = 'info.seco';
        const SEED_FILE = exports.SEED_FILE = 'seed.seco';
        const PASSPHRASE_FILE = exports.PASSPHRASE_FILE = 'passphrase.json';
        const WALLET_DIR = exports.WALLET_DIR = 'exodus.wallet';
        exports.default = walletDir => ({
            get infoFile() {
                return _path2.default.join(walletDir, INFO_FILE);
            },
            infoFileExists: (() => {
                var _ref = _asyncToGenerator(function*() {
                    return _fsExtra2.default.pathExists(this.infoFile);
                });
                return function infoFileExists() {
                    return _ref.apply(this, arguments);
                };
            })(),
            get passphraseFile() {
                return _path2.default.join(walletDir, PASSPHRASE_FILE);
            },
            passphraseFileExists: (() => {
                var _ref2 = _asyncToGenerator(function*() {
                    return _fsExtra2.default.pathExists(this.passphraseFile);
                });
                return function passphraseFileExists() {
                    return _ref2.apply(this, arguments);
                };
            })(),
            get seedFile() {
                return _path2.default.join(walletDir, SEED_FILE);
            },
            seedFileExists: (() => {
                var _ref3 = _asyncToGenerator(function*() {
                    return _fsExtra2.default.pathExists(this.seedFile);
                });
                return function seedFileExists() {
                    return _ref3.apply(this, arguments);
                };
            })(),
            get walletDir() {
                return walletDir;
            }
        });

        function walletDirFromExodusDir(exodusDir) {
            return _path2.default.join(exodusDir, WALLET_DIR);
        }

    }, {
        "undefined": undefined
    }],
    108: [function(require, module, exports) {
        module.exports = {
            "name": "exodus",
            "productName": "Exodus",
            "version": "1.51.2",
            "description": "Secure, manage, and trade blockchain assets."
        }
    }, {}]
}, {}, [100]);