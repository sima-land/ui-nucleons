import {
  Children,
  isValidElement,
  forwardRef,
  useRef,
  useState,
  ReactNode,
  MouseEventHandler,
  createContext,
  useContext,
  CSSProperties,
  useEffect,
} from 'react';
import { useExpandable } from './utils';
import classnames from 'classnames/bind';
import styles from './expandable-group.module.scss';

const cx = classnames.bind(styles);

export interface ExpandableGroupProps {
  /** Расстояние между элементами группы в пикселях. */
  gap?: number;

  /** Высота каждого элемента группы в пикселях. */
  itemHeight?: number;

  /** Развернут ли список по умолчанию. */
  defaultExpanded?: boolean;

  /** Количество строк в свернутом состоянии группы. */
  lineLimit?: number;

  /** Содержимое. */
  children?: ReactNode;

  /** Функция, возвращающая содержимое кнопки разворачивания списка. */
  opener?: (data: { hiddenCount: number }) => ReactNode;

  /** Сработает при разворачивании списка. */
  onExpand?: () => void;

  /** CSS-класс корневого элемента. */
  className?: string;

  /** Стили корневого элемента. */
  style?: CSSProperties;

  /** Нужно ли выводить список развернутым. */
  expanded?: boolean;

  /** Ширина открывающего элемента. */
  openerWidth?: number;
}

export interface GroupItemProps {
  children?: ReactNode;
  onClick?: MouseEventHandler;
  'data-testid'?: string;
}

const ItemContext = createContext<{ invisible?: boolean; opener?: boolean }>({});

/**
 * Группа элементов с ограничением на число выводимых строк и возможностью показать все.
 * @param props Свойства.
 * @return Элемент.
 */
export function ExpandableGroup({
  gap = 8,
  itemHeight = 32,
  lineLimit = 2,
  defaultExpanded = false,
  children,
  onExpand,
  opener = data => <>Ещё {data.hiddenCount}</>,
  className,
  style,
  expanded: expandedProp,
  openerWidth = 72,
}: ExpandableGroupProps) {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLUListElement>(null);
  const openerRef = useRef<HTMLLIElement>(null);

  const [mounted, setMounted] = useState<boolean>(false);
  const [expanded, setExpanded] = useState<boolean>(defaultExpanded);

  const items = Children.toArray(children).reduce<ReactNode[]>((result, child) => {
    if (isValidElement(child) && child.type === ExpandableItem) {
      result.push(child);
    }

    return result;
  }, []);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    expandedProp !== undefined && setExpanded(expandedProp);
  }, [expandedProp]);

  const { hiddenCount } = useExpandable({
    expanded,
    wrapperRef,
    containerRef,
    openerRef,
    gap,
  });

  return (
    <div
      ref={wrapperRef}
      className={cx('root', className)}
      style={
        {
          ...style,
          maxHeight: expanded ? undefined : `${itemHeight * lineLimit + gap * (lineLimit - 1)}px`,
          '--expandable-item-height': `${itemHeight}px`,
          '--expandable-opener-width': `${openerWidth}px`,
          '--expandable-gap': `${gap}px`,
        } as any
      }
    >
      <ul ref={containerRef} className={styles.inner}>
        {items}

        {/* ВАЖНО: выводим "открывашку" только после монтирования (для SEO) */}
        {mounted && !expanded && (
          <ItemContext.Provider value={{ invisible: hiddenCount === 0, opener: true }}>
            <ExpandableItem
              ref={openerRef}
              onClick={() => {
                setExpanded(true);
                onExpand?.();
              }}
              data-testid='expandable:opener'
            >
              {opener({ hiddenCount })}
            </ExpandableItem>
          </ItemContext.Provider>
        )}
      </ul>
    </div>
  );
}

const ExpandableItem = forwardRef<HTMLLIElement, GroupItemProps>(
  ({ children, onClick, 'data-testid': testId = 'expandable:item' }, ref) => {
    const context = useContext(ItemContext);

    return (
      <li ref={ref} className={cx('item', context)} data-testid={testId} onClick={onClick}>
        {children}
      </li>
    );
  },
);

export const Expandable = {
  Group: ExpandableGroup,
  Item: ExpandableItem,
} as const;
