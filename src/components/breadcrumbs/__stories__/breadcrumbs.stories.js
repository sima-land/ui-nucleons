import React from 'react';
import { storiesOf } from '@storybook/react';
import Breadcrumbs from '../breadcrumbs';

const items = [
  {
    name: 'Root',
    url: '/root_path',
  },
  {
    name: 'First Level',
    url: '/first_level_path',
    isActive: false,
    items: [
      {
        name: 'First Level Previous Sibling',
        url: '/first_level_previous_sibling_path',
        isActive: false,
      },
      {
        name: 'First Level',
        url: '/first_level_path',
        isActive: true,
      },
      {
        name: 'First Level Next Sibling',
        url: '/first_level_next_sibling_path',
        isActive: false,
      },
      {
        name: 'First Level Next Sibling',
        url: '/first_level_next_sibling_path',
        isActive: false,
      },
      {
        name: 'First Level Next Sibling',
        url: '/first_level_next_sibling_path',
        isActive: false,
      },
      {
        name: 'First Level Next Sibling',
        url: '/first_level_next_sibling_path',
        isActive: false,
      },
      {
        name: 'First Level Next Sibling',
        url: '/first_level_next_sibling_path',
        isActive: false,
      },
    ],
  },
  {
    name: 'Second Level',
    url: '/second_level_path',
    isActive: false,
    items: [
      {
        name: 'Second Level Previous Sibling',
        url: '/second_level_previous_sibling_path',
        isActive: false,
      },
      {
        name: 'Second Level',
        url: '/second_level_path',
        isActive: true,
      },
    ],
  },
  {
    name: 'Third Level',
    url: '/third_level_path',
    isActive: true,
    items: [
      {
        name: 'Third Level',
        url: '/third_level_path',
        isActive: true,
      },
      {
        name: 'Third Level Next Sibling',
        url: '/third_level_next_sibling_path',
        isActive: false,
      },
    ],
  },
];

storiesOf('Breadcrumbs', module)
  .add('Breadcrumbs', () => (
    <div style={{ padding: '20px 0 0' }}>
      <Breadcrumbs items={items} />
    </div>
  ));
