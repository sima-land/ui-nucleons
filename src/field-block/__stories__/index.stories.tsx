import React, { useState } from 'react';
import { FieldBlock, FieldBlockProps, FieldBlockSize } from '..';
import CopySVG from '@sima-land/ui-quarks/icons/16x16/Stroked/Copy';
import LockSVG from '@sima-land/ui-quarks/icons/16x16/Stroked/Lock';
import { Sandbox } from '../../../.storybook/utils';

export default {
  title: 'service/FieldBlock',
  component: FieldBlock,
  parameters: {
    layout: 'padded',
  },
};

export function Primary() {
  const [size, setSize] = useState<FieldBlockSize>('l');
  const [disabled, setDisabled] = useState<boolean>(false);
  const [focused, setFocused] = useState<boolean>(false);
  const [failed, setFailed] = useState<boolean>(false);
  const [labelAsPlaceholder, setLabelAsPlaceholder] = useState<boolean>(false);

  const commonProps: FieldBlockProps = {
    size,
    disabled,
    focused,
    failed,
    labelAsPlaceholder,
    caption: 'Example caption',
    main: (
      <>
        <i>Some</i> <b>value</b>
      </>
    ),
  };

  return (
    <Sandbox
      controls={[
        {
          type: 'select',
          label: 'Размер',
          options: ['s', 'm', 'l'],
          bind: [size, setSize],
        },
        {
          type: 'toggle',
          label: 'Disabled',
          bind: [disabled, setDisabled],
        },
        {
          type: 'toggle',
          label: 'Focused',
          bind: [focused, setFocused],
        },
        {
          type: 'toggle',
          label: 'Failed',
          bind: [failed, setFailed],
        },
        {
          type: 'toggle',
          label: 'Label as placeholder',
          bind: [labelAsPlaceholder, setLabelAsPlaceholder],
        },
      ]}
    >
      <div style={{ display: 'flex', gap: 12, flexDirection: 'column' }}>
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
    </Sandbox>
  );
}

Primary.storyName = 'Простой пример';
