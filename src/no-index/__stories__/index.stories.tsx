import { NoIndex } from '@sima-land/ui-nucleons/no-index';

export default {
  title: 'service/NoIndex',
  component: NoIndex,
  parameters: {
    layout: 'padded',
  },
};

export function Primary() {
  return (
    <>
      <NoIndex>
        &quot;Кто б ни были входящие сюда,
        <br />
        Оставьте здесь надежду навсегда!&quot;
        <br />
        Написано над адскими вратами
        <br />
        Зловещими и черными чертами
      </NoIndex>
    </>
  );
}

Primary.storyName = 'Простой пример';
