import { TopBar } from '@sima-land/ui-nucleons/top-bar';

export default {
  title: 'common/TopBar',
  component: TopBar,
  parameters: {
    layout: 'padded',
    backgrounds: { default: 'custom:gray' },
  },
};

export function WithTextButtons() {
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
          start: { text: 'Отмена', onClick: stub },
          end: { text: 'Применить', onClick: stub },
        }}
      />
    </div>
  );
}

WithTextButtons.storyName = 'С текстовыми кнопками';
