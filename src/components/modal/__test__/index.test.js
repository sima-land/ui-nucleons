import React from 'react';
import Modal from '../';
import { shallow, mount } from 'enzyme';

describe('<Modal />', () => {
  let modal;

  it('renders correct without close button and customClasses', () => {
    modal = shallow(<Modal>Test modal content</Modal>);
    expect(modal).toMatchSnapshot();
  });

  it('renders correct with close button and customClasses', () => {
    modal = shallow(
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
    expect(modal).toMatchSnapshot();
  });

  it('calls onClose properly', () => {
    const onCloseMock = jest.fn();
    modal = shallow(
      <Modal
        closeButtonSize={8}
        onClose={onCloseMock}
      >
        Test modal content
      </Modal>
    );
    modal.find({ className: 'overlay-default' }).simulate('mouseDown', { button: 0, target: 'anotherTarget' });
    modal
      .find({ className: 'overlay-default' })
      .simulate('mouseUp', { button: 0, target: 'testTarget', currentTarget: 'anotherTarget' });
    expect(onCloseMock).toHaveBeenCalledTimes(0);
    modal.find({ className: 'overlay-default' }).simulate('mouseDown', { button: 1, target: 'anotherTarget' });
    modal
      .find({ className: 'overlay-default' })
      .simulate('mouseUp', { button: 1, target: 'testTarget', currentTarget: 'anotherTarget' });
    expect(onCloseMock).toHaveBeenCalledTimes(0);
    modal
      .find({ className: 'overlay-default' })
      .simulate('mouseUp', { button: 0, target: 'testTarget', currentTarget: 'testTarget' });
    expect(onCloseMock).toHaveBeenCalledTimes(0);
    modal.find({ className: 'overlay-default' }).simulate('mouseDown', { button: 0, target: 'testTarget' });
    modal
      .find({ className: 'overlay-default' })
      .simulate('mouseUp', { button: 0, target: 'testTarget', currentTarget: 'anotherTarget' });
    expect(onCloseMock).toHaveBeenCalledTimes(0);
    modal
      .find({ className: 'overlay-default' })
      .simulate('mouseUp', { button: 0, target: 'testTarget', currentTarget: 'testTarget' });
    expect(onCloseMock).toHaveBeenCalledTimes(1);
    modal.find({ className: 'close-default' }).simulate('click');
    expect(onCloseMock).toHaveBeenCalledTimes(2);
    modal.find({ additionalClass: 'modal-default' }).simulate('click');
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
});
