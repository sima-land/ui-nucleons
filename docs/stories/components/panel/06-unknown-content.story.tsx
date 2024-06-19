import { Panel, PanelType } from '@sima-land/ui-nucleons/panel';
import { useState } from 'react';
import InfoSVG from '@sima-land/ui-quarks/icons/16x16/Stroked/Information';
import { Sandbox } from '#docs-utils';

export const meta = {
  category: 'Компоненты/Panel',
  title: 'HTML-содержимое',
};

const panelTypes: PanelType[] = ['info', 'error', 'success', 'warning'];

export default function UnknownContent() {
  const [type, setType] = useState<PanelType>(panelTypes[0]);

  const markup = `
      Lorem ipsum dolor sit, amet
      <a href='https://www.sima-land.ru'>consectetur</a>
      adipisicing elit. Dolore, aliquam. Mollitia?
    `;

  return (
    <Sandbox
      controls={[
        {
          type: 'select',
          label: 'Тип',
          bind: [type, setType],
          options: panelTypes,
        },
      ]}
    >
      <div style={{ width: 360, display: 'flex', gap: 20, flexDirection: 'column' }}>
        <Panel type={type} adornmentStart={<InfoSVG />}>
          <Panel.UnknownContent markup={markup} />
        </Panel>
      </div>
    </Sandbox>
  );
}
