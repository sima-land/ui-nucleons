import { TopBar } from '@sima-land/ui-nucleons/top-bar';
import ArrowLeftSVG from '@sima-land/ui-quarks/icons/24x24/Stroked/ArrowLeft';

export default {
  title: 'common/TopBar',
  component: TopBar,
  parameters: {
    layout: 'padded',
    backgrounds: { default: 'custom:gray' },
  },
};

export function WithMixedButtons() {
  const stub = () => {
    alert('Ничего не произошло');
  };

  return (
    <div style={{ maxWidth: '720px', margin: '0 auto' }}>
      <TopBar
        size='m'
        title='Это заголовок топбара'
        subtitle='А это подзаголовок топбара'
        buttons={{
          start: { icon: <ArrowLeftSVG />, onClick: stub },
          end: { text: 'Завершить', onClick: stub },
        }}
      />
    </div>
  );
}

WithMixedButtons.storyName = 'С разными кнопками';
