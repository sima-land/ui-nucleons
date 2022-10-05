import React, { useState } from 'react';
import { Tabs, TabsProps, TabsItemProps } from '..';

const items: TabsItemProps[] = [
  { name: 'First' },
  { name: 'Second' },
  { name: 'Disabled', disabled: true },
  { name: 'Last' },
];

export default {
  title: 'common/Tabs',
  component: Tabs,
  parameters: {
    layout: 'padded',
  },
};

function Template(props: TabsProps) {
  const [current, setCurrent] = useState<number>(0);

  const renderItems = () =>
    items.map((item, index) => (
      <Tabs.Item
        key={index}
        {...item}
        selected={index === current}
        onClick={() => setCurrent(index)}
      />
    ));

  return (
    <>
      <h4>Базовый вид</h4>
      <Tabs {...props}>{renderItems()}</Tabs>

      <h4>С узким зазором</h4>
      <Tabs {...props} gapSize='s'>
        {renderItems()}
      </Tabs>

      <h4>На ширину контейнера</h4>
      <Tabs {...props} stretch>
        {renderItems()}
      </Tabs>
    </>
  );
}

export function CleanView() {
  return <Template view='clean' />;
}

CleanView.storyName = 'Вид: clean';

export function CleanUnderlineView() {
  return <Template view='clean-underline' />;
}

CleanUnderlineView.storyName = 'Вид: clean-underline';

export function RoundView() {
  return <Template view='round' />;
}

RoundView.storyName = 'Вид: round';
