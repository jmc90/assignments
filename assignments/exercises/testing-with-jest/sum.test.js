var sum = require('./sum')


describe("the sum function", function(){

    it("should only recieve numbers as inputs", function() {
        expect(sum('a', true)).toBe("Please provide two numbers")
        expect(sum(4, 'string')).toBe("Please provide two numbers")
    })


    test("adds 1 + 2 to equal 3", function() {
        expect(sum(1, 2)).toBe(3)
    })

    it("should return a number", function() {
        expect(typeof sum(3, 4)).toBe("number")
        expect(typeof sum(10, 6)).toBe("number")
        expect(typeof sum("1", true)).not.toBe("number")
    })

})