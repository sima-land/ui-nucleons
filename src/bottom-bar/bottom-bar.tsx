import { CleanButtonContext } from '../clean-buttons/utils';
import { BottomBarProps, type BottomBarSize } from './types';
import classNames from 'classnames/bind';
import styles from './bottom-bar.m.scss';

const cx = classNames.bind(styles);

// некоторым компонентам нужно знать конкретную высоту, делаем единый источник
export const BOTTOM_BAR_HEIGHT: Record<BottomBarSize, number> = {
  s: 64,
  m: 72,
  l: 80,
} as const;

// некоторым компонентам нужно знать значения по умолчанию, делаем единый источник
export const BOTTOM_BAR_DEFAULTS = {
  size: 'm',
} as const;

/**
 * Боттом-бар - блок для вывода содержимого в нижней части карточек, модальных окон и других сложных элементов.
 * @param props Свойства.
 * @return Элемент.
 */
export function BottomBar({
  size = BOTTOM_BAR_DEFAULTS.size,
  divided,
  children,
  className,
  rounds = 'm',
  'data-testid': testId = 'bottom-bar',
  ...rest
}: BottomBarProps) {
  const rootClassName = cx(
    'root',
    size !== 'unset' && `size-${size}`,
    { divided },
    rounds !== 'unset' && `rounds-${rounds}`,
    className,
  );

  return (
    // ВАЖНО: чтобы CleanButton автоматически брали размер, соответствующий размеру BottomBar
    <CleanButtonContext.Provider value={{ size }}>
      <div {...rest} className={rootClassName} data-testid={testId}>
        {children}
      </div>
    </CleanButtonContext.Provider>
  );
}
