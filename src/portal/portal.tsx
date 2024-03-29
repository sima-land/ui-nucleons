import type { PortalProps } from './types';
import { useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import { useIsomorphicLayoutEffect } from '../hooks';

/**
 * Портал - выводит содержимое в портале в произвольную часть DOM.
 * @param props Свойства.
 * @return Элемент.
 */
export function Portal({ children, defineRoot = () => document.body, onMount }: PortalProps) {
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

  const onMountRef = useRef(onMount);

  onMountRef.current = onMount;

  useIsomorphicLayoutEffect(() => {
    if (mounted) {
      onMountRef.current?.();
    }
  }, [mounted]);

  return mounted && ref.current ? createPortal(children, ref.current) : null;
}
