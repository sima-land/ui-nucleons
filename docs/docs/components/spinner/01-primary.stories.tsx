import { Spinner } from '@sima-land/ui-nucleons/spinner';

export const meta = {
  category: 'Компоненты/Spinner',
  title: 'Простой пример',
  parameters: {
    layout: 'padded',
  },
};

export default function Primary() {
  return (
    <>
      <Spinner size='m' />
    </>
  );
}
