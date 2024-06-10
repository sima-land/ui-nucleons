import { Layout } from '@sima-land/ui-nucleons/layout';

export const meta = {
  category: 'Компоненты/Layout',
  title: "Отключение не определённом breakpoint'е",
  parameters: {
    layout: 'fullscreen',
  },
};

export default function Disabled() {
  const content = (
    <div style={{ background: 'rgb(207, 232, 252)' }}>
      <h2>Контент ограниченный layout`ом</h2>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta, nostrum!</p>
    </div>
  );

  return (
    <>
      <Layout>
        <h2>Отключение на определенных разрешениях</h2>
        <p>Необходимо изменить ширину окна для эффекта</p>
      </Layout>

      <Layout disabledOn={['mxs']}>{content}</Layout>
      <Layout disabledOn={['ms']}>{content}</Layout>
      <Layout disabledOn={['mm']}>{content}</Layout>
      <Layout disabledOn={['ml']}>{content}</Layout>
      <Layout disabledOn={['xs']}>{content}</Layout>
      <Layout disabledOn={['s']}>{content}</Layout>
      <Layout disabledOn={['m']}>{content}</Layout>
      <Layout disabledOn={['l']}>{content}</Layout>
      <Layout disabledOn={['xl']}>{content}</Layout>
    </>
  );
}
