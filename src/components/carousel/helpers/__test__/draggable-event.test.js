import DraggableEvent from '../draggable-event';

describe('DraggableEvent', () => {
  it('should handle props', () => {
    const event = new DraggableEvent({
      client: 'test-client',
      offset: 'test-offset',
    });
    expect(event.client).toBe('test-client');
    expect(event.offset).toBe('test-offset');
  });
  it('preventDefault should works properly', () => {
    const event = new DraggableEvent({
      client: 'test-client',
      offset: 'test-offset',
    });
    expect(event.prevented).toBe(false);
    event.preventDefault();
    expect(event.prevented).toBe(true);
  });
});
