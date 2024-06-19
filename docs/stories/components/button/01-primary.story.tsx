import { Button } from '@sima-land/ui-nucleons/button';

export const meta = {
  category: 'Компоненты/Button',
  title: 'Простой пример',
};

export default function () {
  return (
    <>
      <Button onClick={() => alert('Спасибо!')}>Нажми на меня</Button>
    </>
  );
}
