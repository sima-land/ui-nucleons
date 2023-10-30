import { useCallback, useContext, useImperativeHandle, useRef, useState } from 'react';
import { PhoneInputProps } from './types';
import { DropdownItem } from '../dropdown-item';
import { useIsomorphicLayoutEffect } from '../hooks';
import { MaskData, MaskedInput, MaskedInputProps } from '../masked-input';
import { countriesList, Country, IDS } from './presets';
import { defineCountry, PhoneValue, stubSyntheticEvent } from './utils';
import { Select } from '../select';
import { SelectContext } from '../select/utils';
import UpSVG from '@sima-land/ui-quarks/icons/16x16/Stroked/Arrows/Up';
import DownSVG from '@sima-land/ui-quarks/icons/16x16/Stroked/Arrows/Down';
import classNames from 'classnames/bind';
import styles from './phone-input.module.scss';

const cx = classNames.bind(styles);

/**
 * Поле ввода номера телефона.
 * @param props Свойства.
 * @return Элемент.
 */
export function PhoneInput({
  value,
  defaultValue,
  label = 'Телефон',
  inputRef: inputRefProp,
  blockRef: blockRefProp,
  onBlur,
  onChange,
  onFocus,
  onCountrySelect,
  'data-testid': testId = 'phone-input',
  dropdownProps,
  onMenuOpen,
  onMenuClose,
  ...props
}: PhoneInputProps) {
  const firstRenderRef = useRef(true);

  const [initialValue] = useState<string>(value ?? defaultValue ?? '');
  const [country, setCountry] = useState<Country>(() => defineCountry(initialValue));
  const [cleanValue, setCleanValue] = useState<string>(() =>
    PhoneValue.removeCode(initialValue, country),
  );

  const inputRef = useRef<HTMLInputElement>(null);
  useImperativeHandle<HTMLInputElement | null, HTMLInputElement | null>(
    inputRefProp,
    () => inputRef.current,
  );

  const blockRef = useRef<HTMLDivElement>(null);
  useImperativeHandle<HTMLDivElement | null, HTMLDivElement | null>(
    blockRefProp,
    () => blockRef.current,
  );

  useIsomorphicLayoutEffect(() => {
    if (typeof value !== 'undefined') {
      setCleanValue(PhoneValue.removeCode(value, country));
    }
  }, [value]);

  const dispatchCountryChange = useCallback(
    (input: HTMLInputElement) => {
      const nativeEvent = new Event('input');
      const syntheticEvent = stubSyntheticEvent(input, nativeEvent);

      // @todo перенести вызов onChange в callback onValueChange если будет необходим preventDefault() и тд
      onChange?.(syntheticEvent, {
        value: input.value,
        cleanValue: PhoneValue.addCode('', country),
        completed: false,
      });

      onCountrySelect?.(country);
    },
    [onChange, onCountrySelect, country],
  );

  useIsomorphicLayoutEffect(() => {
    if (!firstRenderRef.current) {
      inputRef.current && dispatchCountryChange(inputRef.current);
    }
  }, [country]);

  useIsomorphicLayoutEffect(() => {
    firstRenderRef.current = false;
  }, []);

  const processData = useCallback(
    (data: MaskData): MaskData => ({
      ...data,
      completed: data.completed || country.id === IDS.other,
      cleanValue: PhoneValue.addCode(data.cleanValue, country),
    }),
    [country],
  );

  const changeCountry = useCallback((selected: Country) => {
    setCountry(selected);
    setCleanValue('');
  }, []);

  return (
    <Select
      opener={
        <PhoneMaskedInput
          {...props}
          data-testid={testId}
          country={country}
          inputRef={inputRef}
          blockRef={blockRef}
          label={label}
          mask={country.mask}
          onFocus={(event, data) => {
            onFocus?.(event, processData(data));
          }}
          onChange={(event, data) => {
            onChange?.(event, processData(data));
          }}
          onBlur={(event, data) => {
            onBlur?.(event, processData(data));
          }}
          value={cleanValue}
        />
      }
      onValueChange={itemValue => {
        const item = countriesList.find(c => c.id === itemValue);
        item && changeCountry(item);
      }}
      dropdownProps={dropdownProps}
      onMenuOpen={onMenuOpen}
      onMenuClose={onMenuClose}
    >
      {countriesList.map((item, index) => (
        <DropdownItem
          value={item.id}
          key={index}
          size='m'
          role='menuitem'
          onMouseDown={event => {
            // ВАЖНО: клик по блоку поля вызывает фокус на поле и preventDefault()
            // отменяем с помощью другого preventDefault()
            event.preventDefault();
          }}
          selected={item.id === country.id}
          startContent={<img alt='' width={24} height={24} src={item.imageSrc} />}
          endContent={item.code}
        >
          {item.name}
        </DropdownItem>
      ))}
    </Select>
  );
}

/**
 * Внутренний компонент, необходим для использования контекста SelectContext.
 * @param props Свойства.
 * @return Элемент.
 */
function PhoneMaskedInput({
  country,
  blockRef: blockRefProp,
  ...props
}: MaskedInputProps & { country: Country }) {
  const select = useContext(SelectContext);
  const blockRef = useRef<HTMLDivElement>(null);
  const [openerFocused, setOpenerFocused] = useState(false);

  useImperativeHandle<HTMLDivElement | null, HTMLDivElement | null>(
    blockRefProp,
    () => blockRef.current,
  );
  useImperativeHandle<HTMLElement | null, HTMLDivElement | null>(
    select.anchorRef,
    () => blockRef.current,
  );

  const ArrowSVG = select.opened ? UpSVG : DownSVG;

  return (
    <MaskedInput
      {...props}
      // ВАЖНО: undefined нужен для поведения по умолчанию если меню скрыто и кнопка не в фокусе
      focused={select.opened || openerFocused || undefined}
      blockRef={blockRef}
      baseInputProps={{
        restPlaceholder: country.id === IDS.other ? '' : undefined,
        ...props.baseInputProps,
      }}
      adornmentEnd={
        <div
          ref={select.openerRef as any}
          tabIndex={0}
          onFocus={() => setOpenerFocused(true)}
          onBlur={() => setOpenerFocused(false)}
          role='combobox'
          aria-label='Выбор страны'
          className={cx('opener')}
          data-testid='phone-input:menu-opener'
          onKeyDown={select.onKeyDown}
          onMouseDown={select.onMouseDown}
        >
          <img alt='' width={24} height={24} src={country.imageSrc} />
          <ArrowSVG className={styles.arrow} />
        </div>
      }
    />
  );
}
