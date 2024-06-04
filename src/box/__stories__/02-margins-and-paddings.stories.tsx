import { Box } from '@sima-land/ui-nucleons/box';
import { Fragment } from 'react';

export default {
  title: 'deprecated/Box',
  component: Box,
  parameters: {
    layout: 'padded',
  },
};

const testMarginPropsList = [
  { margin: 2 },
  { marginX: 2 },
  { marginY: 2 },
  { marginTop: 2 },
  { marginBottom: 2 },
  { marginLeft: 2 },
  { marginRight: 2 },
  { margin: 2, marginRight: 8 },
];

const testPaddingPropsList = [
  { padding: 2 },
  { paddingX: 2 },
  { paddingY: 2 },
  { paddingTop: 2 },
  { paddingBottom: 2 },
  { paddingLeft: 2 },
  { paddingRight: 2 },
  { padding: 2, paddingLeft: 8 },
];

export function MarginsAndPaddings() {
  return (
    <div style={{ width: 320 }}>
      <h2>Margin</h2>
      {testMarginPropsList.map((marginProps, index) => (
        <Fragment key={index}>
          <Box display='flex' color='additional-amber'>
            <Box flex='grow' color='basic-white' padding={2} {...marginProps}>
              {JSON.stringify(marginProps, null, 2)}
            </Box>
          </Box>
          <div style={{ height: 32 }} />
        </Fragment>
      ))}

      <h2>Padding</h2>
      {testPaddingPropsList.map((paddingProps, index) => (
        <Fragment key={index}>
          <Box display='flex' color='additional-lime' {...paddingProps}>
            <Box flex='grow' color='basic-white' padding={2}>
              {JSON.stringify(paddingProps, null, 2)}
            </Box>
          </Box>
          <div style={{ height: 32 }} />
        </Fragment>
      ))}
    </div>
  );
}

MarginsAndPaddings.storyName = 'Внутренние и внешние отступы';
