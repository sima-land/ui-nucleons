import React, { cloneElement, isValidElement, useContext } from 'react';
import { InnerBorder } from '../styling/borders';
import classnames from 'classnames';
import styles from './card.module.scss';
import { TopBar, TopBarProps } from '../top-bar';
import { PlateProps } from '../plate';
import { MediumRounds, SmallRounds } from '../styling/shapes';
import { CardContext } from './utils';

export interface CardHeaderProps extends React.HTMLAttributes<HTMLDivElement> {
  divided?: boolean
  rounds?: PlateProps['rounds']
}

/**
 * Компонент слота "шапки" карточки.
 * @param props Свойства.
 * @return Элемент.
 */
export const CardHeader: React.FC<CardHeaderProps> = ({ children, divided }) => {
  const { rounds } = useContext(CardContext);

  return (
    <div className={classnames(divided && InnerBorder.bottom)}>
      {
        isValidElement(children) && children.type === TopBar
          ? cloneElement<TopBarProps>(children, {
            className: classnames(
              children.props.className,
              divided && InnerBorder.bottom,
              rounds === 's' && SmallRounds.top,
              rounds === 'm' && MediumRounds.top
            ),
          })
          : children
      }
    </div>
  );
};

CardHeader.displayName = 'Card.Header';

/**
 * Компонент слота основного контента карточки.
 * @param props Свойства.
 * @return Элемент.
 */
export const CardContent: React.FC<React.HTMLAttributes<HTMLDivElement>> = ({ className, ...restProps }) => (
  <div
    {...restProps}
    className={classnames(styles.content, className)}
  />
);

CardContent.displayName = 'Card.Content';

export interface CardFooterProps extends React.HTMLAttributes<HTMLDivElement> {
  divided?: boolean
}

/**
 * Компонент слота "подвала" карточки.
 * @param props Свойства.
 * @return Элемент.
 */
export const CardFooter: React.FC<CardFooterProps> = ({ divided, className, ...restProps }) => (
  <div
    {...restProps}
    className={classnames(className, divided && InnerBorder.top)}
  />
);

CardFooter.displayName = 'Card.Footer';
