import type { CarouselControlData, CarouselProps, CarouselState, ElementPredicate } from './types';
import { Component, Fragment, RefObject, createRef } from 'react';
import { Draggable, Control } from './draggable';
import { boundsOf } from '../helpers/bounds-of';
import { Point, IPoint } from '../helpers/point';
import { maxIndexOf } from '../helpers/max-index-of';
import { getRelativePos } from '../helpers/get-relative-pos';
import { findChildIndex } from '../helpers/find-child-index';
import { ArrowButton, ArrowButtonProps } from '../arrow-button';
import { DraggableEvent } from './helpers/draggable-event';
import { isBrowser } from '../helpers/is-browser';
import classNames from 'classnames/bind';
import styles from './carousel.m.scss';

const CLONE_FACTOR = 3;

const cx = classNames.bind(styles);

/** @inheritdoc */
const isAuto = (value: unknown): value is 'auto' => value === 'auto';

/** @inheritdoc */
const size = (value: { length: number } | undefined | null): number => value?.length ?? 0;

/**
 * Карусель - блок с возможностью прокрутки содержимого в виде "слайдов" по горизонтали или вертикали.
 */
export class Carousel extends Component<CarouselProps, CarouselState> {
  infinite: boolean;
  dragStartClient: IPoint;
  dragStartOffset: IPoint;
  currentIndex: number;
  containerRef: RefObject<HTMLDivElement>;
  rootElementRef: RefObject<HTMLDivElement>;
  wrapperRef: RefObject<HTMLDivElement>;
  timerId?: number;
  canAutoMove?: boolean;
  mounted?: boolean;

  offWindowResize: () => void;

  toggleDragTransition: Control['toggleTransition'];
  setDragOffset: Control['setOffset'];
  isGrabbed: Control['isGrabbed'];
  isTransitionEnabled: Control['isTransitionEnabled'];

  /**
   * Конструктор.
   * @param props Свойства.
   */
  constructor(props: CarouselProps) {
    const { items = [], infinite = true, targetIndex = 0 } = props;

    super(props);

    // state & data
    this.infinite = Boolean(infinite);
    this.dragStartClient = Point();
    this.dragStartOffset = Point();
    this.currentIndex = targetIndex >= 0 && targetIndex < items.length ? targetIndex : 0;
    this.state = {
      currentOffset: 0,
      isAllItemsVisible: false,
    };

    // refs
    this.rootElementRef = createRef<HTMLDivElement>(); // для слежки за изменением размера
    this.containerRef = createRef<HTMLDivElement>(); // для определения размеров списка элементов
    this.wrapperRef = createRef<HTMLDivElement>(); // для определения viewport'а карусели

    // bound methods
    this.takeDragControl = this.takeDragControl.bind(this);
    this.moveBackward = this.moveBackward.bind(this);
    this.moveForward = this.moveForward.bind(this);
    this.onDragEnd = this.onDragEnd.bind(this);
    this.onDragMove = this.onDragMove.bind(this);
    this.onDragStart = this.onDragStart.bind(this);

    /** @inheritdoc */
    const noop = () => void 0;
    /** @inheritdoc */
    const stubFalse = () => false;

    // stubs
    this.offWindowResize = noop;
    this.toggleDragTransition = noop;
    this.setDragOffset = noop;
    this.isGrabbed = stubFalse;
    this.isTransitionEnabled = stubFalse;
  }

  /**
   * Возвращает элемент списка.
   * @param item Элемент списка.
   * @param index Индекс.
   * @return Элемент списка.
   */
  static defaultRenderItem(item: any, index: number) {
    return <div key={index}>{String(item)}</div>;
  }

  /**
   * Возвращает кнопку управления.
   * @param data Данные для вывода кнопки.
   * @param data.canUse Можно ли использовать кнопку.
   * @param data.onUse Выполнится при нажатии на кнопку.
   * @param props Свойства ArrowButton.
   * @return Кнопка управления.
   */
  static defaultRenderControl(
    { canUse, onUse, type, vertical }: CarouselControlData,
    props: ArrowButtonProps = { size: 's' },
  ) {
    const forward = vertical ? 'down' : 'right';
    const backward = vertical ? 'up' : 'left';

    return (
      <ArrowButton
        {...props}
        className={cx('control', vertical && 'vertical', type, props.className)}
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
  static makeFurthestSiblingChecker({
    vertical,
    viewport,
  }: {
    vertical: boolean;
    viewport?: DOMRect | null;
  }): ElementPredicate {
    // eslint-disable-next-line jsdoc/require-jsdoc
    let checker: ElementPredicate = () => false;

    if (viewport) {
      checker = vertical
        ? (sibling: Element) => boundsOf(sibling).top >= viewport.top
        : (sibling: Element) => boundsOf(sibling).left >= viewport.left;
    }

    return checker;
  }

  /**
   * Возвращает функцию для поиска наиболее близкого элемента карусели к viewport'у.
   * @param data Данные.
   * @param data.viewport Область видимости галереи.
   * @param data.vertical Показывает, что прокрутка выполняется по вертикали.
   * @param data.backward Показывает, что прокрутка выполняется к началу списка.
   * @return Функция для поиска наиболее близкого элемента.
   */
  static makeNearestSiblingChecker({
    viewport,
    vertical,
    backward,
  }: {
    backward: boolean;
    vertical: boolean;
    viewport?: DOMRect | null;
  }): ElementPredicate {
    const verticalBoundKey = backward ? 'bottom' : 'top';
    const horizontalBoundKey = backward ? 'right' : 'left';

    // eslint-disable-next-line jsdoc/require-jsdoc
    let checker: ElementPredicate = () => false;

    if (viewport) {
      checker = vertical
        ? (sibling: Element) => viewport.top < boundsOf(sibling)[verticalBoundKey]
        : (sibling: Element) => viewport.left < boundsOf(sibling)[horizontalBoundKey];
    }

    return checker;
  }

  /**
   * Геттер элемента списка.
   * @return Элемент списка или null.
   */
  get listElement() {
    return this.containerRef.current;
  }

  /**
   * Выполняет подписку на глобальное событие "resize".
   * Запускает прокрутку до текущего элемента.
   * Обновляет информацию о состоянии отображения элементов.
   */
  componentDidMount() {
    const { autoplay, onReady } = this.props;

    this.observeResize(window.ResizeObserver);

    this.toggleMounted(true);
    this.forceUpdate(() => {
      this.scrollToItem({ needTransition: false });
      this.updateItemsVisibility();
    });

    autoplay && this.enableAutoplay();
    onReady && onReady(this.currentIndex);
  }

  /**
   * Подписывается на изменение размера корневого элемента.
   * @param Observer Класс ResizeObserver.
   */
  observeResize(Observer?: typeof ResizeObserver) {
    if (Observer && this.rootElementRef.current) {
      const observer = new Observer(() => this.handleResize());
      observer.observe(this.rootElementRef.current);
      this.offWindowResize = () => observer.disconnect();
    }
  }

  /**
   * Корректирует смещение при изменении размеров.
   */
  handleResize() {
    const wasEnabled = this.isTransitionEnabled();

    wasEnabled && this.toggleDragTransition(false);
    this.scrollToItem({ needTransition: false });
    this.updateItemsVisibility();
    wasEnabled && this.toggleDragTransition(true);
  }

  /**
   * По необходимости обновляет индекс текущего элемента.
   * Обновляет информацию о состоянии отображения элементов.
   * @param prevProps Предыдущие свойства.
   */
  componentDidUpdate(prevProps: CarouselProps) {
    const { autoplay, targetIndex, items } = this.props;
    const { autoplay: prevAutoplay, targetIndex: prevTargetIndex, items: prevItems } = prevProps;

    if (targetIndex !== prevTargetIndex || items?.length !== prevItems?.length) {
      this.setCurrentIndex(targetIndex || 0);
      this.toggleDragTransition(true);
    }

    if (!autoplay !== !prevAutoplay) {
      autoplay ? this.enableAutoplay() : this.disableAutoplay();
    }

    this.updateItemsVisibility();
  }

  /**
   * Выполняет отписку от глобального события "resize".
   * Отключает таймер автоматической прокрутки.
   */
  componentWillUnmount() {
    this.offWindowResize();
    this.disableAutoplay();
    this.toggleMounted(false);
  }

  /**
   * Включает автоматическую прокрутку.
   */
  enableAutoplay() {
    const { autoplayTimeout = 3000 } = this.props;

    this.toggleAutoMove(true);

    this.timerId = window.setInterval(() => {
      this.canAutoMove && this.moveForward();
    }, autoplayTimeout);
  }

  /**
   * Отключает автоматическую прокрутку.
   */
  disableAutoplay() {
    this.timerId && clearInterval(this.timerId);
  }

  /**
   * Переключает флаг возможности автоматической прокрутки.
   * @param canAutoMove Флаг возможности автоматической прокрутки.
   */
  toggleAutoMove(canAutoMove: boolean) {
    this.canAutoMove = Boolean(canAutoMove);
  }

  /**
   * Переключает флаг, определяющий, что компонент смонтирован.
   * @param mounted Флаг.
   */
  toggleMounted(mounted: boolean) {
    this.mounted = Boolean(mounted);
  }

  /**
   * Определяет, можно ли перетаскивать карусель.
   * @return Можно ли перетаскивать карусель?
   */
  canDrag() {
    const { isAllItemsVisible } = this.state;
    const { draggable = 'auto' } = this.props;
    const autoDraggable = isAuto(draggable);

    return (autoDraggable && !isAllItemsVisible) || draggable === true;
  }

  /**
   * Обновляет информацию о состоянии отображения элементов.
   */
  updateItemsVisibility() {
    const isAllItemsVisible = this.isAllItemsVisible();

    if (isAllItemsVisible !== this.state.isAllItemsVisible) {
      this.setState({ isAllItemsVisible });
    }
  }

  /**
   * По возможности выполняет прокрутку карусели вперед.
   */
  moveForward() {
    const { step = 3 } = this.props;

    this.infinite ? this.moveInfinite(step, true) : this.moveForwardFinite(step);
  }

  /**
   * Выполняет конечную прокрутку карусели вперед.
   * @param step На сколько элементов надо прокрутить карусель.
   */
  moveForwardFinite(step: number) {
    const { currentIndex } = this;
    const newIndex = currentIndex + step;

    this.toggleDragTransition(true);
    this.setCurrentIndex(
      newIndex < size(this.listElement?.children)
        ? newIndex
        : maxIndexOf(this.listElement?.children),
    );
  }

  /**
   * По возможности выполняет прокрутку карусели назад.
   */
  moveBackward() {
    const { step = 3 } = this.props;

    this.infinite ? this.moveInfinite(step, false) : this.moveBackwardFinite(step);
  }

  /**
   * Выполняет конечную прокрутку карусели назад.
   * @param step На сколько элементов надо прокрутить карусель.
   */
  moveBackwardFinite(step: number) {
    const newIndex = findChildIndex({
      target: this.listElement,
      startIndex: this.currentIndex,
      defaultResult: this.currentIndex,
      increment: -1,

      // ищем элемент который находится ниже/правее чем верхняя/левая граница viewport'а
      isSuitable: Carousel.makeFurthestSiblingChecker({
        viewport: this.getViewport(),
        vertical: Boolean(this.props.vertical),
      }),

      // при нахождении первого непрошедшего проверку останавливаем цикл
      needBreakLoop: passed => !passed,
    });

    this.toggleDragTransition(true);
    this.setCurrentIndex(newIndex !== -1 && newIndex - step >= 0 ? newIndex - step : 0);
  }

  /**
   * Выполняет прокрутку в бесконечном режиме.
   * @param step Количество элементов для прокрутки.
   * @param forward Нужно выполнить прокрутку вперед?
   */
  moveInfinite(step: number, forward: boolean) {
    const { currentIndex } = this;
    const { currentOffset } = this.state;
    const { items, vertical } = this.props;
    const realItemsCount = size(items);
    const listEl = this.listElement;
    const needMoveForward = forward && currentIndex >= realItemsCount;
    const needMoveBackward = !forward && currentIndex < realItemsCount;

    if (listEl && (needMoveForward || needMoveBackward)) {
      const itemsSize = listEl[vertical ? 'scrollHeight' : 'scrollWidth'] / CLONE_FACTOR;
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
      forward ? this.moveForwardFinite(step) : this.moveBackwardFinite(step);
    }
  }

  /**
   * Сохраняет смещение элементов карусели и позицию при захвате мышкой.
   * Отключает плавную прокрутку.
   * @param dragEvent Событие.
   */
  onDragStart(dragEvent: DraggableEvent) {
    this.disableAutoplay();
    this.saveDragStartData(dragEvent);
    this.toggleDragTransition(false);
  }

  /**
   * При необходимости запускает корректировку смещения.
   * @param dragEvent Событие.
   */
  onDragMove(dragEvent: DraggableEvent) {
    this.infinite && this.correctInfiniteOffset(dragEvent);
  }

  /**
   * Корректирует смещение в бесконечном режиме.
   * @param dragEvent Событие.
   */
  correctInfiniteOffset(dragEvent: DraggableEvent) {
    const { vertical } = this.props;
    const { offset, client } = dragEvent;
    const { dragStartClient } = this;
    const { forward, backward } = this.defineDirection(dragStartClient, client);
    const viewport = this.getViewport();
    const listEl = this.listElement;
    const lastItem = this.listElement?.lastElementChild;

    if (viewport && listEl && lastItem) {
      const offsetValue = offset[vertical ? 'y' : 'x'];
      const lastItemStartBound = boundsOf(lastItem)?.[vertical ? 'top' : 'left'];
      const viewportStartBound = viewport[vertical ? 'top' : 'left'];
      const viewportEndBound = viewport[vertical ? 'bottom' : 'right'];
      const itemsSize = listEl[vertical ? 'scrollHeight' : 'scrollWidth'] / CLONE_FACTOR;

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
  }

  /**
   * Определяет начальную границу (левую или верхнюю) списка не клонированных элементов.
   * @return Начальную граница.
   */
  findRealItemsStartBound() {
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
  onDragEnd({ offset: endOffset, client: endClient }: DraggableEvent) {
    const { dragStartOffset: startOffset, dragStartClient: startClient } = this;

    if (this.listElement && !(startOffset.x === endOffset.x && startOffset.y === endOffset.y)) {
      const { backward } = this.defineDirection(startClient, endClient);
      const lastIndex = maxIndexOf(this.listElement.children);
      const edgeIndex = backward ? 0 : lastIndex;

      // ищем элемент, который находится ближе всего к начальной границе viewport'а
      const newIndex = findChildIndex({
        target: this.listElement,
        startIndex: backward ? lastIndex : 0,
        increment: backward ? -1 : +1,
        isSuitable: Carousel.makeNearestSiblingChecker({
          viewport: this.getViewport(),
          vertical: Boolean(this.props.vertical),
          backward,
        }),

        // если прокрутили вперед, завершаем поиск когда нашли первый прошедший проверку, иначе - первый непрошедший
        needBreakLoop: passed => (backward ? !passed : passed),
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
  defineDirection(start: IPoint, end: IPoint): { forward: boolean; backward: boolean } {
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
  setCurrentIndex(newIndex: number, { withScroll = true, needTransition = true } = {}) {
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
  scrollToItem({ targetIndex = this.currentIndex, needTransition = true } = {}) {
    const listEl = this.listElement;
    const viewport = this.getViewport();
    const targetItemEl = this.listElement?.children[targetIndex];

    if (viewport && listEl && targetItemEl) {
      this.toggleDragTransition(needTransition);

      if (this.isAllItemsVisible()) {
        this.setCurrentOffset(0);
      } else {
        const { vertical } = this.props;
        const targetItemPos = getRelativePos(targetItemEl);
        const viewportEndBound = vertical ? viewport.bottom : viewport.right;
        const nextItemsEndBound = vertical
          ? viewport.top + listEl.scrollHeight - targetItemPos.y
          : viewport.left + listEl.scrollWidth - targetItemPos.x;

        if (nextItemsEndBound >= viewportEndBound) {
          const itemBound = vertical ? targetItemPos.y : targetItemPos.x;
          this.setCurrentOffset(-itemBound);
        } else {
          const maxItemsEndBound = vertical
            ? viewport.top + listEl.scrollHeight
            : viewport.left + listEl.scrollWidth;
          this.setCurrentOffset(viewportEndBound - maxItemsEndBound);
        }
      }
    }
  }

  /**
   * Определяет, видны ли все элементы галереи.
   * @return Видны ли все элементы галереи.
   */
  isAllItemsVisible() {
    const realItemsSize = this.getRealItemsSize();
    const viewportSize = this.getViewportSize();

    // ВАЖНО: используем округление в обоих случаях тк часто разница в дробных значениях меньше 0.0001
    // ВАЖНО: округление именно в меньшую сторону чтобы предотвратить разницу в 1
    return Math.floor(viewportSize) >= Math.floor(realItemsSize);
  }

  /**
   * Определяет минимально возможное смещение списка элементов карусели.
   * @return Минимально возможное смещение.
   */
  defineMinOffset() {
    const { vertical } = this.props;
    const viewport = this.getViewport();
    const listEl = this.listElement;
    let minOffset = NaN;

    if (viewport && listEl) {
      const viewportEndBound = vertical ? viewport.bottom : viewport.right;
      const maxItemsEndBound = vertical
        ? viewport.top + listEl.scrollHeight
        : viewport.left + listEl.scrollWidth;
      minOffset = viewportEndBound - maxItemsEndBound;
    }

    return minOffset;
  }

  /**
   * Возвращает длину/ширину списка элементов (в зависимости от ориентации карусели).
   * @return Длина/ширина списка элементов.
   */
  getRealItemsSize() {
    const listEl = this.listElement;
    let result = 0;

    if (listEl) {
      const { items, vertical } = this.props;
      const firstChild = listEl.children[0];
      const lastChild = listEl.children[size(items) - 1];

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
  getViewportSize(): number {
    const { vertical } = this.props;
    const viewport = this.getViewport();
    return viewport ? viewport[vertical ? 'height' : 'width'] : 0;
  }

  /**
   * Возвращает данные прямоугольной области видимости карусели.
   * @return Данные прямоугольной области видимости карусели.
   */
  getViewport(): DOMRect | null {
    return isBrowser() ? boundsOf(this.wrapperRef.current) : null;
  }

  /**
   * Сохраняет смещение карусели и позицию из события при старте захвата.
   * @param dragEvent Нестандартное событие из компонента Draggable.
   * @param dragEvent.offset Смещение.
   * @param dragEvent.client Позиция.
   */
  saveDragStartData({ offset, client }: DraggableEvent) {
    this.dragStartOffset = offset;
    this.dragStartClient = client;
  }

  /**
   * Сохраняет в состоянии смещение карусели.
   * @param newOffset Смещение.
   * @param options Опции.
   */
  setCurrentOffset(newOffset: number, { withStateUpdate = true } = {}) {
    const { vertical } = this.props;

    this.setDragOffset(!vertical ? newOffset : 0, vertical ? newOffset : 0);

    withStateUpdate && this.setState({ currentOffset: newOffset });
  }

  /**
   * Получает управление от Draggable.
   * @param control Функции управления Draggable.
   */
  takeDragControl(control: Control) {
    this.toggleDragTransition = control.toggleTransition;
    this.setDragOffset = control.setOffset;
    this.isGrabbed = control.isGrabbed;
    this.isTransitionEnabled = control.isTransitionEnabled;
  }

  /** @inheritdoc */
  render() {
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
        ref={this.rootElementRef}
        {...containerProps}
        className={cx('carousel-wrapper', containerProps.className)}
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
            className: cx('full-size', viewportElementProps.className),
          }}
          takeControl={this.takeDragControl}
          onDragStart={this.onDragStart}
          onDragMove={this.onDragMove}
          onDragEnd={this.onDragEnd}
          children={
            <div
              className={cx(['carousel-items-container', vertical && 'vertical'])}
              ref={this.containerRef}
              children={this.renderItems()}
            />
          }
        />
        {needShowControls && (
          <>
            {renderControl(
              {
                type: 'backward',
                onUse: this.moveBackward,
                canUse: this.infinite || currentOffset < 0,
                vertical,
              },
              controlProps,
            )}
            {renderControl(
              {
                type: 'forward',
                onUse: this.moveForward,
                // ВАЖНО: используем округление, т.к из-за разницы в дробных значениях кнопка остается активной, если задана динамическая ширина/высота элементов
                // ВАЖНО: это скорее всего не покроет все кейсы из-за погрешности при сложении двоичных значений
                canUse:
                  this.infinite || Math.floor(currentOffset) > Math.floor(this.defineMinOffset()),
                vertical,
              },
              controlProps,
            )}
          </>
        )}
      </div>
    );
  }

  /**
   * Формирует список элементов карусели с учетом необходимости клонирования.
   * @return Список элементов карусели.
   */
  renderItems() {
    const { isAllItemsVisible } = this.state;
    const { items = [], renderItem = Carousel.defaultRenderItem } = this.props;
    const realItemsCount = size(items);
    const needClone = this.infinite && this.mounted && !isAllItemsVisible;
    const loopLimit = realItemsCount * (needClone ? CLONE_FACTOR : 1);
    const result: JSX.Element[] = [];

    for (let realIndex = 0; realIndex < loopLimit; realIndex++) {
      const index = realIndex % realItemsCount;

      result.push(<Fragment key={realIndex}>{renderItem(items[index], realIndex)}</Fragment>);
    }

    return result;
  }
}
