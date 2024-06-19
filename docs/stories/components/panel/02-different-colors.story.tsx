import { Panel } from '@sima-land/ui-nucleons/panel';

export const meta = {
  category: 'Компоненты/Panel',
  title: 'Различные цвета',
};

export default function DifferentColors() {
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
