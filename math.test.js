const { addition } = require('./addition'); 


test('2 + 3 = 5', () =>{
    expect(addition(2,3)).toBe(5)
})

test('0 + 0 = 0', () => {
    expect(addition(0, 0)).toBe(0);
});

test('-1 + -1 = -2', () => {
    expect(addition(-1, -1)).toBe(-2);
});

test('5.5 + 4.5 = 10', () => {
    expect(addition(2.5, 3.5)).toBe(6);
});