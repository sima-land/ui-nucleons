export interface NoIndexMarkProps {
  /** Флаг закрывающегося тэга. */
  closing?: boolean;
}

/**
 * Компонент отображает неиндексируемый контент.
 * @param props Свойства.
 * @return Элемент.
 */
export const NoIndexMark = ({ closing }: NoIndexMarkProps) => (
  <span dangerouslySetInnerHTML={{ __html: `<!--${closing ? '/' : ''}noindex-->` }} />
);
