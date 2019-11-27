import React from 'react';
import { mount } from 'enzyme';
import Carousel, { Carousel as PureCarousel } from '../carousel';
import Draggable from '../draggable';
import NavButton from '../nav-button';
import classes from '../carousel.scss';

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
  beforeEach(() => {
    jest.resetAllMocks();
  });

  it('should render without props', () => {
    const wrapper = mount(
      <Carousel />
    );
    expect(wrapper.find(`.${classes['carousel-wrapper']}`)).toHaveLength(1);
  });

  it('should handle "vertical" props', () => {
    const wrapper = mount(
      <Carousel vertical />
    );
    expect(wrapper.find(`.${classes['carousel-items-container']}`).prop('className')).toContain(classes.vertical);
    expect(wrapper.find(Draggable).prop('axis')).toBe('y');
  });

  it('should init global "resize" event listener after mount', () => {
    let handler;
    const testInstance = {
      props: {
        addGlobalListener: jest.fn((eventName, newHandler) => {
          handler = newHandler;
        }),
      },
      toggleTransition: jest.fn(),
      scrollToItem: jest.fn(),
      updateItemsVisibility: jest.fn(),
    };
    expect(testInstance.props.addGlobalListener).toHaveBeenCalledTimes(0);
    PureCarousel.prototype.componentDidMount.call(testInstance);

    expect(testInstance.scrollToItem).toHaveBeenCalledTimes(1);
    expect(testInstance.updateItemsVisibility).toHaveBeenCalledTimes(1);
    expect(testInstance.props.addGlobalListener).toHaveBeenCalledTimes(1);

    handler({ testEvent: true });

    expect(testInstance.toggleTransition).toHaveBeenCalledTimes(1);
    expect(testInstance.toggleTransition).toHaveBeenCalledWith(false);
    expect(testInstance.scrollToItem).toHaveBeenCalledTimes(2);
    expect(testInstance.updateItemsVisibility).toHaveBeenCalledTimes(2);
  });

  it('should update current index in state on "targetIndex" prop change', () => {
    const testInstance = {
      props: {
        targetIndex: 12,
        addGlobalListener: jest.fn(),
      },
      scrollToItem: jest.fn(),
      toggleTransition: jest.fn(),
      setCurrentIndex: jest.fn(),
      updateItemsVisibility: jest.fn(),
    };
    expect(testInstance.setCurrentIndex).toHaveBeenCalledTimes(0);
    expect(testInstance.toggleTransition).toHaveBeenCalledTimes(0);
    expect(testInstance.updateItemsVisibility).toHaveBeenCalledTimes(0);

    PureCarousel.prototype.componentDidUpdate.call(testInstance, { targetIndex: 0 });
    expect(testInstance.setCurrentIndex).toHaveBeenCalledTimes(1);
    expect(testInstance.setCurrentIndex).toHaveBeenCalledWith(12);
    expect(testInstance.toggleTransition).toHaveBeenCalledTimes(1);
    expect(testInstance.toggleTransition).toHaveBeenCalledWith(true);
    expect(testInstance.updateItemsVisibility).toHaveBeenCalledTimes(1);

    PureCarousel.prototype.componentDidUpdate.call(testInstance, { targetIndex: 12 });
    expect(testInstance.setCurrentIndex).toHaveBeenCalledTimes(1);
    expect(testInstance.toggleTransition).toHaveBeenCalledTimes(1);
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
      <Carousel />
    );
    jest.spyOn(wrapper.find(PureCarousel).instance(), 'saveOffset');
    jest.spyOn(wrapper.find(PureCarousel).instance(), 'saveDragStartOffset');
    jest.spyOn(wrapper.find(PureCarousel).instance(), 'toggleTransition');

    expect(wrapper.find(PureCarousel).instance().saveOffset).toHaveBeenCalledTimes(0);
    expect(wrapper.find(PureCarousel).instance().saveDragStartOffset).toHaveBeenCalledTimes(0);
    expect(wrapper.find(PureCarousel).instance().toggleTransition).toHaveBeenCalledTimes(0);
    wrapper.find(PureCarousel).instance().onDragStart({ offset: { x: 3, y: 5 } });
    expect(wrapper.find(PureCarousel).instance().saveOffset).toHaveBeenCalledTimes(1);
    expect(wrapper.find(PureCarousel).instance().saveDragStartOffset).toHaveBeenCalledTimes(1);
    expect(wrapper.find(PureCarousel).instance().toggleTransition).toHaveBeenCalledTimes(1);
  });

  it('toggleTransition() should works properly', () => {
    const wrapper = mount(
      <Carousel />
    );

    wrapper.find(PureCarousel).instance().toggleTransition(1);
    expect(wrapper.find(PureCarousel).state().withTransition).toBe(true);

    wrapper.find(PureCarousel).instance().toggleTransition(null);
    expect(wrapper.find(PureCarousel).state().withTransition).toBe(false);

    wrapper.find(PureCarousel).instance().toggleTransition(undefined);
    expect(wrapper.find(PureCarousel).state().withTransition).toBe(false);
  });

  it('saveOffset() should works properly', () => {
    const wrapper = mount(
      <Carousel />
    );

    wrapper.find(PureCarousel).instance().saveOffset({ offset: { x: 10, y: 20 } });
    expect(wrapper.find(PureCarousel).state().currentOffset).toEqual(10);

    wrapper.setProps({ vertical: true });
    wrapper.find(PureCarousel).instance().saveOffset({ offset: { x: 30, y: 40 } });
    expect(wrapper.find(PureCarousel).state().currentOffset).toBe(40);
  });

  it('moveForward() should works properly', () => {
    const wrapper = mount(
      <Carousel
        vertical={false}
        items={[...Array(17).keys()]}
        withControls
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
    expect(wrapper.find(PureCarousel).state().withTransition).toBe(true);
    expect(wrapper.find(PureCarousel).state().currentIndex).toBe(3);
    wrapper.find(NavButton).at(1).find('button').simulate('click');
    expect(wrapper.find(PureCarousel).state().currentIndex).toBe(6);
    wrapper.find(NavButton).at(1).find('button').simulate('click');
    expect(wrapper.find(PureCarousel).state().currentIndex).toBe(9);
    wrapper.find(NavButton).at(1).find('button').simulate('click');
    expect(wrapper.find(PureCarousel).state().currentIndex).toBe(12);
    wrapper.find(NavButton).at(1).find('button').simulate('click');
    expect(wrapper.find(PureCarousel).state().currentIndex).toBe(15);
    wrapper.find(NavButton).at(1).find('button').simulate('click');
    expect(wrapper.find(PureCarousel).state().currentIndex).toBe(16);
    wrapper.find(NavButton).at(1).find('button').simulate('click');
    expect(wrapper.find(PureCarousel).state().currentIndex).toBe(16);

    wrapper.setProps({ items: undefined });
    wrapper.find(NavButton).at(1).find('button').simulate('click');
    expect(wrapper.find(PureCarousel).state().currentIndex).toBe(0);
  });

  it('should move backward properly for horizontal carousel', () => {
    const itemSize = 20;
    const itemsCount = 17;
    const wrapper = mount(
      <Carousel
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
    wrapper.find(PureCarousel).setState({ currentIndex: itemsCount - 1 });
    wrapper.find(PureCarousel).setState({ currentOffset: offset });
    wrapper.find(NavButton).at(0).find('button').simulate('click');
    expect(wrapper.find(PureCarousel).state().currentIndex).toBe(9);
  });

  it('should move backward properly for vertical carousel', () => {
    const itemSize = 30;
    const itemsCount = 12;
    const wrapper = mount(
      <Carousel
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
    wrapper.find(PureCarousel).setState({ currentIndex: itemsCount - 1 });
    wrapper.find(PureCarousel).setState({ currentOffset: offset });
    wrapper.find(NavButton).at(0).find('button').simulate('click');
    expect(wrapper.find(PureCarousel).state().currentIndex).toBe(6);
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
    wrapper.find(PureCarousel).setState({ currentIndex: itemsCount - 1 });
    wrapper.find(PureCarousel).setState({ currentOffset: offset });
    wrapper.find(NavButton).at(0).find('button').simulate('click');
    expect(wrapper.find(PureCarousel).state().currentIndex).toBe(0);
  });

  it('should handle drag end when start offset equals end offset', () => {
    const wrapper = mount(
      <Carousel
        items={[...Array(12).keys()]}
        withControls
        renderItem={item => (
          <div key={item} className='test-item'>{item}</div>
        )}
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
      wrapper.find(Draggable).prop('onDragEnd')({ offset: { x: endOffset, y: 0 } });
      expect(wrapper.find(PureCarousel).state().currentIndex).toBe(6);
    });

    it('drag horizontal backward outside viewport bounds', () => {
      const wrapper = mount(
        <Carousel
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
      wrapper.find(Draggable).prop('onDragEnd')({ offset: { x: endOffset, y: 0 } });
      expect(wrapper.find(PureCarousel).state().currentIndex).toBe(0);
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
      wrapper.find(Draggable).prop('onDragEnd')({ offset: { x: endOffset, y: 0 } });
      expect(wrapper.find(PureCarousel).state().currentIndex).toBe(1);
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
      wrapper.find(Draggable).prop('onDragEnd')({ offset: { x: 0, y: endOffset } });
      expect(wrapper.find(PureCarousel).state().currentIndex).toBe(4);
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
      wrapper.find(Draggable).prop('onDragEnd')({ offset: { x: 0, y: endOffset } });
      expect(wrapper.find(PureCarousel).state().currentIndex).toBe(2);
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
      wrapper.find(Draggable).prop('onDragEnd')({ offset: { x: 0, y: endOffset } });
      expect(wrapper.find(PureCarousel).state().currentIndex).toBe(0);
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
      wrapper.find(Draggable).prop('onDragEnd')({ offset: { x: 0, y: endOffset } });
      expect(wrapper.find(PureCarousel).state().currentIndex).toBe(itemsCount - 1);
    });
  });
});
