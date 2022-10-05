import { action } from '@storybook/addon-actions';
import React, { CSSProperties } from 'react';
import { Link, LinkProps } from '..';

export default {
  title: 'common/Link',
  component: Link,
  parameters: {
    layout: 'padded',
  },
};

export function Primary() {
  const colors: Array<Required<LinkProps>['color']> = [
    'basic-blue',
    'basic-gray87',
    'basic-gray38',
    'basic-white',
  ];

  function onClick() {
    action('click')(new Date());
  }

  const styles: Record<'root' | 'item', CSSProperties> = {
    root: {
      display: 'flex',
      fontSize: 16,
    },
    item: {
      display: 'flex',
      flexDirection: 'column',
      gap: 16,
      padding: 20,
    },
  };

  return (
    <div style={styles.root}>
      {colors.map(color => (
        <div
          key={color}
          style={{
            ...styles.item,
            background: color === 'basic-white' ? '#000' : '#fff',
          }}
        >
          <Link color={color} href='https://ya.ru'>
            Ссылка
          </Link>

          <Link color={color} pseudo onClick={onClick}>
            Псевдо-ссылка
          </Link>

          <Link color={color} pseudo disabled onClick={onClick}>
            Псевдо-ссылка (disabled)
          </Link>
        </div>
      ))}
    </div>
  );
}

Primary.storyName = 'Простой пример';
