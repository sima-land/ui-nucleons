import React, {
  Children,
  cloneElement,
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
import { useViewState } from './utils';
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
}

export interface GroupItemProps {
  children?: ReactNode;
  onClick?: MouseEventHandler;
  'data-testid'?: string;
}

const GroupContext = createContext<{ gap: number; itemHeight: number }>({ gap: 8, itemHeight: 32 });
const ItemContext = createContext<{ hidden?: boolean; invisible?: boolean }>({});

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
}: ExpandableGroupProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const openerRef = useRef<HTMLDivElement>(null);

  const [expanded, setExpanded] = useState<boolean>(defaultExpanded);
  const viewState = useViewState(containerRef, openerRef);

  const needHideItems = viewState.lastVisibleIndex !== -1 && !expanded;

  const items = Children.toArray(children).reduce<ReactNode[]>((result, child, index) => {
    const isDisplayed = !needHideItems || index < viewState.lastVisibleIndex;

    if (isValidElement(child) && child.type === ExpandableItem) {
      result.push(
        <ItemContext.Provider key={index} value={{ hidden: !isDisplayed }}>
          {cloneElement(child, { hidden: !isDisplayed })}
        </ItemContext.Provider>,
      );
    }

    return result;
  }, []);

  useEffect(() => {
    expandedProp !== undefined && setExpanded(expandedProp);
  }, [expandedProp]);

  return (
    <GroupContext.Provider value={{ gap, itemHeight }}>
      <div
        ref={containerRef}
        className={cx('root', className)}
        style={{
          ...style,
          maxHeight: expanded ? undefined : `${itemHeight * lineLimit + gap * (lineLimit - 1)}px`,
        }}
      >
        <div
          className={styles.inner}
          style={{ marginRight: `${-gap}px`, marginBottom: `${-gap}px` }}
        >
          {items}

          {!expanded && (
            <ItemContext.Provider value={{ invisible: false }}>
              <ExpandableItem
                ref={openerRef}
                onClick={() => {
                  setExpanded(true);
                  onExpand?.();
                }}
                data-testid='expandable:opener'
              >
                {opener({ hiddenCount: items.length - viewState.lastVisibleIndex })}
              </ExpandableItem>
            </ItemContext.Provider>
          )}
        </div>
      </div>
    </GroupContext.Provider>
  );
}

const ExpandableItem = forwardRef<HTMLDivElement, GroupItemProps>(
  ({ children, onClick, 'data-testid': testId = 'expandable:item' }, ref) => {
    const { gap, itemHeight } = useContext(GroupContext);
    const { invisible, hidden } = useContext(ItemContext);

    return (
      <div
        ref={ref}
        className={cx('item', { hidden, invisible })}
        data-testid={testId}
        onClick={onClick}
        style={{
          height: `${itemHeight}px`,
          margin: `0 ${gap}px ${gap}px 0`,
        }}
      >
        {children}
      </div>
    );
  },
);

export const Expandable = {
  Group: ExpandableGroup,
  Item: ExpandableItem,
} as const;
