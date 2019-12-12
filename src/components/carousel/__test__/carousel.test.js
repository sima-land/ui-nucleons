import React from 'react';
import { mount } from 'enzyme';
import Carousel, { Carousel as PureCarousel } from '../carousel';
import Draggable, { Draggable as PureDraggable } from '../draggable';
import DraggableEvent from '../helpers/draggable-event';
import NavButton from '../nav-button';
import classes from '../carousel.scss';
import Point from '../../helpers/point';

/**
 * Определяет свойство на объекте.
 * @param {Object} object Объект.
 * @param {Object} key Ключ.
 * @param {Object} value Значение.
 */
const defineProp = (object, key, value) => {
  Object.defineProperty(object, key, {
    value,
    configurable: true,
  });
};

/**
 * Подменяет значения, отвечающие за определение позиции и размера элементов карусели.
 * @param {Object} props Свойства компонента.
 * @param {Element} props.containerEl Контейнер элементов карусели.
 * @param {string} props.itemsSelector Селектор элементов карусели.
 * @param {boolean} props.vertical Вертикальная ли карусель.
 * @param {number} props.itemSize Размер оного элемента в пикселях.
 * @param {number} props.itemsCount Количество элементов.
 * @param {number} props.offset Смещение элементов.
 */
const placeItems = ({
  containerEl,
  itemsSelector,
  vertical,
  itemSize,
  itemsCount,
  offset = 0,
}) => {
  // подменяем размер элемента-контейнера
  defineProp(containerEl, vertical ? 'scrollHeight' : 'scrollWidth', itemSize * itemsCount);
  defineProp(containerEl, !vertical ? 'scrollHeight' : 'scrollWidth', itemSize);

  // подменяем размеры всех элементов карусели
  containerEl.querySelectorAll(itemsSelector).forEach((itemEl, index) => {
    jest.spyOn(itemEl, 'getBoundingClientRect').mockImplementation(() => ({
      width: itemSize,
      height: itemSize,
      left: vertical ? 0 : (index * itemSize) + offset,
      right: vertical ? itemSize : ((index * itemSize) + itemSize) + offset,
      top: !vertical ? 0 : (index * itemSize) + offset,
      bottom: !vertical ? itemSize : ((index * itemSize) + itemSize) + offset,
    }));
  });
};

describe('<Carousel />', () => {
  it('should enable autoplay on mount', () => {
    const wrapper = mount(
      <Carousel autoplay />
    );
    const instance = wrapper.find(PureCarousel).instance();

    jest.spyOn(instance, 'enableAutoplay');

    expect(instance.enableAutoplay).toHaveBeenCalledTimes(0);
    instance.componentDidMount();
    expect(instance.enableAutoplay).toHaveBeenCalledTimes(1);

    wrapper.setProps({ autoplay: false });
    expect(instance.enableAutoplay).toHaveBeenCalledTimes(1);
    instance.componentDidMount();
    expect(instance.enableAutoplay).toHaveBeenCalledTimes(1);
  });

  it('should toggle autoplay on update', () => {
    const wrapper = mount(
      <Carousel />
    );
    const instance = wrapper.find(PureCarousel).instance();

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
    const wrapper = mount(
      <Carousel autoplay />
    );
    const instance = wrapper.find(PureCarousel).instance();

    jest.spyOn(instance, 'canDrag').mockImplementation(() => true);
    jest.spyOn(instance, 'toggleAutoMove');

    expect(instance.toggleAutoMove).toHaveBeenCalledTimes(0);
    instance.onDragEnd(new DraggableEvent({ offset: Point(), client: Point() }));
    expect(instance.toggleAutoMove).toHaveBeenCalledTimes(1);
  });

  it('should disable auto move on mouse enter', () => {
    const wrapper = mount(
      <Carousel autoplay autoplayHoverPause />
    );
    const instance = wrapper.find(PureCarousel).instance();

    jest.spyOn(instance, 'toggleAutoMove');

    expect(instance.toggleAutoMove).toHaveBeenCalledTimes(0);
    wrapper.find(`.${classes['carousel-wrapper']}`).simulate('mouseenter');
    expect(instance.toggleAutoMove).toHaveBeenCalledTimes(1);
    expect(instance.toggleAutoMove).toHaveBeenCalledWith(false);
  });

  it('should not disable auto move on mouse enter', () => {
    const wrapper = mount(
      <Carousel autoplay autoplayHoverPause={false} />
    );
    const instance = wrapper.find(PureCarousel).instance();

    jest.spyOn(instance, 'toggleAutoMove');

    expect(instance.toggleAutoMove).toHaveBeenCalledTimes(0);
    wrapper.find(`.${classes['carousel-wrapper']}`).simulate('mouseenter');
    expect(instance.toggleAutoMove).toHaveBeenCalledTimes(0);
  });

  it('should enable auto move on mouse leave', () => {
    const wrapper = mount(
      <Carousel autoplay autoplayHoverPause />
    );
    const instance = wrapper.find(PureCarousel).instance();

    // simulate drag start
    wrapper.find(PureDraggable).prop('onDragStart')(new DraggableEvent({ offset: Point(), client: Point() }));

    jest.spyOn(instance, 'toggleAutoMove');
    expect(instance.toggleAutoMove).toHaveBeenCalledTimes(0);

    // simulate mouse leave
    wrapper.find(`.${classes['carousel-wrapper']}`).simulate('mouseleave');
    expect(instance.toggleAutoMove).toHaveBeenCalledTimes(1);
    expect(instance.toggleAutoMove).toHaveBeenCalledWith(true);
  });

  it('should not enable auto move on mouse leave', () => {
    const wrapper = mount(
      <Carousel autoplay autoplayHoverPause={false} />
    );
    const instance = wrapper.find(PureCarousel).instance();

    // simulate drag start
    wrapper.find(PureDraggable).prop('onDragStart')(new DraggableEvent({ offset: Point(), client: Point() }));

    jest.spyOn(instance, 'toggleAutoMove');
    expect(instance.toggleAutoMove).toHaveBeenCalledTimes(0);

    // simulate mouse leave
    wrapper.find(`.${classes['carousel-wrapper']}`).simulate('mouseleave');
    expect(instance.toggleAutoMove).toHaveBeenCalledTimes(0);
  });

  it('should register timer by setInterval', () => {
    jest.useFakeTimers();

    const wrapper = mount(
      <Carousel autoplay autoplayTimeout={1000} />
    );
    const instance = wrapper.find(PureCarousel).instance();
    jest.spyOn(instance, 'moveForward');

    expect(instance.moveForward).toHaveBeenCalledTimes(0);
    jest.advanceTimersByTime(1200);
    expect(instance.moveForward).toHaveBeenCalledTimes(1);
  });
});

describe('Carousel: finite mode', () => {
  beforeEach(() => {
    jest.resetAllMocks();
  });

  it('should render without props', () => {
    const wrapper = mount(
      <Carousel
        infinite={false}
      />
    );
    expect(wrapper.find(`.${classes['carousel-wrapper']}`)).toHaveLength(1);
  });

  it('should handle "vertical" props', () => {
    const wrapper = mount(
      <Carousel
        vertical
        infinite={false}
      />
    );
    expect(wrapper.find(`.${classes['carousel-items-container']}`).prop('className')).toContain(classes.vertical);
    expect(wrapper.find(Draggable).prop('axis')).toBe('y');
  });

  it('should init global "resize" event listener after mount', () => {
    let handler;
    const testAddGlobalListener = jest.fn((eventName, eventHandler) => {
      handler = eventHandler;
      () => ({ eventName, eventHandler });
    });
    const wrapper = mount(
      <PureCarousel addGlobalListener={testAddGlobalListener} />
    );

    const pureInstance = wrapper.find(PureCarousel).instance();

    testAddGlobalListener.mockClear();

    expect(testAddGlobalListener).toHaveBeenCalledTimes(0);

    pureInstance.componentDidMount();
    expect(testAddGlobalListener).toHaveBeenCalledTimes(1);
    expect(testAddGlobalListener).toHaveBeenCalledWith('resize', handler);

    jest.spyOn(pureInstance, 'toggleDragTransition');
    jest.spyOn(pureInstance, 'scrollToItem');
    jest.spyOn(pureInstance, 'updateItemsVisibility');

    handler();

    expect(pureInstance.toggleDragTransition).toHaveBeenCalledTimes(2);
    expect(pureInstance.toggleDragTransition.mock.calls[0][0]).toBe(false);
    expect(pureInstance.toggleDragTransition.mock.calls[1][0]).toBe(true);
    expect(pureInstance.scrollToItem).toHaveBeenCalledTimes(1);
    expect(pureInstance.updateItemsVisibility).toHaveBeenCalledTimes(1);
  });

  it('should update current index in state on "targetIndex" prop change', () => {
    const wrapper = mount(
      <Carousel
        targetIndex={0}
        infinite={false}
      />
    );
    const testInstance = wrapper.find(PureCarousel).instance();

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
    const unsubscribe = jest.fn();
    const wrapper = mount(
      <PureCarousel addGlobalListener={jest.fn(() => unsubscribe)} />
    );
    expect(unsubscribe).toHaveBeenCalledTimes(0);
    wrapper.unmount();
    expect(unsubscribe).toHaveBeenCalledTimes(1);
  });

  it('isAllItemsVisible() should works properly', () => {
    const wrapper = mount(
      <Carousel
        vertical={false}
        infinite={false}
        items={[1, 2, 4, 5, 6, 7, 8, 9]}
      />
    );
    const wrapperEl = wrapper.find(PureCarousel).instance().wrapperRef.current;
    const containerEl = wrapper.find(PureCarousel).instance().containerRef.current;

    // horizontal & not all visible
    jest.spyOn(wrapperEl, 'getBoundingClientRect').mockImplementation(() => ({
      top: 0,
      left: 0,
      width: 100,
      height: 20,
      right: 100,
      bottom: 20,
    }));
    defineProp(containerEl, 'scrollWidth', 500);
    defineProp(containerEl, 'scrollHeight', 20);
    expect(wrapper.find(PureCarousel).instance().isAllItemsVisible()).toBe(false);

    // horizontal & all visible
    defineProp(containerEl, 'scrollWidth', 100);
    expect(wrapper.find(PureCarousel).instance().isAllItemsVisible()).toBe(true);

    // vertical & not all visible
    wrapper.setProps({ vertical: true });
    jest.spyOn(wrapperEl, 'getBoundingClientRect').mockImplementation(() => ({
      top: 0,
      left: 0,
      width: 40,
      height: 200,
      right: 40,
      bottom: 200,
    }));
    defineProp(containerEl, 'scrollWidth', 40);
    defineProp(containerEl, 'scrollHeight', 400);
    expect(wrapper.find(PureCarousel).instance().isAllItemsVisible()).toBe(false);

    // vertical & all visible
    defineProp(containerEl, 'scrollHeight', 200);
    expect(wrapper.find(PureCarousel).instance().isAllItemsVisible()).toBe(true);
  });

  it('onDragStart() should works properly', () => {
    const wrapper = mount(
      <Carousel
        infinite={false}
      />
    );
    jest.spyOn(wrapper.find(PureCarousel).instance(), 'saveDragStartData');
    jest.spyOn(wrapper.find(PureCarousel).instance(), 'toggleDragTransition');

    expect(wrapper.find(PureCarousel).instance().saveDragStartData).toHaveBeenCalledTimes(0);
    expect(wrapper.find(PureCarousel).instance().toggleDragTransition).toHaveBeenCalledTimes(0);
    wrapper.find(Draggable).prop('onDragStart')({ offset: { x: 3, y: 5 } });
    expect(wrapper.find(PureCarousel).instance().saveDragStartData).toHaveBeenCalledTimes(1);
    expect(wrapper.find(PureCarousel).instance().toggleDragTransition).toHaveBeenCalledTimes(1);
  });

  it('moveForward() should works properly', () => {
    const wrapper = mount(
      <Carousel
        vertical={false}
        items={[...Array(17).keys()]}
        withControls
        infinite={false}
      />
    );
    const wrapperEl = wrapper.find(PureCarousel).instance().wrapperRef.current;
    const containerEl = wrapper.find(PureCarousel).instance().containerRef.current;

    jest.spyOn(wrapperEl, 'getBoundingClientRect').mockImplementation(() => ({
      top: 0,
      left: 0,
      width: 100,
      height: 20,
      right: 100,
      bottom: 20,
    }));
    defineProp(containerEl, 'scrollWidth', 500);
    wrapper.setProps({ targetIndex: 0 });

    wrapper.find(NavButton).at(1).find('button').simulate('click');
    expect(wrapper.find(PureCarousel).instance().currentIndex).toBe(3);

    wrapper.find(NavButton).at(1).find('button').simulate('click');
    expect(wrapper.find(PureCarousel).instance().currentIndex).toBe(6);

    wrapper.find(NavButton).at(1).find('button').simulate('click');
    expect(wrapper.find(PureCarousel).instance().currentIndex).toBe(9);

    wrapper.find(NavButton).at(1).find('button').simulate('click');
    expect(wrapper.find(PureCarousel).instance().currentIndex).toBe(12);

    wrapper.find(NavButton).at(1).find('button').simulate('click');
    expect(wrapper.find(PureCarousel).instance().currentIndex).toBe(15);

    wrapper.find(NavButton).at(1).find('button').simulate('click');
    expect(wrapper.find(PureCarousel).instance().currentIndex).toBe(16);

    wrapper.find(NavButton).at(1).find('button').simulate('click');
    expect(wrapper.find(PureCarousel).instance().currentIndex).toBe(16);

    wrapper.setProps({ items: undefined });

    wrapper.find(NavButton).at(1).find('button').simulate('click');
    expect(wrapper.find(PureCarousel).instance().currentIndex).toBe(0);
  });

  it('should move backward properly for horizontal carousel', () => {
    const itemSize = 20;
    const itemsCount = 17;
    const wrapper = mount(
      <Carousel
        vertical={false}
        infinite={false}
        items={[...Array(itemsCount).keys()]}
        withControls
        renderItem={item => (
          <div key={item} className='test-item'>{item}</div>
        )}
      />
    );
    const wrapperEl = wrapper.find(PureCarousel).instance().wrapperRef.current;
    const containerEl = wrapper.find(PureCarousel).instance().containerRef.current;

    jest.spyOn(wrapperEl, 'getBoundingClientRect').mockImplementation(() => ({
      top: 0,
      left: 0,
      width: 100,
      height: 20,
      right: 100,
      bottom: 20,
    }));

    // смещаем элементы так, чтобы последний элемент был вплотную к правой границе карусели
    const offset = 100 - (itemSize * itemsCount);
    placeItems({
      containerEl,
      itemsSelector: '.test-item',
      vertical: false,
      itemSize,
      itemsCount,
      offset,
    });
    wrapper.find(PureCarousel).instance().currentIndex = itemsCount - 1;
    wrapper.find(PureCarousel).setState({ currentOffset: offset });
    wrapper.find(NavButton).at(0).find('button').simulate('click');
    expect(wrapper.find(PureCarousel).instance().currentIndex).toBe(9);
  });

  it('should move backward properly for vertical carousel', () => {
    const itemSize = 30;
    const itemsCount = 12;
    const wrapper = mount(
      <Carousel
        infinite={false}
        vertical
        items={[...Array(itemsCount).keys()]}
        withControls
        renderItem={item => (
          <div key={item} className='test-item'>{item}</div>
        )}
      />
    );
    const wrapperEl = wrapper.find(PureCarousel).instance().wrapperRef.current;
    const containerEl = wrapper.find(PureCarousel).instance().containerRef.current;

    jest.spyOn(wrapperEl, 'getBoundingClientRect').mockImplementation(() => ({
      top: 0,
      left: 0,
      width: 100,
      height: 20,
      right: 100,
      bottom: 20,
    }));

    // смещаем элементы так, чтобы последний элемент был вплотную к правой границе карусели
    const offset = 100 - (itemSize * itemsCount);
    placeItems({
      containerEl,
      itemsSelector: '.test-item',
      vertical: true,
      itemSize,
      itemsCount,
      offset,
    });
    wrapper.find(PureCarousel).instance().currentIndex = itemsCount - 1;
    wrapper.find(PureCarousel).setState({ currentOffset: offset });
    wrapper.find(NavButton).at(0).find('button').simulate('click');
    expect(wrapper.find(PureCarousel).instance().currentIndex).toBe(6);
  });

  it('should move backward to first item', () => {
    const itemSize = 20;
    const itemsCount = 6;
    const wrapper = mount(
      <Carousel
        vertical={false}
        step={5}
        items={[...Array(itemsCount).keys()]}
        withControls
        renderItem={item => (
          <div key={item} className='test-item'>{item}</div>
        )}
        infinite={false}
      />
    );
    const wrapperEl = wrapper.find(PureCarousel).instance().wrapperRef.current;
    const containerEl = wrapper.find(PureCarousel).instance().containerRef.current;

    jest.spyOn(wrapperEl, 'getBoundingClientRect').mockImplementation(() => ({
      top: 0,
      left: 0,
      width: 100,
      height: 20,
      right: 100,
      bottom: 20,
    }));

    // смещаем элементы так, чтобы последний элемент был вплотную к правой границе карусели
    const offset = 100 - (itemSize * itemsCount);
    placeItems({
      containerEl,
      itemsSelector: '.test-item',
      vertical: false,
      itemSize,
      itemsCount,
      offset,
    });
    wrapper.find(PureCarousel).instance.currentIndex = itemsCount - 1;
    wrapper.find(PureCarousel).setState({ currentOffset: offset });
    wrapper.find(NavButton).at(0).find('button').simulate('click');
    expect(wrapper.find(PureCarousel).instance().currentIndex).toBe(0);
  });

  it('should handle drag end when start offset equals end offset', () => {
    const wrapper = mount(
      <Carousel
        items={[...Array(12).keys()]}
        withControls
        renderItem={item => (
          <div key={item} className='test-item'>{item}</div>
        )}
        infinite={false}
      />
    );

    jest.spyOn(wrapper.find(PureCarousel).instance(), 'setCurrentIndex');
    wrapper.find(PureCarousel).instance().dragStartOffset = { x: 0, y: 0 };
    wrapper.find(Draggable).prop('onDragEnd')({ offset: { x: 0, y: 0 } });
    expect(wrapper.find(PureCarousel).instance().setCurrentIndex).toHaveBeenCalledTimes(0);
  });

  describe('should handle drag', () => {
    const itemSize = 20;
    const itemsCount = 15;
    const visibleItemsCount = 5;

    it('drag horizontal forward', () => {
      const wrapper = mount(
        <Carousel
          vertical={false}
          items={[...Array(itemsCount).keys()]}
          withControls
          renderItem={item => (
            <div key={item} className='test-item'>{item}</div>
          )}
          infinite={false}
        />
      );

      const wrapperEl = wrapper.find(PureCarousel).instance().wrapperRef.current;
      const containerEl = wrapper.find(PureCarousel).instance().containerRef.current;
      jest.spyOn(wrapperEl, 'getBoundingClientRect').mockImplementation(() => ({
        top: 0,
        left: 0,
        width: visibleItemsCount * itemSize,
        height: itemSize,
        right: visibleItemsCount * itemSize,
        bottom: itemSize,
      }));
      const endOffset = -(5.5 * itemSize); // переместили мышкой на 5.5 элементов вперед (влево)
      placeItems({
        containerEl,
        itemsSelector: '.test-item',
        vertical: false,
        itemSize,
        itemsCount,
        offset: endOffset,
      });

      wrapper.find(PureCarousel).instance().dragStartOffset = { x: 0, y: 0 };
      wrapper.find(PureCarousel).instance().dragStartClient = { x: 0, y: 0 };
      wrapper.find(Draggable).prop('onDragEnd')({
        offset: { x: endOffset, y: 0 },
        client: { x: endOffset, y: 0 },
      });
      expect(wrapper.find(PureCarousel).instance().currentIndex).toBe(6);
    });

    it('drag horizontal backward outside viewport bounds', () => {
      const wrapper = mount(
        <Carousel
          infinite={false}
          vertical={false}
          items={[...Array(itemsCount).keys()]}
          withControls
          renderItem={item => (
            <div key={item} className='test-item'>{item}</div>
          )}
        />
      );

      const wrapperEl = wrapper.find(PureCarousel).instance().wrapperRef.current;
      const containerEl = wrapper.find(PureCarousel).instance().containerRef.current;
      jest.spyOn(wrapperEl, 'getBoundingClientRect').mockImplementation(() => ({
        top: 0,
        left: 0,
        width: visibleItemsCount * itemSize,
        height: itemSize,
        right: visibleItemsCount * itemSize,
        bottom: itemSize,
      }));
      const endOffset = (itemsCount * 2) * itemSize; // переместили мышкой за пределы области галереи
      placeItems({
        containerEl,
        itemsSelector: '.test-item',
        vertical: false,
        itemSize,
        itemsCount,
        offset: endOffset,
      });

      wrapper.find(PureCarousel).instance().dragStartOffset = { x: 0, y: 0 };
      wrapper.find(PureCarousel).instance().dragStartClient = { x: 0, y: 0 };
      wrapper.find(Draggable).prop('onDragEnd')({
        offset: { x: endOffset, y: 0 },
        client: { x: endOffset, y: 0 },
      });
      expect(wrapper.find(PureCarousel).instance().currentIndex).toBe(0);
    });

    it('drag horizontal backward', () => {
      const wrapper = mount(
        <Carousel
          vertical={false}
          items={[...Array(itemsCount).keys()]}
          withControls
          renderItem={item => (
            <div key={item} className='test-item'>{item}</div>
          )}
          infinite={false}
        />
      );
      const wrapperEl = wrapper.find(PureCarousel).instance().wrapperRef.current;
      const containerEl = wrapper.find(PureCarousel).instance().containerRef.current;

      // перед перемещением мышью встаем на 6 элемент
      const startIndex = 6; // переместили мышкой на 4.3 элементов назад (вправо)
      const startOffset = -(startIndex * itemSize); // переместили мышкой на 4.3 элементов назад (вправо)
      wrapper.find(PureCarousel).setState({ currentIndex: startIndex });
      wrapper.find(PureCarousel).setState({ currentOffset: -(startIndex * itemSize) });
      jest.spyOn(wrapperEl, 'getBoundingClientRect').mockImplementation(() => ({
        top: 0,
        left: 0,
        width: visibleItemsCount * itemSize,
        height: itemSize,
        right: visibleItemsCount * itemSize,
        bottom: itemSize,
      }));
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

      wrapper.find(PureCarousel).instance().dragStartOffset = { x: startOffset, y: 0 };
      wrapper.find(PureCarousel).instance().dragStartClient = { x: startOffset, y: 0 };
      wrapper.find(Draggable).prop('onDragEnd')({
        offset: { x: endOffset, y: 0 },
        client: { x: endOffset, y: 0 },
      });
      expect(wrapper.find(PureCarousel).instance().currentIndex).toBe(1);
    });

    it('drag vertical forward', () => {
      const wrapper = mount(
        <Carousel
          vertical
          items={[...Array(itemsCount).keys()]}
          withControls
          renderItem={item => (
            <div key={item} className='test-item'>{item}</div>
          )}
          infinite={false}
        />
      );

      const wrapperEl = wrapper.find(PureCarousel).instance().wrapperRef.current;
      const containerEl = wrapper.find(PureCarousel).instance().containerRef.current;
      jest.spyOn(wrapperEl, 'getBoundingClientRect').mockImplementation(() => ({
        top: 0,
        left: 0,
        width: visibleItemsCount * itemSize,
        height: itemSize,
        right: visibleItemsCount * itemSize,
        bottom: itemSize,
      }));
      const endOffset = -(3.2 * itemSize); // переместили мышкой на 3.5 элементов вперед (вниз)
      placeItems({
        containerEl,
        itemsSelector: '.test-item',
        vertical: true,
        itemSize,
        itemsCount,
        offset: endOffset,
      });

      wrapper.find(PureCarousel).instance().dragStartOffset = { x: 0, y: 0 };
      wrapper.find(PureCarousel).instance().dragStartClient = { x: 0, y: 0 };
      wrapper.find(Draggable).prop('onDragEnd')({
        offset: { x: 0, y: endOffset },
        client: { x: 0, y: endOffset },
      });
      expect(wrapper.find(PureCarousel).instance().currentIndex).toBe(4);
    });

    it('drag vertical backward', () => {
      const wrapper = mount(
        <Carousel
          vertical
          items={[...Array(itemsCount).keys()]}
          withControls
          renderItem={item => (
            <div key={item} className='test-item'>{item}</div>
          )}
          infinite={false}
        />
      );
      const wrapperEl = wrapper.find(PureCarousel).instance().wrapperRef.current;
      const containerEl = wrapper.find(PureCarousel).instance().containerRef.current;

      // перед перемещением мышью встаем на 6 элемент
      const startIndex = 5; // переместили мышкой на 4.3 элементов назад (вправо)
      const startOffset = -(startIndex * itemSize); // переместили мышкой на 4.3 элементов назад (вправо)
      wrapper.find(PureCarousel).setState({ currentIndex: startIndex });
      wrapper.find(PureCarousel).setState({ currentOffset: -(startIndex * itemSize) });
      jest.spyOn(wrapperEl, 'getBoundingClientRect').mockImplementation(() => ({
        top: 0,
        left: 0,
        width: itemSize,
        height: visibleItemsCount * itemSize,
        right: itemSize,
        bottom: visibleItemsCount * itemSize,
      }));
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

      wrapper.find(PureCarousel).instance().dragStartOffset = { x: 0, y: startOffset };
      wrapper.find(PureCarousel).instance().dragStartClient = { x: 0, y: startOffset };
      wrapper.find(Draggable).prop('onDragEnd')({
        offset: { x: 0, y: endOffset },
        client: { x: 0, y: endOffset },
      });
      expect(wrapper.find(PureCarousel).instance().currentIndex).toBe(2);
    });

    it('drag vertical backward outside viewport bounds', () => {
      const wrapper = mount(
        <Carousel
          vertical
          items={[...Array(itemsCount).keys()]}
          withControls
          renderItem={item => (
            <div key={item} className='test-item'>{item}</div>
          )}
          infinite={false}
        />
      );

      const wrapperEl = wrapper.find(PureCarousel).instance().wrapperRef.current;
      const containerEl = wrapper.find(PureCarousel).instance().containerRef.current;
      jest.spyOn(wrapperEl, 'getBoundingClientRect').mockImplementation(() => ({
        top: 0,
        left: 0,
        width: visibleItemsCount * itemSize,
        height: itemSize,
        right: visibleItemsCount * itemSize,
        bottom: itemSize,
      }));
      const endOffset = (itemsCount * 2) * itemSize; // переместили мышкой за пределы области галереи
      placeItems({
        containerEl,
        itemsSelector: '.test-item',
        vertical: true,
        itemSize,
        itemsCount,
        offset: endOffset,
      });

      wrapper.find(PureCarousel).instance().dragStartOffset = { x: 0, y: 0 };
      wrapper.find(PureCarousel).instance().dragStartClient = { x: 0, y: 0 };
      wrapper.find(Draggable).prop('onDragEnd')({
        offset: { x: 0, y: endOffset },
        client: { x: 0, y: endOffset },
      });
      expect(wrapper.find(PureCarousel).instance().currentIndex).toBe(0);
    });

    it('drag vertical forward outside viewport bounds', () => {
      const wrapper = mount(
        <Carousel
          vertical
          items={[...Array(itemsCount).keys()]}
          withControls
          renderItem={item => (
            <div key={item} className='test-item'>{item}</div>
          )}
          infinite={false}
        />
      );

      const wrapperEl = wrapper.find(PureCarousel).instance().wrapperRef.current;
      const containerEl = wrapper.find(PureCarousel).instance().containerRef.current;
      jest.spyOn(wrapperEl, 'getBoundingClientRect').mockImplementation(() => ({
        top: 0,
        left: 0,
        width: visibleItemsCount * itemSize,
        height: itemSize,
        right: visibleItemsCount * itemSize,
        bottom: itemSize,
      }));
      const endOffset = -((itemsCount * 3) * itemSize); // переместили мышкой за пределы области галереи
      placeItems({
        containerEl,
        itemsSelector: '.test-item',
        vertical: true,
        itemSize,
        itemsCount,
        offset: endOffset,
      });

      wrapper.find(PureCarousel).instance().dragStartOffset = { x: 0, y: 0 };
      wrapper.find(PureCarousel).instance().dragStartClient = { x: 0, y: 0 };
      wrapper.find(Draggable).prop('onDragEnd')({
        offset: { x: 0, y: endOffset },
        client: { x: 0, y: endOffset },
      });
      expect(wrapper.find(PureCarousel).instance().currentIndex).toBe(itemsCount - 1);
    });
  });
});

describe('Carousel: infinite mode', () => {
  it('should move forward with correcting offset', () => {
    const itemSize = 30;
    const step = 4;
    const itemsCount = 12;
    const wrapper = mount(
      <Carousel
        infinite
        step={4}
        items={[...Array(itemsCount).keys()]}
        withControls
        renderItem={(item, index) => (
          <div key={index} className='test-item'>{item}</div>
        )}
      />
    );
    const wrapperEl = wrapper.find(PureCarousel).instance().wrapperRef.current;
    const containerEl = wrapper.find(PureCarousel).instance().containerRef.current;

    jest.spyOn(wrapperEl, 'getBoundingClientRect').mockImplementation(() => ({
      top: 0,
      left: 0,
      width: 100,
      height: 20,
      right: 100,
      bottom: 20,
    }));

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
    wrapper.find(PureCarousel).instance().currentIndex = initialIndex;
    wrapper.find(PureCarousel).setState({ currentOffset: initialOffset });

    // запускаем прокрутку
    wrapper.find(NavButton).at(1).find('button').simulate('click');

    expect(wrapper.find(PureCarousel).instance().currentIndex).toBe(initialIndex - itemsCount + step);
  });

  it('should move forward vertically with correcting offset', () => {
    const itemSize = 30;
    const step = 4;
    const itemsCount = 12;
    const wrapper = mount(
      <Carousel
        infinite
        step={4}
        vertical
        items={[...Array(itemsCount).keys()]}
        withControls
        renderItem={(item, index) => (
          <div key={index} className='test-item'>{item}</div>
        )}
      />
    );
    const wrapperEl = wrapper.find(PureCarousel).instance().wrapperRef.current;
    const containerEl = wrapper.find(PureCarousel).instance().containerRef.current;

    jest.spyOn(wrapperEl, 'getBoundingClientRect').mockImplementation(() => ({
      top: 0,
      left: 0,
      width: 100,
      height: 20,
      right: 100,
      bottom: 20,
    }));

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
    wrapper.find(PureCarousel).instance().currentIndex = initialIndex;
    wrapper.find(PureCarousel).setState({ currentOffset: initialOffset });

    // запускаем прокрутку
    wrapper.find(NavButton).at(0).find('button').simulate('click');

    expect(wrapper.find(PureCarousel).instance().currentIndex).toBe(initialIndex + itemsCount - step);
  });

  it('should move forward without correcting offset', () => {
    const itemSize = 30;
    const step = 4;
    const itemsCount = 12;
    const wrapper = mount(
      <Carousel
        infinite
        step={4}
        items={[...Array(itemsCount).keys()]}
        withControls
        renderItem={(item, index) => (
          <div key={index} className='test-item'>{item}</div>
        )}
      />
    );
    const wrapperEl = wrapper.find(PureCarousel).instance().wrapperRef.current;
    const containerEl = wrapper.find(PureCarousel).instance().containerRef.current;

    jest.spyOn(wrapperEl, 'getBoundingClientRect').mockImplementation(() => ({
      top: 0,
      left: 0,
      width: 100,
      height: 20,
      right: 100,
      bottom: 20,
    }));

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
    wrapper.find(PureCarousel).instance().currentIndex = initialIndex;
    wrapper.find(PureCarousel).setState({ currentOffset: initialOffset });

    // запускаем прокрутку
    wrapper.find(NavButton).at(1).find('button').simulate('click');

    expect(wrapper.find(PureCarousel).instance().currentIndex).toBe(step);
  });

  it('should move backward without correcting offset', () => {
    const itemSize = 30;
    const step = 4;
    const itemsCount = 12;
    const wrapper = mount(
      <Carousel
        infinite
        step={step}
        items={[...Array(itemsCount).keys()]}
        withControls
        renderItem={(item, index) => (
          <div key={index} className='test-item'>{item}</div>
        )}
      />
    );
    const wrapperEl = wrapper.find(PureCarousel).instance().wrapperRef.current;
    const containerEl = wrapper.find(PureCarousel).instance().containerRef.current;

    jest.spyOn(wrapperEl, 'getBoundingClientRect').mockImplementation(() => ({
      top: 0,
      left: 0,
      width: 100,
      height: 20,
      right: 100,
      bottom: 20,
    }));

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
    wrapper.find(PureCarousel).instance().currentIndex = initialIndex;
    wrapper.find(PureCarousel).setState({ currentOffset: initialOffset });

    // запускаем прокрутку
    wrapper.find(NavButton).at(0).find('button').simulate('click');

    expect(wrapper.find(PureCarousel).instance().currentIndex).toBe(8);
  });

  it('should move backward with correcting offset', () => {
    const itemSize = 30;
    const step = 4;
    const itemsCount = 12;
    const wrapper = mount(
      <Carousel
        infinite
        step={4}
        items={[...Array(itemsCount).keys()]}
        withControls
        renderItem={(item, index) => (
          <div key={index} className='test-item'>{item}</div>
        )}
      />
    );
    const wrapperEl = wrapper.find(PureCarousel).instance().wrapperRef.current;
    const containerEl = wrapper.find(PureCarousel).instance().containerRef.current;

    jest.spyOn(wrapperEl, 'getBoundingClientRect').mockImplementation(() => ({
      top: 0,
      left: 0,
      width: 100,
      height: 20,
      right: 100,
      bottom: 20,
    }));

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
    wrapper.find(PureCarousel).instance().currentIndex = initialIndex;
    wrapper.find(PureCarousel).setState({ currentOffset: initialOffset });

    // запускаем прокрутку
    wrapper.find(NavButton).at(0).find('button').simulate('click');

    expect(wrapper.find(PureCarousel).instance().currentIndex).toBe(initialIndex + itemsCount - step);
  });

  it('should handle drag forward with correcting offset', () => {
    const itemSize = 30;
    const itemsCount = 12;
    const wrapper = mount(
      <Carousel
        infinite
        items={[...Array(itemsCount).keys()]}
        withControls
        renderItem={(item, index) => (
          <div key={index} className='test-item'>{item}</div>
        )}
      />
    );
    const wrapperEl = wrapper.find(PureCarousel).instance().wrapperRef.current;
    const containerEl = wrapper.find(PureCarousel).instance().containerRef.current;

    // формируем viewport
    jest.spyOn(wrapperEl, 'getBoundingClientRect').mockImplementation(() => ({
      top: 0,
      left: 0,
      width: 20,
      height: 100,
      right: 20,
      bottom: 100,
    }));

    // формируем позицию и размеры элементов карусели
    const dragOffset = -(itemSize * ((itemsCount * 3) + 1));

    placeItems({
      containerEl,
      itemsSelector: '.test-item',
      vertical: false,
      itemSize,
      itemsCount,
      offset: dragOffset,
    });

    expect(wrapper.find(PureDraggable).instance().currentOffset).toEqual({
      x: 0,
      y: 0,
    });

    // имитируем перетаскивание
    wrapper.find(Draggable).prop('onDragStart')(new DraggableEvent({
      offset: Point(0, 0),
      client: Point(0, 0),
    }));
    wrapper.find(Draggable).prop('onDragMove')(new DraggableEvent({
      offset: Point(dragOffset, 0),
      client: Point(dragOffset, 0),
    }));

    expect(wrapper.find(PureDraggable).instance().currentOffset).toEqual({
      x: -990,
      y: 0,
    });
  });

  it('should handle drag backward with correcting offset', () => {
    const itemSize = 30;
    const itemsCount = 12;
    const wrapper = mount(
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
      />
    );
    const wrapperEl = wrapper.find(PureCarousel).instance().wrapperRef.current;
    const containerEl = wrapper.find(PureCarousel).instance().containerRef.current;

    // формируем viewport
    wrapper.find(PureCarousel).setState({ isAllItemsVisible: false });
    jest.spyOn(wrapperEl, 'getBoundingClientRect').mockImplementation(() => ({
      top: 0,
      left: 0,
      width: 100,
      height: 20,
      right: 100,
      bottom: 20,
    }));

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
    wrapper.find(PureCarousel).setState({ isAllItemsVisible: false });

    expect(wrapper.find(PureDraggable).instance().currentOffset).toEqual({
      x: 0,
      y: 0,
    });

    // имитируем перетаскивание
    wrapper.find(Draggable).prop('onDragStart')(new DraggableEvent({
      offset: Point(0, 0),
      client: Point(0, 0),
    }));

    // подменяю результат потому что в jest + jsdom + enzyme все подменяется на ходу
    jest.spyOn(wrapper.find(PureCarousel).instance(), 'findRealItemsStartBound').mockImplementation(() => 90000);
    wrapper.find(Draggable).prop('onDragMove')(new DraggableEvent({
      offset: Point(dragOffset, 0),
      client: Point(dragOffset, 0),
    }));

    expect(wrapper.find(PureDraggable).instance().currentOffset).toEqual({
      x: -110,
      y: 0,
    });
  });

  it('should handle drag backward without correcting offset', () => {
    const itemSize = 30;
    const itemsCount = 12;
    const wrapper = mount(
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
      />
    );
    const wrapperEl = wrapper.find(PureCarousel).instance().wrapperRef.current;
    const containerEl = wrapper.find(PureCarousel).instance().containerRef.current;

    // формируем viewport
    wrapper.find(PureCarousel).setState({ isAllItemsVisible: false });
    jest.spyOn(wrapperEl, 'getBoundingClientRect').mockImplementation(() => ({
      top: 0,
      left: 0,
      width: 20,
      height: 100,
      right: 20,
      bottom: 100,
    }));

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
    wrapper.find(PureCarousel).setState({ isAllItemsVisible: false });

    expect(wrapper.find(PureDraggable).instance().currentOffset).toEqual({
      x: 0,
      y: 0,
    });

    // имитируем перетаскивание
    wrapper.find(Draggable).prop('onDragStart')(new DraggableEvent({
      offset: Point(0, 0),
      client: Point(0, 0),
    }));

    // подменяю результат потому что в jest + jsdom + enzyme все подменяется на ходу
    jest.spyOn(wrapper.find(PureCarousel).instance(), 'findRealItemsStartBound').mockImplementation(() => -90000);
    wrapper.find(Draggable).prop('onDragMove')(new DraggableEvent({
      offset: Point(0, dragOffset),
      client: Point(0, dragOffset),
    }));

    expect(wrapper.find(PureDraggable).instance().currentOffset).toEqual({
      x: 0,
      y: 0,
    });
  });

  // дальше тесты написаны исключительно на mock'ах для покрытия
  describe('findRealItemsStartBound', () => {
    it('should return NaN', () => {
      expect(PureCarousel.prototype.findRealItemsStartBound.call({
        infinite: false,
        containerRef: { current: null },
      })).toEqual(NaN);
      expect(PureCarousel.prototype.findRealItemsStartBound.call({
        infinite: false,
        props: { vertical: false, items: [] },
        containerRef: { current: { children: [] } },
      })).toEqual(NaN);
    });

    it('should return left bound of first item in container children', () => {
      expect(PureCarousel.prototype.findRealItemsStartBound.call({
        infinite: false,
        props: { vertical: false, items: [1] },
        containerRef: { current: { children: [{ getBoundingClientRect: () => ({ top: 12, left: 23 }) }] } },
      })).toEqual(23);
    });

    it('should return top bound of first item in container children', () => {
      expect(PureCarousel.prototype.findRealItemsStartBound.call({
        infinite: false,
        props: { vertical: true, items: [1] },
        containerRef: { current: { children: [{ getBoundingClientRect: () => ({ top: 12, left: 23 }) }] } },
      })).toEqual(12);
    });

    it('should return top bound of first non clone item in container children', () => {
      expect(PureCarousel.prototype.findRealItemsStartBound.call({
        infinite: true,
        props: { vertical: true, items: [1] },
        containerRef: {
          current: {
            children: [
              { getBoundingClientRect: () => ({ top: 12, left: 23 }) },
              { getBoundingClientRect: () => ({ top: 34, left: 45 }) },
              { getBoundingClientRect: () => ({ top: 56, left: 67 }) },
            ],
          },
        },
      })).toEqual(34);
    });
  });

  describe('getListSize', () => {
    it('should return NaN', () => {
      expect(PureCarousel.prototype.getListSize.call({
        props: { vertical: false },
        containerRef: { current: null },
      })).toBe(NaN);
    });
    it('should return container element scrollWidth', () => {
      expect(PureCarousel.prototype.getListSize.call({
        props: { vertical: false },
        containerRef: { current: { scrollWidth: 123, scrollHeight: 234 } },
      })).toBe(123);
    });
    it('should return container element scrollHeight', () => {
      expect(PureCarousel.prototype.getListSize.call({
        props: { vertical: true },
        containerRef: { current: { scrollWidth: 123, scrollHeight: 234 } },
      })).toBe(234);
    });
  });

  describe('scrollToItem', () => {
    it('should work without second argument', () => {
      expect(() => PureCarousel.prototype.scrollToItem.call({
        props: { vertical: false },
        containerRef: { current: { children: [] } },
      }, 0)).not.toThrow();
    });
    it('should work without second argument prop needTransition', () => {
      expect(() => PureCarousel.prototype.scrollToItem.call({
        props: { vertical: false },
        containerRef: { current: { children: [] } },
      }, 0, {})).not.toThrow();
    });
  });
});
