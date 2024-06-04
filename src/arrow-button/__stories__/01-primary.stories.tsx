import { ArrowButton } from '@sima-land/ui-nucleons/arrow-button';

export default {
  title: 'common/ArrowButton',
  component: ArrowButton,
  parameters: {
    layout: 'padded',
  },
};

export function Primary() {
  const onClick = () => alert('Фух, клик по кнопке работает...');

  return (
    <>
      <ArrowButton onClick={onClick} />
    </>
  );
}

Primary.storyName = 'Простой пример';
