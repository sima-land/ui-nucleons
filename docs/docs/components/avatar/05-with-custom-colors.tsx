import { Avatar } from '@sima-land/ui-nucleons/avatar';

export const meta = {
  title: 'Свои цвета',
  category: 'Компоненты/Avatar',
};

export default function () {
  return (
    <>
      <Avatar style={{ '--avatar-color': '#9b59b6', '--avatar-text-color': '#fff' }}>А</Avatar>
    </>
  );
}
