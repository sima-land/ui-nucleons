import React from 'react';
import { Layout } from '..';

export default {
  title: 'common/Layout',
  component: Layout,
  parameters: {
    layout: 'fullscreen',
  },
};

const SomeContent = () => (
  <div style={{ background: 'rgb(207, 232, 252)' }}>
    <h2>Контент ограниченный layout`ом</h2>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta, nostrum!</p>
  </div>
);

export function Primary() {
  return (
    <>
      <Layout>
        <h2>Простой пример</h2>
      </Layout>

      <Layout>
        <SomeContent />
      </Layout>
    </>
  );
}

Primary.storyName = 'Простой пример';

export function DisableOnBreakpoint() {
  return (
    <>
      <Layout>
        <h2>Отключение на определенных разрешениях</h2>
        <p>Необходимо изменить ширину окна для эффекта</p>
      </Layout>

      <Layout disabledOn={['mxs']}>
        <SomeContent />
      </Layout>
      <Layout disabledOn={['ms']}>
        <SomeContent />
      </Layout>
      <Layout disabledOn={['mm']}>
        <SomeContent />
      </Layout>
      <Layout disabledOn={['ml']}>
        <SomeContent />
      </Layout>
      <Layout disabledOn={['xs']}>
        <SomeContent />
      </Layout>
      <Layout disabledOn={['s']}>
        <SomeContent />
      </Layout>
      <Layout disabledOn={['m']}>
        <SomeContent />
      </Layout>
      <Layout disabledOn={['l']}>
        <SomeContent />
      </Layout>
      <Layout disabledOn={['xl']}>
        <SomeContent />
      </Layout>
    </>
  );
}

DisableOnBreakpoint.storyName = "Отключение не определённом breakpoint'е";
