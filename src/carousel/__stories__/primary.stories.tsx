import { Carousel } from '@sima-land/ui-nucleons/carousel';
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
