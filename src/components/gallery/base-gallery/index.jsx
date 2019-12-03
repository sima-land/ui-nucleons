import React, { Component, Fragment, createRef } from 'react';
import isFunction from 'lodash/isFunction';
import isInteger from 'lodash/isInteger';
import noop from 'lodash/noop';
import classNames from 'classnames/bind';
import classes from './base-gallery.scss';
import withGlobalListeners from '../../hoc/with-global-listeners';
import PropTypes from 'prop-types';

const cx = classNames.bind(classes);

/**
 * Компонент галереи.
 * @param {Object} props Свойства компонента.
 * @param {Array} props.items Список элементов галереи.
 * @param {'horizontal'|'vertical'} [props.direction='horizontal'] Направление галереи.
 * @param {boolean} needListenResize Если нужно слушать событие 'resize'.
 * @param {number} [props.slideStepSize='100'] Размер прокрутки 1-го элемента.
 * @param {number} [props.slideBy='3'] Количество прокручиваемых за раз элементов.
 * @param {string|function():ReactElement} [props.itemContainer='div'] Элемент-контейнер item-а.
 * @param {Function} [props.getItemProps] Функция для получения свойств элемента.
 * @param {string|function():ReactElement} [props.controlContainer='div'] Элемент-контейнер элемента управления.
 * @param {Function} [props.getControlProps] Функция для получения свойств элемента управления.
 * @param {'auto'|'always'|'never'} [props.needShowControls='auto'] Как показывать элементы управления.
 * @param {Object} [props.itemsWrapperProps] Свойства обертки для item-ов с overflow: hidden.
 * @param {Object} [props.itemsContainerProps] Свойства контейнера со списком item-ов.
 */
export class BaseGallery extends Component {
  state = {
    position: 0,
    withAnimation: true,
    hasControls: false,
  };

  vertical = this.props.direction === 'vertical';
  itemsContainerRef = createRef();
  itemsWrapperRef = createRef();
  maxPosition = 0;

  /**
   * Выполняется сразу после отрисовки компонента.
   * Выполняет подписку на глобальное событие "resize".
   */
  componentDidMount () {
    const {
      addGlobalListener,
      needListenResize,
      currentItemIndex,
    } = this.props;

    if (isFunction(addGlobalListener) && needListenResize) {
      this.removeGlobalListener = addGlobalListener(
        'resize',
        this.updateParams
      );
    }
    this.updateParams();
    if (isInteger(currentItemIndex)) {
      this.scrollToCurrentItem(false);
    }
  }

  /**
   * Вызывается после обновления.
   * Запускает перерасчет размеров, если количество item-ов изменилось.
   * Прокручивает до текущего элемента, если переданый индекс изменился.
   * @inheritdoc
   */
  componentDidUpdate (prevProps) {
    const { items, currentItemIndex } = this.props;
    const { items: oldItems, currentItemIndex: oldCurrentItemIndex } = prevProps;

    if (Array.isArray(items) && Array.isArray(oldItems) && items.length !== oldItems.length) {
      this.updateParams();
    }
    if (isInteger(currentItemIndex) && currentItemIndex !== oldCurrentItemIndex) {
      this.scrollToCurrentItem(true);
    }
  }

  /**
   * Вызывается при размонтировании.
   * Выполняет отписку от глобального события "resize".
   * @inheritdoc
   */
  componentWillUnmount () {
    if (isFunction(this.removeGlobalListener)) {
      this.removeGlobalListener();
    }
  }

  /**
   * Обновление параметров при изменении размеров контейнера и/или списка элементов.
   */
  updateParams = () => {
    const { current: listItems } = this.itemsContainerRef;
    const { current: wrapper } = this.itemsWrapperRef;
    const { position } = this.state;

    if (listItems instanceof HTMLElement && wrapper instanceof HTMLElement) {
      const listSize = listItems[this.vertical ? 'scrollHeight' : 'scrollWidth'];
      const wrapperSize = wrapper[this.vertical ? 'offsetHeight' : 'offsetWidth'];
      const maxPosition = wrapperSize - listSize < 0 ? wrapperSize - listSize : 0;

      // Обновление позиции и наличия элементов управления, если изменилось значение maxPosition.
      if (this.maxPosition !== maxPosition) {
        this.maxPosition = maxPosition;
        const data = { hasControls: wrapperSize < listSize };
        if (position < maxPosition) {
          data.position = maxPosition;
          data.withAnimation = false;
        }
        this.setState(data);
      }
    }
  };

  /**
   * Скроллит до текущего элемента.
   * @param {boolean} [needAnimation=false] Нужно ли анимировать смещение.
   */
  scrollToCurrentItem = (needAnimation = false) => {
    const { currentItemIndex = 0, slideStepSize = 100 } = this.props;
    const spaceToItem = currentItemIndex * slideStepSize;

    // Вычисление новой позиции.
    const position = spaceToItem > 0 ? -spaceToItem : 0;
    this.updatePosition(position, needAnimation);
  };

  /**
   * Обработчик клика по стрелкам навигации.
   * @param {boolean} [isForward=false] Если клик на стрелку 'далее'.
   */
  onControl = isForward => {
    const { slideStepSize = 100, slideBy = 3 } = this.props;
    const { position: oldPosition } = this.state;
    const slideSize = slideStepSize * slideBy;

    // Вычисление новой позиции.
    const position = oldPosition + (slideSize * (isForward ? -1 : 1));
    this.updatePosition(position, true);
  };

  /**
   * Обновляет позицию списка элементов.
   * @param {number} newPosition Устанавливаемая позиция.
   * @param {boolean} [withAnimation=false] Если нужно добавлять анимацию при смещении.
   */
  updatePosition = (newPosition, withAnimation = false) => {
    const {
      withAnimation: oldWithAnimation,
      position: oldPosition,
    } = this.state;
    const { maxPosition } = this;
    let position = newPosition;

    // Коррекция позиции, чтобы элементы не выходили за пределы контейнера.
    if (position >= 0) {
      position = 0;
    } else if (position < maxPosition) {
      position = maxPosition;
    }
    if (position !== oldPosition || withAnimation !== oldWithAnimation) {
      this.setState({ position, withAnimation });
    }
  };

  /**
   * Возвращает компонент.
   * @inheritdoc
   */
  render () {
    const {
      items = [],
      itemContainer: Item = 'div',
      getItemProps = noop,
      controlContainer: Control = 'div',
      getControlProps = noop,
      needShowControls = 'auto',
      itemsWrapperProps = {},
      itemsContainerProps = {},
    } = this.props;
    const { position, withAnimation, hasControls } = this.state;

    const needControls = {
      auto: hasControls,
      always: true,
      never: false,
    };
    const isShownControls = needControls[needShowControls];

    const {
      onClick: onPrevControlClick,
      ...prevControlProps
    } = (isFunction(getControlProps) && getControlProps('backward', position >= 0)) || {};
    const {
      onClick: onNextControlClick,
      ...nextControlProps
    } = (isFunction(getControlProps) && getControlProps('forward', position <= this.maxPosition)) || {};
    const {
      className: wrapperClasses,
      ...wrapperProps
    } = itemsWrapperProps || {};
    const {
      className: containerClasses,
      style: containerStyle,
      ...containerProps
    } = itemsContainerProps || {};

    return (
      <Fragment>
        {Boolean(isShownControls) && (
          <Control
            {...prevControlProps}
            onClick={event => {
              isFunction(onPrevControlClick) && onPrevControlClick(event);
              this.onControl(false);
            }}
          />
        )}
        <div
          {...wrapperProps}
          className={cx('items-wrapper', wrapperClasses)}
          ref={this.itemsWrapperRef}
        >
          <div
            {...containerProps}
            className={cx(
              [this.vertical ? 'items-column-container' : 'items-container'],
              containerClasses
            )}
            style={{
              ...containerStyle,
              transform: `translate${this.vertical ? 'Y' : 'X'}(${position}px)`,
              transition: withAnimation && 'all .3s ease 0s',
            }}
            ref={this.itemsContainerRef}
          >
            {Array.isArray(items) && items.map((item, index) => (
              <Item
                key={index}
                {...getItemProps(item, index, position)}
              />
            ))}
          </div>
        </div>
        {Boolean(isShownControls) && (
          <Control
            {...nextControlProps}
            onClick={event => {
              isFunction(onNextControlClick) && onNextControlClick(event);
              this.onControl(true);
            }}
          />
        )}
      </Fragment>
    );
  }
}

export default withGlobalListeners(BaseGallery);

BaseGallery.propTypes = {
  /**
   * Список элементов галереи.
   */
  items: PropTypes.array,

  /**
   * Направление галереи.
   */
  direction: PropTypes.oneOf(['vertical', 'horizontal']),

  /**
   * Если нужно слушать событие 'resize'.
   */
  needListenResize: PropTypes.bool,

  /**
   * Размер прокрутки 1-го элемента.
   */
  slideStepSize: PropTypes.number,

  /**
   * Количество прокручиваемых за раз элементов.
   */
  slideBy: PropTypes.number,

  /**
   * Элемент-контейнер item-а.
   */
  itemContainer: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.func,
  ]),

  /**
   * Функция для получения свойств элемента.
   */
  getItemProps: PropTypes.func,

  /**
   * Элемент-контейнер элемента управления.
   */
  controlContainer: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.string,
    PropTypes.func,
  ]),

  /**
   * Функция для получения свойств элемента управления.
   */
  getControlProps: PropTypes.func,

  /**
   * Как показывать элементы управления.
   */
  needShowControls: PropTypes.oneOf(['auto', 'always', 'never']),

  /**
   * Свойства обертки для item-ов с overflow: hidden.
   */
  itemsWrapperProps: PropTypes.object,

  /**
   * Свойства контейнера со списком item-ов.
   */
  itemsContainerProps: PropTypes.object,

  /**
   * Глобальный обработчик событий.
   */
  addGlobalListener: PropTypes.func,

  /**
   * Индекс текущего элемента галереи.
   */
  currentItemIndex: PropTypes.number,
};
