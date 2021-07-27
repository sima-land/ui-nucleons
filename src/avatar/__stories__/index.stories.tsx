import React, { Fragment, useState } from 'react';
import { Avatar } from '..';
import { random } from 'lodash';

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
  title: 'common/Avatar',
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
          textColor='white'
        />
      </Fragment>
    ))}

    <h2>Различные размеры</h2>
    {propsVariants.map((variant, variantIndex) => (
      <Fragment key={variantIndex}>
        <h3>{variant.title}</h3>
        {[40, 48, 56, 64, 72, 80, 104].map((size, index) => (
          <Fragment key={index}>
            <h4>size={size}</h4>
            <Avatar
              key={`${index}-${variantIndex}`}
              {...variant.props}
              size={size as any}
            />
          </Fragment>
        ))}
      </Fragment>
    ))}
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
        />
        <br />
      </Fragment>
    ))}

    <h3>Invalid URL</h3>
    <Avatar
      imageUrl='https://foo123.bar345/'
    />
  </>
);

export const DeferredImageURLChange = () => {
  const [imageUrl, setImageUrl] = useState<string | undefined>(undefined);

  return (
    <>
      <div style={{ marginBottom: 16 }}>
        <Avatar
          imageUrl={imageUrl}
        />
      </div>

      <button onClick={() => setImageUrl(`https://picsum.photos/${200 + random(10, 20)}`)}>Set URL</button>
    </>
  );
};
