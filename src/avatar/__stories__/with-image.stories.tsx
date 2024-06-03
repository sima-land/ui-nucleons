import { Avatar } from '@sima-land/ui-nucleons/avatar';
import person from './static/person.jpg';

export default {
  title: 'common/Avatar',
  component: Avatar,
  parameters: {
    layout: 'padded',
  },
};

export function WithImage() {
  return (
    <>
      <Avatar src={person} />
    </>
  );
}

WithImage.storyName = 'Картинка';
