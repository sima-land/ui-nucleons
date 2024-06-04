import { Avatar } from '@sima-land/ui-nucleons/avatar';

export default {
  title: 'common/Avatar',
  component: Avatar,
  parameters: {
    layout: 'padded',
  },
};

export function WithCustomColors() {
  return (
    <>
      <Avatar style={{ '--avatar-color': '#9b59b6', '--avatar-text-color': '#fff' }}>А</Avatar>
    </>
  );
}

WithCustomColors.storyName = 'Свои цвета';
