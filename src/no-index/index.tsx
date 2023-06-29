import { NoIndexMark } from '../no-index-mark';

export interface NoIndexProps {
  /** Содержимое. */
  children?: React.ReactNode;
}

/**
 * Компонент отображает неиндексируемый контент.
 * @param props Свойства.
 * @return Элемент.
 */
export const NoIndex: React.FC<NoIndexProps> = ({ children }) => (
  <>
    <NoIndexMark />
    {children}
    <NoIndexMark closing />
  </>
);
