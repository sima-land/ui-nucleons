import React, { useRef, useEffect, useState } from 'react';
import { storiesOf } from '@storybook/react';
import on from '../../helpers/on';
import Link from '../../link';
import WithTooltip from '../index';
import boundsOf from '../../helpers/bounds-of';
import classes from './index.scss';

const shortText = 'Это ось задних колёс.';

const longText = [
  'Тормоза делятся на 3 основных вида: барабанный (ножной), ободной и дисковый.',
  'Преимущество барабанного тормоза заключается в простоте обслуживания.',
  'Такой тормоз долговечен, потому что механизм закрыт, и в него попадает мало грязи.',
  'Он не изнашивает обод. Ободной тормоз отличается наименьшим весом.',
  'В сравнении с барабанным, обеспечивает более плавное торможение.',
  'Дисковый тормоз эффективен в любых погодных условиях, потому что на механизм не попадает грязь с ободьев.',
  'Обеспечивает мощное торможение, подходит для экстремальной езды по бездорожью. Не изнашивает обод. ',
].join(' ').repeat(2);

storiesOf('WithTooltip', module)
  .add('Dismiss handle', () => (
    <div style={{ display: 'flex', height: 320, alignItems: 'center', justifyContent: 'space-between' }}>
      <DismissTest />
      <DismissTest />
      <DismissTest />
    </div>
  ))
  .add('Large available area, small tooltip content', () => (
    <PositioningTest tooltipChildren={shortText} />
  ))
  .add('Large available area, large tooltip content', () => (
    <PositioningTest tooltipChildren={longText} />
  ))
  .add('In scrollable parent', () => (
    <div style={{ position: 'relative', marginTop: 20, height: 1200 }}>
      <div className={classes['fake-side-page']}>
        <div className={classes['fake-side-page-inner']}>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eligendi, vel.</p>

          <ReadyTooltip />
          {' '}
          {Array(260).fill(0).map((zero, index) => `${index + 1}`).join(', ')}

          <div style={{ textAlign: 'right' }}>
            <ReadyTooltip />
          </div>

          {Array(240).fill(0).map((zero, index) => `${index + 1}`).join(', ')}
          {' '}
          <ReadyTooltip />
        </div>
      </div>
    </div>
  ));

const ReadyTooltip = () => {
  const [shown, setShown] = useState(false);

  return (
    <WithTooltip
      shown={shown}
      onDismiss={() => setShown(false)}
      children={(
        <Link pseudo onClick={() => setShown(true)}>Hello, world!</Link>
      )}
      tooltipChildren='Open tooltip'
    />
  );
};

const DismissTest = () => {
  const [shown, setShown] = useState(false);

  return (
    <WithTooltip
      shown={shown}
      tooltipChildren='Hello, world!'
      onDismiss={(event, { byHolder }) => !byHolder && setShown(false)}
    >
      <Link pseudo onClick={() => setShown(!shown)}>
        [Toggle tooltip]
      </Link>
    </WithTooltip>
  );
};

function PositioningTest ({ tooltipChildren, containerProps }) {
  const [shown, setShown] = useState(false);
  const { draggableRef, movedRef } = useDraggable();

  return (
    <div
      style={{
        width: 2000,
        height: 1000,
        border: '10px solid #aaa',
      }}
      {...containerProps}
    >
      <div ref={draggableRef} style={{ position: 'absolute' }}>
        <WithTooltip
          shown={shown}
          tooltipChildren={tooltipChildren}
        >
          <Link
            onClick={() => {
              !movedRef.current && setShown(!shown);
              movedRef.current = false;
            }}
            pseudo
          >
            [draggable toggle ({shown ? 'on' : 'off'})]
          </Link>
        </WithTooltip>
      </div>
    </div>
  );
}

const useDraggable = () => {
  const movedRef = useRef(false);
  const capturedRef = useRef(false);
  const captureOffsetRef = useRef({ x: 0, y: 0 });

  const draggableRef = useRef();
  const [, setCount] = useState(0);

  useEffect(() => {
    const offDown = on(window, 'mousedown', event => {
      if (
        event.target === draggableRef.current
        || draggableRef.current.contains(event.target)
      ) {
        event.preventDefault();
        captureOffsetRef.current.x = boundsOf(draggableRef.current).left - event.clientX;
        captureOffsetRef.current.y = boundsOf(draggableRef.current).top - event.clientY;
        capturedRef.current = true;
      }
    }, { capture: true });

    const offMove = on(window, 'mousemove', ({ clientX, clientY }) => {
      if (capturedRef.current) {
        const { current: captureOffset } = captureOffsetRef;

        movedRef.current = true;
        draggableRef.current.style.top = `${window.pageYOffset + clientY + captureOffset.y}px`;
        draggableRef.current.style.left = `${window.pageXOffset + clientX + captureOffset.x}px`;
        setCount(Math.random()); // для пересчета позиции
      }
    });

    const offUp = on(window, 'mouseup', () => {
      capturedRef.current = false;
      setCount(Math.random()); // для пересчета позиции
    });

    return () => {
      offDown();
      offMove();
      offUp();
    };
  }, []);

  return { draggableRef, movedRef };
};
