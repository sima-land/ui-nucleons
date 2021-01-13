import { IDS } from '../presets';
import { defineCountry } from '../utils';

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
