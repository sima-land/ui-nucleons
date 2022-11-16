import { upperFirst } from 'lodash';
import React, { CSSProperties, ReactNode, useState } from 'react';
import styles from './utils.module.scss';
import { loremIpsum } from 'lorem-ipsum';

type SizeParam = number | [number, number];
type OptionsParam = { w?: number; h?: number; id?: number };

/**
 * Возвращает ссылку на картинку по заданным параметрам.
 * На данный момент за основу взят https://loremflickr.com/.
 * @param params Параметры картинки.
 * @return URL.
 */
export function someImageUrl(params: SizeParam | OptionsParam): string {
  let w: number;
  let h: number;
  let id: number;

  if (typeof params === 'number') {
    w = params;
    h = w;
    id = 1;
  } else if (Array.isArray(params)) {
    w = params[0];
    h = params[1];
    id = 1;
  } else {
    w = params.w || 100;
    h = params.h || w;
    id = typeof params.id === 'number' ? params.id : 1;
  }

  return `https://loremflickr.com/${w}/${h}/architecture?lock=${id}`;
}

interface ControlSelect {
  type: 'select';
  hidden?: boolean;
  label: string;
  options: Array<string>;
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
      <ControlLabel htmlFor={id}>{label}</ControlLabel>
      <div>
        <select
          className={styles.field}
          id={id}
          value={value}
          onChange={e => onChange?.(e.target.value as any)}
        >
          {options.map((option, i) => (
            <option key={i} value={option}>
              {upperFirst(option)}
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
      <ControlLabel htmlFor={id}>{label}</ControlLabel>
    </div>
  );
}

/**
 * Ярлык.
 * @param props Свойства.
 * @return Элемент.
 */
function ControlLabel({ htmlFor, children }: { htmlFor: string; children?: ReactNode }) {
  return (
    <label htmlFor={htmlFor} className={styles.label}>
      {children}
    </label>
  );
}

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
  const [result] = useState<string[]>(() =>
    Array(paragraphCount)
      .fill(0)
      .map(() =>
        loremIpsum({
          format: 'plain',
          sentenceLowerBound: sentenceCount,
          sentenceUpperBound: sentenceCount,
        }),
      ),
  );

  return (
    <>
      {result.map((content, index) => (
        <p key={index}>{content}</p>
      ))}
    </>
  );
}
