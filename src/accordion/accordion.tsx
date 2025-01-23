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
  theme?: 'light' | 'dark';
  /** Описание. */
  description?: string;
  /** Название группы аккордеона. */
  name?: string;
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
  theme = 'light',
  open = false,
  name,
  summary,
  description,
  onToggle,
  className,
  children,
  level = 4,
}: Props) => {
  const container = useRef<HTMLDivElement>(null);
  const { register, unregister, closeGroup } = useContext(AccordionContext);
  const [expanded, setExpand] = useState(open);

  useEffect(() => {
    if (name) {
      const id = register(name, setExpand);
      return () => unregister(name, id);
    }
  }, []);

  useEffect(() => {
    open && name && closeGroup(name);
    setExpand(open);
  }, [open]);

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
          /**
           * Порядок вызовов и используемых данных важен, так как сначала всё закрываем, а потом открываем конкретный.
           */
          name && closeGroup(name);
          setExpand(!expanded);
          onToggle?.(!expanded);
        }}
        tabIndex={0}
        className={styles.header}
      >
        <span role='heading' aria-level={level} className={styles.title} children={summary} />
        <ArrowExpandDownSVG className={styles.arrow} />
      </button>
      <div className={styles.content} role='region' ref={container}>
        {children}
        {description && <span className={styles.description} children={description} />}
      </div>
    </div>
  );
};
