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
        "use strict";

        function includes(item) {
            return this.indexOf(item) >= 0;
        }
        module.exports = {
            includes
        };

    }, {}],
    2: [function(require, module, exports) {
        'use strict';
        var array = require(1);
        var object = require(3);
        var string = require(4);
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
        "1": 1,
        "3": 3,
        "4": 4
    }],
    3: [function(require, module, exports) {
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
    4: [function(require, module, exports) {
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
    5: [function(require, module, exports) {
        'use strict';
        var _config = require(88);
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
        "88": 88
    }],
    6: [function(require, module, exports) {
        'use strict';
        Object.defineProperty(exports, "__esModule", {
            value: true
        });
        exports.WALLET_DIR = exports.walletDirFromExodusDir = undefined;
        var _paths = require(98);
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
        "98": 98
    }],
    7: [function(require, module, exports) {
        'use strict';
        Object.defineProperty(exports, "__esModule", {
            value: true
        });
        exports.twoOfTwo = exports.blockExplorer = exports.keys = exports.bip44 = exports.address = exports.feePerKB = exports.feeEvents = exports.units = exports.shapeShiftUnit = exports.displayUnit = exports.currency = exports.isOmniProperty = exports.isEthereumToken = exports.isAccountBased = exports.hasUTXO = exports.hasMultipleAddresses = exports.defaultEnabled = exports.available = exports.properName = exports.name = undefined;
        exports.setFeePerKB = setFeePerKB;
        var _coininfo = require('coininfo');
        var _coininfo2 = _interopRequireDefault(_coininfo);
        var _bs58check = require('bs58check');
        var _bs58check2 = _interopRequireDefault(_bs58check);
        var _wif = require('wif');
        var _wif2 = _interopRequireDefault(_wif);
        var _crypto = require('crypto');
        var _crypto2 = _interopRequireDefault(_crypto);
        var _currencyUnits = require(45);
        var _aureus = require(25);
        var _bip44Constants = require(34);
        var _bip44Constants2 = _interopRequireDefault(_bip44Constants);
        var _events = require('events');
        var _twoOfTwoMultisig = require(83);

        function _interopRequireDefault(obj) {
            return obj && obj.__esModule ? obj : {
                default: obj
            };
        }
        const name = exports.name = 'bcash';
        const properName = exports.properName = 'Bitcoin Cash';
        const available = exports.available = true;
        const defaultEnabled = exports.defaultEnabled = false;
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
        const shapeShiftUnit = exports.shapeShiftUnit = 'bch';
        const units = exports.units = ['BCH'];
        const feeEvents = exports.feeEvents = new _events.EventEmitter();

        function setFeePerKB(newFeerPerKB) {
            exports.feePerKB = feePerKB = currency.satoshis(newFeerPerKB);
            feeEvents.emit('new');
        }
        let feePerKB = exports.feePerKB = undefined;
        setFeePerKB(5000);
        const address = exports.address = {
            versions: {
                p2pkh: (0, _coininfo2.default)('bitcoin').versions.public,
                p2sh: (0, _coininfo2.default)('bitcoin').versions.scripthash
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
        const bip44 = exports.bip44 = _bip44Constants2.default['bitcoin-cash'];
        const keys = exports.keys = {
            encodePrivate(privateKey) {
                const versions = (0, _coininfo2.default)('bitcoin').versions;
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
            addressUrl: address => `https://blockdozer.com/insight/address/${address}`,
            txUrl: txId => `https://blockdozer.com/insight/tx/${txId}`
        };
        const twoOfTwo = exports.twoOfTwo = (0, _twoOfTwoMultisig.alice)({
            network: (0, _coininfo2.default)('bitcoin')
        });

    }, {
        "25": 25,
        "34": 34,
        "45": 45,
        "83": 83,
        "undefined": undefined
    }],
    8: [function(require, module, exports) {
        'use strict';
        Object.defineProperty(exports, "__esModule", {
            value: true
        });
        exports.blockExplorer = exports.keys = exports.bip44 = exports.address = exports.feePerKB = exports.feeEvents = exports.units = exports.displayUnit = exports.currency = exports.isOmniProperty = exports.isEthereumToken = exports.isAccountBased = exports.hasUTXO = exports.hasMultipleAddresses = exports.defaultEnabled = exports.available = exports.properName = exports.name = undefined;
        exports.setFeePerKB = setFeePerKB;
        var _coininfo = require('coininfo');
        var _coininfo2 = _interopRequireDefault(_coininfo);
        var _bs58check = require('bs58check');
        var _bs58check2 = _interopRequireDefault(_bs58check);
        var _wif = require('wif');
        var _wif2 = _interopRequireDefault(_wif);
        var _crypto = require('crypto');
        var _crypto2 = _interopRequireDefault(_crypto);
        var _currencyUnits = require(45);
        var _aureus = require(25);
        var _bip44Constants = require(34);
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
        const units = exports.units = ['BCH'];
        const feeEvents = exports.feeEvents = new _events.EventEmitter();

        function setFeePerKB(newFeerPerKB) {
            exports.feePerKB = feePerKB = currency.satoshis(newFeerPerKB);
            feeEvents.emit('new');
        }
        let feePerKB = exports.feePerKB = undefined;
        setFeePerKB(5000);
        const address = exports.address = {
            versions: {
                p2pkh: (0, _coininfo2.default)('bitcoin').versions.public,
                p2sh: (0, _coininfo2.default)('bitcoin').versions.scripthash
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
        const bip44 = exports.bip44 = _bip44Constants2.default['bitcoin'];
        const keys = exports.keys = {
            encodePrivate(privateKey) {
                const versions = (0, _coininfo2.default)('bitcoin').versions;
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
            addressUrl: address => `https://blockdozer.com/insight/address/${address}`,
            txUrl: txId => `https://blockdozer.com/insight/tx/${txId}`
        };

    }, {
        "25": 25,
        "34": 34,
        "45": 45,
        "undefined": undefined
    }],
    9: [function(require, module, exports) {
        'use strict';
        Object.defineProperty(exports, "__esModule", {
            value: true
        });
        exports.twoOfTwo = exports.blockExplorer = exports.keys = exports.bip44 = exports.address = exports.feePerKB = exports.feeEvents = exports.units = exports.shapeShiftUnit = exports.displayUnit = exports.currency = exports.isOmniProperty = exports.isEthereumToken = exports.isAccountBased = exports.hasUTXO = exports.hasMultipleAddresses = exports.defaultEnabled = exports.available = exports.properName = exports.name = undefined;
        exports.setFeePerKB = setFeePerKB;
        var _coininfo = require('coininfo');
        var _coininfo2 = _interopRequireDefault(_coininfo);
        var _bs58check = require('bs58check');
        var _bs58check2 = _interopRequireDefault(_bs58check);
        var _wif = require('wif');
        var _wif2 = _interopRequireDefault(_wif);
        var _crypto = require('crypto');
        var _crypto2 = _interopRequireDefault(_crypto);
        var _currencyUnits = require(45);
        var _aureus = require(25);
        var _bip44Constants = require(34);
        var _bip44Constants2 = _interopRequireDefault(_bip44Constants);
        var _events = require('events');
        var _twoOfTwoMultisig = require(83);

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
        const shapeShiftUnit = exports.shapeShiftUnit = 'btc';
        const units = exports.units = ['BTC'];
        const feeEvents = exports.feeEvents = new _events.EventEmitter();

        function setFeePerKB(newFeerPerKB) {
            console.log(`bitcoin fee: ${newFeerPerKB/1000|0} sat/byte`);
            exports.feePerKB = feePerKB = currency.satoshis(newFeerPerKB);
            feeEvents.emit('new');
        }
        let feePerKB = exports.feePerKB = undefined;
        setFeePerKB(380000);
        const address = exports.address = {
            versions: {
                p2pkh: (0, _coininfo2.default)(name).versions.public,
                p2sh: (0, _coininfo2.default)(name).versions.scripthash
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
        const bip44 = exports.bip44 = _bip44Constants2.default[name];
        const keys = exports.keys = {
            encodePrivate(privateKey) {
                const versions = (0, _coininfo2.default)(name).versions;
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
            addressUrl: address => `https://live.blockcypher.com/btc/address/${address}/`,
            txUrl: txId => `https://live.blockcypher.com/btc/tx/${txId}/`
        };
        const twoOfTwo = exports.twoOfTwo = (0, _twoOfTwoMultisig.alice)({
            network: (0, _coininfo2.default)(name)
        });

    }, {
        "25": 25,
        "34": 34,
        "45": 45,
        "83": 83,
        "undefined": undefined
    }],
    10: [function(require, module, exports) {
        'use strict';
        Object.defineProperty(exports, "__esModule", {
            value: true
        });
        exports.blockExplorer = exports.keys = exports.bip44 = exports.address = exports.feePerKB = exports.isOmniProperty = exports.isEthereumToken = exports.isAccountBased = exports.hasUTXO = exports.hasMultipleAddresses = undefined;
        exports._createSimpleSend = _createSimpleSend;
        var _bitcoreLib = require('bitcore-lib');
        var bitcore = _interopRequireWildcard(_bitcoreLib);
        var _ethereumjsUtil = require('ethereumjs-util');
        var _ethereumjsUtil2 = _interopRequireDefault(_ethereumjsUtil);
        var _util = require(46);
        var _ = require(9);
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
        const address = exports.address = {
            validate: bitcoin.address.validate
        };
        const bip44 = exports.bip44 = bitcoin.bip44;
        const keys = exports.keys = {
            encodePrivate: bitcoin.keys.encodePrivate,
            encodePublic: bitcoin.keys.encodePublic
        };
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
        "46": 46,
        "9": 9,
        "undefined": undefined
    }],
    11: [function(require, module, exports) {
        'use strict';
        Object.defineProperty(exports, "__esModule", {
            value: true
        });
        exports.twoOfTwo = exports.blockExplorer = exports.keys = exports.bip44 = exports.address = exports.feePerKB = exports.units = exports.shapeShiftUnit = exports.displayUnit = exports.currency = exports.isOmniProperty = exports.isEthereumToken = exports.isAccountBased = exports.hasUTXO = exports.hasMultipleAddresses = exports.defaultEnabled = exports.available = exports.properName = exports.name = undefined;
        var _coininfo = require('coininfo');
        var _coininfo2 = _interopRequireDefault(_coininfo);
        var _bs58check = require('bs58check');
        var _bs58check2 = _interopRequireDefault(_bs58check);
        var _wif = require('wif');
        var _wif2 = _interopRequireDefault(_wif);
        var _aureus = require(25);
        var _crypto = require('crypto');
        var _crypto2 = _interopRequireDefault(_crypto);
        var _currencyUnits = require(45);
        var _bip44Constants = require(34);
        var _bip44Constants2 = _interopRequireDefault(_bip44Constants);
        var _twoOfTwoMultisig = require(83);

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
        const shapeShiftUnit = exports.shapeShiftUnit = 'dash';
        const units = exports.units = ['DASH'];
        const feePerKB = exports.feePerKB = currency.duffs(10000);
        const address = exports.address = {
            versions: {
                p2pkh: (0, _coininfo2.default)(name).versions.public,
                p2sh: (0, _coininfo2.default)(name).versions.scripthash
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
        const bip44 = exports.bip44 = _bip44Constants2.default[name];
        const keys = exports.keys = {
            encodePrivate(privateKey) {
                const versions = (0, _coininfo2.default)(name).versions;
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
            addressUrl: address => `https://insight.dashevo.org/insight/address/${address}`,
            txUrl: txId => `https://insight.dashevo.org/insight/tx/${txId}`
        };
        const twoOfTwo = exports.twoOfTwo = (0, _twoOfTwoMultisig.alice)({
            network: (0, _coininfo2.default)(name)
        });

    }, {
        "25": 25,
        "34": 34,
        "45": 45,
        "83": 83,
        "undefined": undefined
    }],
    12: [function(require, module, exports) {
        'use strict';
        Object.defineProperty(exports, "__esModule", {
            value: true
        });
        exports.blockExplorer = exports.keys = exports.bip44 = exports.address = exports.feePerKB = exports.units = exports.shapeShiftUnit = exports.displayUnit = exports.currency = exports.isOmniProperty = exports.isEthereumToken = exports.isAccountBased = exports.hasUTXO = exports.hasMultipleAddresses = exports.defaultEnabled = exports.available = exports.properName = exports.name = undefined;
        var _coininfo = require('coininfo');
        var _coininfo2 = _interopRequireDefault(_coininfo);
        var _aureus = require(25);
        var _crypto = require('crypto');
        var _crypto2 = _interopRequireDefault(_crypto);
        var _currencyUnits = require(45);
        var _blakeHash = require('blake-hash');
        var _blakeHash2 = _interopRequireDefault(_blakeHash);
        var _bs58checkBlake = require(37);
        var _bs58checkBlake2 = _interopRequireDefault(_bs58checkBlake);
        var _bip44Constants = require(34);
        var _bip44Constants2 = _interopRequireDefault(_bip44Constants);

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
        const shapeShiftUnit = exports.shapeShiftUnit = 'dcr';
        const units = exports.units = ['DCR'];
        const feePerKB = exports.feePerKB = currency.DCR(0.001);
        const address = exports.address = {
            versions: {
                p2pkh: (0, _coininfo2.default)(name).versions.public,
                p2sh: (0, _coininfo2.default)(name).versions.scripthash
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
        const bip44 = exports.bip44 = _bip44Constants2.default[name];
        const keys = exports.keys = {
            encodePrivate(privateKey) {
                const version = Buffer.alloc(2);
                version.writeUInt16BE((0, _coininfo2.default)(name).versions.private);
                const buffer = Buffer.concat([version, Buffer.from([0x00]), privateKey, Buffer.from([0x01])]);
                return _bs58checkBlake2.default.encode(buffer);
            },
            encodePublic(publicKey) {
                const payload = Buffer.alloc(2 + 20);
                payload.writeUInt16BE((0, _coininfo2.default)(name).versions.public);
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
        "25": 25,
        "34": 34,
        "37": 37,
        "45": 45,
        "undefined": undefined
    }],
    13: [function(require, module, exports) {
        'use strict';
        Object.defineProperty(exports, "__esModule", {
            value: true
        });
        exports.twoOfTwo = exports.blockExplorer = exports.keys = exports.bip44 = exports.address = exports.gasPriceEvents = exports.fee = exports.gasPrice = exports.gasContract = exports.gasTx = exports.units = exports.shapeShiftUnit = exports.displayUnit = exports.currency = exports.isOmniProperty = exports.isEthereumToken = exports.isAccountBased = exports.hasUTXO = exports.hasMultipleAddresses = exports.defaultEnabled = exports.available = exports.properName = exports.name = undefined;
        exports.getFee = getFee;
        exports.setGasPrice = setGasPrice;
        var _currencyUnits = require(45);
        var _aureus = require(25);
        var _etherscan = require(55);
        var etherscan = _interopRequireWildcard(_etherscan);
        var _exodusEthereumServer = require(60);
        var _bip44Constants = require(34);
        var _bip44Constants2 = _interopRequireDefault(_bip44Constants);
        var _ethereumjsUtil = require('ethereumjs-util');
        var _ethereumjsUtil2 = _interopRequireDefault(_ethereumjsUtil);
        var _events = require('events');
        var _memoizeLruCache = require(64);
        var _memoizeLruCache2 = _interopRequireDefault(_memoizeLruCache);
        var _twoOfTwoEcdsaThreshold = require(79);

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
            shannon: 9,
            szabo: 12,
            finney: 15,
            ETH: 18
        }, 'ETH');
        const displayUnit = exports.displayUnit = 'ETH';
        const shapeShiftUnit = exports.shapeShiftUnit = 'eth';
        const units = exports.units = ['ETH'];
        const gasTx = exports.gasTx = 21e3;
        const gasContract = exports.gasContract = 1e6;
        let gasPrice = exports.gasPrice = undefined;
        let fee = exports.fee = undefined;

        function getFee(gasLimit) {
            return currency.wei(gasPrice.toNumber() * gasLimit);
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
            })
        };
        const bip44 = exports.bip44 = _bip44Constants2.default[name];
        const keys = exports.keys = {
            encodePrivate(privKey) {
                return '0x' + privKey.toString('hex');
            },
            encodePublic(compressedPubKey) {
                const hash160bits = _ethereumjsUtil2.default.publicToAddress(compressedPubKey, true);
                return _ethereumjsUtil2.default.toChecksumAddress(hash160bits.toString('hex'));
            }
        };
        const blockExplorer = exports.blockExplorer = {
            addressUrl: address => `https://etherscan.io/address/${address}`,
            txUrl: txId => `https://etherscan.io/tx/${txId}`
        };
        const twoOfTwo = exports.twoOfTwo = (0, _twoOfTwoEcdsaThreshold.alice)({
            publicKeyEncode: keys.encodePublic
        });

    }, {
        "25": 25,
        "34": 34,
        "45": 45,
        "55": 55,
        "60": 60,
        "64": 64,
        "79": 79,
        "undefined": undefined
    }],
    14: [function(require, module, exports) {
        module.exports = [{
                "name": "aragon",
                "properName": "Aragon",
                "decimals": 18,
                "displayUnit": "ANT",
                "shapeShiftUnit": "ant",
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
                "shapeShiftUnit": "rep",
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
                "shapeShiftUnit": "bnt",
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
                "shapeShiftUnit": "bat",
                "blockExplorer": "BAT",
                "addresses": {
                    "current": "0x0D8775F648430679A709E98d2b0Cb6250d2887EF"
                }
            },
            {
                "name": "civic",
                "properName": "Civic",
                "decimals": 8,
                "displayUnit": "CVC",
                "shapeShiftUnit": "cvc",
                "blockExplorer": "Civic",
                "addresses": {
                    "current": "0x41e5560054824eA6B0732E656E3Ad64E20e94E45"
                }
            },
            {
                "name": "digix",
                "properName": "DigixDAO",
                "decimals": 9,
                "displayUnit": "DGD",
                "shapeShiftUnit": "dgd",
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
                "shapeShiftUnit": "dnt",
                "blockExplorer": "district0x",
                "addresses": {
                    "current": "0x0AbdAce70D3790235af448C88547603b945604ea"
                }
            },
            {
                "name": "eos",
                "properName": "EOS",
                "decimals": 18,
                "displayUnit": "EOS",
                "shapeShiftUnit": "eos",
                "blockExplorer": "EOS",
                "addresses": {
                    "current": "0x86Fa049857E0209aa7D9e616F7eb3b3B78ECfdb0"
                }
            },
            {
                "name": "firstblood",
                "properName": "FirstBlood",
                "decimals": 18,
                "displayUnit": "1ST",
                "shapeShiftUnit": "1st",
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
                "shapeShiftUnit": "fun",
                "blockExplorer": "FunFair",
                "addresses": {
                    "current": "0x419D0d8BdD9aF5e606Ae2232ed285Aff190E711b"
                }
            },
            {
                "name": "gnosis",
                "properName": "Gnosis",
                "decimals": 18,
                "displayUnit": "GNO",
                "shapeShiftUnit": "gno",
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
                "shapeShiftUnit": "gnt",
                "blockExplorer": "Golem",
                "addresses": {
                    "current": "0xa74476443119A942dE498590Fe1f2454d7D4aC0d"
                }
            },
            {
                "name": "metal",
                "properName": "Metal",
                "decimals": 8,
                "displayUnit": "MTL",
                "shapeShiftUnit": "mtl",
                "blockExplorer": "Metal",
                "addresses": {
                    "current": "0xF433089366899D83a9f26A773D59ec7eCF30355e"
                }
            },
            {
                "name": "omisego",
                "properName": "OmiseGo",
                "decimals": 18,
                "displayUnit": "OMG",
                "shapeShiftUnit": "omg",
                "blockExplorer": "OmiseGo",
                "addresses": {
                    "current": "0xd26114cd6EE289AccF82350c8d8487fedB8A0C07"
                }
            },
            {
                "name": "qtum",
                "properName": "QTUM",
                "decimals": 18,
                "displayUnit": "QTUM",
                "shapeShiftUnit": "",
                "blockExplorer": "Qtum",
                "addresses": {
                    "current": "0x9a642d6b3368ddc662CA244bAdf32cDA716005BC"
                }
            },
            {
                "name": "salt",
                "properName": "SALT",
                "decimals": 8,
                "displayUnit": "SALT",
                "shapeShiftUnit": "salt",
                "blockExplorer": "0x4156D3342D5c385a87D264F90653733592000581",
                "addresses": {
                    "current": "0x4156D3342D5c385a87D264F90653733592000581"
                }
            },
            {
                "name": "status",
                "properName": "Status",
                "decimals": 18,
                "displayUnit": "SNT",
                "shapeShiftUnit": "snt",
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
                "shapeShiftUnit": "",
                "blockExplorer": "Storj",
                "addresses": {
                    "current": "0xB64ef51C888972c908CFacf59B47C1AfBC0Ab8aC"
                }
            },
            {
                "name": "wings",
                "properName": "Wings",
                "decimals": 18,
                "displayUnit": "WINGS",
                "shapeShiftUnit": "wings",
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
                "shapeShiftUnit": "zrx",
                "blockExplorer": "ZRX",
                "addresses": {
                    "current": "0xE41d2489571d322189246DaFA5ebDe1F4699F498"
                }
            }
        ]

    }, {}],
    15: [function(require, module, exports) {
        'use strict';
        Object.defineProperty(exports, "__esModule", {
            value: true
        });
        var _appConfig = require(5);
        var _aureus = require(25);
        var _currencyUnits = require(45);
        var _util = require(46);
        var _ethereumjsUtil = require('ethereumjs-util');
        var _ethereumjsUtil2 = _interopRequireDefault(_ethereumjsUtil);
        var _ = require(13);
        var ethereum = _interopRequireWildcard(_);
        var _tokens = require(14);
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
        const listExodus = ['aragon', 'augur', 'bat', 'civic', 'district0x', 'eos', 'funfair', 'gnosis', 'golem', 'omisego', 'qtum', 'salt'];
        const listDefaultEnabled = ['aragon', 'augur', 'bat', 'civic', 'district0x', 'eos', 'funfair', 'gnosis', 'golem', 'omisego', 'salt'];
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
                validate: ethereum.address.validate
            },
            bip44: ethereum.bip44,
            keys: {
                encodePrivate: ethereum.keys.encodePrivate,
                encodePublic: ethereum.keys.encodePublic
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
                available: ethereum.available && (_appConfig.ENV_DEV || _appConfig.ENV_BUILD_EDEN || _appConfig.ENV_BUILD_EXODUS && listExodus.includes(fixture.name)),
                defaultEnabled: listDefaultEnabled.includes(fixture.name),
                currency,
                displayUnit: fixture.displayUnit,
                shapeShiftUnit: fixture.shapeShiftUnit,
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
        "13": 13,
        "14": 14,
        "25": 25,
        "45": 45,
        "46": 46,
        "5": 5,
        "undefined": undefined
    }],
    16: [function(require, module, exports) {
        'use strict';
        Object.defineProperty(exports, "__esModule", {
            value: true
        });
        exports.twoOfTwo = exports.blockExplorer = exports.keys = exports.bip44 = exports.address = exports.gasPriceEvents = exports.fee = exports.gasPrice = exports.gasContract = exports.gasTx = exports.units = exports.shapeShiftUnit = exports.displayUnit = exports.currency = exports.isOmniProperty = exports.isEthereumToken = exports.isAccountBased = exports.hasUTXO = exports.hasMultipleAddresses = exports.defaultEnabled = exports.available = exports.properName = exports.name = undefined;
        exports.getFee = getFee;
        exports.setGasPrice = setGasPrice;
        var _currencyUnits = require(45);
        var _aureus = require(25);
        var _etcchain = require(53);
        var etcchain = _interopRequireWildcard(_etcchain);
        var _exodusEthereumServer = require(60);
        var _bip44Constants = require(34);
        var _bip44Constants2 = _interopRequireDefault(_bip44Constants);
        var _events = require('events');
        var _ethereum = require(13);
        var ethereum = _interopRequireWildcard(_ethereum);
        var _memoizeLruCache = require(64);
        var _memoizeLruCache2 = _interopRequireDefault(_memoizeLruCache);
        var _twoOfTwoEcdsaThreshold = require(79);

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
            shannon: 9,
            szabo: 12,
            finney: 15,
            ETC: 18
        }, 'ETC');
        const displayUnit = exports.displayUnit = 'ETC';
        const shapeShiftUnit = exports.shapeShiftUnit = 'etc';
        const units = exports.units = ['ETC'];
        const gasTx = exports.gasTx = 21e3;
        const gasContract = exports.gasContract = 1e6;
        let gasPrice = exports.gasPrice = undefined;
        let fee = exports.fee = undefined;

        function getFee(gasLimit) {
            return currency.wei(gasPrice.toNumber() * gasLimit);
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
            })
        };
        const bip44 = exports.bip44 = _bip44Constants2.default[name];
        const keys = exports.keys = {
            encodePrivate: ethereum.keys.encodePrivate,
            encodePublic: ethereum.keys.encodePublic
        };
        const blockExplorer = exports.blockExplorer = {
            addressUrl: address => `https://gastracker.io/addr/${address}`,
            txUrl: txId => `https://gastracker.io/tx/${txId}`
        };
        const twoOfTwo = exports.twoOfTwo = (0, _twoOfTwoEcdsaThreshold.alice)({
            publicKeyEncode: keys.encodePublic
        });

    }, {
        "13": 13,
        "25": 25,
        "34": 34,
        "45": 45,
        "53": 53,
        "60": 60,
        "64": 64,
        "79": 79,
        "undefined": undefined
    }],
    17: [function(require, module, exports) {
        'use strict';
        Object.defineProperty(exports, "__esModule", {
            value: true
        });
        exports.blockExplorer = exports.keys = exports.bip44 = exports.address = exports.fee = exports.units = exports.shapeShiftUnit = exports.displayUnit = exports.currency = exports.isOmniProperty = exports.isEthereumToken = exports.isAccountBased = exports.hasUTXO = exports.hasMultipleAddresses = exports.defaultEnabled = exports.available = exports.properName = exports.name = undefined;
        exports.setNewECRate = setNewECRate;
        var _appConfig = require(5);
        var _aureus = require(25);
        var _currencyUnits = require(45);
        var _bip44Constants = require(34);
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
        const shapeShiftUnit = exports.shapeShiftUnit = 'fct';
        const units = exports.units = ['FCT'];

        function setNewECRate(newECRate) {
            exports.fee = fee = currency.factoshis(newECRate * 12);
        }
        let fee = exports.fee = undefined;
        setNewECRate(1e4);
        const address = exports.address = {
            validate: _factomjsLib2.default.address.fct.isValidHumanReadable
        };
        const bip44 = exports.bip44 = _bip44Constants2.default['factom-factoids'];
        const keys = exports.keys = {
            encodePrivate(privateKey) {
                return _factomjsLib2.default.privateKey.fct.toHumanReadable(privateKey);
            },
            encodePublic(publicKey, privateKey) {
                publicKey = _factomjsLib2.default.crypto.publicKeyCreate(privateKey);
                const rcd1 = _factomjsLib2.default.rcd.createRCD1(publicKey);
                const rcdHash = _factomjsLib2.default.rcd.getHash(rcd1);
                return _factomjsLib2.default.address.fct.toHumanReadable(rcdHash);
            }
        };
        const blockExplorer = exports.blockExplorer = {
            addressUrl: address => `https://explorer.factom.org/address/${address}`,
            txUrl: txId => `https://explorer.factom.org/tx/${txId}`
        };

    }, {
        "25": 25,
        "34": 34,
        "45": 45,
        "5": 5,
        "undefined": undefined
    }],
    18: [function(require, module, exports) {
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
        var _bitcoin = require(9);
        var bitcoin = _interopRequireWildcard(_bitcoin);
        var _dash = require(11);
        var dash = _interopRequireWildcard(_dash);
        var _decred = require(12);
        var decred = _interopRequireWildcard(_decred);
        var _ethereum = require(13);
        var ethereum = _interopRequireWildcard(_ethereum);
        var _ethereumclassic = require(16);
        var ethereumclassic = _interopRequireWildcard(_ethereumclassic);
        var _factom = require(17);
        var factom = _interopRequireWildcard(_factom);
        var _litecoin = require(19);
        var litecoin = _interopRequireWildcard(_litecoin);
        var _monero = require(20);
        var monero = _interopRequireWildcard(_monero);
        var _ripple = require(21);
        var ripple = _interopRequireWildcard(_ripple);
        var _zcash = require(23);
        var zcash = _interopRequireWildcard(_zcash);
        var _tokens = require(15);
        var _tokens2 = _interopRequireDefault(_tokens);
        var _tether = require(22);
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
        const assets = [bcash, bcashclaim, bitcoin, dash, decred, ethereum, ethereumclassic, factom, litecoin, monero, ripple, zcash];
        assets.push(..._tokens2.default);
        assets.push(tether);
        exports.default = lodash.sortBy(assets, 'properName').reduce((obj, asset) => {
            return Object.assign(obj, {
                [asset.name]: asset
            });
        }, {});

    }, {
        "11": 11,
        "12": 12,
        "13": 13,
        "15": 15,
        "16": 16,
        "17": 17,
        "19": 19,
        "20": 20,
        "21": 21,
        "22": 22,
        "23": 23,
        "7": 7,
        "8": 8,
        "9": 9,
        "undefined": undefined
    }],
    19: [function(require, module, exports) {
        'use strict';
        Object.defineProperty(exports, "__esModule", {
            value: true
        });
        exports.twoOfTwo = exports.blockExplorer = exports.keys = exports.bip44 = exports.address = exports.feePerKB = exports.units = exports.shapeShiftUnit = exports.displayUnit = exports.currency = exports.isOmniProperty = exports.isEthereumToken = exports.isAccountBased = exports.hasUTXO = exports.hasMultipleAddresses = exports.defaultEnabled = exports.available = exports.properName = exports.name = undefined;
        var _coininfo = require('coininfo');
        var _coininfo2 = _interopRequireDefault(_coininfo);
        var _bs58check = require('bs58check');
        var _bs58check2 = _interopRequireDefault(_bs58check);
        var _wif = require('wif');
        var _wif2 = _interopRequireDefault(_wif);
        var _crypto = require('crypto');
        var _crypto2 = _interopRequireDefault(_crypto);
        var _currencyUnits = require(45);
        var _aureus = require(25);
        var _bip44Constants = require(34);
        var _bip44Constants2 = _interopRequireDefault(_bip44Constants);
        var _twoOfTwoMultisig = require(83);

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
        const shapeShiftUnit = exports.shapeShiftUnit = 'ltc';
        const units = exports.units = ['LTC'];
        const feePerKB = exports.feePerKB = currency.latoshis(950000);
        const address = exports.address = {
            versions: {
                p2pkh: (0, _coininfo2.default)(name).versions.public,
                p2sh: (0, _coininfo2.default)(name).versions.scripthash
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
        const bip44 = exports.bip44 = _bip44Constants2.default[name];
        const keys = exports.keys = {
            encodePrivate(privateKey) {
                const versions = (0, _coininfo2.default)(name).versions;
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
            addressUrl: address => `https://live.blockcypher.com/ltc/address/${address}/`,
            txUrl: txId => `https://live.blockcypher.com/ltc/tx/${txId}/`
        };
        const twoOfTwo = exports.twoOfTwo = (0, _twoOfTwoMultisig.alice)({
            network: (0, _coininfo2.default)(name)
        });

    }, {
        "25": 25,
        "34": 34,
        "45": 45,
        "83": 83,
        "undefined": undefined
    }],
    20: [function(require, module, exports) {
        'use strict';
        Object.defineProperty(exports, "__esModule", {
            value: true
        });
        exports.blockExplorer = exports.keys = exports.bip44 = exports.address = exports.fee = exports.units = exports.shapeShiftUnit = exports.displayUnit = exports.currency = exports.isOmniProperty = exports.isEthereumToken = exports.isAccountBased = exports.hasUTXO = exports.hasMultipleAddresses = exports.defaultEnabled = exports.available = exports.properName = exports.name = undefined;
        var _appConfig = require(5);
        var _aureus = require(25);
        var _currencyUnits = require(45);
        var _bip44Constants = require(34);
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
        const available = exports.available = _appConfig.ENV_DEV;
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
        const shapeShiftUnit = exports.shapeShiftUnit = 'xmr';
        const units = exports.units = ['XMR'];
        const fee = exports.fee = currency.XMR('0.026');
        const address = exports.address = {
            validate(address) {
                return moneroUtil.address.isValid(address);
            }
        };
        const bip44 = exports.bip44 = _bip44Constants2.default[name];
        const keys = exports.keys = {
            encodePrivate(privateKey) {
                return Buffer.from(privateKey).reverse().toString('hex');
            },
            encodePublic(publicKey, privateKey) {
                let spendPrivateKey = moneroUtil.crypto.reduceECKey(Buffer.from(privateKey));
                let spendPublicKey = moneroUtil.crypto.createECPublicKey(spendPrivateKey);
                let viewPrivateKey = moneroUtil.crypto.createECPrivateKey(spendPrivateKey);
                let viewPublicKey = moneroUtil.crypto.createECPublicKey(viewPrivateKey);
                let addr = moneroUtil.address.create(spendPublicKey, viewPublicKey);
                return addr;
            }
        };
        const blockExplorer = exports.blockExplorer = {
            addressUrl: address => '',
            txUrl: txId => `https://moneroblocks.info/tx/${txId}`
        };

    }, {
        "25": 25,
        "34": 34,
        "45": 45,
        "5": 5,
        "68": 68
    }],
    21: [function(require, module, exports) {
        'use strict';
        Object.defineProperty(exports, "__esModule", {
            value: true
        });
        exports.blockExplorer = exports.keys = exports.bip44 = exports.address = exports.accountReserve = exports.fee = exports.units = exports.shapeShiftUnit = exports.displayUnit = exports.currency = exports.isOmniProperty = exports.isEthereumToken = exports.isAccountBased = exports.hasUTXO = exports.hasMultipleAddresses = exports.defaultEnabled = exports.available = exports.properName = exports.name = undefined;
        exports.setFee = setFee;
        var _appConfig = require(5);
        var _rippleAddressCodec = require('ripple-address-codec');
        var _rippleAddressCodec2 = _interopRequireDefault(_rippleAddressCodec);
        var _currencyUnits = require(45);
        var _aureus = require(25);
        var _bip44Constants = require(34);
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
        const shapeShiftUnit = exports.shapeShiftUnit = 'xrp';
        const units = exports.units = ['XRP'];

        function setFee(value) {
            if (fee && fee.toNumber() === value) return;
            console.log(`set ripple fee: ${value} drops`);
            exports.fee = fee = currency.baseUnit(value);
        }
        let fee = exports.fee = undefined;
        setFee(10);
        const accountReserve = exports.accountReserve = currency.XRP(20);
        const address = exports.address = {
            validate: _rippleAddressCodec2.default.isValidAccountID
        };
        const bip44 = exports.bip44 = _bip44Constants2.default[name];
        const keys = exports.keys = {
            encodePrivate(privateKey) {
                return '00' + privateKey.toString('hex').toUpperCase();
            },
            encodePublic: _address.derive
        };
        const blockExplorer = exports.blockExplorer = {
            addressUrl: address => `https://bithomp.com/explorer/${address}`,
            txUrl: txId => `https://xrpcharts.ripple.com/#/transactions/${txId}`
        };

    }, {
        "25": 25,
        "34": 34,
        "45": 45,
        "5": 5,
        "69": 69,
        "undefined": undefined
    }],
    22: [function(require, module, exports) {
        'use strict';
        Object.defineProperty(exports, "__esModule", {
            value: true
        });
        exports.simpleSend = exports.units = exports.shapeShiftUnit = exports.displayUnit = exports.currency = exports.defaultEnabled = exports.available = exports.omniPropertyId = exports.properName = exports.name = undefined;
        var _omni = require(10);
        Object.keys(_omni).forEach(function(key) {
            if (key === "default" || key === "__esModule") return;
            Object.defineProperty(exports, key, {
                enumerable: true,
                get: function() {
                    return _omni[key];
                }
            });
        });
        var _aureus = require(25);
        var _currencyUnits = require(45);
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
        const shapeShiftUnit = exports.shapeShiftUnit = 'usdt';
        const units = exports.units = ['USDT'];
        const simpleSend = exports.simpleSend = (0, _omni._createSimpleSend)(omniPropertyId, currency);

    }, {
        "10": 10,
        "25": 25,
        "45": 45
    }],
    23: [function(require, module, exports) {
        'use strict';
        Object.defineProperty(exports, "__esModule", {
            value: true
        });
        exports.blockExplorer = exports.keys = exports.bip44 = exports.address = exports.feePerKB = exports.units = exports.shapeShiftUnit = exports.displayUnit = exports.currency = exports.isOmniProperty = exports.isEthereumToken = exports.isAccountBased = exports.hasUTXO = exports.hasMultipleAddresses = exports.defaultEnabled = exports.available = exports.properName = exports.name = undefined;
        var _coininfo = require('coininfo');
        var _coininfo2 = _interopRequireDefault(_coininfo);
        var _bs58check = require('bs58check');
        var _bs58check2 = _interopRequireDefault(_bs58check);
        var _wif = require('wif');
        var _wif2 = _interopRequireDefault(_wif);
        var _crypto = require('crypto');
        var _crypto2 = _interopRequireDefault(_crypto);
        var _appConfig = require(5);
        var _currencyUnits = require(45);
        var _aureus = require(25);
        var _bip44Constants = require(34);
        var _bip44Constants2 = _interopRequireDefault(_bip44Constants);

        function _interopRequireDefault(obj) {
            return obj && obj.__esModule ? obj : {
                default: obj
            };
        }
        const name = exports.name = 'zcash';
        const properName = exports.properName = 'Zcash';
        const available = exports.available = _appConfig.ENV_DEV || _appConfig.ENV_BUILD_EDEN;
        const defaultEnabled = exports.defaultEnabled = true;
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
        const shapeShiftUnit = exports.shapeShiftUnit = 'zec';
        const units = exports.units = ['ZEC'];
        const feePerKB = exports.feePerKB = currency.ZEC('0.0001');
        const address = exports.address = {
            versions: {
                p2pkh: (0, _coininfo2.default)(name).versions.public,
                p2sh: (0, _coininfo2.default)(name).versions.scripthash
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
        const bip44 = exports.bip44 = _bip44Constants2.default[name];
        const keys = exports.keys = {
            encodePrivate(privateKey) {
                const versions = (0, _coininfo2.default)(name).versions;
                return _wif2.default.encode(versions.private, privateKey, true);
            },
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
            addressUrl: address => `https://zcash.blockexplorer.com/address/${address}/`,
            txUrl: txId => `https://zcash.blockexplorer.com/tx/${txId}/`
        };

    }, {
        "25": 25,
        "34": 34,
        "45": 45,
        "5": 5,
        "undefined": undefined
    }],
    24: [function(require, module, exports) {
        'use strict';
        Object.defineProperty(exports, "__esModule", {
            value: true
        });
        exports.default = conversion;
        var _assert = require('assert');
        var _isNumberUnit = require(26);
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
        "26": 26,
        "undefined": undefined
    }],
    25: [function(require, module, exports) {
        'use strict';
        Object.defineProperty(exports, "__esModule", {
            value: true
        });
        exports.UnitType = exports.conversion = exports.isNumberUnit = undefined;
        var _numberUnit = require(27);
        var _numberUnit2 = _interopRequireDefault(_numberUnit);
        var _isNumberUnit2 = require(26);
        var _isNumberUnit3 = _interopRequireDefault(_isNumberUnit2);
        var _conversion2 = require(24);
        var _conversion3 = _interopRequireDefault(_conversion2);
        var _unitType = require(28);
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
        "24": 24,
        "26": 26,
        "27": 27,
        "28": 28
    }],
    26: [function(require, module, exports) {
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
    27: [function(require, module, exports) {
        'use strict';
        Object.defineProperty(exports, "__esModule", {
            value: true
        });
        exports.default = undefined;
        var _class, _temp;
        var _assert = require('assert');
        var _bignumber = require('bignumber.js');
        var _bignumber2 = _interopRequireDefault(_bignumber);
        var _isNumberUnit2 = require(26);
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
        "26": 26,
        "undefined": undefined
    }],
    28: [function(require, module, exports) {
        'use strict';
        Object.defineProperty(exports, "__esModule", {
            value: true
        });
        exports.default = undefined;
        var _assert = require('assert');
        var _assert2 = _interopRequireDefault(_assert);
        var _unit = require(29);
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
        "29": 29,
        "undefined": undefined
    }],
    29: [function(require, module, exports) {
        'use strict';
        Object.defineProperty(exports, "__esModule", {
            value: true
        });
        exports.create = create;
        var _numberUnit = require(27);
        var _numberUnit2 = _interopRequireDefault(_numberUnit);
        var _isNumberUnit = require(26);
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
        "26": 26,
        "27": 27
    }],
    30: [function(require, module, exports) {
        'use strict';
        Object.defineProperty(exports, "__esModule", {
            value: true
        });
        var _assert = require('assert');
        var _assert2 = _interopRequireDefault(_assert);
        var _lodash = require('lodash');
        var _window = require(84);
        var _window2 = _interopRequireDefault(_window);

        function _interopRequireDefault(obj) {
            return obj && obj.__esModule ? obj : {
                default: obj
            };
        }
        const KEY = 'exodus:auth';
        exports.default = {
            setCurrent(auth) {
                (0, _assert2.default)(allBuffers(auth), 'auth must contain only buffers');
                _window2.default.localStorage.setItem(KEY, serialize(auth));
            },
            set current(auth) {
                (0, _assert2.default)(allBuffers(auth), 'auth must contain only buffers');
                _window2.default.localStorage.setItem(KEY, serialize(auth));
            },
            get current() {
                let item = _window2.default.localStorage.getItem(KEY);
                if (item == null) return null;
                return deserialize(item);
            },
            clear() {
                _window2.default.localStorage.removeItem(KEY);
            }
        };

        function allBuffers(auth) {
            return Object.keys(auth).every(key => Buffer.isBuffer(auth[key]));
        }

        function serialize(auth) {
            return JSON.stringify((0, _lodash.mapValues)(auth, val => val.toString('base64')));
        }

        function deserialize(auth) {
            return (0, _lodash.mapValues)(JSON.parse(auth), val => Buffer.from(val, 'base64'));
        }

    }, {
        "84": 84,
        "undefined": undefined
    }],
    31: [function(require, module, exports) {
        'use strict';
        var _assert = require('assert');
        var _assert2 = _interopRequireDefault(_assert);
        var _aw = require('aw');
        var _aw2 = _interopRequireDefault(_aw);
        var _bip = require('bip39');
        var _bip2 = _interopRequireDefault(_bip);
        var _crypto = require(32);
        var _crypto2 = _interopRequireDefault(_crypto);
        var _download = require('download');
        var _download2 = _interopRequireDefault(_download);
        var _nodeFetch = require('node-fetch');
        var _nodeFetch2 = _interopRequireDefault(_nodeFetch);
        var _formData = require('form-data');
        var _formData2 = _interopRequireDefault(_formData);
        var _fsExtra = require('fs-extra');
        var _fsExtra2 = _interopRequireDefault(_fsExtra);
        var _querystring = require('querystring');
        var _querystring2 = _interopRequireDefault(_querystring);
        var _os = require('os');
        var _os2 = _interopRequireDefault(_os);
        var _path = require('path');
        var _path2 = _interopRequireDefault(_path);
        var _appConfig = require(5);
        var _restoreLink = require('@exodus/restore-link');
        var _restoreLink2 = _interopRequireDefault(_restoreLink);
        var _wallet = require(95);
        var _wallet2 = _interopRequireDefault(_wallet);

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
                suffix = Buffer.from([suffix]);
            }
            return Buffer.concat([buffer, suffix]);
        }
        const TABLE_NAME = 'cdata';
        const backupBlobUrl = id => `https://exodusapp.blob.core.windows.net/${TABLE_NAME}/${id}`;

        function Client(url) {
            this.url = url;
        }
        Client.API_URL = _appConfig.EXODUS_SERVER;

        function PUT(url, params, callback) {
            (0, _nodeFetch2.default)(url, {
                method: 'PUT',
                headers: {
                    'Accept': 'application/json, text/plain, */*',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(params)
            }).then(resp => {
                return resp.json();
            }).then(body => {
                callback(null, {
                    body
                });
            }).catch(callback);
        }

        function UPLOAD_FILE(url, params, file, callback) {
            _fsExtra2.default.lstat(file, (err, stats) => {
                if (err) callback(err);
                var form = new _formData2.default();
                form.append('file', _fsExtra2.default.createReadStream(file), {
                    knownLength: stats.size
                });
                Object.keys(params).forEach(key => form.append(key, params[key]));
                (0, _nodeFetch2.default)(url, {
                    method: 'PUT',
                    body: form
                }).then(resp => {
                    return resp.json();
                }).then(body => {
                    callback(null, {
                        body
                    });
                }).catch(callback);
            });
        }
        Client.prototype.create = (() => {
            var _ref = _asyncToGenerator(function*(wallet, passphrase, email) {
                this.email = email;
                let entropy = Buffer.from(_bip2.default.mnemonicToEntropy(wallet._seed.mnemonic.toString('utf8')), 'hex');
                const [err, auth, params] = yield(0, _aw2.default)(this.backup, {
                    context: this
                })(entropy, passphrase);
                if (err) throw err;
                return {
                    auth,
                    params
                };
            });
            return function(_x, _x2, _x3) {
                return _ref.apply(this, arguments);
            };
        })();
        Client.prototype.backupWallet = (() => {
            var _ref2 = _asyncToGenerator(function*(wallet, auth) {
                let infoFile = wallet._walletPaths.infoFile;
                const [err] = yield(0, _aw2.default)(this.backupData, {
                    context: this
                })(auth, infoFile);
                if (err) throw err;
            });
            return function(_x4, _x5) {
                return _ref2.apply(this, arguments);
            };
        })();
        Client.prototype.backup = function(seed, passphrase, callback) {
            (0, _assert2.default)(Buffer.isBuffer(seed), 'Expected Buffer seed, got ' + seed);
            if (!Buffer.isBuffer(passphrase)) passphrase = Buffer.from(passphrase);
            var H = _crypto2.default.HMAC(seed, concat(passphrase, 1));
            var K = _crypto2.default.HMAC(seed, concat(passphrase, 2));
            var dataKey = _crypto2.default.HMAC(seed, concat(passphrase, 3));
            var Y = _crypto2.default.KDF(passphrase, H);
            var saltParams = {
                H: H.toString('base64'),
                Y: Y.toString('base64'),
                email: this.email
            };
            PUT(this.url + '/v1/salt', saltParams, (err, res) => {
                if (err) return callback(err);
                if (res.body.status !== 'success') return callback(res.body);
                var salt = Buffer.from(res.body.data, 'base64');
                if (salt.length !== 32) return callback(new Error('Expected 256 bit salt, got ' + res.body.data));
                var combinedKey = _crypto2.default.KDF(passphrase, salt);
                var s = _crypto2.default.Encrypt(seed, combinedKey);
                var auth = {
                    K: K,
                    dataKey: dataKey
                };
                var params = {
                    H: H,
                    s,
                    e: Buffer.from(this.email, 'utf8')
                };
                var linkEnc = _restoreLink2.default.encode(params);
                const emailParams = {
                    email: this.email,
                    link: linkEnc,
                    build: _appConfig.ENV_BUILD_NAME
                };
                PUT(this.url + '/v1/email', emailParams, (err, res) => {
                    if (err) console.error(err);
                });
                callback(null, auth, params);
            });
        };
        Client.prototype.backupToString = function(seed, passphrase, callback) {
            return this.backup(seed, passphrase, function(err, auth, params) {
                if (err) return callback(err);
                var str = _querystring2.default.stringify({
                    H: params.H.toString('base64'),
                    s: params.s.toString('base64')
                });
                return callback(null, auth, str);
            });
        };
        Client.prototype.recoverAuthAndEntropy = (() => {
            var _ref3 = _asyncToGenerator(function*(params, passphrase) {
                const [err, auth, entropy] = yield(0, _aw2.default)(this.recover, {
                    context: this
                })(params, passphrase);
                if (err) throw err;
                return {
                    auth,
                    entropy
                };
            });
            return function(_x6, _x7) {
                return _ref3.apply(this, arguments);
            };
        })();
        Client.prototype.recover = function(params, passphrase, callback) {
            if (!Buffer.isBuffer(passphrase)) passphrase = Buffer.from(passphrase, 'utf8');
            (0, _assert2.default)(Buffer.isBuffer(params.H), 'Expected Buffer params.H, got ' + params.H);
            (0, _assert2.default)(Buffer.isBuffer(params.s), 'Expected Buffer params.s, got ' + params.s);
            var Y = _crypto2.default.KDF(passphrase, params.H);
            var saltParams = {
                H: params.H.toString('base64'),
                Y: Y.toString('base64')
            };
            PUT(this.url + '/v1/salt', saltParams, function(err, res) {
                if (err) return callback(err);
                if (res.body.status !== 'success') return callback(res.body);
                var salt = Buffer.from(res.body.data, 'base64');
                if (salt.length !== 32) return callback(new Error('Expected 256 bit salt, got ' + res.body.data));
                var combinedKey = _crypto2.default.KDF(passphrase, salt);
                var seed = _crypto2.default.Decrypt(params.s, combinedKey);
                var K = _crypto2.default.HMAC(seed, concat(passphrase, 2));
                var dataKey = _crypto2.default.HMAC(seed, concat(passphrase, 3));
                var auth = {
                    K: K,
                    dataKey: dataKey
                };
                callback(null, auth, seed);
            });
        };
        Client.prototype.recoverFromString = function(str, passphrase, callback) {
            var parsed = _querystring2.default.parse(str);
            var params = {
                H: Buffer.from(parsed.H, 'base64'),
                s: Buffer.from(parsed.s, 'base64')
            };
            return this.recover(params, passphrase, callback);
        };
        Client.prototype.backupData = function(auth, file, callback) {
            (0, _assert2.default)(Buffer.isBuffer(auth.K), 'Expected Buffer auth.K, got ' + auth.K);
            (0, _assert2.default)(Buffer.isBuffer(auth.dataKey), 'Expected Buffer auth.dataKey, got ' + auth.dataKey);
            var dataParams = {
                K: auth.K.toString('base64')
            };
            UPLOAD_FILE(this.url + '/v1/backup', dataParams, file, function(err, res) {
                if (err) return callback(err);
                if (res.body.status !== 'success') return callback(res.body);
                callback(undefined);
            });
        };
        Client.prototype.recoverWallet = (() => {
            var _ref4 = _asyncToGenerator(function*(auth, passphrase, entropy, dest) {
                const [err, infoFile] = yield(0, _aw2.default)(this.recoverData, {
                    context: this
                })(auth);
                if (err) throw err;
                let wallet = yield _wallet2.default.createFromRecovery(dest, passphrase, entropy, infoFile);
                yield _fsExtra2.default.remove(infoFile);
                return wallet;
            });
            return function(_x8, _x9, _x10, _x11) {
                return _ref4.apply(this, arguments);
            };
        })();
        Client.prototype.recoverData = function(auth, callback) {
            (0, _assert2.default)(Buffer.isBuffer(auth.K), 'Expected Buffer auth.K, got ' + auth.K);
            (0, _assert2.default)(Buffer.isBuffer(auth.dataKey), 'Expected Buffer auth.dataKey, got ' + auth.dataKey);
            const K = auth.K.toString('hex');
            const file = _path2.default.join(_os2.default.tmpdir(), String(Date.now()));
            const url = backupBlobUrl(K);
            (0, _download2.default)(url).pipe(_fsExtra2.default.createWriteStream(file)).on('error', callback).on('finish', () => {
                callback(null, file);
            });
        };
        module.exports = Client;

    }, {
        "32": 32,
        "5": 5,
        "95": 95,
        "undefined": undefined
    }],
    32: [function(require, module, exports) {
        'use strict';
        var crypto = require('crypto');
        var secretBox = require('secret-box');

        function HMAC(buffer, secret) {
            return crypto.createHmac('sha256', secret).update(buffer).digest();
        }

        function KDF(buffer, salt, iterations) {
            iterations = iterations || 512;
            return crypto.pbkdf2Sync(buffer, salt, iterations, 32, 'sha1');
        }

        function Encrypt(buffer, key) {
            return secretBox.encrypt(buffer, key, {
                n: Math.pow(2, 16)
            });
        }

        function Decrypt(encrypted, key) {
            return secretBox.decrypt(encrypted, key);
        }
        module.exports = {
            Decrypt: Decrypt,
            Encrypt: Encrypt,
            HMAC: HMAC,
            KDF: KDF
        };

    }, {
        "undefined": undefined
    }],
    33: [function(require, module, exports) {
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
        var _assets = require(18);
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
        "18": 18,
        "undefined": undefined
    }],
    34: [function(require, module, exports) {
        'use strict';
        Object.defineProperty(exports, "__esModule", {
            value: true
        });
        var _bip44Constants = require('bip44-constants');
        var _bip44Constants2 = _interopRequireDefault(_bip44Constants);
        var _fp = require('lodash/fp');

        function _interopRequireDefault(obj) {
            return obj && obj.__esModule ? obj : {
                default: obj
            };
        }
        const transformFn = (0, _fp.flow)((0, _fp.mapKeys)(_fp.kebabCase), (0, _fp.mapValues)(parseInt));
        let _constants = transformFn(_bip44Constants2.default);
        _constants.ethereum = _constants.ether;
        _constants.ethereumclassic = _constants['ether-classic'];
        exports.default = _constants;

    }, {
        "undefined": undefined
    }],
    35: [function(require, module, exports) {
        'use strict';
        Object.defineProperty(exports, "__esModule", {
            value: true
        });
        exports.derivePurpose = derivePurpose;
        exports.deriveCoin = deriveCoin;
        exports.deriveAccount = deriveAccount;
        exports.deriveChain = deriveChain;
        exports.deriveExternalChain = deriveExternalChain;
        exports.deriveInternalChain = deriveInternalChain;
        exports.deriveSpendable = deriveSpendable;
        exports.deriveReceive = deriveReceive;
        exports.deriveChange = deriveChange;
        var _assert = require('assert');
        var _assert2 = _interopRequireDefault(_assert);
        var _bip = require(33);
        var _bip2 = _interopRequireDefault(_bip);
        var _assets = require(18);
        var _assets2 = _interopRequireDefault(_assets);

        function _interopRequireDefault(obj) {
            return obj && obj.__esModule ? obj : {
                default: obj
            };
        }

        function derivePurpose(masterHDKey) {
            (0, _assert2.default)(masterHDKey instanceof _bip2.default, 'key must be an instance of BIP32');
            _assert2.default.strictEqual(masterHDKey.tag, 'master', 'key must have a tag set to master');
            return masterHDKey.derive(_bip.HARDENED_OFFSET + 44, 'purpose');
        }

        function deriveCoin(purposeHDKey, coin) {
            let bip44 = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
            (0, _assert2.default)(purposeHDKey instanceof _bip2.default, 'key must be an instance of BIP32');
            _assert2.default.strictEqual(purposeHDKey.tag, 'purpose', 'key must have a tag set to master');
            (0, _assert2.default)(coin, 'must set coin');
            if (typeof coin !== 'string') {
                coin = coin.name;
            }
            let bip = bip44 || _assets2.default[coin].bip44;
            return purposeHDKey.derive(bip, coin, {
                coin: coin
            });
        }

        function deriveAccount(coinHDKey, index) {
            (0, _assert2.default)(coinHDKey instanceof _bip2.default, 'key must be an instance of BIP32');
            (0, _assert2.default)(coinHDKey.tag in _assets2.default || coinHDKey.tag === 'exchange', 'key must be a valid coin key');
            index = Number.parseInt(index, 10);
            (0, _assert2.default)(!Number.isNaN(index), 'must set index as valid number');
            return coinHDKey.derive(_bip.HARDENED_OFFSET + index, coinHDKey.tag + '-' + 'account' + index, {
                coin: coinHDKey.coin
            });
        }

        function deriveChain(accountHDKey, index, tag) {
            (0, _assert2.default)(accountHDKey instanceof _bip2.default, 'key must be an instance of BIP32');
            (0, _assert2.default)(accountHDKey.tag.includes('-account'), 'key must be a valid account key');
            (0, _assert2.default)(tag, 'tag must be specified');
            index = Number.parseInt(index, 10);
            (0, _assert2.default)(!Number.isNaN(index), 'must set index as valid number');
            return accountHDKey.derive(index, accountHDKey.tag + '-' + tag + '_chain', {
                coin: accountHDKey.coin
            });
        }

        function deriveExternalChain(accountHDKey) {
            return deriveChain(accountHDKey, 0, 'external');
        }

        function deriveInternalChain(accountHDKey) {
            return deriveChain(accountHDKey, 1, 'internal');
        }

        function deriveSpendable(chainHDKey, index) {
            let tag = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '';
            (0, _assert2.default)(chainHDKey instanceof _bip2.default, 'key must be an instance of BIP32');
            (0, _assert2.default)(chainHDKey.tag.endsWith('_chain'), 'key must be a valid chain key');
            index = Number.parseInt(index, 10);
            (0, _assert2.default)(!Number.isNaN(index), 'must set index as valid number');
            return chainHDKey.derive(index, chainHDKey.tag + '-' + tag + index, {
                spendable: true,
                coin: chainHDKey.coin
            });
        }

        function deriveReceive(accountHDKey, addressIndex) {
            return deriveSpendable(deriveExternalChain(accountHDKey), addressIndex, 'receive');
        }

        function deriveChange(accountHDKey, addressIndex) {
            return deriveSpendable(deriveInternalChain(accountHDKey), addressIndex, 'change');
        }

    }, {
        "18": 18,
        "33": 33,
        "undefined": undefined
    }],
    36: [function(require, module, exports) {
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
    37: [function(require, module, exports) {
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
    38: [function(require, module, exports) {
        'use strict';
        var assert = require('assert');
        var opcodes = require(41);

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
        "41": 41,
        "undefined": undefined
    }],
    39: [function(require, module, exports) {
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
    40: [function(require, module, exports) {
        'use strict';
        module.exports = {
            scripts: require(43),
            Script: require(42),
            Transaction: require(44)
        };

    }, {
        "42": 42,
        "43": 43,
        "44": 44
    }],
    41: [function(require, module, exports) {
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
    42: [function(require, module, exports) {
        'use strict';
        var assert = require('assert');
        var bufferutils = require(38);
        var crypto = require(39);
        var opcodes = require(41);

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
        "38": 38,
        "39": 39,
        "41": 41,
        "undefined": undefined
    }],
    43: [function(require, module, exports) {
        'use strict';
        var assert = require('assert');
        var Script = require(42);
        var ops = require(41);

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
        module.exports = {
            pubKeyHashInput: pubKeyHashInput,
            pubKeyHashOutput: pubKeyHashOutput,
            scriptHashOutput: scriptHashOutput
        };

    }, {
        "41": 41,
        "42": 42,
        "undefined": undefined
    }],
    44: [function(require, module, exports) {
        'use strict';
        var assert = require('assert');
        var bufferutils = require(38);
        var crypto = require(39);
        var opcodes = require(41);
        var Script = require(42);

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
        "38": 38,
        "39": 39,
        "41": 41,
        "42": 42,
        "undefined": undefined
    }],
    45: [function(require, module, exports) {
        'use strict';
        Object.defineProperty(exports, "__esModule", {
            value: true
        });
        exports.fiatCurrency = exports.cryptoCurrency = exports.currency = undefined;
        var _aureus = require(25);
        const currency = exports.currency = _aureus.UnitType.create('currency');
        const cryptoCurrency = exports.cryptoCurrency = _aureus.UnitType.create('crypto-currency', currency);
        const fiatCurrency = exports.fiatCurrency = _aureus.UnitType.create('fiat', currency);

    }, {
        "25": 25
    }],
    46: [function(require, module, exports) {
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
    47: [function(require, module, exports) {
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
    48: [function(require, module, exports) {
        'use strict';
        Object.defineProperty(exports, "__esModule", {
            value: true
        });
        exports.createClient = createClient;
        exports.createClientMethod = createClientMethod;
        var _electronIpcBroadcast = require('electron-ipc-broadcast');
        var _electronIpcBroadcast2 = _interopRequireDefault(_electronIpcBroadcast);
        var _errorToObject = require(52);
        var _shared = require(50);

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
        "50": 50,
        "52": 52,
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
        exports.ws = exports.getLogs = exports.gasPrice = exports.getCode = exports.estimateGas = exports.getTransactionCount = exports.sendRawTransaction = exports.tokenBalance = exports.fetchTxlistinternal = exports.fetchTxlist = exports.fetchBalance = undefined;
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
        exports.gasPrice = exports.getCode = exports.estimateGas = exports.getTransactionCount = exports.sendRawTransaction = undefined;
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
        var _appConfig = require(5);

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
        "5": 5,
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
        exports.default = parseInt(Buffer.from('exo').toString('hex'), '16');

    }, {}],
    63: [function(require, module, exports) {
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
        exports.default = function(assetName, data, hdkey) {
            const txb = new _bitcoinjsLib.TransactionBuilder();
            txb.enableBitcoinCash(true);
            for (const input of data.inputs) {
                const script = _bitcoinjsLib.address.toOutputScript(input.address);
                txb.addInput(input.txId, input.vout, _bitcoinjsLib.Transaction.DEFAULT_SEQUENCE, script);
            }
            for (const [address, amount] of data.outputs) txb.addOutput(address, amount);
            const hashType = _bitcoinjsLib.Transaction.SIGHASH_ALL | _bitcoinjsLib.Transaction.SIGHASH_BITCOINCASHBIP143;
            if (data.privateKeys) {
                const pkMap = _lodash2.default.fromPairs(data.privateKeys.map(privateKeyWIF => {
                    const kp = _bitcoinjsLib.ECPair.fromWIF(privateKeyWIF);
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
                    return _bitcoinjsLib.ECPair.fromWIF(hdkey.derive(path, 'spendable', {
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
        var _bitcoinjsLib = require('bitcoinjs-lib');

        function _interopRequireDefault(obj) {
            return obj && obj.__esModule ? obj : {
                default: obj
            };
        }

    }, {
        "undefined": undefined
    }],
    72: [function(require, module, exports) {
        'use strict';
        Object.defineProperty(exports, "__esModule", {
            value: true
        });
        exports.default = function(assetName, data, hdkey) {
            const asset = _assets2.default[assetName];
            const {
                versions
            } = (0, _coininfo2.default)(asset.name);
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
                    const {
                        privateKey
                    } = _wif2.default.decode(privateKeyWIF, versions.private);
                    const publicKey = _secp256k2.default.publicKeyCreate(privateKey, true);
                    return [asset.keys.encodePublic(publicKey), privateKeyWIF];
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
        var _coininfo = require('coininfo');
        var _coininfo2 = _interopRequireDefault(_coininfo);
        var _bs58check = require('bs58check');
        var _bs58check2 = _interopRequireDefault(_bs58check);
        var _wif = require('wif');
        var _wif2 = _interopRequireDefault(_wif);
        var _secp256k = require('secp256k1');
        var _secp256k2 = _interopRequireDefault(_secp256k);
        var _crypto = require('crypto');
        var _crypto2 = _interopRequireDefault(_crypto);
        var _lodash = require('lodash');
        var _lodash2 = _interopRequireDefault(_lodash);
        var _assets = require(18);
        var _assets2 = _interopRequireDefault(_assets);
        var _cointx = require(40);

        function _interopRequireDefault(obj) {
            return obj && obj.__esModule ? obj : {
                default: obj
            };
        }

        function addressToScript(asset, address) {
            const payload = _bs58check2.default.decodeUnsafe(address);
            if (asset.address.isP2PKH(address)) return _cointx.scripts.pubKeyHashOutput(payload.slice(-20));
            if (asset.address.isP2SH(address)) return _cointx.scripts.scriptHashOutput(payload.slice(-20));
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
        "18": 18,
        "40": 40,
        "undefined": undefined
    }],
    73: [function(require, module, exports) {
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
    74: [function(require, module, exports) {
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
    75: [function(require, module, exports) {
        'use strict';
        Object.defineProperty(exports, "__esModule", {
            value: true
        });
        exports.default = function(assetName, data, hdkey) {
            const createTx = selectCreateTx(assetName);
            return createTx(assetName, data, hdkey);
        };
        var _bcash = require(71);
        var _bcash2 = _interopRequireDefault(_bcash);
        var _bitcoin = require(72);
        var _bitcoin2 = _interopRequireDefault(_bitcoin);
        var _decred = require(73);
        var _decred2 = _interopRequireDefault(_decred);
        var _ethereum = require(74);
        var _ethereum2 = _interopRequireDefault(_ethereum);

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
                case 'bitcoin':
                case 'dash':
                case 'litecoin':
                case 'zcash':
                    return _bitcoin2.default;
                case 'decred':
                    return _decred2.default;
                case 'ethereum':
                case 'ethereumclassic':
                    return _ethereum2.default;
                default:
                    throw new Error(`${assetName} is unsupported for transaction signing in the wallet process`);
            }
        }

    }, {
        "71": 71,
        "72": 72,
        "73": 73,
        "74": 74
    }],
    76: [function(require, module, exports) {
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
        var _pairingData = require(77);
        var pairingData = _interopRequireWildcard(_pairingData);
        var _publicKeys = require(78);
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
        "77": 77,
        "78": 78
    }],
    77: [function(require, module, exports) {
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
    78: [function(require, module, exports) {
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
    79: [function(require, module, exports) {
        'use strict';
        Object.defineProperty(exports, "__esModule", {
            value: true
        });
        var _alice = require(76);
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
        "76": 76
    }],
    80: [function(require, module, exports) {
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
        var _pairingData = require(81);
        var pairingData = _interopRequireWildcard(_pairingData);
        var _publicKeys = require(82);
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
        "81": 81,
        "82": 82
    }],
    81: [function(require, module, exports) {
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
    82: [function(require, module, exports) {
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
    83: [function(require, module, exports) {
        arguments[4][79][0].apply(exports, arguments)
    }, {
        "79": 79,
        "80": 80
    }],
    84: [function(require, module, exports) {
        'use strict';
        Object.defineProperty(exports, "__esModule", {
            value: true
        });
        var _chalk = require('chalk');
        var _chalk2 = _interopRequireDefault(_chalk);

        function _interopRequireDefault(obj) {
            return obj && obj.__esModule ? obj : {
                default: obj
            };
        }
        if (process.type !== 'renderer') console.warn(_chalk2.default.bgBlack.yellow('Not in renderer as expected.'));
        exports.default = window;

    }, {
        "undefined": undefined
    }],
    85: [function(require, module, exports) {
        'use strict';
        hookNodePath();
        require(2);
        require('core-js/fn/symbol');
        require('babel' + '-register')({
            resolveModuleSource: require(86).resolve,
            only: ['src/app/', 'scripts/', 'tasks/'],
            extensions: ['.js'],
            sourceMaps: 'both'
        });
        (function() {
            const {
                ENV_PROD
            } = require(88);
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
        "2": 2,
        "86": 86,
        "88": 88,
        "undefined": undefined
    }],
    86: [function(require, module, exports) {
        'use strict';
        var babelResolve = require('babel-resolve');
        var resolver = babelResolve.create('#', './src/app/_local_modules');
        module.exports = resolver;

    }, {
        "undefined": undefined
    }],
    87: [function(require, module, exports) {
        'use strict';
        if ("production" === 'production') {
            require(2);
            require('core-js/fn/symbol');
        } else if ("production" === 'development') {
            require(85);
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
        "85": 85,
        "undefined": undefined
    }],
    88: [function(require, module, exports) {
        'use strict';
        Object.defineProperty(exports, "__esModule", {
            value: true
        });
        exports.NEW_VERSION_DATE = exports.AUTO_UPDATE_BASE_URL = exports.AUTO_UPDATE_DELAY_INIT = exports.WINDOW_PASSPHRASE_PRELOAD = exports.WINDOW_WALLET = exports.WINDOW_PASSPHRASE = exports.WINDOW_NETWORK = exports.WINDOW_MNEMONIC = exports.WINDOW_MAIN = exports.EXODUS_SERVER = exports.EXODUS_STAGING_SERVER = exports.EXODUS_PRODUCTION_SERVER = exports.EXODUS_TESTING_SERVER = exports.EXODUS_LOCAL_SERVER = exports.COMPANY = exports.PACKAGE = exports.BITCOIN_FEE_LIMIT = exports.DUST_VALUES = exports.ENV_BUILD_EDEN = exports.ENV_BUILD_EXODUS = exports.ENV_BUILD_NAME = exports.ENV_PROD = exports.ENV_DEV = undefined;
        var _path = require('path');
        var _path2 = _interopRequireDefault(_path);
        var _ms = require('ms');
        var _ms2 = _interopRequireDefault(_ms);
        var _package = require(99);
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
            litecoin: 60000,
            dash: 5500,
            decred: 70000,
            zcash: 1500
        };
        const BITCOIN_FEE_LIMIT = exports.BITCOIN_FEE_LIMIT = 0.2;
        const PACKAGE = exports.PACKAGE = _package2.default;
        const COMPANY = exports.COMPANY = 'Exodus Movement, Inc.';
        const EXODUS_LOCAL_SERVER = exports.EXODUS_LOCAL_SERVER = 'http://localhost:3020';
        const EXODUS_TESTING_SERVER = exports.EXODUS_TESTING_SERVER = 'https://exodus-server-testing.azurewebsites.net';
        const EXODUS_PRODUCTION_SERVER = exports.EXODUS_PRODUCTION_SERVER = 'https://exodus-server.azurewebsites.net';
        const EXODUS_STAGING_SERVER = exports.EXODUS_STAGING_SERVER = 'https://exodus-server-staging2.azurewebsites.net';
        const EXODUS_SERVER = exports.EXODUS_SERVER = EXODUS_PRODUCTION_SERVER;
        const htmlPath = file => ENV_PROD ? _path2.default.join(__dirname, '..', '..', '..', 'static', file) : _path2.default.join(__dirname, '..', '..', 'static', file) + '?react_perf';
        const WINDOW_MAIN = exports.WINDOW_MAIN = 'file://' + htmlPath('index.html');
        const WINDOW_MNEMONIC = exports.WINDOW_MNEMONIC = 'file://' + htmlPath('mnemonic.html');
        const WINDOW_NETWORK = exports.WINDOW_NETWORK = 'file://' + htmlPath('network.html');
        const WINDOW_PASSPHRASE = exports.WINDOW_PASSPHRASE = 'file://' + htmlPath('passphrase.html');
        const WINDOW_WALLET = exports.WINDOW_WALLET = 'file://' + htmlPath('wallet.html');
        const preloadPath = proc => ENV_PROD ? _path2.default.join(__dirname, '..', proc, 'preload.js') : _path2.default.join(__dirname, proc, 'preload.js');
        const WINDOW_PASSPHRASE_PRELOAD = exports.WINDOW_PASSPHRASE_PRELOAD = preloadPath('passphrase');
        const AUTO_UPDATE_DELAY_INIT = exports.AUTO_UPDATE_DELAY_INIT = 10000;
        const AUTO_UPDATE_BASE_URL = exports.AUTO_UPDATE_BASE_URL = 'https://exodusbin.azureedge.net';
        const timeMs = (parseInt(1513920461917) || Date.now()) + (4 * (0, _ms2.default)('168h') + (0, _ms2.default)('82h'));
        const NEW_VERSION_DATE = exports.NEW_VERSION_DATE = new Date(timeMs);

    }, {
        "99": 99,
        "undefined": undefined
    }],
    89: [function(require, module, exports) {
        'use strict';
        Object.defineProperty(exports, "__esModule", {
            value: true
        });
        var _aw = require('aw');
        var _aw2 = _interopRequireDefault(_aw);
        var _client = require(31);
        var _client2 = _interopRequireDefault(_client);
        var _instance = require(92);
        var _instance2 = _interopRequireDefault(_instance);
        var _keys = require(96);
        var walletKeys = _interopRequireWildcard(_keys);
        var _appConfig = require(5);
        var _backupAuth = require(30);
        var _backupAuth2 = _interopRequireDefault(_backupAuth);

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
        const api = new _client2.default(_appConfig.EXODUS_SERVER);
        const account = {
            create(passphrase, email) {
                return _asyncToGenerator(function*() {
                    _instance2.default.backupOnChange = false;
                    if (!Buffer.isBuffer(passphrase)) passphrase = Buffer.from(passphrase, 'utf8');
                    yield _instance2.default.current.updatePassphrase(passphrase);
                    const [err, backupData] = yield(0, _aw2.default)(api.create, {
                        context: api
                    })(_instance2.default.current, passphrase, email);
                    if (err) {
                        console.error(err);
                        throw err;
                    }
                    const {
                        auth
                    } = backupData;
                    _backupAuth2.default.current = auth;
                    let now = new Date().toISOString();
                    let status = {
                        email,
                        first: now,
                        last: now
                    };
                    yield _instance2.default.current.updateKeyData(walletKeys.backup(), status);
                    const [err2] = yield(0, _aw2.default)(api.backupWallet, {
                        context: api
                    })(_instance2.default.current, auth);
                    if (err2) {
                        console.error(err2);
                        throw err2;
                    }
                    _instance2.default.backupOnChange = true;
                    return {
                        auth,
                        status
                    };
                })();
            }
        };
        exports.default = account;

    }, {
        "30": 30,
        "31": 31,
        "5": 5,
        "92": 92,
        "96": 96,
        "undefined": undefined
    }],
    90: [function(require, module, exports) {
        'use strict';
        var _browserWindowArgs = require(36);

        function setArgs() {
            const hashStr = window.location.hash.slice(1);
            if (!hashStr) throw new Error('walletDir not set.');
            const args = (0, _browserWindowArgs.decode)(hashStr);
            global.__args__ = args;
        }
        setArgs();

    }, {
        "36": 36
    }],
    91: [function(require, module, exports) {
        'use strict';
        console.time('wallet-load');
        require(87);
        require(90);
        require(93);

    }, {
        "87": 87,
        "90": 90,
        "93": 93
    }],
    92: [function(require, module, exports) {
        'use strict';
        Object.defineProperty(exports, "__esModule", {
            value: true
        });
        exports.trapUpdate = trapUpdate;
        var _lodash = require('lodash');
        var _ms = require('ms');
        var _ms2 = _interopRequireDefault(_ms);
        var _keys = require(96);
        var walletKeys = _interopRequireWildcard(_keys);
        var _backupAuth = require(30);
        var _backupAuth2 = _interopRequireDefault(_backupAuth);
        var _client = require(31);
        var _client2 = _interopRequireDefault(_client);

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
        const backupClient = new _client2.default(_client2.default.API_URL);
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
            if (!_backupAuth2.default.current) return console.warn('Skipping backup since auth is empty.');
            if (!walletInstance.backupOnChange) return console.warn('Skipping backup since backupOnChange is false.');
            let [backupErr] = yield aw(backupClient.backupWallet)(walletInstance.current, _backupAuth2.default.current);
            if (backupErr) {
                console.error(backupErr);
                throw backupErr;
            }
            let status = yield walletInstance._wallet.fetchKeyData(walletKeys.backup());
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
        "30": 30,
        "31": 31,
        "96": 96,
        "undefined": undefined
    }],
    93: [function(require, module, exports) {
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
                        if (argsObj.recoveryLink) wallet = yield recoverFromLink(argsObj);
                        else wallet = yield loadExisting(argsObj);
                        console.log('wallet load success: ' + argsObj.walletDir);
                    } catch (err) {
                        console.log('\nWALLET LOAD FAIL');
                        console.error(err);
                        console.log('');
                        if (!err.message || !err.message.match(/unable to authenticate data/)) {
                            walletController.setError(err.message);
                        }
                        return walletController.setInvalidPassphrase();
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
                (0, _server.createServer)('backup-auth', _backupAuth2.default);
                (0, _server.createServer)('account', _account2.default);
                walletController.setWalletLoaded(true);
                if (wallet.needsRefresh) setTimeout(function() {
                    return (0, _electronIpcBroadcast2.default)('wallet:refreshAll');
                }, 5000);
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
                const passphraseFileExists = yield walletPaths.passphraseFileExists();
                if (passphraseFileExists) {
                    const wallet = yield _wallet2.default.loadWithPassphraseFile(walletPaths.walletDir);
                    return wallet;
                }
                return _wallet2.default.load(walletPaths.walletDir, passphrase);
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
                const wallet = _wallet2.default.createFromMnemonicRecoveryPhrase(walletDir, recoveryPhrase, recoveryPhrasePassphrase);
                _backupAuth2.default.clear();
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
                const [err, recoverData] = yield(0, _aw2.default)({
                    context: api
                })(api.recoverAuthAndEntropy)(params, passphrase);
                if (err) throw err;
                const {
                    auth,
                    entropy
                } = recoverData;
                const backupDestDir = _path2.default.join((0, _env.walletBackupDir)(), (0, _dateStr2.default)(), 'exodus.wallet');
                const walletExists = yield _wallet2.default.exists(walletDir);
                if (walletExists) {
                    yield(0, _aw2.default)(_fsExtra2.default.move)(walletDir, backupDestDir);
                }
                const [receoverDataErr, wallet] = yield(0, _aw2.default)({
                    context: api
                })(api.recoverWallet)(auth, passphrase, entropy, walletDir);
                if (receoverDataErr) {
                    if (yield _fsExtra2.default.pathExists(backupDestDir)) {
                        yield(0, _aw2.default)(_fsExtra2.default.move)(backupDestDir, walletDir, {
                            overwrite: true
                        });
                    }
                    throw receoverDataErr;
                }
                _backupAuth2.default.current = auth;
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
        var _wallet = require(95);
        var _wallet2 = _interopRequireDefault(_wallet);
        var _instance = require(92);
        var _instance2 = _interopRequireDefault(_instance);
        var _paths = require(98);
        var _paths2 = _interopRequireDefault(_paths);
        var _server = require(49);
        var _client = require(48);
        var _electronIpcBroadcast = require('electron-ipc-broadcast');
        var _electronIpcBroadcast2 = _interopRequireDefault(_electronIpcBroadcast);
        var _dateStr = require(47);
        var _dateStr2 = _interopRequireDefault(_dateStr);
        var _env = require(51);
        var _client2 = require(31);
        var _client3 = _interopRequireDefault(_client2);
        var _appConfig = require(5);
        var _backupAuth = require(30);
        var _backupAuth2 = _interopRequireDefault(_backupAuth);
        var _account = require(89);
        var _account2 = _interopRequireDefault(_account);
        var _restoreLink = require('@exodus/restore-link');

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
        const api = new _client3.default(_appConfig.EXODUS_SERVER);
        const walletController = (0, _client.createClient)('wallet-controller');

        function normalizeRestorePhrase(restorePhrase) {
            if (!restorePhrase.includes('\n')) return restorePhrase;
            restorePhrase = restorePhrase.trim();
            return restorePhrase.split('\n').join(' ');
        }
        run(global.__args__).then(() => {}).catch(err => console.error(err));

    }, {
        "30": 30,
        "31": 31,
        "47": 47,
        "48": 48,
        "49": 49,
        "5": 5,
        "51": 51,
        "89": 89,
        "92": 92,
        "95": 95,
        "98": 98,
        "undefined": undefined
    }],
    94: [function(require, module, exports) {
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
    95: [function(require, module, exports) {
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
        var _bip3 = require(33);
        var _bip4 = require(35);
        var bip44 = _interopRequireWildcard(_bip4);
        var _exodusPurpose = require(62);
        var _exodusPurpose2 = _interopRequireDefault(_exodusPurpose);
        var _makeConcurrent = require('make-concurrent');
        var _makeConcurrent2 = _interopRequireDefault(_makeConcurrent);
        var _secoKeyval = require('seco-keyval');
        var _secoKeyval2 = _interopRequireDefault(_secoKeyval);
        var _secoRw = require('seco-rw');
        var _secoRw2 = _interopRequireDefault(_secoRw);
        var _bufferNoise = require('buffer-noise');
        var _bufferNoise2 = _interopRequireDefault(_bufferNoise);
        var _zlib = require('zlib');
        var _appConfig = require(5);
        var _paths = require(98);
        var _paths2 = _interopRequireDefault(_paths);
        var _passphraseFile = require(97);
        var _makeError = require(63);
        var _makeError2 = _interopRequireDefault(_makeError);
        var _errors = require(94);
        var _errors2 = _interopRequireDefault(_errors);
        var _simpleTx = require(75);
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
        const updateKeyData = (0, _makeConcurrent2.default)((() => {
            var _ref = _asyncToGenerator(function*(key, data) {
                const lockFile = `${this._walletPaths.infoFile}.lock`;
                yield _fsExtra2.default.outputFile(lockFile, '');
                try {
                    yield this._kv.set(key, data);
                } catch (err) {
                    throw err;
                } finally {
                    yield _fsExtra2.default.remove(lockFile);
                }
            });
            return function(_x, _x2) {
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
                    master: null,
                    eid: null,
                    infoKey: null,
                    bip44: {}
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
                    wallet._seed = seed;
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
            static createFromMnemonicRecoveryPhrase(walletDir, mnemonic, mnemonicPassphrase) {
                return _asyncToGenerator(function*() {
                    const passphrase = _crypto2.default.randomBytes(32).toString('base64');
                    yield(0, _passphraseFile.writePassphraseFile)(walletDir, passphrase);
                    const seed = bitcoinSeed.fromMnemonic(mnemonic, mnemonicPassphrase);
                    return Wallet.create(walletDir, passphrase, {
                        seed
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
                    wallet._seed = bitcoinSeed.fromBuffer((0, _zlib.gunzipSync)(shrink32k(seed)));
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
            updateKeyData(key, data) {
                return updateKeyData.call(this, key, data);
            }
            fetchKeyData(key) {
                var _this3 = this;
                return _asyncToGenerator(function*() {
                    return _this3._kv.get(key);
                })();
            }
            getHDKey(coin) {
                let accountIndex = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
                return this._getHDKey(coin, accountIndex).toJSON();
            }
            _getHDKey(coin) {
                let accountIndex = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
                if (typeof coin !== 'string') coin = coin.name;
                if (!this._HDKeys.master) this._HDKeys.master = (0, _bip3.fromMasterSeed)(this._seed.seed);
                if (!this._HDKeys.bip44._root) {
                    this._HDKeys.bip44._root = bip44.derivePurpose(this._HDKeys.master);
                }
                if (!this._HDKeys.bip44[coin]) this._HDKeys.bip44[coin] = {};
                if (!this._HDKeys.bip44[coin]._root) {
                    this._HDKeys.bip44[coin]._root = bip44.deriveCoin(this._HDKeys.bip44._root, coin);
                }
                if (!this._HDKeys.bip44[coin][accountIndex]) {
                    this._HDKeys.bip44[coin][accountIndex] = bip44.deriveAccount(this._HDKeys.bip44[coin]._root, accountIndex);
                }
                return this._HDKeys.bip44[coin][accountIndex];
            }
            getXPub(coin) {
                let accountIndex = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
                return this._getHDKey(coin, accountIndex).xPub;
            }
            createTx(assetName, data) {
                return (0, _simpleTx2.default)(assetName, data, this._getHDKey(assetName));
            }
            getEID() {
                if (!this._HDKeys.master) this._HDKeys.master = (0, _bip3.fromMasterSeed)(this._seed.seed);
                this._HDKeys.eid = this._HDKeys.master.derive(`m/${_exodusPurpose2.default}'/0'/0`, 'exchange');
                return this._HDKeys.eid.publicKey;
            }
            _getDeterministicKey() {
                if (!this._HDKeys.master) this._HDKeys.master = (0, _bip3.fromMasterSeed)(this._seed.seed);
                this._HDKeys.deterministicKey = this._HDKeys.master.derive(`m/${_exodusPurpose2.default}'/1'/0`, 'encryption-key');
                return this._HDKeys.deterministicKey.privateKey;
            }
            getMnemonic() {
                return this._seed.mnemonicString;
            }
        };
        exports.default = Wallet;

    }, {
        "33": 33,
        "35": 35,
        "5": 5,
        "62": 62,
        "63": 63,
        "75": 75,
        "94": 94,
        "97": 97,
        "98": 98,
        "undefined": undefined
    }],
    96: [function(require, module, exports) {
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
    97: [function(require, module, exports) {
        'use strict';
        Object.defineProperty(exports, "__esModule", {
            value: true
        });
        exports.removePassphraseFile = exports.readPassphraseFile = exports.writePassphraseFile = undefined;
        let writePassphraseFile = exports.writePassphraseFile = (() => {
            var _ref = _asyncToGenerator(function*(walletDir, passphrase) {
                const passphraseFile = (0, _path.join)(walletDir, 'passphrase.json');
                const passphraseFileExists = yield _fsExtra2.default.pathExists(passphraseFile);
                if (passphraseFileExists) throw new Error(`Can't write to ${passphraseFile}; it already exists`);
                let data = {
                    passphrase,
                    system: true
                };
                yield _fsExtra2.default.outputJson(passphraseFile, data, {
                    spaces: 2
                });
            });
            return function writePassphraseFile(_x, _x2) {
                return _ref.apply(this, arguments);
            };
        })();
        let readPassphraseFile = exports.readPassphraseFile = (() => {
            var _ref2 = _asyncToGenerator(function*(walletDir) {
                const data = yield _fsExtra2.default.readJson((0, _path.join)(walletDir, 'passphrase.json'));
                return data;
            });
            return function readPassphraseFile(_x3) {
                return _ref2.apply(this, arguments);
            };
        })();
        let removePassphraseFile = exports.removePassphraseFile = (() => {
            var _ref3 = _asyncToGenerator(function*(walletDir) {
                yield _fsExtra2.default.remove((0, _path.join)(walletDir, 'passphrase.json'));
            });
            return function removePassphraseFile(_x4) {
                return _ref3.apply(this, arguments);
            };
        })();
        var _path = require('path');
        var _fsExtra = require('fs-extra');
        var _fsExtra2 = _interopRequireDefault(_fsExtra);

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
        "undefined": undefined
    }],
    98: [function(require, module, exports) {
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
    99: [function(require, module, exports) {
        module.exports = {
            "name": "exodus",
            "productName": "Exodus",
            "version": "1.41.0",
            "description": "Secure, manage, and trade blockchain assets."
        }
    }, {}]
}, {}, [91]);