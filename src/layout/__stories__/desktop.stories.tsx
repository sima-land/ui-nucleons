import { DesktopLayout } from '..';

export default {
  title: 'deprecated/DesktopLayout',
  component: DesktopLayout,
  parameters: {
    layout: 'fullscreen',
  },
};

const SomeContent = () => (
  <div style={{ background: 'rgb(207, 232, 252)' }}>
    <h2>Контент ограниченный layout`ом</h2>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta, nostrum!</p>
  </div>
);

export const Primary = () => (
  <>
    <DesktopLayout>
      <h2>Простой пример</h2>
    </DesktopLayout>

    <DesktopLayout>
      <SomeContent />
    </DesktopLayout>
  </>
);

Primary.storyName = 'Простой пример';

export const DisableOnBreakpoint = () => (
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

DisableOnBreakpoint.storyName = "Отключение не определённом breakpoint'е";
