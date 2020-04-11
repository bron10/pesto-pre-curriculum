const {describe,
expect,
it}        = require('./framework');
const {add,
subtract,
multiply,
divide} = require('./index');

describe("Testing operations", ()=>{
    it('Add two numbers', () => {
        const result = add(1, 2)
        expect(result).toBe(3)
    })

    it('subtract` two numbers', () => {
        const result = subtract(4,3)
        expect(result).toBe(1)
    })

    it('multiply two numbers', () => {
        const result = multiply(1, 2)
        expect(result).toBe(2)
    })

    it('Divide two numbers', () => {
        const result = divide(4, 2)
        expect(result).toBe(2)
    })
})