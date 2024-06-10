import { Layout, Breakpoint } from '@sima-land/ui-nucleons/layout';
import { InnerBorder } from '@sima-land/ui-nucleons/styling/borders';

export const meta = {
  category: 'Компоненты/Layout',
  title: 'Умные границы',
  parameters: {
    layout: 'fullscreen',
  },
};

export default function SmartBorders() {
  const small: Breakpoint[] = ['mxs', 'ms', 'mm', 'ml'];
  const large: Breakpoint[] = ['xs', 's', 'm', 'l', 'xl'];

  const content = (
    <div style={{ margin: '32px 0', padding: '32px 0' }}>
      <h2 style={{ margin: '0 0 24px 0' }}>Умные полосы</h2>
      <p>Границы будут прибиты к краям экрана на мобильных разрешениях.</p>
    </div>
  );

  return (
    <Layout disabledOn={small}>
      <Layout disabledOn={large} className={InnerBorder.y}>
        {content}
      </Layout>
    </Layout>
  );
}
