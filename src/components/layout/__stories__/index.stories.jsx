import React from 'react';
import { storiesOf } from '@storybook/react';
import { DesktopLayout, MobileLayout } from '..';

const DemoContent = () => (
  <div style={{ background: 'rgb(207, 232, 252)' }}>
    <h2>Контент ограниченный layout`ом</h2>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta, nostrum!</p>
  </div>
);

storiesOf('Layouts', module)
  .add('Desktop', () => (
    <>
      <h2>Простой пример</h2>
      <DesktopLayout>
        <DemoContent />
      </DesktopLayout>

      <h2>Отключение на определенных разрешениях</h2>
      <p>Необходимо изменить ширину окна для эффекта</p>
      <DesktopLayout disabledOn={['mxs', 'ms', 'mm', 'ml', 'mxl', 'xs']}>
        <DemoContent />
      </DesktopLayout>
      <DesktopLayout disabledOn={['s']}>
        <DemoContent />
      </DesktopLayout>
      <DesktopLayout disabledOn={['m']}>
        <DemoContent />
      </DesktopLayout>
      <DesktopLayout disabledOn={['l']}>
        <DemoContent />
      </DesktopLayout>
      <DesktopLayout disabledOn={['xl']}>
        <DemoContent />
      </DesktopLayout>
    </>
  ))
  .add('Mobile', () => (
    <>
      <h2>Простой пример</h2>
      <MobileLayout>
        <DemoContent />
      </MobileLayout>

      <h2>Отключение на определенных точках</h2>
      <p>Необходимо изменить ширину окна для эффекта</p>
      <MobileLayout disabledOn={['mxs']}>
        <DemoContent />
      </MobileLayout>
      <MobileLayout disabledOn={['ms']}>
        <DemoContent />
      </MobileLayout>
      <MobileLayout disabledOn={['mm']}>
        <DemoContent />
      </MobileLayout>
      <MobileLayout disabledOn={['ml']}>
        <DemoContent />
      </MobileLayout>
      <MobileLayout disabledOn={['xs', 's', 'm', 'l', 'xl']}>
        <DemoContent />
      </MobileLayout>
    </>
  ));
