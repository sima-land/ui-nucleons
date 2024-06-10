import { TextButton } from '@sima-land/ui-nucleons/text-button';

export const meta = {
  category: 'Компоненты/TextButton',
  title: 'Простой пример',
  parameters: {
    layout: 'padded',
  },
};

export default function Primary() {
  const onClick = () => {
    alert('Да тут и настраивать нечего...');
  };

  return <TextButton onClick={onClick}>Настроить</TextButton>;
}
