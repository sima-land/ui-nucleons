import { Box } from '@sima-land/ui-nucleons/box';

export const meta = {
  category: 'Устаревшее/Box',
  title: 'flex: Позиционирование контента по главной оси',
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

export default function JustifyContent() {
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
