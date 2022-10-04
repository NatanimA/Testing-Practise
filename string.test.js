const {stringLength , stringReverse} = require('./strings')

describe('Checks string length and string reverse', () => {
    test('string length', () => {
        expect(stringLength('Natanim')).toBe(7)
    })

    test('string reverse', () => {
        expect(stringReverse('natanim')).toBe('minatan')
    })
})