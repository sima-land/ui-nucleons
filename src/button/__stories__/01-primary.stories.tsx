import { Button } from '@sima-land/ui-nucleons/button';

export default {
  title: 'common/Button',
  component: Button,
  parameters: {
    layout: 'padded',
  },
};

export function Primary() {
  return (
    <>
      <Button onClick={() => alert('Спасибо!')}>Нажми на меня</Button>
    </>
  );
}

Primary.storyName = 'Простой пример';
