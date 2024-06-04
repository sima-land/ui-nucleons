import { Autocomplete } from '@sima-land/ui-nucleons/autocomplete';
import { DropdownItem } from '@sima-land/ui-nucleons/dropdown-item';

export default {
  title: 'common/Autocomplete',
  component: Autocomplete,
  parameters: {
    layout: 'padded',
  },
};

export function Primary() {
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

Primary.storyName = 'Простой пример';
