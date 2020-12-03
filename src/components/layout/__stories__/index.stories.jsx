import React from 'react';
import { storiesOf } from '@storybook/react';
import Layout from '..';

storiesOf('Layout [new]', module)
  .add('Example', () => (
    <>
      <h1>Простой пример</h1>
      <Layout>
        <div style={{ background: 'rgb(207, 232, 252)' }}>
          <h2>Контент ограниченный layout`ом</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta, nostrum!</p>
        </div>
      </Layout>
    </>
  ));
