import { IDS } from '../presets';
import { defineCountry, stubSyntheticEvent } from '../utils';

describe('defineCountry', () => {
  it('should define countries', () => {
    [
      { value: '78005553535', countryId: IDS.russia },
      { value: '76005004030', countryId: IDS.kazakhstan },
      { value: '992124124124', countryId: IDS.tajikistan },
    ].forEach(({ value, countryId }) => {
      expect(defineCountry(value).id).toBe(countryId);
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
