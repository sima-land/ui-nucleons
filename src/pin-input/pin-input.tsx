import { Fragment, useEffect, useRef, useState } from 'react';
import { on } from '../helpers/on';
import classNames from 'classnames/bind';
import styles from './pin-input.module.scss';

const cx = classNames.bind(styles);

const COUNT = 4;

/** @inheritdoc */
export function PinInput() {
  const [value, setValue] = useState('');
  const [focused, setFocused] = useState(false);

  const ref = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (focused) {
      return on(document, 'selectionchange', () => {
        ref.current?.setSelectionRange(-1, -1);
      });
    }
  }, [focused]);

  return (
    <div className={cx('root', { focused })}>
      <div className={cx('display')}>
        {Array(COUNT)
          .fill(0)
          .map((_, index) => (
            <Fragment key={index}>
              {focused && index === value.length && <span className={cx('cursor')}></span>}

              <span className={cx('item', { last: index === COUNT - 1 })}>
                {value[index] ? (
                  <span className={cx('character')}>{value[index]}</span>
                ) : (
                  <span className={cx('placeholder')} />
                )}
              </span>
            </Fragment>
          ))}
        {focused && value.length === COUNT && <span className={cx('cursor')}></span>}
      </div>
      <input
        ref={ref}
        type='text'
        inputMode='numeric'
        className={cx('input')}
        value={value}
        onChange={e => {
          setValue(e.target.value.slice(0, COUNT).replace(/\D/g, ''));
        }}
        onFocus={e => {
          setFocused(true);
          e.currentTarget.setSelectionRange(-1, -1);
        }}
        onBlur={() => {
          setFocused(false);
        }}
      />
    </div>
  );
}
