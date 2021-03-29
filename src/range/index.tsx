import React, { Component, createRef } from 'react';
import withPrevent from '../helpers/with-prevent';
import boundsOf from '../helpers/bounds-of';
import createContainer, { Container } from '../helpers/create-container';
import { getEventClientPos } from '../helpers/events';
import centerOf from '../helpers/center-of';
import on from '../helpers/on';
import { getFractionDepth } from '../helpers/get-fraction-depth';
import { isInteger, clamp } from 'lodash';
import classnames from 'classnames/bind';
import classes from './range.scss';

interface CallbackData {
  startValue: number
  finishValue: number
}

export interface Props {

  /** Начальная граница. */
  min?: number

  /** Конечная граница. */
  max?: number

  /** Шаг. */
  step?: number

  /** Значение начального ползунка. */
  startValue?: number

  /** Значение конечного ползунка. */
  finishValue?: number

  /** Сработает при изменении. */
  onChange?: (data: CallbackData) => void

  /** Сработает при перетаскивании. */
  onSlide?: (data: CallbackData) => void

  /** Отключен ли компонент. */
  disabled?: boolean

  /** Свойства контейнера. */
  wrapperProps?: React.HTMLAttributes<HTMLDivElement>
}

const cx = classnames.bind(classes);

/**
 * Возвращает долю от диапазона, заданную числом.
 * @param start Начало диапазона.
 * @param end Конец диапазона.
 * @param value Значение для расчета доли.
 * @return Доля, которую занимает значение.
 */
const getFraction = (start: number, end: number, value: number) => ((value - start) / (end - start)) || 0;

/**
 * Возвращает процент от диапазона, заданную числом.
 * @param args Данные для расчета доли.
 * @return Процент, который занимает значение.
 */
const getPercentage = (...args: Parameters<typeof getFraction>) => getFraction(...args) * 100;

class Range extends Component<Props> {
  containerRef: React.RefObject<HTMLElement | undefined>;
  rangeRef: React.RefObject<HTMLElement | undefined>;
  startThumbRef: React.RefObject<HTMLElement | undefined>;
  finishThumbRef: React.RefObject<HTMLElement | undefined>;
  start: Container<number>;
  finish: Container<number>;
  activeBounds: [number, number];
  unsubscribers?: Array<() => void>;
  activeThumbEl?: HTMLElement;
  isGrabbed?: boolean;

  constructor (props: Props) {
    const {
      min = 0,
      max = 1,
      startValue = min,
      finishValue = max,
    } = props;

    super(props);

    // конечное значение имеет приоритет - делаем стартовое зависимым от конечного
    const readyStart = this.constrainValue(Math.min(startValue, finishValue));
    const readyFinish = this.constrainValue(finishValue);

    this.containerRef = createRef();
    this.rangeRef = createRef();
    this.startThumbRef = createRef();
    this.finishThumbRef = createRef();

    this.start = createContainer(readyStart);
    this.finish = createContainer(readyFinish);
    this.activeBounds = [0, 0];

    this.updateValues = this.updateValues.bind(this);
    this.handleDragEnd = this.handleDragEnd.bind(this);
    this.handleDragStart = withPrevent(this.handleDragStart.bind(this));
  }

  componentDidMount () {
    const { current: containerElem } = this.containerRef;

    this.unsubscribers = [
      on(window, 'mousemove', this.updateValues),
      on(window, 'touchmove', this.updateValues),
      on(window, 'mouseup', this.handleDragEnd),
      on(window, 'touchend', this.handleDragEnd),
      on(window, 'touchcancel', this.handleDragEnd),
      on(containerElem as any, 'mousedown', this.handleDragStart, { passive: false }),
      on(containerElem as any, 'touchstart', this.handleDragStart, { passive: false }),
    ];

    this.start.setObserver(this.handleValueChange.bind(this));
    this.finish.setObserver(this.handleValueChange.bind(this));
  }

  componentDidUpdate (prevProps: Props) {
    const propKeys: Array<keyof Props> = ['min', 'max', 'step', 'startValue', 'finishValue'];

    if (propKeys.some(key => !Object.is(this.props[key], prevProps[key]))) {
      const {
        startValue = this.start.get(),
        finishValue = this.finish.get(),
      } = this.props;

      // конечное значение имеет приоритет - делаем стартовое зависимым от конечного
      const readyStart = this.constrainValue(Math.min(startValue as number, finishValue as number));
      const readyFinish = this.constrainValue(finishValue as number);

      this.start.set(readyStart);
      this.finish.set(readyFinish);
    }
  }

  componentWillUnmount () {
    (this.unsubscribers as any[]).forEach(fn => fn());
  }

  /**
   * Обрабатывает событие как начало слежения за указателем/пальцем.
   * @param event Событие.
   */
  handleDragStart (event: MouseEvent | TouchEvent) {
    if (!this.props.disabled) {
      this.updateActiveThumb(event);
      this.toggleGrabbed(true);
      this.updateValues(event);
    }
  }

  /**
   * Завершает слежение за указателем/пальцем.
   */
  handleDragEnd () {
    if (this.isGrabbed) {
      this.toggleGrabbed(false);
      this.fireEvent('change');
    }
  }

  /**
   * Обновляет позицию ползунков и выделенный диапазон.
   * Запускает событие 'slide'.
   */
  handleValueChange () {
    this.updateThumbElements();
    this.updateRangeElement();
    this.fireEvent('slide');
  }

  /**
   * Вписывает переданное значение в границы, заданные свойствами.
   * @param value Значение.
   * @return Вписанное значение.
   */
  constrainValue (value: number) {
    const { min = 0, max = 1, step = 0.1 } = this.props;
    let result = clamp(value, min, max);
    result -= min;
    if (isInteger(step)) {
      result = Math.round(result / step) * step;
    } else {
      const stepFractionDepth = getFractionDepth(step);
      const capacityByDepth = Math.pow(10, stepFractionDepth);

      const intStep = step * capacityByDepth;
      const coefficient = intStep * capacityByDepth;

      result = Math.round(result * coefficient) / coefficient;
    }
    result += min;

    if (result > max) { result -= step; }

    return result;
  }

  /**
   * Обновляет значения начала/конца диапазона по событию.
   * @param event Событие.
   */
  updateValues (event: MouseEvent | TouchEvent) {
    if (this.isGrabbed) {
      const { min = 0, max = 1 } = this.props;
      const thumbEl = this.activeThumbEl;
      const [start, end] = this.activeBounds;
      const { left, right } = boundsOf(this.containerRef.current as any) as DOMRect;

      const wrappedX = Math.max(start, Math.min(getEventClientPos(event).x, end));
      const fraction = getFraction(left, right, wrappedX);
      const value = this.constrainValue(min + (fraction * (max - min)));

      // проверяем, является ползунок стартовым или конечным
      thumbEl === this.startThumbRef.current
        ? this.start.set(value)
        : this.finish.set(value);
    }
  }

  /**
   * Обновляет позицию кнопок.
   */
  updateThumbElements () {
    const { startThumbRef, finishThumbRef } = this;

    if (startThumbRef.current && finishThumbRef.current) {
      const [start, finish] = this.getPercents();

      startThumbRef.current.style.left = `${start}%`;
      finishThumbRef.current.style.left = `${finish}%`;
    }
  }

  /**
   * Обновляет позицию и размер элемента отражающего выбранный диапазон.
   */
  updateRangeElement () {
    const { current: rangeElement } = this.rangeRef;

    if (rangeElement) {
      const [start, finish] = this.getPercents();
      rangeElement.style.left = `${start}%`;
      rangeElement.style.width = `${finish - start}%`;
    }
  }

  /**
   * Возвращает текущие значения в процентах.
   * @return Начальное и конечное значения в процентах.
   */
  getPercents (): [number, number] {
    const { min = 0, max = 1 } = this.props;
    let start = 0;
    let finish = 0;

    if (max > min) {
      start = getPercentage(min, max, this.start.get() as number);
      finish = getPercentage(min, max, this.finish.get() as number);
    }

    return [start, finish];
  }

  /**
   * Обновляет данные выбранной кнопки по событию.
   * @param event Событие.
   */
  updateActiveThumb (event: MouseEvent|TouchEvent) {
    const { abs } = Math;
    const clientX = getEventClientPos(event).x;
    const startX = centerOf(boundsOf(this.startThumbRef.current as any) as any).x;
    const finishX = centerOf(boundsOf(this.finishThumbRef.current as any) as any).x;
    let isStartActive;

    if (clientX < startX) {
      isStartActive = true;
    } else if (clientX > finishX) {
      isStartActive = false;
    } else {
      isStartActive = abs(startX - clientX) < abs(finishX - clientX);
    }

    this.activeThumbEl = (isStartActive
      ? this.startThumbRef.current
      : this.finishThumbRef.current) as any;

    this.activeBounds = isStartActive
      ? [(boundsOf(this.containerRef.current as any) as any).left, finishX]
      : [startX, (boundsOf(this.containerRef.current as any) as any).right];
  }

  /**
   * Переключает состояние слежения за курсором/пальцем.
   * @param isGrabbed Активно ли слежение.
   */
  toggleGrabbed (isGrabbed: boolean) {
    this.isGrabbed = Boolean(isGrabbed);
  }

  /**
   * Отправляет событие целевому обработчику.
   * @param eventName Имя события.
   */
  fireEvent (eventName: string) {
    const { onChange, onSlide } = this.props;
    let handleEvent;

    switch (eventName) {
      case 'change': handleEvent = onChange; break;
      case 'slide': handleEvent = onSlide; break;
    }

    handleEvent && handleEvent({
      startValue: this.start.get() as number,
      finishValue: this.finish.get() as number,
    });
  }

  render () {
    const [start, finish] = this.getPercents();

    return (
      <div
        {...this.props.wrapperProps}
        className={cx(
          'range-wrapper-base',
          'range-wrapper-styled',
          this.props.disabled && 'disabled',
          this.props.wrapperProps?.className
        )}
      >
        <div
          className={cx(
            'track-base',
            'available-base',
            'available-styled'
          )}
        />
        <div
          ref={this.rangeRef as any}
          className={cx(
            'track-base',
            'selected-base',
            'selected-styled'
          )}
          style={{
            left: `${start}%`,
            width: `${finish - start}%`,
          }}
        />
        <div
          ref={this.containerRef as any}
          className={cx(
            'range-container-base',
            'range-container-styled'
          )}
        >
          <button
            type='button'
            ref={this.startThumbRef as any}
            className={cx('thumb-base', 'thumb-styled')}
            style={{ left: `${start}%` }}
          />
          <button
            type='button'
            ref={this.finishThumbRef as any}
            className={cx('thumb-base', 'thumb-styled')}
            style={{ left: `${finish}%` }}
          />
        </div>
      </div>
    );
  }
}

export default Range;
