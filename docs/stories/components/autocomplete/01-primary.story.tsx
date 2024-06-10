import { Autocomplete } from '@sima-land/ui-nucleons/autocomplete';
import { DropdownItem } from '@sima-land/ui-nucleons/dropdown-item';

export const meta = {
  title: 'Простой пример',
  category: 'Компоненты/Autocomplete',
};

export default function () {
  return (
    <>
      <Autocomplete label='Ваш браузер' caption='Например Chrome'>
        <DropdownItem>Chrome</DropdownItem>
        <DropdownItem>Safari</DropdownItem>
        <DropdownItem>Firefox</DropdownItem>
        <DropdownItem>Edge</DropdownItem>
        <DropdownItem>Arc</DropdownItem>
        <DropdownItem>Opera</DropdownItem>
        <DropdownItem>Yandex.Browser</DropdownItem>
        <DropdownItem>Internet Explorer</DropdownItem>
      </Autocomplete>
    </>
  );
}
