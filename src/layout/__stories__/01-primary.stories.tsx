import { Layout } from '@sima-land/ui-nucleons/layout';

export default {
  title: 'common/Layout',
  component: Layout,
  parameters: {
    layout: 'fullscreen',
  },
};

export function Primary() {
  return (
    <>
      <Layout>
        <div style={{ background: 'rgb(207, 232, 252)' }}>
          <h2>Контент ограниченный layout`ом</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta, nostrum!</p>
        </div>
      </Layout>
    </>
  );
}

Primary.storyName = 'Простой пример';
