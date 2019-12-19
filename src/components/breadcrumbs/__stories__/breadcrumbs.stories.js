import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import Breadcrumbs from '../breadcrumbs';
import items from '../items';

storiesOf('Breadcrumbs', module)
  .add('Breadcrumbs', () => (
    <div style={{ padding: '20px 0 0' }}>
      <Breadcrumbs
        items={items}
        onOpenBreadcrumbs={action('popup was opened')}
      />
    </div>
  ));
