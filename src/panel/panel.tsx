import type { PanelProps, PanelType } from './types';
import type { Token } from '../colors';
import type { LinkProps } from '../link';
import { color, bgColor } from '../styling/colors';
import classnames from 'classnames/bind';
import styles from './panel.m.scss';

const cx = classnames.bind(styles);

const PANEL_COLORS_BY_TYPE: Record<PanelType, { textColor: Token; panelColor: Token }> = {
  info: {
    textColor: 'basic-gray87',
    panelColor: 'basic-gray4',
  },
  error: {
    textColor: 'basic-white',
    panelColor: 'additional-deep-red',
  },
  success: {
    textColor: 'basic-white',
    panelColor: 'additional-teal',
  },
  warning: {
    textColor: 'basic-gray87',
    panelColor: 'additional-yellow',
  },
};

export const LINK_COLOR_BY_TYPE: Record<PanelType, LinkProps['color']> = {
  info: 'basic-blue',
  error: 'basic-white',
  success: 'basic-white',
  warning: 'basic-gray87',
};

/**
 * Информационная панель. Обычно используется для выводя важной информации которую нужно выделить.
 * @param props Свойства.
 * @return Элемент.
 */
export function Panel({
  type = 'info',
  adornmentStart,
  adornmentEnd,
  className,
  style,
  children,
  'data-testid': testId = 'panel',
}: PanelProps) {
  const textColor = PANEL_COLORS_BY_TYPE[type].textColor;
  const panelColor = PANEL_COLORS_BY_TYPE[type].panelColor;

  return (
    <div
      className={cx('root', `type-${type}`, bgColor(panelColor), color(textColor), className)}
      data-testid={testId}
      style={style}
    >
      {adornmentStart && <div className={cx('adornment')}>{adornmentStart}</div>}

      <div className={cx('main')}>{children}</div>

      {adornmentEnd && <div className={cx('adornment')}>{adornmentEnd}</div>}
    </div>
  );
}

/**
 * Блок стилизующий неизвестную html-верстку по дизайн-гайдам Panel.
 * @param props Свойства.
 * @return Элемент.
 */
export function PanelStyledMarkup({ markup }: { markup: string }) {
  return <div className={cx('unknown-content')} dangerouslySetInnerHTML={{ __html: markup }} />;
}

Panel.UnknownContent = PanelStyledMarkup;
