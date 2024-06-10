import { MobileLayout } from '@sima-land/ui-nucleons/layout';

export const meta = {
  category: 'Устаревшее/MobileLayout',
  title: "Отключение не определённом breakpoint'е",
  parameters: {
    layout: 'fullscreen',
  },
};

function SomeContent() {
  return (
    <div style={{ background: 'rgb(207, 232, 252)' }}>
      <h2>Контент ограниченный layout`ом</h2>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta, nostrum!</p>
    </div>
  );
}

export default function () {
  return (
    <>
      <MobileLayout>
        <h2>Отключение на определенных разрешениях</h2>
        <p>Необходимо изменить ширину окна для эффекта</p>
      </MobileLayout>

      <MobileLayout disabledOn={['mxs', 'ms', 'mm', 'ml', 'xs']}>
        <SomeContent />
      </MobileLayout>
      <MobileLayout disabledOn={['s']}>
        <SomeContent />
      </MobileLayout>
      <MobileLayout disabledOn={['m']}>
        <SomeContent />
      </MobileLayout>
      <MobileLayout disabledOn={['l']}>
        <SomeContent />
      </MobileLayout>
      <MobileLayout disabledOn={['xl']}>
        <SomeContent />
      </MobileLayout>
    </>
  );
}
