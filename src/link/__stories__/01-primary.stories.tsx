import { Link } from '@sima-land/ui-nucleons/link';

export default {
  title: 'common/Link',
  component: Link,
  parameters: {
    layout: 'padded',
  },
};

export function Primary() {
  return (
    <>
      <Link href='https://www.sima-land.ru' target='_blank'>
        Наш сайт
      </Link>
    </>
  );
}

Primary.storyName = 'Простой пример';
