import { masks as defaults } from '../preset/defaults';
import { masks as defaultsImportPng } from '../preset/defaults-import-png';
import { type PhoneInputMask } from '../types';

describe('Phone input mask presets', () => {
  it('all presets should equals except imageSrc', () => {
    expect(defaults).toHaveLength(defaultsImportPng.length);

    for (let i = 0; i < defaults.length; i++) {
      const a: PhoneInputMask = {
        ...defaults[i],
        optionImageSrc: '',
      };
      const b: PhoneInputMask = {
        ...defaultsImportPng[i],
        optionImageSrc: '',
      };

      expect(a).toEqual(b);
    }
  });
});
