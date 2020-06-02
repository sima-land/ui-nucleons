import React, { Fragment } from 'react';
import { storiesOf } from '@storybook/react';
import TopBar from '../index';
import { sizes, shortTitles, longTitles, allButtons, startButtons, endButtons } from '../__test__/props.jsx';

const propsList = [
  ...sizes.map(size => ({ size, ...shortTitles })),
  ...sizes.map(size => ({ size, ...longTitles })),

  // with start icon
  ...sizes.map(size => ({ size, ...shortTitles, buttonsProps: { start: allButtons.start } })),
  ...sizes.map(size => ({ size, ...longTitles, buttonsProps: { start: allButtons.start } })),

  // with end icon
  ...sizes.map(size => ({ size, ...shortTitles, buttonsProps: { end: allButtons.end } })),
  ...sizes.map(size => ({ size, ...longTitles, buttonsProps: { end: allButtons.end } })),

  // with start icons
  ...sizes.map(size => ({ size, ...shortTitles, buttonsProps: startButtons })),
  ...sizes.map(size => ({ size, ...longTitles, buttonsProps: startButtons })),

  // with end icons
  ...sizes.map(size => ({ size, ...shortTitles, buttonsProps: endButtons })),
  ...sizes.map(size => ({ size, ...longTitles, buttonsProps: endButtons })),

  // with icons on both sides
  ...sizes.map(size => ({ size, ...shortTitles, buttonsProps: { start: allButtons.start, end: allButtons.end } })),
  ...sizes.map(size => ({ size, ...longTitles, buttonsProps: { start: allButtons.start, end: allButtons.end } })),

  // with secondary icons on both sides
  ...sizes.map(size => ({ size, ...shortTitles, buttonsProps: allButtons })),
  ...sizes.map(size => ({ size, ...longTitles, buttonsProps: allButtons })),
];

storiesOf('TopBar', module)
  .add('Variants', () => (
    <div style={{ background: '#aaa', padding: 32 }}>
      {propsList.map((props, index) => (
        <Fragment key={index}>
          <TopBar {...props} />
          <div style={{ height: 32 }} />
        </Fragment>
      ))}
    </div>
  ));
