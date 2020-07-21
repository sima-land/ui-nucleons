import React, { useEffect, useRef, useCallback } from 'react';
import Icon from '../icon';
import Layer from '../layer';
import { placeTooltip } from './utils';
import classnames from 'classnames/bind';
import { useOutsideClick } from '../hooks';
import PropTypes from 'prop-types';
import { isFunction, debounce } from 'lodash';
import on from '../helpers/on';
import { getScrollParent } from '../helpers/get-scroll-parent';

import classes from './with-tooltip.scss';
import crossIcon from '../icons/stroked-cross.svg';

const cx = classnames.bind(classes);

/**
 * Компонент, добавляющий к содержимому подсказку.
 * @param {boolean} props Свойства.
 * @param {boolean} [props.inline] Нужно ли выводить inline-элемент.
 * @param {string} [props.holderElement] Тип элемента-контейнера.
 * @param {Object} [props.holderProps] Свойства контейнера.
 * @param {boolean} props.shown Показывать ли подсказку.
 * @param {Function} [props.onDismiss] Сработает при клике вне подсказки или на крестик в ней.
 * @param {*} props.children Содержимое.
 * @param {*} props.tooltipChildren Содержимое компонента Tooltip.
 * @param {Object} [props.tooltipProps] Свойства компонента Tooltip.
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
  tooltipProps = {},
}) => {
  const holderRef = useRef();

  return (
    <>
      <Holder
        {...holderProps}
        ref={holderRef}

        // "inline-block" - чтобы по умолчанию блочный элемент не заполнял всю доступную ширину, вытесняя подсказку
        className={cx('inline-block', holderProps.className)}
        children={children}
      />

      {/*
        * выводим за пределами Holder чтобы события из портала не распространялись на Holder
        * https://github.com/facebook/react/issues/11387
        */}
      {shown && (
        <Layer defineRoot={() => getScrollParent(holderRef.current)}>
          <Tooltip
            onDismiss={onDismiss}
            children={tooltipChildren}
            {...tooltipProps}
            inline={inline}
            holderRef={holderRef}
          />
        </Layer>
      )}
    </>
  );
};

WithTooltip.propTypes = {
  children: PropTypes.any,
  inline: PropTypes.bool,
  holderElement: PropTypes.string,
  holderProps: PropTypes.object,
  shown: PropTypes.bool,
  tooltipChildren: PropTypes.any,
  tooltipProps: PropTypes.object,
  onDismiss: PropTypes.func,
};

/**
 * Компонент подсказки. Позиционируется относительно переданного в holderRef элемента.
 * @param {Object} props Свойства.
 * @param {boolean} [props.inline=false] Нужно ли выводить inline-элемент.
 * @param {{ current: Element|null }} props.holderRef Реф с элементом, относительно которого нужно позиционироваться.
 * @param {*} props.children Содержимое.
 * @param {Function} [props.onDismiss] Сработает при клике за пределами или на крестик.
 * @param {string} [props.className] CSS-класс корневого элемента.
 * @return {ReactElement} Компонент подсказки.
 */
export const Tooltip = ({
  inline = false,
  holderRef,
  children,
  onDismiss,
  className,
}) => {
  const Container = inline ? 'span' : 'div';
  const tooltipRef = useRef();
  const place = useCallback(() => placeTooltip(tooltipRef.current, holderRef.current), []);

  useEffect(place);

  useEffect(() => {
    const offList = [
      on(window, 'scroll', place),
      on(window, 'resize', debounce(place, 200)),
    ];

    const scrollParent = getScrollParent(tooltipRef.current);

    scrollParent !== document.body
      && scrollParent !== document.documentElement
      && offList.push(on(scrollParent, 'scroll', place));

    return () => offList.forEach(off => off());
  }, []);

  useOutsideClick(tooltipRef, event => {
    const { current: holderEl } = holderRef;

    isFunction(onDismiss) && onDismiss(event, {
      byHolder: event.target === holderEl
        || (holderEl && holderEl.contains(event.target)),
    });
  });

  return (
    <Container
      ref={tooltipRef}
      style={{
        opacity: 0,
        visibility: 'hidden',
      }}
      className={cx('tooltip', className)}
    >
      <Icon
        size={16}
        icon={crossIcon}
        className={cx('tooltip-cross')}
        onClick={event => {
          isFunction(onDismiss) && onDismiss(event, { byHolder: false });
        }}
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
  className: PropTypes.string,
};

export default WithTooltip;
