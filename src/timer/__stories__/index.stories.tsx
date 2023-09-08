import { Timer } from '@sima-land/ui-nucleons/timer';
import { addDays, addMonths, formatISO } from 'date-fns';

export default {
  title: 'service/Timer',
  component: Timer,
  parameters: {
    layout: 'padded',
  },
};

export function Primary() {
  return <Timer date={formatISO(addMonths(new Date(), 1))} />;
}

Primary.storyName = 'Простой пример';

export function Styling() {
  const TimerPart = ({ label, value }: { label: string; value: number }) => (
    <div style={{ textAlign: 'center' }}>
      <div>{`${value}`.padStart(2, '0')}</div>
      <div style={{ fontSize: 14, fontWeight: 'normal' }}>{label}</div>
    </div>
  );

  const Divider = () => <div style={{ margin: '0 12px' }}>:</div>;

  return (
    <Timer
      date={formatISO(addDays(new Date(), 5))}
      timeout={1000 * 60}
      format={({ days, hours, minutes }) => (
        <div style={{ display: 'flex', fontSize: 28, fontWeight: 'bold' }}>
          <TimerPart label='дней' value={Math.min(99, days)} />
          <Divider />
          <TimerPart label='часов' value={hours % 24} />
          <Divider />
          <TimerPart label='минут' value={minutes % 60} />
        </div>
      )}
    />
  );
}

Styling.storyName = 'Стилизация';
