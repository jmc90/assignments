var countCode = require('./index')

describe("The count code function", function() {

    test("should return a number", function() {
        expect(typeof countCode("somestring")).toBe("number")
    })

    test("should recieve a string as it's argument", function() {
        expect(countCode(9)).toBe("You must provide a string as an argument")
        expect(countCode(true)).toBe("You must provide a string as an argument")
    })

    test("should return correct code count amount", function() {
        expect(countCode("aaacodebbb")).toBe(1)
        expect(countCode("codexxcode")).toBe(2)
        expect(countCode("cozexxcope")).toBe(3)
    })

})