import React from 'react';

/**
 * Декорирует переданную функцию-обработчик события останавливая его при перехвате.
 * @param callback Функция перехвата события.
 * @return Декорированная функция.
 */
const withPrevent =
  <T extends Event | React.SyntheticEvent>(callback?: (e: T) => void) =>
  (event: T) => {
    event.preventDefault();
    event.stopPropagation();
    callback?.(event);
  };

export default withPrevent;
