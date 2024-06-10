import { BaseInput, BaseInputStyle } from '@sima-land/ui-nucleons/base-input';
import { useState } from 'react';

export const meta = {
  category: 'Утилиты/BaseInput',
  title: 'Остаточный placeholder',
  parameters: {
    layout: 'padded',
  },
};

export default function RestPlaceholder() {
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
