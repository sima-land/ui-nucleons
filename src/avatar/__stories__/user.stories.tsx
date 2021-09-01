import React, { Fragment } from 'react';
import { UserAvatar } from '../user';
import dogPng from './dog.png';

const variants = [
  {
    title: 'С картинкой',
    props: { imageUrl: 'https://picsum.photos/200' },
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

export const Primary = () => (
  <>
    {variants.map((variant, index) => (
      <Fragment key={index}>
        <h3>{variant.title}</h3>
        <UserAvatar key={index} {...variant.props} />
      </Fragment>
    ))}
  </>
);
