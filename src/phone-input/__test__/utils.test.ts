import { defaultGetDefaultMask, stubSyntheticEvent } from '../utils';
import { masks } from '../preset/defaults';

describe('defaultGetDefaultMask', () => {
  it('should define countries', () => {
    [
      { value: '78005553535', countryId: 'russia' },
      { value: '76005004030', countryId: 'kazakhstan' },
      { value: '992124124124', countryId: 'tajikistan' },
    ].forEach(({ value, countryId }) => {
      expect(defaultGetDefaultMask({ value, masks })?.id).toBe(countryId);
    });
  });
});

describe('stubSyntheticEvent', () => {
  it('should return event with methods', () => {
    const event = stubSyntheticEvent(document.createElement('div'), new Event('test'));

    expect(() => {
      event.persist();
      event.preventDefault();
      event.stopPropagation();
      event.persist();
    }).not.toThrow();

    expect(event.defaultPrevented).toBe(false);
    expect(event.isDefaultPrevented()).toBe(false);
    expect(event.isPropagationStopped()).toBe(false);
  });
});
