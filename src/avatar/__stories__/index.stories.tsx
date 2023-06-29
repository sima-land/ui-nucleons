import { Fragment, useState } from 'react';
import { Avatar } from '..';
import { random } from 'lodash';
import dogPng from './dog.png';
import { someImageUrl } from '../../../.storybook/utils';

const propsVariants = [
  {
    title: 'С картинкой',
    props: { imageUrl: someImageUrl(200) },
  },
  {
    title: 'С картинкой (PNG)',
    props: { imageUrl: dogPng },
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

export function Primary() {
  return (
    <>
      {propsVariants.map((variant, index) => (
        <Fragment key={index}>
          <h3>{variant.title}</h3>
          <Avatar key={index} {...variant.props} />
        </Fragment>
      ))}
    </>
  );
}

Primary.storyName = 'Простой пример';

export function DifferentColors() {
  return (
    <>
      {propsVariants.map((variant, index) => (
        <Fragment key={index}>
          <h3>{variant.title}</h3>
          <Avatar
            key={index}
            {...variant.props}
            bgColor='additional-teal'
            textColor='basic-white'
          />
        </Fragment>
      ))}
    </>
  );
}

DifferentColors.storyName = 'Различные цвета';

export function DifferentSizes() {
  return (
    <>
      {propsVariants.map((variant, variantIndex) => (
        <Fragment key={variantIndex}>
          <h3>{variant.title}</h3>
          {[40, 48, 56, 64, 72, 80, 104].map((size, index) => (
            <Fragment key={index}>
              <h4>size={size}</h4>
              <Avatar key={`${index}-${variantIndex}`} {...variant.props} size={size} />
            </Fragment>
          ))}
        </Fragment>
      ))}
    </>
  );
}

DifferentSizes.storyName = 'Различные размеры';

export function DifferentImages() {
  return (
    <>
      <h3>Рабочие URL</h3>
      {Array(3)
        .fill(0)
        .map((zero, index) => (
          <Fragment key={index}>
            <Avatar key={index} imageUrl={someImageUrl({ w: 200, id: index })} />
            <br />
          </Fragment>
        ))}

      <h3>Нерабочий URL</h3>
      <Avatar imageUrl='https://foo123.bar345/' />
    </>
  );
}

DifferentImages.storyName = 'Различные изображения';

export function DeferredImageURLChange() {
  const [imageUrl, setImageUrl] = useState<string | undefined>(undefined);

  return (
    <>
      <div style={{ marginBottom: 16 }}>
        <Avatar imageUrl={imageUrl} />
      </div>

      <button onClick={() => setImageUrl(someImageUrl({ w: 200, h: 200, id: random(10, 20) }))}>
        Set URL
      </button>
    </>
  );
}

DeferredImageURLChange.storyName = 'Тест: отложенная загрузка изображения';
