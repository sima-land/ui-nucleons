import classNames from 'classnames/bind';

/**
 * Объединяет пользовательские классы с классами по умолчанию.
 * @param {Object} defaultClasses Классы по умолчанию.
 * @param {Object} customClasses Пользовательские классы.
 * @return {Object} Объект с объединенными классами.
 */
const composeClasses = ({ defaultClasses, customClasses }) =>
  Object.keys({ ...customClasses, ...defaultClasses })
    .reduce((result, key) => {
      result[key] = classNames(customClasses[key], defaultClasses[key]);
      return result;
    }, {});

export default composeClasses;
