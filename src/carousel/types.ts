import type { HTMLAttributes, ReactNode } from 'react';
import type { ArrowButtonProps } from '../arrow-button';

export interface CarouselState {
  currentOffset: number;
  isAllItemsVisible: boolean;
}

export interface CarouselControlData {
  canUse: boolean;
  onUse: () => void;
  type: 'forward' | 'backward';
  vertical?: boolean;
}

export interface CarouselProps {
  /** Список элементов. */
  items?: any[];

  /** На сколько элементов прокручивать за раз. */
  step?: number;

  /** Можно ли перетаскивать мышью. */
  draggable?: boolean | 'auto';

  /** Активирует бесконечную прокрутку. */
  infinite?: boolean;

  /** Вертикальный режим. */
  vertical?: boolean;

  /** Включена ли автоматическая прокрутка. */
  autoplay?: boolean;

  /** Таймаут автоматической прокрутки. */
  autoplayTimeout?: number;

  /** Нужно ли останавливать авто-прокрутку при наведении мыши. */
  autoplayHoverPause?: boolean;

  /** Показывать ли кнопки. */
  withControls?: boolean | 'auto';

  /** Индекс элемента к которому нужно прокрутиться. */
  targetIndex?: number;

  /** Сработает при монтировании. */
  onReady?: (currentIndex: number) => void;

  /** Вернет содержимое элемента. */
  renderItem?: (item: any, index: number) => ReactNode;

  /** Вернет содержимое кнопки. */
  renderControl?: (data: CarouselControlData, props?: ArrowButtonProps) => ReactNode;

  /** Сработает при смене индекса текущего элемента. */
  onChangeTargetIndex?: (newIndex: number) => void;

  /** Свойства контейнера. */
  containerProps?: HTMLAttributes<HTMLDivElement>;

  /** Свойства элемента, формирующего viewport карусели. */
  viewportElementProps?: HTMLAttributes<HTMLDivElement>;

  /** Свойства кнопок. */
  controlProps?: ArrowButtonProps;
}

export interface ElementPredicate {
  (sibling: Element): boolean;
}
