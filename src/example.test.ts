describe('Example Tests', ()=> {
    test('Should return 2 when we add 1 and 1', () => {
        expect(1+1).toBe(2);
    });
    describe('New nested test description', ()=> {
        test('impossible to put describe into test', () => {
            expect(1+1).toBe(2);
        });
    })
})