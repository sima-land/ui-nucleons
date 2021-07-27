import React, { cloneElement, Fragment, useRef } from 'react';
import { TopBarSize, TOP_BAR_HEIGHT } from '../top-bar';
import { BottomBarProps, BOTTOM_BAR_DEFAULTS, BOTTOM_BAR_HEIGHT } from '../bottom-bar';
import { useCloseHandler } from './utils';
import { BoxShadow } from '../styling/shadows';
import { Portal } from '../portal';
import { isNumber } from 'lodash';
import { ModalBody, ModalFooter, ModalHeader, ModalHeaderProps, ModalOverlap } from './slots';
import { LayerProvider, useLayer } from '../helpers/layer';
import classnames from 'classnames/bind';
import styles from './modal.module.scss';
import { defineSlots } from '../helpers/define-slots';
import { WithBodyScrollLock, useBodyScrollLock } from '../_internal/body-scroll';

type ModalSize = 's' | 'm' | 'l' | 'xl' | 'fullscreen';

interface ModalStyle extends React.CSSProperties {
  '--modal-height'?: string
  '--header-height': string
  '--footer-height': string
}

export interface ModalProps extends WithBodyScrollLock {

  /** Содержимое компонента. */
  children?: React.ReactNode

  /** Высота в пикселях. */
  height?: number

  /** Будет вызвана при нажатии на кнопку "назад" в топ баре. */
  onBack?: () => void

  /** Будет вызвана при закрытии окна. */
  onClose?: () => void

  /** Размер окна. */
  size?: ModalSize

  /** Нужно ли выводить элемент в Layer (при SSR необходимо указать false). */
  inPortal?: boolean

  /** Идентификатор для систем автоматизированного тестирования. */
  'data-testid'?: string
}

export interface ModalComponent {
  (props: ModalProps): JSX.Element
  Header: typeof ModalHeader
  Body: typeof ModalBody
  Footer: typeof ModalFooter
  Overlap: typeof ModalOverlap
}

const cx = classnames.bind(styles);

/**
 * Компонент модального окна.
 * @param props Свойства.
 * @return Элемент.
 */
export const Modal: ModalComponent = ({ inPortal, ...restProps }) => {
  const Wrapper = inPortal ? Portal : Fragment;

  return (
    <Wrapper>
      <ModalInner {...restProps} />
    </Wrapper>
  );
};

/**
 * Внутренний компонент для того чтобы не прокидывать реф через портал.
 * @param props Свойства.
 * @return Элемент.
 */
const ModalInner = ({
  children,
  height,
  onClose,
  scrollDisableOptions = { reserveScrollBarGap: true },
  size = 'm',
  withScrollDisable = false,
  'data-testid': testId = 'modal',
}: Omit<ModalProps, 'inPortal'>) => {
  const layer = useLayer() + 100;

  const rootRef = useRef<HTMLDivElement>(null);

  const handleClose = useCloseHandler(onClose);

  const fullscreen = size === 'fullscreen';

  const { header, content, footer, overlap } = defineSlots(children, {
    header: ModalHeader,
    content: ModalBody,
    footer: ModalFooter,
    overlap: ModalOverlap,
  });

  const topBarSize: TopBarSize = fullscreen ? 'm' : 's';

  const headerHeight: number = header
    ? TOP_BAR_HEIGHT[topBarSize]
    : 0;

  const footerStubHeight: number = fullscreen ? 0 : 16;

  const footerHeight: number = footer
    ? BOTTOM_BAR_HEIGHT[footer.props.size || BOTTOM_BAR_DEFAULTS.size]
    : footerStubHeight;

  const style: ModalStyle = {
    '--modal-height': isNumber(height) ? `${Math.min(696, height)}px` : undefined,
    '--header-height': `${headerHeight}px`,
    '--footer-height': `${footerHeight}px`,
  };

  useBodyScrollLock(rootRef, withScrollDisable, scrollDisableOptions);

  return (
    <div
      ref={rootRef}
      className={cx('overlay')}
      data-testid='modal:overlay'
      style={{ zIndex: layer }} // z-index именно здесь из-за position: fixed
      {...handleClose}
    >
      <div
        className={cx(
          'modal',
          `size-${size}`,
          !fullscreen && BoxShadow.z4
        )}
        style={style}
        data-testid={testId}
      >
        {header && cloneElement<ModalHeaderProps>(header, {
          size: topBarSize,
        })}

        <LayerProvider value={layer}>
          {content}
        </LayerProvider>

        {footer && cloneElement<BottomBarProps>(footer, {
          size: fullscreen ? 'l' : footer.props.size,
        })}

        {!footer && !fullscreen && (
          <div className={cx('footer-stub')} />
        )}

        {!fullscreen && overlap && (
          <div className={cx('overlap')}>{overlap}</div>
        )}
      </div>
    </div>
  );
};

Modal.Header = ModalHeader;
Modal.Body = ModalBody;
Modal.Footer = ModalFooter;
Modal.Overlap = ModalOverlap;
