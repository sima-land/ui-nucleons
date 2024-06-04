import { Avatar, getUserAvatarProps } from '@sima-land/ui-nucleons/avatar';
import person from './static/person.jpg';

export default {
  title: 'common/Avatar',
  component: Avatar,
  parameters: {
    layout: 'padded',
  },
};

export function UserAvatar() {
  return (
    <>
      <h4>Имя, фамилия и фото</h4>
      <Avatar {...getUserAvatarProps({ id: 1, name: 'Лев Толстой', image: person })} />

      <h4>Имя, фамилия и битое фото</h4>
      <Avatar {...getUserAvatarProps({ id: 2, name: 'Лев Толстой', image: '/broken-image.png' })} />

      <h4>Имя и фамилия</h4>
      <Avatar {...getUserAvatarProps({ id: 3, name: 'Лев Толстой' })} />

      <h4>Только имя</h4>
      <Avatar {...getUserAvatarProps({ id: 4, name: 'Лев' })} />

      <h4>Без данных</h4>
      <Avatar {...getUserAvatarProps({ id: 5, name: undefined })} />
    </>
  );
}

UserAvatar.storyName = 'Аватар пользователя';
