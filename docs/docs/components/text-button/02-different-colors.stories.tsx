import { TextButton } from '@sima-land/ui-nucleons/text-button';

export const meta = {
  category: 'Компоненты/TextButton',
  title: 'Варианты цветов',
  parameters: {
    layout: 'padded',
  },
};

export default function DifferentColors() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
      <TextButton color='basic-blue'>basic-blue</TextButton>

      <TextButton color='basic-gray87'>basic-gray87</TextButton>

      <TextButton color='basic-gray38'>basic-gray38</TextButton>

      <TextButton color='additional-red'>additional-red</TextButton>

      <TextButton color='additional-teal'>additional-teal</TextButton>
    </div>
  );
}
