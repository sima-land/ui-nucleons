/* eslint-disable require-jsdoc, jsdoc/require-jsdoc */
import { CarouselManager, CarouselEvent } from './manager';
import { DragManager } from './drag';
import { isTouchDevice } from '../helpers/is-touch-device';
import on from '../helpers/on';

export interface CarouselFeature {
  (api: CarouselManager): { clear: VoidFunction };
}

export function featureAutoplay({
  step = 1,
  timeout = 2000,
}: { step?: number; timeout?: number } = {}): CarouselFeature {
  let timerId: number | null = null;

  return function autoplay(carousel: CarouselManager) {
    let hover = false;
    let grab = false;

    function enable() {
      if (!grab && !hover && timerId === null) {
        timerId = window.setInterval(() => {
          carousel.emit(
            new CarouselEvent('index-change', {
              cancelable: true,
              detail: {
                index: carousel.currentIndex + step,
                offset: carousel.currentOffset,
              },
            }),
          );
          carousel.updateCurrentOffset(carousel.currentIndex);
        }, timeout);
      }
    }

    function disable() {
      if (timerId !== null) {
        window.clearInterval(timerId);
        timerId = null;
      }
    }

    enable();

    on(carousel.root.element, 'mouseenter', () => {
      // проверяем так как iOS вызывает mouseenter
      if (!isTouchDevice()) {
        hover = true;
      }
      disable();
    });
    on(carousel.root.element, 'mouseleave', () => {
      hover = false;
      enable();
    });

    carousel.on('drag:start', () => {
      grab = true;
      disable();
    });
    carousel.on('drag:end', () => {
      grab = false;
      enable();
    });

    return { clear: disable };
  };
}

export function featureDrag(): CarouselFeature {
  return function drag(carousel: CarouselManager) {
    let dragStartOffset = 0;

    carousel.on('infinite:correct', e => {
      dragStartOffset += (e.detail as any).correction;
    });

    const manager = new DragManager({
      onStart(event) {
        const correction = carousel.options.vertical ? event.client.y : event.client.x;
        dragStartOffset = correction - carousel.currentOffset;

        carousel.needCorrectOffsetOnResize = false;
        carousel.transitionEnabled = false;
        carousel.emit(new CarouselEvent('drag:start'));
      },

      onMove(event) {
        const offset = carousel.options.vertical ? event.client.y : event.client.x;

        carousel.emit(
          new CarouselEvent('offset-change', {
            cancelable: true,
            detail: {
              index: carousel.currentIndex,
              offset: offset - dragStartOffset,
            },
          }),
        );

        carousel.emit(new CarouselEvent('drag:move'));
      },

      onEnd(event) {
        const offset = carousel.options.vertical ? event.offset.y : event.offset.x;

        carousel.needCorrectOffsetOnResize = true;
        carousel.transitionEnabled = true;
        carousel.emit(new CarouselEvent('drag:end'));

        if (offset !== 0) {
          carousel.scrollToNearest({
            direction: offset > 0 ? 'backward' : 'forward',
          });
        }
      },
    });

    const { unsubscribe } = manager.subscribe(carousel.root.element);

    return { clear: unsubscribe };
  };
}

export function featureInfiniteScroll(): CarouselFeature {
  return function infiniteScroll(carousel: CarouselManager) {
    function onOffsetChange(event: CarouselEvent) {
      if (carousel.container.scrollSize < carousel.root.size) {
        return;
      }

      const countNoClones = carousel.items.length / 3;
      const sizeNoClones = carousel.container.scrollSize / 3; // @todo вот это вообще не должно фигурировать

      switch (true) {
        case event.detail.offset >= 0: {
          const nextIndex = carousel.currentIndex + countNoClones;
          const target = carousel.items[carousel.currentIndex];
          const targetClone = carousel.items[nextIndex];

          if (!targetClone || !target) {
            return;
          }

          const nextOffset = carousel.currentOffset - (targetClone.startBound - target.startBound);

          event.preventDefault();

          carousel.emit(
            new CarouselEvent('infinite:correct', {
              detail: {
                index: nextIndex,
                offset: nextOffset,
                correction: sizeNoClones,
              } as any,
            }),
          );

          carousel.currentIndex = nextIndex;
          carousel.currentOffset = nextOffset;
          break;
        }
        case event.detail.offset <= -(sizeNoClones * 2): {
          const nextIndex = carousel.currentIndex - countNoClones;
          const target = carousel.items[carousel.currentIndex];
          const targetClone = carousel.items[nextIndex];

          if (!targetClone || !target) {
            return;
          }

          const nextOffset = carousel.currentOffset + (target.startBound - targetClone.startBound);

          event.preventDefault();

          carousel.emit(
            new CarouselEvent('infinite:correct', {
              detail: {
                index: nextIndex,
                offset: nextOffset,
                correction: -sizeNoClones,
              } as any,
            }),
          );

          carousel.currentIndex = nextIndex;
          carousel.currentOffset = nextOffset;
          break;
        }
      }
    }

    carousel.on('offset-change', onOffsetChange);

    // carousel.on('index-change', e => {
    //   console.log('index-change:', carousel.currentIndex, '>>', e.detail.index);
    // });

    return { clear: () => void 0 };
  };
}
