import { Panel } from '@sima-land/ui-nucleons/panel';

export const meta = {
  category: 'Компоненты/Panel',
  title: 'Простой пример',
};

export default function Primary() {
  const style = { width: '320px' };

  return (
    <Panel style={style}>
      Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nemo, unde. Minus aut saepe
      voluptatum et.
    </Panel>
  );
}
