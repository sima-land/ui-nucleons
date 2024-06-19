import { Avatar, getNameInitials } from '@sima-land/ui-nucleons/avatar';

export const meta = {
  title: 'Инициалы',
  category: 'Компоненты/Avatar',
};

export default function () {
  return (
    <>
      <Avatar>{getNameInitials('Александр Пушкин')}</Avatar>
    </>
  );
}
