import { countries, countriesList, Country, IDS } from './presets';

/**
 * Определяет страну по номеру телефона.
 * @param value Значение.
 * @return Данные маски страны.
 */
export const defineCountry = (value: string): Country => {
  let result;

  if (value) {
    result = countriesList.find(({ codeChars }) => value.indexOf(codeChars) === 0);

    if (result && result.id === IDS.russia && ['6', '7'].includes(value[1])) {
      result = countries.kazakhstan;
    }
  }

  return result || countries.russia;
};
