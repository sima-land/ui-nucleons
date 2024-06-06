import { Avatar } from '@sima-land/ui-nucleons/avatar';
import dog from './images/dog.png';

export const meta = {
  title: 'Картинка PNG',
  category: 'Компоненты/Avatar',
};

export default function () {
  return (
    <>
      <Avatar src={dog} />
    </>
  );
}
