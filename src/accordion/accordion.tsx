import { PropsWithChildren, useContext, useEffect, useMemo, useRef, useState } from 'react';
import styles from './accordion.m.scss';
import ArrowExpandDownSVG from '@sima-land/ui-quarks/icons/16x16/Stroked/ArrowExpandDown';
import classnames from 'classnames/bind';
import { AccordionContext } from './accordion-provider';

const cx = classnames.bind(styles);

interface Props extends PropsWithChildren {
  title: string;
  theme?: 'light' | 'dark';
  description?: string;
  groupId: string;
  initialOpen?: boolean;
}

/**
 * Аккордеон.
 * @param props Пропсы компонента.
 * @param props.title Заголовок каталога.
 * @param props.description Описание.
 * @param props.theme Тема оформления.
 * @param props.initialOpen Первоначальное значение состояния открытия.
 * @param props.children Контент аккордеона при открытии.
 * @return Элемент.
 */
export const Accordion = ({ groupId, title, description, theme, initialOpen, children }: Props) => {
  const container = useRef<HTMLDivElement>(null);
  const { selected, register, unregister, toggle } = useContext(AccordionContext);
  const [id, setId] = useState<symbol>(Symbol());
  const expanded = useMemo(() => selected(groupId) === id, [id, groupId, selected]);
  const contentHeight = useMemo(
    () => container.current?.scrollHeight || 0,
    [container.current?.scrollHeight],
  );

  useEffect(() => {
    const registeredId = register(groupId, initialOpen);
    setId(registeredId);
    return () => unregister(groupId, registeredId);
  }, []);

  return (
    <div
      className={cx('root', {
        expanded,
        'theme-dark': theme === 'dark',
        'theme-light': theme === 'light',
      })}
    >
      <button
        type='button'
        aria-expanded={expanded}
        aria-controls={`section-${groupId}`}
        id={`accordion-${groupId}`}
        onClick={() => toggle(groupId, id)}
        tabIndex={0}
        className={styles.header}
      >
        <h4 className={styles.title} children={title} tabIndex={0} />
        <ArrowExpandDownSVG className={styles.arrow} />
      </button>
      <div
        className={styles.content}
        id={`section-${groupId}`}
        role='region'
        ref={container}
        style={{
          height: expanded ? contentHeight : undefined,
        }}
        aria-labelledby={`accordion-${groupId}`}
      >
        {children}
        {description && <span className={styles.description} children={description} />}
      </div>
    </div>
  );
};
