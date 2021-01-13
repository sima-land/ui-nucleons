import { countries, countriesList, IDS } from './presets';

/**
 * Определяет страну по номеру телефона.
 * @param {string} value Значение.
 * @return {Object} Данные маски страны.
 */
export const defineCountry = value => {
  let result;

  if (value) {
    result = countriesList.find(({ codeChars }) => value.indexOf(codeChars) === 0);

    if (result.id === IDS.russia && ['6', '7'].includes(value[1])) {
      result = countries.kazakhstan;
    }
  }

  return result || countries.russia;
};
