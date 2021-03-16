import React from 'react';
import { DesktopLayout } from '..';

export default {
  title: 'Layouts/DesktopLayout',
  component: DesktopLayout,
  parameters: {
    layout: 'fullscreen',
  },
};

export const Primary = () => {
  const Content = () => (
    <div style={{ background: 'rgb(207, 232, 252)' }}>
      <h2>Контент ограниченный layout`ом</h2>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta, nostrum!</p>
    </div>
  );

  return (
    <>
      <h2>Простой пример</h2>
      <DesktopLayout>
        <Content />
      </DesktopLayout>

      <h2>Отключение на определенных разрешениях</h2>
      <p>Необходимо изменить ширину окна для эффекта</p>
      <DesktopLayout disabledOn={['mxs', 'ms', 'mm', 'ml', 'xs']}>
        <Content />
      </DesktopLayout>
      <DesktopLayout disabledOn={['s']}>
        <Content />
      </DesktopLayout>
      <DesktopLayout disabledOn={['m']}>
        <Content />
      </DesktopLayout>
      <DesktopLayout disabledOn={['l']}>
        <Content />
      </DesktopLayout>
      <DesktopLayout disabledOn={['xl']}>
        <Content />
      </DesktopLayout>
    </>
  );
};
