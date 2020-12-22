import React, { Fragment } from 'react';
import { storiesOf } from '@storybook/react';
import { badges } from './items';
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

      <h3>Шильдики с иконками:</h3>
      <Badge
        isIconOnly
        bgColor='gold'
        fields={[
          {
            type: 'svg',
            value: 'https://static2.static1-sima-land.com/img/badges/dolphin.svg',
          },
        ]}
      />
      &nbsp;
      <Badge
        isIconOnly
        fields={[
          {
            type: 'icon',
            value: 'https://static2.static1-sima-land.com/favicon/favicon-32x32.png',
          },
        ]}
      />

      <h3>Шильдик с разноцветными полями:</h3>
      <Badge
        bgColor='gold'
        textColor='#000'
        fields={[
          {
            type: 'text',
            value: 'До начала 2077 осталось',
          },
          {
            type: 'timer',
            value: '2077-01-01 00:00:00+05',
            format: 'd:h:m:s',
            color: '#000',
          },
          ...['red', 'green', 'blue'].map(color => ({
            type: 'text',
            value: color,
            color,
          })),
        ]}
      />
      <br />
      <Badge
        bgColor='#0091EA'
        textColor='#fff'
        fields={[
          {
            type: 'text',
            value: '-10%',
          },
          {
            type: 'timer',
            value: '2077-01-01 00:00:00+05',
            format: 'd:h:m:s',
            color: 'red',
          },
          {
            type: 'text',
            value: '— Специальные цены на музыкальные игрушки',
          },
        ]}
      />
    </Fragment>
  ));
