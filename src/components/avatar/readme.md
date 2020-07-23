```jsx
import Avatar from './index';
import SuperEllipseClipPath from '../super-ellipse-clip-path';

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

<div style={{ background: '#fff', padding: 20 }}>
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
  <SuperEllipseClipPath id={superEllipseId} />
</div>
```
