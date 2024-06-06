import { Avatar, getAvatarIconProps } from '@sima-land/ui-nucleons/avatar';
import PersonSVG from '@sima-land/ui-quarks/icons/24x24/Stroked/Person';
import person from './images/person.jpg';
import dog from './images/dog.png';

export const meta = {
  title: 'Свой размер',
  category: 'Компоненты/Avatar',
};

export default function () {
  return (
    <div style={{ display: 'flex', gap: '16px' }}>
      <Avatar style={{ '--avatar-size': '128px' }} src={person} />

      <Avatar style={{ '--avatar-size': '128px' }} src={dog} />

      <Avatar style={{ '--avatar-size': '128px' }}>А</Avatar>

      <Avatar style={{ '--avatar-size': '128px' }}>
        <PersonSVG {...getAvatarIconProps()} />
      </Avatar>
    </div>
  );
}
