import { useCallback, useContext, useImperativeHandle, useMemo, useRef, useState } from 'react';
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
export function PhoneInput({ value, defaultValue, ...props }: PhoneInputProps) {
  const stateless = useMemo(() => typeof value !== 'undefined', []);

  // ВАЖНО: при defaultValue состояние должно быть именно здесь (на уровень выше хука маски) для корректной работы
  const [currentValue, setCurrentValue] = useState(() => value ?? defaultValue ?? '');

  if (stateless) {
    return <StatelessPhoneInput {...props} value={value} />;
  }

  return (
    <StatelessPhoneInput
      {...props}
      value={currentValue}
      onChange={(event, data) => {
        setCurrentValue(data.cleanValue);
        props.onChange?.(event, data);
      }}
    />
  );
}
/**
 * Поле ввода номера телефона.
 * @param props Свойства.
 * @return Элемент.
 */
function StatelessPhoneInput({
  value = '',
  label = 'Телефон',
  inputRef: inputRefProp,
  blockRef: blockRefProp,
  onBlur,
  onChange,
  onInput,
  onFocus,
  onCountrySelect,
  dropdownProps,
  onMenuOpen,
  onMenuClose,
  disabled,
  'data-testid': testId = 'phone-input',
  ...props
}: Omit<PhoneInputProps, 'defaultValue'>) {
  const inputRef = useRef<HTMLInputElement>(null);

  // ВАЖНО: помещаем defaultValue в состояние и никогда не меняем тк нам не нужно следить за его обновлением
  // plainValue - значение без цифр, входящих в маску, мы оперируем им строго внутри компонента
  const [country, setCountry] = useState<Country>(() => defineCountry(value));
  const [plainValue, setPlainValue] = useState<string>(() => PhoneValue.removeCode(value, country));

  useIsomorphicLayoutEffect(() => {
    setPlainValue(PhoneValue.removeCode(value, country));
  }, [value]);

  useImperativeHandle<HTMLInputElement | null, HTMLInputElement | null>(
    inputRefProp,
    () => inputRef.current,
  );

  const blockRef = useRef<HTMLDivElement>(null);
  useImperativeHandle<HTMLDivElement | null, HTMLDivElement | null>(
    blockRefProp,
    () => blockRef.current,
  );

  const dispatchCountrySelect = useCallback(
    (selected: Country, input: HTMLInputElement) => {
      const nativeEvent = new Event('input');
      const syntheticEvent = stubSyntheticEvent(input, nativeEvent);

      onInput?.(syntheticEvent, {
        value: input.value,
        cleanValue: PhoneValue.addCode(plainValue, selected),
        completed: false,
      });
      onChange?.(syntheticEvent, {
        value: input.value,
        cleanValue: PhoneValue.addCode(plainValue, selected),
        completed: false,
      });

      onCountrySelect?.(selected);
    },
    [onChange, onInput, onCountrySelect, plainValue],
  );

  const getMaskData = useCallback(
    (data: MaskData): MaskData => ({
      ...data,
      completed: data.completed || country.id === IDS.other,
      cleanValue: PhoneValue.addCode(data.cleanValue, country),
    }),
    [country],
  );

  const isInitialCountryRef = useRef(true);

  useIsomorphicLayoutEffect(() => {
    if (!isInitialCountryRef.current && inputRef.current) {
      dispatchCountrySelect(country, inputRef.current);
    }

    isInitialCountryRef.current = false;
  }, [country]);

  const selectCountry = useCallback((selected: Country) => {
    setCountry(selected);
    setPlainValue('');
  }, []);

  return (
    <Select
      opener={
        <PhoneMaskedInput
          {...props}
          disabled={disabled}
          data-testid={testId}
          country={country}
          inputRef={inputRef}
          blockRef={blockRef}
          label={label}
          mask={country.mask}
          onFocus={(event, data) => {
            onFocus?.(event, getMaskData(data));
          }}
          onChange={(event, data) => {
            setPlainValue(data.cleanValue);
            onChange?.(event, getMaskData(data));
          }}
          onInput={(event, data) => {
            setPlainValue(data.cleanValue);
            onInput?.(event, getMaskData(data));
          }}
          onBlur={(event, data) => {
            onBlur?.(event, getMaskData(data));
          }}
          value={plainValue}
        />
      }
      onValueChange={itemValue => {
        const found = countriesList.find(item => item.id === itemValue);

        // @todo добавить проверку на разницу текущей и выбранной страны и переименовать onCountrySelect в onCountryChange?
        found && selectCountry(found);
      }}
      dropdownProps={dropdownProps}
      onMenuOpen={onMenuOpen}
      onMenuClose={onMenuClose}
      disabled={disabled}
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
          startContent={
            <img alt='' width={24} height={24} src={item.imageSrc} className={cx('item-icon')} />
          }
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
  disabled,
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
      disabled={disabled}
      adornmentEnd={
        <div
          ref={select.openerRef as any}
          onBlur={() => setOpenerFocused(false)}
          onFocus={() => setOpenerFocused(true)}
          role='combobox'
          aria-label='Выбор страны'
          aria-disabled={disabled}
          className={cx('opener', { disabled })}
          data-testid='phone-input:menu-opener'
          {...(!disabled && {
            tabIndex: 0,
            onKeyDown: select.onKeyDown,
            onMouseDown: select.onMouseDown,
          })}
        >
          <img alt='' width={24} height={24} src={country.imageSrc} />
          <ArrowSVG className={styles.arrow} />
        </div>
      }
    />
  );
}
