import { Toggle } from '@sima-land/ui-nucleons/toggle';

export default {
  title: 'common/Toggle',
  component: Toggle,
  parameters: {
    layout: 'padded',
  },
};

export function Primary() {
  return (
    <>
      <Toggle defaultChecked />
    </>
  );
}

Primary.storyName = 'Простой пример';
