import React from 'react';
import { mount } from 'enzyme';
import PopupArrow from '../../popup-arrow';
import isBrowser from '../../../helpers/is-browser';
import PositioningPopup, { defaultArrowProps } from '../';

/**
 * Создает имитацию рефа.
 * @param {number} width Ширина.
 * @param {number} left Отступ слева.
 * @return {Object} Имитация рефа.
 */
const createFakeRef = (width, left) => ({
  current: {
    offsetWidth: width,
    offsetLeft: left,
    getBoundingClientRect: () => ({
      width,
      left,
    }),
  },
});

jest.mock('../../../helpers/is-browser');

describe('<PositioningPopup />', () => {
  Element.prototype.getBoundingClientRect = jest.fn(() => ({
    width: 100,
  }));

  jest.spyOn(global.document.body, 'clientWidth', 'get')
    .mockImplementation(() => 1024);

  it('renders correctly without props', () => {
    isBrowser.mockImplementation(() => true);
    const popup = mount(<PositioningPopup />);

    expect(popup.find('.popup')).toHaveLength(1);
    expect(popup).toMatchSnapshot();
  });

  it('renders correctly with arrow', () => {
    isBrowser.mockImplementation(() => true);
    const popup = mount(<PositioningPopup withArrow />);

    expect(popup.find(PopupArrow)).toHaveLength(1);
    expect(popup).toMatchSnapshot();
  });

  it('counts correctly opener and parent positions', () => {
    isBrowser.mockImplementation(() => true);
    const popup = mount(
      <PositioningPopup
        parent={createFakeRef(1000, 50)}
        opener={createFakeRef(100, 200)}
      />
    );
    const instance = popup.instance();

    expect(instance.openerWidth).toEqual(100);
    expect(instance.openerLeft).toEqual(200);
    expect(instance.parentWidth).toEqual(1000);
    expect(instance.parentLeft).toEqual(50);
  });

  it('counts correctly opener without isBrowser()', () => {
    isBrowser.mockImplementation(() => false);
    const popup = mount(
      <PositioningPopup
        parent={createFakeRef(1000, 50)}
        opener={createFakeRef(100, 200)}
      />
    );
    const instance = popup.instance();

    expect(instance.openerWidth).toEqual(100);
    expect(instance.openerLeft).toEqual(200);
    expect(instance.parentWidth).toEqual(1000);
    expect(instance.parentLeft).toEqual(50);
  });

  it('counts correctly popup position', () => {
    isBrowser.mockImplementation(() => true);
    const popup = mount(
      <PositioningPopup
        parent={createFakeRef(1000, 50)}
        opener={createFakeRef(100, 200)}
      >
        <div>Test</div>
      </PositioningPopup>
    );

    expect(popup.state('popupWidth')).toEqual(100);
  });

  it('componentDidMount counts popup width correctly', () => {
    isBrowser.mockImplementation(() => true);
    const popup = mount(<PositioningPopup />);
    const instance = popup.instance();
    popup.setState({
      popupWidth: 0,
    });

    expect(popup.state('popupWidth')).toEqual(0);

    instance.componentDidMount();
    expect(popup.state('popupWidth')).toEqual(100);

    instance.componentDidMount();
    expect(popup.state('popupWidth')).toEqual(100);
  });

  it('works in nodejs environment', () => {
    isBrowser.mockImplementation(() => false);
    const popup = mount(<PositioningPopup />);

    expect(popup).toHaveLength(1);
  });

  describe('check method getPopupPosition return correct values', () => {
    let popup;
    let instance;

    beforeEach(() => {
      isBrowser.mockImplementation(() => true);
      popup = mount(
        <PositioningPopup
          withArrow
          parent={createFakeRef(1000, 0)}
          opener={createFakeRef(100, 50)}
        />
      );
      instance = popup.instance();
    });

    it('with positioningMargin', () => {
      popup.setProps({ positioningMargin: 30 });
      const popupPosition = instance.getPopupPosition();

      expect(popupPosition).toEqual({ left: 140, top: '100%' });
    });

    it('when vertical position is top', () => {
      popup.setProps({ verticalPosition: 'top' });
      const popupPosition = instance.getPopupPosition();

      expect(popupPosition).toEqual({ left: 110, bottom: '100%' });
    });

    it('when vertical position is bottom', () => {
      popup.setProps({ verticalPosition: 'bottom' });
      const popupPosition = instance.getPopupPosition();

      expect(popupPosition).toEqual({ left: 110, top: '100%' });
    });

    it('when horizontal position is auto', () => {
      popup.setProps({ horizontalPosition: 'auto' });
      const popupPosition = instance.getPopupPosition();

      expect(popupPosition).toEqual({ left: 110, top: '100%' });

      popup = mount(
        <PositioningPopup
          withArrow
          horizontalPosition='auto'
          parent={createFakeRef(1000, 0)}
          opener={createFakeRef(50, 950)}
        />
      );
      instance = popup.instance();
      const otherPopupPosition = instance.getPopupPosition();

      expect(otherPopupPosition).toEqual({ left: 880, top: '100%' });
    });

    it('when horizontal position is left', () => {
      popup.setProps({ horizontalPosition: 'left' });
      const popupPosition = instance.getPopupPosition();

      expect(popupPosition).toEqual({ left: 30, top: '100%' });

      popup = mount(
        <PositioningPopup
          withArrow
          horizontalPosition='left'
          parent={createFakeRef(1000, 0)}
          opener={createFakeRef(50, 950)}
        />
      );
      instance = popup.instance();
      const otherPopupPosition = instance.getPopupPosition();

      expect(otherPopupPosition).toEqual({ left: 880, top: '100%' });
    });

    it('when horizontal position is right', () => {
      popup.setProps({ horizontalPosition: 'right' });
      const popupPosition = instance.getPopupPosition();

      expect(popupPosition).toEqual({ left: 110, top: '100%' });

      popup = mount(
        <PositioningPopup
          withArrow
          positioningMargin={0}
          horizontalPosition='right'
          parent={createFakeRef(1000, 0)}
          opener={createFakeRef(50, 950)}
        />
      );
      instance = popup.instance();
      const otherPopupPosition = instance.getPopupPosition();

      expect(otherPopupPosition).toEqual({ left: 924, top: '100%' });
    });

    it('when horizontal position is center', () => {
      popup.setProps({ horizontalPosition: 'center' });
      const popupPosition = instance.getPopupPosition();

      expect(popupPosition).toEqual({ left: 50, top: '100%' });

      popup = mount(
        <PositioningPopup
          withArrow
          positioningMargin={0}
          horizontalPosition='center'
          parent={createFakeRef(1000, 0)}
          opener={createFakeRef(50, 550)}
        />
      );
      instance = popup.instance();
      const secondPopupPosition = instance.getPopupPosition();

      expect(secondPopupPosition).toEqual({ left: 525, top: '100%' });

      popup = mount(
        <PositioningPopup
          withArrow
          positioningMargin={0}
          horizontalPosition='center'
          parent={createFakeRef(1000, 0)}
          opener={createFakeRef(50, 950)}
        />
      );
      instance = popup.instance();
      const thirdPopupPosition = instance.getPopupPosition({
        openerLeft: 850,
        openerWidth: 100,
        popupWidth: 500,
      });

      expect(thirdPopupPosition).toEqual({ left: 924, top: '100%' });
    });
  });

  describe('check method getArrowProps return correct values', () => {
    let popup;
    let instance;
    let data;

    beforeEach(() => {
      isBrowser.mockImplementation(() => true);
      popup = mount(
        <PositioningPopup
          withArrow
          isOpen
          parent={createFakeRef(1000, 0)}
          opener={createFakeRef(100, 50)}
        />
      );
      instance = popup.instance();
      data = {
        left: instance.getPopupPosition().left,
      };
    });

    it('with custom arrow props', () => {
      const testArrowProps = {
        direction: 'bottom',
        className: 'test',
        shadow: false,
        color: 'blue',
      };
      popup.setProps({ arrowProps: testArrowProps });
      const arrowProps = instance.getArrowProps(data);

      expect(arrowProps).toEqual({
        ...testArrowProps,
        direction: 'top',
        position: { left: 5 },
      });

      const otherTestArrowProps = {
        direction: 'bottom',
        className: 'test',
        shadow: false,
        color: 'blue',
      };
      popup.setProps({ arrowProps: otherTestArrowProps });
      const otherArrowProps = instance.getArrowProps(data);

      expect(otherArrowProps).toEqual({
        ...otherTestArrowProps,
        direction: 'top',
        position: { left: 5 },
      });
    });

    it('with default arrow props', () => {
      const arrowProps = instance.getArrowProps(data);
      expect(arrowProps).toEqual({
        ...defaultArrowProps,
        position: { left: 5 },
      });
    });

    it('when vertical position is top', () => {
      popup.setProps({ verticalPosition: 'top' });
      const arrowProps = instance.getArrowProps(data);

      expect(arrowProps).toEqual({
        ...defaultArrowProps,
        direction: 'bottom',
        position: { left: 5 },
      });
    });

    it('when vertical position is bottom', () => {
      popup.setProps({ verticalPosition: 'bottom' });
      const arrowProps = instance.getArrowProps(data);

      expect(arrowProps).toEqual({
        ...defaultArrowProps,
        direction: 'top',
        position: { left: 5 },
      });
    });

    it('when horizontal position is auto', () => {
      popup.setProps({ horizontalPosition: 'auto' });
      const arrowProps = instance.getArrowProps(data);
      expect(arrowProps).toEqual({
        ...defaultArrowProps,
        position: { left: 5 },
      });

      popup = mount(
        <PositioningPopup
          withArrow
          positioningMargin={0}
          horizontalPosition='auto'
          parent={createFakeRef(1000, 0)}
          opener={createFakeRef(50, 950)}
        />
      );
      instance = popup.instance();
      const otherArrowProps = instance.getArrowProps({
        left: instance.getPopupPosition().left,
      });
      expect(otherArrowProps).toEqual({
        ...defaultArrowProps,
        position: { left: 65 },
      });
    });

    it('when horizontal position is left', () => {
      popup.setProps({ horizontalPosition: 'left' });
      const arrowProps = instance.getArrowProps(data);
      expect(arrowProps).toEqual({
        ...defaultArrowProps,
        position: { left: 5 },
      });

      popup = mount(
        <PositioningPopup
          withArrow
          positioningMargin={0}
          horizontalPosition='left'
          parent={createFakeRef(1000, 0)}
          opener={createFakeRef(50, 950)}
        />
      );
      instance = popup.instance();
      const otherArrowProps = instance.getArrowProps({
        left: instance.getPopupPosition().left,
      });
      expect(otherArrowProps).toEqual({
        ...defaultArrowProps,
        position: { left: 65 },
      });
    });

    it('when horizontal position is right', () => {
      popup.setProps({ horizontalPosition: 'right' });
      const arrowProps = instance.getArrowProps(data);
      expect(arrowProps).toEqual({
        ...defaultArrowProps,
        position: { left: 5 },
      });

      popup = mount(
        <PositioningPopup
          withArrow
          positioningMargin={0}
          horizontalPosition='right'
          parent={createFakeRef(1000, 0)}
          opener={createFakeRef(50, 950)}
        />
      );
      instance = popup.instance();
      const otherArrowProps = instance.getArrowProps({
        left: instance.getPopupPosition().left,
      });
      expect(otherArrowProps).toEqual({
        ...defaultArrowProps,
        position: { left: 41 },
      });
    });

    it('when horizontal position is center', () => {
      popup.setProps({ horizontalPosition: 'center' });
      const arrowProps = instance.getArrowProps(data);
      expect(arrowProps).toEqual({
        ...defaultArrowProps,
        position: { left: 5 },
      });

      popup = mount(
        <PositioningPopup
          withArrow
          positioningMargin={0}
          horizontalPosition='center'
          parent={createFakeRef(1000, 0)}
          opener={createFakeRef(50, 950)}
        />
      );
      instance = popup.instance();
      const otherArrowProps = instance.getArrowProps({
        left: instance.getPopupPosition().left,
      });
      expect(otherArrowProps).toEqual({
        ...defaultArrowProps,
        position: { left: 41 },
      });
    });
  });
});
