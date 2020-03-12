import React from 'react';
import PropTypes from 'prop-types';
import styles from './bordered-layout.scss';
import classnames from 'classnames/bind';
import MobileLayout from '../layout/mobile-layout/';

const cx = classnames.bind(styles);

/**
 * Компонент добавления рамки.
 * @param {Object} props Свойства компонента.
 * @param {boolean} props.top Флаг добавления рамки сверху.
 * @param {boolean} props.bottom Флаг добавления рамки снизу.
 * @param {*} props.children Содержимое компонента.
 * @return {ReactElement} Компонент добавления рамки.
 */
const BorderedLayout = ({ top, bottom, children }) => {
  const classes = [!top && 'disable-border-top', !bottom && 'disable-border-bottom'];

  return (
    <div className={cx('base', 'outer', classes)}>
      <MobileLayout>
        <div className={cx('base', 'inner', classes)}>
          {children}
        </div>
      </MobileLayout>
    </div>
  );
};

export default BorderedLayout;

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
  children: PropTypes.any,
};
