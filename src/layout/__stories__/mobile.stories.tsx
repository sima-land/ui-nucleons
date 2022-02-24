import React from 'react';
import { MobileLayout } from '..';

export default {
  title: 'Layouts/MobileLayout',
  component: MobileLayout,
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

export const Primary = () => (
  <>
    <MobileLayout>
      <h2>Простой пример</h2>
    </MobileLayout>

    <MobileLayout>
      <SomeContent />
    </MobileLayout>
  </>
);

Primary.storyName = 'Простой пример';

export const DisableOnBreakpoint = () => (
  <>
    <MobileLayout>
      <h2>Отключение на определенных разрешениях</h2>
      <p>Необходимо изменить ширину окна для эффекта</p>
    </MobileLayout>

    <MobileLayout disabledOn={['mxs', 'ms', 'mm', 'ml', 'xs']}>
      <SomeContent />
    </MobileLayout>
    <MobileLayout disabledOn={['s']}>
      <SomeContent />
    </MobileLayout>
    <MobileLayout disabledOn={['m']}>
      <SomeContent />
    </MobileLayout>
    <MobileLayout disabledOn={['l']}>
      <SomeContent />
    </MobileLayout>
    <MobileLayout disabledOn={['xl']}>
      <SomeContent />
    </MobileLayout>
  </>
);

DisableOnBreakpoint.storyName = "Отключение не определённом breakpoint'е";
