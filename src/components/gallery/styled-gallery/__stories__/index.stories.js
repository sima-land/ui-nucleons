import React, { Fragment } from 'react';
import { storiesOf } from '@storybook/react';
import StyledGallery from '../index';
import { items } from '../../items';

storiesOf('Gallery/StyledGallery', module)
  .add('Horizontal gallery', () => (
    <Fragment>
      <h3>Horizontal gallery</h3>
      <div style={{ maxWidth: '60%', margin: '0 auto' }}>
        <StyledGallery
          slideStepSize={64}
          direction='horizontal'
          items={items}
          itemContainer='img'
          getItemProps={item => ({
            ...item,
            onLoad: () => { window.dispatchEvent(new Event('resize')); },
          })}
        />
      </div>
    </Fragment>
  ))
  .add('Vertical gallery', () => (
    <Fragment>
      <h3>Vertical gallery</h3>
      <StyledGallery
        itemsContainerProps={{
          style: { height: '80vh', width: '140px' },
        }}
        slideStepSize={64}
        direction='vertical'
        items={items}
        itemContainer='img'
        getItemProps={item => ({
          ...item,
          onLoad: () => { window.dispatchEvent(new Event('resize')); },
        })}
      />
    </Fragment>
  ));
