import React, { Fragment } from 'react';
import { storiesOf } from '@storybook/react';
import { badges as badges } from './items';
import Badge from '../index';

storiesOf('Badge', module)
  .add('default', () => (
    <Fragment>
      <h3>Шильдик по умолчанию:</h3>
      <Badge
        fields={[
          {
            type: 'text',
            value: 'Дефолтный шильдик',
          },
        ]}
      />

      <h3>Шильдик с прозрачным фоном:</h3>
      <Badge
        bgColor='transparent'
        strokeColor='transparent'
        textColor='#ff0000'
        fields={[
          {
            type: 'text',
            value: 'Дефолтный шильдик',
          },
        ]}
      />

      <h3>Шильдики в узком блоке с кастомными стилями:</h3>
      <div style={{
        width: '200px',
        background: '#e1e1e1',
        display: 'flex',
        justifyContent: 'flex-start',
        alignItems: 'center',
        flexWrap: 'wrap',
      }}
      >
        {badges.map((badgeProps, index) => (
          <Badge
            {...badgeProps}
            containerProps={{
              className: 'badge',
              style: {
                margin: '2px',
                maxWidth: 'calc(100% - 4px)',
              },
            }}
            key={index}
          />
        ))}
      </div>
    </Fragment>
  ));
