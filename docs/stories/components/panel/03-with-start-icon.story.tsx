import { Panel } from '@sima-land/ui-nucleons/panel';
import InfoSVG from '@sima-land/ui-quarks/icons/16x16/Stroked/Information';

export const meta = {
  category: 'Компоненты/Panel',
  title: 'Иконка в начале',
  parameters: {
    layout: 'padded',
  },
};

export default function WithStartIcon() {
  const style = { width: '360px', marginBottom: '12px' };

  return (
    <>
      <Panel style={style} type='info' adornmentStart={<InfoSVG />}>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nemo, unde. Minus aut saepe
        voluptatum et.
      </Panel>
      <Panel style={style} type='error' adornmentStart={<InfoSVG />}>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nemo, unde. Minus aut saepe
        voluptatum et.
      </Panel>
      <Panel style={style} type='success' adornmentStart={<InfoSVG />}>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nemo, unde. Minus aut saepe
        voluptatum et.
      </Panel>
      <Panel style={style} type='warning' adornmentStart={<InfoSVG />}>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nemo, unde. Minus aut saepe
        voluptatum et.
      </Panel>
    </>
  );
}
