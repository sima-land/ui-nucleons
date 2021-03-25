import React from 'react';
import { MobileLayout } from '..';

export default {
  title: 'Layouts/MobileLayout',
  component: MobileLayout,
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
      <MobileLayout>
        <Content />
      </MobileLayout>

      <h2>Отключение на определенных точках</h2>
      <p>Необходимо изменить ширину окна для эффекта</p>
      <MobileLayout disabledOn={['mxs']}>
        <Content />
      </MobileLayout>
      <MobileLayout disabledOn={['ms']}>
        <Content />
      </MobileLayout>
      <MobileLayout disabledOn={['mm']}>
        <Content />
      </MobileLayout>
      <MobileLayout disabledOn={['ml']}>
        <Content />
      </MobileLayout>
      <MobileLayout disabledOn={['xs', 's', 'm', 'l', 'xl']}>
        <Content />
      </MobileLayout>
    </>
  );
};
