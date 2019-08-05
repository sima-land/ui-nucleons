import Popup from '../popup/';
import Type from 'prop-types';
import isNumber from 'lodash.isnumber';
import classNames from 'classnames/bind';
import PopupArrow from '../popup-arrow/';
import styles from './positioning-popup.scss';
import isBrowser from '../../helpers/is-browser';
import React, { Component, createRef } from 'react';

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
 * Позиционирующийся попап.
 * @param {Object} props Параметры объекта.
 * @param {*} [props.children] Дочерние элементы.
 * @param {boolean} [props.withArrow] Добавить стрелку сверху.
 * @param {Object} props.parent Реф родительского элемента.
 * @param {number} [props.positioningMargin=20] Значение отступа от края границы.
 * @param {'bottom'|'top'} [props.verticalPosition='bottom'] Позиция попапа по вертикали.
 * @param {'auto'|'left'|'right'|'center'} [props.horizontalPosition='auto'] Позиция попапа по горизонтали.
 * @param {Object} [arrowProps] Свойства стрелки.
 * @param {string} [arrowProps.direction='top'] Направление стрелки.
 * @param {string} [arrowProps.className='arrow-base'] Класс для стрелки.
 * @param {boolean} [arrowProps.shadow=true] Наличие тени у стрелки.
 * @param {string} [arrowProps.color='white'] Цвет стрелки.
 * @param {Object} [arrowProps.position={}] Координаты стрелки.
 * @param {string} [props.className] Дополнительный класс для попапа.
 * @param {Object} props.opener Реф открывающего элемента.
 * @param {string} [props.basePopupClass] Класс для стилизации базового попапа.
 * @param {Function} [props.onMouseOut] Обработчик покидания курсором области попапа.
 * @param {Function} [props.onMouseOver] Обработчик наведения курсора мыши на попап.
 */
class PositioningPopup extends Component {
  state = {
    popupWidth: 0,
  };
  popupRef = createRef();

  /**
   * Выполняется перед монтированием компонента
   * Определяет координаты родителя и опенера.
   */
  componentWillMount () {
    const { parent, opener } = this.props;
    let parentCoords = {};
    let openerCoords = {};

    if (parent && parent.current) {
      parentCoords = {
        width: parent.current.offsetWidth,
        left: parent.current.offsetLeft,
      };
    }

    if (opener && opener.current) {
      openerCoords = {
        width: opener.current.offsetWidth,
        left: opener.current.offsetLeft,
      };
    }

    this.parentWidth = parentCoords.width ? parentCoords.width : 0;
    this.parentLeft = parentCoords.left ? parentCoords.left : 0;
    this.openerLeft = openerCoords.left ? openerCoords.left : 0;
    this.openerWidth = openerCoords.width ? openerCoords.width : 0;
  }

  /**
   * Выполняется после монтирования компонента
   * Обновляет ширину попапа и, если она обновилась, рендерит компонент повторно.
   */
  componentDidMount () {
    const { popupWidth } = this.state;
    if (popupWidth === 0 && this.popupRef && this.popupRef.current) {
      this.setState({
        popupWidth: this.popupRef.current.getBoundingClientRect().width,
      });
      this.forceUpdate();
    }
  }

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
   * @return {number} Откорректированный отступ.
   */
  correctHorizontalPosition ({ left, edgeMargin }) {
    const { popupWidth } = this.state;
    let correctPosition = left;

    // Выравниваем, если выходит за левую часть вьюпорта
    if (correctPosition < -this.parentLeft) {
      correctPosition = -this.parentLeft;
      correctPosition += edgeMargin;
    }

    // Выравниваем, если выходит за правую часть вьюпорта
    const windowWidth = isBrowser() ? window.innerWidth : 0;
    const sideIndentParent = Math.abs(this.parentWidth - left - popupWidth);
    const sideIndentViewport = Math.abs(windowWidth - left - popupWidth);
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
   * @return {Object} Объект координат.
   */
  defineHorizontalPopupPosition () {
    const {
      positioningMargin,
      horizontalPosition = 'auto',
    } = this.props;
    const { popupWidth } = this.state;
    const coords = { left: 0 };
    const edgeMargin = isNumber(positioningMargin) ? positioningMargin : DEFAULT_POSITIONING_MARGIN;
    const rightPosition = this.openerLeft + edgeMargin;
    const leftPosition = this.openerLeft - popupWidth + this.openerWidth - edgeMargin;

    if (horizontalPosition === 'right') {
      coords.left = rightPosition;
    } else if (horizontalPosition === 'left') {
      coords.left = leftPosition;
    } else if (horizontalPosition === 'center') {
      coords.left = this.openerLeft + (this.openerWidth / 2) - (popupWidth / 2);
    } else {
      const popupRightSidePosition = this.openerLeft + popupWidth;
      coords.left = popupRightSidePosition > this.parentWidth
        ? leftPosition
        : rightPosition;
    }

    coords.left = this.correctHorizontalPosition({
      edgeMargin,
      left: coords.left,
    });

    return coords;
  }

  /**
   * Возвращает координаты позиционирования попапа.
   * @return {Object} Координаты позиционирования попапа.
   */
  getPopupPosition () {
    return {
      ...this.defineVerticalPopupPosition(),
      ...this.defineHorizontalPopupPosition(),
    };
  }

  /**
   * Возвращает данные для стрелки.
   * @param {Object} data Информация, необходимая для позиционирования стрелки.
   * @param {number} [data.left] Отступ попапа слева от родителя.
   * @return {Object} Props Данные для стрелки.
   */
  getArrowProps = ({
    left: popupLeft,
  }) => {
    const {
      verticalPosition = 'bottom',
      arrowProps = {},
    } = this.props;
    const { popupWidth } = this.state;
    const props = { ... defaultArrowProps };

    // Заменяем props по умолчанию на переданные в компонент
    Object.entries(arrowProps).forEach(prop => {
      const [name, value] = prop;
      props[name] = value;
    });

    // Выравниваем по вертикали
    props.direction = verticalPosition === 'bottom' ? 'top' : 'bottom';

    // Выравниваем по горизонтали
    const openerCenterLeft = this.openerLeft + (this.openerWidth / 2);
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
      basePopupClass,
      onMouseOut,
      onMouseOver,
    } = this.props;
    const popupPosition = this.getPopupPosition();
    const arrowProps = this.getArrowProps({ ...popupPosition });
    const popupClass = bindClassNames(
      className,
      'popup-wrap',
      this.state.popupWidth === 0 && 'hidden'
    );

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
   * Реф открывающего элемента.
   */
  opener: Type.oneOfType([
    Type.func,
    Type.shape({ current: Type.object }),
  ]),
  /**
   * Реф родительского элемента.
   */
  parent: Type.oneOfType([
    Type.func,
    Type.shape({ current: Type.object }),
  ]),
  /**
   * Класс для стилизации базового попапа.
   */
  basePopupClass: Type.string,
  /**
   * Значение отступа от края родительского контейнера.
   */
  positioningMargin: Type.number,
  /**
   * Позиция попапа по вертикали.
   */
  verticalPosition: Type.oneOf(['top', 'bottom']),
  /**
   * Позиция попапа по горизонтали.
   */
  horizontalPosition: Type.oneOf(['auto', 'left', 'center', 'right']),
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
