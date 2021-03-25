import { getMonogram } from '../utils';

describe('getMonogram()', () => {
  it('getMonogram should return correct result', () => {
    expect(getMonogram('John Doe')).toEqual('DJ');
    expect(getMonogram('John')).toEqual('J');
    expect(getMonogram('John ')).toEqual('J');
    expect(getMonogram('Hello World Foo Bar Baz')).toEqual('WH');
    expect(getMonogram('Лорд Командующий')).toEqual('КЛ');
    expect(getMonogram('лорд командующий')).toEqual('КЛ');
    expect(getMonogram('')).toEqual('');
    expect(getMonogram(123)).toEqual('');
    expect(getMonogram(null)).toEqual('');
    expect(getMonogram(undefined)).toEqual('');
  });
});
