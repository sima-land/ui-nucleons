import { Avatar, getNameInitials } from '@sima-land/ui-nucleons/avatar';

export default {
  title: 'common/Avatar',
  component: Avatar,
  parameters: {
    layout: 'padded',
  },
};

export function WithInitials() {
  return (
    <>
      <Avatar>{getNameInitials('Александр Пушкин')}</Avatar>
    </>
  );
}

WithInitials.storyName = 'Инициалы';
