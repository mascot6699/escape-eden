/* eslint-disable no-extend-native */
var array = require('./array')
var object = require('./object')
var string = require('./string')

Object.keys(array).forEach((key) => {
    if (Array.prototype[key]) return
    Object.defineProperty(Array.prototype, key, {
        enumerable: false,
        configurable: true,
        writable: true,
        value: array[key]
    })
})

Object.keys(object).forEach((key) => {
    if (Object.prototype[key]) return
    Object.defineProperty(Object.prototype, key, {
        enumerable: false,
        configurable: true,
        writable: true, // looks like React wants to write over this as well
        value: object[key]
    })
})

Object.keys(string).forEach((key) => {
    if (String.prototype[key]) return
    Object.defineProperty(String.prototype, key, {
        enumerable: false,
        configurable: true,
        writable: true,
        value: string[key]
    })
})