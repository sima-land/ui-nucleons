import { TopBar } from '@sima-land/ui-nucleons/top-bar';
import { Link } from '@sima-land/ui-nucleons/link';

export default {
  title: 'common/TopBar',
  component: TopBar,
  parameters: {
    layout: 'padded',
    backgrounds: { default: 'custom:gray' },
  },
};

export function TestCustomTitle() {
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

TestCustomTitle.storyName = 'Тест: Сложные заголовки';

TestCustomTitle.parameters = {
  layout: 'padded',
  backgrounds: { default: 'custom:gray' },
};
