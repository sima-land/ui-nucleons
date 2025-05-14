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
import { AutocompleteMenu } from './menu';
import { DropdownLoading, dropdownFloatingConfig, useDropdownFloatingStyle } from '../dropdown';
import { DropdownItem } from '../dropdown-item';
import { DropdownItemElement } from '../dropdown-item/types';
import { DropdownItemUtils } from '../dropdown-item/utils';
import { useFloating, size, Elements } from '@floating-ui/react';
import { Input } from '../input';
import { useIsomorphicLayoutEffect } from '../hooks';
import { scrollToChild } from '../helpers/scroll-to-child';
import { Lifecycle } from '../_internal/lifecycle';
import { NaiveSyntheticEvent, when } from './utils';
import { Portal } from '../portal';
import DownSVG from '@sima-land/ui-quarks/icons/16x16/Stroked/ArrowExpandDown';
import UpSVG from '@sima-land/ui-quarks/icons/16x16/Stroked/ArrowExpandUp';
import classNames from 'classnames/bind';
import styles from './autocomplete.m.scss';

const cx = classNames.bind(styles);

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
  const [currentValue, setCurrentValue] = useState<string>(() => `${value ?? defaultValue ?? ''}`);

  const [activeIndex, setActiveIndex] = useState<number>(-1);

  const items = Children.toArray(children).filter(
    (item): item is DropdownItemElement =>
      DropdownItemUtils.is(item) && filterOption(item, currentValue),
  );
  const { floatingStyle, refs } = useFloatingStyle(needMenu, items.length);

  const hasItems = items.length > 0;
  const hasItemsStub = Boolean(optionsStub);
  const hasValue = currentValue.length > 0;
  const hasMenuContent = hasItems || (hasValue && (loading || hasItemsStub));
  const menuShown = !disabled && needMenu && hasMenuContent;

  useImperativeHandle(restProps?.inputRef, () => inputRef.current as HTMLInputElement);
  useImperativeHandle(baseInputProps?.inputRef, () => inputRef.current as HTMLInputElement);

  const selectItem = useCallback(
    (item: DropdownItemElement, selectedIndex: number) => {
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
          onChange?.(syntheticEventChange, { reason: 'suggestionSelect', selectedIndex });
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
            item && selectItem(item, activeIndex);
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

      {menuShown && (
        <Portal>
          <Lifecycle onMount={onMenuOpen} onUnmount={onMenuClose}>
            <AutocompleteMenu
              {...dropdownProps}
              className={cx('menu', Boolean(currentValue) && 'selected', dropdownProps?.className)}
              rootRef={refs.setFloating}
              viewportRef={viewportRef}
              style={{ ...floatingStyle, ...dropdownProps?.style }}
              onDismiss={() => setNeedMenu(false)}
              onMouseDown={event => {
                // предотвращение расфокусировки поля при клике внутри меню
                // необходимо чтобы можно было взяться мышкой за полосу прокрутки
                if (
                  document.activeElement &&
                  inputRef.current &&
                  document.activeElement === inputRef.current
                ) {
                  event.preventDefault();
                }
              }}
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
                        !event.defaultPrevented && selectItem(item, index);
                      }
                    }}
                  />
                ))}

              {!loading && items.length === 0 && optionsStub}

              {loading && <DropdownLoading />}
            </AutocompleteMenu>
          </Lifecycle>
        </Portal>
      )}
    </>
  );
}

/**
 * Формирует стили и создаёт ref-ы для меню.
 * @param open Нужно ли выводить меню.
 * @param itemsCount Количество элементов в выпадающем списке.
 * @return Объект со стилями и ref-ами необходимыми для выпадающего меню.
 */
function useFloatingStyle(open: boolean, itemsCount: number) {
  const floatingConfig = dropdownFloatingConfig();
  const { refs, ...floating } = useFloating({
    open,
    ...floatingConfig,
    middleware: [...floatingConfig.middleware, size(getFloatingSizeOptions, [itemsCount])],
  });

  return { refs, floatingStyle: useDropdownFloatingStyle({ refs, ...floating }) };
}

/**
 * Функция для формирования настроек middleware size библиотеки floating-ui.
 * @return Настройки middleware size библиотеки floating-ui.
 */
const getFloatingSizeOptions = () => ({
  rootBoundary: 'viewport' as const,
  apply: setDropdownHeight,
  padding: 16,
});

/**
 * Функция для расчёта высоты выпадающего списка и применения вычисленного значения к элементу.
 * @param input Входящие параметры floating-ui для расчёта.
 */
export function setDropdownHeight({
  availableHeight,
  elements,
}: {
  elements: Elements;
  availableHeight: number;
}) {
  elements.floating.style.height = 'auto';
  if (elements.floating.scrollHeight >= availableHeight) {
    elements.floating.style.height = `${availableHeight}px`;
  }
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

  return <ArrowSVG className={cx('arrow')} data-testid='autocomplete:arrow-up' />;
}
