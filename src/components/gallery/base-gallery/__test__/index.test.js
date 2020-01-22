import React from 'react';
import { mount, shallow } from 'enzyme/build';
import BaseGallery, { BaseGallery as PureGallery } from '../index';
import Button from '../../../button';
import isFunction from 'lodash/isFunction';

describe('<BaseGallery />', () => {
  const items = ['test 1', 'test 2', 'test 3', 'test 4', 'test 5'];
  const defaultState = {
    position: 0,
    withAnimation: true,
    hasControls: false,
  };
  let gallery;
  let instance;
  it('should render without props', () => {
    gallery = mount(<BaseGallery />);
    expect(gallery).toMatchSnapshot();
  });
  it('should render with items and controls', () => {
    /**
     * Функция для получения свойств item-а.
     * @param {string} item Item.
     * @return {Object} Свойства.
     */
    const getItemProps = item => ({
      children: <img src={item} alt={item} />,
    });
    gallery = mount(
      <BaseGallery
        items={items}
        getItemProps={getItemProps}
        needShowControls='always'
        controlContainer={Button}
      />
    );
    expect(gallery.find('img')).toHaveLength(5);
    expect(gallery.find(Button)).toHaveLength(2);
    expect(gallery).toMatchSnapshot();
  });
  it('should render without errors if wrong props value', () => {
    expect(() => shallow(
      <PureGallery
        itemsWrapperProps={null}
        itemsContainerProps={null}
      />
    )).not.toThrow();
  });
  it('should calls getControlProps with correct data', () => {
    const getControlProps = jest.fn();
    gallery = shallow(
      <PureGallery
        items={items}
        getControlProps={getControlProps}
      />
    );
    instance = gallery.instance();

    expect(gallery.state()).toEqual(defaultState);
    expect(getControlProps).toHaveBeenCalledTimes(2);
    expect(getControlProps).toHaveBeenNthCalledWith(1, 'backward', true);
    expect(getControlProps).toHaveBeenNthCalledWith(2, 'forward', true);

    gallery.setState({ position: -100 });
    expect(getControlProps).toHaveBeenCalledTimes(4);
    expect(getControlProps).toHaveBeenNthCalledWith(3, 'backward', false);
    expect(getControlProps).toHaveBeenNthCalledWith(4, 'forward', true);

    instance.maxPosition = -200;
    gallery.setState({ position: -100 });
    expect(getControlProps).toHaveBeenCalledTimes(6);
    expect(getControlProps).toHaveBeenNthCalledWith(5, 'backward', false);
    expect(getControlProps).toHaveBeenNthCalledWith(6, 'forward', false);

    gallery.setState({ position: 0 });
    expect(getControlProps).toHaveBeenCalledTimes(8);
    expect(getControlProps).toHaveBeenNthCalledWith(7, 'backward', true);
    expect(getControlProps).toHaveBeenNthCalledWith(8, 'forward', false);
  });
  it('should calls onControl correctly', () => {
    const onPrevClick = jest.fn();
    const onNextClick = jest.fn();

    /**
     * Функция для получения свойств элементов управления.
     * @param {string} type Тип.
     * @param {boolean} disabled Недоступна.
     * @return {Object} Свойства.
     */
    const getControlProps = jest.fn((type, disabled) => ({
      children: type,
      disabled,
      onClick: type === 'forward' ? onNextClick : onPrevClick,
    }));
    gallery = mount(
      <PureGallery
        items={items}
        needShowControls='always'
        controlContainer={Button}
        getControlProps={getControlProps}
      />
    );
    instance = gallery.instance();
    jest.spyOn(instance, 'onControl');
    instance.maxPosition = -300;

    gallery.find(Button).first().simulate('click');
    expect(instance.onControl).toHaveBeenCalledTimes(0);
    expect(onPrevClick).toHaveBeenCalledTimes(0);
    expect(onNextClick).toHaveBeenCalledTimes(0);

    gallery.setState({ withAnimation: true });
    gallery.find(Button).last().simulate('click');
    expect(instance.onControl).toHaveBeenCalledTimes(1);
    expect(instance.onControl).toHaveBeenNthCalledWith(1, true);
    expect(onPrevClick).toHaveBeenCalledTimes(0);
    expect(onNextClick).toHaveBeenCalledTimes(1);

    gallery.find(Button).last().simulate('click');
    expect(instance.onControl).toHaveBeenCalledTimes(1);
    expect(onPrevClick).toHaveBeenCalledTimes(0);
    expect(onNextClick).toHaveBeenCalledTimes(1);

    gallery.find(Button).first().simulate('click');
    expect(instance.onControl).toHaveBeenCalledTimes(2);
    expect(instance.onControl).toHaveBeenNthCalledWith(2, false);
    expect(onPrevClick).toHaveBeenCalledTimes(1);
    expect(onNextClick).toHaveBeenCalledTimes(1);
  });

  describe('componentDidMount', () => {
    it('does not create removeGlobalListener if props have not been passed', () => {
      gallery = shallow(<PureGallery />);
      instance = gallery.instance();
      jest.spyOn(instance, 'updateParams');
      expect(instance.updateParams).toHaveBeenCalledTimes(0);

      instance.componentDidMount();
      expect(instance.updateParams).toHaveBeenCalledTimes(1);
      expect(instance.removeGlobalListener).toBeUndefined();
    });
    it('does not create removeGlobalListener if addGlobalListener have not been passed', () => {
      gallery = shallow(<PureGallery needListenResize />);
      instance = gallery.instance();
      jest.spyOn(instance, 'updateParams');
      expect(instance.updateParams).toHaveBeenCalledTimes(0);

      instance.componentDidMount();
      expect(instance.updateParams).toHaveBeenCalledTimes(1);
      expect(instance.removeGlobalListener).toBeUndefined();
    });
    it('does not create removeGlobalListener if needListenResize have not been passed', () => {
      gallery = shallow(<PureGallery addGlobalListener={jest.fn()} />);
      instance = gallery.instance();
      jest.spyOn(instance, 'updateParams');
      expect(instance.updateParams).toHaveBeenCalledTimes(0);

      instance.componentDidMount();
      expect(instance.updateParams).toHaveBeenCalledTimes(1);
      expect(instance.removeGlobalListener).toBeUndefined();
    });
    it('creates removeGlobalListener if needListenResize and addGlobalListener have been passed', () => {
      const removeGlobalListener = jest.fn();
      const addGlobalListener = jest.fn(() => removeGlobalListener);
      gallery = shallow(<PureGallery addGlobalListener={addGlobalListener} needListenResize />);
      instance = gallery.instance();
      jest.spyOn(instance, 'updateParams');
      expect(instance.updateParams).toHaveBeenCalledTimes(0);
      expect(addGlobalListener).toHaveBeenCalledTimes(1);

      instance.componentDidMount();
      expect(instance.updateParams).toHaveBeenCalledTimes(1);
      expect(addGlobalListener).toHaveBeenCalledTimes(2);
      expect(addGlobalListener.mock.calls[1][0]).toEqual('resize');
      expect(addGlobalListener.mock.calls[1][1]).toEqual(instance.updateParams);
      expect(isFunction(instance.removeGlobalListener)).toBeTruthy();
    });
    it('does not call scrollToCurrentItem if currentItemIndex have not been passed', () => {
      gallery = shallow(<PureGallery />);
      instance = gallery.instance();
      jest.spyOn(instance, 'scrollToCurrentItem');
      expect(instance.scrollToCurrentItem).toHaveBeenCalledTimes(0);

      instance.componentDidMount();
      expect(instance.scrollToCurrentItem).toHaveBeenCalledTimes(0);
    });
    it('does not call scrollToCurrentItem if currentItemIndex is not integer', () => {
      const error = jest.spyOn(console, 'error');
      gallery = shallow(<PureGallery currentItemIndex='wrong' />);
      expect(error).toBeCalledTimes(1);
      instance = gallery.instance();
      jest.spyOn(instance, 'scrollToCurrentItem');
      expect(instance.scrollToCurrentItem).toHaveBeenCalledTimes(0);

      instance.componentDidMount();
      expect(instance.scrollToCurrentItem).toHaveBeenCalledTimes(0);
    });
    it('calls scrollToCurrentItem if currentItemIndex is integer', () => {
      gallery = shallow(<PureGallery currentItemIndex={7} />);
      instance = gallery.instance();
      jest.spyOn(instance, 'scrollToCurrentItem');
      expect(instance.scrollToCurrentItem).toHaveBeenCalledTimes(0);

      instance.componentDidMount();
      expect(instance.scrollToCurrentItem).toHaveBeenCalledTimes(1);
      expect(instance.scrollToCurrentItem).toHaveBeenCalledWith(false);
    });
  });
  describe('componentDidUpdate', () => {
    it('does not call updateParams if items is not array', () => {
      gallery = shallow(<PureGallery items='not array' />);
      instance = gallery.instance();
      jest.spyOn(instance, 'componentDidUpdate');
      jest.spyOn(instance, 'updateParams');

      gallery.setProps({ items });
      expect(instance.componentDidUpdate).toHaveBeenCalledTimes(1);
      expect(instance.componentDidUpdate.mock.calls[0][0]).toEqual({ items: 'not array' });
      expect(instance.updateParams).toHaveBeenCalledTimes(0);

      gallery.setProps({ items: 'string' });
      expect(instance.componentDidUpdate).toHaveBeenCalledTimes(2);
      expect(instance.componentDidUpdate.mock.calls[1][0]).toEqual({ items });
      expect(instance.updateParams).toHaveBeenCalledTimes(0);
    });
    it('does not call updateParams if new items have same length', () => {
      gallery = shallow(<PureGallery items={items} />);
      instance = gallery.instance();
      jest.spyOn(instance, 'updateParams');
      expect(instance.updateParams).toHaveBeenCalledTimes(0);

      gallery.setProps({ items });
      expect(instance.updateParams).toHaveBeenCalledTimes(0);
    });
    it('calls updateParams if change length of items', () => {
      gallery = shallow(<PureGallery items={items} />);
      instance = gallery.instance();
      jest.spyOn(instance, 'updateParams');
      expect(instance.updateParams).toHaveBeenCalledTimes(0);

      gallery.setProps({ items: ['test 1', 'test 2'] });
      expect(instance.updateParams).toHaveBeenCalledTimes(1);
    });
    it('does not call scrollToCurrentItem if currentItemIndex is not integer', () => {
      gallery = shallow(<PureGallery currentItemIndex='not integer' />);
      instance = gallery.instance();
      jest.spyOn(instance, 'componentDidUpdate');
      jest.spyOn(instance, 'scrollToCurrentItem');

      gallery.setProps({ currentItemIndex: 'not integer' });
      expect(instance.componentDidUpdate).toHaveBeenCalledTimes(1);
      expect(instance.componentDidUpdate.mock.calls[0][0]).toEqual({ currentItemIndex: 'not integer' });
      expect(instance.scrollToCurrentItem).toHaveBeenCalledTimes(0);
    });
    it('does not call scrollToCurrentItem if currentItemIndex equals last', () => {
      gallery = shallow(<PureGallery currentItemIndex={5} />);
      instance = gallery.instance();
      jest.spyOn(instance, 'componentDidUpdate');
      jest.spyOn(instance, 'scrollToCurrentItem');

      gallery.setProps({ currentItemIndex: 5 });
      expect(instance.componentDidUpdate).toHaveBeenCalledTimes(1);
      expect(instance.componentDidUpdate.mock.calls[0][0]).toEqual({ currentItemIndex: 5 });
      expect(instance.scrollToCurrentItem).toHaveBeenCalledTimes(0);
    });
    it('calls scrollToCurrentItem if currentItemIndex does not equal last', () => {
      gallery = shallow(<PureGallery currentItemIndex={5} />);
      instance = gallery.instance();
      jest.spyOn(instance, 'componentDidUpdate');
      jest.spyOn(instance, 'scrollToCurrentItem');

      gallery.setProps({ currentItemIndex: 3 });
      expect(instance.componentDidUpdate).toHaveBeenCalledTimes(2);
      expect(instance.componentDidUpdate.mock.calls[0][0]).toEqual({ currentItemIndex: 5 });
      expect(instance.componentDidUpdate.mock.calls[1][0]).toEqual({ currentItemIndex: 3 });
      expect(instance.scrollToCurrentItem).toHaveBeenCalledTimes(1);
      expect(instance.scrollToCurrentItem).toHaveBeenCalledWith(true);
    });
  });
  describe('componentWillUnmount', () => {
    it('calls removeGlobalListener', () => {
      const removeGlobalListener = jest.fn();
      gallery = shallow(<PureGallery />);
      instance = gallery.instance();
      instance.removeGlobalListener = removeGlobalListener;
      expect(removeGlobalListener).toHaveBeenCalledTimes(0);

      instance.componentWillUnmount();
      expect(removeGlobalListener).toHaveBeenCalledTimes(1);
    });
    it('if removeGlobalListener is not a function', () => {
      gallery = shallow(<PureGallery />);
      instance = gallery.instance();
      instance.removeGlobalListener = 'not function';
      expect(() => instance.componentWillUnmount()).not.toThrow();
    });
  });
  describe('updateParams', () => {
    it('does not update state if maxPosition have not been changed', () => {
      gallery = mount(<PureGallery />);
      instance = gallery.instance();
      expect(gallery.state()).toEqual(defaultState);
      const listContainer = instance.itemsContainerRef.current;
      expect(listContainer.scrollHeight).toEqual(0);
      expect(listContainer.scrollWidth).toEqual(0);
      const wrapper = instance.itemsWrapperRef.current;
      expect(wrapper.offsetHeight).toEqual(0);
      expect(wrapper.offsetWidth).toEqual(0);

      expect(instance.vertical).toBeFalsy();
      instance.updateParams();
      expect(gallery.state()).toEqual(defaultState);

      instance.vertical = true;
      instance.updateParams();
      expect(gallery.state()).toEqual(defaultState);
    });
    it('update state correctly', () => {
      gallery = mount(<PureGallery />);
      instance = gallery.instance();
      const listContainer = instance.itemsContainerRef.current;
      const wrapper = instance.itemsWrapperRef.current;
      Object.defineProperties(listContainer, {
        scrollHeight: { value: 234 },
        scrollWidth: { value: 500 },
      });
      Object.defineProperties(wrapper, {
        offsetHeight: { value: 245 },
        offsetWidth: { value: 350 },
      });

      expect(instance.vertical).toBeFalsy();
      instance.updateParams();
      expect(gallery.state()).toEqual({
        ...defaultState,
        hasControls: true,
      });

      instance.vertical = true;
      instance.updateParams();
      expect(gallery.state()).toEqual(defaultState);

      gallery.setState({ position: -200 });
      instance.vertical = false;
      instance.updateParams();
      expect(gallery.state()).toEqual({
        ...defaultState,
        position: -150,
        withAnimation: false,
        hasControls: true,
      });
    });
  });
  describe('scrollToCurrentItem', () => {
    it('calls updatePosition with correct data if params have not been passed', () => {
      gallery = shallow(<PureGallery />);
      instance = gallery.instance();
      jest.spyOn(instance, 'updatePosition');
      expect(instance.updatePosition).not.toHaveBeenCalled();

      instance.scrollToCurrentItem();
      expect(instance.updatePosition).toHaveBeenCalledTimes(1);
      expect(instance.updatePosition).toHaveBeenCalledWith(0, false);
    });
    it('calls updatePosition with correct data if params have been passed', () => {
      gallery = shallow(<PureGallery currentItemIndex={5} />);
      instance = gallery.instance();
      jest.spyOn(instance, 'updatePosition');
      expect(instance.updatePosition).not.toHaveBeenCalled();

      instance.scrollToCurrentItem(true);
      expect(instance.updatePosition).toHaveBeenCalledTimes(1);
      expect(instance.updatePosition).toHaveBeenCalledWith(-500, true);
    });
  });
  describe('onControl', () => {
    it('with default params', () => {
      gallery = shallow(<PureGallery />);
      instance = gallery.instance();
      instance.onControl();
      expect(gallery.state()).toEqual(defaultState);
    });
    it('with true passed', () => {
      gallery = shallow(<PureGallery items={items} />);
      instance = gallery.instance();
      jest.spyOn(instance, 'updatePosition');
      instance.maxPosition = -467;

      instance.onControl(true);
      expect(instance.updatePosition).toHaveBeenCalledTimes(1);
      expect(instance.updatePosition).toHaveBeenCalledWith(-300, true);
      expect(gallery.state()).toEqual({
        ...defaultState,
        position: -300,
      });

      instance.onControl(true);
      expect(instance.updatePosition).toHaveBeenCalledTimes(2);
      expect(instance.updatePosition).toHaveBeenNthCalledWith(2, -600, true);
      expect(gallery.state()).toEqual({
        ...defaultState,
        position: -467,
      });
    });
    it('with false passed', () => {
      gallery = shallow(<PureGallery items={items} slideStepSize={32} />);
      gallery.setState({ position: -150 });

      instance = gallery.instance();
      jest.spyOn(instance, 'updatePosition');
      instance.maxPosition = -250;

      instance.onControl();
      expect(instance.updatePosition).toHaveBeenCalledTimes(1);
      expect(instance.updatePosition).toHaveBeenCalledWith(-54, true);
      expect(gallery.state()).toEqual({
        ...defaultState,
        position: -54,
      });

      instance.onControl();
      expect(instance.updatePosition).toHaveBeenCalledTimes(2);
      expect(instance.updatePosition).toHaveBeenNthCalledWith(2, 42, true);
      expect(gallery.state()).toEqual({
        ...defaultState,
        position: 0,
      });
    });
  });
  describe('updatePosition', () => {
    it('does not set to state anything if positions equals and withAnimation equals', () => {
      gallery = shallow(<PureGallery />);
      instance = gallery.instance();
      jest.spyOn(instance, 'setState');
      expect(gallery.state()).toEqual(defaultState);

      instance.updatePosition(0, true);
      expect(instance.setState).toHaveBeenCalledTimes(0);
    });
    it('sets to state new position and withAnimation', () => {
      gallery = shallow(<PureGallery />);
      instance = gallery.instance();
      instance.maxPosition = -100;
      jest.spyOn(instance, 'setState');
      expect(gallery.state()).toEqual(defaultState);

      instance.updatePosition(-50, false);
      expect(instance.setState).toHaveBeenCalledTimes(1);
      expect(gallery.state()).toEqual({
        ...defaultState,
        position: -50,
        withAnimation: false,
      });
    });
    it('sets to state correct new position if position > 0', () => {
      gallery = shallow(<PureGallery />);
      gallery.setState({ position: -10 });
      instance = gallery.instance();
      jest.spyOn(instance, 'setState');
      expect(gallery.state()).toEqual({
        ...defaultState,
        position: -10,
      });

      instance.updatePosition(50, true);
      expect(instance.setState).toHaveBeenCalledTimes(1);
      expect(gallery.state()).toEqual({
        ...defaultState,
        position: 0,
      });
    });
    it('sets to state correct new position if position < maxPosition', () => {
      gallery = shallow(<PureGallery />);
      instance = gallery.instance();
      instance.maxPosition = -200;
      jest.spyOn(instance, 'setState');
      expect(gallery.state()).toEqual(defaultState);

      instance.updatePosition(-350);
      expect(instance.setState).toHaveBeenCalledTimes(1);
      expect(gallery.state()).toEqual({
        ...defaultState,
        position: -200,
        withAnimation: false,
      });
    });
  });
});
