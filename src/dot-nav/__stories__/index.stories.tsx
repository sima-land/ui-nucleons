import { DotNav, DotNavSize } from '@sima-land/ui-nucleons/dot-nav';
import { CSSProperties, useState } from 'react';
import { times } from 'lodash';

const styles: Record<string, CSSProperties> = {
  wrap: {
    height: 160,
    maxWidth: 480,
    position: 'relative',
    margin: '32px auto',
    border: '2px dashed #ddd',
    borderRadius: '4px',
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

export default {
  title: 'common/DotNav',
  component: DotNav,
  parameters: {
    layout: 'padded',
  },
};

function DemoBlock({ total = 1, size }: { total: number; size?: DotNavSize }) {
  const [current, setCurrent] = useState<number>(total - 1);

  return (
    <div style={styles.wrap}>
      <DotNav
        size={size}
        current={current}
        total={total}
        onSelect={index => {
          setCurrent(index);
          alert('В такую маленькую точку попасть сложно, но вы справились!');
        }}
      />

      <div style={styles.btnWrap}>
        <button style={styles.btn} onClick={() => setCurrent((total + (current - 1)) % total)}>
          ◄
        </button>
        <button style={styles.btn} onClick={() => setCurrent((total + (current + 1)) % total)}>
          ►
        </button>
      </div>
    </div>
  );
}

export function Primary() {
  return (
    <>
      {times(10)
        .map(i => i + 1)
        .map(index => (
          <DemoBlock key={index} total={index} />
        ))}
    </>
  );
}

Primary.storyName = 'Простой пример';

export function LargeSize() {
  return (
    <>
      {times(10)
        .map(i => i + 1)
        .map(index => (
          <DemoBlock key={index} total={index} size='l' />
        ))}
    </>
  );
}

LargeSize.storyName = 'Размер L';
