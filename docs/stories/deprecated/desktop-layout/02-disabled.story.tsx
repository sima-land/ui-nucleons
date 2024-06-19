import { DesktopLayout } from '@sima-land/ui-nucleons/layout';

export const meta = {
  category: 'Устаревшее/DesktopLayout',
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
      <DesktopLayout>
        <h2>Отключение на определенных разрешениях</h2>
        <p>Необходимо изменить ширину окна для эффекта</p>
      </DesktopLayout>

      <DesktopLayout disabledOn={['mxs', 'ms', 'mm', 'ml', 'xs']}>
        <SomeContent />
      </DesktopLayout>
      <DesktopLayout disabledOn={['s']}>
        <SomeContent />
      </DesktopLayout>
      <DesktopLayout disabledOn={['m']}>
        <SomeContent />
      </DesktopLayout>
      <DesktopLayout disabledOn={['l']}>
        <SomeContent />
      </DesktopLayout>
      <DesktopLayout disabledOn={['xl']}>
        <SomeContent />
      </DesktopLayout>
    </>
  );
}
