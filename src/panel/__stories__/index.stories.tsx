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

export function WithEndIcon() {
  const style = { width: '360px', marginBottom: '12px' };

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

WithEndIcon.storyName = 'Иконка в конце';

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
        <Panel type={type} adornmentStart={<InfoSVG />}>
          <Panel.UnknownContent markup={markup} />
        </Panel>
      </div>
    </Sandbox>
  );
}

UnknownContent.storyName = 'HTML-содержимое';
