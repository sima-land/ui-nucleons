import { Box } from '@sima-land/ui-nucleons/box';

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
