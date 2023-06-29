import { Fragment } from 'react';
import { Box, BoxProps } from '..';

const testJustifyItems = [
  <Box padding={4} margin={4} key={1} color='additional-red'>
    First
  </Box>,
  <Box padding={4} margin={4} key={2} color='additional-green'>
    Second
  </Box>,
  <Box padding={4} margin={4} key={3} color='additional-light-blue'>
    Third
  </Box>,
];

const testAlignItems = [
  <Box
    padding={4}
    margin={4}
    key={1}
    color='additional-red'
    dangerouslySetInlineStyle={{ __style: { minHeight: 50 } }}
  >
    First
  </Box>,
  <Box
    padding={4}
    margin={4}
    key={2}
    color='additional-green'
    dangerouslySetInlineStyle={{ __style: { minHeight: 100 } }}
  >
    Second
  </Box>,
  <Box
    padding={4}
    margin={4}
    key={3}
    color='additional-light-blue'
    dangerouslySetInlineStyle={{ __style: { minHeight: 150 } }}
  >
    Third
  </Box>,
];

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

export default {
  title: 'deprecated/Box',
  component: Box,
  parameters: {
    layout: 'padded',
  },
};

export function Primary() {
  return <Box>Box without props is just a &quot;div&quot;</Box>;
}

Primary.storyName = 'Простой пример';

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

export function JustifyContent() {
  return (
    <>
      <h3>start</h3>
      <Box display='flex' justifyContent='start'>
        {testJustifyItems}
      </Box>

      <h3>end</h3>
      <Box display='flex' justifyContent='end'>
        {testJustifyItems}
      </Box>

      <h3>center</h3>
      <Box display='flex' justifyContent='center'>
        {testJustifyItems}
      </Box>

      <h3>space-between</h3>
      <Box display='flex' justifyContent='between'>
        {testJustifyItems}
      </Box>

      <h3>space-around</h3>
      <Box display='flex' justifyContent='around'>
        {testJustifyItems}
      </Box>
    </>
  );
}

JustifyContent.storyName = 'flex: Позиционирование контента по главной оси';

export function AlignItems() {
  const renderBox = (alignItems: BoxProps['alignItems']) => (
    <Box
      padding={2}
      display='flex'
      alignItems={alignItems}
      dangerouslySetInlineStyle={{ __style: { height: 240, border: '1px dashed #aaa' } }}
      children={testAlignItems}
    />
  );

  return (
    <>
      <h3>start</h3>
      {renderBox('start')}

      <h3>end</h3>
      {renderBox('end')}

      <h3>center</h3>
      {renderBox('center')}

      <h3>baseline</h3>
      {renderBox('baseline')}

      <h3>stretch</h3>
      {renderBox('stretch')}
    </>
  );
}

AlignItems.storyName = 'flex: Позиционирование контента перпендикулярно главной оси';

export function Direction() {
  return (
    <>
      <h3>row</h3>
      <Box display='flex' direction='row'>
        {testJustifyItems}
      </Box>

      <h3>column</h3>
      <Box display='flex' direction='column'>
        {testJustifyItems}
      </Box>
    </>
  );
}

Direction.storyName = 'flex: Определение главно оси';

export function FlexProp() {
  const renderBox = (flex: BoxProps['flex']) => (
    <Box
      margin={4}
      padding={4}
      display='flex'
      flex={flex}
      color='basic-gray24'
      children={`flex='${flex}'`}
    />
  );

  return (
    <>
      <h3>shrink</h3>
      <Box display='flex'>
        {testJustifyItems}
        {renderBox('shrink')}
      </Box>

      <h3>grow</h3>
      <Box display='flex'>
        {testJustifyItems}
        {renderBox('grow')}
      </Box>

      <h3>none</h3>
      <Box display='flex'>
        {testJustifyItems}
        {renderBox('none')}
      </Box>
    </>
  );
}

FlexProp.storyName = 'Свойство "display"';
