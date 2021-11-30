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

const Template = ({ tabsProps }: { tabsProps: TabsProps }) => {
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
      <Tabs {...tabsProps}>{renderItems()}</Tabs>

      <h4>С узким зазором</h4>
      <Tabs {...tabsProps} gapSize='s'>
        {renderItems()}
      </Tabs>

      <h4>На ширину контейнера</h4>
      <Tabs {...tabsProps} stretch>
        {renderItems()}
      </Tabs>
    </>
  );
};

export const CleanView = () => <Template tabsProps={{ view: 'clean' }} />;

export const CleanUnderlineView = () => <Template tabsProps={{ view: 'clean-underline' }} />;

export const RoundView = () => <Template tabsProps={{ view: 'round' }} />;
