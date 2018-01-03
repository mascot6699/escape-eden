function values(obj) {
    return Object.keys(obj).map((key) => {
        return obj[key]
    })
}

module.exports = {
    values
}