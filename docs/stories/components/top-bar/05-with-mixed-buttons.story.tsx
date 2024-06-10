import { TopBar } from '@sima-land/ui-nucleons/top-bar';
import ArrowLeftSVG from '@sima-land/ui-quarks/icons/24x24/Stroked/ArrowLeft';

export const meta = {
  category: 'Компоненты/TopBar',
  title: 'С разными кнопками',
  parameters: {
    layout: 'padded',
    backgrounds: { default: '#ccc' },
  },
};

export default function WithMixedButtons() {
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
