import { Carousel } from '@sima-land/ui-nucleons/carousel';
import { ReactNode, useEffect, useState } from 'react';
import classnames from 'classnames/bind';
import styles from './reels.m.scss';

const cx = classnames.bind(styles);

export const meta = {
  category: 'Компоненты/Carousel',
  title: 'Пример: Reels',
  parameters: {
    layout: 'padded',
  },
};

export default function Reels() {
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
