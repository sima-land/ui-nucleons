import { HintView } from '@sima-land/ui-nucleons/hint';

export default {
  title: 'service/HintView',
  component: HintView,
  parameters: {
    layout: 'padded',
  },
};

export function Primary() {
  return (
    <>
      <HintView style={{ position: 'relative' }}>
        Какой-то короткий текст получился
        <HintView.Arrow style={{ top: 'calc(100% - 3px)', left: 'calc(50% - 3px)' }} />
      </HintView>
    </>
  );
}

Primary.storyName = 'Простой пример';
