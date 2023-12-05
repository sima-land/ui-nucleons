import { Carousel } from '@sima-land/ui-nucleons/carousel';
import { Layout } from '@sima-land/ui-nucleons/layout';
import { Tab, Tabs } from '@sima-land/ui-nucleons/tabs';
import { CSSProperties, useState } from 'react';

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
      <Tab selected={state === 0} onClick={() => setState(0)}>
        Первая
      </Tab>
      <Tab selected={state === 1} onClick={() => setState(1)}>
        Вторая
      </Tab>
      <Tab selected={state === 2} onClick={() => setState(2)}>
        Третья
      </Tab>
    </Tabs>
  );
}

Primary.storyName = 'Простой пример';

export function SmallGap() {
  const [state, setState] = useState(0);

  return (
    <Tabs gapSize='s'>
      <Tab selected={state === 0} onClick={() => setState(0)}>
        Первая
      </Tab>
      <Tab selected={state === 1} onClick={() => setState(1)}>
        Вторая
      </Tab>
      <Tab selected={state === 2} onClick={() => setState(2)}>
        Третья
      </Tab>
    </Tabs>
  );
}

SmallGap.storyName = 'Расстояние между вкладками S';

export function CustomGap() {
  const [state, setState] = useState(0);

  return (
    <Tabs gapSize='unset' style={{ '--tabs-gap': '32px' }}>
      <Tab selected={state === 0} onClick={() => setState(0)}>
        Первая
      </Tab>
      <Tab selected={state === 1} onClick={() => setState(1)}>
        Вторая
      </Tab>
      <Tab selected={state === 2} onClick={() => setState(2)}>
        Третья
      </Tab>
    </Tabs>
  );
}

CustomGap.storyName = 'Свое расстояние между вкладками';

export function DifferentVariants() {
  const [state, setState] = useState(0);
  const content = (
    <>
      <Tab selected={state === 0} onClick={() => setState(0)}>
        Первая
      </Tab>
      <Tab selected={state === 1} onClick={() => setState(1)}>
        Вторая
      </Tab>
      <Tab selected={state === 2} onClick={() => setState(2)} disabled>
        Третья
      </Tab>
      <Tab selected={state === 3} onClick={() => setState(3)}>
        Четвертая
      </Tab>
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
      <Tab selected={state === 0} onClick={() => setState(0)}>
        Первая
      </Tab>
      <Tab selected={state === 1} onClick={() => setState(1)}>
        Вторая
      </Tab>
      <Tab selected={state === 2} onClick={() => setState(2)} disabled>
        Третья
      </Tab>
      <Tab selected={state === 3} onClick={() => setState(3)}>
        Четвертая
      </Tab>
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

export function TabsCarousel() {
  const [state, setState] = useState(0);

  const items = Array(12)
    .fill(0)
    .map((zero, index) => `Вкладка #${index + 1}`);

  const styles = {
    item: {
      height: '40px',
      flexGrow: 0,
      flexShrink: 0,
    } satisfies CSSProperties,
  };

  return (
    <Layout>
      <Tabs view='clean-underline'>
        <Carousel
          step={1}
          infinite={false}
          items={items}
          renderItem={(item, index) => (
            <Tab selected={index === state} onClick={() => setState(index)} style={styles.item}>
              {item}
            </Tab>
          )}
          withControls='auto'
          renderControl={(data, props) => {
            if (!data.canUse) {
              return null;
            }

            return Carousel.defaultRenderControl(data, props);
          }}
        />
      </Tabs>
    </Layout>
  );
}

TabsCarousel.storyName = 'Карусель вкладок';
