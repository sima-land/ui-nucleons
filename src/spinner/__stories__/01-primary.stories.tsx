import { Spinner } from '@sima-land/ui-nucleons/spinner';

export default {
  title: 'common/Spinner',
  component: Spinner,
  parameters: {
    layout: 'padded',
  },
};

export function Primary() {
  return (
    <>
      <Spinner size='m' />
    </>
  );
}

Primary.storyName = 'Простой пример';
