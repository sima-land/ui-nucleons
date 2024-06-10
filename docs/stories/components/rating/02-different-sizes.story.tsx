import { Rating } from '@sima-land/ui-nucleons/rating';

export const meta = {
  category: 'Компоненты/Rating',
  title: 'Различные размеры',
};

export default function DifferentSizes() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
      <Rating size='s' value={3.7} />
      <Rating size='m' value={3.7} />
    </div>
  );
}
