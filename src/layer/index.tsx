import React, { useEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';

export interface Props {

  /** Вернет элемент, в который нужно вывести содержимое через портал. */
  defineRoot?: () => HTMLElement

  /** Содержимое. */
  children?: React.ReactNode
}

export const Layer: React.FC<Props> = ({ children, defineRoot = () => document.body }) => {
  const [mounted, setMounted] = useState<boolean>(false);
  const ref = useRef<HTMLDivElement>();

  useEffect(() => {
    const root = defineRoot();

    ref.current = document.createElement('div');

    root.appendChild(ref.current);
    setMounted(true);

    return () => {
      ref.current && ref.current.remove();
    };
  }, []);

  return mounted && ref.current
    ? createPortal(children, ref.current)
    : null;
};
