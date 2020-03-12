import React from 'react';
import styles from './layout.scss';
import Type from 'prop-types';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

const PADDINGS = ['sm', 'md', 'lg'];
const MAX_WIDTHS = ['xs', 'sm', 'md', 'lg', 'xl'];

/**
 * Является ли корректным значением отступа.
 * @param {string} value Переданное значение.
 * @return {boolean} Корректное ли значение.
 */
export const isPadding = value => PADDINGS.includes(value);

/**
 * Является ли корректным значением максимальной ширины.
 * @param {string} value Переданное значение.
 * @return {boolean} Корректное ли значение.
 */
export const isMaxWidth = value => MAX_WIDTHS.includes(value);

/**
 * Обертка для общего контейнера.
 * @param {Object} props Свойства компонента.
 * @param {*} props.children Содержимое компонента.
 * @param {string} [props.containerTag='div'] Имя элемента-контейнера.
 * @param {Object} [props.containerProps] Свойства контейнера.
 * @return {ReactElement} Компонент-обертка.
 */
const Layout = ({
  containerTag: Container = 'div',
  containerProps,
  children,

  // Отступы
  xxlPadding = 'sm',
  xlPadding = xxlPadding,
  lgPadding = xlPadding,
  mdPadding = lgPadding,
  smPadding = mdPadding,
  xsPadding = smPadding,
  xxsPadding = xsPadding,
  xxxsPadding = xxsPadding,

  // Максимальная ширина
  xxlMaxWidth = 'xl',
  xlMaxWidth = xxlMaxWidth,
  lgMaxWidth = xlMaxWidth,
  mdMaxWidth = lgMaxWidth,
  smMaxWidth = mdMaxWidth,
  xsMaxWidth = smMaxWidth,
  xxsMaxWidth = xsMaxWidth,
  xxxsMaxWidth = xxsMaxWidth,
}) => {
  const { className } = containerProps || {};

  return (
    <div className={
      cx(
        'layout-wrapper',
        isPadding(xxlPadding) && `layout-xxl-padding-${xxlPadding}`,
        isPadding(xlPadding) && `layout-xl-padding-${xlPadding}`,
        isPadding(lgPadding) && `layout-lg-padding-${lgPadding}`,
        isPadding(mdPadding) && `layout-md-padding-${mdPadding}`,
        isPadding(smPadding) && `layout-sm-padding-${smPadding}`,
        isPadding(xsPadding) && `layout-xs-padding-${xsPadding}`,
        isPadding(xxsPadding) && `layout-xxs-padding-${xxsPadding}`,
        isPadding(xxxsPadding) && `layout-xxxs-padding-${xxxsPadding}`,
      )}
    >
      <Container
        {...containerProps}
        className={
          cx(
            'layout',
            isMaxWidth(xxlMaxWidth) && `layout-xxl-width-${xxlMaxWidth}`,
            isMaxWidth(xlMaxWidth) && `layout-xl-width-${xlMaxWidth}`,
            isMaxWidth(lgMaxWidth) && `layout-lg-width-${lgMaxWidth}`,
            isMaxWidth(mdMaxWidth) && `layout-md-width-${mdMaxWidth}`,
            isMaxWidth(smMaxWidth) && `layout-sm-width-${smMaxWidth}`,
            isMaxWidth(xsMaxWidth) && `layout-xs-width-${xsMaxWidth}`,
            isMaxWidth(xxsMaxWidth) && `layout-xxs-width-${xxsMaxWidth}`,
            isMaxWidth(xxxsMaxWidth) && `layout-xxxs-width-${xxxsMaxWidth}`,
            className,
          )}
        children={children}
      />
    </div>
  );
};

Layout.propTypes = {
  /**
   * Содержимое компонента.
   */
  children: Type.any,

  /**
   * HTML-tag контейнера.
   */
  containerTag: Type.string,

  /**
   * Свойства контейнера.
   */
  containerProps: Type.object,

  /**
   * Отступы на экранах > 1600px.
   */
  xxlPadding: Type.oneOf(PADDINGS),

  /**
   * Отступы на экранах 1441-1600px.
   */
  xlPadding: Type.oneOf(PADDINGS),

  /**
   * Отступы на экранах 1281-1440px.
   */
  lgPadding: Type.oneOf(PADDINGS),

  /**
   * Отступы на экранах 1025-1280px.
   */
  mdPadding: Type.oneOf(PADDINGS),

  /**
   * Отступы на экранах 841-1024px.
   */
  smPadding: Type.oneOf(PADDINGS),

  /**
   * Отступы на экранах 721-840px.
   */
  xsPadding: Type.oneOf(PADDINGS),

  /**
   * Отступы на экранах 601-720px.
   */
  xxsPadding: Type.oneOf(PADDINGS),

  /**
   * Отступы на экранах < 600px.
   */
  xxxsPadding: Type.oneOf(PADDINGS),

  /**
   * Максимальная ширина на экранах > 1600px.
   */
  xxlMaxWidth: Type.oneOf(MAX_WIDTHS),

  /**
   * Максимальная ширина на экранах 1441-1600px.
   */
  xlMaxWidth: Type.oneOf(MAX_WIDTHS),

  /**
   * Максимальная ширина на экранах 1281-1440px.
   */
  lgMaxWidth: Type.oneOf(MAX_WIDTHS),

  /**
   * Максимальная ширина на экранах 1025-1280px.
   */
  mdMaxWidth: Type.oneOf(MAX_WIDTHS),

  /**
   * Максимальная ширина на экранах 841-1024px.
   */
  smMaxWidth: Type.oneOf(MAX_WIDTHS),

  /**
   * Максимальная ширина на экранах 721-840px.
   */
  xsMaxWidth: Type.oneOf(MAX_WIDTHS),

  /**
   * Максимальная ширина на экранах 601-720px.
   */
  xxsMaxWidth: Type.oneOf(MAX_WIDTHS),

  /**
   * Максимальная ширина на экранах < 600px.
   */
  xxxsMaxWidth: Type.oneOf(MAX_WIDTHS),
};

export default Layout;
