import {
  Children,
  cloneElement,
  isValidElement,
  MouseEvent,
  ReactElement,
  ReactNode,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useRef,
  useState,
} from 'react';
import { Dropdown, DropdownLoading, DropdownProps, useDismissByWheel } from '../../dropdown';
import { SelectContext } from '../utils';
import { LayerProvider, mergeRefs, scrollToChild, useLayer } from '../../helpers';
import { Portal } from '../../portal';
import { Lifecycle } from '../../_internal/lifecycle';
import { DropdownItem, DropdownItemProps } from '../../dropdown-item';
import { DropdownItemUtils } from '../../dropdown-item/utils';
import { useIdentityRef, useOutsideClick } from '../../hooks';

const MenuItemAttr = {
  name: 'data-select-role',
  value: 'option',
} as const;

/**
 * Меню выбора для компонента Select.
 * @param props Свойства.
 * @return Элемент.
 */
export function SelectMenu(props: DropdownProps) {
  const {
    //
    selectProps,
    menuOpen,
  } = useContext(SelectContext);

  const { disabled, onMenuOpen, onMenuClose, onMenuToggle } = selectProps;

  const onMount = useCallback(() => {
    onMenuOpen?.();
    onMenuToggle?.({ opened: true });
  }, [onMenuOpen, onMenuToggle]);

  const onUnmount = useCallback(() => {
    onMenuClose?.();
    onMenuToggle?.({ opened: false });
  }, [onMenuClose, onMenuToggle]);

  if (disabled || !menuOpen) {
    return null;
  }

  return (
    <Portal>
      <Lifecycle onMount={onMount} onUnmount={onUnmount}>
        <SelectMenuInner {...props} />
      </Lifecycle>
    </Portal>
  );
}

/**
 * Внутренний компонент, необходимый из-за специфики работы с порталами.
 * @param props Свойства.
 * @return Элемент.
 */
function SelectMenuInner({
  rootRef: rootRefProp,
  style,
  onBlur,
  onKeyDown,
  viewportRef: viewportRefProp,
  ...restProps
}: DropdownProps) {
  const {
    selectProps,
    currentValue,
    setCurrentValue,
    setMenuOpen,
    openerElement,
    setMenuElement,
    menuFloatingStyle,
  } = useContext(SelectContext);

  const { loading, children, dropdownProps } = selectProps;

  // ВАЖНО: хотя menuFloatingStyle уже содержит zIndex на основе layer-контекста, мы дублируем его тут так как нам надо его предоставить
  const layer = useLayer() + 2;

  const rootRef = useRef<HTMLDivElement | null>(null);
  const viewportRef = useRef<HTMLDivElement>(null);

  const mergedRootRef = useMemo(
    () => mergeRefs<HTMLDivElement>([rootRef, setMenuElement, rootRefProp]),
    [setMenuElement, rootRefProp],
  );

  const mergedViewportRef = useMemo(
    () => mergeRefs<HTMLDivElement>([viewportRef, viewportRefProp]),
    [viewportRef, viewportRefProp],
  );

  const [activeItemIndex, setActiveItemIndex] = useState(-1);

  const items: ReactElement<DropdownItemProps>[] = [];
  const content: ReactNode[] = [];

  Children.toArray(children).forEach(child => {
    if (isValidElement<DropdownItemProps>(child) && child.type === DropdownItem) {
      const itemIndex = items.length;
      const itemValue = child.props.value ?? String(child.props.children);

      items.push(child);
      content.push(
        cloneElement(child, {
          // ВАЖНО: собственные свойства опции имеют приоритет
          checked: child.props.checked ?? activeItemIndex === itemIndex,
          selected: child.props.selected ?? itemValue === currentValue,
          onClick: (event: MouseEvent<HTMLDivElement>) => {
            child.props.onClick?.(event);

            if (child.props.disabled || event.defaultPrevented) {
              return;
            }

            setCurrentValue(itemValue);
            setMenuOpen(false);
            openerElement?.focus();
          },

          // ВАЖНО: добавляем атрибут который нужен для прокрутки к элементу
          [MenuItemAttr.name as any]: MenuItemAttr.value,
        }),
      );
    } else {
      content.push(child);
    }
  }, []);

  // прокрутка до элемента списка
  useEffect(() => {
    const itemSelector = `[${MenuItemAttr.name}="${MenuItemAttr.value}"]`;
    const menu = viewportRef.current;
    const item = menu?.querySelectorAll(itemSelector)[activeItemIndex];

    if (menu && item instanceof HTMLElement) {
      scrollToChild(menu, item);
    }
  }, [activeItemIndex]);

  // скрытие меню при прокрутке колесом за пределами меню
  useDismissByWheel(rootRef, () => {
    setMenuOpen(false);
  });

  const openerRef = useIdentityRef(openerElement);
  useOutsideClick([rootRef, openerRef], () => {
    setMenuOpen(false);
  });

  const selectItem = useCallback(
    (item: ReactElement<DropdownItemProps>) => {
      const nextValue = item.props.value ?? String(item.props.children);

      setCurrentValue(nextValue);
      setMenuOpen(false);
      openerElement?.focus();
    },
    [setCurrentValue, setMenuOpen, openerElement],
  );

  return (
    <Dropdown
      tabIndex={0}
      {...dropdownProps}
      {...restProps}
      rootRef={mergedRootRef}
      viewportRef={mergedViewportRef}
      style={{
        ...menuFloatingStyle,
        ...dropdownProps?.style,
        ...style,
      }}
      onBlur={event => {
        onBlur?.(event);
        dropdownProps?.onBlur?.(event);

        if (event.currentTarget.contains(event.relatedTarget)) {
          return;
        }

        if (openerElement?.contains(event.relatedTarget)) {
          return;
        }

        setMenuOpen(false);
      }}
      onKeyDown={event => {
        onKeyDown?.(event);
        dropdownProps?.onKeyDown?.(event);

        switch (event.code) {
          case 'Escape': {
            setMenuOpen(false);
            openerElement?.focus();
            break;
          }

          case 'Enter': {
            if (activeItemIndex === -1) {
              setMenuOpen(false);
              openerElement?.focus();
            } else {
              const item = items[activeItemIndex];

              item && !item.props.disabled && selectItem(item);
            }
            break;
          }

          case 'Tab':
            event.preventDefault(); // ВАЖНО: предотвращаем фокус на следующем элементе
            setMenuOpen(false);
            openerElement?.focus();
            break;

          case 'ArrowUp':
            setActiveItemIndex(n => DropdownItemUtils.asLoopedIterator(items, n).prev() ?? -1);
            break;

          case 'ArrowDown':
            setActiveItemIndex(n => DropdownItemUtils.asLoopedIterator(items, n).next() ?? -1);
            break;
        }
      }}
    >
      <LayerProvider value={layer + 2}>
        {loading ? <DropdownLoading data-testid='select:loading-area' /> : content}
      </LayerProvider>
    </Dropdown>
  );
}
