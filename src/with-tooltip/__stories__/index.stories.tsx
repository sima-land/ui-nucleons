import { WithTooltip } from '@sima-land/ui-nucleons/with-tooltip';
import { Link } from '@sima-land/ui-nucleons/link';
import { Modal, ModalBody } from '@sima-land/ui-nucleons/modal';
import { TopBar } from '@sima-land/ui-nucleons/top-bar';
import { times } from 'lodash';
import {
  LONG_TEXT,
  SHORT_TEXT,
  LinkWithTooltip,
  PositioningTest,
  SquareWithTooltip,
} from './utils';
import { CSSProperties } from 'react';

export default {
  title: 'deprecated/WithTooltip',
  component: WithTooltip,
  parameters: {
    layout: 'padded',
  },
};

export function TestComplexMarkup() {
  const rootStyle: CSSProperties = {
    position: 'relative',
    marginTop: 20,
    height: 1200,
  };

  const innerStyle: CSSProperties = {
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
}

TestComplexMarkup.storyName = 'Тест: сложная верстка родительских блоков';

export function TestDismiss() {
  function TestBlock() {
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

  return (
    <div
      style={{
        display: 'flex',
        height: 320,
        alignItems: 'center',
        justifyContent: 'space-between',
      }}
    >
      <TestBlock />
      <TestBlock />
      <TestBlock />
    </div>
  );
}

TestDismiss.storyName = 'Тест: показ одного тултипа должен скрывать другой тултип';

export function TestSmallInLargeArea() {
  return <PositioningTest tooltip={SHORT_TEXT} />;
}

TestSmallInLargeArea.storyName = 'Тест: короткий текст в большой области';

export function TestLongInLargeArea() {
  return <PositioningTest tooltip={LONG_TEXT} />;
}

TestLongInLargeArea.storyName = 'Тест: длинный текст в большой области';

export function TestScrollableParent() {
  return (
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
}

TestScrollableParent.storyName = 'Тест: родитель имеет прокрутку';

export function TestShortInModal() {
  return (
    <Modal size='s'>
      <TopBar divided title='Тултип в модальном окне' subtitle='Без прокрутки' />
      <ModalBody>
        <div
          style={{
            height: '400px',
            display: 'grid',
            gridTemplateRows: '1fr 1fr 1fr',
            gridTemplateColumns: '1fr 1fr 1fr',
          }}
        >
          {times(9).map(i => (
            <div
              key={i}
              style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}
            >
              <LinkWithTooltip tooltip={SHORT_TEXT} />
            </div>
          ))}
        </div>
      </ModalBody>
    </Modal>
  );
}

TestShortInModal.storyName = 'Тест: в модальном окне с коротким текстом';

export function TestLongInModal() {
  return (
    <Modal size='s'>
      <TopBar divided title='Тултип в модальном окне' subtitle='Без прокрутки' />
      <ModalBody>
        <div
          style={{
            height: '400px',
            display: 'grid',
            gridTemplateRows: '1fr 1fr 1fr',
            gridTemplateColumns: '1fr 1fr 1fr',
          }}
        >
          {times(9).map(i => (
            <div
              key={i}
              style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}
            >
              <LinkWithTooltip tooltip={LONG_TEXT} />
            </div>
          ))}
        </div>
      </ModalBody>
    </Modal>
  );
}

TestLongInModal.storyName = 'Тест: в модальном окне с длинным текстом';

export function TestInModalWithScroll() {
  return (
    <Modal size='s'>
      <TopBar divided title='Тултип в модальном окне' subtitle='С прокруткой' />
      <ModalBody>
        <div style={{ height: '400px', padding: '20px' }}>
          {Array(5)
            .fill(0)
            .map((z, i) => (
              <p key={i}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem, unde.</p>
            ))}
          <LinkWithTooltip tooltip={`${LONG_TEXT.slice(0, 100)}...`} />
          {Array(25)
            .fill(0)
            .map((z, i) => (
              <p key={i}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem, unde.</p>
            ))}
        </div>
      </ModalBody>
    </Modal>
  );
}

TestInModalWithScroll.storyName = 'Тест: в модальном окне с прокруткой';

export function TestInModalWithPortal() {
  return (
    <Modal size='s'>
      <TopBar divided title='Тултип в модальном окне' subtitle='С прокруткой' />
      <ModalBody>
        <div style={{ height: '400px', padding: '20px' }}>
          {times(5).map(i => (
            <p key={i}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem, unde.</p>
          ))}

          <LinkWithTooltip tooltip={`${LONG_TEXT.slice(0, 100)}...`} />

          {times(25).map(i => (
            <p key={i}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem, unde.</p>
          ))}
        </div>
      </ModalBody>
    </Modal>
  );
}

TestInModalWithPortal.storyName = 'Тест: в модальном окне с портале';
