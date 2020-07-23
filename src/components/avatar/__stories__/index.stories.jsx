import React from 'react';
import { storiesOf } from '@storybook/react';
import Avatar from '../';
import SuperEllipseClipPath from '../../super-ellipse-clip-path';

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
    title: 'With title',
    props: { title: 'Alexander Sergeevich Pushkin' },
  },
  {
    title: 'With monogram',
    props: { monogram: 'Alexander Sergeevich Pushkin' },
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
        <>
          <h3>{variant.title}</h3>
          <Avatar
            key={index}
            {...variant.props}
            clipStyle={clipStyle}
          />
        </>
      ))}

      <h2>Different content (custom colors)</h2>
      {propsVariants.map((variant, index) => (
        <>
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
        </>
      ))}

      <h2>Different sizes</h2>
      {propsVariants.map((variant, variantIndex) => (
        <>
          <h3>{variant.title}</h3>
          {Array(3).fill(0).map((zero, index) => (
            <>
              <h4>size={(1 + index) * 48}</h4>
              <Avatar
                key={`${index}-${variantIndex}`}
                {...variant.props}
                size={(1 + index) * 48}
                clipStyle={clipStyle}
              />
            </>
          ))}
        </>
      ))}
      <SuperEllipseClipPath id={superEllipseId} />
    </>
  ))
  .add('Different images', () => (
    <>
      <h3>Valid URLs</h3>
      {Array(3).fill(0).map((zero, index) => (
        <>
          <Avatar
            key={index}
            imageUrl={`https://picsum.photos/${200 + (index * 50)}`}
            clipStyle={clipStyle}
          />
          <br />
        </>
      ))}

      <h3>Invalid URL</h3>
      <Avatar
        imageUrl='https://foo123.bar345/'
        clipStyle={clipStyle}
      />
      <SuperEllipseClipPath id={superEllipseId} />
    </>
  ));
