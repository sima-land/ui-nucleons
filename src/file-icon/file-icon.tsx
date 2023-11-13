import { FileIconProps } from './types';
import classNames from 'classnames/bind';
import styles from './file-icon.module.scss';

const cx = classNames.bind(styles);

const KNOWN_TYPES = new Set([
  'doc',
  'docx',
  'heic',
  'jpg',
  'mov',
  'mp4',
  'pdf',
  'png',
  'rtf',
  'txt',
  'xls',
  'xlsx',
  'xml',
  'zip',
]);

/**
 * Иконка файла.
 * @param props Свойства. Поддерживаются свойства <svg />.
 * @return Элемент.
 */
export function FileIcon({
  type,
  typeDisplayed = typeof type === 'string' && KNOWN_TYPES.has(type),
  ...svgProps
}: FileIconProps) {
  return type && typeDisplayed ? (
    <svg width='32' height='32' viewBox='0 0 32 32' {...svgProps}>
      {/* основная фигура */}
      <path
        className={cx('main', type.toLowerCase())}
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

      {/* текст */}
      <text x='16' y='23' textAnchor='middle' fontSize='6.5' fontWeight='700' fill='#fff'>
        {type.toUpperCase()}
      </text>
    </svg>
  ) : (
    <svg width='32' height='32' viewBox='0 0 32 32' {...svgProps}>
      {/* основная фигура */}
      <path
        className={cx('main')}
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

      {/* заглушка текста */}
      <g opacity='0.8'>
        <path d='M9 22H23V24H9V22Z' fill='#fff' />
        <path d='M9 18H19V20H9V18Z' fill='#fff' />
      </g>
    </svg>
  );
}
