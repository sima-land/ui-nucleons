import React from 'react';
import classnames from 'classnames/bind';
import { color, bgColor } from '../styling/colors';
import { COLORS, Token } from '../colors';
import styles from './panel.scss';

export interface Props {
  color?: Token
  contentColor?: Token
  inline?: boolean
  icon?: React.ComponentType<React.SVGProps<SVGSVGElement>>
  className?: string
  html?: string
}

const cx = classnames.bind(styles);

/**
 * Компонент панели с информацией.
 * @param {Object} props Свойства.
 * @param {string} props.color Наименование цвета панели.
 * @param {string} props.contentColor Наименование цвета содержимого.
 * @param {boolean} [props.inline=false] Нужно ли стилизовать как inline-элемент.
 * @param {*} props.icon Компонент иконки.
 * @param {string} props.className CSS-класс корневого элемента.
 * @param {*} [props.children] Содержимое.
 * @param {string} [props.html] Содержимое в виде строки с html-версткой.
 * @return {ReactElement} Компонент панели с информацией.
 */
const Panel: React.FC<Props> = ({
  color: panelColor = 'gray4',
  contentColor = 'gray87',
  inline = false,
  icon: Icon,
  className,
  children,
  html,
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

export default Panel;
