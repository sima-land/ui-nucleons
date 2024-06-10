import { Carousel } from '@sima-land/ui-nucleons/carousel';
import { CSSProperties } from 'react';
import russiaNature01 from './images/russia-nature-01.jpg';
import russiaNature02 from './images/russia-nature-02.jpg';
import russiaNature03 from './images/russia-nature-03.jpg';
import russiaNature04 from './images/russia-nature-04.jpg';
import russiaNature05 from './images/russia-nature-05.jpg';
import russiaNature06 from './images/russia-nature-06.jpg';
import russiaNature07 from './images/russia-nature-07.jpg';
import russiaNature08 from './images/russia-nature-08.jpg';
import russiaNature09 from './images/russia-nature-09.jpg';
import russiaNature10 from './images/russia-nature-10.jpg';

export const meta = {
  category: 'Компоненты/Carousel',
  title: 'Тест: Предотвращение клика при перетаскивании мышью',
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

export default function TestPreventLinkClickOnDrag() {
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
