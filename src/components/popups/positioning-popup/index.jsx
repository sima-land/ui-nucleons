import React, { Component, createRef } from 'react';
import Popup from '../popup/';
import classNames from 'classnames/bind';
import PopupArrow from '../popup-arrow/';
import isBrowser from '../../helpers/is-browser';
import isNumber from 'lodash.isnumber';
import styles from './positioning-popup.scss';
import Type from 'prop-types';

const bindClassNames = classNames.bind(styles);

/**
 * Минимальный отступ от края контейнера.
 * @type {number}
 */
const DEFAULT_POSITIONING_MARGIN = 20;

/**
 * Ширина стрелки.
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
 * @typedef {string} VerticalPosition
 * @value 'bottom' Значение по умолчанию. Позиционирует попап снизу
 * @value 'top' Позиционирует попап сверху
 */

/**
 * @typedef {string} HorizontalPosition
 * @value 'auto' Автоматически позиционирует попап слева или справа в зависимости от его положения на странице
 * @value 'left' Позиционирует попап слева
 * @value 'center' Позиционирует попап по центру
 * @value 'right' Позиционирует попап справа
 */

/**
* @typedef {Object} PositionData
* @property {number} openerLeft Позиция опенера слева от родителя.
* @property {number} openerWidth Ширина опенера.
* @property {number} popupWidth Ширина попапа.
 */

/**
 * Позиционирующийся попап.
 * @param {Object} props Параметры объекта.
 * @param {*} [props.children] Дочерние элементы.
 * @param {boolean} [props.withArrow] Добавить стрелку сверху.
 * @param {number} props.parentWidth Ширина родительского контейнера.
 * @param {number} props.parentLeft Отступ слева у родительского элемента.
 * @param {number} [props.positioningMargin=20] Значение отступа от края границы.
 * @param {VerticalPosition} [props.verticalPosition='bottom'] Позиция попапа по вертикали.
 * @param {HorizontalPosition} [props.horizontalPosition='auto'] Позиция попапа по горизонтали.
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
  popupRef = createRef();

  /**
   * Определяет координаты для позиционирования попапа по вертикали.
   * @return {Object} Объект координат.
   */
  defineVerticalPopupPosition () {
    return this.props.verticalPosition === 'top'
      ? { bottom: '100%' }
      : { top: '100%' };
  }

  /**
   * Корректирует отступ у попапа.
   * @param {number} left Отступ от левого края.
   * @param {number} edgeMargin Минимальный отступ от края.
   * @param {number} popupWidth Ширина попапа.
   * @return {number} Откорректированный отступ.
   */
  correctHorizontalPosition ({ left, edgeMargin, popupWidth }) {
    const { parentWidth = 0, parentLeft = 0 } = this.props;
    let correctPosition = left;

    // Выравниваем, если выходит за левую часть вьюпорта
    if (correctPosition < -parentLeft) {
      correctPosition = -parentLeft;
      correctPosition += edgeMargin;
    }

    // Выравниваем, если выходит за правую часть вьюпорта
    const sideIndentParent = Math.abs(parentWidth - left - popupWidth);
    const sideIndentViewport = Math.abs(window.innerWidth - left - popupWidth);
    const sideIndent = (sideIndentViewport - sideIndentParent) / 2;
    if (sideIndent <= 0) {
      correctPosition -= sideIndentParent;
      correctPosition += Math.abs(sideIndent);
      correctPosition -= edgeMargin;
    }

    return correctPosition;
  }

  /**
   * Определяет координаты для позиционирования попапа по горизонтали.
   * @param {PositionData} data Информация, необходимая для позиционирования попапа.
   * @return {Object} Объект координат.
   */
  defineHorizontalPopupPosition ({
    openerLeft = 0,
    openerWidth = 0,
    popupWidth = 0,
  }) {
    const {
      parentWidth = 0,
      positioningMargin,
      horizontalPosition = 'auto',
    } = this.props;
    const coords = { left: 0 };
    const edgeMargin = isNumber(positioningMargin) ? positioningMargin : DEFAULT_POSITIONING_MARGIN;
    const rightPosition = openerLeft + edgeMargin;
    const leftPosition = openerLeft - popupWidth + openerWidth - edgeMargin;

    if (horizontalPosition === 'right') {
      coords.left = rightPosition;
    } else if (horizontalPosition === 'left') {
      coords.left = leftPosition;
    } else if (horizontalPosition === 'center') {
      coords.left = openerLeft + (openerWidth / 2) - (popupWidth / 2);
    } else {
      const popupRightSidePosition = openerLeft + popupWidth;
      coords.left = popupRightSidePosition > parentWidth
        ? leftPosition
        : rightPosition;
    }

    coords.left = this.correctHorizontalPosition({
      popupWidth,
      edgeMargin,
      left: coords.left,
    });


    coords.left = this.correctHorizontalPosition({
      popupWidth,
      edgeMargin,
      left: coords.left,
      openerLeft,
    });

    return coords;
  }

  /**
   * Возвращает координаты позиционирования попапа.
   * @param {PositionData} positionData Информация, необходимая для позиционирования попапа.
   * @return {Object} Координаты позиционирования попапа.
   */
  getPopupPosition (positionData = {}) {
    return {
      ...this.defineVerticalPopupPosition(),
      ...this.defineHorizontalPopupPosition(positionData),
    };
  }

  /**
   * Возвращает данные для стрелки.
   * @param {Object} data Информация, необходимая для позиционирования стрелки.
   * @param {number} [data.openerLeft] Отступ опенера слева от родителя.
   * @param {number} [data.openerWidth] Ширина опенера.
   * @param {number} [data.popupWidth] Ширина попапа.
   * @param {number} [data.left] Отступ попапа слева от родителя.
   * @return {Object} Props Данные для стрелки.
   */
  getArrowProps = ({
    openerLeft,
    openerWidth,
    popupWidth,
    left: popupLeft,
  }) => {
    const {
      verticalPosition = 'bottom',
      arrowProps = {},
    } = this.props;
    const props = { ... defaultArrowProps };

    // Заменяем props по умолчанию на переданные в компонент
    Object.entries(arrowProps).forEach(prop => {
      const [name, value] = prop;
      props[name] = value;
    });

    // Выравниваем по вертикали
    props.direction = verticalPosition === 'bottom' ? 'top' : 'bottom';

    // Выравниваем по горизонтали
    const openerCenterLeft = openerLeft + (openerWidth / 2);
    const popupRight = popupLeft + popupWidth;
    const arrowLeft = openerCenterLeft - (ARROW_WIDTH / 2);
    const arrowRight = openerCenterLeft + (ARROW_WIDTH / 2);
    const arrowLeftOffsetPopup = arrowLeft - popupLeft;
    const left = arrowLeft < popupLeft ? ARROW_MARGIN : arrowLeftOffsetPopup;
    props.position = {
      left: arrowRight > popupRight ? popupWidth - ARROW_MARGIN - ARROW_WIDTH : left,
    };

    return props;
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
      opener = {},
      basePopupClass,
      onMouseOut,
      onMouseOver,
    } = this.props;
    const popup = this.popupRef && this.popupRef.current
      ? this.popupRef.current
      : {};

    const hasOpener = isBrowser() && opener && opener.current instanceof HTMLElement;
    const bounds = hasOpener
      ? { openerWidth: opener.current.offsetWidth, openerLeft: opener.current.offsetLeft }
      : {};
    const popupWidth = popup.offsetWidth;
    const popupPosition = this.getPopupPosition({
      popupWidth,
      ...bounds,
    });
    const arrowProps = hasOpener && this.getArrowProps({
      popupWidth,
      ...bounds,
      ...popupPosition,
    });
    const popupClass = bindClassNames(className, 'popup-wrap', isOpen ? 'visible' : 'hidden');

    return (
      <div ref={this.popupRef}
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
   * Реф открывающего элемента.
   */
  opener: Type.oneOfType([
    Type.func,
    Type.shape({ current: Type.instanceOf(Element) }),
  ]),
  /**
   * Класс для стилизации базового попапа.
   */
  basePopupClass: Type.string,
  /**
   * Ширина родительского контейнера.
   */
  parentWidth: Type.number,
  /**
   * Отступ слева у родительского элемента.
   */
  parentLeft: Type.number,
  /**
   * Значение отступа от края родительского контенера.
   */
  positioningMargin: Type.number,
  /**
   * Позиция попапа по вертикали.
   */
  verticalPosition: Type.string,
  /**
   * Позиция попапа по вертикали.
   */
  horizontalPosition: Type.string,
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
