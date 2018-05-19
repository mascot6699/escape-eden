/* eslint-disable no-extend-native */
var string = require('./string')

Object.keys(string).forEach((key) => {
    if (String.prototype[key]) return
    Object.defineProperty(String.prototype, key, {
        enumerable: false,
        configurable: true,
        writable: true,
        value: string[key]
    })
})