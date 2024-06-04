import { Timer } from '@sima-land/ui-nucleons/timer';
import { addMonths, formatISO } from 'date-fns';

export default {
  title: 'service/Timer',
  component: Timer,
  parameters: {
    layout: 'padded',
  },
};

export function Primary() {
  return (
    <>
      <Timer date={formatISO(addMonths(new Date(), 1))} />
    </>
  );
}

Primary.storyName = 'Простой пример';
