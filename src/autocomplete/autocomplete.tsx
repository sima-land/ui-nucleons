import {
  Children,
  KeyboardEventHandler,
  useCallback,
  useEffect,
  useImperativeHandle,
  useRef,
  useState,
} from 'react';
import { AutocompleteProps } from './types';
import { Dropdown, DropdownLoading } from '../dropdown';
import { DropdownItem } from '../dropdown-item';
import { DropdownItemElement } from '../dropdown-item/types';
import { DropdownItemUtils } from '../dropdown-item/utils';
import { FloatingPortal, useFloating } from '@floating-ui/react';
import { Input } from '../input';
import { useIsomorphicLayoutEffect } from '../hooks';
import { dropdownFloatingConfig, useDropdownFloatingStyle } from '../dropdown/utils';
import { scrollToChild } from '../helpers/scroll-to-child';
import { on } from '../helpers/on';
import { Lifecycle } from '../_internal/lifecycle';
import { NaiveSyntheticEvent, when } from './utils';
import DownSVG from '@sima-land/ui-quarks/icons/16x16/Stroked/Arrows/Down';
import UpSVG from '@sima-land/ui-quarks/icons/16x16/Stroked/Arrows/Up';
import styles from './autocomplete.module.scss';

/**
 * Поле ввода с подсказками.
 * @param props Свойства.
 * @return Элемент.
 */
export function Autocomplete({
  // specific Autocomplete props:
  children,
  loading,
  filterOption = defaultFilterOption,
  dropdownProps,
  onMenuOpen,
  onMenuClose,
  optionsStub = (
    <DropdownItem size='s' noHover>
      Не найдено
    </DropdownItem>
  ),

  // rest props:
  autoComplete,
  autoFocus,
  defaultValue,
  disabled,
  id,
  name,
  onBlur,
  onChange,
  onFocus,
  onInput,
  placeholder,
  readOnly,
  required,
  type,
  value,
  adornmentEnd = getDefaultAdornmentEnd,
  baseInputProps,
  ...restProps
}: AutocompleteProps) {
  const inputRef = useRef<HTMLInputElement>(null);
  const viewportRef = useRef<HTMLDivElement>(null);

  const [needMenu, setNeedMenu] = useState(false);

  const { refs, ...floating } = useFloating({ open: needMenu, ...dropdownFloatingConfig() });
  const floatingStyle = useDropdownFloatingStyle({ refs, ...floating });

  const [activeIndex, setActiveIndex] = useState<number>(-1);
  const [currentValue, setCurrentValue] = useState<string>(() => `${value ?? defaultValue ?? ''}`);

  const items = Children.toArray(children).filter(
    (item): item is DropdownItemElement =>
      DropdownItemUtils.is(item) && filterOption(item, currentValue),
  );

  const hasItems = items.length > 0;
  const hasItemsStub = Boolean(optionsStub);
  const hasValue = currentValue.length > 0;
  const hasMenuContent = hasItems || (hasValue && (loading || hasItemsStub));
  const menuShown = !disabled && needMenu && hasMenuContent;

  useImperativeHandle(restProps?.inputRef, () => inputRef.current as HTMLInputElement);
  useImperativeHandle(baseInputProps?.inputRef, () => inputRef.current as HTMLInputElement);

  const selectItem = useCallback(
    (item: DropdownItemElement) => {
      when(inputRef.current, input => {
        const prevValue = input.value;
        const nextValue = DropdownItemUtils.getValue(item);

        if (prevValue !== nextValue) {
          input.value = nextValue;

          // ВАЖНО: отправляем события чтобы их можно было получить через baseInputProps.inputRef+addEventListener
          // ВАЖНО: отправляем события чтобы на них заполнились поля target
          const nativeEventInput = new Event('input');
          const nativeEventChange = new Event('change');
          input.dispatchEvent(nativeEventInput);
          input.dispatchEvent(nativeEventChange);

          // ВАЖНО: синтетические события отправляем строго после нативных (как это делает React)
          const syntheticEventInput = new NaiveSyntheticEvent(nativeEventInput, input);
          const syntheticEventChange = new NaiveSyntheticEvent(nativeEventInput, input);
          onInput?.(syntheticEventInput);
          onChange?.(syntheticEventChange, { reason: 'suggestionSelect' });
        }

        setCurrentValue(input.value);
        setNeedMenu(false);
        setActiveIndex(-1);
      });
    },
    [onInput, onChange],
  );

  useIsomorphicLayoutEffect(() => {
    inputRef.current && setCurrentValue(inputRef.current.value);
  }, [value]);

  const onKeyDown = baseInputProps?.onKeyDown;
  const handleKeyDown = useCallback<KeyboardEventHandler<HTMLInputElement>>(
    event => {
      onKeyDown?.(event);

      switch (event.code) {
        case 'Escape': {
          setNeedMenu(false);
          break;
        }
        case 'Enter': {
          if (menuShown) {
            const item = items[activeIndex];
            item && selectItem(item);
            setNeedMenu(false);
          } else {
            setNeedMenu(true);
          }
          break;
        }
        case 'ArrowUp': {
          if (menuShown) {
            event.preventDefault();
            setActiveIndex(n => DropdownItemUtils.asLoopedIterator(items, n).prev() ?? -1);
          } else {
            setNeedMenu(true);
          }
          break;
        }
        case 'ArrowDown': {
          if (menuShown) {
            event.preventDefault();
            setActiveIndex(n => DropdownItemUtils.asLoopedIterator(items, n).next() ?? -1);
          } else {
            setNeedMenu(true);
          }
          break;
        }
      }
    },
    [menuShown, activeIndex, items, selectItem, onKeyDown],
  );

  // прокрутка до активного элемента списка
  useEffect(() => {
    const itemSelector = `[role="option"]`;
    const menu = viewportRef.current;
    const item = menu?.querySelectorAll(itemSelector)[activeIndex];

    if (menu && item instanceof HTMLElement) {
      scrollToChild(menu, item);
    }
  }, [activeIndex]);

  // скрытие меню при прокрутке колесом за пределами меню
  useEffect(() => {
    const menu = refs.floating.current;

    if (menu) {
      return on<WheelEvent>(window, 'wheel', event => {
        if (
          event.target instanceof HTMLElement &&
          menu !== event.target &&
          !menu.contains(event.target)
        ) {
          setNeedMenu(false);
        }
      });
    }
  }, [menuShown]);

  // предотвращение расфокусировки поля при клике внутри меню
  // необходимо чтобы можно было взяться мышкой за полосу прокрутки
  useEffect(() => {
    const menu = refs.floating.current;

    if (menu) {
      return on(menu, 'mousedown', event => {
        if (
          document.activeElement &&
          inputRef.current &&
          document.activeElement === inputRef.current
        ) {
          event.preventDefault();
        }
      });
    }
  }, [menuShown]);

  return (
    <>
      <Input
        {...restProps}
        {...{
          autoComplete,
          autoFocus,
          defaultValue,
          disabled,
          id,
          name,
          onInput,
          placeholder,
          readOnly,
          required,
          type,
          value,
        }}
        inputRef={inputRef}
        blockRef={refs.setReference}
        onFocus={e => {
          onFocus?.(e);
          setNeedMenu(true);
        }}
        onBlur={e => {
          onBlur?.(e);
          setNeedMenu(false);
          setActiveIndex(-1);
        }}
        onChange={e => {
          onChange?.(e, { reason: 'userInput' });
          setNeedMenu(true);
          setActiveIndex(-1);
          setCurrentValue(e.target.value);
        }}
        blockProps={{
          ...restProps.blockProps,
          onMouseDown: event => {
            !disabled && setNeedMenu(a => !a);
            restProps.blockProps?.onMouseDown?.(event);
          },
        }}
        baseInputProps={{
          ...baseInputProps,
          onKeyDown: handleKeyDown,
        }}
        adornmentEnd={
          typeof adornmentEnd === 'function' ? adornmentEnd({ menuShown }) : adornmentEnd
        }
      />

      <FloatingPortal id=''>
        {menuShown && (
          <Lifecycle onMount={onMenuOpen} onUnmount={onMenuClose}>
            <Dropdown
              {...dropdownProps}
              rootRef={refs.setFloating}
              viewportRef={viewportRef}
              style={{ ...floatingStyle, ...dropdownProps?.style }}
            >
              {!loading &&
                items.length > 0 &&
                items.map((item, index) => (
                  <DropdownItem
                    role='option'
                    key={index}
                    checked={index === activeIndex}
                    {...item.props}
                    onMouseDown={event => {
                      event.preventDefault();
                      item.props.onMouseDown?.(event);
                    }}
                    onClick={event => {
                      if (!item.props.disabled) {
                        item.props.onClick?.(event);
                        !event.defaultPrevented && selectItem(item);
                      }
                    }}
                  />
                ))}

              {!loading && items.length === 0 && optionsStub}

              {loading && <DropdownLoading />}
            </Dropdown>
          </Lifecycle>
        )}
      </FloatingPortal>
    </>
  );
}

/**
 * Фильтр вариантов выбора по умолчанию.
 * @param item Вариант из меню.
 * @param inputValue Текущее значение в поле.
 * @return Нужно ли выводить опцию.
 */
function defaultFilterOption(item: DropdownItemElement, inputValue: string) {
  return DropdownItemUtils.getValue(item).toLowerCase().includes(inputValue.toLowerCase());
}

/**
 * Возвращает стандартную стрелку для поля ввода с подсказками.
 * @param data Данные о состоянии поля.
 * @return Элемент.
 */
function getDefaultAdornmentEnd(data: { menuShown: boolean }) {
  const ArrowSVG = data.menuShown ? UpSVG : DownSVG;

  return <ArrowSVG className={styles.arrow} data-testid='autocomplete:arrow-up' />;
}
