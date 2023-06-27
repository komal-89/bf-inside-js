import { reverse } from './reverse.js';

describe('reverse -string', () => {
  it('hello => olleh', () => {
    const actual = reverse('hello');
    expect(actual).toEqual('olleh');
  });
  it(' default params', () => {
    const actual = reverse();
    expect(actual).toEqual('');
  });
});
