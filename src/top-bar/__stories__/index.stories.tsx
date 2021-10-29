import React, { Fragment } from 'react';
import { TopBar } from '..';
import {
  sizes,
  shortTitles,
  longTitles,
  allButtons,
  startButtons,
  endButtons,
} from '../__test__/test-props';

const propsList = [
  ...sizes.map(size => ({ size, ...shortTitles })),
  ...sizes.map(size => ({ size, ...longTitles })),

  // start icon
  ...sizes.map(size => ({ size, ...shortTitles, buttonsProps: { start: allButtons.start } })),
  ...sizes.map(size => ({ size, ...longTitles, buttonsProps: { start: allButtons.start } })),

  // end icon
  ...sizes.map(size => ({ size, ...shortTitles, buttonsProps: { end: allButtons.end } })),
  ...sizes.map(size => ({ size, ...longTitles, buttonsProps: { end: allButtons.end } })),

  // start icons
  ...sizes.map(size => ({ size, ...shortTitles, buttonsProps: startButtons })),
  ...sizes.map(size => ({ size, ...longTitles, buttonsProps: startButtons })),

  // end icons
  ...sizes.map(size => ({ size, ...shortTitles, buttonsProps: endButtons })),
  ...sizes.map(size => ({ size, ...longTitles, buttonsProps: endButtons })),

  // primary icons on both sides
  ...sizes.map(size => ({
    size,
    ...shortTitles,
    buttonsProps: { start: allButtons.start, end: allButtons.end },
  })),
  ...sizes.map(size => ({
    size,
    ...longTitles,
    buttonsProps: { start: allButtons.start, end: allButtons.end },
  })),

  // secondary icons on both sides
  ...sizes.map(size => ({ size, ...shortTitles, buttonsProps: allButtons })),
  ...sizes.map(size => ({ size, ...longTitles, buttonsProps: allButtons })),
];

export default {
  title: 'desktop/TopBar',
  component: TopBar,
  parameters: {
    layout: 'padded',
    backgrounds: { default: 'custom:gray' },
  },
};

export const Primary = () => (
  <>
    {propsList.map((props, index) => (
      <div key={index} style={{ maxWidth: '720px', margin: '0 auto 32px' }}>
        <TopBar {...(props as any)} />
      </div>
    ))}
  </>
);
