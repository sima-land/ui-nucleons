import { Layout } from '@sima-land/ui-nucleons/layout';

export const meta = {
  category: 'Компоненты/Layout',
  title: 'Простой пример',
  parameters: {
    layout: 'fullscreen',
  },
};

export default function Primary() {
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
