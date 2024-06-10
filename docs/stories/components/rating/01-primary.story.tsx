import { Rating } from '@sima-land/ui-nucleons/rating';

export const meta = {
  category: 'Компоненты/Rating',
  title: 'Простой пример',
};

export default function Primary() {
  return (
    <>
      <Rating value={3.7} />
    </>
  );
}
