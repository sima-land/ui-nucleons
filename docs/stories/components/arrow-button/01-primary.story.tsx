import { ArrowButton } from '@sima-land/ui-nucleons/arrow-button';

export const meta = {
  title: 'Простой пример',
  category: 'Компоненты/ArrowButton',
};

export default function () {
  const onClick = () => alert('Фух, клик по кнопке работает...');

  return (
    <>
      <ArrowButton onClick={onClick} />
    </>
  );
}
