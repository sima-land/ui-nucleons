import { Rating } from '@sima-land/ui-nucleons/rating';

export default {
  title: 'common/Rating',
  component: Rating,
  parameters: {
    layout: 'padded',
  },
};

export function Primary() {
  return (
    <>
      <Rating value={3.7} />
    </>
  );
}

Primary.storyName = 'Простой пример';
