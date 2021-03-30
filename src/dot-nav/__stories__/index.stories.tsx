import React, { useState } from 'react';
import { action } from '@storybook/addon-actions';
import { DotNav } from '..';
import { times } from 'lodash';

const styles: Record<string, React.CSSProperties> = {
  wrap: {
    height: 200,
    position: 'relative',
    margin: 32,
    boxShadow: '0 0 0 1px #ccc',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  btnWrap: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 32,
    pointerEvents: 'none',
  },
  btn: {
    border: 0,
    pointerEvents: 'all',
    padding: 0,
    width: 48,
    height: 48,
    background: '#ddd',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
};

const clickAction = action('Dot clicked, index');

export default {
  title: 'DotNav',
  component: DotNav,
  parameters: {
    layout: 'padded',
  },
};

export const Primary = () => {
  const Demo = ({ total = 1, step = 1 }) => {
    const [current, setCurrent] = useState(total - 1);

    return (
      <div style={styles.wrap}>
        <DotNav
          current={current}
          total={total}
          onSelect={index => {
            setCurrent(index);
            clickAction(index);
          }}
        />

        <div style={styles.btnWrap}>
          <button style={styles.btn} onClick={() => setCurrent((total + (current - step)) % total)}>◄</button>
          <button style={styles.btn} onClick={() => setCurrent((total + (current + step)) % total)}>►</button>
        </div>
      </div>
    );
  };

  return (
    <>
      {times(10).map(i => i + 1).map(index => (
        <Demo key={index} total={index} />
      ))}
    </>
  );
};
