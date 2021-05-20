import { Children, createContext, isValidElement } from 'react';
import { PlateProps } from '../plate';
import { CardContent, CardFooter, CardHeader } from './slots';

export interface CardSlots {
  header?: React.ReactElement
  content?: React.ReactElement
  footer?: React.ReactElement
}

/**
 * Получив содержимое компонента распределит его по слотам.
 * @param children Содержимое карточки.
 * @return Слоты.
 */
export const defineSlots = (children: React.ReactNode) => Children.toArray(children).reduce<CardSlots>(
  (result, item) => {
    if (isValidElement(item)) {
      switch (item.type) {
        case CardHeader:
          result.header = item;
          break;
        case CardContent:
          result.content = item;
          break;
        case CardFooter:
          result.footer = item;
          break;
      }
    }

    return result;
  },
  {}
);

export const CardContext = createContext<Partial<PlateProps>>({});
