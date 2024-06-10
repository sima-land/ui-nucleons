import { Box, BoxProps } from '@sima-land/ui-nucleons/box';

export const meta = {
  category: 'Устаревшее/Box',
  title: 'Свойство "display"',
  parameters: {
    layout: 'padded',
  },
};

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

export default function DisplayProp() {
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
