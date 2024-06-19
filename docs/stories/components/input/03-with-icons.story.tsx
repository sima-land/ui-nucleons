import { Input } from '@sima-land/ui-nucleons/input';
import CalendarSVG from '@sima-land/ui-quarks/icons/24x24/Stroked/Calendar';
import SearchSVG from '@sima-land/ui-quarks/icons/24x24/Stroked/Magnifier';

export const meta = {
  category: 'Компоненты/Input',
  title: 'С иконками',
};

export default function WithIcons() {
  const iconStart = <SearchSVG fill='#c2c2c2' />;
  const iconEnd = <CalendarSVG fill='#c2c2c2' />;

  return (
    <div style={{ display: 'flex', gap: '20px', flexDirection: 'column' }}>
      <Input adornmentStart={iconStart} placeholder='Поиск' />

      <Input adornmentEnd={iconEnd} placeholder='Дата' />

      <Input adornmentStart={iconStart} adornmentEnd={iconEnd} placeholder='Поиска даты?' />
    </div>
  );
}
