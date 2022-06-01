import React from 'react';
import { Modal } from '..';
import ArrowLeftSVG from '@sima-land/ui-quarks/icons/24x24/Stroked/arrow-left';
import { useBodyScrollLock } from '../../_internal/body-scroll';
import { render, fireEvent } from '@testing-library/react';
import { BSL_IGNORE_ATTR } from '../../constants';

jest.mock('../../_internal/body-scroll', () => {
  const original = jest.requireActual('../../_internal/body-scroll');

  return {
    ...original,
    __esModule: true,
    useBodyScrollLock: jest.fn(original.useBodyScrollLock),
  };
});

describe('<Modal />', () => {
  it('renders correct without close button and customClasses', () => {
    const { container } = render(<Modal>Test modal content</Modal>);
    expect(container).toMatchSnapshot();
  });

  it('should render overlap content', () => {
    const { container } = render(
      <Modal>
        <Modal.Body>This is modal body</Modal.Body>
        <Modal.Overlap>Test is modal overlap content</Modal.Overlap>
      </Modal>,
    );

    expect(container).toMatchSnapshot();
  });

  it('calls onClose properly', () => {
    const spy = jest.fn();

    const { getByTestId } = render(
      <Modal onClose={spy}>
        <Modal.Header title='Test title' onClose={spy} />
        <Modal.Body>Test modal content</Modal.Body>
      </Modal>,
    );

    // overlay mousedown but not mouseup
    fireEvent.mouseDown(getByTestId('modal:overlay'), { button: 0 });
    fireEvent.mouseUp(getByTestId('modal'), { button: 0 });
    expect(spy).toHaveBeenCalledTimes(0);

    // not primary mouse button
    fireEvent.mouseDown(getByTestId('modal:overlay'), { button: 1 });
    fireEvent.mouseUp(getByTestId('modal:overlay'), { button: 1 });
    expect(spy).toHaveBeenCalledTimes(0);

    // not overlay click
    fireEvent.mouseDown(getByTestId('modal'), { button: 0 });
    fireEvent.mouseUp(getByTestId('modal'), { button: 0 });
    expect(spy).toHaveBeenCalledTimes(0);

    // exactly overlay click
    fireEvent.mouseDown(getByTestId('modal:overlay'), { button: 0 });
    fireEvent.mouseUp(getByTestId('modal:overlay'), { button: 0 });
    expect(spy).toHaveBeenCalledTimes(1);

    // close button click
    fireEvent.click(getByTestId('modal:close'));
    expect(spy).toHaveBeenCalledTimes(2);
  });

  it('should handle extended props', () => {
    const { container } = render(
      <Modal>
        <Modal.Header title='Title' subtitle='Subtitle' />
        <Modal.Body>Main Content</Modal.Body>
        <Modal.Footer>
          <button>Hello</button>
        </Modal.Footer>
      </Modal>,
    );

    expect(container).toMatchSnapshot();
  });

  it('should do not use disable/enable body scrolling by default', () => {
    render(<Modal />);

    expect((useBodyScrollLock as any).mock.calls[0][1]).toBe(false);
  });

  it('should render different sizes properly', () => {
    const { container, rerender } = render(<Modal />);

    (['s', 'm', 'l', 'xl', 'fullscreen'] as const).forEach(size => {
      rerender(<Modal size={size} />);
      expect(container).toMatchSnapshot();
    });
  });

  it('should render TopBar with back button', () => {
    const spy = jest.fn();

    const { container, getByTestId } = render(
      <Modal>
        <Modal.Header onBack={spy} />
      </Modal>,
    );

    expect(container).toMatchSnapshot();

    expect(spy).toBeCalledTimes(0);

    fireEvent.click(getByTestId('modal:back'));

    expect(spy).toBeCalledTimes(1);
  });

  it('should render ith close and custom start button in top bar', () => {
    const { getAllByTestId } = render(
      <Modal>
        <Modal.Header
          onClose={jest.fn()}
          buttonsProps={{
            start: {
              icon: <ArrowLeftSVG data-testid='custom-top-bar-btn' />,
            },
          }}
        />
      </Modal>,
    );

    expect(getAllByTestId('modal:close')).toHaveLength(1);
    expect(getAllByTestId('custom-top-bar-btn')).toHaveLength(1);
  });

  it('should handle "height" prop', () => {
    const { container } = render(<Modal height={480} />);

    expect(container).toMatchSnapshot();
  });

  it('should renders with fullscreen size and footer', () => {
    const { container } = render(
      <Modal size='fullscreen'>
        <Modal.Footer>Test footer</Modal.Footer>
      </Modal>,
    );

    expect(container).toMatchSnapshot();
  });

  it('should handle "data-testid"', () => {
    const { container } = render(
      <Modal data-testid='some-modal'>
        <Modal.Body>Main Content</Modal.Body>
      </Modal>,
    );

    expect(container.querySelectorAll('[data-testid="modal"]')).toHaveLength(0);
    expect(container.querySelectorAll('[data-testid="some-modal"]')).toHaveLength(1);
  });

  it('should has attribute for BSL work', () => {
    const { container } = render(
      <Modal data-testid='some-modal'>
        <Modal.Body>Main Content</Modal.Body>
      </Modal>,
    );

    expect(container.querySelectorAll(`[${BSL_IGNORE_ATTR}]`)).toHaveLength(1);
  });
});
