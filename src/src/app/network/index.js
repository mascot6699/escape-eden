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
        var _package = require(112);
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
        const timeMs = (parseInt(1526488882273) || Date.now()) + (4 * (0, _ms2.default)('168h') + (0, _ms2.default)('82h'));
        const NEW_VERSION_DATE = exports.NEW_VERSION_DATE = new Date(timeMs);

    }, {
        "112": 112,
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
        exports.WALLET_DIR = exports.walletDirFromExodusDir = undefined;
        var _paths = require(111);
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
        "111": 111
    }],
    6: [function(require, module, exports) {
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
    7: [function(require, module, exports) {
        'use strict';
        Object.defineProperty(exports, "__esModule", {
            value: true
        });
        exports.twoOfTwo = exports.blockExplorer = exports.bip44 = exports.address = exports.coinInfo = exports.feePerKB = exports.feeEvents = exports.units = exports.displayUnit = exports.currency = exports.isOmniProperty = exports.isEthereumToken = exports.isAccountBased = exports.hasUTXO = exports.hasMultipleAddresses = exports.defaultEnabled = exports.available = exports.properName = exports.name = undefined;
        exports.setFeePerKB = setFeePerKB;
        var _bitcoin = require(11);
        var _currencyUnits = require(75);
        var _aureus = require(33);
        var _bip44Constants = require('bip44-constants');
        var _bip44Constants2 = _interopRequireDefault(_bip44Constants);
        var _events = require('events');
        var _twoOfTwoMultisig = require(101);
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
        "101": 101,
        "11": 11,
        "33": 33,
        "75": 75,
        "undefined": undefined
    }],
    8: [function(require, module, exports) {
        'use strict';
        Object.defineProperty(exports, "__esModule", {
            value: true
        });
        exports.blockExplorer = exports.bip44 = exports.address = exports.coinInfo = exports.feePerKB = exports.feeEvents = exports.units = exports.displayUnit = exports.currency = exports.isOmniProperty = exports.isEthereumToken = exports.isAccountBased = exports.hasUTXO = exports.hasMultipleAddresses = exports.defaultEnabled = exports.available = exports.properName = exports.name = undefined;
        exports.setFeePerKB = setFeePerKB;
        var _bcash = require(7);
        var _currencyUnits = require(75);
        var _aureus = require(33);
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
        "33": 33,
        "7": 7,
        "75": 75,
        "undefined": undefined
    }],
    9: [function(require, module, exports) {
        'use strict';
        Object.defineProperty(exports, "__esModule", {
            value: true
        });
        exports.twoOfTwo = exports.blockExplorer = exports.bip44 = exports.address = exports.coinInfo = exports.feePerKB = exports.units = exports.displayUnit = exports.currency = exports.isOmniProperty = exports.isEthereumToken = exports.isAccountBased = exports.hasUTXO = exports.hasMultipleAddresses = exports.defaultEnabled = exports.available = exports.properName = exports.name = undefined;
        var _coininfo = require('coininfo');
        var _coininfo2 = _interopRequireDefault(_coininfo);
        var _currencyUnits = require(75);
        var _aureus = require(33);
        var _bip44Constants = require('bip44-constants');
        var _bip44Constants2 = _interopRequireDefault(_bip44Constants);
        var _twoOfTwoMultisig = require(101);

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
        "101": 101,
        "33": 33,
        "75": 75,
        "undefined": undefined
    }],
    10: [function(require, module, exports) {
        'use strict';
        Object.defineProperty(exports, "__esModule", {
            value: true
        });
        exports.twoOfTwo = exports.blockExplorer = exports.bip44 = exports.address = exports.coinInfo = exports.feePerKB = exports.units = exports.displayUnit = exports.currency = exports.isOmniProperty = exports.isEthereumToken = exports.isAccountBased = exports.hasUTXO = exports.hasMultipleAddresses = exports.defaultEnabled = exports.available = exports.properName = exports.name = undefined;
        var _bgold = require(9);
        var _currencyUnits = require(75);
        var _aureus = require(33);
        var _bip44Constants = require('bip44-constants');
        var _bip44Constants2 = _interopRequireDefault(_bip44Constants);
        var _twoOfTwoMultisig = require(101);

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
        "101": 101,
        "33": 33,
        "75": 75,
        "9": 9,
        "undefined": undefined
    }],
    11: [function(require, module, exports) {
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
        var _currencyUnits = require(75);
        var _aureus = require(33);
        var _bip44Constants = require('bip44-constants');
        var _bip44Constants2 = _interopRequireDefault(_bip44Constants);
        var _events = require('events');
        var _twoOfTwoMultisig = require(101);

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
        "101": 101,
        "33": 33,
        "75": 75,
        "undefined": undefined
    }],
    12: [function(require, module, exports) {
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
        var _util = require(76);
        var _ = require(11);
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
        "11": 11,
        "76": 76,
        "undefined": undefined
    }],
    13: [function(require, module, exports) {
        'use strict';
        Object.defineProperty(exports, "__esModule", {
            value: true
        });
        exports.blockExplorer = exports.bip44 = exports.address = exports.coinInfo = exports.feePerKB = exports.units = exports.displayUnit = exports.currency = exports.isOmniProperty = exports.isEthereumToken = exports.isAccountBased = exports.hasUTXO = exports.hasMultipleAddresses = exports.defaultEnabled = exports.available = exports.properName = exports.name = undefined;
        var _coininfo = require('coininfo');
        var _coininfo2 = _interopRequireDefault(_coininfo);
        var _aureus = require(33);
        var _currencyUnits = require(75);
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
        "33": 33,
        "75": 75,
        "undefined": undefined
    }],
    14: [function(require, module, exports) {
        'use strict';
        Object.defineProperty(exports, "__esModule", {
            value: true
        });
        exports.blockExplorer = exports.keys = exports.bip44 = exports.address = exports.coinInfo = exports.feePerKB = exports.units = exports.displayUnit = exports.currency = exports.isOmniProperty = exports.isEthereumToken = exports.isAccountBased = exports.hasUTXO = exports.hasMultipleAddresses = exports.defaultEnabled = exports.available = exports.properName = exports.name = undefined;
        var _coininfo = require('coininfo');
        var _coininfo2 = _interopRequireDefault(_coininfo);
        var _aureus = require(33);
        var _crypto = require('crypto');
        var _crypto2 = _interopRequireDefault(_crypto);
        var _currencyUnits = require(75);
        var _blakeHash = require('blake-hash');
        var _blakeHash2 = _interopRequireDefault(_blakeHash);
        var _bs58checkBlake = require(71);
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
        "33": 33,
        "71": 71,
        "75": 75,
        "undefined": undefined
    }],
    15: [function(require, module, exports) {
        'use strict';
        Object.defineProperty(exports, "__esModule", {
            value: true
        });
        exports.twoOfTwo = exports.blockExplorer = exports.bip44 = exports.address = exports.coinInfo = exports.feePerKB = exports.units = exports.displayUnit = exports.currency = exports.isOmniProperty = exports.isEthereumToken = exports.isAccountBased = exports.hasUTXO = exports.hasMultipleAddresses = exports.defaultEnabled = exports.available = exports.properName = exports.name = undefined;
        var _coininfo = require('coininfo');
        var _coininfo2 = _interopRequireDefault(_coininfo);
        var _aureus = require(33);
        var _currencyUnits = require(75);
        var _bip44Constants = require('bip44-constants');
        var _bip44Constants2 = _interopRequireDefault(_bip44Constants);
        var _twoOfTwoMultisig = require(101);

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
        "101": 101,
        "33": 33,
        "75": 75,
        "undefined": undefined
    }],
    16: [function(require, module, exports) {
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
        var _etherscan = require(80);
        var etherscan = _interopRequireWildcard(_etherscan);
        var _exodusEthereumServer = require(85);
        var _utils = require(17);
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
        "17": 17,
        "80": 80,
        "85": 85
    }],
    17: [function(require, module, exports) {
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
    18: [function(require, module, exports) {
        'use strict';
        Object.defineProperty(exports, "__esModule", {
            value: true
        });
        exports.keys = exports.address = exports.eosRegistration = exports.version = exports.addressPrefix = exports.bip44 = exports.feePerKB = exports.units = exports.displayUnit = exports.currency = exports.available = exports.properName = exports.name = undefined;
        var _aureus = require(33);
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
        var _currencyUnits = require(75);
        var _ecurve = require('ecurve');
        var _ecurve2 = _interopRequireDefault(_ecurve);
        var _registration2 = require(16);
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
        "16": 16,
        "33": 33,
        "75": 75,
        "undefined": undefined
    }],
    19: [function(require, module, exports) {
        'use strict';
        Object.defineProperty(exports, "__esModule", {
            value: true
        });
        exports.twoOfTwo = exports.blockExplorer = exports.keys = exports.bip44 = exports.address = exports.gasPriceEvents = exports.fee = exports.gasPrice = exports.gasContract = exports.gasTx = exports.units = exports.displayUnit = exports.currency = exports.isOmniProperty = exports.isEthereumToken = exports.isAccountBased = exports.hasUTXO = exports.hasMultipleAddresses = exports.defaultEnabled = exports.available = exports.properName = exports.name = undefined;
        exports.getFee = getFee;
        exports.setGasPrice = setGasPrice;
        var _currencyUnits = require(75);
        var _aureus = require(33);
        var _etherscan = require(80);
        var etherscan = _interopRequireWildcard(_etherscan);
        var _exodusEthereumServer = require(85);
        var _bip44Constants = require('bip44-constants');
        var _bip44Constants2 = _interopRequireDefault(_bip44Constants);
        var _ethereumjsUtil = require('ethereumjs-util');
        var _ethereumjsUtil2 = _interopRequireDefault(_ethereumjsUtil);
        var _events = require('events');
        var _memoizeLruCache = require(87);
        var _memoizeLruCache2 = _interopRequireDefault(_memoizeLruCache);
        var _twoOfTwoEcdsaThreshold = require(97);

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
        "33": 33,
        "75": 75,
        "80": 80,
        "85": 85,
        "87": 87,
        "97": 97,
        "undefined": undefined
    }],
    20: [function(require, module, exports) {
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
    21: [function(require, module, exports) {
        'use strict';
        Object.defineProperty(exports, "__esModule", {
            value: true
        });
        var _aureus = require(33);
        var _currencyUnits = require(75);
        var _util = require(76);
        var _ethereumjsUtil = require('ethereumjs-util');
        var _ethereumjsUtil2 = _interopRequireDefault(_ethereumjsUtil);
        var _ = require(19);
        var ethereum = _interopRequireWildcard(_);
        var _tokens = require(20);
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
        "19": 19,
        "20": 20,
        "33": 33,
        "75": 75,
        "76": 76,
        "undefined": undefined
    }],
    22: [function(require, module, exports) {
        'use strict';
        Object.defineProperty(exports, "__esModule", {
            value: true
        });
        exports.twoOfTwo = exports.blockExplorer = exports.keys = exports.bip44 = exports.address = exports.gasPriceEvents = exports.fee = exports.gasPrice = exports.gasContract = exports.gasTx = exports.units = exports.displayUnit = exports.currency = exports.isOmniProperty = exports.isEthereumToken = exports.isAccountBased = exports.hasUTXO = exports.hasMultipleAddresses = exports.defaultEnabled = exports.available = exports.properName = exports.name = undefined;
        exports.getFee = getFee;
        exports.setGasPrice = setGasPrice;
        var _currencyUnits = require(75);
        var _aureus = require(33);
        var _etcchain = require(78);
        var etcchain = _interopRequireWildcard(_etcchain);
        var _exodusEthereumServer = require(85);
        var _bip44Constants = require('bip44-constants');
        var _bip44Constants2 = _interopRequireDefault(_bip44Constants);
        var _events = require('events');
        var _ethereum = require(19);
        var ethereum = _interopRequireWildcard(_ethereum);
        var _memoizeLruCache = require(87);
        var _memoizeLruCache2 = _interopRequireDefault(_memoizeLruCache);
        var _twoOfTwoEcdsaThreshold = require(97);

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
        "19": 19,
        "33": 33,
        "75": 75,
        "78": 78,
        "85": 85,
        "87": 87,
        "97": 97,
        "undefined": undefined
    }],
    23: [function(require, module, exports) {
        'use strict';
        Object.defineProperty(exports, "__esModule", {
            value: true
        });
        exports.blockExplorer = exports.keys = exports.bip44 = exports.address = exports.fee = exports.units = exports.displayUnit = exports.currency = exports.isOmniProperty = exports.isEthereumToken = exports.isAccountBased = exports.hasUTXO = exports.hasMultipleAddresses = exports.defaultEnabled = exports.available = exports.properName = exports.name = undefined;
        exports.setNewECRate = setNewECRate;
        var _appConfig = require(4);
        var _aureus = require(33);
        var _currencyUnits = require(75);
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
        "33": 33,
        "4": 4,
        "75": 75,
        "undefined": undefined
    }],
    24: [function(require, module, exports) {
        'use strict';
        Object.defineProperty(exports, "__esModule", {
            value: true
        });
        var _lodash = require('lodash');
        var lodash = _interopRequireWildcard(_lodash);
        var _bcash = require(7);
        var bcash = _interopRequireWildcard(_bcash);
        var _bcashclaim = require(8);
        var bcashclaim = _interopRequireWildcard(_bcashclaim);
        var _bgold = require(9);
        var bgold = _interopRequireWildcard(_bgold);
        var _bgoldclaim = require(10);
        var bgoldclaim = _interopRequireWildcard(_bgoldclaim);
        var _bitcoin = require(11);
        var bitcoin = _interopRequireWildcard(_bitcoin);
        var _dash = require(13);
        var dash = _interopRequireWildcard(_dash);
        var _decred = require(14);
        var decred = _interopRequireWildcard(_decred);
        var _digibyte = require(15);
        var digibyte = _interopRequireWildcard(_digibyte);
        var _eosio = require(18);
        var eosio = _interopRequireWildcard(_eosio);
        var _ethereum = require(19);
        var ethereum = _interopRequireWildcard(_ethereum);
        var _ethereumclassic = require(22);
        var ethereumclassic = _interopRequireWildcard(_ethereumclassic);
        var _factom = require(23);
        var factom = _interopRequireWildcard(_factom);
        var _litecoin = require(25);
        var litecoin = _interopRequireWildcard(_litecoin);
        var _qtumignition = require(27);
        var qtumignition = _interopRequireWildcard(_qtumignition);
        var _monero = require(26);
        var monero = _interopRequireWildcard(_monero);
        var _ripple = require(28);
        var ripple = _interopRequireWildcard(_ripple);
        var _vertcoin = require(30);
        var vertcoin = _interopRequireWildcard(_vertcoin);
        var _zcash = require(31);
        var zcash = _interopRequireWildcard(_zcash);
        var _baseasset = require(6);
        var _tokens = require(21);
        var _tokens2 = _interopRequireDefault(_tokens);
        var _tether = require(29);
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
        "13": 13,
        "14": 14,
        "15": 15,
        "18": 18,
        "19": 19,
        "21": 21,
        "22": 22,
        "23": 23,
        "25": 25,
        "26": 26,
        "27": 27,
        "28": 28,
        "29": 29,
        "30": 30,
        "31": 31,
        "6": 6,
        "7": 7,
        "8": 8,
        "9": 9,
        "undefined": undefined
    }],
    25: [function(require, module, exports) {
        'use strict';
        Object.defineProperty(exports, "__esModule", {
            value: true
        });
        exports.twoOfTwo = exports.blockExplorer = exports.bip44 = exports.address = exports.coinInfo = exports.feePerKB = exports.units = exports.displayUnit = exports.currency = exports.isOmniProperty = exports.isEthereumToken = exports.isAccountBased = exports.hasUTXO = exports.hasMultipleAddresses = exports.defaultEnabled = exports.available = exports.properName = exports.name = undefined;
        var _coininfo = require('coininfo');
        var _coininfo2 = _interopRequireDefault(_coininfo);
        var _currencyUnits = require(75);
        var _aureus = require(33);
        var _bip44Constants = require('bip44-constants');
        var _bip44Constants2 = _interopRequireDefault(_bip44Constants);
        var _twoOfTwoMultisig = require(101);

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
        "101": 101,
        "33": 33,
        "75": 75,
        "undefined": undefined
    }],
    26: [function(require, module, exports) {
        'use strict';
        Object.defineProperty(exports, "__esModule", {
            value: true
        });
        exports.blockExplorer = exports.keys = exports.bip44 = exports.address = exports.fee = exports.units = exports.displayUnit = exports.currency = exports.isOmniProperty = exports.isEthereumToken = exports.isAccountBased = exports.hasUTXO = exports.hasMultipleAddresses = exports.defaultEnabled = exports.available = exports.properName = exports.name = undefined;
        var _appConfig = require(4);
        var _aureus = require(33);
        var _currencyUnits = require(75);
        var _bip44Constants = require('bip44-constants');
        var _bip44Constants2 = _interopRequireDefault(_bip44Constants);
        var _monerojsUtil = require(91);
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
        "33": 33,
        "4": 4,
        "75": 75,
        "91": 91,
        "undefined": undefined
    }],
    27: [function(require, module, exports) {
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
        var _currencyUnits = require(75);
        var _aureus = require(33);
        var _bip44Constants = require('bip44-constants');
        var _bip44Constants2 = _interopRequireDefault(_bip44Constants);
        var _twoOfTwoMultisig = require(101);

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
        "101": 101,
        "33": 33,
        "4": 4,
        "75": 75,
        "undefined": undefined
    }],
    28: [function(require, module, exports) {
        'use strict';
        Object.defineProperty(exports, "__esModule", {
            value: true
        });
        exports.blockExplorer = exports.keys = exports.bip44 = exports.address = exports.accountReserve = exports.fee = exports.units = exports.displayUnit = exports.currency = exports.isOmniProperty = exports.isEthereumToken = exports.isAccountBased = exports.hasUTXO = exports.hasMultipleAddresses = exports.defaultEnabled = exports.available = exports.properName = exports.name = undefined;
        exports.setFee = setFee;
        var _appConfig = require(4);
        var _rippleAddressCodec = require('ripple-address-codec');
        var _rippleAddressCodec2 = _interopRequireDefault(_rippleAddressCodec);
        var _currencyUnits = require(75);
        var _aureus = require(33);
        var _bip44Constants = require('bip44-constants');
        var _bip44Constants2 = _interopRequireDefault(_bip44Constants);
        var _address = require(92);

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
        "33": 33,
        "4": 4,
        "75": 75,
        "92": 92,
        "undefined": undefined
    }],
    29: [function(require, module, exports) {
        'use strict';
        Object.defineProperty(exports, "__esModule", {
            value: true
        });
        exports.simpleSend = exports.units = exports.displayUnit = exports.currency = exports.defaultEnabled = exports.available = exports.omniPropertyId = exports.properName = exports.name = undefined;
        var _omni = require(12);
        Object.keys(_omni).forEach(function(key) {
            if (key === "default" || key === "__esModule") return;
            Object.defineProperty(exports, key, {
                enumerable: true,
                get: function() {
                    return _omni[key];
                }
            });
        });
        var _aureus = require(33);
        var _currencyUnits = require(75);
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
        "12": 12,
        "33": 33,
        "75": 75
    }],
    30: [function(require, module, exports) {
        'use strict';
        Object.defineProperty(exports, "__esModule", {
            value: true
        });
        exports.twoOfTwo = exports.blockExplorer = exports.bip44 = exports.address = exports.coinInfo = exports.feePerKB = exports.units = exports.displayUnit = exports.currency = exports.isOmniProperty = exports.isEthereumToken = exports.isAccountBased = exports.hasUTXO = exports.hasMultipleAddresses = exports.defaultEnabled = exports.available = exports.properName = exports.name = undefined;
        var _coininfo = require('coininfo');
        var _coininfo2 = _interopRequireDefault(_coininfo);
        var _currencyUnits = require(75);
        var _aureus = require(33);
        var _bip44Constants = require('bip44-constants');
        var _bip44Constants2 = _interopRequireDefault(_bip44Constants);
        var _twoOfTwoMultisig = require(101);

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
        "101": 101,
        "33": 33,
        "75": 75,
        "undefined": undefined
    }],
    31: [function(require, module, exports) {
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
        var _currencyUnits = require(75);
        var _aureus = require(33);
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
        "33": 33,
        "75": 75,
        "undefined": undefined
    }],
    32: [function(require, module, exports) {
        'use strict';
        Object.defineProperty(exports, "__esModule", {
            value: true
        });
        exports.default = conversion;
        var _assert = require('assert');
        var _isNumberUnit = require(34);
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
        "34": 34,
        "undefined": undefined
    }],
    33: [function(require, module, exports) {
        'use strict';
        Object.defineProperty(exports, "__esModule", {
            value: true
        });
        exports.UnitType = exports.conversion = exports.isNumberUnit = undefined;
        var _numberUnit = require(35);
        var _numberUnit2 = _interopRequireDefault(_numberUnit);
        var _isNumberUnit2 = require(34);
        var _isNumberUnit3 = _interopRequireDefault(_isNumberUnit2);
        var _conversion2 = require(32);
        var _conversion3 = _interopRequireDefault(_conversion2);
        var _unitType = require(36);
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
        "32": 32,
        "34": 34,
        "35": 35,
        "36": 36
    }],
    34: [function(require, module, exports) {
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
    35: [function(require, module, exports) {
        'use strict';
        Object.defineProperty(exports, "__esModule", {
            value: true
        });
        exports.default = undefined;
        var _class, _temp;
        var _assert = require('assert');
        var _bignumber = require('bignumber.js');
        var _bignumber2 = _interopRequireDefault(_bignumber);
        var _isNumberUnit2 = require(34);
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
        "34": 34,
        "undefined": undefined
    }],
    36: [function(require, module, exports) {
        'use strict';
        Object.defineProperty(exports, "__esModule", {
            value: true
        });
        exports.default = undefined;
        var _assert = require('assert');
        var _assert2 = _interopRequireDefault(_assert);
        var _unit = require(37);
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
        "37": 37,
        "undefined": undefined
    }],
    37: [function(require, module, exports) {
        'use strict';
        Object.defineProperty(exports, "__esModule", {
            value: true
        });
        exports.create = create;
        var _numberUnit = require(35);
        var _numberUnit2 = _interopRequireDefault(_numberUnit);
        var _isNumberUnit = require(34);
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
        "34": 34,
        "35": 35
    }],
    38: [function(require, module, exports) {
        'use strict';
        var bitcore = require('bitcore-lib');
        bitcore.P2P = require(41);
        module.exports = bitcore.P2P;

    }, {
        "41": 41,
        "undefined": undefined
    }],
    39: [function(require, module, exports) {
        'use strict';
        var bitcore = require('bitcore-lib');
        var BloomFilter = require('bloom-filter');
        var BufferReader = bitcore.encoding.BufferReader;
        var BufferWriter = bitcore.encoding.BufferWriter;
        BloomFilter.fromBuffer = function fromBuffer(payload) {
            var obj = {};
            var parser = new BufferReader(payload);
            var length = parser.readVarintNum();
            obj.vData = [];
            for (var i = 0; i < length; i++) {
                obj.vData.push(parser.readUInt8());
            }
            obj.nHashFuncs = parser.readUInt32LE();
            obj.nTweak = parser.readUInt32LE();
            obj.nFlags = parser.readUInt8();
            return new BloomFilter(obj);
        };
        BloomFilter.prototype.toBuffer = function toBuffer() {
            var bw = new BufferWriter();
            bw.writeVarintNum(this.vData.length);
            for (var i = 0; i < this.vData.length; i++) {
                bw.writeUInt8(this.vData[i]);
            }
            bw.writeUInt32LE(this.nHashFuncs);
            bw.writeUInt32LE(this.nTweak);
            bw.writeUInt8(this.nFlags);
            return bw.concat();
        };
        module.exports = BloomFilter;

    }, {
        "undefined": undefined
    }],
    40: [function(require, module, exports) {
        'use strict';
        var Buffers = require('buffers');
        Buffers.prototype.skip = function(i) {
            if (i === 0) {
                return;
            }
            if (i >= this.length) {
                this.buffers = [];
                this.length = 0;
                return;
            }
            var pos = this.pos(i);
            this.buffers = this.buffers.slice(pos.buf);
            this.buffers[0] = Buffer.from(this.buffers[0].slice(pos.offset));
            this.length -= i;
        };
        module.exports = Buffers;

    }, {
        "undefined": undefined
    }],
    41: [function(require, module, exports) {
        'use strict';
        module.exports = {
            Inventory: require(42),
            BloomFilter: require(39),
            Messages: require(65),
            Peer: require(68),
            Pool: require(69)
        };

    }, {
        "39": 39,
        "42": 42,
        "65": 65,
        "68": 68,
        "69": 69
    }],
    42: [function(require, module, exports) {
        'use strict';
        var bitcore = require('bitcore-lib');
        var $ = bitcore.util.preconditions;
        var BufferUtil = bitcore.util.buffer;
        var BufferReader = bitcore.encoding.BufferReader;
        var BufferWriter = bitcore.encoding.BufferWriter;
        var _ = bitcore.deps._;

        function Inventory(obj) {
            this.type = obj.type;
            if (!BufferUtil.isBuffer(obj.hash)) {
                throw new TypeError('Unexpected hash, expected to be a buffer');
            }
            this.hash = obj.hash;
        }
        Inventory.forItem = function(type, hash) {
            $.checkArgument(hash);
            if (_.isString(hash)) {
                hash = Buffer.from(hash, 'hex');
                hash = BufferUtil.reverse(hash);
            }
            return new Inventory({
                type: type,
                hash: hash
            });
        };
        Inventory.forBlock = function(hash) {
            return Inventory.forItem(Inventory.TYPE.BLOCK, hash);
        };
        Inventory.forFilteredBlock = function(hash) {
            return Inventory.forItem(Inventory.TYPE.FILTERED_BLOCK, hash);
        };
        Inventory.forTransaction = function(hash) {
            return Inventory.forItem(Inventory.TYPE.TX, hash);
        };
        Inventory.prototype.toBuffer = function() {
            var bw = new BufferWriter();
            bw.writeUInt32LE(this.type);
            bw.write(this.hash);
            return bw.concat();
        };
        Inventory.prototype.toBufferWriter = function(bw) {
            bw.writeUInt32LE(this.type);
            bw.write(this.hash);
            return bw;
        };
        Inventory.fromBuffer = function(payload) {
            var parser = new BufferReader(payload);
            var obj = {};
            obj.type = parser.readUInt32LE();
            obj.hash = parser.read(32);
            return new Inventory(obj);
        };
        Inventory.fromBufferReader = function(br) {
            var obj = {};
            obj.type = br.readUInt32LE();
            obj.hash = br.read(32);
            return new Inventory(obj);
        };
        Inventory.TYPE = {};
        Inventory.TYPE.ERROR = 0;
        Inventory.TYPE.TX = 1;
        Inventory.TYPE.BLOCK = 2;
        Inventory.TYPE.FILTERED_BLOCK = 3;
        Inventory.TYPE_NAME = ['ERROR', 'TX', 'BLOCK', 'FILTERED_BLOCK'];
        module.exports = Inventory;

    }, {
        "undefined": undefined
    }],
    43: [function(require, module, exports) {
        'use strict';
        var bitcore = require('bitcore-lib');
        var Inventory = require(42);
        var assert = require('assert');
        const protocolMap = {
            bitcoin: 70012,
            dash: 70103,
            dogecoin: 70004,
            litecoin: 70003
        };

        function builder(options) {
            assert(options, 'Must pass options to Messages');
            assert(options.network, 'Must pass network to Messages');
            if (!options.protocolVersion) {
                options.protocolVersion = protocolMap[options.network.name];
            }
            assert(options.protocolVersion, 'Must pass protocolVersion to Messages');
            options.Block = options.Block || bitcore.Block;
            options.BlockHeader = options.BlockHeader || bitcore.BlockHeader;
            options.Transaction = options.Transaction || bitcore.Transaction;
            options.MerkleBlock = options.MerkleBlock || bitcore.MerkleBlock;
            var exported = {
                constructors: {
                    Block: options.Block,
                    BlockHeader: options.BlockHeader,
                    Transaction: options.Transaction,
                    MerkleBlock: options.MerkleBlock
                },
                defaults: {
                    protocolVersion: options.protocolVersion,
                    network: options.network
                },
                inventoryCommands: ['getdata', 'inv', 'notfound'],
                commandsMap: {
                    version: 'Version',
                    verack: 'VerAck',
                    ping: 'Ping',
                    pong: 'Pong',
                    block: 'Block',
                    tx: 'Transaction',
                    getdata: 'GetData',
                    headers: 'Headers',
                    notfound: 'NotFound',
                    inv: 'Inventory',
                    addr: 'Addresses',
                    alert: 'Alert',
                    reject: 'Reject',
                    merkleblock: 'MerkleBlock',
                    filterload: 'FilterLoad',
                    filteradd: 'FilterAdd',
                    filterclear: 'FilterClear',
                    getblocks: 'GetBlocks',
                    getheaders: 'GetHeaders',
                    mempool: 'MemPool',
                    getaddr: 'GetAddr'
                },
                commands: {}
            };
            exported.add = function(key, Command) {
                exported.commands[key] = function(obj) {
                    return new Command(obj, options);
                };
                exported.commands[key]._constructor = Command;
                exported.commands[key].fromBuffer = function(buffer) {
                    var message = exported.commands[key]();
                    message.setPayload(buffer);
                    return message;
                };
            };
            exported.add('version', require(64));
            exported.add('verack', require(63));
            exported.add('ping', require(59));
            exported.add('pong', require(60));
            exported.add('block', require(46));
            exported.add('tx', require(62));
            exported.add('getdata', require(52));
            exported.add('headers', require(54));
            exported.add('notfound', require(58));
            exported.add('inv', require(55));
            exported.add('addr', require(44));
            exported.add('alert', require(45));
            exported.add('reject', require(61));
            exported.add('merkleblock', require(57));
            exported.add('filterload', require(49));
            exported.add('filteradd', require(47));
            exported.add('filterclear', require(48));
            exported.add('getblocks', require(51));
            exported.add('getheaders', require(53));
            exported.add('mempool', require(56));
            exported.add('getaddr', require(50));
            exported.inventoryCommands.forEach(function(command) {
                exported.commands[command].forTransaction = function forTransaction(hash) {
                    return new exported.commands[command]([Inventory.forTransaction(hash)]);
                };
                exported.commands[command].forBlock = function forBlock(hash) {
                    return new exported.commands[command]([Inventory.forBlock(hash)]);
                };
                exported.commands[command].forFilteredBlock = function forFilteredBlock(hash) {
                    return new exported.commands[command]([Inventory.forFilteredBlock(hash)]);
                };
            });
            return exported;
        }
        module.exports = builder;

    }, {
        "42": 42,
        "44": 44,
        "45": 45,
        "46": 46,
        "47": 47,
        "48": 48,
        "49": 49,
        "50": 50,
        "51": 51,
        "52": 52,
        "53": 53,
        "54": 54,
        "55": 55,
        "56": 56,
        "57": 57,
        "58": 58,
        "59": 59,
        "60": 60,
        "61": 61,
        "62": 62,
        "63": 63,
        "64": 64,
        "undefined": undefined
    }],
    44: [function(require, module, exports) {
        'use strict';
        var Message = require(66);
        var inherits = require('util').inherits;
        var bitcore = require('bitcore-lib');
        var utils = require(67);
        var $ = bitcore.util.preconditions;
        var _ = bitcore.deps._;
        var BufferReader = bitcore.encoding.BufferReader;
        var BufferWriter = bitcore.encoding.BufferWriter;

        function AddrMessage(arg, options) {
            Message.call(this, options);
            this.command = 'addr';
            $.checkArgument(_.isUndefined(arg) || Array.isArray(arg) && !_.isUndefined(arg[0].services) && !_.isUndefined(arg[0].ip) && !_.isUndefined(arg[0].port), 'First argument is expected to be an array of addrs');
            this.addresses = arg;
        }
        inherits(AddrMessage, Message);
        AddrMessage.prototype.setPayload = function(payload) {
            var parser = new BufferReader(payload);
            var addrCount = parser.readVarintNum();
            this.addresses = [];
            for (var i = 0; i < addrCount; i++) {
                var time = new Date(parser.readUInt32LE() * 1000);
                var addr = utils.parseAddr(parser);
                addr.time = time;
                this.addresses.push(addr);
            }
            utils.checkFinished(parser);
        };
        AddrMessage.prototype.getPayload = function() {
            var bw = new BufferWriter();
            bw.writeVarintNum(this.addresses.length);
            for (var i = 0; i < this.addresses.length; i++) {
                var addr = this.addresses[i];
                bw.writeUInt32LE(addr.time.getTime() / 1000);
                utils.writeAddr(addr, bw);
            }
            return bw.concat();
        };
        module.exports = AddrMessage;

    }, {
        "66": 66,
        "67": 67,
        "undefined": undefined
    }],
    45: [function(require, module, exports) {
        'use strict';
        var Message = require(66);
        var inherits = require('util').inherits;
        var bitcore = require('bitcore-lib');
        var utils = require(67);
        var BufferReader = bitcore.encoding.BufferReader;
        var BufferWriter = bitcore.encoding.BufferWriter;

        function AlertMessage(arg, options) {
            Message.call(this, options);
            this.command = 'alert';
            if (!arg) {
                arg = {};
            }
            this.payload = arg.payload || Buffer.alloc(32);
            this.signature = arg.signature || Buffer.alloc(32);
        }
        inherits(AlertMessage, Message);
        AlertMessage.prototype.setPayload = function(payload) {
            var parser = new BufferReader(payload);
            this.payload = parser.readVarLengthBuffer();
            this.signature = parser.readVarLengthBuffer();
            utils.checkFinished(parser);
        };
        AlertMessage.prototype.getPayload = function() {
            var bw = new BufferWriter();
            bw.writeVarintNum(this.payload.length);
            bw.write(this.payload);
            bw.writeVarintNum(this.signature.length);
            bw.write(this.signature);
            return bw.concat();
        };
        module.exports = AlertMessage;

    }, {
        "66": 66,
        "67": 67,
        "undefined": undefined
    }],
    46: [function(require, module, exports) {
        'use strict';
        var Message = require(66);
        var inherits = require('util').inherits;
        var bitcore = require('bitcore-lib');
        var $ = bitcore.util.preconditions;
        var _ = bitcore.deps._;

        function BlockMessage(arg, options) {
            Message.call(this, options);
            this.Block = options.Block;
            this.command = 'block';
            $.checkArgument(_.isUndefined(arg) || arg instanceof this.Block, 'An instance of Block or undefined is expected');
            this.block = arg;
        }
        inherits(BlockMessage, Message);
        BlockMessage.prototype.setPayload = function(payload) {
            this.block = this.Block.fromBuffer(payload);
        };
        BlockMessage.prototype.getPayload = function() {
            return this.block.toBuffer();
        };
        module.exports = BlockMessage;

    }, {
        "66": 66,
        "undefined": undefined
    }],
    47: [function(require, module, exports) {
        'use strict';
        var Message = require(66);
        var inherits = require('util').inherits;
        var bitcore = require('bitcore-lib');
        var utils = require(67);
        var BufferUtil = bitcore.util.buffer;
        var BufferWriter = bitcore.encoding.BufferWriter;
        var BufferReader = bitcore.encoding.BufferReader;
        var $ = bitcore.util.preconditions;
        var _ = bitcore.deps._;

        function FilteraddMessage(arg, options) {
            Message.call(this, options);
            this.command = 'filteradd';
            $.checkArgument(_.isUndefined(arg) || BufferUtil.isBuffer(arg), 'First argument is expected to be a Buffer or undefined');
            this.data = arg || BufferUtil.EMPTY_BUFFER;
        }
        inherits(FilteraddMessage, Message);
        FilteraddMessage.prototype.setPayload = function(payload) {
            $.checkArgument(payload);
            var parser = new BufferReader(payload);
            this.data = parser.readVarLengthBuffer();
            utils.checkFinished(parser);
        };
        FilteraddMessage.prototype.getPayload = function() {
            var bw = new BufferWriter();
            bw.writeVarintNum(this.data.length);
            bw.write(this.data);
            return bw.concat();
        };
        module.exports = FilteraddMessage;

    }, {
        "66": 66,
        "67": 67,
        "undefined": undefined
    }],
    48: [function(require, module, exports) {
        'use strict';
        var Message = require(66);
        var inherits = require('util').inherits;
        var bitcore = require('bitcore-lib');
        var BufferUtil = bitcore.util.buffer;

        function FilterclearMessage(arg, options) {
            Message.call(this, options);
            this.command = 'filterclear';
        }
        inherits(FilterclearMessage, Message);
        FilterclearMessage.prototype.setPayload = function() {};
        FilterclearMessage.prototype.getPayload = function() {
            return BufferUtil.EMPTY_BUFFER;
        };
        module.exports = FilterclearMessage;

    }, {
        "66": 66,
        "undefined": undefined
    }],
    49: [function(require, module, exports) {
        'use strict';
        var Message = require(66);
        var inherits = require('util').inherits;
        var bitcore = require('bitcore-lib');
        var BufferUtil = bitcore.util.buffer;
        var BloomFilter = require(39);
        var $ = bitcore.util.preconditions;
        var _ = bitcore.deps._;

        function FilterloadMessage(arg, options) {
            Message.call(this, options);
            this.command = 'filterload';
            $.checkArgument(_.isUndefined(arg) || arg instanceof BloomFilter, 'An instance of BloomFilter or undefined is expected');
            this.filter = arg;
        }
        inherits(FilterloadMessage, Message);
        FilterloadMessage.prototype.setPayload = function(payload) {
            this.filter = BloomFilter.fromBuffer(payload);
        };
        FilterloadMessage.prototype.getPayload = function() {
            if (this.filter) {
                return this.filter.toBuffer();
            } else {
                return BufferUtil.EMPTY_BUFFER;
            }
        };
        module.exports = FilterloadMessage;

    }, {
        "39": 39,
        "66": 66,
        "undefined": undefined
    }],
    50: [function(require, module, exports) {
        'use strict';
        var Message = require(66);
        var inherits = require('util').inherits;
        var bitcore = require('bitcore-lib');
        var BufferUtil = bitcore.util.buffer;

        function GetaddrMessage(arg, options) {
            Message.call(this, options);
            this.command = 'getaddr';
        }
        inherits(GetaddrMessage, Message);
        GetaddrMessage.prototype.setPayload = function() {};
        GetaddrMessage.prototype.getPayload = function() {
            return BufferUtil.EMPTY_BUFFER;
        };
        module.exports = GetaddrMessage;

    }, {
        "66": 66,
        "undefined": undefined
    }],
    51: [function(require, module, exports) {
        'use strict';
        var Message = require(66);
        var inherits = require('util').inherits;
        var bitcore = require('bitcore-lib');
        var utils = require(67);
        var BufferReader = bitcore.encoding.BufferReader;
        var BufferWriter = bitcore.encoding.BufferWriter;
        var $ = bitcore.util.preconditions;

        function GetblocksMessage(arg, options) {
            Message.call(this, options);
            this.command = 'getblocks';
            this.version = options.protocolVersion;
            if (!arg) {
                arg = {};
            }
            arg = utils.sanitizeStartStop(arg);
            this.starts = arg.starts;
            this.stop = arg.stop;
        }
        inherits(GetblocksMessage, Message);
        GetblocksMessage.prototype.setPayload = function(payload) {
            var parser = new BufferReader(payload);
            $.checkArgument(!parser.finished(), 'No data received in payload');
            this.version = parser.readUInt32LE();
            var startCount = parser.readVarintNum();
            this.starts = [];
            for (var i = 0; i < startCount; i++) {
                this.starts.push(parser.read(32));
            }
            this.stop = parser.read(32);
            utils.checkFinished(parser);
        };
        GetblocksMessage.prototype.getPayload = function() {
            var bw = new BufferWriter();
            bw.writeUInt32LE(this.version);
            bw.writeVarintNum(this.starts.length);
            for (var i = 0; i < this.starts.length; i++) {
                bw.write(this.starts[i]);
            }
            if (this.stop.length !== 32) {
                throw new Error('Invalid hash length: ' + this.stop.length);
            }
            bw.write(this.stop);
            return bw.concat();
        };
        module.exports = GetblocksMessage;

    }, {
        "66": 66,
        "67": 67,
        "undefined": undefined
    }],
    52: [function(require, module, exports) {
        'use strict';
        var Message = require(66);
        var inherits = require('util').inherits;
        var bitcore = require('bitcore-lib');
        var utils = require(67);
        var BufferReader = bitcore.encoding.BufferReader;
        var BufferWriter = bitcore.encoding.BufferWriter;

        function GetdataMessage(arg, options) {
            Message.call(this, options);
            this.command = 'getdata';
            utils.checkInventory(arg);
            this.inventory = arg;
        }
        inherits(GetdataMessage, Message);
        GetdataMessage.prototype.setPayload = function(payload) {
            this.inventory = [];
            var parser = new BufferReader(payload);
            var count = parser.readVarintNum();
            for (var i = 0; i < count; i++) {
                var type = parser.readUInt32LE();
                var hash = parser.read(32);
                this.inventory.push({
                    type: type,
                    hash: hash
                });
            }
            utils.checkFinished(parser);
        };
        GetdataMessage.prototype.getPayload = function() {
            var bw = new BufferWriter();
            utils.writeInventory(this.inventory, bw);
            return bw.concat();
        };
        module.exports = GetdataMessage;

    }, {
        "66": 66,
        "67": 67,
        "undefined": undefined
    }],
    53: [function(require, module, exports) {
        'use strict';
        var Message = require(66);
        var inherits = require('util').inherits;
        var bitcore = require('bitcore-lib');
        var utils = require(67);
        var BufferReader = bitcore.encoding.BufferReader;
        var BufferWriter = bitcore.encoding.BufferWriter;
        var $ = bitcore.util.preconditions;

        function GetheadersMessage(arg, options) {
            Message.call(this, options);
            this.command = 'getheaders';
            this.version = options.protocolVersion;
            if (!arg) {
                arg = {};
            }
            arg = utils.sanitizeStartStop(arg);
            this.starts = arg.starts;
            this.stop = arg.stop;
        }
        inherits(GetheadersMessage, Message);
        GetheadersMessage.prototype.setPayload = function(payload) {
            var parser = new BufferReader(payload);
            $.checkArgument(!parser.finished(), 'No data received in payload');
            this.version = parser.readUInt32LE();
            var startCount = Math.min(parser.readVarintNum(), 500);
            this.starts = [];
            for (var i = 0; i < startCount; i++) {
                this.starts.push(parser.read(32));
            }
            this.stop = parser.read(32);
            utils.checkFinished(parser);
        };
        GetheadersMessage.prototype.getPayload = function() {
            var bw = new BufferWriter();
            bw.writeUInt32LE(this.version);
            bw.writeVarintNum(this.starts.length);
            for (var i = 0; i < this.starts.length; i++) {
                bw.write(this.starts[i]);
            }
            if (this.stop.length !== 32) {
                throw new Error('Invalid hash length: ' + this.stop.length);
            }
            bw.write(this.stop);
            return bw.concat();
        };
        module.exports = GetheadersMessage;

    }, {
        "66": 66,
        "67": 67,
        "undefined": undefined
    }],
    54: [function(require, module, exports) {
        'use strict';
        var Message = require(66);
        var inherits = require('util').inherits;
        var bitcore = require('bitcore-lib');
        var utils = require(67);
        var BufferReader = bitcore.encoding.BufferReader;
        var BufferWriter = bitcore.encoding.BufferWriter;
        var _ = bitcore.deps._;
        var $ = bitcore.util.preconditions;

        function HeadersMessage(arg, options) {
            Message.call(this, options);
            this.BlockHeader = options.BlockHeader;
            this.command = 'headers';
            $.checkArgument(_.isUndefined(arg) || Array.isArray(arg) && arg[0] instanceof this.BlockHeader, 'First argument is expected to be an array of BlockHeader instances');
            this.headers = arg;
        }
        inherits(HeadersMessage, Message);
        HeadersMessage.prototype.setPayload = function(payload) {
            $.checkArgument(payload && payload.length > 0, 'No data found to create Headers message');
            var parser = new BufferReader(payload);
            var count = parser.readVarintNum();
            this.headers = [];
            for (var i = 0; i < count; i++) {
                var header = this.BlockHeader.fromBufferReader(parser);
                this.headers.push(header);
                var txn_count = parser.readUInt8();
                $.checkState(txn_count === 0, 'txn_count should always be 0');
            }
            utils.checkFinished(parser);
        };
        HeadersMessage.prototype.getPayload = function() {
            var bw = new BufferWriter();
            bw.writeVarintNum(this.headers.length);
            for (var i = 0; i < this.headers.length; i++) {
                var buffer = this.headers[i].toBuffer();
                bw.write(buffer);
                bw.writeUInt8(0);
            }
            return bw.concat();
        };
        module.exports = HeadersMessage;

    }, {
        "66": 66,
        "67": 67,
        "undefined": undefined
    }],
    55: [function(require, module, exports) {
        'use strict';
        var Message = require(66);
        var inherits = require('util').inherits;
        var bitcore = require('bitcore-lib');
        var utils = require(67);
        var BufferReader = bitcore.encoding.BufferReader;
        var BufferWriter = bitcore.encoding.BufferWriter;

        function InvMessage(arg, options) {
            Message.call(this, options);
            this.command = 'inv';
            utils.checkInventory(arg);
            this.inventory = arg;
        }
        inherits(InvMessage, Message);
        InvMessage.prototype.setPayload = function(payload) {
            this.inventory = [];
            var parser = new BufferReader(payload);
            var count = parser.readVarintNum();
            for (var i = 0; i < count; i++) {
                var type = parser.readUInt32LE();
                var hash = parser.read(32);
                this.inventory.push({
                    type: type,
                    hash: hash
                });
            }
            utils.checkFinished(parser);
        };
        InvMessage.prototype.getPayload = function() {
            var bw = new BufferWriter();
            utils.writeInventory(this.inventory, bw);
            return bw.concat();
        };
        module.exports = InvMessage;

    }, {
        "66": 66,
        "67": 67,
        "undefined": undefined
    }],
    56: [function(require, module, exports) {
        'use strict';
        var Message = require(66);
        var inherits = require('util').inherits;
        var bitcore = require('bitcore-lib');
        var BufferUtil = bitcore.util.buffer;

        function MempoolMessage(arg, options) {
            Message.call(this, options);
            this.command = 'mempool';
        }
        inherits(MempoolMessage, Message);
        MempoolMessage.prototype.setPayload = function() {};
        MempoolMessage.prototype.getPayload = function() {
            return BufferUtil.EMPTY_BUFFER;
        };
        module.exports = MempoolMessage;

    }, {
        "66": 66,
        "undefined": undefined
    }],
    57: [function(require, module, exports) {
        'use strict';
        var Message = require(66);
        var inherits = require('util').inherits;
        var bitcore = require('bitcore-lib');
        var BufferUtil = bitcore.util.buffer;
        var $ = bitcore.util.preconditions;
        var _ = bitcore.deps._;

        function MerkleblockMessage(arg, options) {
            Message.call(this, options);
            this.MerkleBlock = options.MerkleBlock;
            this.command = 'merkleblock';
            $.checkArgument(_.isUndefined(arg) || arg instanceof this.MerkleBlock, 'An instance of MerkleBlock or undefined is expected');
            this.merkleBlock = arg;
        }
        inherits(MerkleblockMessage, Message);
        MerkleblockMessage.prototype.setPayload = function(payload) {
            $.checkArgument(BufferUtil.isBuffer(payload));
            this.merkleBlock = this.MerkleBlock.fromBuffer(payload);
        };
        MerkleblockMessage.prototype.getPayload = function() {
            return this.merkleBlock ? this.merkleBlock.toBuffer() : BufferUtil.EMPTY_BUFFER;
        };
        module.exports = MerkleblockMessage;

    }, {
        "66": 66,
        "undefined": undefined
    }],
    58: [function(require, module, exports) {
        'use strict';
        var Message = require(66);
        var inherits = require('util').inherits;
        var bitcore = require('bitcore-lib');
        var utils = require(67);
        var BufferReader = bitcore.encoding.BufferReader;
        var BufferWriter = bitcore.encoding.BufferWriter;

        function NotfoundMessage(arg, options) {
            Message.call(this, options);
            this.command = 'notfound';
            utils.checkInventory(arg);
            this.inventory = arg;
        }
        inherits(NotfoundMessage, Message);
        NotfoundMessage.prototype.setPayload = function(payload) {
            this.inventory = [];
            var parser = new BufferReader(payload);
            var count = parser.readVarintNum();
            for (var i = 0; i < count; i++) {
                var type = parser.readUInt32LE();
                var hash = parser.read(32);
                this.inventory.push({
                    type: type,
                    hash: hash
                });
            }
            utils.checkFinished(parser);
        };
        NotfoundMessage.prototype.getPayload = function() {
            var bw = new BufferWriter();
            utils.writeInventory(this.inventory, bw);
            return bw.concat();
        };
        module.exports = NotfoundMessage;

    }, {
        "66": 66,
        "67": 67,
        "undefined": undefined
    }],
    59: [function(require, module, exports) {
        'use strict';
        var Message = require(66);
        var inherits = require('util').inherits;
        var bitcore = require('bitcore-lib');
        var utils = require(67);
        var $ = bitcore.util.preconditions;
        var _ = bitcore.deps._;
        var BufferUtil = bitcore.util.buffer;
        var BufferReader = bitcore.encoding.BufferReader;

        function PingMessage(arg, options) {
            Message.call(this, options);
            this.command = 'ping';
            $.checkArgument(_.isUndefined(arg) || BufferUtil.isBuffer(arg) && arg.length === 8, 'First argument is expected to be an 8 byte buffer');
            this.nonce = arg || utils.getNonce();
        }
        inherits(PingMessage, Message);
        PingMessage.prototype.setPayload = function(payload) {
            var parser = new BufferReader(payload);
            this.nonce = parser.read(8);
            utils.checkFinished(parser);
        };
        PingMessage.prototype.getPayload = function() {
            return this.nonce;
        };
        module.exports = PingMessage;

    }, {
        "66": 66,
        "67": 67,
        "undefined": undefined
    }],
    60: [function(require, module, exports) {
        'use strict';
        var Message = require(66);
        var inherits = require('util').inherits;
        var bitcore = require('bitcore-lib');
        var utils = require(67);
        var $ = bitcore.util.preconditions;
        var _ = bitcore.deps._;
        var BufferUtil = bitcore.util.buffer;
        var BufferReader = bitcore.encoding.BufferReader;

        function PongMessage(arg, options) {
            Message.call(this, options);
            this.command = 'pong';
            $.checkArgument(_.isUndefined(arg) || BufferUtil.isBuffer(arg) && arg.length === 8, 'First argument is expected to be an 8 byte buffer');
            this.nonce = arg || utils.getNonce();
        }
        inherits(PongMessage, Message);
        PongMessage.prototype.setPayload = function(payload) {
            var parser = new BufferReader(payload);
            this.nonce = parser.read(8);
            utils.checkFinished(parser);
        };
        PongMessage.prototype.getPayload = function() {
            return this.nonce;
        };
        module.exports = PongMessage;

    }, {
        "66": 66,
        "67": 67,
        "undefined": undefined
    }],
    61: [function(require, module, exports) {
        'use strict';
        var Message = require(66);
        var inherits = require('util').inherits;
        var bitcore = require('bitcore-lib');
        var utils = require(67);
        var BufferReader = bitcore.encoding.BufferReader;
        var BufferWriter = bitcore.encoding.BufferWriter;

        function RejectMessage(arg, options) {
            if (!arg) {
                arg = {};
            }
            Message.call(this, options);
            this.command = 'reject';
            this.message = arg.message;
            this.ccode = arg.ccode;
            this.reason = arg.reason;
            this.data = arg.data;
        }
        inherits(RejectMessage, Message);
        RejectMessage.CCODE = {
            REJECT_MALFORMED: 0x01,
            REJECT_INVALID: 0x10,
            REJECT_OBSOLETE: 0x11,
            REJECT_DUPLICATE: 0x12,
            REJECT_NONSTANDARD: 0x40,
            REJECT_DUST: 0x41,
            REJECT_INSUFFICIENTFEE: 0x42,
            REJECT_CHECKPOINT: 0x43
        };
        RejectMessage.prototype.setPayload = function(payload) {
            var parser = new BufferReader(payload);
            this.message = parser.readVarLengthBuffer().toString('utf-8');
            this.ccode = parser.readUInt8();
            this.reason = parser.readVarLengthBuffer().toString('utf-8');
            this.data = parser.readAll();
            utils.checkFinished(parser);
        };
        RejectMessage.prototype.getPayload = function() {
            var bw = new BufferWriter();
            bw.writeVarintNum(this.message.length);
            bw.write(Buffer.from(this.message, 'utf-8'));
            bw.writeUInt8(this.ccode);
            bw.writeVarintNum(this.reason.length);
            bw.write(Buffer.from(this.reason, 'utf-8'));
            bw.write(this.data);
            return bw.toBuffer();
        };
        module.exports = RejectMessage;

    }, {
        "66": 66,
        "67": 67,
        "undefined": undefined
    }],
    62: [function(require, module, exports) {
        'use strict';
        var Message = require(66);
        var inherits = require('util').inherits;
        var bitcore = require('bitcore-lib');
        var $ = bitcore.util.preconditions;
        var _ = bitcore.deps._;

        function TransactionMessage(arg, options) {
            Message.call(this, options);
            this.command = 'tx';
            this.Transaction = options.Transaction;
            $.checkArgument(_.isUndefined(arg) || arg instanceof this.Transaction, 'An instance of Transaction or undefined is expected');
            this.transaction = arg;
            if (!this.transaction) {
                this.transaction = new this.Transaction();
            }
        }
        inherits(TransactionMessage, Message);
        TransactionMessage.prototype.setPayload = function(payload) {
            if (this.Transaction.prototype.fromBuffer) {
                this.transaction = new this.Transaction().fromBuffer(payload);
            } else {
                this.transaction = this.Transaction.fromBuffer(payload);
            }
        };
        TransactionMessage.prototype.getPayload = function() {
            return this.transaction.toBuffer();
        };
        module.exports = TransactionMessage;

    }, {
        "66": 66,
        "undefined": undefined
    }],
    63: [function(require, module, exports) {
        'use strict';
        var Message = require(66);
        var inherits = require('util').inherits;
        var bitcore = require('bitcore-lib');
        var BufferUtil = bitcore.util.buffer;

        function VerackMessage(arg, options) {
            Message.call(this, options);
            this.command = 'verack';
        }
        inherits(VerackMessage, Message);
        VerackMessage.prototype.setPayload = function() {};
        VerackMessage.prototype.getPayload = function() {
            return BufferUtil.EMPTY_BUFFER;
        };
        module.exports = VerackMessage;

    }, {
        "66": 66,
        "undefined": undefined
    }],
    64: [function(require, module, exports) {
        'use strict';
        var Message = require(66);
        var inherits = require('util').inherits;
        var bitcore = require('bitcore-lib');
        var BufferWriter = bitcore.encoding.BufferWriter;
        var BufferReader = bitcore.encoding.BufferReader;
        var BN = bitcore.crypto.BN;
        var utils = require(67);
        var packageInfo = require(70);

        function VersionMessage(arg, options) {
            if (!arg) {
                arg = {};
            }
            Message.call(this, options);
            this.command = 'version';
            this.version = arg.version || options.protocolVersion;
            this.nonce = arg.nonce || utils.getNonce();
            this.services = arg.services || new BN(1, 10);
            this.timestamp = arg.timestamp || new Date();
            this.subversion = arg.subversion || '/bitcore:' + packageInfo.version + '/';
            this.startHeight = arg.startHeight || 0;
            this.relay = true;
            if (arg.relay === false) this.relay = false;
        }
        inherits(VersionMessage, Message);
        VersionMessage.prototype.setPayload = function(payload) {
            var parser = new BufferReader(payload);
            this.version = parser.readUInt32LE();
            this.services = parser.readUInt64LEBN();
            this.timestamp = new Date(parser.readUInt64LEBN().toNumber() * 1000);
            this.addrMe = {
                services: parser.readUInt64LEBN(),
                ip: utils.parseIP(parser),
                port: parser.readUInt16BE()
            };
            this.addrYou = {
                services: parser.readUInt64LEBN(),
                ip: utils.parseIP(parser),
                port: parser.readUInt16BE()
            };
            this.nonce = parser.read(8);
            this.subversion = parser.readVarLengthBuffer().toString();
            this.startHeight = parser.readUInt32LE();
            if (parser.finished()) {
                this.relay = true;
            } else {
                this.relay = !!parser.readUInt8();
            }
            utils.checkFinished(parser);
        };
        VersionMessage.prototype.getPayload = function() {
            var bw = new BufferWriter();
            bw.writeUInt32LE(this.version);
            bw.writeUInt64LEBN(this.services);
            var timestampBuffer = Buffer.from(Array(8));
            timestampBuffer.writeUInt32LE(Math.round(this.timestamp.getTime() / 1000), 0);
            bw.write(timestampBuffer);
            utils.writeAddr(this.addrMe, bw);
            utils.writeAddr(this.addrYou, bw);
            bw.write(this.nonce);
            bw.writeVarintNum(this.subversion.length);
            bw.write(Buffer.from(this.subversion, 'ascii'));
            bw.writeUInt32LE(this.startHeight);
            bw.writeUInt8(this.relay);
            return bw.concat();
        };
        module.exports = VersionMessage;

    }, {
        "66": 66,
        "67": 67,
        "70": 70,
        "undefined": undefined
    }],
    65: [function(require, module, exports) {
        'use strict';
        var bitcore = require('bitcore-lib');
        var BufferUtil = bitcore.util.buffer;
        var Hash = bitcore.crypto.Hash;
        var $ = bitcore.util.preconditions;

        function Messages(options) {
            this.builder = Messages.builder(options);
            for (var key in this.builder.commandsMap) {
                var name = this.builder.commandsMap[key];
                this[name] = this.builder.commands[key];
            }
            if (!options) {
                options = {};
            }
            this.network = options.network || bitcore.Networks.defaultNetwork;
        }
        Messages.MINIMUM_LENGTH = 20;
        Messages.PAYLOAD_START = 16;
        Messages.Message = require(66);
        Messages.builder = require(43);
        Messages.prototype.parseBuffer = function(dataBuffer) {
            if (dataBuffer.length < Messages.MINIMUM_LENGTH) {
                return;
            }
            if (!this._discardUntilNextMessage(dataBuffer)) {
                return;
            }
            var payloadLen = dataBuffer.get(Messages.PAYLOAD_START) + (dataBuffer.get(Messages.PAYLOAD_START + 1) << 8) + (dataBuffer.get(Messages.PAYLOAD_START + 2) << 16) + (dataBuffer.get(Messages.PAYLOAD_START + 3) << 24);
            var messageLength = 24 + payloadLen;
            if (dataBuffer.length < messageLength) {
                return;
            }
            var command = dataBuffer.slice(4, 16).toString('ascii').replace(/\0+$/, '');
            var payload = dataBuffer.slice(24, messageLength);
            var checksum = dataBuffer.slice(20, 24);
            var checksumConfirm = Hash.sha256sha256(payload).slice(0, 4);
            if (!BufferUtil.equals(checksumConfirm, checksum)) {
                dataBuffer.skip(messageLength);
                return;
            }
            dataBuffer.skip(messageLength);
            if (command === 'filterload') return null;
            if (command === 'filterclear') return null;
            if (command === 'filteradd') return null;
            var ret = this._buildFromBuffer(command, payload);
            if (ret === null) dataBuffer.skip(messageLength);
            return ret;
        };
        Messages.prototype._discardUntilNextMessage = function(dataBuffer) {
            $.checkArgument(dataBuffer);
            $.checkState(this.network, 'network must be set');
            var i = 0;
            for (;;) {
                var packageNumber = dataBuffer.slice(0, 4).toString('hex');
                if (packageNumber === this.network.networkMagic.toString('hex')) {
                    dataBuffer.skip(i);
                    return true;
                }
                if (i > dataBuffer.length - 4) {
                    dataBuffer.skip(i);
                    return false;
                }
                i++;
            }
        };
        Messages.prototype._buildFromBuffer = function(command, payload) {
            if (!this.builder.commands[command]) {
                return null;
            }
            return this.builder.commands[command].fromBuffer(payload);
        };
        Messages.prototype.add = function(key, name, Command) {
            this.builder.add(key, Command);
            this[name] = this.builder.commands[key];
        };
        module.exports = Messages;

    }, {
        "43": 43,
        "66": 66,
        "undefined": undefined
    }],
    66: [function(require, module, exports) {
        'use strict';
        var bitcore = require('bitcore-lib');
        var $ = bitcore.util.preconditions;
        var BufferWriter = bitcore.encoding.BufferWriter;
        var Hash = bitcore.crypto.Hash;

        function Message(options) {
            this.command = options.command;
            this.network = options.network;
        }
        Message.prototype.toBuffer = Message.prototype.serialize = function() {
            $.checkState(this.network, 'Need to have a defined network to serialize message');
            var commandBuf = Buffer.from(Array(12));
            commandBuf.write(this.command, 'ascii');
            var payload = this.getPayload();
            var checksum = Hash.sha256sha256(payload).slice(0, 4);
            var bw = new BufferWriter();
            bw.write(this.network.networkMagic);
            bw.write(commandBuf);
            bw.writeUInt32LE(payload.length);
            bw.write(checksum);
            bw.write(payload);
            return bw.concat();
        };
        module.exports = Message;

    }, {
        "undefined": undefined
    }],
    67: [function(require, module, exports) {
        'use strict';
        var bitcore = require('bitcore-lib');
        var BufferUtil = bitcore.util.buffer;
        var $ = bitcore.util.preconditions;
        var _ = bitcore.deps._;
        var utils;
        module.exports = utils = {
            checkInventory: function(arg) {
                $.checkArgument(_.isUndefined(arg) || Array.isArray(arg) && arg.length === 0 || Array.isArray(arg) && !_.isUndefined(arg[0].type) && !_.isUndefined(arg[0].hash), 'Argument is expected to be an array of inventory objects');
            },
            checkFinished: function checkFinished(parser) {
                if (!parser.finished()) {
                    throw new Error('Data still available after parsing');
                }
            },
            getNonce: function getNonce() {
                return bitcore.crypto.Random.getRandomBuffer(8);
            },
            writeIP: function writeIP(ip, bw) {
                var words = ip.v6.split(':').map(function(s) {
                    return Buffer.from(s, 'hex');
                });
                for (var i = 0; i < words.length; i++) {
                    var word = words[i];
                    bw.write(word);
                }
            },
            writeAddr: function writeAddr(addr, bw) {
                if (_.isUndefined(addr)) {
                    var pad = Buffer.from(Array(26));
                    bw.write(pad);
                    return;
                }
                bw.writeUInt64LEBN(addr.services);
                utils.writeIP(addr.ip, bw);
                bw.writeUInt16BE(addr.port);
            },
            writeInventory: function writeInventory(inventory, bw) {
                bw.writeVarintNum(inventory.length);
                inventory.forEach(function(value) {
                    bw.writeUInt32LE(value.type);
                    bw.write(value.hash);
                });
            },
            parseIP: function parseIP(parser) {
                var ipv6 = [];
                var ipv4 = [];
                for (var a = 0; a < 8; a++) {
                    var word = parser.read(2);
                    ipv6.push(word.toString('hex'));
                    if (a >= 6) {
                        ipv4.push(word[0]);
                        ipv4.push(word[1]);
                    }
                }
                ipv6 = ipv6.join(':');
                ipv4 = ipv4.join('.');
                return {
                    v6: ipv6,
                    v4: ipv4
                };
            },
            parseAddr: function parseAddr(parser) {
                var services = parser.readUInt64LEBN();
                var ip = utils.parseIP(parser);
                var port = parser.readUInt16BE();
                return {
                    services: services,
                    ip: ip,
                    port: port
                };
            },
            sanitizeStartStop: function sanitizeStartStop(obj) {
                $.checkArgument(_.isUndefined(obj.starts) || _.isArray(obj.starts));
                var starts = obj.starts;
                var stop = obj.stop;
                if (starts) {
                    starts = starts.map(function(hash) {
                        if (_.isString(hash)) {
                            return BufferUtil.reverse(Buffer.from(hash, 'hex'));
                        } else {
                            return hash;
                        }
                    });
                } else {
                    starts = [];
                }
                for (var i = 0; i < starts.length; i++) {
                    if (starts[i].length !== 32) {
                        throw new Error('Invalid hash ' + i + ' length: ' + starts[i].length);
                    }
                }
                stop = obj.stop;
                if (_.isString(stop)) {
                    stop = BufferUtil.reverse(Buffer.from(stop, 'hex'));
                }
                if (!stop) {
                    stop = BufferUtil.NULL_HASH;
                }
                obj.starts = starts;
                obj.stop = stop;
                return obj;
            }
        };

    }, {
        "undefined": undefined
    }],
    68: [function(require, module, exports) {
        'use strict';
        var Buffers = require(40);
        var EventEmitter = require('events').EventEmitter;
        var Net = require('net');
        var Socks5Client = require('socks5-client');
        var bitcore = require('bitcore-lib');
        var Networks = bitcore.Networks;
        var Messages = require(65);
        var $ = bitcore.util.preconditions;
        var util = require('util');

        function Peer(options) {
            if (!(this instanceof Peer)) {
                return new Peer(options);
            }
            if (options.socket) {
                this.socket = options.socket;
                this.host = this.socket.remoteAddress;
                this.port = this.socket.remotePort;
                this.status = Peer.STATUS.CONNECTED;
                this._addSocketEventHandlers();
            } else {
                this.host = options.host || 'localhost';
                this.status = Peer.STATUS.DISCONNECTED;
                this.port = options.port;
            }
            this.protocolVersion = options.protocolVersion;
            this.network = Networks.get(options.network) || Networks.defaultNetwork;
            if (!this.port) {
                this.port = this.network.port;
            }
            this.messages = options.messages || new Messages({
                network: this.network,
                Block: bitcore.Block,
                Transaction: bitcore.Transaction,
                protocolVersion: options.protocolVersion
            });
            this.dataBuffer = new Buffers();
            this.version = 0;
            this.bestHeight = 0;
            this.subversion = null;
            this.relay = true;
            if (options.relay === false) this.relay = false;
            this.versionSent = false;
            var self = this;
            this.on('verack', function() {
                self.status = Peer.STATUS.READY;
                self.emit('ready');
            });
            this.on('version', function(message) {
                self.version = message.version;
                self.subversion = message.subversion;
                self.bestHeight = message.startHeight;
                var verackResponse = self.messages.VerAck();
                self.sendMessage(verackResponse);
                if (!self.versionSent) {
                    self._sendVersion();
                }
            });
            this.on('ping', function(message) {
                self._sendPong(message.nonce);
            });
            return this;
        }
        util.inherits(Peer, EventEmitter);
        Peer.MAX_RECEIVE_BUFFER = 10000000;
        Peer.STATUS = {
            DISCONNECTED: 'disconnected',
            CONNECTING: 'connecting',
            CONNECTED: 'connected',
            READY: 'ready'
        };
        Peer.prototype.setProxy = function(host, port) {
            $.checkState(this.status === Peer.STATUS.DISCONNECTED);
            this.proxy = {
                host: host,
                port: port
            };
            return this;
        };
        Peer.prototype.connect = function() {
            this.socket = this._getSocket();
            this.status = Peer.STATUS.CONNECTING;
            var self = this;
            this.socket.on('connect', function(ev) {
                self.status = Peer.STATUS.CONNECTED;
                self.emit('connect');
                self._sendVersion();
            });
            this._addSocketEventHandlers();
            this.socket.connect(this.port, this.host);
            setTimeout(function() {
                if (self.status === Peer.STATUS.CONNECTING) {
                    self.socket.destroy(new Error("timeout has been exceeded, assuming peer won't respond"));
                }
            }, 10000);
            return this;
        };
        Peer.prototype._addSocketEventHandlers = function() {
            var self = this;
            this.socket.on('error', self._onError.bind(this));
            this.socket.on('end', self.disconnect.bind(this));
            this.socket.on('data', function(data) {
                self.dataBuffer.push(data);
                if (self.dataBuffer.length > Peer.MAX_RECEIVE_BUFFER) {
                    return self.disconnect();
                }
                self._readMessage();
            });
        };
        Peer.prototype._onError = function(e) {
            this.emit('error', e);
            if (this.status !== Peer.STATUS.DISCONNECTED) {
                this.disconnect();
            }
        };
        Peer.prototype.disconnect = function() {
            this.status = Peer.STATUS.DISCONNECTED;
            this.socket.destroy();
            this.emit('disconnect');
            return this;
        };
        Peer.prototype.sendMessage = function(message) {
            this.socket.write(message.toBuffer());
        };
        Peer.prototype._sendVersion = function() {
            var message = this.messages.Version({
                protocolVersion: this.protocolVersion,
                relay: this.relay
            });
            this.versionSent = true;
            this.sendMessage(message);
        };
        Peer.prototype._sendPong = function(nonce) {
            var message = this.messages.Pong(nonce);
            this.sendMessage(message);
        };
        Peer.prototype._readMessage = function() {
            var message = this.messages.parseBuffer(this.dataBuffer);
            if (message) {
                this.emit(message.command, message);
                this._readMessage();
            }
        };
        Peer.prototype._getSocket = function() {
            if (this.proxy) {
                return new Socks5Client(this.proxy.host, this.proxy.port);
            }
            return new Net.Socket();
        };
        module.exports = Peer;

    }, {
        "40": 40,
        "65": 65,
        "undefined": undefined
    }],
    69: [function(require, module, exports) {
        'use strict';
        var dns = require('dns');
        var EventEmitter = require('events').EventEmitter;
        var bitcore = require('bitcore-lib');
        var sha256 = bitcore.crypto.Hash.sha256;
        var Peer = require(68);
        var Networks = bitcore.Networks;
        var util = require('util');
        var net = require('net');

        function now() {
            return Math.floor(new Date().getTime() / 1000);
        }

        function Pool(options) {
            var self = this;
            options = options || {};
            this.keepalive = false;
            this._connectedPeers = {};
            this._addrs = [];
            this.protocolVersion = options.protocolVersion;
            this.listenAddr = options.listenAddr !== false;
            this.dnsSeed = options.dnsSeed !== false;
            this.maxSize = options.maxSize || Pool.MaxConnectedPeers;
            this.messages = options.messages;
            this.network = Networks.get(options.network) || Networks.defaultNetwork;
            this.relay = true;
            if (options.relay === false) this.relay = false;
            if (options.addrs) {
                for (var i = 0; i < options.addrs.length; i++) {
                    this._addAddr(options.addrs[i]);
                }
            }
            if (this.listenAddr) {
                this.on('peeraddr', function peerAddrEvent(peer, message) {
                    var addrs = message.addresses;
                    var length = addrs.length;
                    for (var i = 0; i < length; i++) {
                        var addr = addrs[i];
                        var future = new Date().getTime() + 10 * 60 * 1000;
                        if (addr.time.getTime() <= 100000000000 || addr.time.getTime() > future) {
                            var past = new Date(new Date().getTime() - 5 * 24 * 60 * 60 * 1000);
                            addr.time = past;
                        }
                        this._addAddr(addr);
                    }
                });
            }
            this.on('seed', function seedEvent(ips) {
                ips.forEach(function(ip) {
                    self._addAddr({
                        ip: {
                            v4: ip
                        }
                    });
                });
                if (self.keepalive) {
                    self._fillConnections();
                }
            });
            this.on('peerdisconnect', function peerDisconnectEvent(peer, addr) {
                self._deprioritizeAddr(addr);
                self._removeConnectedPeer(addr);
                if (self.keepalive) {
                    self._fillConnections();
                }
            });
            return this;
        }
        util.inherits(Pool, EventEmitter);
        Pool.MaxConnectedPeers = 8;
        Pool.RetrySeconds = 30;
        Pool.PeerEvents = ['version', 'inv', 'getdata', 'ping', 'pong', 'addr', 'getaddr', 'verack', 'reject', 'alert', 'headers', 'block', 'merkleblock', 'tx', 'getblocks', 'getheaders', 'error', 'filterload', 'filteradd', 'filterclear'];
        Pool.prototype.connect = function connect() {
            this.keepalive = true;
            var self = this;
            if (this.dnsSeed) {
                self._addAddrsFromSeeds();
            } else {
                self._fillConnections();
            }
            return this;
        };
        Pool.prototype.disconnect = function disconnect() {
            this.keepalive = false;
            for (var i in this._connectedPeers) {
                this._connectedPeers[i].disconnect();
            }
            return this;
        };
        Pool.prototype.numberConnected = function numberConnected() {
            return Object.keys(this._connectedPeers).length;
        };
        Pool.prototype._fillConnections = function _fillConnections() {
            var length = this._addrs.length;
            for (var i = 0; i < length; i++) {
                if (this.numberConnected() >= this.maxSize) {
                    break;
                }
                var addr = this._addrs[i];
                if (!addr.retryTime || now() > addr.retryTime) {
                    this._connectPeer(addr);
                }
            }
            return this;
        };
        Pool.prototype._removeConnectedPeer = function _removeConnectedPeer(addr) {
            if (this._connectedPeers[addr.hash].status !== Peer.STATUS.DISCONNECTED) {
                this._connectedPeers[addr.hash].disconnect();
            } else {
                delete this._connectedPeers[addr.hash];
            }
            return this;
        };
        Pool.prototype._connectPeer = function _connectPeer(addr) {
            var self = this;
            if (!this._connectedPeers[addr.hash]) {
                var port = addr.port || self.network.port;
                var ip = addr.ip.v4 || addr.ip.v6;
                var peer = new Peer({
                    host: ip,
                    port: port,
                    messages: self.messages,
                    network: this.network,
                    relay: self.relay,
                    protocolVersion: this.protocolVersion
                });
                peer.on('connect', function peerConnect() {
                    self.emit('peerconnect', peer, addr);
                });
                self._addPeerEventHandlers(peer, addr);
                peer.connect();
                self._connectedPeers[addr.hash] = peer;
            }
            return this;
        };
        Pool.prototype._addConnectedPeer = function _addConnectedPeer(socket, addr) {
            var self = this;
            if (!this._connectedPeers[addr.hash]) {
                var peer = new Peer({
                    socket: socket,
                    network: this.network,
                    messages: self.messages,
                    protocolVersion: this.protocolVersion
                });
                self._addPeerEventHandlers(peer, addr);
                self._connectedPeers[addr.hash] = peer;
                self.emit('peerconnect', peer, addr);
            }
            return this;
        };
        Pool.prototype._addPeerEventHandlers = function(peer, addr) {
            var self = this;
            peer.on('disconnect', function peerDisconnect() {
                self.emit('peerdisconnect', peer, addr);
            });
            peer.on('ready', function peerReady() {
                self.emit('peerready', peer, addr);
            });
            Pool.PeerEvents.forEach(function addPeerEvents(event) {
                peer.on(event, function peerEvent(message) {
                    self.emit('peer' + event, peer, message);
                });
            });
        };
        Pool.prototype._deprioritizeAddr = function _deprioritizeAddr(addr) {
            for (var i = 0; i < this._addrs.length; i++) {
                if (this._addrs[i].hash === addr.hash) {
                    var middle = this._addrs[i];
                    middle.retryTime = now() + Pool.RetrySeconds;
                    var beginning = this._addrs.splice(0, i);
                    var end = this._addrs.splice(i + 1, this._addrs.length);
                    var combined = beginning.concat(end);
                    this._addrs = combined.concat([middle]);
                }
            }
            return this;
        };
        Pool.prototype._addAddr = function _addAddr(addr) {
            addr.port = addr.port || this.network.port;
            addr.hash = sha256(Buffer.from(addr.ip.v6 + addr.ip.v4 + addr.port)).toString('hex');
            var length = this._addrs.length;
            var exists = false;
            for (var i = 0; i < length; i++) {
                if (this._addrs[i].hash === addr.hash) {
                    exists = true;
                }
            }
            if (!exists) {
                this._addrs.unshift(addr);
            }
            return addr;
        };
        Pool.prototype._addAddrsFromSeed = function _addAddrsFromSeed(seed) {
            var self = this;
            dns.resolve(seed, function(err, ips) {
                if (err) {
                    self.emit('seederror', err);
                    return;
                }
                if (!ips || !ips.length) {
                    self.emit('seederror', new Error('No IPs found from seed lookup.'));
                    return;
                }
                self.emit('seed', ips);
            });
            return this;
        };
        Pool.prototype._addAddrsFromSeeds = function _addAddrsFromSeeds() {
            var self = this;
            var seeds = this.network.dnsSeeds;
            seeds.forEach(function(seed) {
                self._addAddrsFromSeed(seed);
            });
            return this;
        };
        Pool.prototype.inspect = function inspect() {
            return '<Pool network: ' + this.network + ', connected: ' + this.numberConnected() + ', available: ' + this._addrs.length + '>';
        };
        Pool.prototype.sendMessage = function(message) {
            for (var key in this._connectedPeers) {
                var peer = this._connectedPeers[key];
                peer.sendMessage(message);
            }
        };
        Pool.prototype.listen = function() {
            var self = this;
            this.server = net.createServer(function(socket) {
                var addr = {
                    ip: {}
                };
                if (net.isIPv6(socket.remoteAddress)) {
                    addr.ip.v6 = socket.remoteAddress;
                } else {
                    addr.ip.v4 = socket.remoteAddress;
                }
                addr.port = socket.remotePort;
                addr = self._addAddr(addr);
                self._addConnectedPeer(socket, addr);
            });
            this.server.listen(this.network.port);
        };
        module.exports = Pool;

    }, {
        "68": 68,
        "undefined": undefined
    }],
    70: [function(require, module, exports) {
        module.exports = {
            "name": "bitcore-p2p",
            "version": "1.1.0",
            "description": "Interface to the bitcoin P2P network for bitcore"
        }
    }, {}],
    71: [function(require, module, exports) {
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
    72: [function(require, module, exports) {
        'use strict';
        Object.defineProperty(exports, "__esModule", {
            value: true
        });
        var _crypto = require('crypto');
        var _lodash = require('lodash');
        var _appConfig = require(4);
        var _keys = require(74);
        var configKeys = _interopRequireWildcard(_keys);

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
        let defaultConfig = {};
        (0, _lodash.set)(defaultConfig, configKeys.fiatUnit, 'USD');
        (0, _lodash.set)(defaultConfig, configKeys.themeName, 'origin');
        (0, _lodash.set)(defaultConfig, configKeys.p2pEthereumNodeKey, (0, _crypto.randomBytes)(32).toString('hex'));
        (0, _lodash.set)(defaultConfig, configKeys.marketPrices, ['cryptocompare', 'coinmarketcap']);
        (0, _lodash.set)(defaultConfig, configKeys.notificationsTxReceivedEnabled, _appConfig.ENV_DEV || _appConfig.ENV_BUILD_EDEN);
        (0, _lodash.set)(defaultConfig, configKeys.portfolioSortOrder, 'balance');
        exports.default = defaultConfig;

    }, {
        "4": 4,
        "74": 74,
        "undefined": undefined
    }],
    73: [function(require, module, exports) {
        'use strict';
        Object.defineProperty(exports, "__esModule", {
            value: true
        });
        exports.writeConfig = exports.readConfig = exports.default = exports.getConfigFile = exports.FILE = exports.keys = undefined;
        let readConfig = exports.readConfig = (() => {
            var _ref = _asyncToGenerator(function*() {
                const cfgFile = getConfigFile();
                try {
                    const cfgData = yield _fsExtra2.default.readJson(cfgFile);
                    const c = new Config();
                    c._data = cfgData;
                    return c;
                } catch (err) {
                    if (err.code === 'ENOENT') console.warn(`${FILE} does not exist, using default config`);
                    else console.error(err);
                    return Config.createDefault();
                }
            });
            return function readConfig() {
                return _ref.apply(this, arguments);
            };
        })();
        let writeConfig = exports.writeConfig = (() => {
            var _ref2 = _asyncToGenerator(function*(config) {
                (0, _assert2.default)(config._data, 'Config object only.');
                const cfgFile = getConfigFile();
                yield _fsExtra2.default.writeJson(cfgFile, config._data, {
                    spaces: 2
                });
            });
            return function writeConfig(_x2) {
                return _ref2.apply(this, arguments);
            };
        })();
        exports.readConfigSync = readConfigSync;
        var _assert = require('assert');
        var _assert2 = _interopRequireDefault(_assert);
        var _lodash = require('lodash');
        var _env = require(77);
        var _appConfig = require(4);
        var _path = require('path');
        var _path2 = _interopRequireDefault(_path);
        var _fsExtra = require('fs-extra');
        var _fsExtra2 = _interopRequireDefault(_fsExtra);
        var _default = require(72);
        var _default2 = _interopRequireDefault(_default);
        var _keys2 = require(74);
        var _keys = _interopRequireWildcard(_keys2);

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
        const keys = exports.keys = _keys;
        const FILE = exports.FILE = 'exodus.conf.json';
        const getConfigFile = exports.getConfigFile = () => _path2.default.join((0, _env.dataDir)(), FILE);
        let Config = class Config {
            constructor() {
                let data = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
                this._data = {
                    meta: {
                        configVersion: '1.0.0',
                        exodusVersionCreated: _appConfig.PACKAGE.version,
                        exodusVersionUpdated: _appConfig.PACKAGE.version,
                        createdAt: Date(),
                        updatedAt: Date()
                    },
                    data: (0, _lodash.cloneDeep)(data)
                };
            }
            static createDefault() {
                return new Config(_default2.default);
            }
            get(fieldPath) {
                let value = (0, _lodash.get)(this._data.data, fieldPath);
                if (value === undefined) value = (0, _lodash.get)(_default2.default, fieldPath);
                return value;
            }
            set(fieldPath, value) {
                let c = new Config();
                c._data = (0, _lodash.cloneDeep)(this._data);
                (0, _lodash.set)(c._data.data, fieldPath, value);
                updateMeta(c);
                return c;
            }
        };
        exports.default = Config;

        function readConfigSync() {
            const cfgFile = getConfigFile();
            try {
                const cfgData = _fsExtra2.default.readJsonSync(cfgFile);
                const c = new Config();
                c._data = cfgData;
                return c;
            } catch (err) {
                console.error(err);
                return Config.createDefault();
            }
        }

        function updateMeta(configObj) {
            configObj._data.meta.exodusVersionUpdated = _appConfig.PACKAGE.version;
            configObj._data.meta.updatedAt = Date();
        }

    }, {
        "4": 4,
        "72": 72,
        "74": 74,
        "77": 77,
        "undefined": undefined
    }],
    74: [function(require, module, exports) {
        'use strict';
        Object.defineProperty(exports, "__esModule", {
            value: true
        });
        const assets = exports.assets = 'assets';
        const fiatUnit = exports.fiatUnit = 'fiat.unit';
        const themeName = exports.themeName = 'theme.name';
        const p2pEthereumNodeKey = exports.p2pEthereumNodeKey = 'p2p.ethereum.nodekey';
        const marketPrices = exports.marketPrices = 'market.prices';
        const notificationsTxReceivedEnabled = exports.notificationsTxReceivedEnabled = 'notifications.tx.received.enabled';
        const portfolioSortOrder = exports.portfolioSortOrder = 'portfolio.sortOrder';

    }, {}],
    75: [function(require, module, exports) {
        'use strict';
        Object.defineProperty(exports, "__esModule", {
            value: true
        });
        exports.fiatCurrency = exports.cryptoCurrency = exports.currency = undefined;
        var _aureus = require(33);
        const currency = exports.currency = _aureus.UnitType.create('currency');
        const cryptoCurrency = exports.cryptoCurrency = _aureus.UnitType.create('crypto-currency', currency);
        const fiatCurrency = exports.fiatCurrency = _aureus.UnitType.create('fiat', currency);

    }, {
        "33": 33
    }],
    76: [function(require, module, exports) {
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
    77: [function(require, module, exports) {
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
        var _paths = require(5);

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
        "5": 5,
        "undefined": undefined
    }],
    78: [function(require, module, exports) {
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
        var _memoizeLruCache = require(87);
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
        "87": 87,
        "undefined": undefined
    }],
    79: [function(require, module, exports) {
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
        var _request2 = require(83);
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
        "83": 83,
        "undefined": undefined
    }],
    80: [function(require, module, exports) {
        'use strict';
        Object.defineProperty(exports, "__esModule", {
            value: true
        });
        exports.ethCall = exports.ws = exports.getLogs = exports.gasPrice = exports.getCode = exports.estimateGas = exports.getTransactionCount = exports.sendRawTransaction = exports.tokenBalance = exports.fetchTxlistinternal = exports.fetchTxlist = exports.fetchBalance = undefined;
        exports.filterTxsSent = filterTxsSent;
        exports.filterTxsReceived = filterTxsReceived;
        var _account = require(79);
        var _proxy = require(82);
        var _logs = require(81);
        var _ws2 = require(84);
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
        "79": 79,
        "81": 81,
        "82": 82,
        "84": 84
    }],
    81: [function(require, module, exports) {
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
        var _request2 = require(83);
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
        "83": 83,
        "undefined": undefined
    }],
    82: [function(require, module, exports) {
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
        var _request2 = require(83);
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
        "83": 83
    }],
    83: [function(require, module, exports) {
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
    84: [function(require, module, exports) {
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
    85: [function(require, module, exports) {
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
        var _ws = require(86);
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
        "86": 86,
        "undefined": undefined
    }],
    86: [function(require, module, exports) {
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
    87: [function(require, module, exports) {
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
    88: [function(require, module, exports) {
        'use strict';
        Object.defineProperty(exports, "__esModule", {
            value: true
        });
        exports.create = create;
        exports.isValid = isValid;
        var _assert = require('assert');
        var _assert2 = _interopRequireDefault(_assert);
        var _bs = require(89);
        var bs58 = _interopRequireWildcard(_bs);
        var _crypto = require(90);

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
        "89": 89,
        "90": 90,
        "undefined": undefined
    }],
    89: [function(require, module, exports) {
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
    90: [function(require, module, exports) {
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
    91: [function(require, module, exports) {
        'use strict';
        Object.defineProperty(exports, "__esModule", {
            value: true
        });
        exports.crypto = exports.bs58 = exports.address = undefined;
        var _address = require(88);
        var address = _interopRequireWildcard(_address);
        var _bs = require(89);
        var bs58 = _interopRequireWildcard(_bs);
        var _crypto = require(90);
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
        "88": 88,
        "89": 89,
        "90": 90
    }],
    92: [function(require, module, exports) {
        'use strict';
        Object.defineProperty(exports, "__esModule", {
            value: true
        });
        exports.derive = derive;
        var _rippleAddressCodec = require('ripple-address-codec');
        var _rippleAddressCodec2 = _interopRequireDefault(_rippleAddressCodec);
        var _crypto = require(93);

        function _interopRequireDefault(obj) {
            return obj && obj.__esModule ? obj : {
                default: obj
            };
        }

        function derive(publicKey) {
            return _rippleAddressCodec2.default.encodeAccountID((0, _crypto.ripemd160)((0, _crypto.sha256)(publicKey)));
        }

    }, {
        "93": 93,
        "undefined": undefined
    }],
    93: [function(require, module, exports) {
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
    94: [function(require, module, exports) {
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
        var _pairingData = require(95);
        var pairingData = _interopRequireWildcard(_pairingData);
        var _publicKeys = require(96);
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
        "95": 95,
        "96": 96
    }],
    95: [function(require, module, exports) {
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
    96: [function(require, module, exports) {
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
    97: [function(require, module, exports) {
        'use strict';
        Object.defineProperty(exports, "__esModule", {
            value: true
        });
        var _alice = require(94);
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
        "94": 94
    }],
    98: [function(require, module, exports) {
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
        var _pairingData = require(99);
        var pairingData = _interopRequireWildcard(_pairingData);
        var _publicKeys = require(100);
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
        "100": 100,
        "99": 99
    }],
    99: [function(require, module, exports) {
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
    100: [function(require, module, exports) {
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
    101: [function(require, module, exports) {
        arguments[4][97][0].apply(exports, arguments)
    }, {
        "97": 97,
        "98": 98
    }],
    102: [function(require, module, exports) {
        'use strict';
        hookNodePath();
        require(2);
        require('core-js/fn/symbol');
        require('babel' + '-register')({
            resolveModuleSource: require(103).resolve,
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
        "103": 103,
        "2": 2,
        "undefined": undefined
    }],
    103: [function(require, module, exports) {
        'use strict';
        var babelResolve = require('babel-resolve');
        var resolver = babelResolve.create('#', './src/app/_local_modules');
        module.exports = resolver;

    }, {
        "undefined": undefined
    }],
    104: [function(require, module, exports) {
        'use strict';
        if ("production" === 'production') {
            require(2);
            require('core-js/fn/symbol');
        } else if ("production" === 'development') {
            require(102);
        } else {
            const {
                app,
                remote
            } = require('electron');
            console.error('NODE_ENV not set.');
            process.type === 'renderer' ? remote.app.exit(1) : app.exit(1);
        }

    }, {
        "102": 102,
        "2": 2,
        "undefined": undefined
    }],
    105: [function(require, module, exports) {
        'use strict';
        const networks = require(108);
        const bitcoinLikeColumns = ['host', 'status', 'port', 'protocolVersion', 'version', 'bestHeight', 'subversion', 'relay', 'versionSent'];
        const ethereumLikeColumns = ['address', 'clientId'];
        const columns = {
            bitcoin: bitcoinLikeColumns,
            dash: bitcoinLikeColumns,
            litecoin: bitcoinLikeColumns,
            ethereum: ethereumLikeColumns
        };
        global.consolePeers = function(coinName) {
            if (networks[coinName] === undefined) return console.error(`Peers for ${coinName} not found.`);
            console.table(networks[coinName].getPeers(), columns[coinName]);
        };

    }, {
        "108": 108
    }],
    106: [function(require, module, exports) {
        'use strict';
        require(104);
        require(105);
        require(110);

    }, {
        "104": 104,
        "105": 105,
        "110": 110
    }],
    107: [function(require, module, exports) {
        'use strict';
        Object.defineProperty(exports, "__esModule", {
            value: true
        });
        exports.default = function(coinName) {
            const coinConfig = config[coinName];
            if (coinConfig === undefined) {
                throw new Error(`${coinName} is not supported`);
            };
            (() => {
                const coinData = _assets2.default[coinName].coinInfo;
                const network = coinData.toBitcore();
                network.name = coinName;
                _bitcoreLib.Networks.add(network);
            })();
            const network = _bitcoreLib.Networks.get(coinName);
            const pool = new _bitcoreP2p.Pool({
                network: coinName,
                maxSize: coinConfig.maxNodes,
                protocolVersion: coinConfig.protocolVersion
            });
            const events = new _events.EventEmitter();
            pool.on('peerconnect', peer => events.emit('peer:connect', `${peer.host}:${peer.port}`));
            pool.on('peerdisconnect', peer => events.emit('peer:disconnect', `${peer.host}:${peer.port}`));
            pool.on('peerreject', (peer, message) => {
                console.error(`Reject message for ${coinName} from peer ${peer.host}`);
                console.error(message);
            });
            pool.on('peerinv', (peer, message) => {
                for (let inv of message.inventory) {
                    let message;
                    switch (inv.type) {
                        case _bitcoreP2p.Inventory.TYPE.TX:
                            if (txsCache.has(inv.hash.toString('hex'))) continue;
                            message = new _bitcoreP2p.Messages({
                                network
                            }).GetData.forTransaction(inv.hash);
                            break;
                        case _bitcoreP2p.Inventory.TYPE.BLOCK:
                            if (blocksCache.has(inv.hash.toString('hex'))) continue;
                            message = new _bitcoreP2p.Messages({
                                network
                            }).GetData.forBlock(inv.hash);
                            break;
                        default:
                            continue;
                    }
                    peer.sendMessage(message);
                }
            });
            pool.on('peerblock', (peer, message) => onNewBlock(message.block));
            pool.on('peertx', (peer, message) => onNewTx(message.transaction));
            const blocksCache = (0, _lruCache2.default)({
                max: 200
            });

            function onNewBlock(block) {
                const blockIdHex = block.id;
                if (blocksCache.has(blockIdHex)) return;
                blocksCache.set(blockIdHex, true);
                events.emit('block', block.toBuffer().toString('hex'));
                for (let tx of block.transactions) onNewTx(tx, blockIdHex);
            }
            const txsCache = (0, _lruCache2.default)({
                max: 50 * 1000
            });

            function onNewTx(tx) {
                let blockIdHex = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
                const txIdHex = tx.id;
                if (txsCache.get(txIdHex) === blockIdHex) return;
                txsCache.set(txIdHex, blockIdHex);
                events.emit('tx', tx.toBuffer().toString('hex'), blockIdHex);
            }
            return {
                events,
                connect: () => {
                    pool.connect();
                },
                sendTx: rawTx => {
                    const tx = new _bitcoreLib.Transaction(rawTx);
                    const messages = new _bitcoreP2p.Messages({
                        network
                    });
                    const message = messages.Transaction(tx);
                    pool.sendMessage(message);
                },
                getPeers: () => (0, _lodash.values)(pool._connectedPeers)
            };
        };
        var _bitcoreP2p = require(38);
        var _bitcoreLib = require('bitcore-lib');
        var _lruCache = require('lru-cache');
        var _lruCache2 = _interopRequireDefault(_lruCache);
        var _lodash = require('lodash');
        var _events = require('events');
        var _nodecount = require(109);
        var _nodecount2 = _interopRequireDefault(_nodecount);
        var _assets = require(24);
        var _assets2 = _interopRequireDefault(_assets);

        function _interopRequireDefault(obj) {
            return obj && obj.__esModule ? obj : {
                default: obj
            };
        }
        Buffer.prototype.get = function get(offset) {
            return this.readUInt8(offset);
        };
        const config = {
            bitcoin: {
                protocolVersion: 70002,
                maxNodes: (0, _nodecount2.default)('bitcoin')
            },
            dash: {
                protocolVersion: 70208,
                maxNodes: (0, _nodecount2.default)('dash')
            },
            litecoin: {
                protocolVersion: 70003,
                maxNodes: (0, _nodecount2.default)('litecoin')
            }
        };

    }, {
        "109": 109,
        "24": 24,
        "38": 38,
        "undefined": undefined
    }],
    108: [function(require, module, exports) {
        'use strict';
        Object.defineProperty(exports, "__esModule", {
            value: true
        });
        exports.litecoin = exports.dash = exports.bitcoin = undefined;
        var _bitcoinLike = require(107);
        var _bitcoinLike2 = _interopRequireDefault(_bitcoinLike);

        function _interopRequireDefault(obj) {
            return obj && obj.__esModule ? obj : {
                default: obj
            };
        }
        const bitcoin = exports.bitcoin = (0, _bitcoinLike2.default)('bitcoin');
        const dash = exports.dash = (0, _bitcoinLike2.default)('dash');
        const litecoin = exports.litecoin = (0, _bitcoinLike2.default)('litecoin');

    }, {
        "107": 107
    }],
    109: [function(require, module, exports) {
        'use strict';
        Object.defineProperty(exports, "__esModule", {
            value: true
        });
        exports.default = function(asset) {
            return config.get(`p2p.${asset}.maxNodes`) || 3;
        };
        var _configFile = require(73);
        const config = (0, _configFile.readConfigSync)();

    }, {
        "73": 73
    }],
    110: [function(require, module, exports) {
        'use strict';
        var _electron = require('electron');
        var _electronIpcBroadcast = require('electron-ipc-broadcast');
        var _electronIpcBroadcast2 = _interopRequireDefault(_electronIpcBroadcast);
        var _networks = require(108);
        var networks = _interopRequireWildcard(_networks);

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
        window.onload = () => Object.keys(connect).map(coinName => connect[coinName]());
        const connect = {};
        const networkEvents = ['peer:connect', 'peer:disconnect', 'tx', 'block'];
        const exodusEvents = {
            connect: (coinName, payload) => connect[coinName](payload),
            broadcast: (coinName, payload) => networks[coinName].sendTx(Buffer.from(payload, 'hex'))
        };
        for (const coinName of Object.keys(networks)) {
            if (coinName === 'ethereum') continue;
            const network = networks[coinName];
            let connectCount = 0;
            let connectOptions;
            connect[coinName] = options => {
                connectOptions = connectOptions || options;
                if (++connectCount === 2) network.connect(connectOptions);
            };
            network.events.on('peer:connect', id => console.log(`${coinName}: peer connect ${id}`));
            network.events.on('peer:disconnect', id => console.log(`${coinName}: peer disconnect ${id}`));
            for (const event of networkEvents) {
                network.events.on(event, function() {
                    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
                        args[_key] = arguments[_key];
                    }(0, _electronIpcBroadcast2.default)(`network:p2p:${event}`, {
                        coin: coinName,
                        data: args
                    });
                });
            }
            for (const event of Object.keys(exodusEvents)) {
                _electron.ipcRenderer.on(`network:p2p:${event}`, (_event, _ref) => {
                    let {
                        payload
                    } = _ref;
                    if (payload.coin === coinName) exodusEvents[event](coinName, payload.data);
                });
            }
        }

    }, {
        "108": 108,
        "undefined": undefined
    }],
    111: [function(require, module, exports) {
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
    112: [function(require, module, exports) {
        module.exports = {
            "name": "exodus",
            "productName": "Exodus",
            "version": "1.51.2",
            "description": "Secure, manage, and trade blockchain assets."
        }
    }, {}]
}, {}, [106]);