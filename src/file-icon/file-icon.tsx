import type { FileIconProps } from './types';
import cx from 'classnames';
import styles from './file-icon.m.scss';

export const KNOWN_TYPES = [
  'avi',
  'doc',
  'docx',
  'heic',
  'jpg',
  'mov',
  'mp3',
  'mp4',
  'pdf',
  'png',
  'rtf',
  'txt',
  'xls',
  'xlsx',
  'xml',
  'zip',
  'broken',
] as const;

/**
 * Проверяет тип файла.
 * @param type Тип.
 * @return Признак.
 */
const isKnownType = (type?: string): type is (typeof KNOWN_TYPES)[number] =>
  KNOWN_TYPES.some(knownType => knownType === type);

/**
 * Иконка файла.
 * @param props Свойства. Поддерживаются свойства <svg />.
 * @return Элемент.
 */
export function FileIcon({ type, isTypeVisible = isKnownType(type), ...svgProps }: FileIconProps) {
  let element = (
    /* текст */
    <text x='16' y='23' textAnchor='middle' fontSize='6.5' fontWeight='700' fill='#fff'>
      {type?.toUpperCase()}
    </text>
  );

  if (isKnownType(type) && type === 'broken') {
    element = (
      /* иконка Stroked/Cross без обертки в виде <svg /> */
      <path
        d='M12.7071 4.70711C13.0976 4.31658 13.0976 3.68342 12.7071 3.29289C12.3166 2.90237 11.6834 2.90237 11.2929 3.29289L8 6.58579L4.70711 3.29289C4.31658 2.90237 3.68342 2.90237 3.29289 3.29289C2.90237 3.68342 2.90237 4.31658 3.29289 4.70711L6.58579 8L3.29289 11.2929C2.90237 11.6834 2.90237 12.3166 3.29289 12.7071C3.68342 13.0976 4.31658 13.0976 4.70711 12.7071L8 9.41421L11.2929 12.7071C11.6834 13.0976 12.3166 13.0976 12.7071 12.7071C13.0976 12.3166 13.0976 11.6834 12.7071 11.2929L9.41421 8L12.7071 4.70711Z'
        fill='#9e9e9e'
        transform='translate(8,12)'
      />
    );
  }

  return (
    <svg width='32' height='32' viewBox='0 0 32 32' {...svgProps}>
      {/* основная фигура */}
      <path
        className={cx(styles.main, type && styles[type])}
        opacity='0.88'
        d='M6 5C6 3.89543 6.89543 3 8 3H20L26 9V27C26 28.1046 25.1046 29 24 29H8C6.89543 29 6 28.1046 6 27V5Z'
      />

      {/* уголок */}
      <path opacity='0.32' d='M21 9L26 9L20 3L20 8C20 8.55229 20.4477 9 21 9Z' fill='#fff' />
      <path
        opacity='0.24'
        d='M25.1667 9L21 9L26 15L26 9C25.5833 9 25.6269 9 25.1667 9Z'
        fill='black'
      />

      {isTypeVisible ? (
        element
      ) : (
        /* заглушка текста */
        <g opacity='0.8'>
          <path d='M9 22H23V24H9V22Z' fill='#fff' />
          <path d='M9 18H19V20H9V18Z' fill='#fff' />
        </g>
      )}
    </svg>
  );
}
