import React from 'react';
import classes from './styled-gallery.scss';
import classNames from 'classnames/bind';
import Button from '../../button';
import Icon from '../../icon';
import arrowUp from '../../icons/arrow-up.svg';
import arrowLeft from '../../icons/arrow-left.svg';
import arrowDown from '../../icons/arrow-down.svg';
import arrowRight from '../../icons/arrow-right.svg';
import BaseGallery from '../base-gallery/';
import PropTypes from 'prop-types';

const cx = classNames.bind(classes);

/**
 * Получение параметров для кнопок управления.
 * @param {'forward'|'backward'} [type='forward'] Тип.
 * @param {boolean} [disabled=false] Отключена.
 * @param {Object} [arrows] Объект с параметрами стрелок управления.
 * @param {[Function, string]} [arrows.backward] Массив с иконкой и классом для стрелки 'назад'.
 * @param {[Function, string]} [arrows.forward] Массив с иконкой и классом для стрелки 'вперед'.
 * @return {Object} Объект с параметрами.
 */
export const getControlProps = (type = 'forward', disabled = false, arrows = {}) => {
  const [icon, buttonClass] = arrows[type] || [];
  const direction = type === 'forward' ? 'вперед' : 'назад';
  return {
    type: 'button',
    className: cx('button', disabled && 'disabled', buttonClass),
    shape: 'circle',
    withShadow: true,
    children: <Icon icon={icon || arrowUp} size={10} />,
    isDisabled: disabled,
    'aria-label': `Промотать ${direction}`,
  };
};

/**
 * Компонент стилизованной галереи.
 * @param {Object} props Свойства компонента.
 * @param {'horizontal'|'vertical'} [props.direction='horizontal'] Направление галереи.
 * @param {string|function():ReactElement} [props.galleryContainer='div'] Элемент-контейнер галереи.
 * @param {Object} [props.galleryContainerProps] Свойства контейнера галереи.
 * @return {ReactElement} Компонент стилизованной галереи.
 */
export const StyledGallery = ({
  direction = 'horizontal',
  galleryContainer: Wrapper = 'div',
  galleryContainerProps = {},
  ...galleryProps
}) => {
  const vertical = direction === 'vertical';
  const arrows = {
    backward: vertical ? [arrowUp, cx('arrow-up')] : [arrowLeft, cx('arrow-left')],
    forward: vertical ? [arrowDown, cx('arrow-down')] : [arrowRight, cx('arrow-right')],
  };
  const {
    className: galleryClasses,
    ...galleryWrapperProps
  } = galleryContainerProps || {};
  return (
    <Wrapper
      {...galleryWrapperProps}
      className={cx(
        [vertical ? 'vertical-gallery-container' : 'gallery-container'],
        galleryClasses
      )}
    >
      <BaseGallery
        direction={direction}
        controlContainer={Button}
        getControlProps={(type, disabled) => getControlProps(type, disabled, arrows)}
        needListenResize
        {...galleryProps}
      />
    </Wrapper>
  );
};

export default StyledGallery;

StyledGallery.propTypes = {
  /**
   * Направление галереи.
   */
  direction: PropTypes.oneOf(['vertical', 'horizontal']),
  /**
   * Элемент-контейнер галереи.
   */
  galleryContainer: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.string,
    PropTypes.func,
  ]),
  /**
   * Свойства контейнера галереи.
   */
  galleryContainerProps: PropTypes.object,
};
