import { NoIndexMark } from '..';

export default {
  title: 'service/NoIndexMark',
  component: NoIndexMark,
  parameters: {
    layout: 'padded',
  },
};

export function Primary() {
  return (
    <>
      <NoIndexMark />
      &quot;Кто б ни были входящие сюда,
      <br />
      Оставьте здесь надежду навсегда!&quot;
      <br />
      Написано над адскими вратами
      <br />
      Зловещими и черными чертами
      <NoIndexMark closing />
    </>
  );
}

Primary.storyName = 'Простой пример';
