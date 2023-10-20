import { HTMLAttributes, ReactNode, useEffect, useRef, useState } from 'react';
import { WithTooltip } from '..';
import boundsOf from '../../helpers/bounds-of';
import on from '../../helpers/on';
import { Link } from '../../link';

export const SHORT_TEXT = 'Short tooltip text.';

export const LONG_TEXT = [
  'Тормоза делятся на 3 основных вида: барабанный (ножной), ободной и дисковый.',
  'Преимущество барабанного тормоза заключается в простоте обслуживания.',
  'Такой тормоз долговечен, потому что механизм закрыт, и в него попадает мало грязи.',
  'Он не изнашивает обод. Ободной тормоз отличается наименьшим весом.',
  'В сравнении с барабанным, обеспечивает более плавное торможение.',
  'Дисковый тормоз эффективен в любых погодных условиях, потому что на механизм не попадает грязь с ободьев.',
  'Обеспечивает мощное торможение, подходит для экстремальной езды по бездорожью. Не изнашивает обод. ',
]
  .join(' ')
  .repeat(2);

export function DismissTest() {
  return (
    <WithTooltip tooltip='Hello, world!'>
      {(ref, toggle) => (
        <Link ref={ref as any} pseudo onClick={() => toggle(true)}>
          [Toggle tooltip]
        </Link>
      )}
    </WithTooltip>
  );
}

export function LinkWithTooltip({ tooltip = SHORT_TEXT }: { tooltip?: ReactNode }) {
  return (
    <WithTooltip tooltip={tooltip}>
      {(ref, toggle) => (
        <Link ref={ref as any} pseudo onClick={() => toggle(true)}>
          Show tooltip
        </Link>
      )}
    </WithTooltip>
  );
}

export function SquareWithTooltip() {
  return (
    <WithTooltip tooltip='There is tooltip'>
      {(ref, toggle, shown) => (
        <div
          ref={ref as any}
          style={{
            width: 24,
            height: 24,
            margin: 12,
            background: shown ? '#aaa' : '#ddd',
            flexShrink: 0,
            cursor: 'pointer',
          }}
          onClick={() => toggle(true)}
        />
      )}
    </WithTooltip>
  );
}

export function PositioningTest({
  tooltip,
  containerProps,
}: {
  tooltip: ReactNode;
  containerProps?: HTMLAttributes<HTMLDivElement>;
}) {
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
      <div ref={draggableRef as any} style={{ position: 'absolute' }}>
        <WithTooltip tooltip={tooltip}>
          {(ref, toggle) => (
            <Link
              ref={ref as any}
              onClick={() => {
                !movedRef.current && toggle(true);
                movedRef.current = false;
              }}
              pseudo
            >
              [draggable toggle]
            </Link>
          )}
        </WithTooltip>
      </div>
    </div>
  );
}

export function useDraggable() {
  const movedRef = useRef(false);
  const capturedRef = useRef(false);
  const captureOffsetRef = useRef({ x: 0, y: 0 });

  const draggableRef = useRef<HTMLElement>();
  const [, setCount] = useState(0);

  useEffect(() => {
    const list = [
      on<MouseEvent>(
        window,
        'mousedown',
        event => {
          if (
            event.target === draggableRef.current ||
            (draggableRef.current as any).contains((event as any).target)
          ) {
            event.preventDefault();
            captureOffsetRef.current.x =
              (boundsOf(draggableRef.current) as any).left - event.clientX;
            captureOffsetRef.current.y =
              (boundsOf(draggableRef.current) as any).top - event.clientY;
            capturedRef.current = true;
          }
        },
        { capture: true },
      ),
      on<MouseEvent>(window, 'mousemove', ({ clientX, clientY }) => {
        if (capturedRef.current) {
          const { current: captureOffset } = captureOffsetRef;

          movedRef.current = true;
          (draggableRef.current as any).style.top = `${
            window.pageYOffset + clientY + captureOffset.y
          }px`;
          (draggableRef.current as any).style.left = `${
            window.pageXOffset + clientX + captureOffset.x
          }px`;
          setCount(Math.random()); // для пересчета позиции
        }
      }),
      on(window, 'mouseup', () => {
        capturedRef.current = false;
        setCount(Math.random()); // для пересчета позиции
      }),
    ];

    return () => list.forEach(fn => fn());
  }, []);

  return { draggableRef, movedRef };
}
