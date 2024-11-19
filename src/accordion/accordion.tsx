import { ReactNode, useContext, useEffect, useRef, useState } from 'react';
import styles from './accordion.m.scss';
import ArrowExpandDownSVG from '@sima-land/ui-quarks/icons/16x16/Stroked/ArrowExpandDown';
import classnames from 'classnames/bind';
import { AccordionContext } from './accordion-provider';

const cx = classnames.bind(styles);

interface Props {
  summary: string;
  theme?: 'light' | 'dark';
  description?: string;
  name: string;
  open?: boolean;
  children?: ReactNode;
  className?: string;
  onClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>, open: boolean) => void;
}

/**
 * Аккордеон.
 * @param props Пропсы компонента.
 * @param props.name Имя группы аккордеонов.
 * @param props.summary Заголовок блока аккордеона.
 * @param props.description Описание.
 * @param props.theme Тема оформления.
 * @param props.open Значение состояния открытия.
 * @param props.className Внешний стиль компонента.
 * @param props.onClick Обработчик клика по заголовку аккордеона.
 * @param props.children Контент аккордеона при открытии.
 * @return Элемент.
 */
export const Accordion = ({
  name,
  summary,
  description,
  theme = 'light',
  open,
  onClick,
  className,
  children,
}: Props) => {
  const container = useRef<HTMLDivElement>(null);
  const { selectOpenedId, register, unregister, toggle } = useContext(AccordionContext);
  const [id] = useState<symbol>(register(name, open));
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
        onClick={e => {
          toggle(name, id);
          onClick?.(e, !expanded);
        }}
        tabIndex={0}
        className={styles.header}
      >
        <span role='heading' className={styles.title} children={summary} tabIndex={0} />
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
