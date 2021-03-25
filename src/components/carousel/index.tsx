import React, { Component, createRef } from 'react';
import Draggable, { Control } from './draggable';
import { inRange, isEqual, noop, size, stubFalse } from 'lodash';
import { eq } from 'lodash/fp';
import boundsOf from '../helpers/bounds-of';
import Point, { IPoint } from '../helpers/point';
import maxIndexOf from '../helpers/max-index-of';
import getRelativePos from '../helpers/get-relative-pos';
import findChildElement from '../helpers/find-child-element';
import ArrowButton, { Props as ButtonProps } from '../arrow-button';
import on from '../helpers/on';
import classnames from 'classnames/bind';
import DraggableEvent from './helpers/draggable-event';
import styles from './carousel.scss';

export interface Props {
  items?: any[]
  step?: number
  draggable?: boolean | 'auto'
  infinite?: boolean
  vertical?: boolean
  autoplay?: boolean
  withControls?: boolean
  autoplayTimeout?: number
  targetIndex?: number
  autoplayHoverPause?: boolean
  onReady?: (currentIndex: number) => void
  renderItem?: typeof Carousel.defaultRenderItem
  renderControl?: typeof Carousel.defaultRenderControl
  onChangeTargetIndex?: (newIndex: number) => void
  containerProps?: React.HTMLProps<HTMLDivElement>
  viewportElementProps?: React.HTMLProps<HTMLDivElement>
  controlProps?: ButtonProps
}

interface State {
  currentOffset: number
  isAllItemsVisible: boolean
}

interface ControlData {
  canUse: boolean
  onUse: () => void
  type: 'forward' | 'backward'
  vertical?: boolean
}

const CLONE_FACTOR = 3;

const cx = classnames.bind(styles);
const isAuto = eq('auto');

// не по умолчанию так как проблемы с storybook: https://github.com/styleguidist/react-docgen-typescript/issues/334
export class Carousel extends Component<Props, State> {
  infinite: boolean
  dragStartClient: IPoint
  dragStartOffset: IPoint
  currentIndex: number
  containerRef: React.RefObject<HTMLDivElement>
  wrapperRef: React.RefObject<HTMLDivElement>
  timerId?: number
  canAutoMove?: boolean
  mounted?: boolean

  offWindowResize: () => void

  toggleDragTransition: Control['toggleTransition']
  setDragOffset: Control['setOffset']
  isGrabbed: Control['isGrabbed']

  /**
   * Конструктор.
   * @param props Свойства.
   */
  constructor (props: Props) {
    const { items, infinite = true, targetIndex = 0 } = props;

    super(props);

    // state & data
    this.infinite = Boolean(infinite);
    this.dragStartClient = Point();
    this.dragStartOffset = Point();
    this.currentIndex = inRange(targetIndex, size(items))
      ? targetIndex
      : 0;
    this.state = {
      currentOffset: 0,
      isAllItemsVisible: false,
    };

    // refs
    this.containerRef = createRef<HTMLDivElement>(); // для определения размеров списка элементов
    this.wrapperRef = createRef<HTMLDivElement>(); // для определения viewport'а карусели

    // bound methods
    this.takeDragControl = this.takeDragControl.bind(this);
    this.moveBackward = this.moveBackward.bind(this);
    this.moveForward = this.moveForward.bind(this);
    this.onDragEnd = this.onDragEnd.bind(this);
    this.onDragMove = this.onDragMove.bind(this);
    this.onDragStart = this.onDragStart.bind(this);

    // stubs
    this.offWindowResize = noop;
    this.toggleDragTransition = noop;
    this.setDragOffset = noop;
    this.isGrabbed = stubFalse;
  }

  /**
   * Возвращает элемент списка.
   * @param item Элемент списка.
   * @param index Индекс.
   * @return Элемент списка.
   */
  static defaultRenderItem (item: any, index: React.Key) {
    return (
      <div key={index}>{String(item)}</div>
    );
  }

  /**
   * Возвращает кнопку управления.
   * @param data Данные для вывода кнопки.
   * @param data.canUse Можно ли использовать кнопку.
   * @param data.onUse Выполнится при нажатии на кнопку.
   * @param props Свойства ArrowButton.
   * @return Кнопка управления.
   */
  static defaultRenderControl (
    { canUse, onUse, type, vertical }: ControlData,
    props: ButtonProps = { size: 's' }
  ) {
    const forward = vertical ? 'down' : 'right';
    const backward = vertical ? 'up' : 'left';

    return (
      <ArrowButton
        {...props}
        className={cx(
          'control',
          vertical && 'vertical',
          type
        )}
        direction={type === 'forward' ? forward : backward}
        onClick={onUse}
        disabled={!canUse}
      />
    );
  }

  /**
   * Возвращает функцию для поиска наиболее отдаленного элемента карусели от стартовой границы viewport'а.
   * @param data Данные.
   * @param data.viewport Область видимости галереи.
   * @param data.vertical Показывает, что прокрутка выполняется по вертикали.
   * @return Функция для поиска наиболее отдаленного элемента.
   */
  static makeFurthestSiblingChecker ({
    vertical,
    viewport,
  }: {
    vertical: boolean
    viewport: DOMRect
  }) {
    return vertical
      ? (sibling: Element) => boundsOf(sibling).top >= viewport.top
      : (sibling: Element) => boundsOf(sibling).left >= viewport.left;
  }

  /**
   * Возвращает функцию для поиска наиболее близкого элемента карусели к viewport'у.
   * @param data Данные.
   * @param data.viewport Область видимости галереи.
   * @param data.vertical Показывает, что прокрутка выполняется по вертикали.
   * @param data.backward Показывает, что прокрутка выполняется к началу списка.
   * @return Функция для поиска наиболее близкого элемента.
   */
  static makeNearestSiblingChecker ({
    viewport,
    vertical,
    backward,
  }: {
    backward: boolean
    vertical: boolean
    viewport: DOMRect
  }) {
    const verticalBoundKey = backward ? 'bottom' : 'top';
    const horizontalBoundKey = backward ? 'right' : 'left';

    return vertical
      ? (sibling: Element) => viewport.top < boundsOf(sibling)[verticalBoundKey]
      : (sibling: Element) => viewport.left < boundsOf(sibling)[horizontalBoundKey];
  }

  /**
   * Геттер элемента списка.
   * @return Элемент списка или null.
   */
  get listElement () {
    return this.containerRef.current;
  }

  /**
   * Выполняет подписку на глобальное событие "resize".
   * Запускает прокрутку до текущего элемента.
   * Обновляет информацию о состоянии отображения элементов.
   */
  componentDidMount () {
    const { autoplay, onReady } = this.props;

    this.offWindowResize = on(window, 'resize', () => {
      this.toggleDragTransition(false);
      this.scrollToItem({ needTransition: false });
      this.updateItemsVisibility();
      this.toggleDragTransition(true);
    });

    this.toggleMounted(true);
    this.forceUpdate(() => {
      this.scrollToItem({ needTransition: false });
      this.updateItemsVisibility();
    });

    autoplay && this.enableAutoplay();
    onReady && onReady(this.currentIndex);
  }

  /**
   * По необходимости обновляет индекс текущего элемента.
   * Обновляет информацию о состоянии отображения элементов.
   * @param prevProps Предыдущие свойства.
   */
  componentDidUpdate (prevProps: Props) {
    const { autoplay, targetIndex } = this.props;
    const {
      autoplay: prevAutoplay,
      targetIndex: prevTargetIndex,
    } = prevProps;

    if (targetIndex !== prevTargetIndex) {
      this.setCurrentIndex(targetIndex || 0);
      this.toggleDragTransition(true);
    }

    if (!autoplay !== !prevAutoplay) {
      autoplay
        ? this.enableAutoplay()
        : this.disableAutoplay();
    }

    this.updateItemsVisibility();
  }

  /**
   * Выполняет отписку от глобального события "resize".
   * Отключает таймер автоматической прокрутки.
   */
  componentWillUnmount () {
    this.offWindowResize();
    this.disableAutoplay();
    this.toggleMounted(false);
  }

  /**
   * Включает автоматическую прокрутку.
   */
  enableAutoplay () {
    const { autoplayTimeout = 3000 } = this.props;

    this.toggleAutoMove(true);

    this.timerId = window.setInterval(() => {
      this.canAutoMove && this.moveForward();
    }, autoplayTimeout);
  }

  /**
   * Отключает автоматическую прокрутку.
   */
  disableAutoplay () {
    this.timerId && clearInterval(this.timerId);
  }

  /**
   * Переключает флаг возможности автоматической прокрутки.
   * @param canAutoMove Флаг возможности автоматической прокрутки.
   */
  toggleAutoMove (canAutoMove: boolean) {
    this.canAutoMove = Boolean(canAutoMove);
  }

  /**
   * Переключает флаг, определяющий, что компонент смонтирован.
   * @param mounted Флаг.
   */
  toggleMounted (mounted: boolean) {
    this.mounted = Boolean(mounted);
  }

  /**
   * Определяет, можно ли перетаскивать карусель.
   * @return Можно ли перетаскивать карусель?
   */
  canDrag () {
    const { isAllItemsVisible } = this.state;
    const { draggable = 'auto' } = this.props;
    const autoDraggable = isAuto(draggable);

    return (autoDraggable && !isAllItemsVisible) || draggable === true;
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
    const { step = 3 } = this.props;

    this.infinite
      ? this.moveInfinite(step, true)
      : this.moveForwardFinite(step);
  }

  /**
   * Выполняет конечную прокрутку карусели вперед.
   * @param step На сколько элементов надо прокрутить карусель.
   */
  moveForwardFinite (step: number) {
    const { currentIndex } = this;
    const newIndex = currentIndex + step;

    this.toggleDragTransition(true);
    this.setCurrentIndex(
      newIndex < size((this.listElement as any).children)
        ? newIndex
        : maxIndexOf((this.listElement as any).children)
    );
  }

  /**
   * По возможности выполняет прокрутку карусели назад.
   */
  moveBackward () {
    const { step = 3 } = this.props;

    this.infinite
      ? this.moveInfinite(step, false)
      : this.moveBackwardFinite(step);
  }

  /**
   * Выполняет конечную прокрутку карусели назад.
   * @param step На сколько элементов надо прокрутить карусель.
   */
  moveBackwardFinite (step: number) {
    const newIndex = findChildElement({
      target: this.listElement as any,
      startIndex: this.currentIndex,
      defaultResult: this.currentIndex,
      increment: -1,

      // ищем элемент который находится ниже/правее чем верхняя/левая граница viewport'а
      isSuitable: Carousel.makeFurthestSiblingChecker({
        viewport: this.getViewport() as DOMRect,
        vertical: Boolean(this.props.vertical),
      }),

      // при нахождении первого непрошедшего проверку останавливаем цикл
      needBreakLoop: passed => !passed,
    });

    this.toggleDragTransition(true);
    this.setCurrentIndex(
      newIndex !== -1 && newIndex - step >= 0
        ? newIndex - step
        : 0
    );
  }

  /**
   * Выполняет прокрутка в бесконечном режиме.
   * @param step Количество элементов для прокрутки.
   * @param forward Нужно выполнить прокрутку вперед?
   */
  moveInfinite (step: number, forward: boolean) {
    const { currentIndex } = this;
    const { currentOffset } = this.state;
    const { items, vertical } = this.props;
    const realItemsCount = size(items);

    if ((forward && currentIndex >= realItemsCount) || (!forward && currentIndex < realItemsCount)) {
      const itemsSize = (this.listElement as any)[vertical ? 'scrollHeight' : 'scrollWidth'] / CLONE_FACTOR;
      const newOffset = currentOffset + (forward ? itemsSize : -itemsSize);
      const newIndex = currentIndex + (forward ? -realItemsCount : realItemsCount);

      this.setCurrentOffset(newOffset, { withStateUpdate: false });

      // отключаем плавность и смещаем карусель без видимых изменений
      this.toggleDragTransition(false);
      this.setCurrentIndex(newIndex, { needTransition: false });

      // включаем плавность и перемещаемся к следующему элементу
      this.toggleDragTransition(true);
      this.setCurrentIndex(this.currentIndex + (forward ? step : -step));
    } else {
      forward
        ? this.moveForwardFinite(step)
        : this.moveBackwardFinite(step);
    }
  }

  /**
   * Сохраняет смещение элементов карусели и позицию при захвате мышкой.
   * Отключает плавную прокрутку.
   * @param dragEvent Событие.
   */
  onDragStart (dragEvent: DraggableEvent) {
    this.disableAutoplay();
    this.saveDragStartData(dragEvent);
    this.toggleDragTransition(false);
  }

  /**
   * При необходимости запускает корректировку смещения.
   * @param dragEvent Событие.
   */
  onDragMove (dragEvent: DraggableEvent) {
    this.infinite && this.correctInfiniteOffset(dragEvent);
  }

  /**
   * Корректирует смещение в бесконечном режиме.
   * @param dragEvent Событие.
   */
  correctInfiniteOffset (dragEvent: DraggableEvent) {
    const { vertical } = this.props;
    const { offset, client } = dragEvent;
    const { dragStartClient } = this;
    const { forward, backward } = this.defineDirection(dragStartClient, client);
    const viewport = this.getViewport() as DOMRect;

    const offsetValue = offset[vertical ? 'y' : 'x'];
    const lastItem = (this.listElement as HTMLElement).lastElementChild as HTMLElement;
    const lastItemStartBound = boundsOf(lastItem)[vertical ? 'top' : 'left'];
    const viewportStartBound = viewport[vertical ? 'top' : 'left'];
    const viewportEndBound = viewport[vertical ? 'bottom' : 'right'];
    const itemsSize = (this.listElement as HTMLElement)[vertical ? 'scrollHeight' : 'scrollWidth'] / CLONE_FACTOR;

    if (forward && lastItemStartBound < viewportEndBound) {
      const newOffset = offsetValue + itemsSize;

      dragEvent.preventDefault();
      this.setCurrentOffset(newOffset, { withStateUpdate: false });
      this.saveDragStartData(dragEvent);
    } else if (backward && viewportStartBound < this.findRealItemsStartBound()) {
      const newOffset = offsetValue - itemsSize;

      dragEvent.preventDefault();
      this.setCurrentOffset(newOffset, { withStateUpdate: false });
      this.saveDragStartData(dragEvent);
    }
  }

  /**
   * Определяет начальную границу (левую или верхнюю) списка не клонированных элементов.
   * @return Начальную граница.
   */
  findRealItemsStartBound () {
    let result = NaN;

    if (this.listElement) {
      const { vertical, items } = this.props;
      const index = this.infinite ? size(items) : 0;
      const firstNotCloneItem = this.listElement.children[index];

      if (firstNotCloneItem) {
        result = boundsOf(firstNotCloneItem)[vertical ? 'top' : 'left'];
      }
    }

    return result;
  }

  /**
   * Выполняет прокрутку к элементу, который наиболее близок к стартовой границе viewport'а.
   * @param dragEvent Событие.
   */
  onDragEnd ({ offset: endOffset, client: endClient }: DraggableEvent) {
    const {
      dragStartOffset: startOffset,
      dragStartClient: startClient,
    } = this;

    if (this.listElement && !isEqual(startOffset, endOffset)) {
      const { backward } = this.defineDirection(startClient, endClient);
      const lastIndex = maxIndexOf(this.listElement.children);
      const edgeIndex = backward ? 0 : lastIndex;

      // ищем элемент, который находится ближе всего к начальной границе viewport'а
      const newIndex = findChildElement({
        target: this.listElement as any,
        startIndex: backward ? lastIndex : 0,
        increment: backward ? -1 : +1,
        isSuitable: Carousel.makeNearestSiblingChecker({
          viewport: this.getViewport() as any,
          vertical: Boolean(this.props.vertical),
          backward,
        }),

        // если прокрутили вперед, завершаем поиск когда нашли первый прошедший проверку, иначе - первый непрошедший
        needBreakLoop: passed => backward ? !passed : passed,
      });

      this.setCurrentIndex(newIndex !== -1 ? newIndex : edgeIndex);
      this.toggleDragTransition(true);
    }

    this.props.autoplay && this.canDrag() && this.enableAutoplay();

    this.updateItemsVisibility();
  }

  /**
   * Определяет информацию о направлении между двумя точками.
   * @param start Точка.
   * @param end Точка.
   * @return Информация.
   */
  defineDirection (start: IPoint, end: IPoint) {
    const { vertical } = this.props;
    const key = vertical ? 'y' : 'x';
    const delta = start[key] - end[key];

    return { forward: delta > 0, backward: delta < 0 };
  }

  /**
   * Устанавливает индекс элемента к которому прокручена карусель.
   * @param newIndex Индекс элемента к которому прокручена карусель.
   * @param options Опции.
   * @param options.withScroll Нужна ли прокрутка.
   * @param options.needTransition Нужна ли анимация при прокрутке.
   */
  setCurrentIndex (newIndex: number, { withScroll = true, needTransition = true } = {}) {
    const { onChangeTargetIndex } = this.props;
    this.currentIndex = newIndex;

    withScroll && this.scrollToItem({ targetIndex: newIndex, needTransition });
    onChangeTargetIndex && onChangeTargetIndex(this.currentIndex);
  }

  /**
   * Прокручивает галерею к заданному элементу по индексу.
   * @param options Свойства.
   * @param options.targetIndex Индекс.
   * @param options.needTransition Нужна ли плавная анимация прокрутки.
   */
  scrollToItem ({
    targetIndex = this.currentIndex,
    needTransition = true,
  } = {}) {
    const targetItemEl = (this.listElement as HTMLElement).children[targetIndex];

    if (targetItemEl) {
      this.toggleDragTransition(needTransition);

      if (this.isAllItemsVisible()) {
        this.setCurrentOffset(0);
      } else {
        const { vertical } = this.props;
        const viewport = this.getViewport() as DOMRect;
        const targetItemPos = getRelativePos(targetItemEl);
        const viewportEndBound = vertical
          ? viewport.bottom
          : viewport.right;
        const nextItemsEndBound = vertical
          ? viewport.top + (this.listElement as HTMLElement).scrollHeight - targetItemPos.y
          : viewport.left + (this.listElement as HTMLElement).scrollWidth - targetItemPos.x;

        if (nextItemsEndBound >= viewportEndBound) {
          const itemBound = vertical
            ? targetItemPos.y
            : targetItemPos.x;
          this.setCurrentOffset(-itemBound);
        } else {
          const maxItemsEndBound = vertical
            ? viewport.top + (this.listElement as HTMLElement).scrollHeight
            : viewport.left + (this.listElement as HTMLElement).scrollWidth;
          this.setCurrentOffset(viewportEndBound - maxItemsEndBound);
        }
      }
    }
  }

  /**
   * Определяет, видны ли все элементы галереи.
   * @return Видны ли все элементы галереи.
   */
  isAllItemsVisible () {
    const realItemsSize = this.getRealItemsSize();
    const viewportSize = this.getViewportSize();

    return Math.round(viewportSize) >= realItemsSize;
  }

  /**
   * Определяет минимально возможное смещение списка элементов карусели.
   * @return Минимально возможное смещение.
   */
  defineMinOffset () {
    const { vertical } = this.props;
    let minOffset = NaN;

    if (this.listElement) {
      const viewport = this.getViewport() as DOMRect;
      const viewportEndBound = vertical
        ? viewport.bottom
        : viewport.right;
      const maxItemsEndBound = vertical
        ? viewport.top + this.listElement.scrollHeight
        : viewport.left + this.listElement.scrollWidth;
      minOffset = viewportEndBound - maxItemsEndBound;
    }

    return minOffset;
  }

  /**
   * Возвращает длину/ширину списка элементов (в зависимости от ориентации карусели).
   * @return Длина/ширина списка элементов.
   */
  getRealItemsSize () {
    let result = 0;

    if (this.listElement) {
      const { items, vertical } = this.props;
      const firstChild = this.listElement.children[0];
      const lastChild = this.listElement.children[size(items) - 1];

      if (firstChild && lastChild) {
        const startBound = boundsOf(firstChild)[vertical ? 'top' : 'left'];
        const endBound = boundsOf(lastChild)[vertical ? 'bottom' : 'right'];

        result = endBound - startBound;
      }
    }

    return result;
  }

  /**
   * Возвращает длину/ширину области видимости карусели (в зависимости от ориентации).
   * @return Длина/ширина области видимости.
   */
  getViewportSize () {
    const { vertical } = this.props;
    return (this.getViewport() as DOMRect)[vertical ? 'height' : 'width'];
  }

  /**
   * Возвращает данные прямоугольной области видимости карусели.
   * @return Данные прямоугольной области видимости карусели.
   */
  getViewport () {
    return boundsOf(this.wrapperRef.current);
  }

  /**
   * Сохраняет смещение карусели и позицию из события при старте захвата.
   * @param dragEvent Нестандартное событие из компонента Draggable.
   * @param dragEvent.offset Смещение.
   * @param dragEvent.client Позиция.
   */
  saveDragStartData ({ offset, client }: { offset: IPoint, client: IPoint }) {
    this.dragStartOffset = offset;
    this.dragStartClient = client;
  }

  /**
   * Сохраняет в состоянии смещение карусели.
   * @param newOffset Смещение.
   * @param options Опции.
   */
  setCurrentOffset (newOffset: number, { withStateUpdate = true } = {}) {
    const { vertical } = this.props;

    this.setDragOffset(
      !vertical ? newOffset : 0,
      vertical ? newOffset : 0
    );

    withStateUpdate && this.setState({ currentOffset: newOffset });
  }

  /**
   * Получает управление от Draggable.
   * @param draggableControls Функции управления Draggable.
   */
  takeDragControl ({ isGrabbed, setOffset, toggleTransition }: Control) {
    this.toggleDragTransition = toggleTransition;
    this.setDragOffset = setOffset;
    this.isGrabbed = isGrabbed;
  }

  /**
   * Возвращает компонент.
   * @inheritDoc
   */
  render () {
    const { currentOffset, isAllItemsVisible } = this.state;
    const {
      autoplay,
      autoplayHoverPause,
      vertical,
      containerProps = {},
      viewportElementProps = {},
      withControls = 'auto',
      renderControl = Carousel.defaultRenderControl,
      controlProps,
    } = this.props;
    const needShowControls = (isAuto(withControls) && !isAllItemsVisible) || withControls === true;

    return (
      <div
        {...containerProps}
        className={cx(
          'carousel-wrapper',
          containerProps.className
        )}
        onMouseEnter={() => {
          autoplay && autoplayHoverPause && this.toggleAutoMove(false);
        }}
        onMouseLeave={() => {
          autoplay && autoplayHoverPause && !this.isGrabbed() && this.toggleAutoMove(true);
        }}
      >
        <Draggable
          active={this.canDrag()}
          axis={vertical ? 'y' : 'x'}
          transitionDuration={320}
          containerProps={{
            ...viewportElementProps,
            ref: this.wrapperRef,
            className: cx(
              'full-size',
              viewportElementProps.className
            ),
          }}
          takeControl={this.takeDragControl}
          onDragStart={this.onDragStart}
          onDragMove={this.onDragMove}
          onDragEnd={this.onDragEnd}
          children={(
            <div
              className={cx([
                'carousel-items-container',
                vertical && 'vertical',
              ])}
              ref={this.containerRef}
              children={this.renderItems()}
            />
          )}
        />
        {needShowControls && (
          <>
            {renderControl({
              type: 'backward',
              onUse: this.moveBackward,
              canUse: this.infinite || currentOffset < 0,
              vertical,
            }, controlProps)}
            {renderControl({
              type: 'forward',
              onUse: this.moveForward,
              canUse: this.infinite || currentOffset > this.defineMinOffset(),
              vertical,
            }, controlProps)}
          </>
        )}
      </div>
    );
  }

  /**
   * Выводит список элементов карусели учетом необходимости клонирования.
   * @return Список элементов карусели.
   */
  renderItems () {
    const { isAllItemsVisible } = this.state;
    const { items = [], renderItem = Carousel.defaultRenderItem } = this.props;
    const realItemsCount = size(items);
    const needClone = this.infinite && this.mounted && !isAllItemsVisible;
    const loopLimit = realItemsCount * (needClone ? CLONE_FACTOR : 1);
    const result = [];

    for (let realIndex = 0; realIndex < loopLimit; realIndex++) {
      const index = realIndex % realItemsCount;
      result.push(renderItem(items[index], realIndex));
    }

    return result;
  }
}
