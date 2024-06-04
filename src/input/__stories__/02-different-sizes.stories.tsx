import { Input } from '@sima-land/ui-nucleons/input';

export default {
  title: 'common/Input',
  component: Input,
  parameters: {
    layout: 'padded',
  },
};

export function DifferentSizes() {
  return (
    <div style={{ display: 'flex', gap: '20px' }}>
      <Input size='l' placeholder='Номер паспорта' />
      <Input size='m' placeholder='Номер паспорта' />
      <Input size='s' placeholder='Номер паспорта' />
    </div>
  );
}

DifferentSizes.storyName = 'Различные размеры';
