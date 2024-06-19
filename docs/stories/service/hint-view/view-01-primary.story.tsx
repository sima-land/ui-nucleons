import { HintView } from '@sima-land/ui-nucleons/hint';

export const meta = {
  category: 'Утилиты/HintView',
  title: 'Простой пример',
};

export default function Primary() {
  return (
    <>
      <HintView style={{ position: 'relative' }}>
        Какой-то короткий текст получился
        <HintView.Arrow style={{ top: 'calc(100% - 3px)', left: 'calc(50% - 3px)' }} />
      </HintView>
    </>
  );
}
