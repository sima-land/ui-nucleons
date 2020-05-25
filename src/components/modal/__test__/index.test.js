import React from 'react';
import Modal from '../';
import { shallow, mount } from 'enzyme';
import { enableBodyScroll, disableBodyScroll } from 'body-scroll-lock';

jest.mock('body-scroll-lock', () => {
  const original = jest.requireActual('body-scroll-lock');

  return {
    ...original,
    __esModule: true,
    enableBodyScroll: jest.fn(original.enableBodyScroll),
    disableBodyScroll: jest.fn(original.disableBodyScroll),
  };
});

describe('<Modal />', () => {
  it('renders correct without close button and customClasses', () => {
    const wrapper = shallow(<Modal>Test modal content</Modal>);
    expect(wrapper).toMatchSnapshot();
  });

  it('renders correct with close button and customClasses', () => {
    const wrapper = shallow(
      <Modal
        closeButtonSize={8}
        customClasses={{
          overlay: 'test-overlay',
          modal: 'test-modal',
          close: 'test-close',
        }}
      >
        Test modal content
      </Modal>
    );
    expect(wrapper).toMatchSnapshot();
  });

  it('calls onClose properly', () => {
    const onCloseMock = jest.fn();
    const wrapper = shallow(
      <Modal
        closeButtonSize={8}
        onClose={onCloseMock}
      >
        Test modal content
      </Modal>
    );
    wrapper.find({ className: 'overlay-default' }).simulate('mouseDown', { button: 0, target: 'anotherTarget' });
    wrapper
      .find({ className: 'overlay-default' })
      .simulate('mouseUp', { button: 0, target: 'testTarget', currentTarget: 'anotherTarget' });
    expect(onCloseMock).toHaveBeenCalledTimes(0);
    wrapper.find({ className: 'overlay-default' }).simulate('mouseDown', { button: 1, target: 'anotherTarget' });
    wrapper
      .find({ className: 'overlay-default' })
      .simulate('mouseUp', { button: 1, target: 'testTarget', currentTarget: 'anotherTarget' });
    expect(onCloseMock).toHaveBeenCalledTimes(0);
    wrapper
      .find({ className: 'overlay-default' })
      .simulate('mouseUp', { button: 0, target: 'testTarget', currentTarget: 'testTarget' });
    expect(onCloseMock).toHaveBeenCalledTimes(0);
    wrapper.find({ className: 'overlay-default' }).simulate('mouseDown', { button: 0, target: 'testTarget' });
    wrapper
      .find({ className: 'overlay-default' })
      .simulate('mouseUp', { button: 0, target: 'testTarget', currentTarget: 'anotherTarget' });
    expect(onCloseMock).toHaveBeenCalledTimes(0);
    wrapper
      .find({ className: 'overlay-default' })
      .simulate('mouseUp', { button: 0, target: 'testTarget', currentTarget: 'testTarget' });
    expect(onCloseMock).toHaveBeenCalledTimes(1);
    wrapper.find({ className: 'close-default' }).simulate('click');
    expect(onCloseMock).toHaveBeenCalledTimes(2);
    wrapper.find({ additionalClass: 'modal-default' }).simulate('click');
    expect(onCloseMock).toHaveBeenCalledTimes(2);
  });

  it('should handle extended props', () => {
    const spy = jest.fn();

    const wrapper = mount(
      <Modal
        extended
        title='Title'
        subtitle='Subtitle'
        onClose={spy}
        topBarProps={{ size: 'm' }}
        withDivideTopBar
        withDivideFooter
        withCloseButton
        footer={(
          <button>Hello</button>
        )}
      />
    );

    expect(wrapper).toMatchSnapshot();

    wrapper.setProps({ withCloseButton: false });

    expect(wrapper).toMatchSnapshot();
  });

  it('should use disable/enable body scrolling', () => {
    const wrapper = mount(
      <Modal
        extended
      />
    );

    expect(disableBodyScroll).toHaveBeenCalledTimes(1);
    expect(enableBodyScroll).toHaveBeenCalledTimes(0);

    wrapper.unmount();

    expect(disableBodyScroll).toHaveBeenCalledTimes(1);
    expect(enableBodyScroll).toHaveBeenCalledTimes(1);
  });
});
