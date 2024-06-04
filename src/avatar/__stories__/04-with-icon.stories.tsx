import { Avatar, getAvatarIconProps } from '@sima-land/ui-nucleons/avatar';
import PersonSVG from '@sima-land/ui-quarks/icons/24x24/Stroked/Person';

export default {
  title: 'common/Avatar',
  component: Avatar,
  parameters: {
    layout: 'padded',
  },
};

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
