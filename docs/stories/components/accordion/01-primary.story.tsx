import { Accordion, AccordionProvider } from '@sima-land/ui-nucleons/accordion';
import { Select } from '@sima-land/ui-nucleons/select';
import { DropdownItem } from '@sima-land/ui-nucleons/dropdown-item';
import { useState } from 'react';
import styles from './accordion.m.scss';

type theme = 'light' | 'dark';

export const meta = {
  title: 'Простой пример',
  category: 'Компоненты/Accordion',
};

export default function () {
  const [value, setValue] = useState<theme>('light');
  return (
    <AccordionProvider>
      <div className={styles.select}>
        <Select label='Тема' value={value} onValueChange={newValue => setValue(newValue as theme)}>
          <DropdownItem>light</DropdownItem>
          <DropdownItem>dark</DropdownItem>
        </Select>
      </div>
      <Accordion name='test' theme={value} summary='Заголовок аккордеона'>
        <div>
          <h3 children='Content text for 2nd header' />
          <span children='Content text normal' />
          <span children='Content text small' />
          <ul>
            <li>Bullet list</li>
            <li>Bullet list</li>
            <li>Bullet list</li>
          </ul>
        </div>
      </Accordion>
    </AccordionProvider>
  );
}
