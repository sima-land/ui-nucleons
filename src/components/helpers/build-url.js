import { USER_DEFAULT_PARAMS } from '../constants';

/**
 * Подставляет корректный знак перед get-параметром.
 * @param {string} url Url.
 * @param {string} param Параметр для добавления.
 * @return {string} Get-параметр с корректным знаком.
 */
export const buildGetParameter = (url, param) => {
  const parameterSign = url.includes('?') ? '&' : '?';
  return `${parameterSign}${param}`;
};
/**
 * Добавляет get-параметры.
 * @param {string} url Url.
 * @param {Object} urlParams Пользовательские параметры для формирования URL-а.
 * @return {string} Ссылка с get-параметрами.
 */
export const addGetParameters = (url, urlParams = {}) => {
  const { sort, perPage, viewtype } = urlParams;
  // Если идем на страницу поиска, или сортировка уже присутствует в урле, то опустим сортировку
  if (sort && USER_DEFAULT_PARAMS.sort !== sort && !url.includes('/search/?q=') && !url.includes('sort=')) {
    url += buildGetParameter(url, `sort=${sort}`);
  }
  if (perPage && USER_DEFAULT_PARAMS.per_page !== perPage && !url.includes('per-page=')) {
    url += buildGetParameter(url, `per-page=${perPage}`);
  }
  if (viewtype && USER_DEFAULT_PARAMS.viewtype !== viewtype && !url.includes('viewtype=')) {
    url += buildGetParameter(url, `viewtype=${viewtype}`);
  }
  return url;
};

/**
 * Формирует URL с параметрами пользователя.
 * @param {string} url Исходный URL.
 * @param {Object} urlParams Пользовательские параметры для формирования URL-а.
 * @param {boolean} external Является ли ссылкой на внешний ресурс.
 * @param {string} anchor Якорь.
 * @return {string} Ссылка с параметрами или пустая строка.
 */
export const buildURL = ({ url = '', urlParams = {}, external = false, anchor = '' } = {}) => {
  let result = '';
  if (typeof url === 'string' && url.length) {
    let linkHref = url;
    if (!external) {
      // проверка на url вида http://valentinesday.sima-land.ru/
      if (url.match(/http[s]?:\/\/(\w*.)sima-land.ru/g)) {
        linkHref = url;
      } else if (url.indexOf('sima-land.ru') > -1) {
        linkHref = `https://www.${url.substring(url.indexOf('sima-land.ru'))}`;
      }
      linkHref = addGetParameters(linkHref, urlParams);
    }
    if (typeof anchor === 'string' && anchor.length) {
      linkHref = `${linkHref}#${anchor}`;
    }
    result = linkHref;
  }
  return result;
};
