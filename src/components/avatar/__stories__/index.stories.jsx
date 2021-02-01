import React, { Fragment } from 'react';
import { Avatar } from '..';
import SuperEllipseClipPath from '../../super-ellipse-clip-path';

const superEllipseId = 'header-image-clip-path';

const clipPathUrl = `url(#${superEllipseId})`;

const clipStyle = {
  clipPath: clipPathUrl,
  WebkitClipPath: clipPathUrl,
};

const propsVariants = [
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
    props: { title: 'Пушкин Александр Сергеевич' },
  },
  {
    title: 'Без данных',
    props: {},
  },
];

export default {
  title: 'Avatar',
  component: Avatar,
  parameters: {
    layout: 'padded',
  },
};

export const Primary = () => (
  <>
    <h2>Различное наполнение</h2>
    {propsVariants.map((variant, index) => (
      <Fragment key={index}>
        <h3>{variant.title}</h3>
        <Avatar
          key={index}
          {...variant.props}
          style={clipStyle}
        />
      </Fragment>
    ))}

    <h2>Различные цвета</h2>
    {propsVariants.map((variant, index) => (
      <Fragment key={index}>
        <h3>{variant.title}</h3>
        <Avatar
          key={index}
          {...variant.props}
          bgColor='additional-teal'
          bgOpacity={0.48}
          textColor='white'
          style={clipStyle}
          iconProps={{ color: 'white' }}
        />
      </Fragment>
    ))}

    <h2>Различные размеры</h2>
    {propsVariants.map((variant, variantIndex) => (
      <Fragment key={variantIndex}>
        <h3>{variant.title}</h3>
        {[40, 48, 56, 64, 72, 104].map((size, index) => (
          <Fragment key={index}>
            <h4>size={size}</h4>
            <Avatar
              key={`${index}-${variantIndex}`}
              {...variant.props}
              size={size}
              style={clipStyle}
            />
          </Fragment>
        ))}
      </Fragment>
    ))}
    <SuperEllipseClipPath id={superEllipseId} />
  </>
);

export const DifferentImages = () => (
  <>
    <h3>Valid URLs</h3>
    {Array(3).fill(0).map((zero, index) => (
      <Fragment key={index}>
        <Avatar
          key={index}
          imageUrl={`https://picsum.photos/${200 + (index * 50)}`}
          style={clipStyle}
        />
        <br />
      </Fragment>
    ))}

    <h3>Invalid URL</h3>
    <Avatar
      imageUrl='https://foo123.bar345/'
      style={clipStyle}
    />
    <SuperEllipseClipPath id={superEllipseId} />
  </>
);
