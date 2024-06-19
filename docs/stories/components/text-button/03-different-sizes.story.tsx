import { TextButton } from '@sima-land/ui-nucleons/text-button';

export const meta = {
  category: 'Компоненты/TextButton',
  title: 'Варианты размеров',
};

export default function DifferentSizes() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
      <TextButton size='s'>Просто кнопка</TextButton>
      <TextButton size='m'>Просто кнопка</TextButton>
    </div>
  );
}
