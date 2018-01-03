function foreach(values, callback) {
    for (var i = 0; i < values.length; i++) {
        callback.call(this, values[i]);
    }
}

// Workaround for karma-jasmine not adding beforeAll and afterAll to global scope
if (window.beforeAll === undefined) {
    var env = jasmine.getEnv();
    window.beforeAll = env.beforeAll;
    window.afterAll = env.afterAll;
    window.fail = env.fail;
}