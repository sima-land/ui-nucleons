import { Avatar, getUserAvatarProps } from '@sima-land/ui-nucleons/avatar';
import person from './images/person.jpg';

export const meta = {
  title: 'Аватар пользователя',
  category: 'Компоненты/Avatar',
};

export default function () {
  return (
    <>
      <h3>Имя, фамилия и фото</h3>
      <Avatar {...getUserAvatarProps({ id: 1, name: 'Лев Толстой', image: person })} />

      <h3>Имя, фамилия и битое фото</h3>
      <Avatar {...getUserAvatarProps({ id: 2, name: 'Лев Толстой', image: '/broken-image.png' })} />

      <h3>Имя и фамилия</h3>
      <Avatar {...getUserAvatarProps({ id: 3, name: 'Лев Толстой' })} />

      <h3>Только имя</h3>
      <Avatar {...getUserAvatarProps({ id: 4, name: 'Лев' })} />

      <h3>Без данных</h3>
      <Avatar {...getUserAvatarProps({ id: 5, name: undefined })} />
    </>
  );
}
