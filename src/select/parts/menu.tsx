import {
  Children,
  KeyboardEventHandler,
  MouseEventHandler,
  useCallback,
  useEffect,
  useImperativeHandle,
  useRef,
  useState,
} from 'react';
import { Dropdown } from '../../dropdown';
import { DropdownItem } from '../../dropdown-item';
import { DropdownItemElement } from '../../dropdown-item/types';
import { DropdownItemUtils } from '../../dropdown-item/utils';
import { DropdownLoading } from '../../_internal/dropdown-loading';
import { SelectMenuProps } from '../types';
import { scrollToChild } from '../../helpers/scroll-to-child';
import classNames from 'classnames';
import styles from './menu.module.scss';

const MenuItemAttr = {
  name: 'data-select-role',
  value: 'option',
} as const;

/**
 * Меню выбора для компонента Select.
 * @param props Свойства.
 * @return Элемент.
 */
export function SelectMenu({
  loading,
  children,
  menuRef,
  value,
  onKeyDown,
  onItemSelect,
  ...restProps
}: SelectMenuProps) {
  const ref = useRef<HTMLDivElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState<number>(-1);
  const items = Children.toArray(children).filter(DropdownItemUtils.is);

  useImperativeHandle(menuRef, () => ref.current);

  // прокрутка до элемента списка
  useEffect(() => {
    const itemSelector = `[${MenuItemAttr.name}="${MenuItemAttr.value}"]`;
    const menu = scrollRef.current;
    const item = menu?.querySelectorAll(itemSelector)[activeIndex];

    if (menu && item) {
      scrollToChild(menu, item);
    }
  }, [activeIndex]);

  const handleMenuKeyDown = useCallback<KeyboardEventHandler<HTMLDivElement>>(
    event => {
      onKeyDown?.(event);

      switch (event.code) {
        case 'Enter': {
          const item = items[activeIndex];

          if (item) {
            onItemSelect?.(item);
          }

          setActiveIndex(-1);
          break;
        }
        case 'ArrowUp':
          setActiveIndex(n => DropdownItemUtils.asLoopedIterator(items, n).prev() ?? -1);
          break;
        case 'ArrowDown':
          setActiveIndex(n => DropdownItemUtils.asLoopedIterator(items, n).next() ?? -1);
          break;
      }
    },
    [items, activeIndex, onKeyDown],
  );

  const handleItemClick = useCallback(
    (item: DropdownItemElement): MouseEventHandler<HTMLDivElement> | undefined =>
      item.props.disabled
        ? undefined
        : event => {
            item.props.onClick?.(event);
            onItemSelect?.(item);
          },
    [onItemSelect],
  );

  return (
    <Dropdown
      {...restProps}
      ref={ref}
      viewportRef={scrollRef}
      tabIndex={0}
      role='listbox'
      onKeyDown={handleMenuKeyDown}
      className={classNames(styles.menu, restProps.className)}
    >
      {loading ? (
        <DropdownLoading data-testid='select:loading-area' />
      ) : (
        items.map((item, index) => (
          <DropdownItem
            checked={activeIndex === index}
            selected={value === DropdownItemUtils.getValue(item)}
            {...item.props}
            key={index}
            role='option'
            onClick={handleItemClick(item)}
            {...{ [MenuItemAttr.name]: MenuItemAttr.value }}
          />
        ))
      )}
    </Dropdown>
  );
}
