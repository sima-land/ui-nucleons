import { Panel, PanelType, LINK_COLOR_BY_TYPE } from '@sima-land/ui-nucleons/panel';
import { useState } from 'react';
import { Link } from '@sima-land/ui-nucleons/link';
import InfoSVG from '@sima-land/ui-quarks/icons/16x16/Stroked/Information';
import LockSVG from '@sima-land/ui-quarks/icons/16x16/Stroked/Lock';
import { Sandbox } from '../../../.storybook/utils';

export default {
  title: 'common/Panel',
  component: Panel,
  parameters: {
    layout: 'padded',
  },
};

const panelTypes: PanelType[] = ['info', 'error', 'success', 'warning'];

export function JsxContent() {
  const [type, setType] = useState<PanelType>(panelTypes[0]);

  const content = (
    <>
      Lorem ipsum dolor sit, amet{' '}
      <Link color={LINK_COLOR_BY_TYPE[type]} underline href='https://www.sima-land.ru'>
        consectetur
      </Link>{' '}
      adipisicing elit. Dolore, aliquam. Mollitia?
    </>
  );

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
        <Panel type={type}>{content}</Panel>

        <Panel type={type} adornmentStart={<InfoSVG />}>
          {content}
        </Panel>

        <Panel type={type} adornmentEnd={<LockSVG />}>
          {content}
        </Panel>

        <Panel type={type} adornmentStart={<InfoSVG />} adornmentEnd={<LockSVG />}>
          {content}
        </Panel>
      </div>
    </Sandbox>
  );
}

JsxContent.storyName = 'Различное наполнение';
