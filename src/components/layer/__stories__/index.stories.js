import React, { Fragment, useState } from 'react';
import { storiesOf } from '@storybook/react';
import Button from '../../button';
import Layer from '../index';

storiesOf('Layer', module)
  .add('Usage', () => {
    const [isModalOpen, toggleModal] = useState();

    return (
      <Fragment>
        <Button size='small' onClick={() => toggleModal(true)}>Open modal</Button>
        {isModalOpen && (
          <Layer>
            <div
              style={{
                position: 'fixed',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                background: 'rgba(0, 0, 0, .2)',
              }}
            >
              <div style={{ width: 320, height: 240, background: '#fff', padding: 16 }}>
                <h2>Test modal </h2>
                <p>its rendered in new div, check DOM in dev tools...</p>
                <Button size='small' onClick={() => toggleModal(false)}>Close modal</Button>
              </div>
            </div>
          </Layer>
        )}
      </Fragment>
    );
  });
