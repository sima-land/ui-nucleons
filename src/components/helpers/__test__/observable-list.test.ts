import ObservableList from '../observable-list';

describe('ObservableList', () => {
  it('should return object with specific structure', () => {
    const list = ObservableList();
    expect(typeof list.get).toBe('function');
    expect(typeof list.getLength).toBe('function');
    expect(typeof list.enqueue).toBe('function');
    expect(typeof list.dequeue).toBe('function');
    expect(typeof list.remove).toBe('function');
    expect(typeof list.subscribe).toBe('function');
  });
  it('get() method should works properly', () => {
    const list = ObservableList();
    expect(list.get(0)).toBe(undefined);
    list.enqueue(123);
    expect(list.get(0)).toBe(123);
    list.enqueue(234);
    expect(list.get(0)).toBe(123);
    expect(list.get(1)).toBe(234);
  });
  it('getLength() method should works properly', () => {
    const list = ObservableList();
    expect(list.getLength()).toBe(0);
    list.enqueue(123);
    expect(list.getLength()).toBe(1);
    list.enqueue(234);
    expect(list.getLength()).toBe(2);
  });
  it('enqueue() method should works properly', () => {
    const list = ObservableList();
    expect(list.getLength()).toBe(0);
    let length = list.enqueue(123);
    expect(list.getLength()).toBe(1);
    expect(list.getLength()).toBe(length);
    length = list.enqueue(234);
    expect(list.getLength()).toBe(2);
    expect(list.getLength()).toBe(length);
  });
  it('dequeue() method should works properly', () => {
    const list = ObservableList([1, 2, 3, 4]);
    expect(list.getLength()).toBe(4);
    list.dequeue();
    list.dequeue();
    expect(list.getLength()).toBe(2);
    expect(list.get(0)).toBe(3);
    expect(list.get(1)).toBe(4);
  });
  it('remove() method should works properly', () => {
    const list = ObservableList([1, 2, 3, 4]);
    list.remove(2);
    expect(list.getLength()).toBe(3);
    expect(list.get(0)).toBe(1);
    expect(list.get(1)).toBe(3);
    expect(list.get(2)).toBe(4);
  });
  it('subscribe() method should works properly', () => {
    const spy = jest.fn();
    const list = ObservableList([1, 2, 3, 4, 5, 6]);
    const unsubscribe = list.subscribe(spy);

    expect(spy).toHaveBeenCalledTimes(0);
    list.enqueue(7);
    expect(spy).toHaveBeenCalledTimes(1);
    list.dequeue();
    expect(spy).toHaveBeenCalledTimes(2);
    list.remove(2);
    expect(spy).toHaveBeenCalledTimes(3);
    list.get(0);
    expect(spy).toHaveBeenCalledTimes(3);
    list.getLength();
    expect(spy).toHaveBeenCalledTimes(3);

    unsubscribe();
    expect(spy).toHaveBeenCalledTimes(3);
    list.enqueue(10);
    list.dequeue();
    list.remove(3);
    expect(spy).toHaveBeenCalledTimes(3);
  });
  it('list should be iterable', () => {
    const list = ObservableList([1, 2, 3, 4, 5, 6]);
    expect([...list]).toEqual([1, 2, 3, 4, 5, 6]);
  });
});
