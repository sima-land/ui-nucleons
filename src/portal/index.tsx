import { FC, ReactNode, useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import { useIsomorphicLayoutEffect } from '../hooks';

export interface PortalProps {
  /** Вернет элемент, в который нужно вывести содержимое через портал. */
  defineRoot?: () => HTMLElement;

  /** Содержимое. */
  children?: ReactNode;
}

/**
 * Компонент слоя. Выводит содержимое в портале.
 * @param props Свойства.
 * @return Элемент.
 */
export const Portal: FC<PortalProps> = ({ children, defineRoot = () => document.body }) => {
  const [mounted, setMounted] = useState<boolean>(false);
  const ref = useRef<HTMLDivElement>();

  useIsomorphicLayoutEffect(() => {
    const root = defineRoot();

    ref.current = document.createElement('div');

    root.appendChild(ref.current);
    setMounted(true);

    return () => {
      ref.current && ref.current.remove();
    };
  }, []);

  return mounted && ref.current ? createPortal(children, ref.current) : null;
};
