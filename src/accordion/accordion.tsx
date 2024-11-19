import { ReactNode, useContext, useEffect, useRef, useState } from 'react';
import styles from './accordion.m.scss';
import ArrowExpandDownSVG from '@sima-land/ui-quarks/icons/16x16/Stroked/ArrowExpandDown';
import classnames from 'classnames/bind';
import { AccordionContext } from './accordion-provider';

const cx = classnames.bind(styles);

export interface Props {
  /** Заголовок блока аккордеона.  */
  summary: string;
  /** Тема оформления. */
  theme?: 'light' | 'dark' | 'unset';
  /** Описание. */
  description?: string;
  /** Название группы аккордеона. */
  name: string;
  /** Первоначальное значение состояния открытия. */
  open?: boolean;
  /** Контент аккордеона при открытии. */
  children?: ReactNode;
  /** Внешний стиль компонента. */
  className?: string;
  /** Уровень заголовков. */
  level?: 1 | 2 | 3 | 4 | 5 | 6;
  /** Обработчик переключения состояния аккордеона. */
  onToggle?: (open: boolean) => void;
}

/**
 * Аккордеон.
 * @param props Пропсы компонента.
 * @return Элемент.
 */
export const Accordion = ({
  name,
  summary,
  description,
  theme = 'light',
  open,
  onToggle,
  className,
  children,
  level = 4,
}: Props) => {
  const container = useRef<HTMLDivElement>(null);
  const { selectOpenedId, register, unregister, toggle } = useContext(AccordionContext);
  const [id] = useState<symbol>(() => register(name, open));
  const expanded = selectOpenedId(name) === id;
  const contentHeight = container.current?.scrollHeight || 0;

  useEffect(() => () => unregister(name, id), []);

  return (
    <div
      className={cx(
        'root',
        {
          expanded,
          'theme-dark': theme === 'dark',
          'theme-light': theme === 'light',
        },
        className,
      )}
    >
      <button
        type='button'
        aria-expanded={expanded}
        aria-controls={`section-${name}`}
        id={`accordion-${name}`}
        onClick={() => {
          toggle(name, id);
          onToggle?.(!expanded);
        }}
        tabIndex={0}
        className={styles.header}
      >
        <span role='heading' aria-level={level} className={styles.title} children={summary} />
        <ArrowExpandDownSVG className={styles.arrow} />
      </button>
      <div
        className={styles.content}
        id={`section-${name}`}
        role='region'
        ref={container}
        style={{
          height: expanded ? contentHeight : undefined,
        }}
        aria-labelledby={`accordion-${name}`}
      >
        {children}
        {description && <span className={styles.description} children={description} />}
      </div>
    </div>
  );
};
