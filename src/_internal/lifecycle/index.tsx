import { ReactNode, useEffect } from 'react';

/**
 * Обертка, позволяющая следить за жизненным циклом компонента.
 * @param props Свойства.
 * @return Элемент.
 */
export function Lifecycle({
  children,
  onMount,
  onUnmount,
}: {
  children?: ReactNode;
  onMount?: VoidFunction;
  onUnmount?: VoidFunction;
}) {
  useEffect(() => {
    onMount?.();

    return () => {
      onUnmount?.();
    };
  }, []);

  return <>{children}</>;
}
