import { Avatar, getAvatarIconProps } from '@sima-land/ui-nucleons/avatar';
import PersonSVG from '@sima-land/ui-quarks/icons/24x24/Stroked/Person';

export const meta = {
  title: 'Иконка',
  category: 'Компоненты/Avatar',
};

export default function () {
  return (
    <>
      <Avatar>
        <PersonSVG {...getAvatarIconProps()} />
      </Avatar>
    </>
  );
}
