import React, { Component, createRef } from 'react';
import withPrevent from '../helpers/with-prevent';
import boundsOf from '../helpers/bounds-of';
import withGlobalListeners from '../hoc/with-global-listeners';
import isFunction from 'lodash/isFunction';
import createContainer from '../helpers/create-container';
import { getEventClientPos } from '../helpers/events';
import centerOf from '../helpers/center-of';
import on from '../helpers/on';
import classnames from 'classnames/bind';
import classes from './range.scss';
import PropTypes from 'prop-types';

const cx = classnames.bind(classes);

/**
 * Возвращает долю от диапазона, заданную числом.
 * @param {number} start Начало диапазона.
 * @param {number} end Конец диапазона.
 * @param {number} value Значение для расчета доли.
 * @return {number} Доля, которую занимает значение.
 */
const getFraction = (start, end, value) => ((value - start) / (end - start)) || 0;

/**
 * Возвращает процент от диапазона, заданную числом.
 * @param {...number} args Данные для расчета доли.
 * @return {number} Процент, который занимает значение.
 */
const getPercentage = (...args) => getFraction(...args) * 100;

/**
 * Компонент поля выбора числового диапазона.
 */
export class Range extends Component {
  /**
   * Конструктор.
   * @param {Object} props Свойства.
   */
  constructor (props) {
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
    this.trackRef = createRef();
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

  /**
   * @inheritdoc
   */
  componentDidMount () {
    const { addGlobalListener } = this.props;
    const { current: containerElement } = this.containerRef;

    this.unsubscribers = [
      addGlobalListener('mousemove', this.updateValues),
      addGlobalListener('touchmove', this.updateValues),
      addGlobalListener('mouseup', this.handleDragEnd),
      addGlobalListener('touchend', this.handleDragEnd),
      addGlobalListener('touchcancel', this.handleDragEnd),
      on(containerElement, 'mousedown', this.handleDragStart, { passive: false }),
      on(containerElement, 'touchstart', this.handleDragStart, { passive: false }),
    ];

    this.start.setObserver(this.handleValueChange.bind(this));
    this.finish.setObserver(this.handleValueChange.bind(this));
  }

  /**
   * @inheritdoc
   */
  componentDidUpdate (prevProps) {
    const propKeys = ['min', 'max', 'step', 'startValue', 'finishValue'];

    /**
     * Проверят что свойство изменилось.
     * @param {string} key Имя свойства.
     * @return {boolean} Изменилось ли свойство.
     */
    const isPropChanged = key => !Object.is(this.props[key], prevProps[key]);

    if (propKeys.some(isPropChanged)) {
      const {
        startValue = this.start.get(),
        finishValue = this.finish.get(),
      } = this.props;

      // конечное значение имеет приоритет - делаем стартовое зависимым от конечного
      const readyStart = this.constrainValue(Math.min(startValue, finishValue));
      const readyFinish = this.constrainValue(finishValue);

      this.start.set(readyStart);
      this.finish.set(readyFinish);
    }
  }

  /**
   * @inheritdoc
   */
  componentWillUnmount () {
    this.unsubscribers.forEach(unsubscribe => unsubscribe());
  }

  /**
   * Обрабатывает событие как начало слежения за указателем/пальцем.
   * @param {MouseEvent|TouchEvent} event Событие.
   */
  handleDragStart (event) {
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
   * @param {number} value Значение.
   * @return {number} Вписанное значение.
   */
  constrainValue (value) {
    const { min, max, step = 0.1 } = this.props;
    let result = Math.max(min, Math.min(value || 0, max));

    result -= min;
    result = Math.round(result / step) * step;
    result += min;

    if (result > max) { result -= step; }

    return result;
  }

  /**
   * Обновляет значения начала/конца диапазона по событию.
   * @param {MouseEvent|TouchEvent} event Событие.
   */
  updateValues (event) {
    if (this.isGrabbed) {
      const { min, max } = this.props;
      const thumbEl = this.activeThumbElement;
      const [start, end] = this.activeBounds;
      const { left, right } = boundsOf(this.trackRef.current);

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
   * @return {[number, number]} Начальное и конечное значения в процентах.
   */
  getPercents () {
    const { min, max } = this.props;
    let start = 0;
    let finish = 0;

    if (max > min) {
      start = getPercentage(min, max, this.start.get());
      finish = getPercentage(min, max, this.finish.get());
    }

    return [start, finish];
  }

  /**
   * Обновляет данные выбранной кнопки по событию.
   * @param {MouseEvent|TouchEvent} event Событие.
   */
  updateActiveThumb (event) {
    const { abs } = Math;
    const clientX = getEventClientPos(event).x;
    const startX = centerOf(boundsOf(this.startThumbRef.current)).x;
    const finishX = centerOf(boundsOf(this.finishThumbRef.current)).x;
    let isStartActive;

    if (clientX < startX) {
      isStartActive = true;
    } else if (clientX > finishX) {
      isStartActive = false;
    } else {
      isStartActive = abs(startX - clientX) < abs(finishX - clientX);
    }

    this.activeThumbElement = isStartActive
      ? this.startThumbRef.current
      : this.finishThumbRef.current;
    this.activeBounds = isStartActive
      ? [boundsOf(this.trackRef.current).left, finishX]
      : [startX, boundsOf(this.trackRef.current).right];
  }

  /**
   * Переключает состояние слежения за курсором/пальцем.
   * @param {boolean} isGrabbed Активно ли слежение.
   */
  toggleGrabbed (isGrabbed) {
    this.isGrabbed = Boolean(isGrabbed);
  }

  /**
   * Отправляет событие целевому обработчику.
   * @param {string} eventName Имя события.
   */
  fireEvent (eventName) {
    const { onChange, onSlide } = this.props;
    let handleEvent;

    switch (eventName) {
      case 'change': handleEvent = onChange; break;
      case 'slide': handleEvent = onSlide; break;
    }

    isFunction(handleEvent) && handleEvent({
      startValue: this.start.get(),
      finishValue: this.finish.get(),
    });
  }

  /**
   * @inheritdoc
   */
  render () {
    const {
      disabled,
      wrapperProps = { className: 'range-wrapper-styled' },
      containerProps = { className: 'range-container-styled' },
      trackProps = { className: 'available-styled' },
      rangeProps = { className: 'selected-styled' },
      thumbProps = { className: 'thumb-styled' },
    } = this.props;
    const [start, finish] = this.getPercents();

    return (
      <div
        {...wrapperProps}
        className={cx(
          'range-wrapper-base',
          wrapperProps.className
        )}
      >
        <div
          {...containerProps}
          ref={this.containerRef}
          className={cx(
            'range-container-base',
            disabled && 'disabled',
            containerProps.className
          )}
        >
          <div
            {...trackProps}
            ref={this.trackRef}
            className={cx(
              'track-base',
              'available-base',
              trackProps.className
            )}
          />
          <div
            {...rangeProps}
            ref={this.rangeRef}
            className={cx(
              'track-base',
              'selected-base',
              rangeProps.className
            )}
            style={{
              ...rangeProps.style,
              left: `${start}%`,
              width: `${finish - start}%`,
            }}
          />
          <button
            {...thumbProps}
            type='button'
            ref={this.startThumbRef}
            className={cx('thumb-base', thumbProps.className)}
            style={{ ...thumbProps.style, left: `${start}%` }}
          />
          <button
            {...thumbProps}
            type='button'
            ref={this.finishThumbRef}
            className={cx('thumb-base', thumbProps.className)}
            style={{ ...thumbProps.style, left: `${finish}%` }}
          />
        </div>
      </div>
    );
  }
}

Range.propTypes = {
  /**
   * Выключено ли поле.
   */
  disabled: PropTypes.bool,

  /**
   * Минимальное значение. По умолчанию 0.
   */
  min: PropTypes.number,

  /**
   * Максимальное значение. По умолчанию 1.
   */
  max: PropTypes.number,

  /**
   * Шаг. По умолчанию 0,1.
   */
  step: PropTypes.number,

  /**
   * Значение начального ползунка, По умолчанию минимальное значение.
   */
  startValue: PropTypes.number,

  /**
   * Значение конечного ползунка. По умолчанию максимальное значение.
   */
  finishValue: PropTypes.number,

  /**
   * Свойства элемента-обертки. По умолчанию содержит класс со стандартной стилизацией.
   */
  wrapperProps: PropTypes.object,

  /**
   * Свойства элемента-контейнера. По умолчанию содержит класс со стандартной стилизацией.
   */
  containerProps: PropTypes.object,

  /**
   * Свойства элемента доступной дорожки. По умолчанию содержит класс со стандартной стилизацией.
   */
  trackProps: PropTypes.object,

  /**
   * Свойства элемента выбранной дорожки. По умолчанию содержит класс со стандартной стилизацией.
   */
  rangeProps: PropTypes.object,

  /**
   * Свойства элементов-кнопок. По умолчанию содержит класс со стандартной стилизацией.
   */
  thumbProps: PropTypes.object,
};

export default withGlobalListeners(Range);
