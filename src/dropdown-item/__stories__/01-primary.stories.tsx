import { DropdownItem } from '@sima-land/ui-nucleons/dropdown-item';
import { CSSProperties } from 'react';

export default {
  title: 'common/DropdownItem',
  component: DropdownItem,
  parameters: {
    layout: 'padded',
  },
};

export function Primary() {
  const longText = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. ';

  const style: CSSProperties = {
    maxWidth: '400px',
  };

  return (
    <DropdownItem size='xl' style={style} endContent='Текст' comment={longText}>
      {longText}
    </DropdownItem>
  );
}

Primary.storyName = 'Простой пример';
Primary.parameters = {
  backgrounds: { default: 'custom:gray' },
};
