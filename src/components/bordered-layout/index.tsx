import React from 'react';
import classnames from 'classnames/bind';
import { MobileLayout } from '../layout';
import { InnerBorder } from '../styling/borders';
import styles from './bordered-layout.scss';

export interface Props {
  top?: boolean
  bottom?: boolean
  children?: React.ReactNode
}

const cx = classnames.bind(styles);

/**
 * Выводит содержимое по мобильному layout'у с вертикальными полосками.
 * @param props Свойства компонента.
 * @param props.top Флаг добавления рамки сверху.
 * @param props.bottom Флаг добавления рамки снизу.
 * @param props.children Содержимое компонента.
 * @return Компонент добавления рамки.
 */
const BorderedLayout: React.FC<Props> = ({ top, bottom, children }) => {
  let borderClass;

  if (top && bottom) {
    borderClass = InnerBorder.y;
  } else if (top) {
    borderClass = InnerBorder.top;
  } else if (bottom) {
    borderClass = InnerBorder.bottom;
  }

  return (
    <MobileLayout disabledOn={['mxs', 'ms']}>
      <div className={cx('inner', borderClass)}>
        {children}
      </div>
    </MobileLayout>
  );
};

export default BorderedLayout;