import { Checkbox } from '@sima-land/ui-nucleons/checkbox';

export default {
  title: 'common/Checkbox',
  component: Checkbox,
  parameters: {
    layout: 'padded',
  },
};

export function Primary() {
  return (
    <>
      <Checkbox defaultChecked />
    </>
  );
}

Primary.storyName = 'Простой пример';
