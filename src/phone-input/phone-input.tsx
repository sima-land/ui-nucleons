import { useState, useCallback, useRef, useContext, useMemo, useImperativeHandle } from 'react';
import { type PhoneInputProps, type PhoneInputMask } from './types';
import { type MaskData, type MaskedInputProps, MaskedInput } from '../masked-input';
import { masks as defaultMasks, stubMask } from './preset/defaults';
import { PhoneValue, defaultGetDefaultMask, stubSyntheticEvent } from './utils';
import { Select } from '../select';
import { DropdownItem } from '../dropdown-item';
import { SelectContext } from '../select/utils';
import { PhoneInputMenuOpener } from './menu-opener';
import { useIsomorphicLayoutEffect } from '../hooks';
import { mergeRefs } from '../helpers';
import classNames from 'classnames/bind';
import styles from './phone-input.m.scss';

const cx = classNames.bind(styles);

/**
 * Поле ввода номера телефона.
 * @param props Свойства.
 * @return Элемент.
 */
export function PhoneInput({
  value,
  defaultValue,
  onInput,
  onChange,
  ...restProps
}: PhoneInputProps) {
  const initialValueRef = useRef(value);
  const stateless = useMemo(() => typeof initialValueRef.current !== 'undefined', []);

  // ВАЖНО: при defaultValue состояние должно быть именно здесь (на уровень выше хука маски) для корректной работы
  const [currentValue, setCurrentValue] = useState<string>(() => value ?? defaultValue ?? '');

  if (stateless) {
    return (
      <StatelessPhoneInput
        {...restProps}
        value={value ?? ''}
        onChange={onChange}
        onInput={onInput}
      />
    );
  }

  return (
    <StatelessPhoneInput
      {...restProps}
      value={currentValue}
      onInput={(event, maskData) => {
        setCurrentValue(maskData.cleanValue);
        onInput?.(event, maskData);
      }}
      onChange={(event, maskData) => {
        setCurrentValue(maskData.cleanValue);
        onChange?.(event, maskData);
      }}
    />
  );
}

/**
 * Поле ввода номера телефона.
 * Не имеет собственного состояния введенного значения.
 * @param props Свойства.
 * @return Элемент.
 */
function StatelessPhoneInput({
  masks = defaultMasks,
  getDefaultMask = defaultGetDefaultMask,
  value,
  label = 'Телефон',
  inputRef: inputRefProp,
  onInput,
  onChange,
  onFocus,
  onBlur,
  onCountrySelect,
  disabled,
  dropdownProps,
  onMenuOpen,
  onMenuClose,
  'data-testid': testId = 'phone-input',
  ...restProps
}: Omit<PhoneInputProps, 'value' | 'defaultValue'> & { value: string }) {
  const inputRef = useRef<HTMLInputElement>(null);
  const wasMaskChosenRef = useRef<boolean>(false);

  const [mask, setMask] = useState<PhoneInputMask>(
    () => getDefaultMask({ value, masks }) ?? masks[0] ?? stubMask,
  );
  const [plainValue, setPlainValue] = useState(() => PhoneValue.removeCode(value, mask));

  const getPhoneMaskData = useCallback(
    (maskData: MaskData): MaskData => ({
      ...maskData,
      completed: maskData.completed,
      cleanValue: PhoneValue.addCode(maskData.cleanValue, mask),
    }),
    [mask],
  );

  const handleMaskSelect = useCallback(
    (nextMask: PhoneInputMask) => {
      setMask(nextMask);
      setPlainValue('');
      wasMaskChosenRef.current = true;
    },
    [masks],
  );

  useImperativeHandle<HTMLInputElement | null, HTMLInputElement | null>(
    inputRefProp,
    () => inputRef.current,
  );

  // после каждого рендера синхронизируем value и plainValue
  // ВАЖНО: это нужно чтобы всегда выводить переданное значение value
  useIsomorphicLayoutEffect(() => {
    setPlainValue(PhoneValue.removeCode(value, mask));
  });

  // если была выбрана маска из меню - вызываем onInput, onChange, onCountrySelect
  // ВАЖНО: это делается именно в эффекте чтобы в event.target.value, data.value и data.cleanValue были верные значения
  useIsomorphicLayoutEffect(() => {
    const input = inputRef.current;

    if (!input || !wasMaskChosenRef.current) {
      return;
    }

    wasMaskChosenRef.current = false;

    const syntheticEvent = stubSyntheticEvent(input, new Event('input'));

    const maskData: MaskData = {
      value: input.value,
      cleanValue: PhoneValue.addCode(plainValue, mask),
      completed: false,
    };

    onInput?.(syntheticEvent, maskData);
    onChange?.(syntheticEvent, maskData);
    onCountrySelect?.(mask);
  }, [mask, plainValue, onInput, onChange, onCountrySelect]);

  return (
    <Select
      opener={
        <PhoneMaskedInput
          {...restProps}
          inputRef={inputRef}
          label={label}
          disabled={disabled}
          data-testid={testId}
          withMenuOpener={masks.length > 1}
          currentMaskData={mask}
          mask={mask.mask}
          value={plainValue}
          baseInputProps={{
            restPlaceholder: (mask.needRestPlaceholder ?? true) ? undefined : '',
            ...restProps.baseInputProps,
          }}
          onFocus={(event, maskData) => {
            onFocus?.(event, getPhoneMaskData(maskData));
          }}
          onInput={(event, maskData) => {
            setPlainValue(maskData.cleanValue);
            onInput?.(event, getPhoneMaskData(maskData));
          }}
          onChange={(event, maskData) => {
            setPlainValue(maskData.cleanValue);
            onChange?.(event, getPhoneMaskData(maskData));
          }}
          onBlur={(event, maskData) => {
            onBlur?.(event, getPhoneMaskData(maskData));
          }}
        />
      }
      onValueChange={maskId => {
        const foundMask = masks.find(item => item.id === maskId);
        foundMask && handleMaskSelect(foundMask);
      }}
      dropdownProps={dropdownProps}
      onMenuOpen={onMenuOpen}
      onMenuClose={onMenuClose}
      disabled={disabled}
    >
      {masks.map(item => (
        <DropdownItem
          key={item.id}
          value={item.id}
          size='m'
          selected={item.id === mask.id}
          startContent={
            <img
              alt=''
              width={24}
              height={24}
              src={item.optionImageSrc}
              className={cx('option-icon')}
            />
          }
          endContent={item.optionEndContent}
        >
          {item.title}
        </DropdownItem>
      ))}
    </Select>
  );
}

/**
 * Блок поля ввода телефона.
 * Этот компонент необходим для использования контекста SelectContext.
 * @param props Свойства.
 * @return Элемент.
 */
function PhoneMaskedInput({
  blockRef,
  withMenuOpener,
  currentMaskData,
  disabled,
  ...restProps
}: MaskedInputProps & {
  withMenuOpener: boolean;
  currentMaskData: PhoneInputMask;
}) {
  const { menuOpen, setMenuOpen, setOpenerElement, setAnchorElement } = useContext(SelectContext);

  const [openerFocused, setOpenerFocused] = useState(false);

  const blockMergedRef = useMemo(
    () => mergeRefs([blockRef, setAnchorElement]),
    [blockRef, setAnchorElement],
  );

  return (
    <MaskedInput
      {...restProps}
      // ВАЖНО: undefined нужен для поведения по умолчанию если меню скрыто и кнопка не в фокусе
      focused={menuOpen || openerFocused || undefined}
      blockRef={blockMergedRef}
      disabled={disabled}
      adornmentEnd={
        withMenuOpener && (
          <PhoneInputMenuOpener
            className={cx('opener')}
            rootRef={setOpenerElement}
            imageSrc={currentMaskData.optionImageSrc}
            visuallyOpen={menuOpen}
            visuallyDisabled={disabled}
            role='combobox'
            aria-label='Выбор страны'
            aria-disabled={disabled}
            onBlur={() => setOpenerFocused(false)}
            onFocus={() => setOpenerFocused(true)}
            tabIndex={disabled ? undefined : 0}
            onMouseDown={event => {
              if (disabled || event.defaultPrevented) {
                return;
              }

              setMenuOpen(a => !a);
            }}
            onKeyDown={event => {
              if (disabled || event.defaultPrevented) {
                return;
              }

              switch (event.code) {
                case 'Enter':
                case 'ArrowUp':
                case 'ArrowDown':
                  setMenuOpen(true);
                  break;
              }
            }}
          />
        )
      }
    />
  );
}
