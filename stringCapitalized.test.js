const {stringCapitalized} = require('./stringCapitalized')

test('should be first Letter capitalized', () => {
    expect(stringCapitalized("natanim")).toBe('Natanim')
});