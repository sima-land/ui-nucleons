import { useState } from 'react';
import { Panel, PanelType, LINK_COLOR_BY_TYPE } from '..';
import InformationSVG from '@sima-land/ui-quarks/icons/16x16/Stroked/Information';
import LockSVG from '@sima-land/ui-quarks/icons/16x16/Stroked/Lock';
import { Link } from '../../link';
import { Sandbox } from '../../../.storybook/utils';

export default {
  title: 'common/Panel',
  component: Panel,
  parameters: {
    layout: 'padded',
  },
};

const panelTypes: PanelType[] = ['info', 'error', 'success', 'warning'];

export function Primary() {
  return (
    <Panel style={{ maxWidth: '400px' }}>
      Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nemo, unde. Minus aut saepe
      voluptatum et.
    </Panel>
  );
}

Primary.storyName = 'Простой пример';

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

        <Panel type={type} adornmentStart={<InformationSVG />}>
          {content}
        </Panel>

        <Panel type={type} adornmentEnd={<LockSVG />}>
          {content}
        </Panel>

        <Panel type={type} adornmentStart={<InformationSVG />} adornmentEnd={<LockSVG />}>
          {content}
        </Panel>
      </div>
    </Sandbox>
  );
}

JsxContent.storyName = 'Различное наполнение';

export function UnknownContent() {
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
        <Panel type={type} adornmentStart={<InformationSVG />}>
          <Panel.UnknownContent markup={markup} />
        </Panel>
      </div>
    </Sandbox>
  );
}

UnknownContent.storyName = 'HTML-содержимое';
