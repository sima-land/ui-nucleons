import { Autocomplete } from '@sima-land/ui-nucleons/autocomplete';
import { DropdownItem } from '@sima-land/ui-nucleons/dropdown-item';
import { useState } from 'react';

export const meta = {
  title: 'Список только после ввода значения',
  category: 'Компоненты/Autocomplete',
};

export default function () {
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
