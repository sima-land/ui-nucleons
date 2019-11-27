Горизонтальная карусель, прокручивается мышью, прокрутка кнопками по 3:
```jsx
import { items as testItems } from '../gallery/items';
import classes from './__stories__/test-carousel.scss';
import Carousel from './index.js';

<Carousel
  items={testItems}
  renderItem={(item, index) => (
    <div
      key={index}
      className={classes['test-carousel-item']}
      style={{ backgroundImage: `url(${item.src})` }}
    />
  )}
  containerProps={{
    className: classes['test-carousel'],
  }}
/>
```

Горизонтальная карусель без прокрутки мышью, прокрутка кнопками по 1:
```jsx
import { items as testItems } from '../gallery/items';
import classes from './__stories__/test-carousel.scss';
import Carousel from './index.js';

<Carousel
  items={testItems}
  renderItem={(item, index) => (
    <div
      key={index}
      className={classes['test-carousel-item']}
      style={{ backgroundImage: `url(${item.src})` }}
    />
  )}
  draggable={false}
  step={1}
  containerProps={{
    className: classes['test-carousel'],
  }}
/>
```

Горизонтальная карусель без кнопок:
```jsx
import { items as testItems } from '../gallery/items';
import classes from './__stories__/test-carousel.scss';
import Carousel from './index.js';

<Carousel
  items={testItems}
  renderItem={(item, index) => (
    <div
      key={index}
      className={classes['test-carousel-item']}
      style={{ backgroundImage: `url(${item.src})` }}
    />
  )}
  withControls={false}
  containerProps={{
    className: classes['test-carousel'],
  }}
/>
```

Вертикальная карусель:
```jsx
import { items as testItems } from '../gallery/items';
import classes from './__stories__/test-carousel.scss';
import Carousel from './index.js';

<Carousel
  vertical
  items={testItems}
  renderItem={(item, index) => (
    <div
      key={index}
      className={[
        classes['test-carousel-item'],
        classes.vertical,
      ].join(' ')}
      style={{ backgroundImage: `url(${item.src})` }}
    />
  )}
  containerProps={{
    className: [
      classes['test-carousel'],
      classes.vertical,
    ].join(' '),
  }}
/>
```
