import { MobileLayout } from '@sima-land/ui-nucleons/layout';

export const meta = {
  category: 'Устаревшее/MobileLayout',
  title: 'Простой пример',
  parameters: {
    layout: 'fullscreen',
  },
};

export default function () {
  return (
    <>
      <MobileLayout>
        <div style={{ background: 'rgb(207, 232, 252)' }}>
          <h2>Контент ограниченный layout`ом</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta, nostrum!</p>
        </div>
      </MobileLayout>
    </>
  );
}
