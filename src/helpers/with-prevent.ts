import { SyntheticEvent } from 'react';

/**
 * Декорирует переданную функцию-обработчик события вызывая preventDefault и stopPropagation.
 * @param callback Функция-обработчик.
 * @return Декорированная функция-обработчик.
 * @deprecated Данная функция скрывает и разделяет функционал и будет удалена в будущем.
 */
export function withEventMute<T extends Event | SyntheticEvent>(callback?: (event: T) => void) {
  return (event: T) => {
    event.preventDefault();
    event.stopPropagation(); // @todo придумать как вынести
    callback?.(event);
  };
}

/**
 * @deprecated Следует использовать именованный экспорт. Экспорт по умолчанию будет удалён в будущем.
 */
export default withEventMute;
