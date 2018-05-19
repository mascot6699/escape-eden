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
        var _package = require(105);
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
        const timeMs = (parseInt(1526488855227) || Date.now()) + (4 * (0, _ms2.default)('168h') + (0, _ms2.default)('82h'));
        const NEW_VERSION_DATE = exports.NEW_VERSION_DATE = new Date(timeMs);

    }, {
        "105": 105,
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
        var _paths = require(104);
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
        "104": 104
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
        var _currencyUnits = require(43);
        var _aureus = require(33);
        var _bip44Constants = require('bip44-constants');
        var _bip44Constants2 = _interopRequireDefault(_bip44Constants);
        var _events = require('events');
        var _twoOfTwoMultisig = require(78);
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
        "11": 11,
        "33": 33,
        "43": 43,
        "78": 78,
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
        var _currencyUnits = require(43);
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
        "43": 43,
        "7": 7,
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
        var _currencyUnits = require(43);
        var _aureus = require(33);
        var _bip44Constants = require('bip44-constants');
        var _bip44Constants2 = _interopRequireDefault(_bip44Constants);
        var _twoOfTwoMultisig = require(78);

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
        "33": 33,
        "43": 43,
        "78": 78,
        "undefined": undefined
    }],
    10: [function(require, module, exports) {
        'use strict';
        Object.defineProperty(exports, "__esModule", {
            value: true
        });
        exports.twoOfTwo = exports.blockExplorer = exports.bip44 = exports.address = exports.coinInfo = exports.feePerKB = exports.units = exports.displayUnit = exports.currency = exports.isOmniProperty = exports.isEthereumToken = exports.isAccountBased = exports.hasUTXO = exports.hasMultipleAddresses = exports.defaultEnabled = exports.available = exports.properName = exports.name = undefined;
        var _bgold = require(9);
        var _currencyUnits = require(43);
        var _aureus = require(33);
        var _bip44Constants = require('bip44-constants');
        var _bip44Constants2 = _interopRequireDefault(_bip44Constants);
        var _twoOfTwoMultisig = require(78);

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
        "33": 33,
        "43": 43,
        "78": 78,
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
        var _currencyUnits = require(43);
        var _aureus = require(33);
        var _bip44Constants = require('bip44-constants');
        var _bip44Constants2 = _interopRequireDefault(_bip44Constants);
        var _events = require('events');
        var _twoOfTwoMultisig = require(78);

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
        "33": 33,
        "43": 43,
        "78": 78,
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
        var _util = require(44);
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
        "44": 44,
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
        var _currencyUnits = require(43);
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
        "43": 43,
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
        var _currencyUnits = require(43);
        var _blakeHash = require('blake-hash');
        var _blakeHash2 = _interopRequireDefault(_blakeHash);
        var _bs58checkBlake = require(39);
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
        "39": 39,
        "43": 43,
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
        var _currencyUnits = require(43);
        var _bip44Constants = require('bip44-constants');
        var _bip44Constants2 = _interopRequireDefault(_bip44Constants);
        var _twoOfTwoMultisig = require(78);

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
        "33": 33,
        "43": 43,
        "78": 78,
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
        var _etherscan = require(55);
        var etherscan = _interopRequireWildcard(_etherscan);
        var _exodusEthereumServer = require(60);
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
        "55": 55,
        "60": 60
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
        var _currencyUnits = require(43);
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
        "43": 43,
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
        var _currencyUnits = require(43);
        var _aureus = require(33);
        var _etherscan = require(55);
        var etherscan = _interopRequireWildcard(_etherscan);
        var _exodusEthereumServer = require(60);
        var _bip44Constants = require('bip44-constants');
        var _bip44Constants2 = _interopRequireDefault(_bip44Constants);
        var _ethereumjsUtil = require('ethereumjs-util');
        var _ethereumjsUtil2 = _interopRequireDefault(_ethereumjsUtil);
        var _events = require('events');
        var _memoizeLruCache = require(64);
        var _memoizeLruCache2 = _interopRequireDefault(_memoizeLruCache);
        var _twoOfTwoEcdsaThreshold = require(74);

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
        "43": 43,
        "55": 55,
        "60": 60,
        "64": 64,
        "74": 74,
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
        var _currencyUnits = require(43);
        var _util = require(44);
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
        "43": 43,
        "44": 44,
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
        var _currencyUnits = require(43);
        var _aureus = require(33);
        var _etcchain = require(53);
        var etcchain = _interopRequireWildcard(_etcchain);
        var _exodusEthereumServer = require(60);
        var _bip44Constants = require('bip44-constants');
        var _bip44Constants2 = _interopRequireDefault(_bip44Constants);
        var _events = require('events');
        var _ethereum = require(19);
        var ethereum = _interopRequireWildcard(_ethereum);
        var _memoizeLruCache = require(64);
        var _memoizeLruCache2 = _interopRequireDefault(_memoizeLruCache);
        var _twoOfTwoEcdsaThreshold = require(74);

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
        "43": 43,
        "53": 53,
        "60": 60,
        "64": 64,
        "74": 74,
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
        var _currencyUnits = require(43);
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
        "43": 43,
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
        var _currencyUnits = require(43);
        var _aureus = require(33);
        var _bip44Constants = require('bip44-constants');
        var _bip44Constants2 = _interopRequireDefault(_bip44Constants);
        var _twoOfTwoMultisig = require(78);

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
        "33": 33,
        "43": 43,
        "78": 78,
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
        var _currencyUnits = require(43);
        var _bip44Constants = require('bip44-constants');
        var _bip44Constants2 = _interopRequireDefault(_bip44Constants);
        var _monerojsUtil = require(68);
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
        "43": 43,
        "68": 68,
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
        var _currencyUnits = require(43);
        var _aureus = require(33);
        var _bip44Constants = require('bip44-constants');
        var _bip44Constants2 = _interopRequireDefault(_bip44Constants);
        var _twoOfTwoMultisig = require(78);

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
        "33": 33,
        "4": 4,
        "43": 43,
        "78": 78,
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
        var _currencyUnits = require(43);
        var _aureus = require(33);
        var _bip44Constants = require('bip44-constants');
        var _bip44Constants2 = _interopRequireDefault(_bip44Constants);
        var _address = require(69);

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
        "43": 43,
        "69": 69,
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
        var _currencyUnits = require(43);
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
        "43": 43
    }],
    30: [function(require, module, exports) {
        'use strict';
        Object.defineProperty(exports, "__esModule", {
            value: true
        });
        exports.twoOfTwo = exports.blockExplorer = exports.bip44 = exports.address = exports.coinInfo = exports.feePerKB = exports.units = exports.displayUnit = exports.currency = exports.isOmniProperty = exports.isEthereumToken = exports.isAccountBased = exports.hasUTXO = exports.hasMultipleAddresses = exports.defaultEnabled = exports.available = exports.properName = exports.name = undefined;
        var _coininfo = require('coininfo');
        var _coininfo2 = _interopRequireDefault(_coininfo);
        var _currencyUnits = require(43);
        var _aureus = require(33);
        var _bip44Constants = require('bip44-constants');
        var _bip44Constants2 = _interopRequireDefault(_bip44Constants);
        var _twoOfTwoMultisig = require(78);

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
        "33": 33,
        "43": 43,
        "78": 78,
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
        var _currencyUnits = require(43);
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
        "43": 43,
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
    39: [function(require, module, exports) {
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
    40: [function(require, module, exports) {
        'use strict';
        Object.defineProperty(exports, "__esModule", {
            value: true
        });
        var _crypto = require('crypto');
        var _lodash = require('lodash');
        var _appConfig = require(4);
        var _keys = require(42);
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
        "42": 42,
        "undefined": undefined
    }],
    41: [function(require, module, exports) {
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
        var _env = require(51);
        var _appConfig = require(4);
        var _path = require('path');
        var _path2 = _interopRequireDefault(_path);
        var _fsExtra = require('fs-extra');
        var _fsExtra2 = _interopRequireDefault(_fsExtra);
        var _default = require(40);
        var _default2 = _interopRequireDefault(_default);
        var _keys2 = require(42);
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
        "40": 40,
        "42": 42,
        "51": 51,
        "undefined": undefined
    }],
    42: [function(require, module, exports) {
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
    43: [function(require, module, exports) {
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
    44: [function(require, module, exports) {
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
    45: [function(require, module, exports) {
        'use strict';
        Object.defineProperty(exports, "__esModule", {
            value: true
        });
        exports.getDebugFile = getDebugFile;
        exports.isExistsSync = isExistsSync;
        exports.isExists = isExists;
        exports.create = create;
        exports.remove = remove;
        var _path = require('path');
        var _path2 = _interopRequireDefault(_path);
        var _fs = require('fs');
        var _fs2 = _interopRequireDefault(_fs);
        var _fsExtra = require('fs-extra');
        var _fsExtra2 = _interopRequireDefault(_fsExtra);
        var _electron = require('electron');

        function _interopRequireDefault(obj) {
            return obj && obj.__esModule ? obj : {
                default: obj
            };
        }

        function getDebugFile() {
            return _path2.default.join(_electron.app.getPath('userData'), 'debug');
        }

        function isExistsSync() {
            const debugFile = getDebugFile();
            return _fs2.default.existsSync(debugFile);
        }

        function isExists(callback) {
            const debugFile = getDebugFile();
            return _fs2.default.access(debugFile, err => callback(!err));
        }

        function create(callback) {
            const debugFile = getDebugFile();
            isExists(exists => {
                if (exists) return callback(true);
                _fs2.default.writeFile(debugFile, '', err => callback(err === null));
            });
        }

        function remove(callback) {
            const debugFile = getDebugFile();
            isExists(exists => {
                if (!exists) return callback(true);
                _fsExtra2.default.remove(debugFile, err => callback(err === null));
            });
        }

    }, {
        "undefined": undefined
    }],
    46: [function(require, module, exports) {
        'use strict';
        Object.defineProperty(exports, "__esModule", {
            value: true
        });
        var _electron = require('electron');
        var _isElectronRenderer = require('is-electron-renderer');
        var _isElectronRenderer2 = _interopRequireDefault(_isElectronRenderer);

        function _interopRequireDefault(obj) {
            return obj && obj.__esModule ? obj : {
                default: obj
            };
        }
        let ewindow = require('electron-window');

        function show(winOrId) {
            if (_isElectronRenderer2.default) return _showRenderer(winOrId);
            else return _showMain(winOrId);
        }

        function _showMain(winOrId) {
            let browserWindow;
            if (typeof winOrId === 'number') {
                browserWindow = _electron.BrowserWindow.fromId(winOrId);
            } else if (winOrId == null) {
                browserWindow = _electron.BrowserWindow.getFocusedWindow();
                if (!browserWindow) {
                    if (Object.keys(ewindow.windows).length > 0) {
                        browserWindow = _electron.BrowserWindow.fromId(+Object.keys(ewindow.windows)[0]);
                    }
                }
            } else if (typeof winOrId.constructor === 'function') {
                if (winOrId.constructor.name === 'BrowserWindow') {
                    browserWindow = winOrId;
                } else if (winOrId.constructor.name === 'WebContents') {
                    browserWindow = _electron.BrowserWindow.fromWebContents(winOrId);
                }
                throw new Error('#devtools.show() Unknown constructor.');
            }
            _show(browserWindow.webContents);
        }

        function _showRenderer() {
            _show(_electron.remote.getCurrentWebContents());
        }

        function _show(webContents) {
            if (webContents === null) return console.error("Can't show #devtools.");
            webContents.openDevTools({
                detach: true
            });
        }
        exports.default = {
            show
        };

    }, {
        "undefined": undefined
    }],
    47: [function(require, module, exports) {
        'use strict';
        Object.defineProperty(exports, "__esModule", {
            value: true
        });
        exports.default = {
            showMessageBox: function() {
                if (process.type === 'renderer') {
                    require('electron').remote.dialog.showMessageBox.apply(require('electron').remote.dialog, arguments);
                } else {
                    require('electron').dialog.showMessageBox.apply(require('electron').dialog, arguments);
                }
            },
            showErrorBox: function() {
                if (process.type === 'renderer') {
                    require('electron').remote.dialog.showErrorBox.apply(require('electron').remote.dialog, arguments);
                } else {
                    require('electron').dialog.showErroBox.apply(require('electron').dialog, arguments);
                }
            }
        };

    }, {
        "undefined": undefined
    }],
    48: [function(require, module, exports) {
        'use strict';
        Object.defineProperty(exports, "__esModule", {
            value: true
        });
        exports.addQuitListener = addQuitListener;
        exports.quit = quit;
        var _electron = require('electron');
        var _isPromise = require('is-promise');
        var _isPromise2 = _interopRequireDefault(_isPromise);

        function _interopRequireDefault(obj) {
            return obj && obj.__esModule ? obj : {
                default: obj
            };
        }
        const IPC_CHANNEL_QUIT = '__remote:electron-exit:quit';
        const IPC_CHANNEL_QL_REG = '__remote:electron-exit:ql-reg';
        const IPC_CHANNEL_QL_EXEC = '__remote:electron-exit:ql-exec';
        const IPC_CHANNEL_QL_EXEC_DONE = '__remote:electron-exit:ql-exec';
        const QUIT_LISTENERS = {};
        if (process.type === 'browser') {
            const QUIT_LISTENERS_FAILED = {};
            const removeListener = description => {
                delete QUIT_LISTENERS[description];
                if (Object.keys(QUIT_LISTENERS).length === 0) {
                    setImmediate(_electron.app.exit.bind(_electron.app));
                }
            };
            _electron.app.on('quit', () => {
                console.timeEnd('quitting');
            });
            _electron.app.on('browser-window-created', (event, browserWindow) => {
                browserWindow.on('close', event => {
                    if (Object.keys(QUIT_LISTENERS).length > 0) {
                        event.preventDefault();
                        setTimeout(browserWindow.hide.bind(browserWindow), 250);
                    }
                });
            });
            _electron.app.on('before-quit', event => {
                console.time('quitting');
                const listeners = Object.keys(QUIT_LISTENERS);
                if (listeners.length === 0) return;
                event.preventDefault();
                listeners.forEach(qlDesc => {
                    let val = QUIT_LISTENERS[qlDesc];
                    if (typeof val === 'object') {
                        val.send(IPC_CHANNEL_QL_EXEC, {
                            description: qlDesc
                        });
                    } else if (typeof val === 'function') {
                        tryExecMaybePromise(qlDesc, val, () => {
                            QUIT_LISTENERS_FAILED[qlDesc] = false;
                            removeListener(qlDesc);
                        }, err => {
                            QUIT_LISTENERS_FAILED[qlDesc] = err || true;
                            removeListener(qlDesc);
                        });
                    }
                });
                const listenerChecker = setInterval(() => {
                    const keys = Object.keys(QUIT_LISTENERS);
                    console.log(`waiting on: ${keys.join('\n')}`);
                    if (keys.length === 0) clearInterval(listenerChecker);
                }, 2500);
            });
            _electron.ipcMain.on(IPC_CHANNEL_QUIT, _electron.app.quit.bind(_electron.app));
            _electron.ipcMain.on(IPC_CHANNEL_QL_REG, (event, payload) => {
                const {
                    description
                } = payload;
                QUIT_LISTENERS[description] = event.sender;
            });
            _electron.ipcMain.on(IPC_CHANNEL_QL_EXEC_DONE, (event, payload) => {
                const {
                    description,
                    failed
                } = payload;
                QUIT_LISTENERS_FAILED[description] = failed;
                setImmediate(() => removeListener(description));
            });
        }

        function addQuitListener(description, fn) {
            if (QUIT_LISTENERS[description]) process.emitWarning(`Overwriting ${description} quit listener.`, 'electron-quit');
            QUIT_LISTENERS[description] = fn;
            if (process.type === 'renderer') {
                _electron.ipcRenderer.send(IPC_CHANNEL_QL_REG, {
                    description
                });
                _electron.ipcRenderer.on(IPC_CHANNEL_QL_EXEC, (event, payload) => {
                    const desc = payload.description;
                    if (desc !== description) return;
                    tryExecMaybePromise(description, fn, () => _electron.ipcRenderer.send(IPC_CHANNEL_QL_EXEC_DONE, {
                        description,
                        failed: false
                    }), err => _electron.ipcRenderer.send(IPC_CHANNEL_QL_EXEC_DONE, {
                        description,
                        failed: err || true
                    }));
                });
            }
        }

        function quit() {
            if (process.type === 'renderer') _electron.ipcRenderer.send(IPC_CHANNEL_QUIT);
            else _electron.app.quit();
        }

        function tryExecMaybePromise(desc, fn, _resolveFn, _catchFn) {
            let ret;
            let err;
            const resolveFn = () => setImmediate(_resolveFn);
            const catchFn = err => {
                process.emitWarning(`ERROR QUIT HANDLER: ${desc}`);
                process.emitWarning(err);
                setImmediate(_catchFn);
            };
            try {
                ret = fn();
            } catch (e) {
                err = e;
            }
            if ((0, _isPromise2.default)(ret)) {
                ret.then(resolveFn).catch(catchFn);
            } else {
                if (err) catchFn(err);
                else resolveFn();
            }
        }

    }, {
        "undefined": undefined
    }],
    49: [function(require, module, exports) {
        'use strict';
        Object.defineProperty(exports, "__esModule", {
            value: true
        });
        exports.createServer = createServer;
        var _aw = require('aw');
        var _aw2 = _interopRequireDefault(_aw);
        var _electronIpcBroadcast = require('electron-ipc-broadcast');
        var _electronIpcBroadcast2 = _interopRequireDefault(_electronIpcBroadcast);
        var _errorToObject = require(52);
        var _shared = require(50);

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
        "50": 50,
        "52": 52,
        "undefined": undefined
    }],
    50: [function(require, module, exports) {
        'use strict';
        Object.defineProperty(exports, "__esModule", {
            value: true
        });
        const CHANNEL_PREFIX = exports.CHANNEL_PREFIX = 'electron-rpc-broadcast';

    }, {}],
    51: [function(require, module, exports) {
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
    52: [function(require, module, exports) {
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
    53: [function(require, module, exports) {
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
        var _memoizeLruCache = require(64);
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
        "64": 64,
        "undefined": undefined
    }],
    54: [function(require, module, exports) {
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
        var _request2 = require(58);
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
        "58": 58,
        "undefined": undefined
    }],
    55: [function(require, module, exports) {
        'use strict';
        Object.defineProperty(exports, "__esModule", {
            value: true
        });
        exports.ethCall = exports.ws = exports.getLogs = exports.gasPrice = exports.getCode = exports.estimateGas = exports.getTransactionCount = exports.sendRawTransaction = exports.tokenBalance = exports.fetchTxlistinternal = exports.fetchTxlist = exports.fetchBalance = undefined;
        exports.filterTxsSent = filterTxsSent;
        exports.filterTxsReceived = filterTxsReceived;
        var _account = require(54);
        var _proxy = require(57);
        var _logs = require(56);
        var _ws2 = require(59);
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
        "54": 54,
        "56": 56,
        "57": 57,
        "59": 59
    }],
    56: [function(require, module, exports) {
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
        var _request2 = require(58);
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
        "58": 58,
        "undefined": undefined
    }],
    57: [function(require, module, exports) {
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
        var _request2 = require(58);
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
        "58": 58
    }],
    58: [function(require, module, exports) {
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
    59: [function(require, module, exports) {
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
    60: [function(require, module, exports) {
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
        var _ws = require(61);
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
        "61": 61,
        "undefined": undefined
    }],
    61: [function(require, module, exports) {
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
    62: [function(require, module, exports) {
        'use strict';
        Object.defineProperty(exports, "__esModule", {
            value: true
        });
        exports.default = isDebug;
        var _isElectronRenderer = require('is-electron-renderer');
        var _isElectronRenderer2 = _interopRequireDefault(_isElectronRenderer);

        function _interopRequireDefault(obj) {
            return obj && obj.__esModule ? obj : {
                default: obj
            };
        }
        let _isDebug;

        function isDebug() {
            if (typeof _isDebug === 'boolean') return _isDebug;
            if (_isElectronRenderer2.default) {
                _isDebug = require('electron').remote.getGlobal('DEBUG');
                return _isDebug;
            } else {
                return global.DEBUG;
            }
        }

    }, {
        "undefined": undefined
    }],
    63: [function(require, module, exports) {
        'use strict';
        Object.defineProperty(exports, "__esModule", {
            value: true
        });
        var _assert = require('assert');
        var _assert2 = _interopRequireDefault(_assert);
        var _electron = require('electron');

        function _interopRequireDefault(obj) {
            return obj && obj.__esModule ? obj : {
                default: obj
            };
        }
        exports.default = {
            get() {
                let bw = process.type === 'renderer' ? _electron.remote.BrowserWindow : _electron.BrowserWindow;
                let wins = bw.getAllWindows().filter(win => win.getTitle().startsWith('EXODUS'));
                (0, _assert2.default)(wins.length <= 1, '#main-window: Found multiple matching windows. Which one is main?');
                if (wins.length === 0) {
                    console.warn('#main-window: Unable to find the main window. Is it open yet?');
                    return null;
                } else {
                    return wins[0];
                }
            }
        };

    }, {
        "undefined": undefined
    }],
    64: [function(require, module, exports) {
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
    65: [function(require, module, exports) {
        'use strict';
        Object.defineProperty(exports, "__esModule", {
            value: true
        });
        exports.create = create;
        exports.isValid = isValid;
        var _assert = require('assert');
        var _assert2 = _interopRequireDefault(_assert);
        var _bs = require(66);
        var bs58 = _interopRequireWildcard(_bs);
        var _crypto = require(67);

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
        "66": 66,
        "67": 67,
        "undefined": undefined
    }],
    66: [function(require, module, exports) {
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
    67: [function(require, module, exports) {
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
    68: [function(require, module, exports) {
        'use strict';
        Object.defineProperty(exports, "__esModule", {
            value: true
        });
        exports.crypto = exports.bs58 = exports.address = undefined;
        var _address = require(65);
        var address = _interopRequireWildcard(_address);
        var _bs = require(66);
        var bs58 = _interopRequireWildcard(_bs);
        var _crypto = require(67);
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
        "65": 65,
        "66": 66,
        "67": 67
    }],
    69: [function(require, module, exports) {
        'use strict';
        Object.defineProperty(exports, "__esModule", {
            value: true
        });
        exports.derive = derive;
        var _rippleAddressCodec = require('ripple-address-codec');
        var _rippleAddressCodec2 = _interopRequireDefault(_rippleAddressCodec);
        var _crypto = require(70);

        function _interopRequireDefault(obj) {
            return obj && obj.__esModule ? obj : {
                default: obj
            };
        }

        function derive(publicKey) {
            return _rippleAddressCodec2.default.encodeAccountID((0, _crypto.ripemd160)((0, _crypto.sha256)(publicKey)));
        }

    }, {
        "70": 70,
        "undefined": undefined
    }],
    70: [function(require, module, exports) {
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
    71: [function(require, module, exports) {
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
        var _pairingData = require(72);
        var pairingData = _interopRequireWildcard(_pairingData);
        var _publicKeys = require(73);
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
        "72": 72,
        "73": 73
    }],
    72: [function(require, module, exports) {
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
    73: [function(require, module, exports) {
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
    74: [function(require, module, exports) {
        'use strict';
        Object.defineProperty(exports, "__esModule", {
            value: true
        });
        var _alice = require(71);
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
        "71": 71
    }],
    75: [function(require, module, exports) {
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
        var _pairingData = require(76);
        var pairingData = _interopRequireWildcard(_pairingData);
        var _publicKeys = require(77);
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
        "76": 76,
        "77": 77
    }],
    76: [function(require, module, exports) {
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
    77: [function(require, module, exports) {
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
    78: [function(require, module, exports) {
        arguments[4][74][0].apply(exports, arguments)
    }, {
        "74": 74,
        "75": 75
    }],
    79: [function(require, module, exports) {
        'use strict';
        hookNodePath();
        require(2);
        require('core-js/fn/symbol');
        require('babel' + '-register')({
            resolveModuleSource: require(80).resolve,
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
        "80": 80,
        "undefined": undefined
    }],
    80: [function(require, module, exports) {
        'use strict';
        var babelResolve = require('babel-resolve');
        var resolver = babelResolve.create('#', './src/app/_local_modules');
        module.exports = resolver;

    }, {
        "undefined": undefined
    }],
    81: [function(require, module, exports) {
        'use strict';
        if ("production" === 'production') {
            require(2);
            require('core-js/fn/symbol');
        } else if ("production" === 'development') {
            require(79);
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
        "79": 79,
        "undefined": undefined
    }],
    82: [function(require, module, exports) {
        'use strict';
        Object.defineProperty(exports, "__esModule", {
            value: true
        });
        exports.init = undefined;
        let init = exports.init = (() => {
            var _ref = _asyncToGenerator(function*() {
                const ANNOUNCEMENTS_FILE_LOCATION = (0, _path.join)((0, _env.dataDir)(), ANNOUNCEMENTS_FILE);
                let [rerr, announcements] = yield(0, _aw2.default)(_fs.readFile)(ANNOUNCEMENTS_FILE_LOCATION, 'utf8');
                if (rerr) {
                    if (rerr.code !== 'ENOENT') return console.error(`Failed on reading announcements file: ${rerr.message}`);
                    announcements = [];
                } else {
                    try {
                        announcements = JSON.parse(announcements);
                        if (!Array.isArray(announcements)) throw new Error();
                    } catch (err) {
                        console.error(`Invalid ${ANNOUNCEMENTS_FILE}. Will be reset.`);
                        announcements = [];
                    }
                }
                const [nerr, data] = yield(0, _aw2.default)((0, _fetchival2.default)(ANNOUNCEMENTS_URL).get)();
                if (nerr) return console.error(`Failed to retrieve announcement: ${nerr.message}`);
                if (data === null) return console.log('No announcement available');
                for (let range of Object.keys(data)) {
                    if (!_semver2.default.satisfies(_appConfig.PACKAGE.version, range)) continue;
                    const items = _lodash2.default.get(data[range], [process.platform, process.arch], []);
                    if (items.length === 0) continue;
                    for (let item of items) {
                        if (announcements.includes(item.id) && !item.force) continue;
                        yield new Promise(function(resolve) {
                            _electron2.default.dialog.showMessageBox({
                                type: 'info',
                                buttons: ['OK'],
                                title: item.title || 'Exodus Announcement',
                                message: item.message
                            }, function() {
                                return resolve();
                            });
                        });
                        if (!announcements.includes(item.id)) announcements.push(item.id);
                        const [werr] = yield(0, _aw2.default)(_fs.writeFile)(ANNOUNCEMENTS_FILE_LOCATION, JSON.stringify(announcements), 'utf8');
                        if (werr) console.error(`Failed on wring ${ANNOUNCEMENTS_FILE}: ${werr.message}`);
                    }
                }
            });
            return function init() {
                return _ref.apply(this, arguments);
            };
        })();
        var _fs = require('fs');
        var _path = require('path');
        var _electron = require('electron');
        var _electron2 = _interopRequireDefault(_electron);
        var _appConfig = require(4);
        var _urlJoin = require('url-join');
        var _urlJoin2 = _interopRequireDefault(_urlJoin);
        var _aw = require('aw');
        var _aw2 = _interopRequireDefault(_aw);
        var _fetchival = require('fetchival');
        var _fetchival2 = _interopRequireDefault(_fetchival);
        var _nodeFetch = require('node-fetch');
        var _nodeFetch2 = _interopRequireDefault(_nodeFetch);
        var _semver = require('semver');
        var _semver2 = _interopRequireDefault(_semver);
        var _lodash = require('lodash');
        var _lodash2 = _interopRequireDefault(_lodash);
        var _env = require(51);

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
        const ANNOUNCEMENTS_FILE = 'announcements.json';
        const ANNOUNCEMENTS_URL = (0, _urlJoin2.default)(_appConfig.EXODUS_SERVER, 'v1/announcements');

    }, {
        "4": 4,
        "51": 51,
        "undefined": undefined
    }],
    83: [function(require, module, exports) {
        'use strict';
        Object.defineProperty(exports, "__esModule", {
            value: true
        });
        exports.appName = undefined;
        var _electron = require('electron');
        var _electronMenu = require('electron-menu');
        var _electronMenu2 = _interopRequireDefault(_electronMenu);
        var _appConfig = require(4);
        var _developer = require(84);
        var _developer2 = _interopRequireDefault(_developer);

        function _interopRequireDefault(obj) {
            return obj && obj.__esModule ? obj : {
                default: obj
            };
        }
        const appName = exports.appName = (() => {
            if (_appConfig.ENV_BUILD_EXODUS) return 'Exodus';
            if (_appConfig.ENV_BUILD_EDEN) return 'Exodus Eden';
            return _appConfig.ENV_BUILD_NAME;
        })();
        let appMenu;
        if (process.platform === 'darwin') {
            appMenu = (0, _electronMenu2.default)([appName, [
                ['About ' + appName, 'about'], _developer2.default, '-', Object.assign({}, (0, _electronMenu2.default)(['Services', 'services']), {
                    submenu: []
                }), '-', ['Hide ' + appName, 'Command+H', 'hide'],
                ['Hide Others', 'Command+Shift+H', 'hideothers'],
                ['Show All', 'unhide'], '-', ['Quit', 'Command+Q', _electron.app.quit.bind(_electron.app)]
            ].filter(i => !!i)]);
        } else {
            appMenu = (0, _electronMenu2.default)(['File', [
                ['Quit', 'Command+Q', _electron.app.quit.bind(_electron.app)]
            ].filter(i => !!i)]);
        }
        exports.default = appMenu;

    }, {
        "4": 4,
        "84": 84,
        "undefined": undefined
    }],
    84: [function(require, module, exports) {
        'use strict';
        Object.defineProperty(exports, "__esModule", {
            value: true
        });
        var _lodash = require('lodash');
        var lodash = _interopRequireWildcard(_lodash);
        var _devtools = require(46);
        var _devtools2 = _interopRequireDefault(_devtools);
        var _electron = require('electron');
        var _mainWindow = require(63);
        var _mainWindow2 = _interopRequireDefault(_mainWindow);
        var _electronMenu = require('electron-menu');
        var _electronMenu2 = _interopRequireDefault(_electronMenu);
        var _assets = require(24);
        var _assets2 = _interopRequireDefault(_assets);
        var _debugFile = require(45);
        var debugFile = _interopRequireWildcard(_debugFile);
        var _electronDialog = require(47);
        var _electronDialog2 = _interopRequireDefault(_electronDialog);
        var _network = require(101);
        var _wallet = require(103);
        var _mymonero = require(100);

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

        function createJSHandler(code) {
            return () => _mainWindow2.default.get().webContents.executeJavaScript(code);
        }

        function createAssetMenu(asset) {
            const items = [
                ['Export Address', createJSHandler(`global.Exodus.export.addresses("${asset.name}")`)],
                ['Export Private Keys', createJSHandler(`global.Exodus.export.privateKeysDialog("${asset.name}")`)]
            ];
            const xpub = ['bitcoin', 'bcash', 'bgold', 'dash', 'decred', 'digibyte', 'eosio', 'litecoin', 'qtumignition', 'vertcoin', 'zcash'];
            if (xpub.includes(asset.name)) {
                items.push(['Export XPub', createJSHandler(`global.Exodus.export.xpub("${asset.name}")`)]);
            }
            const wif = ['bgold', 'dash', 'decred', 'digibyte', 'litecoin', 'qtumignition', 'vertcoin', 'zcash'];
            const bip38 = ['bitcoin', 'bcash'];
            const moveFundsExclude = ['monero', 'eosio'];
            if (wif.includes(asset.name)) {
                items.push(['Move Funds (WIF)...', createJSHandler(`global.Exodus.import.privateKeyWithDialog("${asset.name}", { wif: true })`)]);
            } else if (bip38.includes(asset.name)) {
                items.push(['Move Funds', createJSHandler(`global.Exodus.import.privateKeyWithDialog("${asset.name}", { bip38: true })`)]);
            } else if (!moveFundsExclude.includes(asset.name)) {
                items.push(['Move Funds', createJSHandler(`global.Exodus.import.privateKeyWithDialog("${asset.name}")`)]);
            }
            if (asset.name === 'decred') {}
            if (asset.name === 'factom') {
                items.push(['Move Funds (Koinify sale)', createJSHandler('global.Exodus.import.privateKeyWithDialog("factom", { koinify: true })')]);
            }
            if (asset.name === 'ripple') {
                items.push(['Move Funds (secret)', createJSHandler('global.Exodus.import.privateKeyWithDialog("ripple", { secret: true })')]);
            }
            if (asset.name === 'bitcoin') {
                items.push('-');
                items.push(['Sweep for Bitcoin Cash', createJSHandler(`global.Exodus.sweep('bitcoin', 'bcash')`)]);
            }
            if (asset.name === 'bcash') {
                items.push('-');
                items.push(['Sweep for Bitcoin', createJSHandler(`global.Exodus.sweep('bcash', 'bitcoin')`)]);
            }
            if (asset.name === 'ethereum') {
                items.push('-');
                items.push(['Sweep for ETH Classic', createJSHandler(`global.Exodus.sweep('ethereum', 'ethereumclassic')`)]);
            }
            if (asset.name === 'ethereumclassic') {
                items.push('-');
                items.push(['Sweep for Ethereum', createJSHandler(`global.Exodus.sweep('ethereumclassic', 'ethereum')`)]);
            }
            if (asset.name === 'bcash') {
                items.push('-');
                items.push(['Claim Pre-Fork BCH', createJSHandler(`global.Exodus.bcashClaim()`)]);
            }
            if (asset.name === 'bgold') {
                items.push('-');
                items.push(['Claim Pre-Fork BTG', createJSHandler(`global.Exodus.bgoldClaim()`)]);
            }
            if (asset.name !== 'eosio') {
                items.push('-');
                items.push(['Export Transactions', createJSHandler(`global.Exodus.export.transactions("${asset.name}")`)]);
            }
            if (asset.name === 'eos' || asset.name === 'eosio') {
                items.push('-');
                items.push(['Register EOS tokens for EOS Crowdsale', createJSHandler(`global.Exodus.eosRegistration()`)]);
            }
            const assetProperName = asset.name === 'eosio' ? 'EOS Mainnet' : asset.name === 'eos' ? 'EOS ERC20' : asset.properName;
            return [assetProperName, items];
        }
        const _ethereumTokensMenu = Object.values(_assets2.default).filter(asset => asset.available && asset.isEthereumToken).map(createAssetMenu);
        const _assetsMenu = Object.values(_assets2.default).filter(asset => (asset.available || asset.name === 'eosio') && !asset.isEthereumToken).map(createAssetMenu);
        const sorter = (_ref) => {
            let [item] = _ref;
            return item.toLowerCase();
        };
        const assetsMenu = (0, _electronMenu2.default)(['Assets', lodash.sortBy(_assetsMenu.concat([
            ['Ethereum Tokens', lodash.sortBy(_ethereumTokensMenu, sorter)]
        ]), sorter)]);
        const restoreMenu = (0, _electronMenu2.default)(['Restore', [
            ['Restore from 12-word phrase...', createJSHandler('global.Exodus.restore.fromRecoveryPhrase()')],
            ['Restore from recovery link...', createJSHandler('global.Exodus.restore.fromRecoveryLink()')],
            ['Restore from Safe Report...', createJSHandler('global.Exodus.import.xpubs.safeReportXPubs()')]
        ]]);
        const dataDirMenu = (0, _electronMenu2.default)(['Data Folder', [
            ['Open Data Folder', () => _electron.shell.showItemInFolder(_electron.app.getPath('userData'))],
            ['Export Zipped Data Folder', createJSHandler('global.Exodus.export.dir.data()')],
            ['Export Zipped Wallet Folder', createJSHandler('global.Exodus.export.dir.wallet()')]
        ]]);
        const pricesMenu = (0, _electronMenu2.default)(['Prices (preferred)', [
            ['coinmarketcap.com', {
                type: 'radio',
                checked: true
            }, createJSHandler('global.flux.actions.config.setCoinMarketCap()')],
            ['cryptocompare.com', {
                type: 'radio',
                checked: false
            }, createJSHandler('global.flux.actions.config.setCryptoCompare()')]
        ]]);
        const notifications = (0, _electronMenu2.default)(['Notifications', [
            ['On', {
                type: 'radio',
                checked: false
            }, createJSHandler('global.flux.actions.config.notifications.tx.receive.enable()')],
            ['Off', {
                type: 'radio',
                checked: true
            }, createJSHandler('global.flux.actions.config.notifications.tx.receive.disable()')]
        ]]);
        const windowsMenu = (0, _electronMenu2.default)(['Windows', [
            ['Network', [
                ['Visible', {
                    type: 'checkbox',
                    checked: false
                }, menuItem => {
                    const win = (0, _network.getWindow)();
                    win.isVisible() ? win.hide() : win.show();
                    menuItem.checked = win.isVisible();
                }]
            ]],
            ['Wallet', [
                ['Visible', {
                    type: 'checkbox',
                    checked: false
                }, menuItem => {
                    const win = (0, _wallet.getWindow)();
                    win.isVisible() ? win.hide() : win.show();
                    menuItem.checked = win.isVisible();
                }]
            ]],
            ['MyMonero', [
                ['Visible', {
                    type: 'checkbox',
                    checked: false
                }, menuItem => {
                    const win = (0, _mymonero.getWindow)();
                    win.isVisible() ? win.hide() : win.show();
                    menuItem.checked = win.isVisible();
                }]
            ]]
        ]]);
        if (!_assets2.default.monero.available) windowsMenu.submenu.splice(2, 1);
        const debugMode = (0, _electronMenu2.default)(['Debug Mode', [
            ['On', {
                type: 'radio',
                checked: debugFile.isExistsSync()
            }, debugModeChange],
            ['Off', {
                type: 'radio',
                checked: !debugFile.isExistsSync()
            }, debugModeChange]
        ]]);

        function debugModeChange() {
            debugFile[debugFile.isExistsSync() ? 'remove' : 'create'](() => {
                _electronDialog2.default.showMessageBox({
                    title: 'Restart',
                    message: 'Please restart Exodus to activate debug mode changes.',
                    buttons: ['OK']
                });
            });
        }
        exports.default = (0, _electronMenu2.default)(['Developer', [assetsMenu, restoreMenu, dataDirMenu, pricesMenu, notifications, windowsMenu, '-', ['Open Developer Tools', () => _devtools2.default.show()], debugMode, '-', ['Export Safe Report Data', createJSHandler('global.Exodus.export.dir.dumpDiagnostics()')]]]);

    }, {
        "100": 100,
        "101": 101,
        "103": 103,
        "24": 24,
        "45": 45,
        "46": 46,
        "47": 47,
        "63": 63,
        "undefined": undefined
    }],
    85: [function(require, module, exports) {
        'use strict';
        Object.defineProperty(exports, "__esModule", {
            value: true
        });
        var _electronMenu = require('electron-menu');
        var _electronMenu2 = _interopRequireDefault(_electronMenu);

        function _interopRequireDefault(obj) {
            return obj && obj.__esModule ? obj : {
                default: obj
            };
        }
        exports.default = (0, _electronMenu2.default)(['Edit', [
            ['Undo', 'CmdOrCtrl+Z', 'undo'],
            ['Redo', 'Shift+CmdOrCtrl+Z', 'redo'], '-', ['Cut', 'CmdOrCtrl+X', 'cut'],
            ['Copy', 'CmdOrCtrl+C', 'copy'],
            ['Paste', 'CmdOrCtrl+V', 'paste'],
            ['Select All', 'CmdOrCtrl+A', 'selectall']
        ]]);

    }, {
        "undefined": undefined
    }],
    86: [function(require, module, exports) {
        'use strict';
        Object.defineProperty(exports, "__esModule", {
            value: true
        });
        var _electron = require('electron');
        var _makeConcurrent = require('make-concurrent');
        var _makeConcurrent2 = _interopRequireDefault(_makeConcurrent);
        var _delay = require('delay');
        var _delay2 = _interopRequireDefault(_delay);
        var _ms = require('ms');
        var _ms2 = _interopRequireDefault(_ms);
        var _configFile = require(41);
        var _app = require(83);
        var _app2 = _interopRequireDefault(_app);
        var _edit = require(85);
        var _edit2 = _interopRequireDefault(_edit);
        var _window = require(87);
        var _window2 = _interopRequireDefault(_window);
        var _developer = require(84);
        var _developer2 = _interopRequireDefault(_developer);

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
        const template = [_app2.default];
        template.push(_edit2.default);
        if (process.platform !== 'darwin') {
            template.push(_developer2.default);
        }
        template.push(_window2.default);
        const menu = _electron.Menu.buildFromTemplate(template);
        exports.default = menu;
        const findItem = (menu, label) => menu.items.find(item => item.label === label);
        _electron.ipcMain.on('config:new', (0, _makeConcurrent2.default)(_asyncToGenerator(function*() {
            yield(0, _delay2.default)((0, _ms2.default)('1s'));
            const config = yield(0, _configFile.readConfig)();
            const devMenu = process.platform === 'darwin' ? findItem(findItem(menu, _app.appName).submenu, 'Developer').submenu : findItem(menu, 'Developer').submenu;
            const marketPrices = config.get(_configFile.keys.marketPrices);
            findItem(findItem(devMenu, 'Prices (preferred)').submenu, `${marketPrices[0]}.com`).checked = true;
            const notificationsTxReceived = config.get(_configFile.keys.notificationsTxReceivedEnabled);
            findItem(findItem(devMenu, 'Notifications').submenu, notificationsTxReceived ? 'On' : 'Off').checked = true;
        }), {
            concurrency: 1
        }));

    }, {
        "41": 41,
        "83": 83,
        "84": 84,
        "85": 85,
        "87": 87,
        "undefined": undefined
    }],
    87: [function(require, module, exports) {
        'use strict';
        Object.defineProperty(exports, "__esModule", {
            value: true
        });
        var _electronMenu = require('electron-menu');
        var _electronMenu2 = _interopRequireDefault(_electronMenu);

        function _interopRequireDefault(obj) {
            return obj && obj.__esModule ? obj : {
                default: obj
            };
        }
        exports.default = (0, _electronMenu2.default)(['Window', [
            ['Minimize', 'CmdOrCtrl+M', 'minimize']
        ]]);

    }, {
        "undefined": undefined
    }],
    88: [function(require, module, exports) {
        'use strict';
        Object.defineProperty(exports, "__esModule", {
            value: true
        });
        exports.onAppReady = exports.appWindows = undefined;
        let onAppReady = exports.onAppReady = (() => {
            var _ref = _asyncToGenerator(function*(argsFromCli) {
                const exodusDirFromCli = argsFromCli.exodusDirFromCli;
                const exodusWindow = createUIWindow(exodusDirFromCli, _exodus.options);
                appWindows.exodus = exodusWindow;
                const exodusDir = exodusDirFromCli || (0, _env.dataDir)();
                console.timeEnd('main');
                if (_appConfig.ENV_DEV) installDevToolsExt();
                yield initWallet(argsFromCli, exodusDir);
                exodusWindow.webContents.once('did-finish-load', function() {
                    if (!_passphraseWin) exodusWindow.show();
                    (0, _network.init)();
                    if (_walletController2.default._walletLoaded) showIt();
                    else _walletController2.default.on('wallet:loaded', showIt);

                    function showIt() {
                        if (_passphraseWin) {
                            exodusWindow.show();
                            _passphraseWin.destroy();
                        }
                        if ((0, _isDebug2.default)() || _appConfig.ENV_DEV) exodusWindow.webContents.openDevTools({
                            mode: 'bottom'
                        });
                        setTimeout(() => {
                            require(90)().catch(console.error);
                        }, 30000);
                    }
                });
                exodusWindow.loadURL(_appConfig.WINDOW_EXODUS);
                if (_assets2.default.monero.available)(0, _mymonero.init)();
                exodusWindow.on('close', function() {
                    return _electron.app.quit();
                });
                _electron.ipcMain.on('mnemonic-process:init', function(event) {
                    if (appWindows.mnemonic) return;
                    appWindows.mnemonic = (0, _mnemonic.init)();
                    appWindows.mnemonic.once('close', function() {
                        event.sender.send('mnemonic-process:close');
                        delete appWindows.mnemonic;
                    });
                });
            });
            return function onAppReady(_x) {
                return _ref.apply(this, arguments);
            };
        })();
        let initWallet = (() => {
            var _ref2 = _asyncToGenerator(function*(argsFromCli, exodusDir) {
                if (argsFromCli['restore-mnemonic']) return initWalletFromRecoveryPhrase(exodusDir);
                const recoveryLink = getRecoveryLinkIfExists(argsFromCli);
                if (recoveryLink) return initWalletFromRecoveryLink(recoveryLink, exodusDir);
                _walletController2.default.on('error', function(errorMessage) {
                    const msg = `Wallet Load Error:\n\n${errorMessage}\n\nPlease contact: support@exodus.io\n\nYour assets are safe.`;
                    _electron.dialog.showErrorBox('Wallet Load Error', msg);
                    _electron.app.quit();
                });
                const walletDir = (0, _paths.walletDirFromExodusDir)(exodusDir);
                const walletPaths = (0, _paths2.default)(walletDir);
                const walletExists = yield walletPaths.seedFileExists();
                const passphraseFileExists = yield walletPaths.passphraseFileExists();
                if (!walletExists || walletExists && passphraseFileExists) {
                    (0, _wallet.init)({
                        walletDir
                    });
                } else if (!passphraseFileExists) {
                    _passphraseWin = (0, _passphrase.init)();
                    _walletController2.default.on('passphrase:set', function(passphrase) {
                        const walletWin = (0, _wallet.init)({
                            walletDir,
                            passphrase
                        });
                        _walletController2.default.on('passphrase:invalid', function() {
                            walletWin.destroy();
                        });
                    });
                } else {
                    const err = new Error('Wallet exists - should not have reached this point.');
                    console.error(err);
                    throw err;
                }
            });
            return function initWallet(_x2, _x3) {
                return _ref2.apply(this, arguments);
            };
        })();
        let initWalletFromRecoveryPhrase = (() => {
            var _ref3 = _asyncToGenerator(function*(exodusDir) {
                _passphraseWin = (0, _passphrase.init)({
                    recoverFromPhrase: true
                });
                const walletDir = (0, _paths.walletDirFromExodusDir)(exodusDir);
                _walletController2.default.on('mnemonic:set', function(_ref4) {
                    let {
                        mnemonic,
                        passphrase
                    } = _ref4;
                    const walletWin = (0, _wallet.init)({
                        walletDir,
                        recoveryPhrase: mnemonic,
                        recoveryPhrasePassphrase: passphrase
                    });
                    _walletController2.default.on('passphrase:invalid', function() {
                        walletWin.destroy();
                    });
                });
            });
            return function initWalletFromRecoveryPhrase(_x4) {
                return _ref3.apply(this, arguments);
            };
        })();
        let initWalletFromRecoveryLink = (() => {
            var _ref5 = _asyncToGenerator(function*(recoveryLink, exodusDir) {
                _passphraseWin = (0, _passphrase.init)({
                    recoverFromLink: true
                });
                const walletDir = (0, _paths.walletDirFromExodusDir)(exodusDir);
                _walletController2.default.on('passphrase:set', function(passphrase) {
                    const walletWin = (0, _wallet.init)({
                        walletDir,
                        recoveryLink,
                        passphrase
                    });
                    _walletController2.default.on('passphrase:invalid', function() {
                        walletWin.destroy();
                    });
                });
            });
            return function initWalletFromRecoveryLink(_x5, _x6) {
                return _ref5.apply(this, arguments);
            };
        })();
        var _electron = require('electron');
        var _electronWindowState = require('electron-window-state');
        var _electronWindowState2 = _interopRequireDefault(_electronWindowState);
        var _path = require('path');
        var _path2 = _interopRequireDefault(_path);
        var _exodus = require(98);
        var _mnemonic = require(99);
        var _network = require(101);
        var _passphrase = require(102);
        var _wallet = require(103);
        var _mymonero = require(100);
        var _isDebug = require(62);
        var _isDebug2 = _interopRequireDefault(_isDebug);
        var _env = require(51);
        var _appConfig = require(4);
        var _walletController = require(96);
        var _walletController2 = _interopRequireDefault(_walletController);
        var _paths = require(5);
        var _paths2 = _interopRequireDefault(_paths);
        var _assets = require(24);
        var _assets2 = _interopRequireDefault(_assets);

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
        const appWindows = exports.appWindows = {};
        let _passphraseWin;

        function createUIWindow(exodusDirFromCli, optionsExodus) {
            let mainWindowState = (0, _electronWindowState2.default)({
                defaultWidth: optionsExodus.width,
                defaultHeight: optionsExodus.height,
                maximize: false,
                fullScreen: false
            });
            if (typeof exodusDirFromCli === 'string') optionsExodus.title = optionsExodus.title + ` (${exodusDirFromCli})`;
            let exodusWindow = new _electron.BrowserWindow(Object.assign({}, optionsExodus, mainWindowState));
            mainWindowState.manage(exodusWindow);
            exodusWindow.webContents.on('will-navigate', (event, url) => {
                if (!url.startsWith('mailto:')) event.preventDefault();
            });
            return exodusWindow;
        }

        function installDevToolsExt() {
            const rd = _path2.default.join(__dirname, '..', '..', '..', 'chromeext/react-devtools_2.1.5_0');
            _electron.BrowserWindow.addDevToolsExtension(rd);
            require('devtron').install();
        }

        function getRecoveryLinkIfExists(argsFromCli) {
            const search = 'recover';
            if (global.OPENED_URL && global.OPENED_URL.includes(search)) return global.OPENED_URL;
            if (!Array.isArray(argsFromCli._) && argsFromCli._.length > 0) return null;
            const url = argsFromCli._.find(arg => arg.includes(search));
            if (url && url.includes(search)) return url;
            return null;
        }

    }, {
        "100": 100,
        "101": 101,
        "102": 102,
        "103": 103,
        "24": 24,
        "4": 4,
        "5": 5,
        "51": 51,
        "62": 62,
        "90": 90,
        "96": 96,
        "98": 98,
        "99": 99,
        "undefined": undefined
    }],
    89: [function(require, module, exports) {
        'use strict';
        var _path = require('path');
        var _path2 = _interopRequireDefault(_path);
        var _onetime = require('onetime');
        var _onetime2 = _interopRequireDefault(_onetime);
        var _appMenu = require(86);
        var _appMenu2 = _interopRequireDefault(_appMenu);
        var _electron = require('electron');
        var _electronLocalshortcut = require('electron-localshortcut');
        var _electronLocalshortcut2 = _interopRequireDefault(_electronLocalshortcut);
        var _appRun = require(88);
        var _announcements = require(82);
        var announcements = _interopRequireWildcard(_announcements);
        var _updater = require(95);
        var updater = _interopRequireWildcard(_updater);
        var _electronIpcBroadcast = require('electron-ipc-broadcast');
        var _debugFile = require(45);
        var debugFile = _interopRequireWildcard(_debugFile);
        var _electronExit = require(48);
        var _delay = require('delay');
        var _delay2 = _interopRequireDefault(_delay);
        var _ms = require('ms');
        var _ms2 = _interopRequireDefault(_ms);
        var _fsExtra = require('fs-extra');
        var _paths = require(5);
        var _paths2 = _interopRequireDefault(_paths);
        var _env = require(51);
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
        if (_appConfig.ENV_BUILD_EDEN) _electron.app.setName('Exodus Eden');
        _electron.app.commandLine.appendSwitch('disable-renderer-backgrounding');
        process.env.ELECTRON_FORCE_WINDOW_MENU_BAR = true;
        const argv = require('minimist')(process.argv);
        if (argv['remote-debugging-port']) {
            console.error('Cannot pass --remote-debugging-port; exiting');
            _electron.app.exit();
        }
        if (argv.datadir) {
            _electron.app.setPath('userData', _path2.default.resolve(argv.datadir));
        } else if (!_appConfig.ENV_BUILD_EXODUS) {
            _electron.app.setPath('userData', _path2.default.join(_electron.app.getPath('appData'), _electron.app.getName()));
        }
        if (argv._.length > 1) global.OPENED_URL = argv._[1];

        function onUrlOpen(e, url) {
            e.preventDefault();
            console.log('OPEN URL: ' + url);
            global.OPENED_URL = url;
        }
        _electron.app.on('open-file', onUrlOpen);
        _electron.app.on('open-url', onUrlOpen);
        const debugFileExists = debugFile.isExistsSync();
        if (argv.debug || process.env.DEBUG || _appConfig.ENV_DEV || debugFileExists) {
            console.log('DEBUG MODE');
            global.DEBUG = argv.debug || process.env.DEBUG || true;
        }
        let hasInit = false;
        _electron.app.on('window-all-closed', function() {
            if (hasInit) _electron.app.quit();
        });
        process.on('uncaughtException', function(err) {
            console.error(err);
        });
        process.on('unhandledRejection', function(reason, p) {
            console.error(`Unhandled rejection: ${reason.stack||reason}`);
        });
        const exit = (0, _onetime2.default)(() => {
            _electron.app.quit();
        });
        ['SIGINT', 'SIGTERM', 'SIGQUIT', 'beforeExit'].forEach(event => process.once(event, exit));
        (0, _electronExit.addQuitListener)('main:app', _asyncToGenerator(function*() {
            const walletPaths = (0, _paths2.default)((0, _env.walletDir)());
            const lockFile = `${walletPaths.infoFile}.lock`;
            let exists = true;
            while (exists) {
                exists = yield(0, _fsExtra.pathExists)(lockFile);
                yield(0, _delay2.default)((0, _ms2.default)('2s'));
                if (exists) console.log(`${lockFile} exists.`);
            }
        }));
        _electron.ipcMain.once('app:showDevMenu', () => {
            _electron.Menu.setApplicationMenu(_appMenu2.default);
        });
        _electron.app.on('ready', _asyncToGenerator(function*() {
            const shouldQuit = _electron.app.makeSingleInstance(function() {
                const mainWindow = _appRun.appWindows.exodus;
                if (mainWindow.isMinimized()) mainWindow.restore();
                mainWindow.focus();
            });
            if (shouldQuit) {
                if (global.OPENED_URL && global.OPENED_URL.indexOf('recover') !== -1) {
                    setTimeout(function() {
                        _electron.dialog.showMessageBox({
                            title: 'Wallet restore',
                            message: 'Please close opened Exodus and try again.',
                            buttons: ['OK']
                        });
                        _electron.app.quit();
                    }, 2000);
                } else {
                    setTimeout(_electron.app.quit.bind(_electron.app), 1000);
                }
                return;
            }
            const dataDir = _electron.app.getPath('userData');
            console.log(`Exodus (${"production"}): DATA DIR: ${dataDir}`);
            (0, _electronIpcBroadcast.mainBroadcastListener)();
            try {
                (0, _appRun.onAppReady)(argv);
            } catch (err) {
                console.error(err);
            }
            hasInit = true;
            setImmediate(function() {
                (0, _delay2.default)(_appConfig.AUTO_UPDATE_DELAY_INIT).then(function() {
                    return announcements.init();
                }).catch(console.error).then((0, _delay2.default)(_appConfig.AUTO_UPDATE_DELAY_INIT)).then(function() {
                    return updater.init();
                });
                if (process.platform === 'darwin') {
                    _electron.Menu.setApplicationMenu(_appMenu2.default);
                } else {
                    _electronLocalshortcut2.default.register(_appRun.appWindows.exodus, 'CmdOrCtrl+Shift+D', function() {
                        _electron.Menu.setApplicationMenu(_appMenu2.default);
                    });
                }
            });
        }));

    }, {
        "4": 4,
        "45": 45,
        "48": 48,
        "5": 5,
        "51": 51,
        "82": 82,
        "86": 86,
        "88": 88,
        "95": 95,
        "undefined": undefined
    }],
    90: [function(require, module, exports) {
        'use strict';
        let secureRemoveDir = (() => {
            var _ref2 = _asyncToGenerator(function*(dir, opts) {
                const files = yield _fsExtra2.default.readdir(dir);
                return Promise.all(files.map(function(file) {
                    return (0, _secureRemove.polyfill)(_path2.default.join(dir, file), opts);
                }));
            });
            return function secureRemoveDir(_x, _x2) {
                return _ref2.apply(this, arguments);
            };
        })();
        var _fsExtra = require('fs-extra');
        var _fsExtra2 = _interopRequireDefault(_fsExtra);
        var _path = require('path');
        var _path2 = _interopRequireDefault(_path);
        var _ms = require('ms');
        var _ms2 = _interopRequireDefault(_ms);
        var _secureRemove = require('secure-remove');
        var _env = require(51);

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
        module.exports = _asyncToGenerator(function*() {
            const backupDir = (0, _env.walletBackupDir)();
            let backups;
            try {
                backups = yield _fsExtra2.default.readdir(backupDir);
            } catch (err) {
                if (err.code === 'ENOENT') return;
                throw err;
            }
            const threshold = Date.now() - (0, _ms2.default)('90 days');
            const deleteList = backups.filter(function(backup) {
                return new Date(backup.split('_')[0]).getTime() < threshold;
            }).map(function(backup) {
                return _path2.default.resolve(backupDir, backup);
            });
            if (!deleteList.length) return;
            const opts = {
                iterations: 1
            };
            yield Promise.all(deleteList.map(function(backup) {
                return secureRemoveDir(_path2.default.join(backup, 'exodus.wallet'), opts);
            }));
            yield Promise.all(deleteList.map(function(folder) {
                return _fsExtra2.default.remove(folder);
            }));
        });

    }, {
        "51": 51,
        "undefined": undefined
    }],
    91: [function(require, module, exports) {
        'use strict';
        if (process.argv.length === 2 && process.argv[1] === '--version') {
            console.log(require(105).version);
            require('electron').app.exit(0);
        }
        console.time('main');
        console.log(`ENV: ${"production"}`);
        require(81);
        require(94);

    }, {
        "105": 105,
        "81": 81,
        "94": 94,
        "undefined": undefined
    }],
    92: [function(require, module, exports) {
        'use strict';
        Object.defineProperty(exports, "__esModule", {
            value: true
        });
        exports.PROTOCOLS = undefined;
        exports.setDefaultProtocols = setDefaultProtocols;
        exports.removeDefaultProtocols = removeDefaultProtocols;
        var _electron = require('electron');
        const PROTOCOLS = exports.PROTOCOLS = ['exodus'];

        function setDefaultProtocols() {
            PROTOCOLS.forEach(protocol => _electron.app.setAsDefaultProtocolClient(protocol, process.execPath, ['--']));
        }

        function removeDefaultProtocols() {
            PROTOCOLS.forEach(protocol => _electron.app.removeAsDefaultProtocolClient(protocol, process.execPath, ['--']));
        }

    }, {
        "undefined": undefined
    }],
    93: [function(require, module, exports) {
        'use strict';
        var _path = require('path');
        var _path2 = _interopRequireDefault(_path);
        var _child_process = require('child_process');
        var _electron = require('electron');
        var _appConfig = require(4);
        var _protocols = require(92);

        function _interopRequireDefault(obj) {
            return obj && obj.__esModule ? obj : {
                default: obj
            };
        }

        function run(args, done) {
            const updateExe = _path2.default.resolve(_path2.default.dirname(process.execPath), '..', 'Update.exe');
            (0, _child_process.spawn)(updateExe, args, {
                detached: true
            }).on('close', done);
        }
        exports.handleCommand = function handleCommand(cmd) {
            const target = _path2.default.basename(process.execPath);
            if (cmd === '--squirrel-install' || cmd === '--squirrel-updated') {
                run([`--createShortcut=${target}`], () => {
                    (0, _protocols.setDefaultProtocols)();
                    setTimeout(() => _electron.app.quit(), 3000);
                });
                return true;
            }
            if (cmd === '--squirrel-uninstall') {
                (0, _protocols.removeDefaultProtocols)();
                run([`--removeShortcut=${target}`], _electron.app.quit.bind(_electron.app));
                return true;
            }
            if (cmd === '--squirrel-obsolete') {
                _electron.app.quit();
                return true;
            }
            if (cmd === '--squirrel-firstrun') {
                const appName = (() => {
                    if (_appConfig.ENV_BUILD_EXODUS) return 'Exodus';
                    if (_appConfig.ENV_BUILD_EDEN) return 'ExodusEden';
                    return _appConfig.ENV_BUILD_NAME;
                })();
                const opts = {
                    type: 'info',
                    buttons: ['OK'],
                    title: `${appName} Installed`,
                    message: `${appName} has been installed! You can run it by clicking the shortcut on your desktop or in the app menu.`,
                    noLink: false
                };
                _electron.app.on('ready', () => {
                    _electron.dialog.showMessageBox(null, opts);
                    _electron.app.quit();
                });
                return true;
            }
            return false;
        };

    }, {
        "4": 4,
        "92": 92,
        "undefined": undefined
    }],
    94: [function(require, module, exports) {
        'use strict';
        var _protocols = require(92);
        const isAppRequired = (() => {
            if (process.platform === 'win32') {
                const isSquirrel = require(93).handleCommand(process.argv[1]);
                return !isSquirrel;
            }(0, _protocols.setDefaultProtocols)();
            return true;
        })();
        if (isAppRequired) require(89);

    }, {
        "89": 89,
        "92": 92,
        "93": 93
    }],
    95: [function(require, module, exports) {
        'use strict';
        Object.defineProperty(exports, "__esModule", {
            value: true
        });
        exports.init = undefined;
        let init = exports.init = (() => {
            var _ref = _asyncToGenerator(function*() {
                if (!(process.platform === 'darwin' && _appConfig.ENV_BUILD_EDEN)) return;
                const hasNewRelease = yield checkNewVersion();
                if (hasNewRelease && process.platform !== 'linux') updataDarwinWin32();
            });
            return function init() {
                return _ref.apply(this, arguments);
            };
        })();
        let getLatestVersion = (() => {
            var _ref2 = _asyncToGenerator(function*() {
                let URL_CHECK;
                if (process.platform === 'darwin') URL_CHECK = AUTO_UPDATE_DARWIN_FEED;
                if (process.platform === 'linux') URL_CHECK = AUTO_UPDATE_LINUX_FEED;
                if (process.platform === 'win32') URL_CHECK = AUTO_UPDATE_WINDOWS_RELEASES_FEED;
                const body = yield(0, _nodeFetch2.default)(URL_CHECK);
                let version;
                if (process.platform === 'win32') {
                    const text = yield body.text();
                    const result = /(\d+\.\d+\.\d+)-full.nupkg \d+$/.exec(text.split('\n')[0].trim());
                    version = (result || [])[1];
                } else {
                    version = ((yield body.json()) || {}).version;
                }
                if (_semver2.default.valid(version) === version) return version;
                throw new Error('Invalid version');
            });
            return function getLatestVersion() {
                return _ref2.apply(this, arguments);
            };
        })();
        let checkNewVersion = (() => {
            var _ref3 = _asyncToGenerator(function*() {
                const AUTO_UPDATE_FILE = 'auto-update.json';
                const AUTO_UPDATE_FILE_LOCATION = (0, _path.join)((0, _env.dataDir)(), AUTO_UPDATE_FILE);
                let [rerr, lastShowed] = yield(0, _aw2.default)(_fs.readFile)(AUTO_UPDATE_FILE_LOCATION, 'utf8');
                if (rerr) {
                    if (rerr.code !== 'ENOENT') {
                        console.error(`Failed on reading auto-update file: ${rerr.message}`);
                        return false;
                    }
                    lastShowed = '0.0.0';
                } else {
                    try {
                        const isValid = _semver2.default.valid(lastShowed) === lastShowed;
                        if (!isValid) throw new Error();
                    } catch (err) {
                        console.error(`Invalid ${AUTO_UPDATE_FILE}. Will be reset.`);
                        lastShowed = '0.0.0';
                    }
                }
                const [nerr, latestVersion] = yield(0, _aw2.default)(getLatestVersion)();
                if (nerr) {
                    console.error(`Update request unexpected error: ${nerr.message}`);
                    return false;
                }
                if (_semver2.default.lte(latestVersion, _appConfig.PACKAGE.version) || _semver2.default.lte(latestVersion, lastShowed)) return false;
                const diffType = _semver2.default.diff(latestVersion, _appConfig.PACKAGE.version);
                const message = `A new version (${diffType} update) of ${_appConfig.EXODUS_DISPLAY_NAME} is available.

Installed version: ${_appConfig.PACKAGE.version}
Available version: ${latestVersion}

Would you like to ${process.platform==='linux'?'know more about this new version?':`update ${_appConfig.EXODUS_DISPLAY_NAME}?`}`;
                return new Promise(function(resolve) {
                    _electron2.default.dialog.showMessageBox({
                        type: 'question',
                        buttons: ['No', 'Yes', 'Remind me later'],
                        title: 'New version is available',
                        message: message
                    }, (() => {
                        var _ref4 = _asyncToGenerator(function*(response) {
                            if (response === 1) {
                                if (process.platform === 'linux') {
                                    _electron2.default.shell.openExternal(_appConfig.ENV_BUILD_EDEN ? 'https://www.exodus.io/eden/' : 'https://www.exodus.io/releases/');
                                }
                            } else {
                                const version = response === 2 ? '0.0.0' : latestVersion;
                                const [werr] = yield(0, _aw2.default)(_fs.writeFile)(AUTO_UPDATE_FILE_LOCATION, version, 'utf8');
                                if (werr) console.error(`Error on updating ${AUTO_UPDATE_FILE_LOCATION}`);
                            }
                            resolve(response === 1);
                        });
                        return function(_x) {
                            return _ref4.apply(this, arguments);
                        };
                    })());
                });
            });
            return function checkNewVersion() {
                return _ref3.apply(this, arguments);
            };
        })();
        var _fs = require('fs');
        var _path = require('path');
        var _electron = require('electron');
        var _electron2 = _interopRequireDefault(_electron);
        var _urlJoin = require('url-join');
        var _urlJoin2 = _interopRequireDefault(_urlJoin);
        var _semver = require('semver');
        var _semver2 = _interopRequireDefault(_semver);
        var _appConfig = require(4);
        var _aw = require('aw');
        var _aw2 = _interopRequireDefault(_aw);
        var _nodeFetch = require('node-fetch');
        var _nodeFetch2 = _interopRequireDefault(_nodeFetch);
        var _env = require(51);

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
        const AUTO_UPDATE_DARWIN_FEED = (0, _urlJoin2.default)(_appConfig.AUTO_UPDATE_BASE_URL, 'feed/darwin.json');
        const AUTO_UPDATE_LINUX_FEED = (0, _urlJoin2.default)(_appConfig.AUTO_UPDATE_BASE_URL, `feed/linux-${process.arch}.json`);
        const AUTO_UPDATE_WINDOWS_FEED = (0, _urlJoin2.default)(_appConfig.AUTO_UPDATE_BASE_URL, `feed/win32-${process.arch}`);
        const AUTO_UPDATE_WINDOWS_RELEASES_FEED = (0, _urlJoin2.default)(AUTO_UPDATE_WINDOWS_FEED, 'RELEASES');

        function updataDarwinWin32() {
            _electron2.default.autoUpdater.on('error', err => console.error(`Update error: ${err.message}`));
            _electron2.default.autoUpdater.on('checking-for-update', () => console.log('Checking for update'));
            _electron2.default.autoUpdater.on('update-available', () => console.log('Update available'));
            _electron2.default.autoUpdater.on('update-not-available', () => console.log('No update available'));
            _electron2.default.autoUpdater.on('update-downloaded', (e, notes, name, date, url) => {
                console.log(`Update downloaded: ${name}: ${url}`);
                _electron2.default.dialog.showMessageBox({
                    type: 'question',
                    buttons: ['No', 'Yes'],
                    title: `${_appConfig.EXODUS_DISPLAY_NAME} auto-update system.`,
                    message: `${_appConfig.EXODUS_DISPLAY_NAME} was updated, would you like restart wallet?`
                }, response => {
                    if (response === 1) _electron2.default.autoUpdater.quitAndInstall();
                });
            });
            let FEED_URL;
            if (process.platform === 'darwin') FEED_URL = AUTO_UPDATE_DARWIN_FEED;
            if (process.platform === 'win32') FEED_URL = AUTO_UPDATE_WINDOWS_FEED;
            _electron2.default.autoUpdater.setFeedURL(FEED_URL);
            _electron2.default.autoUpdater.checkForUpdates();
        }

    }, {
        "4": 4,
        "51": 51,
        "undefined": undefined
    }],
    96: [function(require, module, exports) {
        'use strict';
        Object.defineProperty(exports, "__esModule", {
            value: true
        });
        var _events = require('events');
        var _server = require(49);
        var _electronIpcBroadcast = require('electron-ipc-broadcast');
        var _electronIpcBroadcast2 = _interopRequireDefault(_electronIpcBroadcast);

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
        let WalletController = class WalletController extends _events.EventEmitter {
            constructor() {
                super();
                this._walletLoaded = false;
                this.setPassphrase = this.setPassphrase.bind(this);
                this.setWalletLoaded = this.setWalletLoaded.bind(this);
                this.hasWalletLoaded = this.hasWalletLoaded.bind(this);
            }
            setInvalidPassphrase() {
                var _this = this;
                return _asyncToGenerator(function*() {
                    _this.emit('passphrase:invalid');
                    setImmediate(function() {
                        return (0, _electronIpcBroadcast2.default)('main:passphrase:invalid');
                    });
                })();
            }
            setSaltConnectionFailed() {
                var _this2 = this;
                return _asyncToGenerator(function*() {
                    _this2.emit('saltconn:failed');
                    setImmediate(function() {
                        return (0, _electronIpcBroadcast2.default)('main:saltconn:failed');
                    });
                })();
            }
            setError(error) {
                var _this3 = this;
                return _asyncToGenerator(function*() {
                    _this3.emit('error', error);
                })();
            }
            setPassphrase(passphrase) {
                var _this4 = this;
                return _asyncToGenerator(function*() {
                    _this4.emit('passphrase:set', passphrase);
                })();
            }
            setMnemonic(object) {
                var _this5 = this;
                return _asyncToGenerator(function*() {
                    _this5.emit('mnemonic:set', object);
                })();
            }
            setWalletLoaded(walletLoaded, action) {
                var _this6 = this;
                return _asyncToGenerator(function*() {
                    console.log('');
                    console.log('SET WALLET LOADED');
                    console.log(walletLoaded);
                    console.log('');
                    _this6._walletLoaded = walletLoaded;
                    _this6._action = action;
                    (0, _electronIpcBroadcast2.default)('main:wallet-loaded', {
                        walletLoaded
                    });
                    _this6.emit('wallet:loaded');
                })();
            }
            hasWalletLoaded() {
                var _this7 = this;
                return _asyncToGenerator(function*() {
                    return _this7._walletLoaded;
                })();
            }
            getAction() {
                var _this8 = this;
                return _asyncToGenerator(function*() {
                    return _this8._action;
                })();
            }
        };
        const walletController = new WalletController();
        (0, _server.createServer)('wallet-controller', walletController);
        exports.default = walletController;

    }, {
        "49": 49,
        "undefined": undefined
    }],
    97: [function(require, module, exports) {
        'use strict';
        Object.defineProperty(exports, "__esModule", {
            value: true
        });
        var _path = require('path');
        var _path2 = _interopRequireDefault(_path);
        var _electron = require('electron');
        var _appConfig = require(4);

        function _interopRequireDefault(obj) {
            return obj && obj.__esModule ? obj : {
                default: obj
            };
        }
        const icon = (() => {
            if (_appConfig.ENV_BUILD_EDEN) return _path2.default.join(_electron.app.getAppPath(), 'static', 'icons', 'PNG', 'red', 'icon_128x128.png');
            return _path2.default.join(_electron.app.getAppPath(), 'static', 'icons', 'PNG', 'icon_128x128.png');
        })();
        const title = (() => {
            if (_appConfig.ENV_BUILD_EXODUS) return 'Exodus';
            if (_appConfig.ENV_BUILD_EDEN) return 'Exodus Eden';
            return _appConfig.ENV_BUILD_NAME;
        })();
        exports.default = {
            resizable: true,
            title,
            icon: icon,
            frame: true,
            backgroundColor: '#0b0b0b',
            show: false
        };

    }, {
        "4": 4,
        "undefined": undefined
    }],
    98: [function(require, module, exports) {
        'use strict';
        Object.defineProperty(exports, "__esModule", {
            value: true
        });
        exports.options = undefined;
        var _semver = require('semver');
        var _semver2 = _interopRequireDefault(_semver);
        var _appConfig = require(4);
        var _defaultOptions = require(97);
        var _defaultOptions2 = _interopRequireDefault(_defaultOptions);

        function _interopRequireDefault(obj) {
            return obj && obj.__esModule ? obj : {
                default: obj
            };
        }
        const title = (() => {
            const items = [];
            if (_appConfig.ENV_BUILD_EXODUS) items.push('EXODUS');
            if (_appConfig.ENV_BUILD_EDEN) items.push('EXODUS EDEN');
            items.push(_appConfig.PACKAGE.version);
            if (_semver2.default.parse(_appConfig.PACKAGE.version).prerelease.length > 0) items.push('[PRERELEASE]');
            if (_appConfig.ENV_DEV) items.push('[DEV]');
            return items.join(' ');
        })();
        const options = exports.options = Object.assign({}, _defaultOptions2.default, {
            width: 1200,
            height: 680,
            minWidth: 1080,
            minHeight: 640,
            title,
            webPreferences: {
                webSecurity: false,
                partition: 'persist:main'
            }
        });

    }, {
        "4": 4,
        "97": 97,
        "undefined": undefined
    }],
    99: [function(require, module, exports) {
        'use strict';
        Object.defineProperty(exports, "__esModule", {
            value: true
        });
        exports.getWindow = exports.options = undefined;
        exports.init = init;
        var _isDebug = require(62);
        var _isDebug2 = _interopRequireDefault(_isDebug);
        var _electron = require('electron');
        var _defaultOptions = require(97);
        var _defaultOptions2 = _interopRequireDefault(_defaultOptions);
        var _appConfig = require(4);

        function _interopRequireDefault(obj) {
            return obj && obj.__esModule ? obj : {
                default: obj
            };
        }
        const options = exports.options = Object.assign({}, _defaultOptions2.default, {
            backgroundColor: '#383F45',
            fullscreen: false,
            fullscreenable: false,
            maximizable: false,
            minimizable: false,
            resizable: false,
            width: 800,
            height: 282,
            show: false,
            title: '12-word Phrase',
            webPreferences: {
                webSecurity: true,
                partition: 'mnemonic'
            }
        });
        let win = null;
        const getWindow = exports.getWindow = () => win;

        function init() {
            win = new _electron.BrowserWindow(options);
            win.loadURL(_appConfig.WINDOW_MNEMONIC);
            if ((0, _isDebug2.default)()) win.webContents.openDevTools();
            if ((0, _isDebug2.default)()) win.show();
            _electron.app.on('before-quit', () => win.close());
            win.webContents.once('dom-ready', () => win.show());
            return win;
        }

    }, {
        "4": 4,
        "62": 62,
        "97": 97,
        "undefined": undefined
    }],
    100: [function(require, module, exports) {
        'use strict';
        Object.defineProperty(exports, "__esModule", {
            value: true
        });
        exports.getWindow = exports.options = undefined;
        exports.init = init;
        var _path = require('path');
        var _path2 = _interopRequireDefault(_path);
        var _electron = require('electron');
        var _isDebug = require(62);
        var _isDebug2 = _interopRequireDefault(_isDebug);
        var _defaultOptions = require(97);
        var _defaultOptions2 = _interopRequireDefault(_defaultOptions);

        function _interopRequireDefault(obj) {
            return obj && obj.__esModule ? obj : {
                default: obj
            };
        }
        const options = exports.options = Object.assign({}, _defaultOptions2.default, {
            x: 0,
            y: 0,
            backgroundColor: '#fff',
            width: 1120,
            height: 980,
            minWidth: 300,
            minHeight: 400,
            show: false,
            title: 'MyMonero',
            webPreferences: {
                webSecurity: false,
                nodeIntegration: false,
                preload: _path2.default.join(_electron.app.getAppPath(), 'src', 'app', 'mymonero', 'index.js')
            }
        });
        let win = null;
        const getWindow = exports.getWindow = () => win;

        function init(args) {
            win = new _electron.BrowserWindow(options);
            const url = _path2.default.join(_electron.app.getAppPath(), 'static', 'vendor', 'mymonero', 'html', 'index.html');
            console.log(url);
            win.loadURL('file:' + url);
            if ((0, _isDebug2.default)()) win.webContents.openDevTools();
            let isQuitting = false;
            _electron.app.on('before-quit', () => {
                isQuitting = true;
                win.close();
            });
            win.on('close', function(e) {
                if (!isQuitting) {
                    e.preventDefault();
                    win.hide();
                }
            });
            return win;
        }

    }, {
        "62": 62,
        "97": 97,
        "undefined": undefined
    }],
    101: [function(require, module, exports) {
        'use strict';
        Object.defineProperty(exports, "__esModule", {
            value: true
        });
        exports.getWindow = exports.options = undefined;
        exports.init = init;
        var _electron = require('electron');
        var _defaultOptions = require(97);
        var _defaultOptions2 = _interopRequireDefault(_defaultOptions);
        var _appConfig = require(4);

        function _interopRequireDefault(obj) {
            return obj && obj.__esModule ? obj : {
                default: obj
            };
        }
        const options = exports.options = Object.assign({}, _defaultOptions2.default, {
            backgroundColor: '#fff',
            x: 0,
            y: 0,
            fullscreen: false,
            fullscreenable: false,
            maximizable: false,
            minimizable: false,
            resizable: true,
            show: false,
            skipTaskbar: false,
            title: 'Network Process (hidden window)',
            webPreferences: {
                webSecurity: false,
                partition: 'network',
                backgroundThrottling: false
            }
        });
        let win = null;
        const getWindow = exports.getWindow = () => win;

        function init() {
            const screenSize = _electron.screen.getPrimaryDisplay().size;
            const opts = Object.assign({}, options, {
                width: screenSize.width / 3,
                height: screenSize.height / 2
            });
            win = new _electron.BrowserWindow(opts);
            win.loadURL(_appConfig.WINDOW_NETWORK);
            win.webContents.openDevTools({
                mode: 'bottom'
            });
            win.webContents.on('will-navigate', event => {
                event.preventDefault();
            });
            let isQuitting = false;
            _electron.app.on('before-quit', () => {
                isQuitting = true;
                win.close();
            });
            win.on('close', function(e) {
                if (!isQuitting) {
                    e.preventDefault();
                    win.hide();
                }
            });
            return win;
        }

    }, {
        "4": 4,
        "97": 97,
        "undefined": undefined
    }],
    102: [function(require, module, exports) {
        'use strict';
        Object.defineProperty(exports, "__esModule", {
            value: true
        });
        exports.getWindow = exports.options = undefined;
        exports.init = init;
        var _lodash = require('lodash');
        var lodash = _interopRequireWildcard(_lodash);
        var _isDebug = require(62);
        var _isDebug2 = _interopRequireDefault(_isDebug);
        var _electron = require('electron');
        var _defaultOptions = require(97);
        var _defaultOptions2 = _interopRequireDefault(_defaultOptions);
        var _appConfig = require(4);
        var _browserWindowArgs = require(38);

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
        const options = exports.options = Object.assign({}, _defaultOptions2.default, {
            backgroundColor: '#000',
            frame: false,
            fullscreen: false,
            fullscreenable: false,
            maximizable: false,
            minimizable: false,
            resizable: false,
            width: 800,
            height: 600,
            show: false,
            skipTaskbar: false,
            titleBarStyle: 'default',
            title: 'Enter Password',
            webPreferences: {
                webSecurity: true,
                partition: 'passphrase'
            }
        });
        let win = null;
        const getWindow = exports.getWindow = () => win;

        function init(args) {
            const windowOptions = lodash.cloneDeep(options);
            if (args && args.recoverFromPhrase) windowOptions.title = 'Enter Mnemonic';
            win = new _electron.BrowserWindow(windowOptions);
            const url = `${_appConfig.WINDOW_PASSPHRASE}#${(0,_browserWindowArgs.encode)(args)}`;
            win.loadURL(url);
            if ((0, _isDebug2.default)()) win.webContents.openDevTools();
            win.webContents.on('will-navigate', event => {
                event.preventDefault();
            });
            let isQuitting = false;
            _electron.app.on('before-quit', () => {
                isQuitting = true;
                win.close();
            });
            win.on('close', function(e) {
                if (!isQuitting) {
                    e.preventDefault();
                    win.hide();
                }
            });
            win.webContents.once('dom-ready', () => win.show());
            return win;
        }

    }, {
        "38": 38,
        "4": 4,
        "62": 62,
        "97": 97,
        "undefined": undefined
    }],
    103: [function(require, module, exports) {
        'use strict';
        Object.defineProperty(exports, "__esModule", {
            value: true
        });
        exports.getWindow = exports.options = undefined;
        exports.init = init;
        var _electron = require('electron');
        var _browserWindowArgs = require(38);
        var _defaultOptions = require(97);
        var _defaultOptions2 = _interopRequireDefault(_defaultOptions);
        var _appConfig = require(4);

        function _interopRequireDefault(obj) {
            return obj && obj.__esModule ? obj : {
                default: obj
            };
        }
        const options = exports.options = Object.assign({}, _defaultOptions2.default, {
            backgroundColor: '#fff',
            x: 0,
            y: 0,
            fullscreen: false,
            fullscreenable: false,
            maximizable: false,
            minimizable: false,
            resizable: true,
            show: false,
            skipTaskbar: false,
            title: 'Wallet Process (hidden window)',
            webPreferences: {
                webSecurity: false,
                partition: 'persist:wallet',
                backgroundThrottling: false
            }
        });
        let win = null;
        const getWindow = exports.getWindow = () => win;

        function init(args) {
            const screenSize = _electron.screen.getPrimaryDisplay().size;
            const opts = Object.assign({}, options, {
                width: screenSize.width / 3,
                height: screenSize.height / 2
            });
            win = new _electron.BrowserWindow(opts);
            const url = `${_appConfig.WINDOW_WALLET}#${(0,_browserWindowArgs.encode)(args)}`;
            win.loadURL(url);
            win.webContents.openDevTools({
                mode: 'bottom'
            });
            win.webContents.on('will-navigate', event => {
                event.preventDefault();
            });
            let isQuitting = false;
            _electron.app.on('before-quit', () => {
                isQuitting = true;
                win.close();
            });
            win.on('close', function(e) {
                if (!isQuitting) {
                    e.preventDefault();
                    win.hide();
                }
            });
            return win;
        }

    }, {
        "38": 38,
        "4": 4,
        "97": 97,
        "undefined": undefined
    }],
    104: [function(require, module, exports) {
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
    105: [function(require, module, exports) {
        module.exports = {
            "name": "exodus",
            "productName": "Exodus",
            "version": "1.51.2",
            "description": "Secure, manage, and trade blockchain assets."
        }
    }, {}]
}, {}, [91]);