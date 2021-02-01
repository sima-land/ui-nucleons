import React, { Fragment } from 'react';
import { UserAvatar } from '../user';
import SuperEllipseClipPath from '../../super-ellipse-clip-path';

const superEllipseId = 'header-image-clip-path';

const clipPathUrl = `url(#${superEllipseId})`;

const clipStyle = {
  clipPath: clipPathUrl,
  WebkitClipPath: clipPathUrl,
};

const variants = [
  {
    title: 'С картинкой',
    props: { imageUrl: 'https://picsum.photos/200' },
  },
  {
    title: 'С картинкой (PNG)',
    props: { imageUrl: 'https://www.sima-land.ru/img/user/photo/6010f1c00d26d2.61409846.png' },
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
  title: 'UserAvatar',
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
        <UserAvatar
          key={index}
          {...variant.props}
          style={clipStyle}
        />
      </Fragment>
    ))}
    <SuperEllipseClipPath id={superEllipseId} />
  </>
);
