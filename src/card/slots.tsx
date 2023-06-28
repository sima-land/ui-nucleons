import { cloneElement, isValidElement, useContext } from 'react';
import { InnerBorder } from '../styling/borders';
import classnames from 'classnames';
import styles from './card.module.scss';
import { TopBar, TopBarProps } from '../top-bar';
import { PlateProps } from '../plate';
import { MediumRounds, SmallRounds } from '../styling/shapes';
import { CardContext } from './utils';

export interface CardHeaderProps extends React.HTMLAttributes<HTMLDivElement> {
  divided?: boolean;
  rounds?: PlateProps['rounds'];
}

/**
 * Компонент слота "шапки" карточки.
 * @param props Свойства.
 * @deprecated Нужно использовать TopBar.
 * @return Элемент.
 */
export function CardHeader({ children, divided }: CardHeaderProps) {
  const { rounds } = useContext(CardContext);

  return (
    <div className={classnames(divided && InnerBorder.bottom)}>
      {isValidElement<TopBarProps>(children) && children.type === TopBar
        ? cloneElement<TopBarProps>(children, {
            className: classnames(
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

export interface CardContentProps extends React.HTMLAttributes<HTMLDivElement> {
  scrollableRef?: React.Ref<HTMLDivElement>;
}

/**
 * Компонент слота основного контента карточки.
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
    <div {...restProps} ref={scrollableRef} className={classnames(styles.content, className)}>
      {children}
    </div>
  );
}

CardContent.displayName = 'Card.Content';

export interface CardFooterProps extends React.HTMLAttributes<HTMLDivElement> {
  divided?: boolean;
}

/**
 * Компонент слота "подвала" карточки.
 * @param props Свойства.
 * @deprecated Нужно использовать BottomBar.
 * @return Элемент.
 */
export function CardFooter({ children, divided, className, ...restProps }: CardFooterProps) {
  return (
    <div {...restProps} className={classnames(className, divided && InnerBorder.top)}>
      {children}
    </div>
  );
}

CardFooter.displayName = 'Card.Footer';
