import { Input } from '@sima-land/ui-nucleons/input';

export const meta = {
  category: 'Компоненты/Input',
  title: 'Простой пример',
};

export default function Primary() {
  return (
    <>
      <Input
        label='ФИО'
        placeholder='Иванов Иван Иванович'
        caption='Не переживайте, это просто пример'
      />
    </>
  );
}
