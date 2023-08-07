import {
  Avatar,
  getNameInitials,
  getAvatarIconProps,
  getUserAvatarProps,
} from '@sima-land/ui-nucleons/avatar';
import dog from './dog.png';
import PersonSVG from '@sima-land/ui-quarks/icons/24x24/Stroked/Person';
import { someImageUrl } from '../../../.storybook/utils';

export default {
  title: 'common/Avatar',
  component: Avatar,
  parameters: {
    layout: 'padded',
  },
};

export function WithImage() {
  const src = someImageUrl({ w: 200 });

  return (
    <>
      <Avatar src={src} />
    </>
  );
}

WithImage.storyName = 'Картинка';

export function WithPNG() {
  return (
    <>
      <Avatar src={dog} />
    </>
  );
}

WithPNG.storyName = 'Картинка PNG';

export function WithInitials() {
  return (
    <>
      <Avatar>{getNameInitials('Александр Пушкин')}</Avatar>
    </>
  );
}

WithInitials.storyName = 'Инициалы';

export function WithIcon() {
  return (
    <>
      <Avatar>
        <PersonSVG {...getAvatarIconProps()} />
      </Avatar>
    </>
  );
}

WithIcon.storyName = 'Иконка';

export function WithCustomColors() {
  return (
    <>
      <Avatar style={{ '--avatar-color': '#9b59b6', '--avatar-text-color': '#fff' }}>А</Avatar>
    </>
  );
}

WithCustomColors.storyName = 'Свои цвета';

export function WithCustomSize() {
  return (
    <div style={{ display: 'flex', gap: '16px' }}>
      <Avatar style={{ '--avatar-size': '128px' }} src={someImageUrl({ w: 200 })} />

      <Avatar style={{ '--avatar-size': '128px' }} src={dog} />

      <Avatar style={{ '--avatar-size': '128px' }}>А</Avatar>

      <Avatar style={{ '--avatar-size': '128px' }}>
        <PersonSVG {...getAvatarIconProps()} />
      </Avatar>
    </div>
  );
}

WithCustomSize.storyName = 'Свой размер';

export function UserAvatar() {
  return (
    <>
      <h4>Имя, фамилия и фото</h4>
      <Avatar {...getUserAvatarProps({ id: 1, name: 'Лев Толстой', image: someImageUrl(200) })} />

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
