import { Panel } from '@sima-land/ui-nucleons/panel';
import InfoSVG from '@sima-land/ui-quarks/icons/16x16/Stroked/Information';

export const meta = {
  category: 'Компоненты/Panel',
  title: 'Иконка в конце',
};

export default function WithEndIcon() {
  const style = {
    width: '360px',
    marginBottom: '12px',
  };

  return (
    <>
      <Panel style={style} type='info' adornmentEnd={<InfoSVG />}>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nemo, unde. Minus aut saepe
        voluptatum et.
      </Panel>

      <Panel style={style} type='error' adornmentEnd={<InfoSVG />}>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nemo, unde. Minus aut saepe
        voluptatum et.
      </Panel>

      <Panel style={style} type='success' adornmentEnd={<InfoSVG />}>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nemo, unde. Minus aut saepe
        voluptatum et.
      </Panel>

      <Panel style={style} type='warning' adornmentEnd={<InfoSVG />}>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nemo, unde. Minus aut saepe
        voluptatum et.
      </Panel>
    </>
  );
}
