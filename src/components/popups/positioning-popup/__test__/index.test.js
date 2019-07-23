import React from 'react';
import PositioningPopup, { defaultArrowProps } from '../';
import { mount } from 'enzyme';

describe('<PositioningPopup />', () => {
  const opener = { current: document.createElement('div') };

  describe('check props', () => {
    it('renders correctly without props', () => {
      const popup = mount(<PositioningPopup />);

      expect(popup.find('.popup')).toHaveLength(1);
      expect(popup).toMatchSnapshot();
    });

    it('renders correctly with arrow', () => {
      const popup = mount(<PositioningPopup withArrow />);

      expect(popup.find('PopupArrow')).toHaveLength(1);
      expect(popup).toMatchSnapshot();
    });

    it('has correct popup ref', () => {
      const popup = mount(<PositioningPopup />);
      const refElement = popup.instance().popupRef.current;

      expect(refElement.classList.contains('popup-wrap')).toBeTruthy();
    });

    it('has correct opener ref', () => {
      const popup = mount(<PositioningPopup opener={opener} />);
      const refElement = popup.prop('opener').current;

      expect(refElement instanceof HTMLDivElement).toBeTruthy();
    });
  });

  describe('check method getPopupPosition return correct values', () => {
    const data = {
      openerLeft: 50,
      openerWidth: 80,
      popupWidth: 200,
    };
    let popup, instance;

    beforeEach(() => {
      popup = mount(
        <PositioningPopup
          withArrow
          isOpen
          parentWidth={700}
          opener={opener}
        />
      );
      instance = popup.instance();
    });

    it('without positioningMargin', () => {
      const popupPosition = instance.getPopupPosition(data);

      expect(popupPosition).toEqual({ left: 70, top: '100%' });
    });

    it('without positionData', () => {
      const popupPosition = instance.getPopupPosition();

      expect(popupPosition).toEqual({ left: 20, top: '100%' });
    });

    it('with positioningMargin', () => {
      popup.setProps({ positioningMargin: 30 });
      const popupPosition = instance.getPopupPosition(data);

      expect(popupPosition).toEqual({ left: 80, top: '100%' });
    });

    it('when vertical position is top', () => {
      popup.setProps({ verticalPosition: 'top' });
      const popupPosition = instance.getPopupPosition(data);

      expect(popupPosition).toEqual({ left: 70, bottom: '100%' });
    });

    it('when vertical position is bottom', () => {
      popup.setProps({ verticalPosition: 'bottom' });
      const popupPosition = instance.getPopupPosition(data);

      expect(popupPosition).toEqual({ left: 70, top: '100%' });
    });

    it('when horizontal position is auto', () => {
      popup.setProps({ horizontalPosition: 'auto' });
      const popupPosition = instance.getPopupPosition(data);

      expect(popupPosition).toEqual({ left: 70, top: '100%' });

      popup.setProps({ parentWidth: 1000, positioningMargin: 0 });
      const otherPopupPosition = instance.getPopupPosition({
        openerLeft: 850,
        openerWidth: 100,
        popupWidth: 300,
      });

      expect(otherPopupPosition).toEqual({ left: 650, top: '100%' });
    });

    it('when horizontal position is left', () => {
      popup.setProps({ horizontalPosition: 'left' });
      const popupPosition = instance.getPopupPosition(data);

      expect(popupPosition).toEqual({ left: 20, top: '100%' });

      popup.setProps({ parentWidth: 1000, positioningMargin: 0 });
      const otherPopupPosition = instance.getPopupPosition({
        openerLeft: 0,
        openerWidth: 100,
        popupWidth: 300,
      });

      expect(otherPopupPosition).toEqual({ left: 0, top: '100%' });
    });

    it('when horizontal position is right', () => {
      popup.setProps({ horizontalPosition: 'right' });
      const popupPosition = instance.getPopupPosition(data);

      expect(popupPosition).toEqual({ left: 70, top: '100%' });

      popup.setProps({ parentWidth: 1000, positioningMargin: 0 });
      const otherPopupPosition = instance.getPopupPosition({
        openerLeft: 0,
        openerWidth: 100,
        popupWidth: 300,
      });

      expect(otherPopupPosition).toEqual({ left: 0, top: '100%' });
    });

    it('when horizontal position is center', () => {
      popup.setProps({ horizontalPosition: 'center' });
      const popupPosition = instance.getPopupPosition({
        openerLeft: 50,
        openerWidth: 80,
        popupWidth: 50,
      });

      expect(popupPosition).toEqual({ left: 65, top: '100%' });

      popup.setProps({ parentWidth: 1000, positioningMargin: 0 });
      const secondPopupPosition = instance.getPopupPosition({
        openerLeft: 0,
        openerWidth: 100,
        popupWidth: 500,
      });

      expect(secondPopupPosition).toEqual({ left: 0, top: '100%' });

      popup.setProps({ parentWidth: 1000, positioningMargin: 0 });
      const thirdPopupPosition = instance.getPopupPosition({
        openerLeft: 850,
        openerWidth: 100,
        popupWidth: 500,
      });

      expect(thirdPopupPosition).toEqual({ left: 500, top: '100%' });
    });
  });

  describe('check method getArrowProps return correct values', () => {
    const data = {
      openerLeft: 50,
      openerWidth: 80,
      popupWidth: 200,
    };
    let popup, instance;

    beforeEach(() => {
      popup = mount(
        <PositioningPopup
          withArrow
          isOpen
          parentWidth={700}
          opener={opener}
        />
      );
      instance = popup.instance();
      data.left = instance.getPopupPosition(data).left;
    });

    it('without curstom arrow props', () => {
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
        position: { left: 10 },
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
        position: { left: 10 },
      });
    });

    it('with curstom arrow props', () => {
      const arrowProps = instance.getArrowProps(data);
      expect(arrowProps).toEqual({
        ...defaultArrowProps,
        position: { left: 10 },
      });
    });

    it('when vertical position is top', () => {
      popup.setProps({ verticalPosition: 'top' });
      const arrowProps = instance.getArrowProps(data);

      expect(arrowProps).toEqual({
        ...defaultArrowProps,
        direction: 'bottom',
        position: { left: 10 },
      });
    });

    it('when vertical position is bottom', () => {
      popup.setProps({ verticalPosition: 'bottom' });
      const arrowProps = instance.getArrowProps(data);

      expect(arrowProps).toEqual({
        ...defaultArrowProps,
        direction: 'top',
        position: { left: 10 },
      });
    });

    it('when horizontal position is auto', () => {
      popup.setProps({ horizontalPosition: 'auto' });
      const arrowProps = instance.getArrowProps(data);
      expect(arrowProps).toEqual({
        ...defaultArrowProps,
        position: { left: 10 },
      });

      popup.setProps({ parentWidth: 900, positioningMargin: 0 });
      const otherArrowProps = instance.getArrowProps({
        ...data,
        openerLeft: 0,
        openerWidth: 50,
        popupWidth: 300,
      });
      expect(otherArrowProps).toEqual({
        ...defaultArrowProps,
        position: { left: 5 },
      });
    });

    it('when horizontal position is left', () => {
      popup.setProps({ horizontalPosition: 'left' });
      const arrowProps = instance.getArrowProps(data);
      expect(arrowProps).toEqual({
        ...defaultArrowProps,
        position: { left: 10 },
      });

      popup.setProps({ parentWidth: 700, positioningMargin: 0 });
      const otherArrowProps = instance.getArrowProps({
        ...data,
        openerLeft: 0,
        openerWidth: 70,
        popupWidth: 220,
      });
      expect(otherArrowProps).toEqual({
        ...defaultArrowProps,
        position: { left: 5 },
      });
    });

    it('when horizontal position is right', () => {
      popup.setProps({ horizontalPosition: 'right' });
      const arrowProps = instance.getArrowProps(data);
      expect(arrowProps).toEqual({
        ...defaultArrowProps,
        position: { left: 10 },
      });

      popup.setProps({ parentWidth: 1000, positioningMargin: 0 });
      const otherArrowProps = instance.getArrowProps({
        ...data,
        openerLeft: 10,
        openerWidth: 70,
        popupWidth: 400,
      });
      expect(otherArrowProps).toEqual({
        ...defaultArrowProps,
        position: { left: 5 },
      });
    });

    it('when horizontal position is center', () => {
      popup.setProps({ horizontalPosition: 'center' });
      const arrowProps = instance.getArrowProps(data);
      expect(arrowProps).toEqual({
        ...defaultArrowProps,
        position: { left: 10 },
      });

      popup.setProps({ parentWidth: 1000, positioningMargin: 0 });
      const otherArrowProps = instance.getArrowProps({
        ...data,
        openerLeft: 0,
        openerWidth: 30,
        popupWidth: 100,
      });
      expect(otherArrowProps).toEqual({
        ...defaultArrowProps,
        position: { left: 5 },
      });
    });
  });
});
