import React from 'react';
import Icon from '../icon';
import classnames from 'classnames/bind';
import PropTypes from 'prop-types';
import classes from './panel.scss';
import { color, bgColor } from '../styling/colors';

const cx = classnames.bind(classes);

/**
 * Компонент панели с информацией.
 * @param {Object} props Свойства.
 * @param {string} props.color Наименование цвета панели.
 * @param {string} props.contentColor Наименование цвета содержимого.
 * @param {boolean} [props.inline=false] Нужно ли стилизовать как inline-элемент.
 * @param {import('react').ComponentType} props.icon Компонент иконки.
 * @param {string} props.className CSS-класс корневого элемента.
 * @param {*} [props.children] Содержимое.
 * @param {string} [props.html] Содержимое в виде строки с html-версткой.
 * @return {ReactElement} Компонент панели с информацией.
 */
const Panel = ({
  color: panelColor = 'gray4',
  contentColor = 'gray87',
  inline = false,
  icon,
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
      {Boolean(icon) && (
        <Icon
          icon={icon}
          color={contentColor}
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

Panel.propTypes = {
  /**
   * Наименование цвета панели.
   */
  color: PropTypes.string,

  /**
   * Наименование цвета содержимого.
   */
  contentColor: PropTypes.string,

  /**
   * Нужно ли стилизовать как inline-элемент.
   */
  inline: PropTypes.bool,

  /**
   * Компонент иконки.
   */
  icon: PropTypes.elementType,

  /**
   * CSS-класс корневого элемента.
   */
  className: PropTypes.string,

  /**
   * Содержимое.
   */
  children: PropTypes.any,

  /**
   * Содержимое в виде строки с html-версткой.
   */
  html: PropTypes.string,
};

export default Panel;
