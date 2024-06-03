import { Carousel } from '@sima-land/ui-nucleons/carousel';
import { CSSProperties } from 'react';
import russiaNature01 from './static/russia-nature-01.jpg';
import russiaNature02 from './static/russia-nature-02.jpg';
import russiaNature03 from './static/russia-nature-03.jpg';
import russiaNature04 from './static/russia-nature-04.jpg';
import russiaNature05 from './static/russia-nature-05.jpg';
import russiaNature06 from './static/russia-nature-06.jpg';
import russiaNature07 from './static/russia-nature-07.jpg';
import russiaNature08 from './static/russia-nature-08.jpg';
import russiaNature09 from './static/russia-nature-09.jpg';
import russiaNature10 from './static/russia-nature-10.jpg';

export default {
  title: 'common/Carousel',
  component: Carousel,
  parameters: {
    layout: 'padded',
  },
};

const photos: string[] = [
  russiaNature01,
  russiaNature02,
  russiaNature03,
  russiaNature04,
  russiaNature05,
  russiaNature06,
  russiaNature07,
  russiaNature08,
  russiaNature09,
  russiaNature10,
];

const styles = {
  link: {
    display: 'block',
    flexShrink: 0,
    width: 'calc(50% - 8px)',
    height: '320px',
    borderRadius: '8px',
    overflow: 'hidden',
    background: '#eee',
  } satisfies CSSProperties,

  image: {
    display: 'block',
    width: '100%',
    height: '100%',
    objectFit: 'cover',
  } satisfies CSSProperties,
};

export function PreventLinkClickOnDrag() {
  return (
    <div style={{ maxWidth: '1024px', margin: '24px auto' }}>
      <Carousel
        containerProps={{ style: { width: '100%' } }}
        items={photos}
        renderItem={(photo, index) => (
          <a
            key={index}
            href='https://www.sima-land.ru'
            target='_blank'
            rel='noreferrer'
            style={{
              ...styles.link,
              marginLeft: index ? '16px' : 0,
            }}
          >
            <img src={photo} style={styles.image} />
          </a>
        )}
      />
    </div>
  );
}

PreventLinkClickOnDrag.storyName = 'Тест: Предотвращение клика при перетаскивании мышью';
