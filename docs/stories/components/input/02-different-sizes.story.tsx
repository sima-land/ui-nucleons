import { Input } from '@sima-land/ui-nucleons/input';

export const meta = {
  category: 'Компоненты/Input',
  title: 'Различные размеры',
};

export default function DifferentSizes() {
  return (
    <div style={{ display: 'flex', gap: '20px' }}>
      <Input size='l' placeholder='Номер паспорта' />
      <Input size='m' placeholder='Номер паспорта' />
      <Input size='s' placeholder='Номер паспорта' />
    </div>
  );
}
