import React, { useEffect, useRef } from 'react';
import Icon from '../icon';
import Layer from '../layer';
import { placeTooltip } from './utils';
import classnames from 'classnames/bind';
import { useOutsideClick } from '../hooks';
import PropTypes from 'prop-types';
import classes from './with-tooltip.scss';
import crossIcon from '../icons/stroked-cross.svg';

const cx = classnames.bind(classes);

/**
 * Компонент, добавляющий к содержимому подсказку.
 * @param {boolean} props Свойства.
 * @param {boolean} props.inline Нужно ли выводить inline-элемент.
 * @param {string} props.holderElement Тип элемента-контейнера.
 * @param {Object} props.holderProps Свойства контейнера.
 * @param {boolean} props.shown Показывать ли подсказку.
 * @param {Function} props.onDismiss Сработает при клике вне подсказки или на крестик в ней.
 * @param {*} props.children Содержимое.
 * @param {*} props.tooltipChildren Содержимое подсказки.
 * @return {ReactElement} Компонент, добавляющий к содержимому подсказку.
 */
const WithTooltip = ({
  inline = false,
  holderElement: Holder = inline ? 'span' : 'div',
  holderProps = {},
  shown = false,
  onDismiss,
  children,
  tooltipChildren,
}) => {
  const holderRef = useRef(null);

  return (
    <Holder
      {...holderProps}
      ref={holderRef}

      // "inline-block" - чтобы по умолчанию блочный элемент не заполнял всю доступную ширину, вытесняя подсказку
      className={cx('inline-block', holderProps.className)}
    >
      {children}
      {shown && (
        <Layer>
          <Tooltip
            inline={inline}
            holderRef={holderRef}
            onDismiss={onDismiss}
            children={tooltipChildren}
          />
        </Layer>
      )}
    </Holder>
  );
};

WithTooltip.propTypes = {
  children: PropTypes.any,
  inline: PropTypes.bool,
  holderElement: PropTypes.string,
  holderProps: PropTypes.object,
  shown: PropTypes.bool,
  tooltipChildren: PropTypes.any,
  onDismiss: PropTypes.func,
};

/**
 * Компонент подсказки.
 * @param {Object} props Свойства.
 * @param {boolean} props.inline Нужно ли выводить inline-элемент.
 * @param {{ current: Element|null }} props.holderRef Реф с элементом, относительно которого нужно позиционироваться.
 * @param {*} props.children Содержимое.
 * @param {Function} props.onDismiss Сработает при клике за пределами или на крестик.
 * @return {ReactElement} Компонент подсказки.
 */
export const Tooltip = ({
  inline = false,
  holderRef,
  children,
  onDismiss,
}) => {
  const Container = inline ? 'span' : 'div';
  const tooltipRef = useRef();

  useOutsideClick(tooltipRef, onDismiss);

  useEffect(() => placeTooltip(tooltipRef.current, holderRef.current));

  return (
    <Container
      ref={tooltipRef}
      style={{
        visibility: 'hidden',
        opacity: 0,
      }}
      className={cx('tooltip')}
    >
      <Icon
        size={16}
        icon={crossIcon}
        className={cx('tooltip-cross')}
        onClick={onDismiss}
      />
      <div className={cx('tooltip-content')}>
        {children}
      </div>
    </Container>
  );
};

Tooltip.propTypes = {
  inline: PropTypes.bool,
  holderRef: PropTypes.shape({ current: PropTypes.any }),
  children: PropTypes.any,
  onDismiss: PropTypes.func,
};

export default WithTooltip;
