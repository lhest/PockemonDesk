const toCapitalizeFirstLetter = require('./toCapitalizeFirstLetter.ts');

describe('check the function Capitalize the First Letter', function () {
    test('the type is string', () => {
        const result= toCapitalizeFirstLetter('hello');
        expect.stringContaining(result);
    })
    test('the first letter will be capital', () => {

        const result= toCapitalizeFirstLetter('hello');
        expect(result).toBe('Hello')
    })

});