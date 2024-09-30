import { ModalOverlay } from '../modal-overlay';
import { Plate } from '../plate';
import { TopBar } from '../top-bar';
import { BottomBar } from '../bottom-bar';
import { defineSlots } from '../helpers/define-slots';
import { useExactClick } from '../modal-overlay/utils';
import { AlertProps } from './types';
import { AlertBody } from './alert-body';
import classnames from 'classnames/bind';
import styles from './alert.m.scss';

const cx = classnames.bind(styles);

/**
 * Алерт - небольшое модальное окно, блокирующее работу с основным интерфейсом до тех пор, пока оно не будет закрыто.
 * Обычно используется для подтверждения действия или выбора действия из списка.
 * @param props Свойства.
 * @return Элемент.
 */
export function Alert({
  children,
  onClose,
  className,
  'data-testid': testId = 'alert',
  ...restProps
}: AlertProps) {
  const { topBar, body, bottomBar } = defineSlots(children, {
    topBar: TopBar,
    body: AlertBody,
    bottomBar: BottomBar,
  });

  const overlayClickBind = useExactClick(onClose);

  return (
    <ModalOverlay className={styles.overlay} {...overlayClickBind}>
      <Plate
        {...restProps}
        rounds='m'
        shadow='z4'
        className={cx('alert', className)}
        data-testid={testId}
      >
        {topBar}
        {body}
        {bottomBar}
      </Plate>
    </ModalOverlay>
  );
}
