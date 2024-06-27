import { defaultGetDefaultMask, stubSyntheticEvent } from '../utils';
import { masks as defaults } from '../preset/defaults';
import { masks as defaultsImportSvg } from '../preset/defaults-import-png';

describe('defaultGetDefaultMask', () => {
  const dataset = [
    {
      title: 'defaults',
      data: defaults,
    },
    {
      title: 'defaults-import-png',
      data: defaultsImportSvg,
    },
  ];

  for (const { title, data } of dataset) {
    it(`should define countries [${title}]`, () => {
      [
        { value: '78005553535', countryId: 'russia' },
        { value: '76005004030', countryId: 'kazakhstan' },
        { value: '992124124124', countryId: 'tajikistan' },
      ].forEach(({ value, countryId }) => {
        expect(defaultGetDefaultMask({ value, masks: data })?.id).toBe(countryId);
      });
    });

    it(`should return exact item of array [${title}]`, () => {
      const result = defaultGetDefaultMask({ value: '78005553535', masks: data });

      expect(result && data.includes(result)).toBe(true);
    });
  }
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
