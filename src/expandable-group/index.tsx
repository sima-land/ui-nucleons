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
} from 'react';
import { useViewState } from './utils';
import classnames from 'classnames/bind';
import styles from './expandable-group.module.scss';

const cx = classnames.bind(styles);

export interface ExpandableGroupProps {
  gap?: number;
  itemHeight?: number;
  defaultExpanded?: boolean;
  lineLimit?: number;
  children?: ReactNode;
  opener?: (data: { hiddenCount: number }) => ReactNode;
  onExpand?: () => void;
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
function ExpandableGroup({
  gap = 8,
  itemHeight = 32,
  lineLimit: lineLimitProp = 2,
  defaultExpanded = false,
  children,
  onExpand,
  opener = data => <>Ещё {data.hiddenCount}</>,
}: ExpandableGroupProps) {
  const lineLimit = Number.isFinite(lineLimitProp) && lineLimitProp > 1 ? lineLimitProp : 1;

  const containerRef = useRef<HTMLDivElement>(null);
  const openerRef = useRef<HTMLDivElement>(null);

  const [expanded, setExpanded] = useState<boolean>(defaultExpanded);
  const viewState = useViewState(containerRef, openerRef);

  const items = Children.toArray(children).reduce<ReactNode[]>((result, child, index) => {
    const needHideItems = viewState.lastVisibleIndex !== -1 && !expanded;
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

  return (
    <GroupContext.Provider value={{ gap, itemHeight }}>
      <div
        ref={containerRef}
        className={styles.root}
        style={{
          maxHeight: expanded ? undefined : `${itemHeight * lineLimit + gap * (lineLimit - 1)}px`,
        }}
      >
        <div className={styles.inner} style={{ marginRight: `${-gap}px` }}>
          {items}

          {!expanded && (
            <ItemContext.Provider value={{ invisible: viewState.lastVisibleIndex === -1 }}>
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
