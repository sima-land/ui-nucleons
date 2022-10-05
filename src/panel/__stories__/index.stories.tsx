import React, { useState } from 'react';
import { Panel, PanelType, LINK_COLOR_BY_TYPE } from '..';
import InformationSVG from '@sima-land/ui-quarks/icons/16x16/Stroked/information';
import LockSVG from '@sima-land/ui-quarks/icons/16x16/Stroked/lock';
import { Link } from '../../link';

export default {
  title: 'common/Panel',
  component: Panel,
  parameters: {
    layout: 'padded',
  },
};

const panelTypes: PanelType[] = ['info', 'error', 'success', 'warning'];

function PanelTypeField({ onChange }: { onChange: (type: PanelType) => void }) {
  return (
    <div>
      <label>
        <span>Type </span>
        <select onChange={e => onChange(e.target.value as any)}>
          {panelTypes.map(item => (
            <option key={item} value={item}>
              {item}
            </option>
          ))}
        </select>
      </label>
    </div>
  );
}

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
    <div style={{ width: 360, display: 'flex', gap: 20, flexDirection: 'column' }}>
      <PanelTypeField onChange={setType} />

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
    <div style={{ width: 360, display: 'flex', gap: 20, flexDirection: 'column' }}>
      <PanelTypeField onChange={setType} />

      <Panel type={type} adornmentStart={<InformationSVG />}>
        <Panel.UnknownContent markup={markup} />
      </Panel>
    </div>
  );
}

UnknownContent.storyName = 'HTML-содержимое';
