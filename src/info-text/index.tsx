import React, { Children, CSSProperties, Fragment, ReactNode, Ref, SyntheticEvent } from 'react';
import InfoSVG from '@sima-land/ui-quarks/icons/16x16/Stroked/information';
import classNames from 'classnames/bind';
import styles from './info-text.module.scss';

export interface InfoTextProps {
  children?: ReactNode;
  className?: string;
  style?: CSSProperties;
  iconRef?: Ref<SVGSVGElement>;
  onIconClick?: (event: SyntheticEvent<SVGSVGElement>) => void;
  'data-testid'?: string;
}

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
                  <InfoSVG
                    {...(onIconClick && {
                      role: 'button',
                      tabIndex: 0,
                      'aria-label': 'Подробнее',
                      onKeyDown: event => {
                        // имитируем поведение кнопки
                        if (['Enter', 'Space'].includes(event.code)) {
                          onIconClick?.(event);
                        }
                      },
                    })}
                    ref={iconRef}
                    className={cx('icon', onIconClick && 'button')}
                    onClick={onIconClick}
                    data-testid='info-text:icon'
                  />
                </span>
              )}
            </Fragment>
          );
        }
      })}
    </span>
  );
}
