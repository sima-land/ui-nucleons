import { DropdownItem } from '@sima-land/ui-nucleons/dropdown-item';
import { CSSProperties } from 'react';

export const meta = {
  category: 'Компоненты/DropdownItem',
  title: 'Простой пример',
  parameters: {
    backgrounds: {
      default: 'custom:gray',
    },
  },
};

const styles = {
  item: {
    maxWidth: '400px',
  } satisfies CSSProperties,
};

export default function () {
  const longText = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. ';

  return (
    <DropdownItem size='xl' style={styles.item} endContent='Текст' comment={longText}>
      {longText}
    </DropdownItem>
  );
}
