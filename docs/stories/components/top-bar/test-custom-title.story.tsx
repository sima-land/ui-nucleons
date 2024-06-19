import { TopBar } from '@sima-land/ui-nucleons/top-bar';
import { Link } from '@sima-land/ui-nucleons/link';

export const meta = {
  category: 'Компоненты/TopBar',
  title: 'Тест: Сложные заголовки',
  parameters: {
    backgrounds: { default: '#ccc' },
  },
};

export default function TestCustomTitle() {
  return (
    <TopBar
      title={
        <>
          Lorem <Link href='https://www.sima-land.ru'>ipsum dolor</Link> sit <b>amet consectetur</b>{' '}
          adipisicing elit. Libero, obcaecati.
        </>
      }
      subtitle={
        <>
          Lorem ipsum dolor sit <b>amet consectetur</b>, adipisicing elit. Libero, obcaecati.
        </>
      }
    />
  );
}
