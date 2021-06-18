import React from 'react';
import classnames from 'classnames/bind';
import { color, bgColor } from '../styling/colors';
import { COLORS, Token } from '../colors';
import styles from './panel.module.scss';

export interface Props {

  /** Наименование цвета панели. */
  color?: Token

  /** Наименование цвета содержимого. */
  contentColor?: Token

  /** Нужно ли стилизовать как inline-элемент. */
  inline?: boolean

  /** Компонент иконки. */
  icon?: React.ComponentType<React.SVGProps<SVGSVGElement>>

  /** CSS-класс корневого элемента. */
  className?: string

  /** Содержимое в виде строки с html-версткой. */
  html?: string

  /** Идентификатор для систем автоматизированного тестирования. */
  'data-testid'?: string
}

const cx = classnames.bind(styles);

/**
 * Компонент панели с информацией.
 * @param props Свойства.
 * @return Элемент.
 */
export const Panel: React.FC<Props> = ({
  color: panelColor = 'gray4',
  contentColor = 'gray87',
  inline = false,
  icon: Icon,
  className,
  children,
  html,
  'data-testid': testId = 'panel',
}) => {
  const contentProps = html
    ? { dangerouslySetInnerHTML: { __html: html } }
    : { children };

  return (
    <div
      className={cx(
        'panel',
        inline && 'inline',
        bgColor(panelColor),
        className
      )}
      data-testid={testId}
    >
      {Icon && (
        <Icon
          fill={COLORS.get(contentColor)}
          width={16}
          height={20}
          className={cx('icon')}
          aria-hidden='true'
        />
      )}
      <div
        {...contentProps}
        className={cx('content', color(contentColor))}
      />
    </div>
  );
};
