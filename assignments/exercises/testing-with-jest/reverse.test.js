var reverse = require('./reverse')

test("returns given array iln reverse order", function() {
    expect(reverse(["hello", "world"])).toEqual(["world", "hello"])

})