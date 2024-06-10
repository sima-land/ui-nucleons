import { InfoText } from '@sima-land/ui-nucleons/info-text';

export const meta = {
  category: 'Компоненты/InfoText',
  title: 'Простой пример',
  parameters: {
    layout: 'padded',
  },
};

export default function Primary() {
  return (
    <div style={{ maxWidth: '600px', fontSize: '16px', lineHeight: '24px' }}>
      <InfoText onIconClick={() => alert('Вау! Действительно может!')}>
        Позволяет выводить в конце произвольного текста иконку. Иконка не переносится на следующую
        строку без предыдущего слова и может обрабатывать действие при клике.
      </InfoText>
    </div>
  );
}
