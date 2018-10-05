import { binaryToDecimal } from './binaryToDecimal';

describe('binaryToDecimal', () => {
  it('decimal of 63 is 111111', () => {
    expect(binaryToDecimal(111111)).toEqual(63);
  });

  it('decimal of 37 is 100101', () => {
    expect(binaryToDecimal(100101)).toEqual(37);
  });

  it('decimal of 77 is 1001101', () => {
    expect(binaryToDecimal(1001101)).toEqual(77);
  });
});