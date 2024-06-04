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
