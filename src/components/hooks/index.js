import isEqual from 'lodash/isEqual';
import { useEffect, useRef, useMemo, useState } from 'react';
import { isTouchDevice } from '../helpers/is-touch-device';

/**
 * Вызывает переданную функцию при монтировании компонента.
 * @param {Function} callback Функция обратного вызова.
 */
export const useOnMount = callback => {
  useEffect(callback, []);
};

/**
 * Расширенная версия useMemo, передающая зависимости внутрь callback'а.
 * @inheritdoc
 */
export const useApplyMemo = (computeValue, dependencies) => {
  const memoContainer = useRef(() => computeValue(dependencies));
  const dependenciesContainer = useRef(dependencies);

  if (!isEqual(dependencies, dependenciesContainer.current)) {
    dependenciesContainer.current = dependencies;
    memoContainer.current = () => computeValue(dependencies);
  }

  return useMemo(memoContainer.current, dependencies);
};

/**
 * При монтировании проверяет, поддерживает ли устройство touch события.
 * @return {boolean} True - если поддерживает, false - если нет.
 */
export const useIsTouchDevice = () => {
  const [isTouch, setTouch] = useState(false);

  useOnMount(() => {
    setTouch(isTouchDevice());
  });

  return isTouch;
};
