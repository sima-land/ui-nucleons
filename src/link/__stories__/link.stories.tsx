import { action } from '@storybook/addon-actions';
import React from 'react';
import { Link, LinkProps } from '..';

export default {
  title: 'common/Link',
  component: Link,
  parameters: {
    layout: 'padded',
  },
};

export const Primary = () => {
  const colors: Array<Required<LinkProps>['color']> = [
    'basic-blue',
    'basic-gray87',
    'basic-gray38',
  ];

  const onClick = () => action('click')(new Date());

  return (
    <>
      <div style={{ display: 'flex', fontSize: 18 }}>
        {colors.map(color => (
          <div key={color} style={{ marginRight: 48 }}>
            <Link href='https://ya.ru' color={color}>
              Ссылка
            </Link>

            <div style={{ marginBottom: 20 }} />

            <Link pseudo color={color} onClick={onClick}>
              Псевдо-ссылка
            </Link>

            <div style={{ marginBottom: 20 }} />

            <Link pseudo disabled color={color} onClick={onClick}>
              Псевдо-ссылка (disabled)
            </Link>
          </div>
        ))}
      </div>
    </>
  );
};
