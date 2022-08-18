import React, { useRef, Children, isValidElement, useEffect } from 'react';
import { CarouselEvent, CarouselManager } from './manager';
import { featureAutoplay, featureDrag, featureInfiniteScroll } from './features';
import styles from './carousel.module.scss';

/**
 * Карусель.
 * @param props Свойства.
 * @return Элемент.
 */
export function Carousel({
  children,
}: {
  infinite?: boolean;
  draggable?: boolean;
  children: React.ReactNode;
}) {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const wrapper = wrapperRef.current;

    if (wrapper) {
      const manager = new CarouselManager(wrapperRef.current);

      const { clear: clearDrag } = featureDrag()(manager);
      const { clear: clearAutoplay } = featureAutoplay({ step: 1, timeout: 1200 })(manager);
      const { clear: clearInfiniteScroll } = featureInfiniteScroll()(manager);

      window.onkeydown = e => {
        switch (e.key) {
          case 'ArrowLeft':
            manager.emit(
              new CarouselEvent('index-change', {
                cancelable: true,
                detail: {
                  index: manager.currentIndex - 1,
                  offset: manager.currentOffset,
                },
              }),
            );
            break;
          case 'ArrowRight':
            manager.emit(
              new CarouselEvent('index-change', {
                cancelable: true,
                detail: {
                  index: manager.currentIndex + 1,
                  offset: manager.currentOffset,
                },
              }),
            );
            break;
        }
      };

      manager.transitionEnabled = true;

      return () => {
        clearDrag();
        clearAutoplay();
        clearInfiniteScroll();
      };
    }
  }, []);

  const items = Children.toArray(children).filter(
    item => isValidElement(item) && item.type === CarouselItem,
  );

  return (
    <div ref={wrapperRef} className={styles.wrapper}>
      <div ref={containerRef} className={styles.container}>
        {items}
        {items}
        {items}
      </div>
    </div>
  );
}

/**
 * Ячейка карусели.
 * @param props Свойства.
 * @return Элемент.
 */
function CarouselItem({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}

Carousel.Item = CarouselItem;
