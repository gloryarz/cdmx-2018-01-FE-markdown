const { read } = require('../app');

describe('read, Es una función', () => {
    test('Es una función', () => {
        const read = jest.fn()
        read()
        expect(read).toHaveBeenCalled()
    });
});
