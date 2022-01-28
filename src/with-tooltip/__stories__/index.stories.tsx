import React, { useRef, useEffect, useState } from 'react';
import on from '../../helpers/on';
import { Link } from '../../link';
import { WithTooltip } from '..';
import boundsOf from '../../helpers/bounds-of';
import { Modal } from '../../modal';
import { times } from 'lodash';

const shortText = 'Short tooltip text.';

const longText = [
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

const LinkWithTooltip = ({ tooltip = shortText }: { tooltip?: React.ReactNode }) => (
  <WithTooltip tooltip={tooltip}>
    {(ref, toggle) => (
      <Link ref={ref as any} pseudo onClick={() => toggle(true)}>
        Show tooltip
      </Link>
    )}
  </WithTooltip>
);

const SquareWithTooltip = () => (
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

const DismissTest = () => (
  <WithTooltip tooltip='Hello, world!'>
    {(ref, toggle) => (
      <Link ref={ref as any} pseudo onClick={() => toggle(true)}>
        [Toggle tooltip]
      </Link>
    )}
  </WithTooltip>
);

function PositioningTest({
  tooltip,
  containerProps,
}: {
  tooltip: React.ReactNode;
  containerProps?: React.HTMLAttributes<HTMLDivElement>;
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

const useDraggable = () => {
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
};

export default {
  title: 'desktop/WithTooltip',
  component: WithTooltip,
  parameters: {
    layout: 'padded',
  },
};

export const Primary = () => (
  <div
    style={{
      display: 'flex',
      height: 320,
      alignItems: 'center',
      justifyContent: 'space-between',
    }}
  >
    <DismissTest />
    <DismissTest />
    <DismissTest />
  </div>
);

export const SmallInLargeArea = () => <PositioningTest tooltip={shortText} />;

export const LongInLargeArea = () => <PositioningTest tooltip={longText} />;

export const InScrollParent = () => (
  <div
    style={{
      width: 288,
      height: 288,
      display: 'flex',
      flexWrap: 'wrap',
      border: '2px dashed #aaa',
      borderRadius: '4px',
      overflowY: 'scroll',
      position: 'relative',
      justifyContent: 'center',
    }}
  >
    {times(60).map(i => (
      <SquareWithTooltip key={i} />
    ))}
  </div>
);

export const ShortInModal = () => (
  <Modal size='s'>
    <Modal.Header divided title='Тултип в модальном окне' subtitle='Без прокрутки' />
    <Modal.Body>
      <div
        style={{
          height: '400px',
          display: 'grid',
          gridTemplateRows: '1fr 1fr 1fr',
          gridTemplateColumns: '1fr 1fr 1fr',
        }}
      >
        {times(9).map(i => (
          <div key={i} style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <LinkWithTooltip tooltip={shortText} />
          </div>
        ))}
      </div>
    </Modal.Body>
  </Modal>
);

export const LongInModal = () => (
  <Modal size='s'>
    <Modal.Header divided title='Тултип в модальном окне' subtitle='Без прокрутки' />
    <Modal.Body>
      <div
        style={{
          height: '400px',
          display: 'grid',
          gridTemplateRows: '1fr 1fr 1fr',
          gridTemplateColumns: '1fr 1fr 1fr',
        }}
      >
        {times(9).map(i => (
          <div key={i} style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <LinkWithTooltip tooltip={longText} />
          </div>
        ))}
      </div>
    </Modal.Body>
  </Modal>
);

export const InModalWithScroll = () => (
  <Modal size='s'>
    <Modal.Header divided title='Тултип в модальном окне' subtitle='С прокруткой' />
    <Modal.Body>
      <div style={{ height: '400px', padding: '20px' }}>
        {Array(5)
          .fill(0)
          .map((z, i) => (
            <p key={i}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem, unde.</p>
          ))}
        <LinkWithTooltip tooltip={`${longText.slice(0, 100)}...`} />
        {Array(25)
          .fill(0)
          .map((z, i) => (
            <p key={i}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem, unde.</p>
          ))}
      </div>
    </Modal.Body>
  </Modal>
);

export const InModalWithPortal = () => (
  <Modal size='s'>
    <Modal.Header divided title='Тултип в модальном окне' subtitle='С прокруткой' />
    <Modal.Body>
      <div style={{ height: '400px', padding: '20px' }}>
        {times(5).map(i => (
          <p key={i}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem, unde.</p>
        ))}

        <LinkWithTooltip tooltip={`${longText.slice(0, 100)}...`} />

        {times(25).map(i => (
          <p key={i}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem, unde.</p>
        ))}
      </div>
    </Modal.Body>
  </Modal>
);

export const ComplexMarkup = () => {
  const rootStyle: React.CSSProperties = {
    position: 'relative',
    marginTop: 20,
    height: 1200,
  };

  const innerStyle: React.CSSProperties = {
    position: 'fixed',
    right: '20px',
    top: '20px',
    width: '400px',
    height: '600px',
    padding: '20px',
    overflowX: 'hidden',
    overflowY: 'auto',
    background: '#fff',
    border: '2px dashed #aaa',
    borderRadius: '4px',
    boxSizing: 'border-box',
  };

  return (
    <div style={rootStyle}>
      <div style={innerStyle}>
        <div>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eligendi, vel.</p>
          <LinkWithTooltip />{' '}
          {times(260)
            .map(n => `${n + 1}`)
            .join(', ')}
          <div style={{ textAlign: 'right' }}>
            <LinkWithTooltip />
          </div>
          {times(240)
            .map(n => `${n + 1}`)
            .join(', ')}{' '}
          <LinkWithTooltip />
        </div>
      </div>
    </div>
  );
};
