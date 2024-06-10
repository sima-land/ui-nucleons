import { Box } from '@sima-land/ui-nucleons/box';

export const meta = {
  category: 'Устаревшее/Box',
  title: 'flex: Определение главно оси',
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

export default function Direction() {
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
