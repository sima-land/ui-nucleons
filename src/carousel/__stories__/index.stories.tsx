import { Carousel } from '@sima-land/ui-nucleons/carousel';
import { ReactNode, useEffect, useState } from 'react';
import { random } from 'lodash';
import { someImageUrl } from '../../../.storybook/utils';
import classnames from 'classnames/bind';
import styles from './stories.module.scss';

const cx = classnames.bind(styles);

export default {
  title: 'common/Carousel',
  component: Carousel,
  parameters: {
    layout: 'padded',
  },
};

const photos: string[] = [
  someImageUrl({ w: 200, h: 200, id: 1 }),
  someImageUrl({ w: 200, h: 200, id: 2 }),
  someImageUrl({ w: 200, h: 200, id: 3 }),
  someImageUrl({ w: 200, h: 200, id: 4 }),
  someImageUrl({ w: 200, h: 200, id: 5 }),
  someImageUrl({ w: 200, h: 200, id: 6 }),
  someImageUrl({ w: 200, h: 200, id: 7 }),
  someImageUrl({ w: 200, h: 200, id: 8 }),
  someImageUrl({ w: 200, h: 200, id: 9 }),
  someImageUrl({ w: 200, h: 200, id: 10 }),
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
  const [duration] = useState(() => random(1000, 3000, false));

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
  return (
    <div style={{ maxWidth: '1024px', margin: '24px auto' }}>
      <Carousel
        containerProps={{ style: { width: '100%' } }}
        items={[0, 10, 100, 1003, 1024, 1026, 1031, 1044, 1053]}
        renderItem={(id, index) => (
          <a
            key={index}
            href='https://www.sima-land.ru'
            style={{
              display: 'block',
              flexShrink: 0,
              width: 'calc(50% - 8px)',
              height: '320px',
              marginLeft: index ? '16px' : 0,
              borderRadius: '8px',
              overflow: 'hidden',
              background: '#eee',
            }}
            target='_blank'
            rel='noreferrer'
          >
            <img
              src={someImageUrl({ w: 320, h: 320, id })}
              style={{ display: 'block', width: '100%', height: '100%', objectFit: 'cover' }}
            />
          </a>
        )}
      />
    </div>
  );
}

PreventLinkClickOnDrag.storyName = 'Тест: предотвращение клика при перетаскивании мышью';
