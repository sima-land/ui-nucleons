import { Avatar } from '@sima-land/ui-nucleons/avatar';
import dog from './static/dog.png';

export default {
  title: 'common/Avatar',
  component: Avatar,
  parameters: {
    layout: 'padded',
  },
};

export function WithImagePNG() {
  return (
    <>
      <Avatar src={dog} />
    </>
  );
}

WithImagePNG.storyName = 'Картинка PNG';
