import { Rating } from '@sima-land/ui-nucleons/rating';

export default {
  title: 'common/Rating',
  component: Rating,
  parameters: {
    layout: 'padded',
  },
};

export function DifferentSizes() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
      <Rating size='s' value={3.7} />
      <Rating size='m' value={3.7} />
    </div>
  );
}

DifferentSizes.storyName = 'Различные размеры';
