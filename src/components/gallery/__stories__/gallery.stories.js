import React, { Fragment } from 'react';
import { storiesOf } from '@storybook/react';
import Gallery from '../gallery';
import { items } from '../items';

storiesOf('Gallery', module)
  .add('Horizontal base gallery', () => (
    <Fragment>
      <h3>Horizontal gallery</h3>
      <div style={{ maxWidth: '60%', margin: '0 auto' }}>
        <Gallery
          items={items}
          itemContainer='img'
          controlContainer='button'
          getControlProps={type => ({ children: type === 'forward' ? 'вперед' : 'назад' })}
          needListenResize
          getItemProps={item => ({
            ...item,
            onLoad: () => { window.dispatchEvent(new Event('resize')); },
          })}
        />
      </div>
    </Fragment>
  ))
  .add('Vertical base gallery', () => (
    <Fragment>
      <h3>Vertical gallery</h3>
      <Gallery
        itemsContainerProps={{
          style: { height: '80vh', width: '140px' },
        }}
        direction='vertical'
        controlContainer='button'
        getControlProps={type => ({ children: type === 'forward' ? 'вперед' : 'назад' })}
        needListenResize
        items={items}
        itemContainer='img'
        getItemProps={item => ({
          ...item,
          onLoad: () => { window.dispatchEvent(new Event('resize')); },
        })}
      />
    </Fragment>
  ));
