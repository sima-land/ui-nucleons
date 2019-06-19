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
 * Минимальный отступ от края контейнера.
 * @type {number}
 */
const DEFAULT_POSITIONING_MARGIN = 20;
/**
 * Половина ширины стрелки.
 * @type {number}
 */
const ARROW_WIDTH = 20;
/**
 * Минимальный отступ стрелки от края попапа.
 * @type {number}
 */
const ARROW_MARGIN = 5;
/**
 * Props стрелки по-умолчанию.
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
 * @param {number} props.parentWidth Ширина родительского контейнера.
 * @param {number} [props.positioningMargin=20] Значение отступа от края границы.
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
    const { parentWidth, positioningMargin } = this.props;
    const edgeMargin = positioningMargin || positioningMargin === 0 ? positioningMargin : DEFAULT_POSITIONING_MARGIN;
    if (openerCoords && popupWidth && popupWidth !== parentWidth) {
      const rightPopupCorner = openerCoords.left + popupWidth;
      const left
        = rightPopupCorner > parentWidth
          ? parentWidth - popupWidth - edgeMargin
          : openerCoords.left;
      coords.left = left < edgeMargin ? `${edgeMargin}px` : `${left}px`;
      coords.width = popupWidth;
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
      const openerCenterLeft = bounds.left + (0.5 * bounds.width);
      const popupLeft = Number(String(popupPosition.left).match(/\d*/g)[0]);
      const popupRight = popupLeft + popupPosition.width;
      const arrowLeft = openerCenterLeft - (0.5 * ARROW_WIDTH);
      const arrowRight = openerCenterLeft + (0.5 * ARROW_WIDTH);
      const arrowLeftOffsetPopup = arrowLeft - popupLeft;
      const left = arrowLeft < popupLeft ? ARROW_MARGIN : arrowLeftOffsetPopup;
      arrowProps.position = {
        left: `${arrowRight > popupRight ? popupPosition.width - ARROW_MARGIN - ARROW_WIDTH : left}px`,
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
   * Ширина родительского контейнера.
   */
  parentWidth: Type.number,
  /**
   * Значение отступа от края родительского контенера.
   */
  positioningMargin: Type.number,
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
