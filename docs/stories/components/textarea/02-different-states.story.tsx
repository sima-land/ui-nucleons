import { Textarea, TextareaProps } from '@sima-land/ui-nucleons/textarea';
import { useState } from 'react';
import { Sandbox } from '#docs-utils';

export const meta = {
  category: 'Компоненты/Textarea',
  title: 'Различные состояния',
};

export default function DifferentStates() {
  const [value, setValue] = useState('');
  const [disabled, setDisabled] = useState(false);
  const [failed, setFailed] = useState(false);

  const props: TextareaProps = {
    disabled,
    failed,
    rootProps: { style: { '--field-width': '240px' } },
    value,
    onChange: e => setValue(e.target.value),
  };

  return (
    <Sandbox
      controls={[
        {
          type: 'toggle',
          label: 'Disabled',
          bind: [disabled, setDisabled],
        },
        {
          type: 'toggle',
          label: 'Failed',
          bind: [failed, setFailed],
        },
      ]}
    >
      <div style={{ display: 'flex', gap: '12px', justifyContent: 'center' }}>
        <Textarea
          {...props}
          label={undefined}
          placeholder={undefined}
          caption='Без label и без placeholder'
        />

        <Textarea
          {...props}
          label={undefined}
          placeholder='Напишите, что-нибудь'
          caption='Только placeholder'
        />

        <Textarea
          {...props}
          label='Текст отзыва о товаре'
          placeholder={undefined}
          caption='Только label'
        />

        <Textarea
          {...props}
          label='Текст отзыва о товаре'
          placeholder='Напишите, что-нибудь'
          caption='Label и placeholder'
        />
      </div>
    </Sandbox>
  );
}
