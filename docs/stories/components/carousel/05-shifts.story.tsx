import { Carousel } from '@sima-land/ui-nucleons/carousel';
import { TextButton } from '@sima-land/ui-nucleons/text-button';
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
import { useState } from 'react';

export const meta = {
  category: 'Компоненты/Carousel',
  title: 'Пример: изменение количества элементов',
};

const cx = classnames.bind(styles);

const initialPhotos: string[] = [
  russiaNature01,
  russiaNature02,
  russiaNature03,
  russiaNature04,
  russiaNature05,
  russiaNature06,
  russiaNature07,
];

const photos: string[] = [russiaNature08, russiaNature09, russiaNature10];

export default function Shifts() {
  const [items, setItems] = useState(initialPhotos);
  const [currentIndex, setCurrentIndex] = useState(0);

  return (
    <>
      {Boolean(photos.length) && (
        <TextButton
          onClick={() => {
            const newItems = items.concat(photos[0]);
            setItems(newItems);
            setCurrentIndex(newItems.length - 1);
            photos.shift();
          }}
          className={cx('gallery')}
        >
          Добавить фото
        </TextButton>
      )}
      {Boolean(items.length) && (
        <>
          <h3 className={cx('title')}>Наведи на фото чтобы удалить</h3>
          <Carousel
            targetIndex={currentIndex}
            onChangeTargetIndex={setCurrentIndex}
            items={items}
            infinite={false}
            renderItem={(item: string, index) => (
              <Shift
                item={item}
                onDelete={() => {
                  setItems(items.filter(curItem => curItem !== item));
                  setCurrentIndex(index - 1);
                  photos.push(item);
                }}
              />
            )}
            containerProps={{
              className: cx('gallery'),
            }}
            viewportElementProps={{
              className: cx('root'),
            }}
          />
        </>
      )}
    </>
  );
}

function Shift({ item, onDelete }: { item: string; onDelete: () => void }) {
  const [withOverlay, setWithOverlay] = useState(false);

  return (
    <div
      onMouseEnter={() => setWithOverlay(true)}
      onMouseLeave={() => setWithOverlay(false)}
      className={cx('gallery-item')}
      style={{ backgroundImage: `url(${item})` }}
    >
      {withOverlay && (
        <TextButton className={cx('overlay')} color='basic-white' onClick={onDelete}>
          Нажми на меня
        </TextButton>
      )}
    </div>
  );
}
