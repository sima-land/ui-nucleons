import React from 'react';
import { mount } from 'enzyme';
import { Carousel } from '..';
import Draggable from '../draggable';
import DraggableEvent from '../helpers/draggable-event';
import classes from '../carousel.module.scss';
import Point from '../../helpers/point';
import { ArrowButton } from '../../arrow-button';
import { act } from 'react-dom/test-utils';

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

describe('<Carousel />', () => {
  it('should enable autoplay on mount', () => {
    const wrapper = mount<Carousel>(<Carousel autoplay />);
    const instance = wrapper.instance();

    jest.spyOn(instance, 'enableAutoplay');

    expect((instance as any).enableAutoplay).toHaveBeenCalledTimes(0);
    instance.componentDidMount();
    expect((instance as any).enableAutoplay).toHaveBeenCalledTimes(1);

    wrapper.setProps({ autoplay: false });
    expect((instance as any).enableAutoplay).toHaveBeenCalledTimes(1);
    instance.componentDidMount();
    expect((instance as any).enableAutoplay).toHaveBeenCalledTimes(1);
  });

  it('should toggle autoplay on update', () => {
    const wrapper = mount<Carousel>(<Carousel />);
    const instance = wrapper.instance();

    jest.spyOn(instance, 'enableAutoplay');
    jest.spyOn(instance, 'disableAutoplay');

    expect(instance.enableAutoplay).toHaveBeenCalledTimes(0);
    expect(instance.disableAutoplay).toHaveBeenCalledTimes(0);

    wrapper.setProps({ autoplay: true });
    expect(instance.enableAutoplay).toHaveBeenCalledTimes(1);
    expect(instance.disableAutoplay).toHaveBeenCalledTimes(0);

    wrapper.setProps({ autoplay: false });
    expect(instance.enableAutoplay).toHaveBeenCalledTimes(1);
    expect(instance.disableAutoplay).toHaveBeenCalledTimes(1);
  });

  it('should enable auto move on drag end', () => {
    const wrapper = mount<Carousel>(<Carousel autoplay />);
    const instance = wrapper.instance();

    jest.spyOn(instance, 'canDrag').mockImplementation(() => true);
    jest.spyOn(instance, 'toggleAutoMove');

    expect(instance.toggleAutoMove).toHaveBeenCalledTimes(0);
    instance.onDragEnd(new DraggableEvent({ offset: Point(), client: Point() }));
    expect(instance.toggleAutoMove).toHaveBeenCalledTimes(1);
  });

  it('should disable auto move on mouse enter', () => {
    const wrapper = mount<Carousel>(<Carousel autoplay autoplayHoverPause />);
    const instance = wrapper.instance();

    jest.spyOn(instance, 'toggleAutoMove');

    expect(instance.toggleAutoMove).toHaveBeenCalledTimes(0);
    wrapper.find(`.${classes['carousel-wrapper']}`).simulate('mouseenter');
    expect(instance.toggleAutoMove).toHaveBeenCalledTimes(1);
    expect(instance.toggleAutoMove).toHaveBeenCalledWith(false);
  });

  it('should not disable auto move on mouse enter', () => {
    const wrapper = mount<Carousel>(<Carousel autoplay autoplayHoverPause={false} />);
    const instance = wrapper.instance();

    jest.spyOn(instance, 'toggleAutoMove');

    expect(instance.toggleAutoMove).toHaveBeenCalledTimes(0);
    wrapper.find(`.${classes['carousel-wrapper']}`).simulate('mouseenter');
    expect(instance.toggleAutoMove).toHaveBeenCalledTimes(0);
  });

  it('should enable auto move on mouse leave', () => {
    const wrapper = mount<Carousel>(<Carousel autoplay autoplayHoverPause />);
    const instance = wrapper.instance();

    // simulate drag start
    (wrapper.find(Draggable) as any).prop('onDragStart')(
      new DraggableEvent({ offset: Point(), client: Point() }),
    );

    jest.spyOn(instance, 'toggleAutoMove');
    expect(instance.toggleAutoMove).toHaveBeenCalledTimes(0);

    // simulate mouse leave
    wrapper.find(`.${classes['carousel-wrapper']}`).simulate('mouseleave');
    expect(instance.toggleAutoMove).toHaveBeenCalledTimes(1);
    expect(instance.toggleAutoMove).toHaveBeenCalledWith(true);
  });

  it('should not enable auto move on mouse leave', () => {
    const wrapper = mount<Carousel>(<Carousel autoplay autoplayHoverPause={false} />);
    const instance = wrapper.instance();

    // simulate drag start
    (wrapper.find(Draggable) as any).prop('onDragStart')(
      new DraggableEvent({ offset: Point(), client: Point() }),
    );

    jest.spyOn(instance, 'toggleAutoMove');
    expect(instance.toggleAutoMove).toHaveBeenCalledTimes(0);

    // simulate mouse leave
    wrapper.find(`.${classes['carousel-wrapper']}`).simulate('mouseleave');
    expect(instance.toggleAutoMove).toHaveBeenCalledTimes(0);
  });

  it('should register timer by setInterval', () => {
    jest.useFakeTimers();

    const wrapper = mount<Carousel>(<Carousel autoplay autoplayTimeout={1000} />);
    const instance = wrapper.instance();
    jest.spyOn(instance, 'moveForward');

    expect(instance.moveForward).toHaveBeenCalledTimes(0);
    jest.advanceTimersByTime(1200);
    expect(instance.moveForward).toHaveBeenCalledTimes(1);
  });

  it('scrollToItem should use defaults correctly', () => {
    const spy = jest.fn();
    const wrapper = mount<Carousel>(<Carousel items={[1, 2, 3]} />);
    const instance = wrapper.instance();

    jest.spyOn(instance, 'toggleDragTransition');
    Object.defineProperty(instance, 'currentIndex', {
      get: () => {
        spy();
        return 0;
      },
    });
    expect(spy).toHaveBeenCalledTimes(0);
    expect(instance.toggleDragTransition).toHaveBeenCalledTimes(0);

    instance.scrollToItem();
    expect(instance.toggleDragTransition).toHaveBeenCalledTimes(1);
    expect(spy).toHaveBeenCalledTimes(1);
  });

  it('onReady should pass currentIndex when component did mounted', () => {
    const spy = jest.fn();
    mount(<Carousel items={[1, 2, 3]} targetIndex={2} onReady={spy} />);
    expect(spy).toHaveBeenCalledTimes(1);
    expect(spy).toHaveBeenCalledWith(2);
  });

  it('onChangeTargetIndex should pass currentIndex when set new index', () => {
    const spy = jest.fn();
    const wrapper = mount<Carousel>(<Carousel items={[1, 2, 3]} onChangeTargetIndex={spy} />);
    wrapper.instance().setCurrentIndex(3);
    expect(spy).toHaveBeenCalledTimes(1);
    expect(spy).toHaveBeenCalledWith(3);
  });

  it('should handle window "resize" event', () => {
    const wrapper = mount<Carousel>(<Carousel items={[1, 2, 3]} infinite={false} />);

    jest.spyOn(wrapper.instance(), 'toggleDragTransition');
    jest.spyOn(wrapper.instance(), 'scrollToItem');
    jest.spyOn(wrapper.instance(), 'updateItemsVisibility');
    jest.spyOn(wrapper.instance(), 'toggleDragTransition');

    act(() => {
      window.dispatchEvent(new Event('resize'));
    });

    expect(wrapper.instance().toggleDragTransition).toBeCalled();
    expect(wrapper.instance().scrollToItem).toBeCalled();
    expect(wrapper.instance().updateItemsVisibility).toBeCalled();
    expect(wrapper.instance().toggleDragTransition).toBeCalled();
  });

  it('should call "offWindowResize" on unmount', () => {
    const wrapper = mount<Carousel>(<Carousel items={[1, 2, 3]} infinite={false} />);

    const spy = jest.spyOn(wrapper.instance(), 'offWindowResize');

    expect(spy).toBeCalledTimes(0);

    wrapper.unmount();

    expect(spy).toBeCalledTimes(1);
  });
});

describe('Carousel: finite mode', () => {
  beforeEach(() => {
    jest.resetAllMocks();
  });

  it('should render without props', () => {
    const wrapper = mount<Carousel>(<Carousel infinite={false} />);
    expect(wrapper.find(`.${classes['carousel-wrapper']}`)).toHaveLength(1);
  });

  it('should handle "vertical" props', () => {
    const wrapper = mount<Carousel>(<Carousel vertical infinite={false} />);
    expect(wrapper.find(`.${classes['carousel-items-container']}`).prop('className')).toContain(
      classes.vertical,
    );
    expect(wrapper.find(Draggable).prop('axis')).toBe('y');
  });

  it('should update current index in state on "targetIndex" prop change', () => {
    const wrapper = mount<Carousel>(<Carousel targetIndex={0} infinite={false} />);
    const testInstance = wrapper.instance();

    jest.spyOn(testInstance, 'setCurrentIndex');
    jest.spyOn(testInstance, 'toggleDragTransition');
    jest.spyOn(testInstance, 'updateItemsVisibility');

    expect(testInstance.setCurrentIndex).toHaveBeenCalledTimes(0);
    expect(testInstance.toggleDragTransition).toHaveBeenCalledTimes(0);
    expect(testInstance.updateItemsVisibility).toHaveBeenCalledTimes(0);

    // not changed
    wrapper.setProps({ targetIndex: 0 });
    expect(testInstance.setCurrentIndex).toHaveBeenCalledTimes(0);
    expect(testInstance.toggleDragTransition).toHaveBeenCalledTimes(0);
    expect(testInstance.updateItemsVisibility).toHaveBeenCalledTimes(1);

    wrapper.setProps({ targetIndex: 12 });
    expect(testInstance.setCurrentIndex).toHaveBeenCalledTimes(1);
    expect(testInstance.setCurrentIndex).toHaveBeenCalledWith(12);
    expect(testInstance.toggleDragTransition).toHaveBeenCalledTimes(1);
    expect(testInstance.toggleDragTransition).toHaveBeenCalledWith(true);
    expect(testInstance.updateItemsVisibility).toHaveBeenCalledTimes(2);
  });

  it('should unsubscribe from "resize" event before unmount', () => {
    const wrapper = mount<Carousel>(<Carousel />);

    expect(() => {
      wrapper.unmount();
    }).not.toThrow();
  });

  it('isAllItemsVisible() should works properly', () => {
    const wrapper = mount<Carousel>(
      <Carousel vertical={false} infinite={false} items={[1, 2, 4, 5, 6, 7, 8, 9]} />,
    );
    const wrapperEl = wrapper.instance().wrapperRef.current as HTMLElement as HTMLElement;
    const containerEl = wrapper.instance().containerRef.current as HTMLElement as HTMLElement;

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
    expect(wrapper.instance().isAllItemsVisible()).toBe(false);

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
    expect(wrapper.instance().isAllItemsVisible()).toBe(true);

    // vertical & not all visible
    wrapper.setProps({ vertical: true });
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
    expect(wrapper.instance().isAllItemsVisible()).toBe(false);

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
    expect(wrapper.instance().isAllItemsVisible()).toBe(true);
  });

  it('onDragStart() should works properly', () => {
    const wrapper = mount<Carousel>(<Carousel infinite={false} />);
    jest.spyOn(wrapper.instance(), 'saveDragStartData');
    jest.spyOn(wrapper.instance(), 'toggleDragTransition');

    expect(wrapper.instance().saveDragStartData).toHaveBeenCalledTimes(0);
    expect(wrapper.instance().toggleDragTransition).toHaveBeenCalledTimes(0);
    (wrapper.find(Draggable).prop('onDragStart') as any)({ offset: { x: 3, y: 5 } });
    expect(wrapper.instance().saveDragStartData).toHaveBeenCalledTimes(1);
    expect(wrapper.instance().toggleDragTransition).toHaveBeenCalledTimes(1);
  });

  it('moveForward() should works properly', () => {
    const wrapper = mount<Carousel>(
      <Carousel vertical={false} items={[...Array(17).keys()]} withControls infinite={false} />,
    );
    const wrapperEl = wrapper.instance().wrapperRef.current as HTMLElement as HTMLElement;
    const containerEl = wrapper.instance().containerRef.current as HTMLElement as HTMLElement;

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
    wrapper.setProps({ targetIndex: 0 });

    wrapper.find(ArrowButton).at(1).find('button').simulate('click');
    expect(wrapper.instance().currentIndex).toBe(3);

    wrapper.find(ArrowButton).at(1).find('button').simulate('click');
    expect(wrapper.instance().currentIndex).toBe(6);

    wrapper.find(ArrowButton).at(1).find('button').simulate('click');
    expect(wrapper.instance().currentIndex).toBe(9);

    wrapper.find(ArrowButton).at(1).find('button').simulate('click');
    expect(wrapper.instance().currentIndex).toBe(12);

    wrapper.find(ArrowButton).at(1).find('button').simulate('click');
    expect(wrapper.instance().currentIndex).toBe(15);

    wrapper.find(ArrowButton).at(1).find('button').simulate('click');
    expect(wrapper.instance().currentIndex).toBe(16);

    wrapper.find(ArrowButton).at(1).find('button').simulate('click');
    expect(wrapper.instance().currentIndex).toBe(16);

    wrapper.setProps({ items: undefined });

    wrapper.find(ArrowButton).at(1).find('button').simulate('click');
    expect(wrapper.instance().currentIndex).toBe(0);
  });

  it('should move backward properly for horizontal carousel', () => {
    const itemSize = 20;
    const itemsCount = 17;
    const wrapper = mount<Carousel>(
      <Carousel
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
    const wrapperEl = wrapper.instance().wrapperRef.current as HTMLElement as HTMLElement;
    const containerEl = wrapper.instance().containerRef.current as HTMLElement as HTMLElement;

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
    wrapper.instance().currentIndex = itemsCount - 1;
    wrapper.setState({ currentOffset: offset });
    wrapper.find(ArrowButton).at(0).find('button').simulate('click');
    expect(wrapper.instance().currentIndex).toBe(9);
  });

  it('should move backward properly for vertical carousel', () => {
    const itemSize = 30;
    const itemsCount = 12;
    const wrapper = mount<Carousel>(
      <Carousel
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
    const wrapperEl = wrapper.instance().wrapperRef.current as HTMLElement as HTMLElement;
    const containerEl = wrapper.instance().containerRef.current as HTMLElement as HTMLElement;

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
    wrapper.instance().currentIndex = itemsCount - 1;
    wrapper.setState({ currentOffset: offset });
    wrapper.find(ArrowButton).at(0).find('button').simulate('click');
    expect(wrapper.instance().currentIndex).toBe(6);
  });

  it('should move backward to first item', () => {
    const itemSize = 20;
    const itemsCount = 6;
    const wrapper = mount<Carousel>(
      <Carousel
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
    const wrapperEl = wrapper.instance().wrapperRef.current as HTMLElement;
    const containerEl = wrapper.instance().containerRef.current as HTMLElement;

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
    wrapper.instance().currentIndex = itemsCount - 1;
    wrapper.setState({ currentOffset: offset });
    wrapper.find(ArrowButton).at(0).find('button').simulate('click');
    expect(wrapper.instance().currentIndex).toBe(0);
  });

  it('should handle drag end when start offset equals end offset', () => {
    const wrapper = mount<Carousel>(
      <Carousel
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

    jest.spyOn(wrapper.instance(), 'setCurrentIndex');
    wrapper.instance().dragStartOffset = { x: 0, y: 0 };
    (wrapper.find(Draggable).prop('onDragEnd') as any)({ offset: { x: 0, y: 0 } });
    expect(wrapper.instance().setCurrentIndex).toHaveBeenCalledTimes(0);
  });

  describe('should handle drag', () => {
    const itemSize = 20;
    const itemsCount = 15;
    const visibleItemsCount = 5;

    it('drag horizontal forward', () => {
      const wrapper = mount<Carousel>(
        <Carousel
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

      const wrapperEl = wrapper.instance().wrapperRef.current as HTMLElement;
      const containerEl = wrapper.instance().containerRef.current as HTMLElement;
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

      wrapper.instance().dragStartOffset = { x: 0, y: 0 };
      wrapper.instance().dragStartClient = { x: 0, y: 0 };
      (wrapper.find(Draggable).prop('onDragEnd') as any)({
        offset: { x: endOffset, y: 0 },
        client: { x: endOffset, y: 0 },
      });
      expect(wrapper.instance().currentIndex).toBe(6);
    });

    it('drag horizontal backward outside viewport bounds', () => {
      const wrapper = mount<Carousel>(
        <Carousel
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

      const wrapperEl = wrapper.instance().wrapperRef.current as HTMLElement;
      const containerEl = wrapper.instance().containerRef.current as HTMLElement;

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

      wrapper.instance().dragStartOffset = { x: 0, y: 0 };
      wrapper.instance().dragStartClient = { x: 0, y: 0 };
      (wrapper.find(Draggable).prop('onDragEnd') as any)({
        offset: { x: endOffset, y: 0 },
        client: { x: endOffset, y: 0 },
      });
      expect(wrapper.instance().currentIndex).toBe(0);
    });

    it('drag horizontal backward', () => {
      const wrapper = mount<Carousel>(
        <Carousel
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
      const wrapperEl = wrapper.instance().wrapperRef.current as HTMLElement;
      const containerEl = wrapper.instance().containerRef.current as HTMLElement;

      // перед перемещением мышью встаем на 6 элемент
      const startIndex = 6; // переместили мышкой на 4.3 элементов назад (вправо)
      const startOffset = -(startIndex * itemSize); // переместили мышкой на 4.3 элементов назад (вправо)
      wrapper.instance().currentIndex = startIndex;
      wrapper.setState({ currentOffset: -(startIndex * itemSize) });
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

      wrapper.instance().dragStartOffset = { x: startOffset, y: 0 };
      wrapper.instance().dragStartClient = { x: startOffset, y: 0 };
      (wrapper.find(Draggable).prop('onDragEnd') as any)({
        offset: { x: endOffset, y: 0 },
        client: { x: endOffset, y: 0 },
      });
      expect(wrapper.instance().currentIndex).toBe(1);
    });

    it('drag vertical forward', () => {
      const wrapper = mount<Carousel>(
        <Carousel
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

      const wrapperEl = wrapper.instance().wrapperRef.current as HTMLElement;
      const containerEl = wrapper.instance().containerRef.current as HTMLElement;
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

      wrapper.instance().dragStartOffset = { x: 0, y: 0 };
      wrapper.instance().dragStartClient = { x: 0, y: 0 };
      (wrapper.find(Draggable).prop('onDragEnd') as any)({
        offset: { x: 0, y: endOffset },
        client: { x: 0, y: endOffset },
      });
      expect(wrapper.instance().currentIndex).toBe(4);
    });

    it('drag vertical backward', () => {
      const wrapper = mount<Carousel>(
        <Carousel
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
      const wrapperEl = wrapper.instance().wrapperRef.current as HTMLElement;
      const containerEl = wrapper.instance().containerRef.current as HTMLElement;

      // перед перемещением мышью встаем на 6 элемент
      const startIndex = 5; // переместили мышкой на 4.3 элементов назад (вправо)
      const startOffset = -(startIndex * itemSize); // переместили мышкой на 4.3 элементов назад (вправо)
      wrapper.instance().currentIndex = startIndex;
      wrapper.setState({ currentOffset: -(startIndex * itemSize) });
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

      wrapper.instance().dragStartOffset = { x: 0, y: startOffset };
      wrapper.instance().dragStartClient = { x: 0, y: startOffset };
      (wrapper.find(Draggable).prop('onDragEnd') as any)({
        offset: { x: 0, y: endOffset },
        client: { x: 0, y: endOffset },
      });
      expect(wrapper.instance().currentIndex).toBe(2);
    });

    it('drag vertical backward outside viewport bounds', () => {
      const wrapper = mount<Carousel>(
        <Carousel
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

      const wrapperEl = wrapper.instance().wrapperRef.current as HTMLElement;
      const containerEl = wrapper.instance().containerRef.current as HTMLElement;
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

      wrapper.instance().dragStartOffset = { x: 0, y: 0 };
      wrapper.instance().dragStartClient = { x: 0, y: 0 };
      (wrapper.find(Draggable).prop('onDragEnd') as any)({
        offset: { x: 0, y: endOffset },
        client: { x: 0, y: endOffset },
      });
      expect(wrapper.instance().currentIndex).toBe(0);
    });

    it('drag vertical forward outside viewport bounds', () => {
      const wrapper = mount<Carousel>(
        <Carousel
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

      const wrapperEl = wrapper.instance().wrapperRef.current as HTMLElement;
      const containerEl = wrapper.instance().containerRef.current as HTMLElement;
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

      wrapper.instance().dragStartOffset = { x: 0, y: 0 };
      wrapper.instance().dragStartClient = { x: 0, y: 0 };
      (wrapper.find(Draggable).prop('onDragEnd') as any)({
        offset: { x: 0, y: endOffset },
        client: { x: 0, y: endOffset },
      });
      expect(wrapper.instance().currentIndex).toBe(itemsCount - 1);
    });
  });
});

describe('Carousel: infinite mode', () => {
  it('should move forward with correcting offset', () => {
    const itemSize = 30;
    const step = 4;
    const itemsCount = 12;
    const wrapper = mount<Carousel>(
      <Carousel
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
    const wrapperEl = wrapper.instance().wrapperRef.current as HTMLElement;
    const containerEl = wrapper.instance().containerRef.current as HTMLElement;

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
    wrapper.instance().currentIndex = initialIndex;
    wrapper.setState({ currentOffset: initialOffset });

    // запускаем прокрутку
    wrapper.find(ArrowButton).at(1).find('button').simulate('click');

    expect(wrapper.instance().currentIndex).toBe(initialIndex - itemsCount + step);
  });

  it('should move forward vertically with correcting offset', () => {
    const itemSize = 30;
    const step = 4;
    const itemsCount = 12;
    const wrapper = mount<Carousel>(
      <Carousel
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
    const wrapperEl = wrapper.instance().wrapperRef.current as HTMLElement;
    const containerEl = wrapper.instance().containerRef.current as HTMLElement;

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
    wrapper.instance().currentIndex = initialIndex;
    wrapper.setState({ currentOffset: initialOffset });

    // запускаем прокрутку
    wrapper.find(ArrowButton).at(0).find('button').simulate('click');

    expect(wrapper.instance().currentIndex).toBe(initialIndex + itemsCount - step);
  });

  it('should move forward without correcting offset', () => {
    const itemSize = 30;
    const step = 4;
    const itemsCount = 12;
    const wrapper = mount<Carousel>(
      <Carousel
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
    const wrapperEl = wrapper.instance().wrapperRef.current as HTMLElement;
    const containerEl = wrapper.instance().containerRef.current as HTMLElement;

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
    wrapper.instance().currentIndex = initialIndex;
    wrapper.setState({ currentOffset: initialOffset });

    // запускаем прокрутку
    wrapper.find(ArrowButton).at(1).find('button').simulate('click');

    expect(wrapper.instance().currentIndex).toBe(step);
  });

  it('should move backward without correcting offset', () => {
    const itemSize = 30;
    const step = 4;
    const itemsCount = 12;
    const wrapper = mount<Carousel>(
      <Carousel
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
    const wrapperEl = wrapper.instance().wrapperRef.current as HTMLElement;
    const containerEl = wrapper.instance().containerRef.current as HTMLElement;

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
    wrapper.instance().currentIndex = initialIndex;
    wrapper.setState({ currentOffset: initialOffset });

    // запускаем прокрутку
    wrapper.find(ArrowButton).at(0).find('button').simulate('click');

    expect(wrapper.instance().currentIndex).toBe(8);
  });

  it('should move backward with correcting offset', () => {
    const itemSize = 30;
    const step = 4;
    const itemsCount = 12;
    const wrapper = mount<Carousel>(
      <Carousel
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
    const wrapperEl = wrapper.instance().wrapperRef.current as HTMLElement;
    const containerEl = wrapper.instance().containerRef.current as HTMLElement;

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
    wrapper.instance().currentIndex = initialIndex;
    wrapper.setState({ currentOffset: initialOffset });

    // запускаем прокрутку
    wrapper.find(ArrowButton).at(0).find('button').simulate('click');

    expect(wrapper.instance().currentIndex).toBe(initialIndex + itemsCount - step);
  });

  it('should handle drag forward with correcting offset', () => {
    const itemSize = 30;
    const itemsCount = 12;
    const wrapper = mount<Carousel>(
      <Carousel
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
    const wrapperEl = wrapper.instance().wrapperRef.current as HTMLElement;
    const containerEl = wrapper.instance().containerRef.current as HTMLElement;

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

    expect((wrapper.find(Draggable).instance() as any).currentOffset).toEqual({
      x: 0,
      y: 0,
    });

    // имитируем перетаскивание
    (wrapper.find(Draggable).prop('onDragStart') as any)(
      new DraggableEvent({
        offset: Point(0, 0),
        client: Point(0, 0),
      }),
    );
    (wrapper.find(Draggable).prop('onDragMove') as any)(
      new DraggableEvent({
        offset: Point(dragOffset, 0),
        client: Point(dragOffset, 0),
      }),
    );

    expect((wrapper.find(Draggable).instance() as any).currentOffset).toEqual({
      x: -990,
      y: 0,
    });
  });

  it('should handle drag backward with correcting offset', () => {
    const itemSize = 30;
    const itemsCount = 12;
    const wrapper = mount<Carousel>(
      <Carousel
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
    const wrapperEl = wrapper.instance().wrapperRef.current as HTMLElement;
    const containerEl = wrapper.instance().containerRef.current as HTMLElement;

    // формируем viewport
    wrapper.setState({ isAllItemsVisible: false });
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
    wrapper.setState({ isAllItemsVisible: false });

    expect((wrapper.find(Draggable).instance() as any).currentOffset).toEqual({
      x: 0,
      y: 0,
    });

    // имитируем перетаскивание
    (wrapper.find(Draggable).prop('onDragStart') as any)(
      new DraggableEvent({
        offset: Point(0, 0),
        client: Point(0, 0),
      }),
    );

    // подменяю результат потому что в jest + jsdom + enzyme все подменяется на ходу
    jest.spyOn(wrapper.instance(), 'findRealItemsStartBound').mockImplementation(() => 90000);
    (wrapper.find(Draggable).prop('onDragMove') as any)(
      new DraggableEvent({
        offset: Point(dragOffset, 0),
        client: Point(dragOffset, 0),
      }),
    );

    expect((wrapper.find(Draggable).instance() as any).currentOffset).toEqual({
      x: -110,
      y: 0,
    });
  });

  it('should handle drag backward without correcting offset', () => {
    const itemSize = 30;
    const itemsCount = 12;
    const wrapper = mount<Carousel>(
      <Carousel
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

    const wrapperEl = wrapper.instance().wrapperRef.current as HTMLElement;
    const containerEl = wrapper.instance().containerRef.current as HTMLElement;

    // формируем viewport
    wrapper.setState({ isAllItemsVisible: false });
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
    wrapper.setState({ isAllItemsVisible: false });

    expect((wrapper.find(Draggable).instance() as any).currentOffset).toEqual({
      x: 0,
      y: 0,
    });

    // имитируем перетаскивание
    (wrapper.find(Draggable).prop('onDragStart') as any)(
      new DraggableEvent({
        offset: Point(0, 0),
        client: Point(0, 0),
      }),
    );

    // подменяю результат потому что в jest + jsdom + enzyme все подменяется на ходу
    jest
      .spyOn(wrapper.instance(), 'findRealItemsStartBound' as any)
      .mockImplementation(() => -90000);
    (wrapper.find(Draggable).prop('onDragMove') as any)(
      new DraggableEvent({
        offset: Point(0, dragOffset),
        client: Point(0, dragOffset),
      }),
    );

    expect((wrapper.find(Draggable).instance() as any).currentOffset).toEqual({
      x: 0,
      y: 0,
    });
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
    it('should work without second argument', () => {
      expect(() =>
        Carousel.prototype.scrollToItem.call(
          {
            props: { vertical: false },
            listElement: { children: [] },
          },
          0 as any,
        ),
      ).not.toThrow();
    });

    it('should work without second argument prop needTransition', () => {
      expect(() =>
        Carousel.prototype.scrollToItem.call(
          {
            props: { vertical: false },
            listElement: { children: [] },
          },
          0 as any,
        ),
      ).not.toThrow();
    });
  });
});
