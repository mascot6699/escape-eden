var config = {
    // URL of api server
    apiUrl: "http://127.0.0.1:8080/",

    // Number of atomic units in one unit of currency. e.g. 12 => 10^12 = 1000000000000
    coinUnitPlaces: 12,

    // Minimum number of confirmations for a transaction to show as confirmed
    txMinConfirms: 10,

    // Currency symbol
    coinSymbol: 'XMR',

    // OpenAlias prefix
    openAliasPrefix: "xmr",

    // Currency name
    coinName: 'Monero',

    // Payment URI Prefix
    coinUriPrefix: 'monero:',

    // Prefix code for addresses
    addressPrefix: 18, // 18 => addresses start with "4"
    integratedAddressPrefix: 19,

    // Network per kb fee in atomic units
    feePerKB: new JSBigInt('10000000000'),

    // Dust threshold in atomic units
    // 10^10 used for choosing outputs/change - we decompose all the way down if the receiver wants now regardless of threshold
    dustThreshold: new JSBigInt('10000000000'),

    // Service fee relative to tx fee (0.5 => 50%)
    txChargeRatio: 0.5,

    // Default number of mixins
    defaultMixin: 3,

    // Address to send service fee to
    txChargeAddress: '42LUcizuzdwDb3bVnN2G3sTwV77EFiPqLHPZMs7Vk7dnRBmv62McQxHhuD6WLtCJVaf4aXGyR2GbtRjeWTWBhAYG6kiPL5L',

    // Logout after x minutes idle
    idleTimeout: 10,

    // Give user x seconds of warning before idle timeout
    idleWarningDuration: 20,

    // Maximum block number, used for tx unlock time
    maxBlockNumber: 500000000,

    // Average block time in seconds, used for unlock time estimation
    avgBlockTime: 60,

    // Testing/debugging options
    debugMode: false
};
