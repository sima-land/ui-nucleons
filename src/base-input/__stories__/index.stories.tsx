import { BaseInput, BaseInputStyle } from '@sima-land/ui-nucleons/base-input';
import { useState } from 'react';

export default {
  title: 'service/BaseInput',
  component: BaseInput,
  parameters: {
    layout: 'padded',
  },
};

export function Primary() {
  const style: BaseInputStyle = {
    border: '1px solid #323232',
    width: 200,
    padding: 8,
  };

  return (
    <>
      <BaseInput style={style} defaultValue='Lorem ipsum' />
    </>
  );
}

Primary.storyName = 'Простой пример';

export function Multiline() {
  const style: BaseInputStyle = {
    border: '1px solid #323232',
    width: 200,
    padding: 8,
  };

  return (
    <>
      <BaseInput
        multiline
        style={style}
        defaultValue='Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsam quam assumenda illum dolores tenetur. Voluptate quaerat totam fuga explicabo tempora?'
      />
    </>
  );
}

Multiline.storyName = 'Многострочное поле';

export function RestPlaceholder() {
  const style: BaseInputStyle = {
    width: 200,
    padding: 12,
    border: '1px solid #323232',
    '--base-input-placeholder-color': '#aaa',
  };

  const [value, setValue] = useState<string>('');

  return (
    <>
      <BaseInput
        style={style}
        value={value}
        restPlaceholder={'9'.repeat(10).slice(value.length)}
        onChange={e => {
          setValue(e.currentTarget.value.replace(/\D/g, '').slice(0, 10));
        }}
      />
    </>
  );
}

RestPlaceholder.storyName = 'Остаточный placeholder';
