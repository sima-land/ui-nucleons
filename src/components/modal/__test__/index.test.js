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
        withOverlay
        withCloseButton
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
        withOverlay
        withCloseButton
        onClose={onCloseMock}
      >
        Test modal content
      </Modal>
    );
    modal.find('.overlay').simulate('click', { target: 'testTarget', currentTarget: 'anotherTarget' });
    expect(onCloseMock).toHaveBeenCalledTimes(0);
    modal.find('.overlay').simulate('click', { target: 'testTarget', currentTarget: 'testTarget' });
    expect(onCloseMock).toHaveBeenCalledTimes(1);
    modal.find('.close').simulate('click');
    expect(onCloseMock).toHaveBeenCalledTimes(2);
    modal.find('.modal').simulate('click');
    expect(onCloseMock).toHaveBeenCalledTimes(2);
  });
});
