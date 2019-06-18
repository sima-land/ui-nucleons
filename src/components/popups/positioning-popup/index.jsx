import React, { Component } from 'react';
import Popup from '../popup/';
import classNames from 'classnames/bind';
import PopupArrow from '../popup-arrow/';
import isBrowser from '../../helpers/is-browser';
import isEmpty from 'lodash.isempty';
import styles from './positioning-popup.scss';
import Type from 'prop-types';

const bindClassNames = classNames.bind(styles);
/**
 * Минимальный отступ от края контейнера
 * @type {number}
 */
const MIN_POSITIONING_MARGIN = 20;
/**
 * Props стрелки по-умолчанию
 * @type {Object}
 */
export const defaultArrowProps = {
  direction: 'top',
  className: 'arrow-base',
  shadow: true,
  color: 'white',
  position: {},
};
/**
 * Позиционирующийся попап.
 * @param {Object} props Параметры обьекта.
 * @param {*} [props.children] Дочерние элементы.
 * @param {boolean} [props.withArrow] Добавить стрелку сверху.
 * @param {number} props.bodyWidth Ширина body.
 * @param {Object} [arrowProps] Свойства стрелки.
 * @param {string} [arrowProps.direction='top'] Направление стрелки.
 * @param {string} [arrowProps.className='arrow-base'] Класс для стрелки.
 * @param {boolean} [arrowProps.shadow=true] Наличие тени у стрелки.
 * @param {string} [arrowProps.color='white'] Цвет стрелки.
 * @param {Object} [arrowProps.position={}] Координаты стрелки.
 * @param {string} [props.className] Дополнительный класс для попапа.
 * @param {boolean} [props.isOpen] Открыт ли попап.
 * @param {HTMLElement} props.opener Открывающий элемент.
 * @param {string} [props.basePopupClass] Класс для стилизации базового попапа.
 * @param {Function} [props.onMouseOut] Обработчик покидания курсором области попапа.
 * @param {Function} [props.onMouseOver] Обработчик наведения курсора мыши на попап.
 */
class PositioningPopup extends Component {
  /**
   * Координаты позиционирования попапа.
   * @param {Object} openerCoords Координаты открывающего элемента.
   * @param {number} popupWidth Ширина попапа.
   * @return {Object} Координаты позиционирования попапа.
   */
  getPopupPosition = (openerCoords, popupWidth) => {
    const coords = {
      top: '100%',
      left: 0,
    };
    const { bodyWidth } = this.props;
    if (openerCoords && popupWidth && popupWidth !== bodyWidth) {
      const rightPopupCorner = openerCoords.left + popupWidth;
      const left
        = rightPopupCorner > bodyWidth
          ? bodyWidth - popupWidth - MIN_POSITIONING_MARGIN
          : openerCoords.left;
      coords.left = left < MIN_POSITIONING_MARGIN ? `${MIN_POSITIONING_MARGIN}px` : `${left}px`;
    }
    return coords;
  };

  /**
   * Формирует props для стрелки. Путём объединения переданных компоненту данных со значениями по-умолчанию.
   * @param {Object} bounds Координаты Открывающего элемента.
   * @param {Object} popupPosition Координаты попапа.
   * @return {Object} Props Для стрелки.
   */
  getArrowProps = (bounds, popupPosition) => {
    const arrowProps = this.props.arrowProps || {};
    const props = Object.keys(defaultArrowProps);
    props.forEach(prop => {
      arrowProps[prop] = arrowProps[prop] ? arrowProps[prop] : defaultArrowProps[prop];
    });
    if (isEmpty(arrowProps.position)) {
      const leftPopupCoordinate = String(popupPosition.left).match(/\d*/g)[0];
      arrowProps.position = {
        left: `${(bounds.left + (0.5 * bounds.width) - leftPopupCoordinate) - 10}px`,
      };
    }
    return arrowProps;
  };
  /**
   * Генерация разметки попапа.
   * @return {ReactElement} Спозиционированный относительно открывающего элемента и окна браузера попап.
   */
  render () {
    const {
      children,
      withArrow,
      className,
      isOpen,
      opener,
      basePopupClass,
      onMouseOut,
      onMouseOver,
    } = this.props;
    const hasOpener = isBrowser() && opener instanceof HTMLElement;
    const bounds = hasOpener ? { width: opener.offsetWidth, left: opener.offsetLeft } : {};
    const popupLocation = this.popup && { width: this.popup.offsetWidth, left: this.popup.offsetLeft };
    const popupWidth = popupLocation && popupLocation.width
      ? Math.floor(popupLocation.width)
      : 0;
    const popupPosition = this.getPopupPosition(bounds, popupWidth);
    const arrowProps = hasOpener && this.getArrowProps(bounds, popupPosition);
    const popupClass = bindClassNames(className, 'popup-wrap', isOpen ? 'visible' : 'hidden');
    return (
      <div ref={ref => this.popup = ref}
        onMouseOut={onMouseOut}
        onMouseOver={onMouseOver}
        className={popupClass}
        style={popupPosition}
      >
        {withArrow && <PopupArrow {...arrowProps} />}
        <Popup className={basePopupClass}>
          {children}
        </Popup>
      </div>
    );
  }
}

PositioningPopup.propTypes = {
  /**
   * Дочерние элементы.
   */
  children: Type.any,
  /**
   * Добавить стрелку сверху.
   */
  withArrow: Type.bool,
  /**
   * Свойства стрелки.
   */
  arrowProps: Type.shape({
    /**
     * Направление.
     */
    direction: Type.string,
    /**
     * Класс.
     */
    className: Type.string,
    /**
     * Наличие тени.
     */
    shadow: Type.bool,
    /**
     * Цвет
     */
    color: Type.oneOf(['white', 'blue', 'dark-blue', 'deep-blue']),
    /**
     * Координаты
     */
    position: Type.object,
  }),
  /**
   * Дополнительный класс для попапа.
   */
  className: Type.string,
  /**
   * Открыт ли попап.
   */
  isOpen: Type.bool,
  /**
   * Открывающий элемент.
   */
  opener: Type.instanceOf(HTMLElement),
  /**
   * Класс для стилизации базового попапа.
   */
  basePopupClass: Type.string,
  /**
   * Ширина body.
   */
  bodyWidth: Type.number,
  /**
   * Обработчик покидания курсором области попапа.
   */
  onMouseOut: Type.func,
  /**
   * Обработчик наведения курсора мыши на попап.
   */
  onMouseOver: Type.func,
};

export default PositioningPopup;
