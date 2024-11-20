import { ReactNode, useContext, useEffect, useRef, useState } from 'react';
import styles from './accordion.m.scss';
import ArrowExpandDownSVG from '@sima-land/ui-quarks/icons/16x16/Stroked/ArrowExpandDown';
import classnames from 'classnames/bind';
import { AccordionContext } from './accordion-provider';
import { ResizeObserverContext } from '../context';

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
  name = `test[${Date.now()}:${Math.random().toString(16).slice(2)}]`,
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
  const { createResizeObserver } = useContext(ResizeObserverContext);
  const { selectOpenedId, register, unregister, toggle } = useContext(AccordionContext);
  const [id, setId] = useState<symbol>(Symbol());
  const expanded = selectOpenedId(name) === id;
  const [contentHeight, setContentHeight] = useState(container.current?.scrollHeight || 0)

  useEffect(() => {
    setId(register(name, open))
    return () => unregister(name, id)
  }, []);

  useEffect(() => {
    const observer = createResizeObserver(() => {
      setContentHeight(container.current?.scrollHeight || 0)
    })
    container.current && observer.observe(container.current);
    return () => observer.disconnect();
  },[container.current, createResizeObserver])

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
        role='region'
        ref={container}
        style={{
          maxHeight: expanded ? contentHeight : 0,
        }}
      >
        {children}
        {description && <span className={styles.description} children={description} />}
      </div>
    </div>
  );
};
