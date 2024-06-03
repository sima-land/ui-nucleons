import { TextButton } from '@sima-land/ui-nucleons/text-button';

export default {
  title: 'common/TextButton',
  component: TextButton,
  parameters: {
    layout: 'padded',
  },
};

export function Primary() {
  const onClick = () => {
    alert('Да тут и настраивать нечего...');
  };

  return <TextButton onClick={onClick}>Настроить</TextButton>;
}

Primary.storyName = 'Простой пример';
