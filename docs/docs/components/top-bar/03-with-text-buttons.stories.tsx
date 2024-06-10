import { TopBar } from '@sima-land/ui-nucleons/top-bar';

export const meta = {
  category: 'Компоненты/TopBar',
  title: 'С текстовыми кнопками',
  parameters: {
    layout: 'padded',
    backgrounds: { default: '#ccc' },
  },
};

export default function WithTextButtons() {
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
