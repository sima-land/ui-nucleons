import React from 'react';
import Modal from '../';
import { shallow } from 'enzyme';

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
    modal.find({ className: 'overlay' }).simulate('mouseDown', { button: 0, target: 'anotherTarget' });
    modal
      .find({ className: 'overlay' })
      .simulate('mouseUp', { button: 0, target: 'testTarget', currentTarget: 'anotherTarget' });
    expect(onCloseMock).toHaveBeenCalledTimes(0);
    modal
      .find({ className: 'overlay' })
      .simulate('mouseUp', { button: 0, target: 'testTarget', currentTarget: 'testTarget' });
    expect(onCloseMock).toHaveBeenCalledTimes(0);
    modal.find({ className: 'overlay' }).simulate('mouseDown', { button: 0, target: 'testTarget' });
    modal
      .find({ className: 'overlay' })
      .simulate('mouseUp', { button: 0, target: 'testTarget', currentTarget: 'anotherTarget' });
    expect(onCloseMock).toHaveBeenCalledTimes(0);
    modal
      .find({ className: 'overlay' })
      .simulate('mouseUp', { button: 0, target: 'testTarget', currentTarget: 'testTarget' });
    expect(onCloseMock).toHaveBeenCalledTimes(1);
    modal.find({ className: 'close' }).simulate('click');
    expect(onCloseMock).toHaveBeenCalledTimes(2);
    modal.find({ additionalClass: 'modal' }).simulate('click');
    expect(onCloseMock).toHaveBeenCalledTimes(2);
  });
});
