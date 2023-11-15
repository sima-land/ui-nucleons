import type { NoIndexMarkProps } from './types';

/**
 * Неиндексируемый контент.
 * @param props Свойства.
 * @return Элемент.
 */
export function NoIndexMark({ type = 'open' }: NoIndexMarkProps) {
  if (type === 'open') {
    return <span dangerouslySetInnerHTML={{ __html: '<!--noindex-->' }} />;
  }

  if (type === 'close') {
    return <span dangerouslySetInnerHTML={{ __html: '<!--/noindex-->' }} />;
  }

  return null;
}
