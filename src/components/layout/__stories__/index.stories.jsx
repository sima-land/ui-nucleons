import React from 'react';
import { storiesOf } from '@storybook/react';
import { DesktopLayout, MobileLayout } from '..';

storiesOf('Layouts', module)
  .add('Desktop', () => (
    <>
      <h1>Простой пример</h1>
      <DesktopLayout>
        <div style={{ background: 'rgb(207, 232, 252)' }}>
          <h2>Контент ограниченный layout`ом</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta, nostrum!</p>
        </div>
      </DesktopLayout>

      <h1>Отключение на определенных разрешениях</h1>
      <DesktopLayout disabledOn={['lg', 'md', 'sm', 'xs', 'xxs']}>
        <div style={{ background: 'rgb(207, 232, 252)' }}>
          <h2>Контент ограниченный layout`ом</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta, nostrum!</p>
        </div>
      </DesktopLayout>
      <DesktopLayout disabledOn={['xl']}>
        <div style={{ background: 'rgb(207, 232, 252)' }}>
          <h2>Контент ограниченный layout`ом</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta, nostrum!</p>
        </div>
      </DesktopLayout>
      <DesktopLayout disabledOn={['xxl']}>
        <div style={{ background: 'rgb(207, 232, 252)' }}>
          <h2>Контент ограниченный layout`ом</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta, nostrum!</p>
        </div>
      </DesktopLayout>
      <DesktopLayout disabledOn={['max']}>
        <div style={{ background: 'rgb(207, 232, 252)' }}>
          <h2>Контент ограниченный layout`ом</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta, nostrum!</p>
        </div>
      </DesktopLayout>
    </>
  ))
  .add('Mobile', () => (
    <>
      <h1>Простой пример</h1>
      <MobileLayout>
        <div style={{ background: 'rgb(207, 232, 252)' }}>
          <h2>Контент ограниченный layout`ом</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta, nostrum!</p>
        </div>
      </MobileLayout>

      <h1>Отключение на определенных разрешениях</h1>
      <MobileLayout disabledOn={['xxs']}>
        <div style={{ background: 'rgb(207, 232, 252)' }}>
          <h2>Контент ограниченный layout`ом</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta, nostrum!</p>
        </div>
      </MobileLayout>
      <MobileLayout disabledOn={['xs']}>
        <div style={{ background: 'rgb(207, 232, 252)' }}>
          <h2>Контент ограниченный layout`ом</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta, nostrum!</p>
        </div>
      </MobileLayout>
      <MobileLayout disabledOn={['sm']}>
        <div style={{ background: 'rgb(207, 232, 252)' }}>
          <h2>Контент ограниченный layout`ом</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta, nostrum!</p>
        </div>
      </MobileLayout>
      <MobileLayout disabledOn={['md', 'lg', 'xl', 'xxl', 'max']}>
        <div style={{ background: 'rgb(207, 232, 252)' }}>
          <h2>Контент ограниченный layout`ом</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta, nostrum!</p>
        </div>
      </MobileLayout>
    </>
  ));
