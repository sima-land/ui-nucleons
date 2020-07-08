import React, { useRef, useEffect, useState } from 'react';
import { storiesOf } from '@storybook/react';
import on from '../../helpers/on';
import Link from '../../link';
import WithTooltip from '../index';
import boundsOf from '../../helpers/bounds-of';

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
  .add('Large available area, small tooltip content', () => (
    <TestArea tooltipChildren={shortText} />
  ))
  .add('Large available area, large tooltip content', () => (
    <TestArea tooltipChildren={longText} />
  ));

/**
 * Демонстрационный компонент.
 * @param {Object} props Свойства.
 * @return {ReactElement} Демонстрационный компонент.
 */
function TestArea ({ tooltipChildren, containerProps }) { // eslint-disable-line react/prop-types
  const movedRef = useRef(false);
  const capturedRef = useRef(false);
  const captureOffsetRef = useRef({ x: 0, y: 0 });

  const wrapperRef = useRef();
  const textareaRef = useRef();

  const [shown, setShown] = useState(false);
  const [, setCount] = useState(0);

  useEffect(() => {
    const offDown = on(window, 'mousedown', event => {
      if (
        event.target !== textareaRef.current
        && (
          event.target === wrapperRef.current
          || wrapperRef.current.contains(event.target)
        )
      ) {
        event.preventDefault();
        captureOffsetRef.current.x = boundsOf(wrapperRef.current).left - event.clientX;
        captureOffsetRef.current.y = boundsOf(wrapperRef.current).top - event.clientY;
        capturedRef.current = true;
      }
    }, { capture: true });

    const offMove = on(window, 'mousemove', ({ clientX, clientY }) => {
      if (capturedRef.current) {
        const { current: captureOffset } = captureOffsetRef;

        movedRef.current = true;
        wrapperRef.current.style.top = `${pageYOffset + clientY + captureOffset.y}px`;
        wrapperRef.current.style.left = `${pageXOffset + clientX + captureOffset.x}px`;
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

  return (
    <div
      style={{
        width: 2000,
        height: 1000,
        border: '10px solid #aaa',
      }}
      {...containerProps}
    >
      <div ref={wrapperRef} style={{ position: 'absolute' }}>
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
