import { Input } from '@sima-land/ui-nucleons/input';

export default {
  title: 'common/Input',
  component: Input,
  parameters: {
    layout: 'padded',
  },
};

export function Primary() {
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

Primary.storyName = 'Простой пример';
