import { UserAvatar } from '@sima-land/ui-nucleons/avatar/user';
import { Fragment } from 'react';
import dogPng from './dog.png';
import { someImageUrl } from '../../../.storybook/utils';

const variants = [
  {
    title: 'С картинкой',
    props: { imageUrl: someImageUrl([200, 200]) },
  },
  {
    title: 'С картинкой (PNG)',
    props: { imageUrl: dogPng },
  },
  {
    title: 'Только инициалы',
    props: { title: 'Александр Пушкин' },
  },
  {
    title: 'Без данных',
    props: {},
  },
];

export default {
  title: 'common/UserAvatar',
  component: UserAvatar,
  parameters: {
    layout: 'padded',
  },
};

export function Primary() {
  return (
    <>
      {variants.map((variant, index) => (
        <Fragment key={index}>
          <h3>{variant.title}</h3>
          <UserAvatar key={index} {...variant.props} />
        </Fragment>
      ))}
    </>
  );
}

Primary.storyName = 'Простой пример';
