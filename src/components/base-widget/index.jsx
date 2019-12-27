import React, { forwardRef } from 'react';
import Type from 'prop-types';

/**
 * Возвращает базовый компонент виджета - элемент с тремя разделами: "шапкой", основным содержимым и "подвалом".
 * @param {Object} props Свойства компонента.
 * @param {*} [props.header] Содержимое "шапки".
 * @param {*} [props.footer] Содержимое "подвала".
 * @param {*} props.children Основной контент.
 * @param {string|function():ReactElement} [props.container='section'] Корневой элемент-контейнер.
 * @param {string|function():ReactElement} [props.headerContainer='header'] Элемент-контейнер заголовка.
 * @param {string|function():ReactElement} [props.childrenContainer='div'] Элемент-контейнер контента.
 * @param {string|function():ReactElement} [props.footerContainer='footer'] Элемент-контейнер "подвала".
 * @param {Object} [props.containerProps] Свойства элемента-контейнера.
 * @param {Object} [props.headerContainerProps] Свойства элемента-контейнера заголовка.
 * @param {Object} [props.childrenContainerProps] Свойства элемента-контейнера контента.
 * @param {Object} [props.footerContainerProps] Свойства элемента-контейнера "подвала".
 * @return {ReactElement} Базовый компонент виджета.
 */
const BaseWidget = forwardRef(function BaseWidget ({
  container: Container = 'section',
  containerProps,
  header,
  headerContainer: Header = 'header',
  headerContainerProps,
  children,
  childrenContainer: Content = 'div',
  childrenContainerProps,
  footer,
  footerContainer: Footer = 'footer',
  footerContainerProps,
}, ref) {
  return (
    <Container
      {...containerProps}
      ref={ref}
    >
      {Boolean(header) && (
        <Header
          {...headerContainerProps}
          children={header}
        />
      )}
      <Content
        {...childrenContainerProps}
        children={children}
      />
      {Boolean(footer) && (
        <Footer
          {...footerContainerProps}
          children={footer}
        />
      )}
    </Container>
  );
});

BaseWidget.propTypes = {
  /**
   * Имя элемента основного контейнера.
   */
  container: Type.string,

  /**
   * Свойства основного контейнера.
   */
  containerProps: Type.object,

  /**
   * Содержимое шапки.
   */
  header: Type.any,

  /**
   * Имя элемента контейнера шапки.
   */
  headerContainer: Type.string,

  /**
   * Свойства контейнера шапки.
   */
  headerContainerProps: Type.object,

  /**
   * Содержимое виджета.
   */
  children: Type.any,

  /**
   * Имя элемента контейнера содержимого виджета.
   */
  childrenContainer: Type.string,

  /**
   * Свойства контейнера содержимого виджета.
   */
  childrenContainerProps: Type.object,

  /**
   * Содержимое подвала.
   */
  footer: Type.any,

  /**
   * Имя элемента контейнера подвала.
   */
  footerContainer: Type.string,

  /**
   * Свойства контейнера подавала.
   */
  footerContainerProps: Type.object,
};

BaseWidget.displayName = 'BaseWidget';
export default BaseWidget;
