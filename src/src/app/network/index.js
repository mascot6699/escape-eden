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
        var _package = require(55);
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
        const timeMs = (parseInt(1516750729757) || Date.now()) + (4 * (0, _ms2.default)('168h') + (0, _ms2.default)('82h'));
        const NEW_VERSION_DATE = exports.NEW_VERSION_DATE = new Date(timeMs);

    }, {
        "55": 55,
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
    7: [function(require, module, exports) {
        'use strict';
        Object.defineProperty(exports, "__esModule", {
            value: true
        });
        exports.WALLET_DIR = exports.walletDirFromExodusDir = undefined;
        var _paths = require(54);
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
        "54": 54
    }],
    8: [function(require, module, exports) {
        'use strict';
        var bitcore = require('bitcore-lib');
        bitcore.P2P = require(11);
        module.exports = bitcore.P2P;

    }, {
        "11": 11,
        "undefined": undefined
    }],
    9: [function(require, module, exports) {
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
    10: [function(require, module, exports) {
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
    11: [function(require, module, exports) {
        'use strict';
        module.exports = {
            Inventory: require(12),
            BloomFilter: require(9),
            Messages: require(35),
            Peer: require(38),
            Pool: require(39)
        };

    }, {
        "12": 12,
        "35": 35,
        "38": 38,
        "39": 39,
        "9": 9
    }],
    12: [function(require, module, exports) {
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
    13: [function(require, module, exports) {
        'use strict';
        var bitcore = require('bitcore-lib');
        var Inventory = require(12);
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
            exported.add('version', require(34));
            exported.add('verack', require(33));
            exported.add('ping', require(29));
            exported.add('pong', require(30));
            exported.add('block', require(16));
            exported.add('tx', require(32));
            exported.add('getdata', require(22));
            exported.add('headers', require(24));
            exported.add('notfound', require(28));
            exported.add('inv', require(25));
            exported.add('addr', require(14));
            exported.add('alert', require(15));
            exported.add('reject', require(31));
            exported.add('merkleblock', require(27));
            exported.add('filterload', require(19));
            exported.add('filteradd', require(17));
            exported.add('filterclear', require(18));
            exported.add('getblocks', require(21));
            exported.add('getheaders', require(23));
            exported.add('mempool', require(26));
            exported.add('getaddr', require(20));
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
        "12": 12,
        "14": 14,
        "15": 15,
        "16": 16,
        "17": 17,
        "18": 18,
        "19": 19,
        "20": 20,
        "21": 21,
        "22": 22,
        "23": 23,
        "24": 24,
        "25": 25,
        "26": 26,
        "27": 27,
        "28": 28,
        "29": 29,
        "30": 30,
        "31": 31,
        "32": 32,
        "33": 33,
        "34": 34,
        "undefined": undefined
    }],
    14: [function(require, module, exports) {
        'use strict';
        var Message = require(36);
        var inherits = require('util').inherits;
        var bitcore = require('bitcore-lib');
        var utils = require(37);
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
        "36": 36,
        "37": 37,
        "undefined": undefined
    }],
    15: [function(require, module, exports) {
        'use strict';
        var Message = require(36);
        var inherits = require('util').inherits;
        var bitcore = require('bitcore-lib');
        var utils = require(37);
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
        "36": 36,
        "37": 37,
        "undefined": undefined
    }],
    16: [function(require, module, exports) {
        'use strict';
        var Message = require(36);
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
        "36": 36,
        "undefined": undefined
    }],
    17: [function(require, module, exports) {
        'use strict';
        var Message = require(36);
        var inherits = require('util').inherits;
        var bitcore = require('bitcore-lib');
        var utils = require(37);
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
        "36": 36,
        "37": 37,
        "undefined": undefined
    }],
    18: [function(require, module, exports) {
        'use strict';
        var Message = require(36);
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
        "36": 36,
        "undefined": undefined
    }],
    19: [function(require, module, exports) {
        'use strict';
        var Message = require(36);
        var inherits = require('util').inherits;
        var bitcore = require('bitcore-lib');
        var BufferUtil = bitcore.util.buffer;
        var BloomFilter = require(9);
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
        "36": 36,
        "9": 9,
        "undefined": undefined
    }],
    20: [function(require, module, exports) {
        'use strict';
        var Message = require(36);
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
        "36": 36,
        "undefined": undefined
    }],
    21: [function(require, module, exports) {
        'use strict';
        var Message = require(36);
        var inherits = require('util').inherits;
        var bitcore = require('bitcore-lib');
        var utils = require(37);
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
        "36": 36,
        "37": 37,
        "undefined": undefined
    }],
    22: [function(require, module, exports) {
        'use strict';
        var Message = require(36);
        var inherits = require('util').inherits;
        var bitcore = require('bitcore-lib');
        var utils = require(37);
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
        "36": 36,
        "37": 37,
        "undefined": undefined
    }],
    23: [function(require, module, exports) {
        'use strict';
        var Message = require(36);
        var inherits = require('util').inherits;
        var bitcore = require('bitcore-lib');
        var utils = require(37);
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
        "36": 36,
        "37": 37,
        "undefined": undefined
    }],
    24: [function(require, module, exports) {
        'use strict';
        var Message = require(36);
        var inherits = require('util').inherits;
        var bitcore = require('bitcore-lib');
        var utils = require(37);
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
        "36": 36,
        "37": 37,
        "undefined": undefined
    }],
    25: [function(require, module, exports) {
        'use strict';
        var Message = require(36);
        var inherits = require('util').inherits;
        var bitcore = require('bitcore-lib');
        var utils = require(37);
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
        "36": 36,
        "37": 37,
        "undefined": undefined
    }],
    26: [function(require, module, exports) {
        'use strict';
        var Message = require(36);
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
        "36": 36,
        "undefined": undefined
    }],
    27: [function(require, module, exports) {
        'use strict';
        var Message = require(36);
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
        "36": 36,
        "undefined": undefined
    }],
    28: [function(require, module, exports) {
        'use strict';
        var Message = require(36);
        var inherits = require('util').inherits;
        var bitcore = require('bitcore-lib');
        var utils = require(37);
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
        "36": 36,
        "37": 37,
        "undefined": undefined
    }],
    29: [function(require, module, exports) {
        'use strict';
        var Message = require(36);
        var inherits = require('util').inherits;
        var bitcore = require('bitcore-lib');
        var utils = require(37);
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
        "36": 36,
        "37": 37,
        "undefined": undefined
    }],
    30: [function(require, module, exports) {
        'use strict';
        var Message = require(36);
        var inherits = require('util').inherits;
        var bitcore = require('bitcore-lib');
        var utils = require(37);
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
        "36": 36,
        "37": 37,
        "undefined": undefined
    }],
    31: [function(require, module, exports) {
        'use strict';
        var Message = require(36);
        var inherits = require('util').inherits;
        var bitcore = require('bitcore-lib');
        var utils = require(37);
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
        "36": 36,
        "37": 37,
        "undefined": undefined
    }],
    32: [function(require, module, exports) {
        'use strict';
        var Message = require(36);
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
        "36": 36,
        "undefined": undefined
    }],
    33: [function(require, module, exports) {
        'use strict';
        var Message = require(36);
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
        "36": 36,
        "undefined": undefined
    }],
    34: [function(require, module, exports) {
        'use strict';
        var Message = require(36);
        var inherits = require('util').inherits;
        var bitcore = require('bitcore-lib');
        var BufferWriter = bitcore.encoding.BufferWriter;
        var BufferReader = bitcore.encoding.BufferReader;
        var BN = bitcore.crypto.BN;
        var utils = require(37);
        var packageInfo = require(40);

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
        "36": 36,
        "37": 37,
        "40": 40,
        "undefined": undefined
    }],
    35: [function(require, module, exports) {
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
        Messages.Message = require(36);
        Messages.builder = require(13);
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
        "13": 13,
        "36": 36,
        "undefined": undefined
    }],
    36: [function(require, module, exports) {
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
    37: [function(require, module, exports) {
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
    38: [function(require, module, exports) {
        'use strict';
        var Buffers = require(10);
        var EventEmitter = require('events').EventEmitter;
        var Net = require('net');
        var Socks5Client = require('socks5-client');
        var bitcore = require('bitcore-lib');
        var Networks = bitcore.Networks;
        var Messages = require(35);
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
        "10": 10,
        "35": 35,
        "undefined": undefined
    }],
    39: [function(require, module, exports) {
        'use strict';
        var dns = require('dns');
        var EventEmitter = require('events').EventEmitter;
        var bitcore = require('bitcore-lib');
        var sha256 = bitcore.crypto.Hash.sha256;
        var Peer = require(38);
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
        "38": 38,
        "undefined": undefined
    }],
    40: [function(require, module, exports) {
        module.exports = {
            "name": "bitcore-p2p",
            "version": "1.1.0",
            "description": "Interface to the bitcoin P2P network for bitcore"
        }
    }, {}],
    41: [function(require, module, exports) {
        'use strict';
        Object.defineProperty(exports, "__esModule", {
            value: true
        });
        var _crypto = require('crypto');
        var _lodash = require('lodash');
        var _appConfig = require(6);
        var _configKeys = require(43);
        var configKeys = _interopRequireWildcard(_configKeys);

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
        exports.default = defaultConfig;

    }, {
        "43": 43,
        "6": 6,
        "undefined": undefined
    }],
    42: [function(require, module, exports) {
        'use strict';
        Object.defineProperty(exports, "__esModule", {
            value: true
        });
        exports.writeConfig = exports.readConfig = exports.default = exports.getConfigFile = exports.FILE = undefined;
        let readConfig = exports.readConfig = (() => {
            var _ref = _asyncToGenerator(function*() {
                const cfgFile = getConfigFile();
                try {
                    const cfgData = yield _fsExtra2.default.readJson(cfgFile);
                    const c = new Config();
                    c._data = cfgData;
                    return c;
                } catch (err) {
                    console.error(err);
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
        var _env = require(44);
        var _appConfig = require(6);
        var _path = require('path');
        var _path2 = _interopRequireDefault(_path);
        var _fsExtra = require('fs-extra');
        var _fsExtra2 = _interopRequireDefault(_fsExtra);
        var _configDefault = require(41);
        var _configDefault2 = _interopRequireDefault(_configDefault);

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
                return new Config(_configDefault2.default);
            }
            get(fieldPath) {
                let value = (0, _lodash.get)(this._data.data, fieldPath);
                if (value === undefined) value = (0, _lodash.get)(_configDefault2.default, fieldPath);
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
        "41": 41,
        "44": 44,
        "6": 6,
        "undefined": undefined
    }],
    43: [function(require, module, exports) {
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

    }, {}],
    44: [function(require, module, exports) {
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
        var _paths = require(7);

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
        "7": 7,
        "undefined": undefined
    }],
    45: [function(require, module, exports) {
        'use strict';
        hookNodePath();
        require(3);
        require('core-js/fn/symbol');
        require('babel' + '-register')({
            resolveModuleSource: require(46).resolve,
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
        "46": 46,
        "undefined": undefined
    }],
    46: [function(require, module, exports) {
        'use strict';
        var babelResolve = require('babel-resolve');
        var resolver = babelResolve.create('#', './src/app/_local_modules');
        module.exports = resolver;

    }, {
        "undefined": undefined
    }],
    47: [function(require, module, exports) {
        'use strict';
        if ("production" === 'production') {
            require(3);
            require('core-js/fn/symbol');
        } else if ("production" === 'development') {
            require(45);
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
        "45": 45,
        "undefined": undefined
    }],
    48: [function(require, module, exports) {
        'use strict';
        const networks = require(51);
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
        "51": 51
    }],
    49: [function(require, module, exports) {
        'use strict';
        require(47);
        require(48);
        require(53);

    }, {
        "47": 47,
        "48": 48,
        "53": 53
    }],
    50: [function(require, module, exports) {
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
                const coinData = _coininfo2.default[coinName];
                const network = coinData.main.toBitcore();
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
        var _bitcoreP2p = require(8);
        var _bitcoreLib = require('bitcore-lib');
        var _lruCache = require('lru-cache');
        var _lruCache2 = _interopRequireDefault(_lruCache);
        var _lodash = require('lodash');
        var _coininfo = require('coininfo');
        var _coininfo2 = _interopRequireDefault(_coininfo);
        var _events = require('events');
        var _nodecount = require(52);
        var _nodecount2 = _interopRequireDefault(_nodecount);

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
                protocolVersion: 70206,
                maxNodes: (0, _nodecount2.default)('dash')
            },
            litecoin: {
                protocolVersion: 70003,
                maxNodes: (0, _nodecount2.default)('litecoin')
            }
        };

    }, {
        "52": 52,
        "8": 8,
        "undefined": undefined
    }],
    51: [function(require, module, exports) {
        'use strict';
        Object.defineProperty(exports, "__esModule", {
            value: true
        });
        exports.litecoin = exports.dash = exports.bitcoin = undefined;
        var _bitcoinLike = require(50);
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
        "50": 50
    }],
    52: [function(require, module, exports) {
        'use strict';
        Object.defineProperty(exports, "__esModule", {
            value: true
        });
        exports.default = function(asset) {
            return config.get(`p2p.${asset}.maxNodes`) || 3;
        };
        var _configFile = require(42);
        const config = (0, _configFile.readConfigSync)();

    }, {
        "42": 42
    }],
    53: [function(require, module, exports) {
        'use strict';
        var _electron = require('electron');
        var _electronIpcBroadcast = require('electron-ipc-broadcast');
        var _electronIpcBroadcast2 = _interopRequireDefault(_electronIpcBroadcast);
        var _networks = require(51);
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
        "51": 51,
        "undefined": undefined
    }],
    54: [function(require, module, exports) {
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
    55: [function(require, module, exports) {
        module.exports = {
            "name": "exodus",
            "productName": "Exodus",
            "version": "1.43.4",
            "description": "Secure, manage, and trade blockchain assets."
        }
    }, {}]
}, {}, [49]);