import { Panel } from '@sima-land/ui-nucleons/panel';
import InfoSVG from '@sima-land/ui-quarks/icons/16x16/Stroked/Information';

export default {
  title: 'common/Panel',
  component: Panel,
  parameters: {
    layout: 'padded',
  },
};

export function WithStartIcon() {
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

WithStartIcon.storyName = 'Иконка в начале';
