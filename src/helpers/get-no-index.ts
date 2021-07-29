import { toString } from 'lodash';

/**
 * Возвращает объект с исходной строкой в тэге <!--noindex--> для запрета отслеживания контента поисковиками.
 * @param str Исходная строка.
 * @return Объект, содержащий обернутую строку, для использования c атрибутом dangerouslySetInnerHTML.
 */
export const getNoIndex = (str: any) =>
  str ? { __html: `<!--noindex-->${toString(str)}<!--/noindex-->` } : undefined;
