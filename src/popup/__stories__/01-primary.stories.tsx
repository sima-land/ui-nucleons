import { PopupView } from '@sima-land/ui-nucleons/popup';

export default {
  title: 'common/Popup',
  component: PopupView,
  parameters: {
    layout: 'padded',
  },
};

export function Primary() {
  return (
    <>
      <PopupView onClose={() => alert('Нажат крестик!')}>Это тестовый popup.</PopupView>
    </>
  );
}

Primary.storyName = 'Простой пример';
