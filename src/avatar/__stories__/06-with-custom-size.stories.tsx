import { Avatar, getAvatarIconProps } from '@sima-land/ui-nucleons/avatar';
import person from './static/person.jpg';
import dog from './static/dog.png';
import PersonSVG from '@sima-land/ui-quarks/icons/24x24/Stroked/Person';

export default {
  title: 'common/Avatar',
  component: Avatar,
  parameters: {
    layout: 'padded',
  },
};

export function WithCustomSize() {
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

WithCustomSize.storyName = 'Свой размер';
