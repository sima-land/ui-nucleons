export interface NoIndexMarkProps {
  /** Флаг закрывающегося тэга. */
  closing?: boolean;
}

const open = '<!--noindex-->';
const close = '<!--/noindex-->';

/**
 * Span с комментарием начала или конца неиндексируемого контента.
 * @param props Свойства.
 * @return Элемент.
 */
export function NoIndexMark({ closing }: NoIndexMarkProps) {
  return <span dangerouslySetInnerHTML={{ __html: closing ? close : open }} />;
}
