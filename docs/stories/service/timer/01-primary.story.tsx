import { Timer } from '@sima-land/ui-nucleons/timer';
import { addMonths, formatISO } from 'date-fns';

export const meta = {
  category: 'Утилиты/Timer',
  title: 'Простой пример',
};

export default function Primary() {
  return (
    <>
      <Timer date={formatISO(addMonths(new Date(), 1))} />
    </>
  );
}
