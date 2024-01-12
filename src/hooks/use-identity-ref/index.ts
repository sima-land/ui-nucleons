import { useRef } from 'react';

/**
 * Реф с актуальным переданным значением.
 * Нужен, когда в ref нужно обновлять значение при каждом рендере.
 * @param value Значение.
 * @return Реф.
 */
export function useIdentityRef<T>(value: T) {
  const ref = useRef<T>(value);

  ref.current = value;

  return ref;
}
