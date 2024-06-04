import { TopBar } from '@sima-land/ui-nucleons/top-bar';
import CrossSVG from '@sima-land/ui-quarks/icons/24x24/Stroked/Cross';
import ArrowLeftSVG from '@sima-land/ui-quarks/icons/24x24/Stroked/ArrowLeft';

export default {
  title: 'common/TopBar',
  component: TopBar,
  parameters: {
    layout: 'padded',
    backgrounds: { default: 'custom:gray' },
  },
};

export function WithIconButtons() {
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
          end: { icon: <CrossSVG />, onClick: stub },
        }}
      />
    </div>
  );
}

WithIconButtons.storyName = 'С кнопками-иконками';
