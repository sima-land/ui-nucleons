import isEqual from 'lodash/isEqual';
import { useEffect, useRef, useMemo } from 'react';

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
