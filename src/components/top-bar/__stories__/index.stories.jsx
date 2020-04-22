import React, { Fragment } from 'react';
import { storiesOf } from '@storybook/react';
import TopBar from '../index';
import { sizes, shortTitles, longTitles, allIcons, startIcons, endIcons } from '../__test__/props.jsx';

const propsList = [
  ...sizes.map(size => ({ size, ...shortTitles })),
  ...sizes.map(size => ({ size, ...longTitles })),

  // with start icon
  ...sizes.map(size => ({ size, ...shortTitles, startIcon: allIcons.startIcon })),
  ...sizes.map(size => ({ size, ...longTitles, startIcon: allIcons.startIcon })),

  // with end icon
  ...sizes.map(size => ({ size, ...shortTitles, endIcon: allIcons.endIcon })),
  ...sizes.map(size => ({ size, ...longTitles, endIcon: allIcons.endIcon })),

  // with start icons
  ...sizes.map(size => ({ size, ...shortTitles, ...startIcons })),
  ...sizes.map(size => ({ size, ...longTitles, ...startIcons })),

  // with end icons
  ...sizes.map(size => ({ size, ...shortTitles, ...endIcons })),
  ...sizes.map(size => ({ size, ...longTitles, ...endIcons })),

  // with icons on both sides
  ...sizes.map(size => ({ size, ...shortTitles, startIcon: allIcons.startIcon, endIcon: allIcons.endIcon })),
  ...sizes.map(size => ({ size, ...longTitles, startIcon: allIcons.startIcon, endIcon: allIcons.endIcon })),

  // with secondary icons on both sides
  ...sizes.map(size => ({ size, ...shortTitles, ...allIcons })),
  ...sizes.map(size => ({ size, ...longTitles, ...allIcons })),
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
