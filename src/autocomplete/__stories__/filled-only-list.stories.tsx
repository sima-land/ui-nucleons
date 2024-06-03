import { Autocomplete } from '@sima-land/ui-nucleons/autocomplete';
import { useState } from 'react';
import { DropdownItem } from '@sima-land/ui-nucleons/dropdown-item';

export default {
  title: 'common/Autocomplete',
  component: Autocomplete,
  parameters: {
    layout: 'padded',
  },
};

export function FilledOnlyList() {
  const [value, setValue] = useState('');

  const items = [
    'Chrome',
    'Safari',
    'Firefox',
    'Edge',
    'Arc',
    'Opera',
    'Yandex.Browser',
    'Internet Explorer',
  ];

  return (
    <Autocomplete
      value={value}
      onChange={event => setValue(event.target.value)}
      placeholder='Ваш браузер'
      caption='Например Chrome'
      adornmentEnd={null}
    >
      {value.length > 0
        ? items.map((item, index) => <DropdownItem key={index}>{item}</DropdownItem>)
        : null}
    </Autocomplete>
  );
}

FilledOnlyList.storyName = 'Список только после ввода значения';
