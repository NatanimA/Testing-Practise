const Calculator = require('./calculator')

describe('Calculator functions testing', () => {
    const calc = new Calculator(10,15)

    test('should be adding', () => {
        expect((calc.add(10,15))).toEqual(25)
    });

    test('should be subtracting', () => {
        expect((calc.subtract(10, 15))).toEqual(-5)
    });

    test('should be multiplying', () => {
        expect((calc.multiply(10, 15))).toEqual(150)
    });

    test('should be dividing', () => {
        expect((calc.divide(10, 15))).toBe(1.5)
    });

})