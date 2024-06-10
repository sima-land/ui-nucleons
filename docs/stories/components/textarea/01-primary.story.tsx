import { Textarea } from '@sima-land/ui-nucleons/textarea';
import { useState } from 'react';

export const meta = {
  category: 'Компоненты/Textarea',
  title: 'Простой пример',
};

export default function Primary() {
  const [value, setValue] = useState('');
  const limit = 250;

  return (
    <Textarea
      label='Текст отзыва'
      placeholder='Напишите, что вы думаете о товаре'
      value={value}
      onChange={e => setValue(e.target.value)}
      rootProps={{ style: { '--field-width': '320px' } }}
      failed={value.length > limit}
      caption={`Максимальная длина - ${limit} символов`}
    />
  );
}
