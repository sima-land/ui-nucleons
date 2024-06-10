import { Link } from '@sima-land/ui-nucleons/link';

export const meta = {
  category: 'Компоненты/Link',
  title: 'Простой пример',
};

export default function Primary() {
  return (
    <>
      <Link href='https://www.sima-land.ru' target='_blank'>
        Наш сайт
      </Link>
    </>
  );
}
