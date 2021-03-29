import { Story } from '@storybook/react';
import React from 'react';
import Tabs from '..';

const items = [
  { name: 'Active', active: true },
  { name: 'Inactive' },
  { name: 'Inactive' },
  { name: 'Disabled', disabled: true },
];

const Template: Story<any> = props => (
  <>
    <p>Базовый вид</p>
    <Tabs {...props} />
    <br />

    <p>С узким зазором</p>
    <Tabs {...props} gapSize='s' />
    <br />

    {props.type !== 'round' && (
      <>
        <p>С подчеркиванием</p>
        <Tabs {...props} underline />
        <br />
      </>
    )}

    <p>На ширину контейнера</p>
    <Tabs {...props} stretch />
  </>
);

export default {
  title: 'Tabs',
  component: Tabs,
  parameters: {
    layout: 'padded',
  },
};

export const Primary = Template.bind(null, {
  items,
  getItemName: ({ name }: { name: any }) => name,
});

export const RoundView = Template.bind(null, {
  view: 'round',
  items,
  getItemName: ({ name }: { name: any }) => name,
});
