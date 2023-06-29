import { COLORS } from '../colors';

const VARIANTS = {
  doc: { fill: COLORS.get('additional-electric-blue') },
  xls: { fill: COLORS.get('additional-light-green') },
  pdf: { fill: COLORS.get('additional-deep-red') },
  jpg: { fill: COLORS.get('additional-deep-orange') },
  xml: { fill: COLORS.get('additional-deep-purple') },
  zip: { fill: COLORS.get('additional-teal') },
  png: { fill: COLORS.get('additional-purple') },
  mov: { fill: COLORS.get('additional-blue-gray') },
  mp4: { fill: COLORS.get('additional-blue-gray') },
} as const;

export interface FileIconProps extends Omit<React.SVGAttributes<SVGSVGElement>, 'type'> {
  /** Тип файла. */
  type?: string;
}

/**
 * Компонент иконки файла.
 * @param props Свойства. Поддерживаются свойства <svg />.
 * @return Элемент.
 */
export const FileIcon = ({ type, ...svgProps }: FileIconProps) => {
  const typeProps = (VARIANTS as any)[type as any];

  return type && typeProps ? (
    <svg width='32' height='32' viewBox='0 0 32 32' {...svgProps}>
      <path
        opacity='0.88'
        d='M6 5C6 3.89543 6.89543 3 8 3H20L26 9V27C26 28.1046 25.1046 29 24 29H8C6.89543 29 6 28.1046 6 27V5Z'
        fill={typeProps.fill}
      />
      <path opacity='0.32' d='M21 9L26 9L20 3L20 8C20 8.55229 20.4477 9 21 9Z' fill='white' />
      <path
        opacity='0.24'
        d='M25.1667 9L21 9L26 15L26 9C25.5833 9 25.6269 9 25.1667 9Z'
        fill='black'
      />
      <text x='16' y='23' textAnchor='middle' fontSize='6.5' fontWeight='700' fill='#fff'>
        {type.toUpperCase()}
      </text>
    </svg>
  ) : (
    <svg width='32' height='32' viewBox='0 0 32 32' fill='none' {...svgProps}>
      <path
        opacity='0.88'
        d='M6 5C6 3.89543 6.89543 3 8 3H20L26 9V27C26 28.1046 25.1046 29 24 29H8C6.89543 29 6 28.1046 6 27V5Z'
        fill='#C2C2C2'
      />
      <path opacity='0.32' d='M21 9L26 9L20 3L20 8C20 8.55229 20.4477 9 21 9Z' fill='white' />
      <path
        opacity='0.24'
        d='M25.1667 9L21 9L26 15L26 9C25.5833 9 25.6269 9 25.1667 9Z'
        fill='black'
      />
      <g opacity='0.8'>
        <path d='M9 22H23V24H9V22Z' fill='white' />
        <path d='M9 18H19V20H9V18Z' fill='white' />
      </g>
    </svg>
  );
};
