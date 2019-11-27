import React, { Component, Fragment, createRef } from 'react';
import Draggable from './draggable';
import NavButton from './nav-button';
import eq from 'lodash/fp/eq';
import inRange from 'lodash/inRange';
import isEqual from 'lodash/isEqual';
import map from 'lodash/map';
import size from 'lodash/size';
import boundsOf from '../helpers/bounds-of';
import getChild from '../helpers/get-child';
import getRelativePos from '../helpers/get-relative-pos';
import findSiblingIndex from '../helpers/find-sibling-index';
import withGlobalListeners from '../hoc/with-global-listeners';
import classnames from 'classnames/bind';
import classes from './carousel.scss';
import PropTypes from 'prop-types';

const cx = classnames.bind(classes);

const isAuto = eq('auto');

/**
 * Возвращает максимальный индекс списка.
 * @param {Array} list Список.
 * @return {number} Максимальный индекс.
 */
const maxIndexOf = list => {
  const listSize = size(list);
  return listSize > 0 ? listSize - 1 : 0;
};

/**
 * Проверяет, находится ли элемент правее левой границы заданной зоны.
 * @param {Element} target Проверяемый элемент.
 * @param {DOMRect|ClientRect} viewport Зона проверки.
 * @return {boolean} Находится ли элемент правее левой границы заданной зоны.
 */
const isMoreRight = (target, viewport) => target && boundsOf(target).left >= viewport.left;

/**
 * Проверяет, находится ли элемент ниже верхней границы заданной зоны.
 * @param {Element} target Проверяемый элемент.
 * @param {DOMRect|ClientRect} viewport Зона проверки.
 * @return {boolean} Находится ли элемент ниже верхней границы заданной зоны.
 */
const isMoreBottom = (target, viewport) => target && boundsOf(target).top >= viewport.top;

/**
 * Компонент карусели.
 */
export class Carousel extends Component {
  /**
   * Конструктор компонента карусели.
   * @param {Object} props Свойства.
   */
  constructor (props) {
    const {
      items,
      targetIndex = 0,
    } = props;

    super(props);

    this.state = {
      currentIndex: inRange(targetIndex, size(items))
        ? targetIndex
        : 0,
      currentOffset: 0,
      withTransition: false,
      isAllItemsVisible: false,
    };
    this.dragStartOffset = { x: 0, y: 0 };

    this.wrapperRef = createRef(); // для определения viewport'а галереи
    this.containerRef = createRef(); // для определения размеров списка элементов
    this.prevButtonRef = createRef();
    this.nextButtonRef = createRef();

    this.moveBackward = this.moveBackward.bind(this);
    this.moveForward = this.moveForward.bind(this);
    this.onDragEnd = this.onDragEnd.bind(this);
    this.onDragStart = this.onDragStart.bind(this);
    this.renderItem = this.renderItem.bind(this);
    this.saveOffset = this.saveOffset.bind(this);
  }

  /**
   * Возвращает элемент списка.
   * @param {*} item Элемент списка.
   * @param {number} index Индекс.
   * @return {ReactElement} Элемент списка.
   */
  static defaultRenderItem (item, index) {
    return (
      <div key={index}>
        {String(item)}
      </div>
    );
  }

  /**
   * Возвращает кнопку управления.
   * @param {Object} props Свойства кнопки.
   * @return {ReactElement} Кнопка управления.
   */
  static defaultRenderControl (props) {
    return (
      <NavButton {...props} />
    );
  }

  /**
   * Выполняет подписку на глобальное событие "resize".
   * Запускает прокрутку до текущего элемента.
   * Обновляет информацию о состоянии отображения элементов.
   */
  componentDidMount () {
    const { addGlobalListener } = this.props;

    this.offWindowResize = addGlobalListener(
      'resize',
      () => {
        this.toggleTransition(false);
        this.scrollToItem();
        this.updateItemsVisibility();
      }
    );

    this.scrollToItem();
    this.updateItemsVisibility();
  }

  /**
   * По необходимости обновляет индекс текущего элемента.
   * Обновляет информацию о состоянии отображения элементов.
   * @param {Object} prevProps Предыдущие свойства.
   */
  componentDidUpdate (prevProps) {
    const { targetIndex } = this.props;
    const { targetIndex: prevTargetIndex } = prevProps;

    if (targetIndex !== prevTargetIndex) {
      this.setCurrentIndex(targetIndex);
      this.toggleTransition(true);
    }

    this.updateItemsVisibility();
  }

  /**
   * Выполняет отписку от глобального события "resize".
   */
  componentWillUnmount () {
    this.offWindowResize();
  }

  /**
   * Обновляет информацию о состоянии отображения элементов.
   */
  updateItemsVisibility () {
    const isAllItemsVisible = this.isAllItemsVisible();

    if (isAllItemsVisible !== this.state.isAllItemsVisible) {
      this.setState({ isAllItemsVisible });
    }
  }

  /**
   * По возможности выполняет прокрутку карусели вперед.
   */
  moveForward () {
    const { currentIndex } = this.state;
    const { step = 3, items } = this.props;
    const newIndex = currentIndex + step;

    this.toggleTransition(true);
    this.setCurrentIndex(
      newIndex < size(items)
        ? newIndex
        : maxIndexOf(items)
    );
  }

  /**
   * По возможности выполняет прокрутку карусели назад.
   */
  moveBackward () {
    const { vertical, step = 3 } = this.props;
    const { currentIndex } = this.state;
    const { current: containerEl } = this.containerRef;
    const viewport = this.getViewport();

    const newIndex = findSiblingIndex({
      target: getChild(containerEl, currentIndex),
      startIndex: currentIndex,
      defaultResult: currentIndex,
      increment: -1,

      // ищем элемент который находится ниже/правее чем верхняя/левая граница viewport'а
      isSuitable: sibling => vertical
        ? isMoreBottom(sibling, viewport)
        : isMoreRight(sibling, viewport),

      // при нахождении первого непрошедшего проверку останавливаем цикл
      needBreakLoop: passed => !passed,
    });

    this.toggleTransition(true);
    this.setCurrentIndex(
      newIndex !== -1 && newIndex - step >= 0
        ? newIndex - step
        : 0
    );
  }

  /**
   * Обновляет позицию карусели при захвате мышкой.
   * @param {Object} dragEvent Нестандартное событие из компонента Draggable.
   */
  onDragStart (dragEvent) {
    this.saveOffset(dragEvent);
    this.saveDragStartOffset(dragEvent);
    this.toggleTransition(true);
  }

  /**
   * Обновляет позицию карусели при отпускании мышкой.
   * @param {Object} dragEvent Нестандартное событие из компонента Draggable.
   * @param {Object} dragEvent.offset Смещение.
   */
  onDragEnd ({ offset }) {
    const { dragStartOffset } = this;
    const { currentIndex } = this.state;


    if (!isEqual(dragStartOffset, offset)) {
      const { current: containerEl } = this.containerRef;
      const { vertical, items } = this.props;
      const backward = vertical
        ? dragStartOffset.y < offset.y
        : dragStartOffset.x < offset.x;
      const edgeIndex = backward ? 0 : maxIndexOf(items);

      // ищем элемент, который находится за пределами левой/верхней границы viewport'а относительно текущего
      const newIndex = findSiblingIndex({
        target: getChild(containerEl, currentIndex),
        startIndex: currentIndex,
        increment: backward ? -1 : +1,
        isSuitable: this.makeNearestSiblingChecker({
          viewport: this.getViewport(),
          vertical,
          backward,
        }),

        // если прокрутили вперед, останавливаем поиск когда нашли первый прошедший проверку, иначе - первый непрошедший
        needBreakLoop: passed => backward ? !passed : passed,
      });

      this.setCurrentIndex(newIndex !== -1 ? newIndex : edgeIndex);
    }
  }

  /**
   * Возвращает новую функцию проверки "родственного" элемента.
   * @param {Object} props Свойства.
   * @param {Object} props.viewport Область видимости галереи.
   * @param {boolean} props.vertical Вертикальная ли галерея.
   * @param {boolean} props.backward Была ли произведена прокрутка к началу.
   * @return {function (Element): boolean} Функция проверки "родственного" элемента.
   */
  makeNearestSiblingChecker ({ viewport, vertical, backward }) {
    const verticalBoundKey = backward ? 'bottom' : 'top';
    const horizontalBoundKey = backward ? 'right' : 'left';

    return vertical
      ? sibling => viewport.top < boundsOf(sibling)[verticalBoundKey]
      : sibling => viewport.left < boundsOf(sibling)[horizontalBoundKey];
  }

  /**
   * Устанавливает индекс элемента к которому прокручена карусель.
   * @param {*} newIndex Индекс элемента к которому прокручена карусель.
   */
  setCurrentIndex (newIndex) {
    this.setState({ currentIndex: newIndex });
    this.scrollToItem(newIndex);
  }

  /**
   * Прокручивает галерею к заданному элементу по индексу.
   * @param {number} [targetIndex=this.state.currentIndex] Индекс.
   */
  scrollToItem (targetIndex = this.state.currentIndex) {
    const { vertical } = this.props;
    const { current: containerEl } = this.containerRef;
    const targetItemEl = containerEl.children[targetIndex];

    if (targetItemEl) {
      if (this.isAllItemsVisible()) {
        this.setCurrentOffset(0);
      } else {
        const viewport = this.getViewport();
        const targetItemPos = getRelativePos(targetItemEl);
        const viewportEndBound = vertical
          ? viewport.bottom
          : viewport.right;
        const nextItemsEndBound = vertical
          ? viewport.top + containerEl.scrollHeight - targetItemPos.y
          : viewport.left + containerEl.scrollWidth - targetItemPos.x;

        if (nextItemsEndBound >= viewportEndBound) {
          const itemBound = vertical
            ? targetItemPos.y
            : targetItemPos.x;
          this.setCurrentOffset(-itemBound);
        } else {
          const maxItemsEndBound = vertical
            ? viewport.top + containerEl.scrollHeight
            : viewport.left + containerEl.scrollWidth;
          this.setCurrentOffset(viewportEndBound - maxItemsEndBound);
        }
      }
    }
  }

  /**
   * Определяет, видны ли все элементы галереи.
   * @return {boolean} Видны ли все элементы галереи.
   */
  isAllItemsVisible () {
    const itemsSize = this.getItemsSize();
    const viewportSize = this.getViewportSize();

    return Math.round(viewportSize) >= itemsSize;
  }

  /**
   * Определяет минимально возможное смещение списка элементов карусели.
   * @return {number} Минимально возможное смещение.
   */
  defineMinOffset () {
    const { vertical } = this.props;
    const { current: containerEl } = this.containerRef;
    let minOffset = NaN;

    if (containerEl) {
      const viewport = this.getViewport();
      const viewportEndBound = vertical
        ? viewport.bottom
        : viewport.right;
      const maxItemsEndBound = vertical
        ? viewport.top + containerEl.scrollHeight
        : viewport.left + containerEl.scrollWidth;
      minOffset = viewportEndBound - maxItemsEndBound;
    }

    return minOffset;
  }

  /**
   * Возвращает длину/ширину списка элементов (в зависимости от ориентации карусели).
   * @return {number} Длина/ширина списка элементов.
   */
  getItemsSize () {
    const { vertical } = this.props;
    const { current: containerEl } = this.containerRef;
    return containerEl && containerEl[vertical ? 'scrollHeight' : 'scrollWidth'];
  }

  /**
   * Возвращает длину/ширину области видимости карусели (в зависимости от ориентации).
   * @return {number} Длина/ширина области видимости.
   */
  getViewportSize () {
    const { vertical } = this.props;
    return this.getViewport()[vertical ? 'height' : 'width'];
  }

  /**
   * Возвращает данные прямоугольной области видимости карусели.
   * @return {DOMRect|ClientRect} Данные прямоугольной области видимости карусели.
   */
  getViewport () {
    return boundsOf(this.wrapperRef.current);
  }

  /**
   * Сохраняет в состоянии смещение карусели из события.
   * @param {Object} dragEvent Нестандартное событие из компонента Draggable.
   * @param {Object} dragEvent.offset Смещение.
   */
  saveOffset ({ offset }) {
    const { vertical } = this.props;
    this.setCurrentOffset(offset[vertical ? 'y' : 'x']);
  }

  /**
   * Сохраняет смещение карусели из события на момент старта перетаскивания мышью.
   * @param {Object} dragEvent Нестандартное событие из компонента Draggable.
   * @param {Object} dragEvent.offset Смещение.
   */
  saveDragStartOffset ({ offset }) {
    this.dragStartOffset = offset;
  }

  /**
   * Сохраняет в состоянии смещение карусели.
   * @param {Object} newOffset Смещение.
   */
  setCurrentOffset (newOffset) {
    this.setState({ currentOffset: newOffset || 0 });
  }

  /**
   * Переключает состояние плавности прокрутки.
   * @param {*} withTransition Нужна ли плавность.
   */
  toggleTransition (withTransition) {
    if (Boolean(withTransition) !== this.state.withTransition) {
      this.setState({
        withTransition: Boolean(withTransition),
      });
    }
  }

  /**
   * Выводит элемент карусели.
   * @param {*} item Элемент списка.
   * @param {number} index Индекс.
   * @return {ReactElement} Элемент карусели.
   */
  renderItem (item, index) {
    const {
      renderItem = Carousel.defaultRenderItem,
    } = this.props;

    return renderItem(item, index);
  }

  /**
   * Возвращает компонент.
   * @inheritDoc.
   */
  render () {
    const {
      currentOffset,
      withTransition,
      isAllItemsVisible,
    } = this.state;
    const {
      items,
      draggable = 'auto',
      vertical,
      containerProps = {},
      withControls = 'auto',
      renderNavButton = Carousel.defaultRenderControl,
    } = this.props;
    const canDrag = (isAuto(draggable) && !isAllItemsVisible) || draggable === true;
    const needShowControls = (isAuto(withControls) && !isAllItemsVisible) || withControls === true;

    return (
      <div
        {...containerProps}
        className={cx(
          'carousel-wrapper',
          containerProps.className
        )}
      >
        <Draggable
          active={canDrag}
          axis={vertical ? 'y' : 'x'}
          offsetX={!vertical ? currentOffset : 0}
          offsetY={vertical ? currentOffset : 0}
          transitionDuration={withTransition ? 320 : undefined}
          containerProps={{
            ref: this.wrapperRef,
            className: cx('full-size'),
          }}
          onDragStart={this.onDragStart}
          onDrag={this.saveOffset}
          onDragEnd={this.onDragEnd}
          children={(
            <div
              className={cx([
                'carousel-items-container',
                vertical && 'vertical',
              ])}
              ref={this.containerRef}
              children={map(items, this.renderItem)}
            />
          )}
        />
        {needShowControls && (
          <Fragment>
            {renderNavButton({
              type: 'backward',
              onUse: this.moveBackward,
              canUse: currentOffset < 0,
              vertical,
            })}
            {renderNavButton({
              type: 'forward',
              onUse: this.moveForward,
              canUse: currentOffset > this.defineMinOffset(),
              vertical,
            })}
          </Fragment>
        )}
      </div>
    );
  }
}

Carousel.propTypes = {
  /**
   * Шаг прокрутки. По умолчанию 3.
   */
  step: PropTypes.number,

  /**
   * Данные элементов списка.
   */
  items: PropTypes.array,

  /**
   * Индекс элемента к которому нужно прокрутиться. По умолчанию 0.
   */
  targetIndex: PropTypes.number,

  /**
   * Определяет ориентацию карусели. По умолчанию false.
   */
  vertical: PropTypes.bool,

  /**
   * Определяет, можно ли перетаскивать мышью.
   * По умолчанию автоматически определяется в зависимости от того, влезли все элементы или нет.
   */
  draggable: PropTypes.oneOf([true, false, 'auto']),

  /**
   * Определяет, нужно ли показывать кнопки прокрутки.
   * По умолчанию автоматически определяется в зависимости от того, влезли все элементы или нет.
   */
  withControls: PropTypes.oneOf([true, false, 'auto']),

  /**
   * Определяет, как вывести элемент. По умолчанию Выведет div с приведенным к строке элементом.
   */
  renderItem: PropTypes.func,

  /**
   * Определяет, как вывести кнопку прокрутки. По умолчанию выведет стандартную кнопку.
   */
  renderNavButton: PropTypes.func,

  /**
   * Свойства элемента контейнера. По умолчанию пустой объект.
   */
  containerProps: PropTypes.object,

  /**
   * Должна выполнить подписку на глобальное событие и вернуть функцию отписки.
   */
  addGlobalListener: PropTypes.func,
};

export default withGlobalListeners(Carousel);
