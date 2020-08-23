import React, { Fragment, useState, useEffect } from 'react';
import { storiesOf } from '@storybook/react';
import Avatar from '../';
import SuperEllipseClipPath from '../../super-ellipse-clip-path';
import { random } from 'lodash';

const superEllipseId = 'header-image-clip-path';

const clipPathUrl = `url(#${superEllipseId})`;

const clipStyle = {
  clipPath: clipPathUrl,
  WebkitClipPath: clipPathUrl,
};

const propsVariants = [
  {
    title: 'With image',
    props: { imageUrl: 'https://picsum.photos/200' },
  },
  {
    title: 'With wide image',
    props: { imageUrl: 'https://picsum.photos/200/400' },
  },
  {
    title: 'With long image',
    props: { imageUrl: 'https://picsum.photos/400/200' },
  },
  {
    title: 'With title',
    props: { title: 'Pushkin Alexander Sergeevich' },
  },
  {
    title: 'With monogram',
    props: { monogram: 'Pushkin Alexander Sergeevich' },
  },
  {
    title: 'Without image/title/monogram',
    props: {},
  },
];

storiesOf('Avatar', module)
  .add('Tests', () => (
    <>
      <h2>Different content</h2>
      {propsVariants.map((variant, index) => (
        <Fragment key={index}>
          <h3>{variant.title}</h3>
          <Avatar
            key={index}
            {...variant.props}
            clipStyle={clipStyle}
          />
        </Fragment>
      ))}

      <h2>Different content (custom colors)</h2>
      {propsVariants.map((variant, index) => (
        <Fragment key={index}>
          <h3>{variant.title}</h3>
          <Avatar
            key={index}
            {...variant.props}
            color='additional-deep-purple'
            textColor='white'
            bgStyle={{ opacity: 0.4 }}
            clipStyle={clipStyle}
            iconProps={{ color: 'white' }}
          />
        </Fragment>
      ))}

      <h2>Different sizes</h2>
      {propsVariants.map((variant, variantIndex) => (
        <Fragment key={variantIndex}>
          <h3>{variant.title}</h3>
          {Array(3).fill(0).map((zero, index) => (
            <Fragment key={index}>
              <h4>size={(1 + index) * 48}</h4>
              <Avatar
                key={`${index}-${variantIndex}`}
                {...variant.props}
                size={(1 + index) * 48}
                clipStyle={clipStyle}
              />
            </Fragment>
          ))}
        </Fragment>
      ))}
      <SuperEllipseClipPath id={superEllipseId} />
    </>
  ))
  .add('Different images', () => (
    <>
      <h3>Valid URLs</h3>
      {Array(3).fill(0).map((zero, index) => (
        <Fragment key={index}>
          <Avatar
            key={index}
            imageUrl={`https://picsum.photos/${200 + (index * 50)}`}
            clipStyle={clipStyle}
          />
          <br />
        </Fragment>
      ))}

      <h3>Invalid URL</h3>
      <Avatar
        imageUrl='https://foo123.bar345/'
        clipStyle={clipStyle}
      />
      <SuperEllipseClipPath id={superEllipseId} />
    </>
  ))
  .add('Unmount before image loading', () => {
    const [withAvatar, toggleAvatar] = useState(true);

    useEffect(() => {
      const timerId = setTimeout(() => {
        toggleAvatar(false);
      }, 120);

      return () => clearTimeout(timerId);
    });

    return (
      <div>
        Avatar {withAvatar ? 'mounted' : 'unmounted'}

        <div>
          {withAvatar && (
            <Avatar
              imageUrl={`https://picsum.photos/${random(1000, 2000, false)}`}
              clipStyle={clipStyle}
            />
          )}
        </div>

        <SuperEllipseClipPath id={superEllipseId} />
      </div>
    );
  });
