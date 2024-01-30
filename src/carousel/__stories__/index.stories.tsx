import { Carousel } from '@sima-land/ui-nucleons/carousel';
import { CSSProperties, ReactNode, useEffect, useState } from 'react';
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
import classnames from 'classnames/bind';
import styles from './stories.m.scss';

const cx = classnames.bind(styles);

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

export function Primary() {
  return (
    <>
      <Carousel
        items={photos}
        renderItem={(item, index) => (
          <div
            key={index}
            className={cx('gallery-item')}
            style={{ backgroundImage: `url(${item})` }}
          />
        )}
        containerProps={{
          className: cx('gallery'),
        }}
      />
    </>
  );
}

Primary.storyName = 'Простой пример';

export function Horizontal() {
  return (
    <>
      <h3 className={cx('title')}>
        Кнопки; перетаскивание; бесконечность; шаг = 3; по умолчанию на 4 элементе
      </h3>
      <Carousel
        targetIndex={3}
        items={photos}
        renderItem={(item, index) => (
          <div
            key={index}
            className={cx('gallery-item')}
            style={{ backgroundImage: `url(${item})` }}
          />
        )}
        containerProps={{
          className: cx('gallery'),
        }}
      />

      <h3 className={cx('title')}>Кнопки; без перетаскивания; бесконечность; шаг = 1</h3>
      <Carousel
        step={1}
        draggable={false}
        items={photos}
        renderItem={(item, index) => (
          <div
            key={index}
            className={cx('gallery-item')}
            style={{ backgroundImage: `url(${item})` }}
          />
        )}
        containerProps={{
          className: cx('gallery'),
        }}
      />

      <h3 className={cx('title')}>Без кнопок; перетаскивание; бесконечность</h3>
      <Carousel
        withControls={false}
        items={photos}
        renderItem={(item, index) => (
          <div
            key={index}
            className={cx('gallery-item')}
            style={{ backgroundImage: `url(${item})` }}
          />
        )}
        containerProps={{
          className: cx('gallery'),
        }}
      />

      <h3 className={cx('title')}>Без кнопок</h3>
      <Carousel
        infinite={false}
        items={photos}
        withControls={false}
        renderItem={(item, index) => (
          <div
            key={index}
            className={cx('gallery-item')}
            style={{ backgroundImage: `url(${item})` }}
          />
        )}
        containerProps={{
          className: cx('gallery'),
        }}
      />

      <h3 className={cx('title')}>Автопрокрутка; бесконечность</h3>
      <Carousel
        draggable={false}
        autoplay
        autoplayTimeout={1000}
        items={photos}
        withControls={false}
        renderItem={(item, index) => (
          <div
            key={index}
            className={cx('gallery-item')}
            style={{ backgroundImage: `url(${item})` }}
          />
        )}
        containerProps={{
          className: cx('gallery'),
        }}
      />

      <h3 className={cx('title')}>Автопрокрутка; бесконечность; перетаскивание</h3>
      <Carousel
        draggable
        autoplay
        autoplayTimeout={1000}
        items={photos}
        withControls={false}
        renderItem={(item, index) => (
          <div
            key={index}
            className={cx('gallery-item')}
            style={{ backgroundImage: `url(${item})` }}
          />
        )}
        containerProps={{
          className: cx('gallery'),
        }}
      />
      <h3 className={cx('title')}>
        Автопрокрутка; бесконечность; перетаскивание; пауза при наведении
      </h3>
      <Carousel
        draggable
        autoplay
        autoplayTimeout={1000}
        autoplayHoverPause
        items={photos}
        withControls={false}
        renderItem={(item, index) => (
          <div
            key={index}
            className={cx('gallery-item')}
            style={{ backgroundImage: `url(${item})` }}
          />
        )}
        containerProps={{
          className: cx('gallery'),
        }}
      />

      <h3 className={cx('title')}>Автопрокрутка; перетаскивание; пауза при наведении</h3>
      <Carousel
        draggable
        autoplay
        autoplayTimeout={1000}
        autoplayHoverPause
        infinite={false}
        items={[...photos, ...photos, ...photos]}
        withControls={false}
        renderItem={(item, index) => (
          <div
            key={index}
            className={cx('gallery-item')}
            style={{ backgroundImage: `url(${item})` }}
          />
        )}
        containerProps={{
          className: cx('gallery'),
        }}
      />
    </>
  );
}

Horizontal.storyName = 'Горизонтальные карусели';

export function Vertical() {
  return (
    <>
      <h3 className={cx('title')}>Кнопки; перетаскивание; бесконечность; шаг = 3</h3>
      <Carousel
        vertical
        items={photos}
        renderItem={(item, index) => (
          <div
            key={index}
            className={cx('gallery-item', 'vertical')}
            style={{ backgroundImage: `url(${item})` }}
          />
        )}
        containerProps={{
          className: cx('gallery', 'vertical'),
        }}
      />

      <h3 className={cx('title')}>Кнопки; без перетаскивания; бесконечность; шаг = 1</h3>
      <Carousel
        vertical
        step={1}
        draggable={false}
        items={photos}
        renderItem={(item, index) => (
          <div
            key={index}
            className={cx('gallery-item', 'vertical')}
            style={{ backgroundImage: `url(${item})` }}
          />
        )}
        containerProps={{
          className: cx('gallery', 'vertical'),
        }}
      />

      <h3 className={cx('title')}>Без кнопок; перетаскивание; бесконечность; шаг = 2</h3>
      <Carousel
        vertical
        step={2}
        withControls={false}
        items={photos}
        renderItem={(item, index) => (
          <div
            key={index}
            className={cx('gallery-item', 'vertical')}
            style={{ backgroundImage: `url(${item})` }}
          />
        )}
        containerProps={{
          className: cx('gallery', 'vertical'),
        }}
      />

      <h3 className={cx('title')}>Кнопки</h3>
      <Carousel
        vertical
        step={2}
        infinite={false}
        items={photos}
        renderItem={(item, index) => (
          <div
            key={index}
            className={cx('gallery-item', 'vertical')}
            style={{ backgroundImage: `url(${item})` }}
          />
        )}
        containerProps={{
          className: cx('gallery', 'vertical'),
        }}
      />
    </>
  );
}

Vertical.storyName = 'Вертикальные карусели';

export function Reels() {
  const count = 8;
  const [currentIndex, setCurrentIndex] = useState(0);

  return (
    <Carousel
      step={1}
      infinite={false}
      items={Array(count).fill(0)}
      targetIndex={currentIndex}
      onChangeTargetIndex={setCurrentIndex}
      renderItem={(zero, index) => (
        <Reel play={index === currentIndex} onEnded={() => setCurrentIndex((index + 1) % count)}>
          {index + 1}
        </Reel>
      )}
    />
  );
}

function Reel({
  play,
  onEnded,
  children,
}: {
  play?: boolean;
  onEnded?: () => void;
  children?: ReactNode;
}) {
  const [duration] = useState(() => 1000 + 2000 * Math.random());

  useEffect(() => {
    if (play) {
      const timerId = setTimeout(() => onEnded?.(), duration);
      return () => clearTimeout(timerId);
    }
  }, [play, duration]);

  return (
    <div className={cx('reel', { current: play })} style={{ animationDuration: `${duration}ms` }}>
      {children}
    </div>
  );
}

Reels.storyName = 'Пример: Reels';

export function PreventLinkClickOnDrag() {
  const style = {
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
              ...style.link,
              marginLeft: index ? '16px' : 0,
            }}
          >
            <img src={photo} style={style.image} />
          </a>
        )}
      />
    </div>
  );
}

PreventLinkClickOnDrag.storyName = 'Тест: Предотвращение клика при перетаскивании мышью';

export function TestActiveElementBlur() {
  return (
    <>
      <input type='text' style={{ marginBottom: '16px' }} />
      <Carousel
        items={photos}
        renderItem={(item, index) => (
          <div
            key={index}
            className={cx('gallery-item')}
            style={{ backgroundImage: `url(${item})` }}
          />
        )}
        containerProps={{
          className: cx('gallery'),
        }}
      />
    </>
  );
}

TestActiveElementBlur.storyName = 'Тест: Blur активного элемента при перетаскивании';
