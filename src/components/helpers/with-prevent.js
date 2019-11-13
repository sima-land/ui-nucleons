import isFunction from 'lodash/isFunction';

/**
 * Декорирует переданную функцию-обработчик события останавливая его при перехвате.
 * @param {Function} callback Функция перехвата события.
 * @return {Function} Декорированная функция.
 */
const withPrevent = callback => event => {
  event.preventDefault();
  event.stopPropagation();
  isFunction(callback) && callback(event);
};

export default withPrevent;
