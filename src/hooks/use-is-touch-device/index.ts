import { useEffect, useState } from 'react';
import { isTouchDevice } from '../../helpers/is-touch-device';

/**
 * При монтировании проверяет, поддерживает ли устройство touch события.
 * @return True - если поддерживает, false - если нет.
 */
export function useIsTouchDevice() {
  const [isTouch, setTouch] = useState<boolean>(false);

  useEffect(() => {
    setTouch(isTouchDevice());
  }, []);

  return isTouch;
}
