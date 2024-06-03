import { Avatar } from '@sima-land/ui-nucleons/avatar';
import dog from './static/dog.png';

export default {
  title: 'common/Avatar',
  component: Avatar,
  parameters: {
    layout: 'padded',
  },
};

export function WithPNG() {
  return (
    <>
      <Avatar src={dog} />
    </>
  );
}

WithPNG.storyName = 'Картинка PNG';
