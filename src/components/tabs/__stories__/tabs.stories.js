import React from 'react';
import Tabs from '../';

const items = [
  { name: 'Active', active: true },
  { name: 'Inactive' },
  { name: 'Inactive' },
  { name: 'Disabled', disabled: true },
];

const Template = args => (
  <div style={{ padding: '0 32px' }}>
    <p>Базовый вид</p>
    <Tabs {...args} />
    <br />
    <p>С узким зазором</p>
    <Tabs {...args} gapSize='s' />
    <br />
    {args.type !== 'round' && (
      <>
        <p>С подчеркиванием</p>
        <Tabs {...args} underline />
        <br />
      </>
    )}
    <p>На ширину контейнера</p>
    <Tabs {...args} stretch />
  </div>
);
export const TextView = Template.bind({});
export const RoundView = Template.bind({});

TextView.storyName = 'Текстовые табы';
TextView.args = {
  items,
  getItemName: ({ name }) => name,
};

RoundView.storyName = 'Табы-кнопки';
RoundView.args = {
  ...TextView.args,
  type: 'round',
};

export default {
  title: 'Tabs',
  component: Tabs,
};
