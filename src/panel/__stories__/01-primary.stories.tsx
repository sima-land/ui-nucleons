import { Panel } from '@sima-land/ui-nucleons/panel';

export default {
  title: 'common/Panel',
  component: Panel,
  parameters: {
    layout: 'padded',
  },
};

export function Primary() {
  const style = { width: '320px' };

  return (
    <Panel style={style}>
      Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nemo, unde. Minus aut saepe
      voluptatum et.
    </Panel>
  );
}

Primary.storyName = 'Простой пример';
