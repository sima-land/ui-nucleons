import { CSSProperties, ReactNode, useEffect, useMemo, useState } from 'react';
import { loremIpsum } from 'lorem-ipsum';
import {
  PageScrollLockAdapterFactory,
  PageScrollLockContext,
  PageScrollLockAdapterBSL,
  PageScrollLockAdapterNucleons,
} from '../src/_internal/page-scroll-lock';
import { Select } from '../src/select';
import { DropdownItem } from '../src/dropdown-item';
import styles from './utils.module.scss';

interface ControlSelect {
  type: 'select';
  hidden?: boolean;
  label: string;
  options: Array<string | { value: string; displayName?: string }>;
  bind: [string, (nextValue: any) => void];
}

interface ControlToggle {
  type: 'toggle';
  hidden?: boolean;
  label: string;
  bind: [boolean, (nextValue: any) => void];
}

/**
 * Визуальная песочница с возможностью размещения полей ввода для управления состоянием.
 * @param props Свойства.
 * @return Элемент.
 */
export function Sandbox({
  controls = [],
  children,
  areaStyle,
}: {
  children?: ReactNode;
  controls?: Array<ControlToggle | ControlSelect>;
  areaStyle?: CSSProperties;
}) {
  return (
    <div className={styles.sandbox}>
      <div className={styles.controls}>
        {controls
          .filter(c => !c.hidden)
          .map((control, index) => {
            switch (control.type) {
              case 'select':
                return <SandboxSelect key={index} {...control} />;
              case 'toggle':
                return <SandboxToggle key={index} {...control} />;
              default:
                return null;
            }
          })}
      </div>
      <div className={styles.area} style={areaStyle}>
        {children}
      </div>
    </div>
  );
}

/**
 * Выбор из списка.
 * @param props Свойства.
 * @return Элемент.
 */
function SandboxSelect({ label, options, bind: [value, onChange] }: ControlSelect) {
  const [id] = useState(`control-${Math.random().toString(16).slice(2)}`);

  return (
    <div className={styles.select}>
      <SandboxControlLabel htmlFor={id}>{label}</SandboxControlLabel>
      <div>
        <select
          className={styles.field}
          id={id}
          value={value}
          onChange={e => onChange?.(e.target.value as any)}
        >
          {options.map((option, i) => (
            <option key={i} value={typeof option === 'string' ? option : option.value}>
              {typeof option === 'string' ? option : option.displayName ?? option.value}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}

/**
 * Переключатель.
 * @param props Свойства.
 * @return Элемент.
 */
function SandboxToggle({ label, bind: [value, onChange] }: ControlToggle) {
  const [id] = useState(`control-${Math.random().toString(16).slice(2)}`);

  return (
    <div className={styles.toggle}>
      <input
        className={styles.field}
        id={id}
        type='checkbox'
        checked={value}
        onChange={e => onChange?.(e.target.checked)}
      />
      <SandboxControlLabel htmlFor={id}>{label}</SandboxControlLabel>
    </div>
  );
}

/**
 * Ярлык.
 * @param props Свойства.
 * @return Элемент.
 */
function SandboxControlLabel({ htmlFor, children }: { htmlFor: string; children?: ReactNode }) {
  return (
    <label htmlFor={htmlFor} className={styles.label}>
      {children}
    </label>
  );
}

/**
 * Вернет генератор псевдослучайных чисел.
 * @param seed Зерно.
 * @return Генератор.
 */
const createRandomGenerator = (seed: number) => {
  let currentSeed = seed;

  return (): number => {
    const newSeed = (currentSeed * 9301 + 49297) % 233280;
    const random = newSeed / 233280;

    currentSeed = newSeed;

    return random;
  };
};

/**
 * Выводит текст-рыбу.
 * @param props Свойства.
 * @return Элемент.
 */
export function LoremIpsum({
  paragraphCount = 1,
  sentenceCount = 20,
}: {
  paragraphCount?: number;
  sentenceCount?: number;
}) {
  const random = createRandomGenerator(1337);
  // eslint-disable-next-line require-jsdoc, jsdoc/require-jsdoc
  const generate = () =>
    Array(paragraphCount)
      .fill(0)
      .map(() =>
        loremIpsum({
          format: 'plain',
          sentenceLowerBound: sentenceCount,
          sentenceUpperBound: sentenceCount,
          random,
        }),
      );

  const content = useMemo(generate, [paragraphCount, sentenceCount]);

  return (
    <>
      {content.map((item, index) => (
        <p key={index}>{item}</p>
      ))}
    </>
  );
}

/**
 * Тестовая страница большой высоты для проверки блокировки прокрутки.
 * @param props Свойства.
 * @return Элемент.
 */
export function PageScrollLockDemo({ children }: { children?: ReactNode }) {
  const adapterNames = ['body-scroll-lock', 'ui-nucleons'] as const;
  const [adapterName, setAdapterName] = useState<(typeof adapterNames)[number]>('body-scroll-lock');

  let adapter: PageScrollLockAdapterFactory;

  switch (adapterName) {
    case 'ui-nucleons':
      adapter = (_, options) => new PageScrollLockAdapterNucleons(options);
      break;
    case 'body-scroll-lock':
    default:
      adapter = (element, options) => new PageScrollLockAdapterBSL(element, options);
      break;
  }

  return (
    <PageScrollLockContext.Provider value={{ adapter }}>
      <h1>Пример страницы</h1>

      <p>Это тестовая страница для проверки блокировки прокрутки с разными реализациями.</p>

      <Select
        opener={<Select.FieldBlock size='l' label='Реализация' />}
        value={adapterName}
        onValueChange={value => {
          adapterNames.includes(value as any) && setAdapterName(value as any);
        }}
      >
        {adapterNames.map((name, index) => (
          <DropdownItem key={index} value={name}>
            {name}
          </DropdownItem>
        ))}
      </Select>

      <div style={{ marginTop: '20px' }}>{children}</div>

      <LoremIpsum paragraphCount={50} sentenceCount={50} />
    </PageScrollLockContext.Provider>
  );
}

/** Прокручивает страницу по вертикали до центра. */
export function usePageCentered() {
  useEffect(() => {
    const body = document.body;
    const html = document.documentElement;

    const pageHeight = Math.max(
      body.scrollHeight,
      body.offsetHeight,
      html.clientHeight,
      html.scrollHeight,
      html.offsetHeight,
    );

    window.scroll({ top: (pageHeight - window.innerHeight) / 2 });
  }, []);
}

/**
 * Тестовая страница с центрирование контента.
 * @param props Свойства.
 * @return Элемент.
 */
export function LargePage({ children }: { children?: ReactNode }) {
  const style: CSSProperties = {
    height: '300vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  };

  usePageCentered();

  return <div style={style}>{children}</div>;
}
