import React from 'react';
import PropTypes from 'prop-types';
import styles from './bordered-layout.scss';
import classnames from 'classnames/bind';
import { MobileLayout } from '../layout';
import { InnerBorder } from '../styling/borders';

const cx = classnames.bind(styles);

/**
 * Выводит содержимое по мобильному layout'у с вертикальными полосками.
 * @param {Object} props Свойства компонента.
 * @param {boolean} props.top Флаг добавления рамки сверху.
 * @param {boolean} props.bottom Флаг добавления рамки снизу.
 * @param {React.ReactNode} props.children Содержимое компонента.
 * @return {ReactElement} Компонент добавления рамки.
 */
const BorderedLayout = ({ top, bottom, children }) => {
  let borderClass;

  if (top && bottom) {
    borderClass = InnerBorder.y;
  } else if (top) {
    borderClass = InnerBorder.top;
  } else if (bottom) {
    borderClass = InnerBorder.bottom;
  }

  return (
    <MobileLayout>
      <div className={cx('inner', borderClass)}>
        {children}
      </div>
    </MobileLayout>
  );
};

BorderedLayout.propTypes = {
  /**
   * Нужна ли рамка сверху.
   */
  top: PropTypes.bool,

  /**
   * Нужна ли рамка снизу.
   */
  bottom: PropTypes.bool,

  /**
   * Содержимое слоя.
   */
  children: PropTypes.node,
};

export default BorderedLayout;
