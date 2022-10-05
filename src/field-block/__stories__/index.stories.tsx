import React, { useState } from 'react';
import { FieldBlock, FieldBlockSize } from '..';
import CopySVG from '@sima-land/ui-quarks/icons/16x16/Stroked/copy';
import LockSVG from '@sima-land/ui-quarks/icons/16x16/Stroked/lock';

export default {
  title: 'common/FieldBlock',
  component: FieldBlock,
  parameters: {
    layout: 'padded',
  },
};

function useToggle(label: string): [boolean, React.ReactNode] {
  const [checked, setChecked] = useState(false);

  return [
    checked,
    <div key={`element-${label}`}>
      <label>
        <input type='checkbox' onChange={e => setChecked(e.target.checked)} />
        <span> {label}</span>
      </label>
    </div>,
  ];
}

function useSelect<T extends string>(label: string, options: T[]): [T, React.ReactNode] {
  const [selected, setSelected] = useState<T>(options[0]);

  return [
    selected,
    <div key={`element-${label}`}>
      <label>
        <span>{label} </span>
        <select onChange={e => setSelected(e.target.value as any)} defaultValue={options[0]}>
          {options.map((o, i) => (
            <option key={i} value={o}>
              {o}
            </option>
          ))}
        </select>
      </label>
    </div>,
  ];
}

export function Primary() {
  const [size, sizeBlock] = useSelect<FieldBlockSize>('Size', ['l', 's', 'xs']);
  const [disabled, disabledBlock] = useToggle('Disabled');
  const [focused, focusedBlock] = useToggle('Focused');
  const [failed, failedBlock] = useToggle('Failed');
  const [labelAsPlaceholder, labelAsPlaceholderBlock] = useToggle('Label as placeholder');

  const commonProps = {
    size,
    disabled,
    focused,
    failed,
    labelAsPlaceholder,
    caption: 'Example caption',
    value: (
      <>
        <i>Some</i> <b>value</b>
      </>
    ),
  };

  return (
    <div style={{ display: 'flex', gap: 12, flexDirection: 'column' }}>
      {sizeBlock}
      {disabledBlock}
      {focusedBlock}
      {failedBlock}
      {labelAsPlaceholderBlock}

      <FieldBlock {...commonProps} />

      <FieldBlock {...commonProps} label='Label' />

      <FieldBlock {...commonProps} label='Label' adornmentStart={<CopySVG />} />

      <FieldBlock {...commonProps} label='Label' adornmentEnd={<LockSVG />} />

      <FieldBlock {...commonProps} adornmentStart={<CopySVG />} adornmentEnd={<LockSVG />} />

      <FieldBlock
        {...commonProps}
        label='Label'
        adornmentStart={<CopySVG />}
        adornmentEnd={<LockSVG />}
      />
    </div>
  );
}

Primary.storyName = 'Простой пример';
