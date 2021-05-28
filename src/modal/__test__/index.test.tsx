import React from 'react';
import { Modal } from '..';
import { mount, ReactWrapper } from 'enzyme';
import ArrowLeftSVG from '@dev-dep/ui-quarks/icons/24x24/Stroked/arrow-left';
import { enableBodyScroll, disableBodyScroll } from 'body-scroll-lock';
import { act } from 'react-dom/test-utils';
import { TopBar } from '../../top-bar';

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
      <Modal onClose={spy}>
        <Modal.Header title='Test title' onClose={spy} />
        <Modal.Body>
          Test modal content
        </Modal.Body>
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
    const wrapper = mount(
      <Modal>
        <Modal.Header title='Title' subtitle='Subtitle' />
        <Modal.Body>Main Content</Modal.Body>
        <Modal.Footer>
          <button>Hello</button>
        </Modal.Footer>
      </Modal>
    );

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

  it('should render TopBar with back button', () => {
    const spy = jest.fn();

    const wrapper = mount(
      <Modal>
        <Modal.Header onBack={spy} />
      </Modal>
    );

    expect(wrapper).toMatchSnapshot();

    expect(spy).toBeCalledTimes(0);

    act(() => {
      wrapper.find('button[data-testid="modal:back"]').simulate('click');
    });
    wrapper.update();

    expect(spy).toBeCalledTimes(1);
  });

  it('should render ith close and custom start button in top bar', () => {
    const wrapper = mount(
      <Modal>
        <Modal.Header
          onClose={jest.fn()}
          buttonsProps={{
            start: {
              icon: <ArrowLeftSVG data-testid='custom-top-bar-btn' />,
            },
          }}
        />
      </Modal>
    );

    expect(wrapper.find(TopBar).find('button[data-testid="modal:close"]')).toHaveLength(1);
    expect(wrapper.find(TopBar).find('svg[data-testid="custom-top-bar-btn"]')).toHaveLength(1);
  });

  it('should handle "height" prop', () => {
    const wrapper = mount(
      <Modal height={480} />
    );

    expect(wrapper).toMatchSnapshot();
  });

  it('should renders with fullscreen size and footer', () => {
    const wrapper = mount(
      <Modal size='fullscreen'>
        <Modal.Footer>Test footer</Modal.Footer>
      </Modal>
    );

    expect(wrapper).toMatchSnapshot();
  });
});
