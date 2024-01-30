import {
  Children,
  isValidElement,
  forwardRef,
  useRef,
  useState,
  ReactNode,
  createContext,
  useContext,
  useEffect,
  useCallback,
} from 'react';
import { ExpandableGroupProps, ExpandableGroupItemProps, ExpandableGroupInnerStyle } from './types';
import { useIsomorphicLayoutEffect } from '../hooks';
import { defineLastVisible, useObserveWidth } from './utils';
import classnames from 'classnames/bind';
import styles from './expandable-group.m.scss';

const cx = classnames.bind(styles);

const ItemContext = createContext<{ hidden?: boolean }>({});

interface State {
  status: 'initial' | 'some-hidden' | 'all-visible' | 'expanded';
  lastVisibleIndex: number;
}

const initialState: State = {
  status: 'initial',
  lastVisibleIndex: -1,
};

const expandedState: State = {
  status: 'expanded',
  lastVisibleIndex: -1,
};

/**
 * Группа элементов с ограничением на число выводимых строк и возможностью показать все.
 * @param props Свойства.
 * @return Элемент.
 */
export function ExpandableGroup(props: ExpandableGroupProps) {
  const time = useRef(1);

  // @todo зациклить если каким-то невероятным образом уйдет за границу number
  time.current = time.current + 1;

  // ВАЖНО: рендер вызванный родительским компонентом должен приводить к пересчету, поэтому передаем уникальный time
  return <ExpandableGroupInner {...props} time={time.current} />;
}

/**
 * Внутренний компонент, необходимый для корректной обработки повторных render'ов.
 * @param props Свойства.
 * @return Элемент.
 */
function ExpandableGroupInner({
  gap = 8,
  itemHeight = 32,
  lineLimit = 2,
  defaultExpanded = false,
  children,
  opener: renderOpener = data => <>Ещё {data.hiddenCount}</>,
  className,
  style,
  expanded: expandedProp,
  onExpand,
  openerWidth = 72,
  time,
}: ExpandableGroupProps & { time: number }) {
  const outerRef = useRef<HTMLDivElement>(null);
  const innerRef = useRef<HTMLUListElement>(null);
  const openerRef = useRef<HTMLLIElement>(null);

  const [mounted, setMounted] = useState<boolean>(false);
  const [state, setState] = useState<State>(() => (defaultExpanded ? expandedState : initialState));

  useEffect(() => {
    setMounted(true);
  }, []);

  // даем возможность управлять состоянием с помощью пропса "expanded"
  useEffect(() => {
    if (typeof expandedProp === 'boolean') {
      // ВАЖНО: передаем именно копию состояний чтобы гарантированно вызвать рендер
      setState(expandedProp ? { ...expandedState } : { ...initialState });
    }
  }, [expandedProp]);

  // если "time" обновился - это сигнал о том что надо пересчитать состояние
  useEffect(() => {
    // ВАЖНО: передаем именно копию состояний чтобы гарантированно вызвать рендер
    setState(current => (current.status === 'expanded' ? current : { ...initialState }));
  }, [time]);

  // следим за изменением ширины чтобы запустить перерасчет
  useObserveWidth(outerRef, () => {
    // ВАЖНО: передаем именно копию состояний чтобы гарантированно вызвать рендер
    setState(current => (current.status === 'expanded' ? current : { ...initialState }));
  });

  // выполняем расчет
  useIsomorphicLayoutEffect(() => {
    if (state.status === 'initial') {
      const outer = outerRef.current;
      const inner = innerRef.current;
      const opener = openerRef.current;

      if (outer && inner && opener) {
        const { lastVisibleIndex } = defineLastVisible({ outer, inner, gap, opener, openerWidth });

        setState({
          status: lastVisibleIndex !== -1 ? 'some-hidden' : 'all-visible',
          lastVisibleIndex,
        });
      }
    }
  }, [state, mounted]);

  const rootStyle: ExpandableGroupInnerStyle = {
    ...style,
    maxHeight:
      state.status === 'expanded'
        ? undefined
        : `${itemHeight * lineLimit + gap * (lineLimit - 1)}px`,
    '--expandable-gap': `${gap}px`,
    '--expandable-item-height': `${itemHeight}px`,
    '--expandable-opener-width': `${openerWidth}px`,
  };

  const handleExpand = useCallback(() => {
    setState(expandedState);
    onExpand?.();
  }, [onExpand]);

  const items = Children.toArray(children).reduce<ReactNode[]>((result, child, index) => {
    if (isValidElement(child) && child.type === ExpandableItem) {
      result.push(
        <ItemContext.Provider
          key={child.key}
          value={{
            hidden: state.status === 'some-hidden' && index > state.lastVisibleIndex,
          }}
        >
          {child}
        </ItemContext.Provider>,
      );
    }
    return result;
  }, []);

  // ВАЖНО: root нужен для того чтобы формировать ограничение по высоте
  return (
    <div ref={outerRef} className={cx('root', className)} style={rootStyle}>
      <ul ref={innerRef} className={cx('inner')}>
        {items}

        {/* ВАЖНО: выводим "открывашку" только после монтирования (для SEO) */}
        {mounted && state.status !== 'expanded' && (
          <ItemContext.Provider value={{ hidden: state.status !== 'some-hidden' }}>
            <ExpandableItem ref={openerRef} onClick={handleExpand} data-testid='expandable:opener'>
              {renderOpener({ hiddenCount: items.length - state.lastVisibleIndex - 1 })}
            </ExpandableItem>
          </ItemContext.Provider>
        )}
      </ul>
    </div>
  );
}

export const ExpandableItem = forwardRef<HTMLLIElement, ExpandableGroupItemProps>(
  ({ children, onClick, 'data-testid': testId = 'expandable:item' }, ref) => {
    const { hidden } = useContext(ItemContext);

    return (
      <li ref={ref} className={cx('item', { hidden })} data-testid={testId} onClick={onClick}>
        {children}
      </li>
    );
  },
);

export const Expandable = {
  Group: ExpandableGroup,
  Item: ExpandableItem,
} as const;
