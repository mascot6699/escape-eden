import test from '#_test'
import {
    values
} from '../object'
import '../'

test('return values from an object map', function(t) {
    let vals = values({
        first: 'jp',
        last: 'richardson'
    })
    t.same(vals, ['jp', 'richardson'], 'values from object')

    let vals2 = Object.values({
        first: 'jp',
        last: 'richardson'
    })
    t.same(vals2, ['jp', 'richardson'], 'values from object')
    t.end()
})