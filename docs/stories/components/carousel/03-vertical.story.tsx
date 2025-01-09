import { Carousel } from '@sima-land/ui-nucleons/carousel';
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
import classnames from 'classnames/bind';
import styles from './stories.m.scss';

export const meta = {
  category: 'Компоненты/Carousel',
  title: 'Вертикальные карусели',
};

const cx = classnames.bind(styles);

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

export default function Vertical() {
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

      <h3 className={cx('title')}>Кнопки; перетаскивание; шаг = 2</h3>
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

      <h3 className={cx('title')}>Без кнопки в конце/начале списка; без перетаскивания; шаг = 1</h3>
      <Carousel
        vertical
        step={1}
        infinite={false}
        draggable={false}
        items={photos}
        renderControl={(data, props) => data.canUse && Carousel.defaultRenderControl(data, props)}
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
