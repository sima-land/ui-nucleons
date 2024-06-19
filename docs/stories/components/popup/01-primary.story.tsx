import { PopupView } from '@sima-land/ui-nucleons/popup';

export const meta = {
  category: 'Компоненты/Popup',
  title: 'Простой пример',
};

export default function Primary() {
  return (
    <>
      <PopupView onClose={() => alert('Нажат крестик!')}>Это тестовый popup.</PopupView>
    </>
  );
}
