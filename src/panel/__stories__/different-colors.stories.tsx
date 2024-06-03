import { Panel } from '@sima-land/ui-nucleons/panel';

export default {
  title: 'common/Panel',
  component: Panel,
  parameters: {
    layout: 'padded',
  },
};

export function DifferentColors() {
  const style = { width: '320px', marginBottom: '12px' };

  return (
    <>
      <Panel style={style} type='info'>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nemo, unde. Minus aut saepe
        voluptatum et.
      </Panel>
      <Panel style={style} type='error'>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nemo, unde. Minus aut saepe
        voluptatum et.
      </Panel>
      <Panel style={style} type='success'>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nemo, unde. Minus aut saepe
        voluptatum et.
      </Panel>
      <Panel style={style} type='warning'>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nemo, unde. Minus aut saepe
        voluptatum et.
      </Panel>
    </>
  );
}

DifferentColors.storyName = 'Различные цвета';
