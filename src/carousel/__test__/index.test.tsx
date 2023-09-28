import { Carousel } from '..';
import DraggableEvent from '../helpers/draggable-event';
import classes from '../carousel.module.scss';
import Point from '../../helpers/point';
import { act, fireEvent, render } from '@testing-library/react';
import { createRef } from 'react';
import { getTranslateStyle } from '../../helpers/styles';

const defineProp = (object: Record<any, any>, key: any, value: any) => {
  Object.defineProperty(object, key, {
    value,
    configurable: true,
  });
};

// Подменяет значения, отвечающие за определение позиции и размера элементов карусели.
const placeItems = ({
  containerEl,
  itemsSelector,
  vertical,
  itemSize,
  itemsCount,
  offset = 0,
}: {
  containerEl: HTMLElement;
  itemsSelector: string;
  vertical: boolean;
  itemSize: number;
  itemsCount: number;
  offset: number;
}) => {
  // подменяем размер элемента-контейнера
  defineProp(containerEl, vertical ? 'scrollHeight' : 'scrollWidth', itemSize * itemsCount);
  defineProp(containerEl, !vertical ? 'scrollHeight' : 'scrollWidth', itemSize);

  // подменяем размеры всех элементов карусели
  containerEl.querySelectorAll(itemsSelector).forEach((itemEl, index) => {
    jest.spyOn(itemEl, 'getBoundingClientRect').mockImplementation(
      () =>
        ({
          width: itemSize,
          height: itemSize,
          left: vertical ? 0 : index * itemSize + offset,
          right: vertical ? itemSize : index * itemSize + itemSize + offset,
          top: !vertical ? 0 : index * itemSize + offset,
          bottom: !vertical ? itemSize : index * itemSize + itemSize + offset,
        } as any),
    );
  });
};

const FakeElement = {
  create: (data: any) => {
    const el = document.createElement('div');

    Object.assign(el, data);

    return el;
  },

  withRect: (rect: any) =>
    FakeElement.create({
      getBoundingClientRect: () => rect,
    }),
};

describe('Carousel', () => {
  it('should enable autoplay on mount', () => {
    const instance = new Carousel({ autoplay: true });

    jest.spyOn(instance, 'enableAutoplay');

    expect((instance as any).enableAutoplay).toHaveBeenCalledTimes(0);
    instance.componentDidMount();
    expect((instance as any).enableAutoplay).toHaveBeenCalledTimes(1);

    (instance as any).props = { autoplay: false };
    instance.componentDidUpdate({ autoplay: true });
    expect((instance as any).enableAutoplay).toHaveBeenCalledTimes(1);
    instance.componentDidMount();
    expect((instance as any).enableAutoplay).toHaveBeenCalledTimes(1);
  });

  it('should toggle autoplay on update', () => {
    const instance = new Carousel({});

    jest.spyOn(instance, 'enableAutoplay');
    jest.spyOn(instance, 'disableAutoplay');

    expect(instance.enableAutoplay).toHaveBeenCalledTimes(0);
    expect(instance.disableAutoplay).toHaveBeenCalledTimes(0);

    (instance as any).props = { autoplay: true };
    instance.componentDidUpdate({});
    expect(instance.enableAutoplay).toHaveBeenCalledTimes(1);
    expect(instance.disableAutoplay).toHaveBeenCalledTimes(0);

    (instance as any).props = { autoplay: false };
    instance.componentDidUpdate({ autoplay: true });
    expect(instance.enableAutoplay).toHaveBeenCalledTimes(1);
    expect(instance.disableAutoplay).toHaveBeenCalledTimes(1);
  });

  it('should enable auto move on drag end', () => {
    const instance = new Carousel({ autoplay: true });

    jest.spyOn(instance, 'canDrag').mockImplementation(() => true);
    jest.spyOn(instance, 'toggleAutoMove');

    expect(instance.toggleAutoMove).toHaveBeenCalledTimes(0);
    instance.onDragEnd(new DraggableEvent({ offset: Point(), client: Point() }));
    expect(instance.toggleAutoMove).toHaveBeenCalledTimes(1);
  });

  it('should disable auto move on mouse enter', () => {
    const ref = createRef<Carousel>();
    const getInstance = () => ref.current as Carousel;
    const { container } = render(<Carousel ref={ref} autoplay autoplayHoverPause />);

    jest.spyOn(getInstance(), 'toggleAutoMove');

    expect(getInstance().toggleAutoMove).toHaveBeenCalledTimes(0);
    fireEvent.mouseEnter(container.querySelector(`.${classes['carousel-wrapper']}`) as any);
    expect(getInstance().toggleAutoMove).toHaveBeenCalledTimes(1);
    expect(getInstance().toggleAutoMove).toHaveBeenCalledWith(false);
  });

  it('should not disable auto move on mouse enter', () => {
    const ref = createRef<Carousel>();
    const getInstance = () => ref.current as Carousel;
    const { container } = render(<Carousel ref={ref} autoplay autoplayHoverPause={false} />);

    jest.spyOn(getInstance(), 'toggleAutoMove');

    expect(getInstance().toggleAutoMove).toHaveBeenCalledTimes(0);
    fireEvent.mouseEnter(container.querySelector(`.${classes['carousel-wrapper']}`) as any);
    expect(getInstance().toggleAutoMove).toHaveBeenCalledTimes(0);
  });

  it('should enable auto move on mouse leave', () => {
    const ref = createRef<Carousel>();
    const getInstance = () => ref.current as Carousel;
    const { container } = render(<Carousel ref={ref} autoplay autoplayHoverPause />);

    // simulate drag start
    getInstance().onDragStart(new DraggableEvent({ offset: Point(), client: Point() }));

    jest.spyOn(getInstance(), 'toggleAutoMove');
    expect(getInstance().toggleAutoMove).toHaveBeenCalledTimes(0);

    // simulate mouse leave
    fireEvent.mouseLeave(container.querySelector(`.${classes['carousel-wrapper']}`) as any);
    expect(getInstance().toggleAutoMove).toHaveBeenCalledTimes(1);
    expect(getInstance().toggleAutoMove).toHaveBeenCalledWith(true);
  });

  it('should not enable auto move on mouse leave', () => {
    const ref = createRef<Carousel>();
    const getInstance = () => ref.current as Carousel;
    const { container } = render(<Carousel ref={ref} autoplay autoplayHoverPause={false} />);

    // simulate drag start
    getInstance().onDragStart(new DraggableEvent({ offset: Point(), client: Point() }));

    jest.spyOn(getInstance(), 'toggleAutoMove');
    expect(getInstance().toggleAutoMove).toHaveBeenCalledTimes(0);

    // simulate mouse leave
    fireEvent.mouseLeave(container.querySelector(`.${classes['carousel-wrapper']}`) as any);
    expect(getInstance().toggleAutoMove).toHaveBeenCalledTimes(0);
  });

  it('should register timer by setInterval', () => {
    jest.useFakeTimers();

    const ref = createRef<Carousel>();
    const getInstance = () => ref.current as Carousel;

    render(<Carousel ref={ref} autoplay autoplayTimeout={1000} />);

    jest.spyOn(getInstance(), 'moveForward');

    expect(getInstance().moveForward).toHaveBeenCalledTimes(0);
    jest.advanceTimersByTime(1200);
    expect(getInstance().moveForward).toHaveBeenCalledTimes(1);
  });

  it('scrollToItem should use defaults correctly', () => {
    const spy = jest.fn();
    const ref = createRef<Carousel>();
    const getInstance = () => ref.current as Carousel;

    render(<Carousel ref={ref} items={[1, 2, 3]} />);

    jest.spyOn(getInstance(), 'toggleDragTransition');
    Object.defineProperty(getInstance(), 'currentIndex', {
      get: () => {
        spy();
        return 0;
      },
    });
    expect(spy).toHaveBeenCalledTimes(0);
    expect(getInstance().toggleDragTransition).toHaveBeenCalledTimes(0);

    getInstance().scrollToItem();
    expect(getInstance().toggleDragTransition).toHaveBeenCalledTimes(1);
    expect(spy).toHaveBeenCalledTimes(1);
  });

  it('onReady should pass currentIndex when component did mounted', () => {
    const spy = jest.fn();
    render(<Carousel items={[1, 2, 3]} targetIndex={2} onReady={spy} />);
    expect(spy).toHaveBeenCalledTimes(1);
    expect(spy).toHaveBeenCalledWith(2);
  });

  it('onChangeTargetIndex should pass currentIndex when set new index', () => {
    const spy = jest.fn();
    const ref = createRef<Carousel>();
    const getInstance = () => ref.current as Carousel;

    render(<Carousel ref={ref} items={[1, 2, 3]} onChangeTargetIndex={spy} />);

    getInstance().setCurrentIndex(3);
    expect(spy).toHaveBeenCalledTimes(1);
    expect(spy).toHaveBeenCalledWith(3);
  });

  it('should call observeResize on mount', () => {
    const fakeInstance = {
      props: {},
      toggleMounted: jest.fn(),
      forceUpdate: jest.fn(),
      observeResize: jest.fn(),
      handleResize: jest.fn(),
    };

    Carousel.prototype.componentDidMount.call(fakeInstance);

    expect(fakeInstance.observeResize).toHaveBeenCalledTimes(1);
  });

  it('observeResize() should use observer', () => {
    const fakeInstance = {
      props: {},
      toggleMounted: jest.fn(),
      forceUpdate: jest.fn(),
      observeResize: jest.fn(),
      handleResize: jest.fn(),
      offWindowResize: jest.fn(),
      rootElementRef: {
        current: document.createElement('div'),
      },
    };

    let callback: unknown = null;
    const observeSpy = jest.fn();
    const unobserveSpy = jest.fn();
    const disconnectSpy = jest.fn();

    class FakeObserver {
      constructor(callbackArg: any) {
        callback = callbackArg;
      }
      observe(...args: any[]) {
        observeSpy(...args);
      }
      unobserve(...args: any[]) {
        unobserveSpy(...args);
      }
      disconnect() {
        disconnectSpy();
      }
    }

    Carousel.prototype.observeResize.call(fakeInstance, FakeObserver);

    // проверяем, что выполняется только подписка
    expect(observeSpy).toHaveBeenCalledTimes(1);
    expect(observeSpy).toHaveBeenCalledWith(fakeInstance.rootElementRef.current);
    expect(unobserveSpy).toHaveBeenCalledTimes(0);
    expect(disconnectSpy).toHaveBeenCalledTimes(0);

    //
    fakeInstance.offWindowResize();

    expect(observeSpy).toHaveBeenCalledTimes(1);
    expect(unobserveSpy).toHaveBeenCalledTimes(0);
    expect(disconnectSpy).toHaveBeenCalledTimes(1);

    // проверяем, что передается нужный callback
    expect(fakeInstance.handleResize).toHaveBeenCalledTimes(0);
    typeof callback === 'function' && callback();
    expect(fakeInstance.handleResize).toHaveBeenCalledTimes(1);
  });

  it('observeResize() should do nothing when ref is emtpy or class not provided', () => {
    const fakeInstance = {
      props: {},
      toggleMounted: jest.fn(),
      forceUpdate: jest.fn(),
      observeResize: jest.fn(),
      handleResize: jest.fn(),
      offWindowResize: jest.fn(),
      rootElementRef: {
        current: null,
      },
    };

    const observeSpy = jest.fn();
    const unobserveSpy = jest.fn();
    const disconnectSpy = jest.fn();

    class FakeObserver {
      observe(...args: any[]) {
        observeSpy(...args);
      }
      unobserve(...args: any[]) {
        unobserveSpy(...args);
      }
      disconnect() {
        disconnectSpy();
      }
    }

    Carousel.prototype.observeResize.call(fakeInstance, FakeObserver);

    expect(observeSpy).toHaveBeenCalledTimes(0);
    expect(unobserveSpy).toHaveBeenCalledTimes(0);
    expect(disconnectSpy).toHaveBeenCalledTimes(0);

    Carousel.prototype.observeResize.call(fakeInstance, undefined);

    expect(observeSpy).toHaveBeenCalledTimes(0);
    expect(unobserveSpy).toHaveBeenCalledTimes(0);
    expect(disconnectSpy).toHaveBeenCalledTimes(0);
  });

  it('handleResize() should correct offset without transition', () => {
    const fakeInstance = {
      toggleDragTransition: jest.fn(),
      isTransitionEnabled: () => true,
      scrollToItem: jest.fn(),
      updateItemsVisibility: jest.fn(),
    };

    expect(fakeInstance.toggleDragTransition).toHaveBeenCalledTimes(0);
    expect(fakeInstance.scrollToItem).toHaveBeenCalledTimes(0);
    expect(fakeInstance.updateItemsVisibility).toHaveBeenCalledTimes(0);

    Carousel.prototype.handleResize.call(fakeInstance);

    expect(fakeInstance.toggleDragTransition).toHaveBeenCalledTimes(2);
    expect(fakeInstance.scrollToItem).toHaveBeenCalledTimes(1);
    expect(fakeInstance.scrollToItem).toHaveBeenCalledWith({ needTransition: false });
    expect(fakeInstance.updateItemsVisibility).toHaveBeenCalledTimes(1);
  });

  it('should call "offWindowResize" on unmount', () => {
    const ref = createRef<Carousel>();
    const getInstance = () => ref.current as Carousel;
    const { unmount } = render(<Carousel ref={ref} items={[1, 2, 3]} infinite={false} />);

    const spy = jest.spyOn(getInstance(), 'offWindowResize');

    expect(spy).toHaveBeenCalledTimes(0);

    unmount();

    expect(spy).toHaveBeenCalledTimes(1);
  });
});

describe('Carousel: finite mode', () => {
  beforeEach(() => {
    jest.resetAllMocks();
  });

  it('should render without props', () => {
    const { container } = render(<Carousel infinite={false} />);

    expect(container.querySelectorAll(`.${classes['carousel-wrapper']}`)).toHaveLength(1);
  });

  it('should handle "vertical" props', () => {
    const { container } = render(<Carousel vertical infinite={false} />);

    expect(container.querySelector(`.${classes['carousel-items-container']}`)?.className).toContain(
      classes.vertical,
    );
  });

  it('should update current index in state on "targetIndex" prop change', () => {
    const ref = createRef<Carousel>();
    const getInstance = () => ref.current as Carousel;
    const { rerender } = render(<Carousel ref={ref} targetIndex={0} infinite={false} />);

    jest.spyOn(getInstance(), 'setCurrentIndex');
    jest.spyOn(getInstance(), 'toggleDragTransition');
    jest.spyOn(getInstance(), 'updateItemsVisibility');

    expect(getInstance().setCurrentIndex).toHaveBeenCalledTimes(0);
    expect(getInstance().toggleDragTransition).toHaveBeenCalledTimes(0);
    expect(getInstance().updateItemsVisibility).toHaveBeenCalledTimes(0);

    // not changed
    rerender(<Carousel ref={ref} targetIndex={0} infinite={false} />);
    expect(getInstance().setCurrentIndex).toHaveBeenCalledTimes(0);
    expect(getInstance().toggleDragTransition).toHaveBeenCalledTimes(0);
    expect(getInstance().updateItemsVisibility).toHaveBeenCalledTimes(1);

    rerender(<Carousel ref={ref} targetIndex={12} infinite={false} />);
    expect(getInstance().setCurrentIndex).toHaveBeenCalledTimes(1);
    expect(getInstance().setCurrentIndex).toHaveBeenCalledWith(12);
    expect(getInstance().toggleDragTransition).toHaveBeenCalledTimes(1);
    expect(getInstance().toggleDragTransition).toHaveBeenCalledWith(true);
    expect(getInstance().updateItemsVisibility).toHaveBeenCalledTimes(2);
  });

  it('should unsubscribe from "resize" event before unmount', () => {
    const { unmount } = render(<Carousel />);

    expect(() => {
      unmount();
    }).not.toThrow();
  });

  it('isAllItemsVisible() should works properly', () => {
    const ref = createRef<Carousel>();
    const getInstance = () => ref.current as Carousel;
    const { rerender } = render(
      <Carousel ref={ref} vertical={false} infinite={false} items={[1, 2, 4, 5, 6, 7, 8, 9]} />,
    );
    const wrapperEl = getInstance().wrapperRef.current as HTMLElement as HTMLElement;
    const containerEl = getInstance().containerRef.current as HTMLElement as HTMLElement;

    // horizontal & not all visible
    jest.spyOn(wrapperEl, 'getBoundingClientRect').mockImplementation(
      () =>
        ({
          top: 0,
          left: 0,
          width: 100,
          height: 20,
          right: 100,
          bottom: 20,
        } as any),
    );
    jest
      .spyOn(containerEl.firstElementChild as HTMLElement, 'getBoundingClientRect')
      .mockImplementation(
        () =>
          ({
            left: 0,
          } as any),
      );
    jest.spyOn(containerEl.children[7], 'getBoundingClientRect').mockImplementation(
      () =>
        ({
          right: 200,
        } as any),
    );
    expect(getInstance().isAllItemsVisible()).toBe(false);

    // horizontal & all visible
    jest
      .spyOn(containerEl.firstElementChild as HTMLElement, 'getBoundingClientRect')
      .mockImplementation(
        () =>
          ({
            left: 0,
          } as any),
      );
    jest.spyOn(containerEl.children[7], 'getBoundingClientRect').mockImplementation(
      () =>
        ({
          right: 80,
        } as any),
    );
    expect(getInstance().isAllItemsVisible()).toBe(true);

    // vertical & not all visible
    rerender(<Carousel ref={ref} vertical infinite={false} items={[1, 2, 4, 5, 6, 7, 8, 9]} />);
    jest.spyOn(wrapperEl, 'getBoundingClientRect').mockImplementation(
      () =>
        ({
          top: 0,
          left: 0,
          width: 40,
          height: 200,
          right: 40,
          bottom: 200,
        } as any),
    );
    jest
      .spyOn(containerEl.firstElementChild as HTMLElement, 'getBoundingClientRect')
      .mockImplementation(
        () =>
          ({
            top: 0,
          } as any),
      );
    jest.spyOn(containerEl.children[7], 'getBoundingClientRect').mockImplementation(
      () =>
        ({
          bottom: 240,
        } as any),
    );
    expect(getInstance().isAllItemsVisible()).toBe(false);

    // vertical & all visible
    jest
      .spyOn(containerEl.firstElementChild as HTMLElement, 'getBoundingClientRect')
      .mockImplementation(
        () =>
          ({
            top: 0,
          } as any),
      );
    jest.spyOn(containerEl.children[7], 'getBoundingClientRect').mockImplementation(
      () =>
        ({
          bottom: 80,
        } as any),
    );
    expect(getInstance().isAllItemsVisible()).toBe(true);
  });

  it('onDragStart() should works properly', () => {
    const ref = createRef<Carousel>();
    const getInstance = () => ref.current as Carousel;

    render(<Carousel ref={ref} infinite={false} />);

    jest.spyOn(getInstance(), 'saveDragStartData');
    jest.spyOn(getInstance(), 'toggleDragTransition');

    expect(getInstance().saveDragStartData).toHaveBeenCalledTimes(0);
    expect(getInstance().toggleDragTransition).toHaveBeenCalledTimes(0);
    getInstance().onDragStart({ offset: { x: 3, y: 5 } } as any);
    expect(getInstance().saveDragStartData).toHaveBeenCalledTimes(1);
    expect(getInstance().toggleDragTransition).toHaveBeenCalledTimes(1);
  });

  it('moveForward() should works properly', () => {
    const ref = createRef<Carousel>();
    const getInstance = () => ref.current as Carousel;

    const { rerender, getAllByTestId } = render(
      <Carousel
        ref={ref}
        vertical={false}
        items={[...Array(17).keys()]}
        withControls
        infinite={false}
      />,
    );
    const wrapperEl = getInstance().wrapperRef.current as HTMLElement as HTMLElement;
    const containerEl = getInstance().containerRef.current as HTMLElement as HTMLElement;

    jest.spyOn(wrapperEl, 'getBoundingClientRect').mockImplementation(
      () =>
        ({
          top: 0,
          left: 0,
          width: 100,
          height: 20,
          right: 100,
          bottom: 20,
        } as any),
    );
    defineProp(containerEl, 'scrollWidth', 500);
    rerender(
      <Carousel
        ref={ref}
        targetIndex={0}
        vertical={false}
        items={[...Array(17).keys()]}
        withControls
        infinite={false}
      />,
    );

    fireEvent.click(getAllByTestId('arrow-button')[1]);
    expect(getInstance().currentIndex).toBe(3);

    fireEvent.click(getAllByTestId('arrow-button')[1]);
    expect(getInstance().currentIndex).toBe(6);

    fireEvent.click(getAllByTestId('arrow-button')[1]);
    expect(getInstance().currentIndex).toBe(9);

    fireEvent.click(getAllByTestId('arrow-button')[1]);
    expect(getInstance().currentIndex).toBe(12);

    fireEvent.click(getAllByTestId('arrow-button')[1]);
    expect(getInstance().currentIndex).toBe(15);

    fireEvent.click(getAllByTestId('arrow-button')[1]);
    expect(getInstance().currentIndex).toBe(16);

    fireEvent.click(getAllByTestId('arrow-button')[1]);
    expect(getInstance().currentIndex).toBe(16);

    rerender(
      <Carousel
        ref={ref}
        targetIndex={0}
        vertical={false}
        withControls
        infinite={false}
        items={undefined}
      />,
    );

    fireEvent.click(getAllByTestId('arrow-button')[1]);
    expect(getInstance().currentIndex).toBe(0);
  });

  it('should move backward properly for horizontal carousel', () => {
    const itemSize = 20;
    const itemsCount = 17;

    const ref = createRef<Carousel>();
    const getInstance = () => ref.current as Carousel;

    const { getAllByTestId } = render(
      <Carousel
        ref={ref}
        vertical={false}
        infinite={false}
        items={[...Array(itemsCount).keys()]}
        withControls
        renderItem={item => (
          <div key={item} className='test-item'>
            {item}
          </div>
        )}
      />,
    );
    const wrapperEl = getInstance().wrapperRef.current as HTMLElement as HTMLElement;
    const containerEl = getInstance().containerRef.current as HTMLElement as HTMLElement;

    jest.spyOn(wrapperEl, 'getBoundingClientRect').mockImplementation(
      () =>
        ({
          top: 0,
          left: 0,
          width: 100,
          height: 20,
          right: 100,
          bottom: 20,
        } as any),
    );

    // смещаем элементы так, чтобы последний элемент был вплотную к правой границе карусели
    const offset = 100 - itemSize * itemsCount;
    placeItems({
      containerEl,
      itemsSelector: '.test-item',
      vertical: false,
      itemSize,
      itemsCount,
      offset,
    });
    getInstance().currentIndex = itemsCount - 1;
    act(() => {
      getInstance().setState({ currentOffset: offset });
    });
    fireEvent.click(getAllByTestId('arrow-button')[0]);
    expect(getInstance().currentIndex).toBe(9);
  });

  it('should move backward properly for vertical carousel', () => {
    const itemSize = 30;
    const itemsCount = 12;

    const ref = createRef<Carousel>();
    const getInstance = () => ref.current as Carousel;

    const { getAllByTestId } = render(
      <Carousel
        ref={ref}
        infinite={false}
        vertical
        items={[...Array(itemsCount).keys()]}
        withControls
        renderItem={item => (
          <div key={item} className='test-item'>
            {item}
          </div>
        )}
      />,
    );
    const wrapperEl = getInstance().wrapperRef.current as HTMLElement as HTMLElement;
    const containerEl = getInstance().containerRef.current as HTMLElement as HTMLElement;

    jest.spyOn(wrapperEl, 'getBoundingClientRect').mockImplementation(
      () =>
        ({
          top: 0,
          left: 0,
          width: 100,
          height: 20,
          right: 100,
          bottom: 20,
        } as any),
    );

    // смещаем элементы так, чтобы последний элемент был вплотную к правой границе карусели
    const offset = 100 - itemSize * itemsCount;
    placeItems({
      containerEl,
      itemsSelector: '.test-item',
      vertical: true,
      itemSize,
      itemsCount,
      offset,
    });
    getInstance().currentIndex = itemsCount - 1;
    act(() => {
      getInstance().setState({ currentOffset: offset });
    });
    fireEvent.click(getAllByTestId('arrow-button')[0]);
    expect(getInstance().currentIndex).toBe(6);
  });

  it('should move backward to first item', () => {
    const itemSize = 20;
    const itemsCount = 6;

    const ref = createRef<Carousel>();
    const getInstance = () => ref.current as Carousel;

    const { getAllByTestId } = render(
      <Carousel
        ref={ref}
        vertical={false}
        step={5}
        items={[...Array(itemsCount).keys()]}
        withControls
        renderItem={item => (
          <div key={item} className='test-item'>
            {item}
          </div>
        )}
        infinite={false}
      />,
    );
    const wrapperEl = getInstance().wrapperRef.current as HTMLElement;
    const containerEl = getInstance().containerRef.current as HTMLElement;

    jest.spyOn(wrapperEl, 'getBoundingClientRect').mockImplementation(
      () =>
        ({
          top: 0,
          left: 0,
          width: 100,
          height: 20,
          right: 100,
          bottom: 20,
        } as any),
    );

    // смещаем элементы так, чтобы последний элемент был вплотную к правой границе карусели
    const offset = 100 - itemSize * itemsCount;
    placeItems({
      containerEl,
      itemsSelector: '.test-item',
      vertical: false,
      itemSize,
      itemsCount,
      offset,
    });
    getInstance().currentIndex = itemsCount - 1;
    act(() => {
      getInstance().setState({ currentOffset: offset });
    });
    fireEvent.click(getAllByTestId('arrow-button')[0]);
    expect(getInstance().currentIndex).toBe(0);
  });

  it('should handle drag end when start offset equals end offset', () => {
    const ref = createRef<Carousel>();
    const getInstance = () => ref.current as Carousel;

    render(
      <Carousel
        ref={ref}
        items={[...Array(12).keys()]}
        withControls
        renderItem={item => (
          <div key={item} className='test-item'>
            {item}
          </div>
        )}
        infinite={false}
      />,
    );

    jest.spyOn(getInstance(), 'setCurrentIndex');
    getInstance().dragStartOffset = { x: 0, y: 0 };
    getInstance().onDragEnd({ offset: { x: 0, y: 0 } } as any);
    expect(getInstance().setCurrentIndex).toHaveBeenCalledTimes(0);
  });

  describe('should handle drag', () => {
    const itemSize = 20;
    const itemsCount = 15;
    const visibleItemsCount = 5;

    it('drag horizontal forward', () => {
      const ref = createRef<Carousel>();
      const getInstance = () => ref.current as Carousel;

      render(
        <Carousel
          ref={ref}
          vertical={false}
          items={[...Array(itemsCount).keys()]}
          withControls
          renderItem={item => (
            <div key={item} className='test-item'>
              {item}
            </div>
          )}
          infinite={false}
        />,
      );

      const wrapperEl = getInstance().wrapperRef.current as HTMLElement;
      const containerEl = getInstance().containerRef.current as HTMLElement;
      jest.spyOn(wrapperEl, 'getBoundingClientRect').mockImplementation(
        () =>
          ({
            top: 0,
            left: 0,
            width: visibleItemsCount * itemSize,
            height: itemSize,
            right: visibleItemsCount * itemSize,
            bottom: itemSize,
          } as any),
      );
      const endOffset = -(5.5 * itemSize); // переместили мышкой на 5.5 элементов вперед (влево)
      placeItems({
        containerEl,
        itemsSelector: '.test-item',
        vertical: false,
        itemSize,
        itemsCount,
        offset: endOffset,
      });

      getInstance().dragStartOffset = { x: 0, y: 0 };
      getInstance().dragStartClient = { x: 0, y: 0 };
      getInstance().onDragEnd({
        offset: { x: endOffset, y: 0 },
        client: { x: endOffset, y: 0 },
      } as any);
      expect(getInstance().currentIndex).toBe(6);
    });

    it('drag horizontal backward outside viewport bounds', () => {
      const ref = createRef<Carousel>();
      const getInstance = () => ref.current as Carousel;

      render(
        <Carousel
          ref={ref}
          infinite={false}
          vertical={false}
          items={[...Array(itemsCount).keys()]}
          withControls
          renderItem={item => (
            <div key={item} className='test-item'>
              {item}
            </div>
          )}
        />,
      );

      const wrapperEl = getInstance().wrapperRef.current as HTMLElement;
      const containerEl = getInstance().containerRef.current as HTMLElement;

      jest.spyOn(wrapperEl, 'getBoundingClientRect').mockImplementation(
        () =>
          ({
            top: 0,
            left: 0,
            width: visibleItemsCount * itemSize,
            height: itemSize,
            right: visibleItemsCount * itemSize,
            bottom: itemSize,
          } as any),
      );
      const endOffset = itemsCount * 2 * itemSize; // переместили мышкой за пределы области галереи
      placeItems({
        containerEl,
        itemsSelector: '.test-item',
        vertical: false,
        itemSize,
        itemsCount,
        offset: endOffset,
      });

      getInstance().dragStartOffset = { x: 0, y: 0 };
      getInstance().dragStartClient = { x: 0, y: 0 };
      getInstance().onDragEnd({
        offset: { x: endOffset, y: 0 },
        client: { x: endOffset, y: 0 },
      } as any);
      expect(getInstance().currentIndex).toBe(0);
    });

    it('drag horizontal backward', () => {
      const ref = createRef<Carousel>();
      const getInstance = () => ref.current as Carousel;

      render(
        <Carousel
          ref={ref}
          vertical={false}
          items={[...Array(itemsCount).keys()]}
          withControls
          renderItem={item => (
            <div key={item} className='test-item'>
              {item}
            </div>
          )}
          infinite={false}
        />,
      );
      const wrapperEl = getInstance().wrapperRef.current as HTMLElement;
      const containerEl = getInstance().containerRef.current as HTMLElement;

      // перед перемещением мышью встаем на 6 элемент
      const startIndex = 6; // переместили мышкой на 4.3 элементов назад (вправо)
      const startOffset = -(startIndex * itemSize); // переместили мышкой на 4.3 элементов назад (вправо)
      getInstance().currentIndex = startIndex;
      getInstance().setState({ currentOffset: -(startIndex * itemSize) });
      jest.spyOn(wrapperEl, 'getBoundingClientRect').mockImplementation(
        () =>
          ({
            top: 0,
            left: 0,
            width: visibleItemsCount * itemSize,
            height: itemSize,
            right: visibleItemsCount * itemSize,
            bottom: itemSize,
          } as any),
      );
      defineProp(containerEl, 'scrollWidth', itemSize * itemsCount);

      // переместили мышкой так чтобы 2 элемент был чуть правее левой границы viewport'а
      const endOffset = -(1.3 * itemSize);
      placeItems({
        containerEl,
        itemsSelector: '.test-item',
        vertical: false,
        itemSize,
        itemsCount,
        offset: endOffset,
      });

      getInstance().dragStartOffset = { x: startOffset, y: 0 };
      getInstance().dragStartClient = { x: startOffset, y: 0 };
      getInstance().onDragEnd({
        offset: { x: endOffset, y: 0 },
        client: { x: endOffset, y: 0 },
      } as any);
      expect(getInstance().currentIndex).toBe(1);
    });

    it('drag vertical forward', () => {
      const ref = createRef<Carousel>();
      const getInstance = () => ref.current as Carousel;

      render(
        <Carousel
          ref={ref}
          vertical
          items={[...Array(itemsCount).keys()]}
          withControls
          renderItem={item => (
            <div key={item} className='test-item'>
              {item}
            </div>
          )}
          infinite={false}
        />,
      );

      const wrapperEl = getInstance().wrapperRef.current as HTMLElement;
      const containerEl = getInstance().containerRef.current as HTMLElement;
      jest.spyOn(wrapperEl, 'getBoundingClientRect').mockImplementation(
        () =>
          ({
            top: 0,
            left: 0,
            width: visibleItemsCount * itemSize,
            height: itemSize,
            right: visibleItemsCount * itemSize,
            bottom: itemSize,
          } as any),
      );
      const endOffset = -(3.2 * itemSize); // переместили мышкой на 3.5 элементов вперед (вниз)
      placeItems({
        containerEl,
        itemsSelector: '.test-item',
        vertical: true,
        itemSize,
        itemsCount,
        offset: endOffset,
      });

      getInstance().dragStartOffset = { x: 0, y: 0 };
      getInstance().dragStartClient = { x: 0, y: 0 };
      getInstance().onDragEnd({
        offset: { x: 0, y: endOffset },
        client: { x: 0, y: endOffset },
      } as any);
      expect(getInstance().currentIndex).toBe(4);
    });

    it('drag vertical backward', () => {
      const ref = createRef<Carousel>();
      const getInstance = () => ref.current as Carousel;

      render(
        <Carousel
          ref={ref}
          vertical
          items={[...Array(itemsCount).keys()]}
          withControls
          renderItem={item => (
            <div key={item} className='test-item'>
              {item}
            </div>
          )}
          infinite={false}
        />,
      );
      const wrapperEl = getInstance().wrapperRef.current as HTMLElement;
      const containerEl = getInstance().containerRef.current as HTMLElement;

      // перед перемещением мышью встаем на 6 элемент
      const startIndex = 5; // переместили мышкой на 4.3 элементов назад (вправо)
      const startOffset = -(startIndex * itemSize); // переместили мышкой на 4.3 элементов назад (вправо)
      getInstance().currentIndex = startIndex;
      getInstance().setState({ currentOffset: -(startIndex * itemSize) });
      jest.spyOn(wrapperEl, 'getBoundingClientRect').mockImplementation(
        () =>
          ({
            top: 0,
            left: 0,
            width: itemSize,
            height: visibleItemsCount * itemSize,
            right: itemSize,
            bottom: visibleItemsCount * itemSize,
          } as any),
      );
      defineProp(containerEl, 'scrollHeight', itemSize * itemsCount);

      // переместили мышкой так чтобы 2 элемент был чуть левее левой границы viewport'а
      const endOffset = -(2.1 * itemSize);
      placeItems({
        containerEl,
        itemsSelector: '.test-item',
        vertical: true,
        itemSize,
        itemsCount,
        offset: endOffset,
      });

      getInstance().dragStartOffset = { x: 0, y: startOffset };
      getInstance().dragStartClient = { x: 0, y: startOffset };
      getInstance().onDragEnd({
        offset: { x: 0, y: endOffset },
        client: { x: 0, y: endOffset },
      } as any);
      expect(getInstance().currentIndex).toBe(2);
    });

    it('drag vertical backward outside viewport bounds', () => {
      const ref = createRef<Carousel>();
      const getInstance = () => ref.current as Carousel;

      render(
        <Carousel
          ref={ref}
          vertical
          items={[...Array(itemsCount).keys()]}
          withControls
          renderItem={item => (
            <div key={item} className='test-item'>
              {item}
            </div>
          )}
          infinite={false}
        />,
      );

      const wrapperEl = getInstance().wrapperRef.current as HTMLElement;
      const containerEl = getInstance().containerRef.current as HTMLElement;
      jest.spyOn(wrapperEl, 'getBoundingClientRect').mockImplementation(
        () =>
          ({
            top: 0,
            left: 0,
            width: visibleItemsCount * itemSize,
            height: itemSize,
            right: visibleItemsCount * itemSize,
            bottom: itemSize,
          } as any),
      );
      const endOffset = itemsCount * 2 * itemSize; // переместили мышкой за пределы области галереи
      placeItems({
        containerEl,
        itemsSelector: '.test-item',
        vertical: true,
        itemSize,
        itemsCount,
        offset: endOffset,
      });

      getInstance().dragStartOffset = { x: 0, y: 0 };
      getInstance().dragStartClient = { x: 0, y: 0 };
      getInstance().onDragEnd({
        offset: { x: 0, y: endOffset },
        client: { x: 0, y: endOffset },
      } as any);
      expect(getInstance().currentIndex).toBe(0);
    });

    it('drag vertical forward outside viewport bounds', () => {
      const ref = createRef<Carousel>();
      const getInstance = () => ref.current as Carousel;
      render(
        <Carousel
          ref={ref}
          vertical
          items={[...Array(itemsCount).keys()]}
          withControls
          renderItem={item => (
            <div key={item} className='test-item'>
              {item}
            </div>
          )}
          infinite={false}
        />,
      );

      const wrapperEl = getInstance().wrapperRef.current as HTMLElement;
      const containerEl = getInstance().containerRef.current as HTMLElement;
      jest.spyOn(wrapperEl, 'getBoundingClientRect').mockImplementation(
        () =>
          ({
            top: 0,
            left: 0,
            width: visibleItemsCount * itemSize,
            height: itemSize,
            right: visibleItemsCount * itemSize,
            bottom: itemSize,
          } as any),
      );
      const endOffset = -(itemsCount * 3 * itemSize); // переместили мышкой за пределы области галереи
      placeItems({
        containerEl,
        itemsSelector: '.test-item',
        vertical: true,
        itemSize,
        itemsCount,
        offset: endOffset,
      });

      getInstance().dragStartOffset = { x: 0, y: 0 };
      getInstance().dragStartClient = { x: 0, y: 0 };
      getInstance().onDragEnd({
        offset: { x: 0, y: endOffset },
        client: { x: 0, y: endOffset },
      } as any);
      expect(getInstance().currentIndex).toBe(itemsCount - 1);
    });
  });
});

describe('Carousel: infinite mode', () => {
  it('should move forward with correcting offset', () => {
    const itemSize = 30;
    const step = 4;
    const itemsCount = 12;

    const ref = createRef<Carousel>();
    const getInstance = () => ref.current as Carousel;

    const { getAllByTestId } = render(
      <Carousel
        ref={ref}
        infinite
        step={4}
        items={[...Array(itemsCount).keys()]}
        withControls
        renderItem={(item, index) => (
          <div key={index} className='test-item'>
            {item}
          </div>
        )}
      />,
    );
    const wrapperEl = getInstance().wrapperRef.current as HTMLElement;
    const containerEl = getInstance().containerRef.current as HTMLElement;

    jest.spyOn(wrapperEl, 'getBoundingClientRect').mockImplementation(
      () =>
        ({
          top: 0,
          left: 0,
          width: 100,
          height: 20,
          right: 100,
          bottom: 20,
        } as any),
    );

    // смещаем элементы
    const initialIndex = itemsCount + 1;
    const initialOffset = itemSize * initialIndex;

    placeItems({
      containerEl,
      itemsSelector: '.test-item',
      vertical: false,
      itemSize,
      itemsCount,
      offset: initialOffset,
    });
    getInstance().currentIndex = initialIndex;
    getInstance().setState({ currentOffset: initialOffset });

    // запускаем прокрутку
    fireEvent.click(getAllByTestId('arrow-button')[1]);

    expect(getInstance().currentIndex).toBe(initialIndex - itemsCount + step);
  });

  it('should move forward vertically with correcting offset', () => {
    const itemSize = 30;
    const step = 4;
    const itemsCount = 12;

    const ref = createRef<Carousel>();
    const getInstance = () => ref.current as Carousel;

    const { getAllByTestId } = render(
      <Carousel
        ref={ref}
        infinite
        step={4}
        vertical
        items={[...Array(itemsCount).keys()]}
        withControls
        renderItem={(item, index) => (
          <div key={index} className='test-item'>
            {item}
          </div>
        )}
      />,
    );
    const wrapperEl = getInstance().wrapperRef.current as HTMLElement;
    const containerEl = getInstance().containerRef.current as HTMLElement;

    jest.spyOn(wrapperEl, 'getBoundingClientRect').mockImplementation(
      () =>
        ({
          top: 0,
          left: 0,
          width: 100,
          height: 20,
          right: 100,
          bottom: 20,
        } as any),
    );

    // смещаем элементы
    const initialIndex = itemsCount - 1;
    const initialOffset = itemSize * initialIndex;

    placeItems({
      containerEl,
      itemsSelector: '.test-item',
      vertical: true,
      itemSize,
      itemsCount,
      offset: initialOffset,
    });
    getInstance().currentIndex = initialIndex;
    getInstance().setState({ currentOffset: initialOffset });

    // запускаем прокрутку
    fireEvent.click(getAllByTestId('arrow-button')[0]);

    expect(getInstance().currentIndex).toBe(initialIndex + itemsCount - step);
  });

  it('should move forward without correcting offset', () => {
    const itemSize = 30;
    const step = 4;
    const itemsCount = 12;

    const ref = createRef<Carousel>();
    const getInstance = () => ref.current as Carousel;

    const { getAllByTestId } = render(
      <Carousel
        ref={ref}
        infinite
        step={4}
        items={[...Array(itemsCount).keys()]}
        withControls
        renderItem={(item, index) => (
          <div key={index} className='test-item'>
            {item}
          </div>
        )}
      />,
    );
    const wrapperEl = getInstance().wrapperRef.current as HTMLElement;
    const containerEl = getInstance().containerRef.current as HTMLElement;

    jest.spyOn(wrapperEl, 'getBoundingClientRect').mockImplementation(
      () =>
        ({
          top: 0,
          left: 0,
          width: 100,
          height: 20,
          right: 100,
          bottom: 20,
        } as any),
    );

    // смещаем элементы
    const initialIndex = 0;
    const initialOffset = 0;

    placeItems({
      containerEl,
      itemsSelector: '.test-item',
      vertical: false,
      itemSize,
      itemsCount,
      offset: initialOffset,
    });
    getInstance().currentIndex = initialIndex;
    getInstance().setState({ currentOffset: initialOffset });

    // запускаем прокрутку
    fireEvent.click(getAllByTestId('arrow-button')[1]);

    expect(getInstance().currentIndex).toBe(step);
  });

  it('should move backward without correcting offset', () => {
    const itemSize = 30;
    const step = 4;
    const itemsCount = 12;

    const ref = createRef<Carousel>();
    const getInstance = () => ref.current as Carousel;

    const { getAllByTestId } = render(
      <Carousel
        ref={ref}
        infinite
        step={step}
        items={[...Array(itemsCount).keys()]}
        withControls
        renderItem={(item, index) => (
          <div key={index} className='test-item'>
            {item}
          </div>
        )}
      />,
    );
    const wrapperEl = getInstance().wrapperRef.current as HTMLElement;
    const containerEl = getInstance().containerRef.current as HTMLElement;

    jest.spyOn(wrapperEl, 'getBoundingClientRect').mockImplementation(
      () =>
        ({
          top: 0,
          left: 0,
          width: 100,
          height: 20,
          right: 100,
          bottom: 20,
        } as any),
    );

    // смещаем элементы
    const initialIndex = itemsCount + 2;
    const initialOffset = -(initialIndex * itemSize);

    placeItems({
      containerEl,
      itemsSelector: '.test-item',
      vertical: false,
      itemSize,
      itemsCount,
      offset: initialOffset,
    });
    getInstance().currentIndex = initialIndex;
    act(() => {
      getInstance().setState({ currentOffset: initialOffset });
    });

    // запускаем прокрутку
    fireEvent.click(getAllByTestId('arrow-button')[0]);

    expect(getInstance().currentIndex).toBe(8);
  });

  it('should move backward with correcting offset', () => {
    const itemSize = 30;
    const step = 4;
    const itemsCount = 12;

    const ref = createRef<Carousel>();
    const getInstance = () => ref.current as Carousel;

    const { getAllByTestId } = render(
      <Carousel
        ref={ref}
        infinite
        step={4}
        items={[...Array(itemsCount).keys()]}
        withControls
        renderItem={(item, index) => (
          <div key={index} className='test-item'>
            {item}
          </div>
        )}
      />,
    );
    const wrapperEl = getInstance().wrapperRef.current as HTMLElement;
    const containerEl = getInstance().containerRef.current as HTMLElement;

    jest.spyOn(wrapperEl, 'getBoundingClientRect').mockImplementation(
      () =>
        ({
          top: 0,
          left: 0,
          width: 100,
          height: 20,
          right: 100,
          bottom: 20,
        } as any),
    );

    // смещаем элементы
    const initialIndex = itemsCount - 1;
    const initialOffset = itemSize * initialIndex;

    placeItems({
      containerEl,
      itemsSelector: '.test-item',
      vertical: false,
      itemSize,
      itemsCount,
      offset: initialOffset,
    });
    getInstance().currentIndex = initialIndex;
    getInstance().setState({ currentOffset: initialOffset });

    // запускаем прокрутку
    fireEvent.click(getAllByTestId('arrow-button')[0]);

    expect(getInstance().currentIndex).toBe(initialIndex + itemsCount - step);
  });

  it('should handle drag forward with correcting offset', () => {
    const itemSize = 30;
    const itemsCount = 12;

    const ref = createRef<Carousel>();
    const getInstance = () => ref.current as Carousel;

    const { container } = render(
      <Carousel
        ref={ref}
        infinite
        items={[...Array(itemsCount).keys()]}
        withControls
        renderItem={(item, index) => (
          <div key={index} className='test-item'>
            {item}
          </div>
        )}
      />,
    );
    const wrapperEl = getInstance().wrapperRef.current as HTMLElement;
    const containerEl = getInstance().containerRef.current as HTMLElement;

    // формируем viewport
    jest.spyOn(wrapperEl, 'getBoundingClientRect').mockImplementation(
      () =>
        ({
          top: 0,
          left: 0,
          width: 20,
          height: 100,
          right: 20,
          bottom: 100,
        } as any),
    );

    // формируем позицию и размеры элементов карусели
    const dragOffset = -(itemSize * (itemsCount * 3 + 1));

    placeItems({
      containerEl,
      itemsSelector: '.test-item',
      vertical: false,
      itemSize,
      itemsCount,
      offset: dragOffset,
    });

    expect(container.querySelector<HTMLElement>('.draggable')?.style.transform).toEqual(
      getTranslateStyle(0, 0),
    );

    // имитируем перетаскивание
    getInstance().onDragStart(
      new DraggableEvent({
        offset: Point(0, 0),
        client: Point(0, 0),
      }),
    );
    getInstance().onDragMove(
      new DraggableEvent({
        offset: Point(dragOffset, 0),
        client: Point(dragOffset, 0),
      }),
    );

    expect(container.querySelector<HTMLElement>('.draggable')?.style.transform).toEqual(
      getTranslateStyle(-990, 0),
    );
  });

  it('should handle drag backward with correcting offset', () => {
    const itemSize = 30;
    const itemsCount = 12;

    const ref = createRef<Carousel>();
    const getInstance = () => ref.current as Carousel;

    const { container } = render(
      <Carousel
        ref={ref}
        infinite
        vertical={false}
        items={[...Array(itemsCount).keys()]}
        withControls
        renderItem={(item, index) => (
          <div key={index} className='test-item'>
            {item}
          </div>
        )}
      />,
    );
    const wrapperEl = getInstance().wrapperRef.current as HTMLElement;
    const containerEl = getInstance().containerRef.current as HTMLElement;

    // формируем viewport
    getInstance().setState({ isAllItemsVisible: false });
    jest.spyOn(wrapperEl, 'getBoundingClientRect').mockImplementation(
      () =>
        ({
          top: 0,
          left: 0,
          width: 100,
          height: 20,
          right: 100,
          bottom: 20,
        } as any),
    );

    // формируем позицию и размеры элементов карусели
    const dragOffset = 10;

    placeItems({
      containerEl,
      itemsSelector: '.test-item',
      vertical: false,
      itemSize,
      itemsCount,
      offset: dragOffset,
    });
    getInstance().setState({ isAllItemsVisible: false });

    expect(container.querySelector<HTMLElement>('.draggable')?.style.transform).toEqual(
      getTranslateStyle(0, 0),
    );

    // имитируем перетаскивание
    getInstance().onDragStart(
      new DraggableEvent({
        offset: Point(0, 0),
        client: Point(0, 0),
      }),
    );

    // подменяю результат потому что в jest + jsdom все подменяется на ходу
    jest.spyOn(getInstance(), 'findRealItemsStartBound').mockImplementation(() => 90000);
    getInstance().onDragMove(
      new DraggableEvent({
        offset: Point(dragOffset, 0),
        client: Point(dragOffset, 0),
      }),
    );

    expect(container.querySelector<HTMLElement>('.draggable')?.style.transform).toEqual(
      getTranslateStyle(-110, 0),
    );
  });

  it('should handle drag backward without correcting offset', () => {
    const itemSize = 30;
    const itemsCount = 12;

    const ref = createRef<Carousel>();
    const getInstance = () => ref.current as Carousel;

    const { container } = render(
      <Carousel
        ref={ref}
        infinite
        vertical
        items={[...Array(itemsCount).keys()]}
        withControls
        renderItem={(item, index) => (
          <div key={index} className='test-item'>
            {item}
          </div>
        )}
      />,
    );

    const wrapperEl = getInstance().wrapperRef.current as HTMLElement;
    const containerEl = getInstance().containerRef.current as HTMLElement;

    // формируем viewport
    getInstance().setState({ isAllItemsVisible: false });
    jest.spyOn(wrapperEl, 'getBoundingClientRect').mockImplementation(
      () =>
        ({
          top: 0,
          left: 0,
          width: 20,
          height: 100,
          right: 20,
          bottom: 100,
        } as any),
    );

    // формируем позицию и размеры элементов карусели
    const dragOffset = 10;

    placeItems({
      containerEl,
      itemsSelector: '.test-item',
      vertical: true,
      itemSize,
      itemsCount,
      offset: dragOffset,
    });
    getInstance().setState({ isAllItemsVisible: false });

    expect(container.querySelector<HTMLElement>('.draggable')?.style.transform).toEqual(
      getTranslateStyle(0, 0),
    );

    // имитируем перетаскивание
    getInstance().onDragStart(
      new DraggableEvent({
        offset: Point(0, 0),
        client: Point(0, 0),
      }),
    );

    // подменяю результат потому что в jest + jsdom все подменяется на ходу
    jest.spyOn(getInstance(), 'findRealItemsStartBound' as any).mockImplementation(() => -90000);
    getInstance().onDragMove(
      new DraggableEvent({
        offset: Point(0, dragOffset),
        client: Point(0, dragOffset),
      }),
    );

    expect(container.querySelector<HTMLElement>('.draggable')?.style.transform).toEqual(
      getTranslateStyle(0, 0),
    );
  });

  // дальше тесты написаны исключительно на mock'ах для покрытия
  describe('findRealItemsStartBound', () => {
    it('should return NaN', () => {
      expect(
        Carousel.prototype.findRealItemsStartBound.call({
          infinite: false,
          listElement: null,
        }),
      ).toEqual(NaN);
      expect(
        Carousel.prototype.findRealItemsStartBound.call({
          infinite: false,
          props: { vertical: false, items: [] },
          listElement: { children: [] },
        }),
      ).toEqual(NaN);
    });

    it('should return left bound of first item in container children', () => {
      expect(
        Carousel.prototype.findRealItemsStartBound.call({
          infinite: false,
          props: { vertical: false, items: [1] },
          listElement: {
            children: [FakeElement.withRect({ top: 12, left: 23 })],
          },
        }),
      ).toEqual(23);
    });

    it('should return top bound of first item in container children', () => {
      expect(
        Carousel.prototype.findRealItemsStartBound.call({
          infinite: false,
          props: { vertical: true, items: [1] },
          listElement: {
            children: [FakeElement.withRect({ top: 12, left: 23 })],
          },
        }),
      ).toEqual(12);
    });

    it('should return top bound of first non clone item in container children', () => {
      expect(
        Carousel.prototype.findRealItemsStartBound.call({
          infinite: true,
          props: { vertical: true, items: [1] },
          listElement: {
            children: [
              FakeElement.withRect({ top: 12, left: 23 }),
              FakeElement.withRect({ top: 34, left: 45 }),
              FakeElement.withRect({ top: 56, left: 67 }),
            ],
          },
        }),
      ).toEqual(34);
    });
  });

  describe('getRealItemsSize', () => {
    it('should return 0', () => {
      expect(
        Carousel.prototype.getRealItemsSize.call({
          props: { vertical: false },
          listElement: null,
        }),
      ).toBe(0);
    });
    it('should return result by container children bounds', () => {
      expect(
        Carousel.prototype.getRealItemsSize.call({
          props: { items: [1, 2], vertical: false },
          listElement: {
            children: [FakeElement.withRect({ left: 23 }), FakeElement.withRect({ right: 45 })],
          },
        }),
      ).toBe(22);
    });

    it('should return result by container children bounds (vertical)', () => {
      expect(
        Carousel.prototype.getRealItemsSize.call({
          props: { items: [1, 2], vertical: true },
          listElement: {
            children: [FakeElement.withRect({ top: 11 }), FakeElement.withRect({ bottom: 44 })],
          },
        }),
      ).toBe(33);
    });
  });

  describe('scrollToItem', () => {
    it('should handle viewport/lst element missing', () => {
      const instance = new Carousel({});

      expect(() => {
        instance.scrollToItem();
      }).not.toThrow();
    });
  });

  describe('makeFurthestSiblingChecker', () => {
    it('should handle viewport missing', () => {
      const checker = Carousel.makeFurthestSiblingChecker({
        vertical: true,
        viewport: undefined,
      });

      const element = document.createElement('div');

      expect(checker(element)).toBe(false);
    });
  });

  describe('makeNearestSiblingChecker', () => {
    it('should handle viewport missing', () => {
      const checker = Carousel.makeNearestSiblingChecker({
        vertical: true,
        backward: false,
        viewport: undefined,
      });

      const element = document.createElement('div');

      expect(checker(element)).toBe(false);
    });
  });

  describe('getViewportSize', () => {
    it('should handle viewport element missing', () => {
      const instance = new Carousel({});

      expect(instance.getViewportSize()).toBe(0);
    });
  });

  describe('correctInfiniteOffset', () => {
    it('should handle viewport/lst element missing', () => {
      const instance = new Carousel({});
      const event = new DraggableEvent({ client: Point(0, 0), offset: Point(0, 0) });

      expect(() => {
        instance.correctInfiniteOffset(event);
      }).not.toThrow();
    });
  });
});
