import toString from 'lodash/toString';

/**
 * Возвращает объект с исходной строкой в тэге <!--noindex--> для запрета отслеживания контента поисковиками.
 * @param {string} str Исходная строка.
 * @return {Object} Объект, содержащий обернутую строку, для использования c атрибутом dangerouslySetInnerHTML.
 */
export const getNoIndex = (str: any) => str
  ? { __html: `<!--noindex-->${toString(str)}<!--/noindex-->` }
  : undefined;
