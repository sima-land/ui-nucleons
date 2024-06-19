import { Avatar } from '@sima-land/ui-nucleons/avatar';
import person from './images/person.jpg';

export const meta = {
  title: 'Картинка',
  category: 'Компоненты/Avatar',
};

export default function () {
  return (
    <>
      <Avatar src={person} />
    </>
  );
}
