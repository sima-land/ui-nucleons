import { Box, BoxProps } from '@sima-land/ui-nucleons/box';

export default {
  title: 'deprecated/Box',
  component: Box,
  parameters: {
    layout: 'padded',
  },
};

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
