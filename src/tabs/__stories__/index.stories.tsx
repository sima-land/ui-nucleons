import { Tabs } from '@sima-land/ui-nucleons/tabs';
import { useState } from 'react';

export default {
  title: 'common/Tabs',
  component: Tabs,
  parameters: {
    layout: 'padded',
  },
};

export function Primary() {
  const [state, setState] = useState(0);

  return (
    <Tabs>
      <Tabs.Item selected={state === 0} onClick={() => setState(0)}>
        Первая
      </Tabs.Item>
      <Tabs.Item selected={state === 1} onClick={() => setState(1)}>
        Вторая
      </Tabs.Item>
      <Tabs.Item selected={state === 2} onClick={() => setState(2)}>
        Третья
      </Tabs.Item>
    </Tabs>
  );
}

Primary.storyName = 'Простой пример';

export function SmallGap() {
  const [state, setState] = useState(0);

  return (
    <Tabs gapSize='s'>
      <Tabs.Item selected={state === 0} onClick={() => setState(0)}>
        Первая
      </Tabs.Item>
      <Tabs.Item selected={state === 1} onClick={() => setState(1)}>
        Вторая
      </Tabs.Item>
      <Tabs.Item selected={state === 2} onClick={() => setState(2)}>
        Третья
      </Tabs.Item>
    </Tabs>
  );
}

SmallGap.storyName = 'Расстояние между вкладками S';

export function CustomGap() {
  const [state, setState] = useState(0);

  return (
    <Tabs gapSize='unset' style={{ '--tabs-gap': '32px' }}>
      <Tabs.Item selected={state === 0} onClick={() => setState(0)}>
        Первая
      </Tabs.Item>
      <Tabs.Item selected={state === 1} onClick={() => setState(1)}>
        Вторая
      </Tabs.Item>
      <Tabs.Item selected={state === 2} onClick={() => setState(2)}>
        Третья
      </Tabs.Item>
    </Tabs>
  );
}

CustomGap.storyName = 'Свое расстояние между вкладками';

export function DifferentVariants() {
  const [state, setState] = useState(0);
  const content = (
    <>
      <Tabs.Item selected={state === 0} onClick={() => setState(0)}>
        Первая
      </Tabs.Item>
      <Tabs.Item selected={state === 1} onClick={() => setState(1)}>
        Вторая
      </Tabs.Item>
      <Tabs.Item selected={state === 2} onClick={() => setState(2)} disabled>
        Третья
      </Tabs.Item>
      <Tabs.Item selected={state === 3} onClick={() => setState(3)}>
        Четвертая
      </Tabs.Item>
    </>
  );

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
      <Tabs view='round'>{content}</Tabs>
      <Tabs view='clean'>{content}</Tabs>
      <Tabs view='clean-underline'>{content}</Tabs>
    </div>
  );
}

DifferentVariants.storyName = 'Варианты отображения';

export function DifferentVariantsStretch() {
  const [state, setState] = useState(0);
  const content = (
    <>
      <Tabs.Item selected={state === 0} onClick={() => setState(0)}>
        Первая
      </Tabs.Item>
      <Tabs.Item selected={state === 1} onClick={() => setState(1)}>
        Вторая
      </Tabs.Item>
      <Tabs.Item selected={state === 2} onClick={() => setState(2)} disabled>
        Третья
      </Tabs.Item>
      <Tabs.Item selected={state === 3} onClick={() => setState(3)}>
        Четвертая
      </Tabs.Item>
    </>
  );

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
      <Tabs stretch view='round'>
        {content}
      </Tabs>
      <Tabs stretch view='clean'>
        {content}
      </Tabs>
      <Tabs stretch view='clean-underline'>
        {content}
      </Tabs>
    </div>
  );
}

DifferentVariantsStretch.storyName = 'На всю ширину';
