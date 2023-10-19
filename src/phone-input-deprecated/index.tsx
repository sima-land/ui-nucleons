import {
  CSSProperties,
  ChangeEventHandler,
  useEffect,
  useRef,
  useState,
  FocusEvent as ReactFocusEvent,
} from 'react';
import DownSVG from '@sima-land/ui-quarks/icons/16x16/Stroked/Arrows/Down';
import UpSVG from '@sima-land/ui-quarks/icons/16x16/Stroked/Arrows/Up';
import { Dropdown } from '../dropdown';
import { DropdownItem } from '../dropdown-item';
import { TextField, TextFieldProps } from '../text-field';
import { MaskedField, MaskState } from '../masked-field';
import { useOutsideClick } from '../hooks';
import { IDS, countriesList, Country } from '../phone-input/presets';
import { defineCountry } from '../phone-input/utils';
import classnames from 'classnames/bind';
import styles from './phone-input.module.scss';

interface PhoneInputStyle extends CSSProperties {
  '--phone-input-width'?: number | string;
}

export interface PhoneInputProps
  extends Omit<TextFieldProps, 'onChange' | 'onBlur' | 'value' | 'ref' | 'style' | 'multiline'> {
  /** Сработает при "blur". */
  onBlur?: (e: ReactFocusEvent<HTMLInputElement>, s: MaskState & { ready?: boolean }) => void;

  /** Сработает при изменении поля "Другое". Не рекомендуется использовать. */
  onChange?: ChangeEventHandler<HTMLInputElement>;

  /** Срабатывает при изменении страны. */
  onCountrySelect?: (c: Country) => void;

  /** Значение. */
  value?: string;

  /** Стили. */
  style?: PhoneInputStyle;
}

const cx = classnames.bind(styles);

/**
 * Удаляет из значения код переданной страны.
 * @param value Значение.
 * @param country Данные страны.
 * @return Значение без кода.
 */
const formatValue = (value: string, country: Country): string =>
  value.replace(/\D/g, '').slice(country.codeChars.length);

/**
 * Компонент поля ввода номера телефона.
 * @param props Параметры компонента.
 * @deprecated Нужно использовать новую реализацию "@sima-land/ui-nucleons/phone-input".
 * @return Элемент.
 */
export const PhoneInput = ({
  'data-testid': testId,
  className,
  label = 'Телефон',
  onBlur,
  onCountrySelect,
  style,
  value = '',
  onChange,
  ...restProps
}: PhoneInputProps) => {
  // маску определяем автоматически только при старте
  const [country, setCountry] = useState(() => defineCountry(value));
  const [cleanValue, setCleanValue] = useState(() => formatValue(value, country));
  const [withMenu, toggleMenu] = useState<boolean>(false);
  const rootRef = useRef<HTMLDivElement>(null);
  const openerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setCleanValue(formatValue(value, country));
  }, [value]);

  useOutsideClick(rootRef, () => {
    toggleMenu(false);
  });

  const AdornmentSVG = withMenu ? UpSVG : DownSVG;

  const commonFieldProps: TextFieldProps = {
    ...restProps,
    label,
    multiline: false,
    className: cx('field'),
    endAdornment: (
      <div
        ref={openerRef}
        className={cx('adornment')}
        data-testid='phone-input:dropdown-opener'
        onClick={() => {
          toggleMenu(a => !a);
        }}
      >
        <img alt='' width={24} height={24} src={country.imageSrc} />
        <AdornmentSVG className={cx('arrow')} />
      </div>
    ),
    onClick: event => {
      const opener = openerRef.current;

      if (
        opener instanceof Node &&
        event.target instanceof Node &&
        (opener === event.target || opener.contains(event.target))
      ) {
        event.preventDefault(); // чтобы не фокусировалось на поле
      } else {
        toggleMenu(false);
      }
    },
  };

  return (
    <div ref={rootRef} data-testid={testId} style={style} className={cx('root', className)}>
      {country.id === IDS.other ? (
        <TextField
          {...commonFieldProps}
          value={cleanValue}
          onChange={(e: any) => {
            const nextValue = e.target.value.replace(/\D/g, '').slice(0, 20);

            e.target.value = nextValue;

            setCleanValue(nextValue);
            onChange && onChange(e);
          }}
          onBlur={e => {
            onBlur &&
              onBlur(e, {
                value: e.target.value,
                cleanValue: e.target.value,
                ready: e.target.value.length > 0,
              });
          }}
        />
      ) : (
        <MaskedField
          {...commonFieldProps}
          // убираем код страны, так как он уже зашит в маску
          value={cleanValue}
          mask={country.mask}
          onBlur={(event, state) => {
            onBlur &&
              onBlur(event, {
                ...state,

                // вставляем код страны обратно в чистое значение
                cleanValue: `${country.codeChars}${state.cleanValue}`,
              });
          }}
        />
      )}

      {withMenu && (
        <Dropdown role='menu' className={cx('menu')} data-testid='phone-input:dropdown'>
          {countriesList.map((item, index) =>
            item.id === country.id ? null : (
              <DropdownItem
                key={index}
                size='m'
                role='menuitem'
                className={cx('menu-item')}
                onClick={() => {
                  toggleMenu(false);
                  setCountry(item);
                  onCountrySelect && onCountrySelect(item);
                }}
                startContent={
                  <img
                    alt=''
                    width={24}
                    height={24}
                    src={item.imageSrc}
                    className={cx('country-icon')}
                  />
                }
                endContent={item.code}
              >
                {item.name}
              </DropdownItem>
            ),
          )}
        </Dropdown>
      )}
    </div>
  );
};
