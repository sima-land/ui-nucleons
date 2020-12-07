import React from 'react';
import { storiesOf } from '@storybook/react';
import { DesktopLayout, MobileLayout } from '..';

storiesOf('Layouts', module)
  .add('Desktop', () => (
    <>
      <DesktopLayout>
        <div style={{ background: 'rgb(207, 232, 252)' }}>
          <h2>Контент ограниченный layout`ом</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta, nostrum!</p>
        </div>
      </DesktopLayout>
    </>
  ))
  .add('Mobile', () => (
    <>
      <MobileLayout>
        <div style={{ background: 'rgb(207, 232, 252)' }}>
          <h2>Контент ограниченный layout`ом</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta, nostrum!</p>
        </div>
      </MobileLayout>
    </>
  ));
