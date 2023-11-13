import type { InfoTextProps } from './types';
import { Children, Fragment } from 'react';
import InfoSVG from '@sima-land/ui-quarks/icons/16x16/Stroked/Information';
import classNames from 'classnames/bind';
import styles from './info-text.module.scss';

const cx = classNames.bind(styles);

/**
 * Позволяет выводить в конце произвольного текста иконку.
 * Иконка не переносится на следующую строку без предыдущего слова и может обрабатывать действие при клике.
 * @param props Свойства.
 * @return Элемент.
 */
export function InfoText({
  children,
  style,
  className,
  iconRef,
  onIconClick,
  iconActive,
  'data-testid': testId = 'info-text',
}: InfoTextProps) {
  return (
    <span style={style} className={className} data-testid={testId}>
      {Children.toArray(children).map((item, index, array) => {
        if (index < array.length - 1) {
          return item;
        } else {
          const text = String(item);
          const lastSpaceIndex = text.lastIndexOf(' ');
          const head = text.slice(0, lastSpaceIndex);
          const last = text.slice(lastSpaceIndex);

          return (
            <Fragment key={index}>
              {head}
              {last && (
                <span className={styles.last}>
                  {last}
                  <button
                    ref={iconRef}
                    type='button'
                    aria-label='Подробнее'
                    disabled={!onIconClick}
                    aria-hidden={!onIconClick}
                    onClick={onIconClick}
                    className={cx('button', { active: iconActive })}
                    data-testid='info-text:icon'
                  >
                    <InfoSVG className={cx('icon')} />
                  </button>
                </span>
              )}
            </Fragment>
          );
        }
      })}
    </span>
  );
}
