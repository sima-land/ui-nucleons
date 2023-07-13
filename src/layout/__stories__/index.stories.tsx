import { Layout, Breakpoint } from '@sima-land/ui-nucleons/layout';
import { InnerBorder } from '@sima-land/ui-nucleons/styling/borders';

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

export function DisableOnBreakpoint() {
  const content = (
    <div style={{ background: 'rgb(207, 232, 252)' }}>
      <h2>Контент ограниченный layout`ом</h2>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta, nostrum!</p>
    </div>
  );

  return (
    <>
      <Layout>
        <h2>Отключение на определенных разрешениях</h2>
        <p>Необходимо изменить ширину окна для эффекта</p>
      </Layout>

      <Layout disabledOn={['mxs']}>{content}</Layout>
      <Layout disabledOn={['ms']}>{content}</Layout>
      <Layout disabledOn={['mm']}>{content}</Layout>
      <Layout disabledOn={['ml']}>{content}</Layout>
      <Layout disabledOn={['xs']}>{content}</Layout>
      <Layout disabledOn={['s']}>{content}</Layout>
      <Layout disabledOn={['m']}>{content}</Layout>
      <Layout disabledOn={['l']}>{content}</Layout>
      <Layout disabledOn={['xl']}>{content}</Layout>
    </>
  );
}

DisableOnBreakpoint.storyName = "Отключение не определённом breakpoint'е";

export function SmartBorders() {
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

SmartBorders.storyName = 'Умные границы';
