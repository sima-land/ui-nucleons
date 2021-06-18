import React from 'react';
import { Plate, PlateProps } from '../plate';
import { CardContent, CardFooter, CardHeader } from './slots';
import { CardContext, defineSlots } from './utils';
import classnames from 'classnames';
import styles from './card.module.scss';

export type CardProps = PlateProps;

export interface CardComponent {
  (props: CardProps): JSX.Element
  Header: typeof CardHeader
  Content: typeof CardContent
  Footer: typeof CardFooter
}

/**
 * Компонент карточки - это расширенный Plate с возможностью определять слоты: шапку, тело и футер.
 * @param props Свойства.
 * @return Элемент.
 */
export const Card: CardComponent = ({ children, className, rounds, ...restProps }) => {
  const { header, content, footer } = defineSlots(children);

  return (
    <CardContext.Provider value={{ rounds }}>
      <Plate {...restProps} rounds={rounds} className={classnames(styles.root, className)}>
        {header}
        {content}
        {footer}
      </Plate>
    </CardContext.Provider>
  );
};

Card.Header = CardHeader;
Card.Content = CardContent;
Card.Footer = CardFooter;
