import React from 'react';
import { Modal } from '..';
import { mount, ReactWrapper } from 'enzyme';
import { enableBodyScroll, disableBodyScroll } from 'body-scroll-lock';
import { act } from 'react-dom/test-utils';

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
  const findOverlay = (w: ReactWrapper) => w.find('[data-testid="modal:overlay"]');

  it('renders correct without close button and customClasses', () => {
    const wrapper = mount(<Modal>Test modal content</Modal>);
    expect(wrapper).toMatchSnapshot();
  });

  it('calls onClose properly', () => {
    const spy = jest.fn();

    const wrapper = mount(
      <Modal onClose={spy} withCloseButton>
        Test modal content
      </Modal>
    );

    act(() => {
      findOverlay(wrapper).simulate('mousedown', { button: 0, target: 'B' });
      findOverlay(wrapper).simulate('mouseup', { button: 0, target: 'A', currentTarget: 'B' });
    });
    wrapper.update();
    expect(spy).toHaveBeenCalledTimes(0);

    act(() => {
      findOverlay(wrapper).simulate('mousedown', { button: 1, target: 'B' });
      findOverlay(wrapper).simulate('mouseup', { button: 1, target: 'A', currentTarget: 'B' });
    });
    wrapper.update();
    expect(spy).toHaveBeenCalledTimes(0);

    act(() => {
      findOverlay(wrapper).simulate('mousedown', { button: 0, target: 'A' });
      findOverlay(wrapper).simulate('mouseup', { button: 0, target: 'A', currentTarget: 'A' });
    });
    wrapper.update();
    expect(spy).toHaveBeenCalledTimes(0);

    act(() => {
      findOverlay(wrapper).simulate('mousedown', { button: 0, target: 'A' });
      findOverlay(wrapper).simulate('mouseup', { button: 0, target: 'A', currentTarget: 'B' });
    });
    wrapper.update();
    expect(spy).toHaveBeenCalledTimes(0);

    act(() => {
      const overlayEl = findOverlay(wrapper).getDOMNode();

      // с mount нельзя подменить currentTarget: https://github.com/enzymejs/enzyme/issues/1943
      findOverlay(wrapper).simulate('mousedown', { button: 0, target: overlayEl });
      findOverlay(wrapper).simulate('mouseup', { button: 0, target: overlayEl, currentTarget: overlayEl });
    });
    wrapper.update();
    expect(spy).toHaveBeenCalledTimes(1);

    act(() => {
      wrapper.find('button[data-testid="modal:close"]').simulate('click');
    });
    wrapper.update();
    expect(spy).toHaveBeenCalledTimes(2);
  });

  it('should handle extended props', () => {
    const spy = jest.fn();

    const wrapper = mount(
      <Modal
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
      <Modal />
    );

    expect(disableBodyScroll).toHaveBeenCalledTimes(1);
    expect(enableBodyScroll).toHaveBeenCalledTimes(0);

    wrapper.unmount();

    expect(disableBodyScroll).toHaveBeenCalledTimes(1);
    expect(enableBodyScroll).toHaveBeenCalledTimes(1);
  });

  it('should handle "withScrollDisable" and "scrollDisableOptions" options', () => {
    const wrapper = mount(
      <Modal
        withScrollDisable
        scrollDisableOptions={{}}
      />
    );

    expect(disableBodyScroll).toHaveBeenCalledTimes(1);
    expect(enableBodyScroll).toHaveBeenCalledTimes(0);

    wrapper.unmount();

    expect(disableBodyScroll).toHaveBeenCalledTimes(1);
    expect(enableBodyScroll).toHaveBeenCalledTimes(1);
  });

  it('should render different sizes properly', () => {
    (['s', 'm', 'l', 'xl', 'fullscreen'] as const).forEach(size => {
      const wrapper = mount(
        <Modal size={size} />
      );

      expect(wrapper).toMatchSnapshot();
    });
  });

  it('should renders in layer', () => {
    const wrapper = mount(
      <Modal withLayer />
    );

    expect(wrapper).toMatchSnapshot();
  });
});
