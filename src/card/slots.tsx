import { HTMLAttributes, Ref, cloneElement, isValidElement, useContext } from 'react';
import { InnerBorder } from '../styling/borders';
import { TopBar, TopBarProps } from '../top-bar';
import { PlateProps } from '../plate';
import { MediumRounds, SmallRounds } from '../styling/shapes';
import { CardContext } from './utils';
import classNames from 'classnames';
import styles from './card.module.scss';

export interface CardHeaderProps extends HTMLAttributes<HTMLDivElement> {
  divided?: boolean;
  rounds?: PlateProps['rounds'];
}

/**
 * Слот "шапки" карточки.
 * @param props Свойства.
 * @deprecated Нужно использовать TopBar.
 * @return Элемент.
 */
export function CardHeader({ children, divided }: CardHeaderProps) {
  const { rounds } = useContext(CardContext);

  return (
    <div className={classNames(divided && InnerBorder.bottom)}>
      {isValidElement<TopBarProps>(children) && children.type === TopBar
        ? cloneElement<TopBarProps>(children, {
            className: classNames(
              children.props.className,
              divided && InnerBorder.bottom,
              rounds === 's' && SmallRounds.top,
              rounds === 'm' && MediumRounds.top,
            ),
          })
        : children}
    </div>
  );
}

CardHeader.displayName = 'Card.Header';

export interface CardContentProps extends HTMLAttributes<HTMLDivElement> {
  scrollableRef?: Ref<HTMLDivElement>;
}

/**
 * Слот основного контента карточки.
 * @param props Свойства.
 * @return Элемент.
 */
export function CardContent({
  children,
  className,
  scrollableRef,
  ...restProps
}: CardContentProps) {
  return (
    <div {...restProps} ref={scrollableRef} className={classNames(styles.content, className)}>
      {children}
    </div>
  );
}

CardContent.displayName = 'Card.Content';

export interface CardFooterProps extends HTMLAttributes<HTMLDivElement> {
  divided?: boolean;
}

/**
 * Слот "подвала" карточки.
 * @param props Свойства.
 * @deprecated Нужно использовать BottomBar.
 * @return Элемент.
 */
export function CardFooter({ children, divided, className, ...restProps }: CardFooterProps) {
  return (
    <div {...restProps} className={classNames(className, divided && InnerBorder.top)}>
      {children}
    </div>
  );
}

CardFooter.displayName = 'Card.Footer';
