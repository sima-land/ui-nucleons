import { createRef, FocusEvent, Ref, useRef, useState } from 'react';
import { fireEvent, render, waitFor } from '@testing-library/react';
import { PopupView, Popup, usePopupOnClick, useFocusTrap } from '..';
import { useFloating } from '@floating-ui/react';
import userEvent from '@testing-library/user-event';

describe('PopupView', () => {
  it('should renders correctly', () => {
    const { container, queryAllByTestId } = render(<PopupView>This is POPUP!</PopupView>);

    expect(container.textContent).toBe('This is POPUP!');
    expect(queryAllByTestId('popup')).toHaveLength(1);
  });

  it('should handle "popupRef" prop', () => {
    const ref = createRef<HTMLDivElement>();
    const { getByTestId } = render(<PopupView popupRef={ref}>This is POPUP!</PopupView>);

    expect(getByTestId('popup')).toBe(ref.current);
  });

  it('should handle "className" prop', () => {
    const { getByTestId } = render(<PopupView className='foo-bar'>This is POPUP!</PopupView>);

    expect(getByTestId('popup').classList.contains('root')).toBe(true);
    expect(getByTestId('popup').classList.contains('foo-bar')).toBe(true);
  });

  it('should handle "onClose" prop', () => {
    const spy = jest.fn();
    const { queryAllByTestId, getByTestId, rerender } = render(
      <PopupView onClose={spy}>This is POPUP!</PopupView>,
    );

    expect(queryAllByTestId('popup:close')).toHaveLength(1);
    expect(spy).toHaveBeenCalledTimes(0);
    fireEvent.click(getByTestId('popup:close'));
    expect(spy).toHaveBeenCalledTimes(1);

    rerender(<PopupView onClose={undefined}>This is POPUP!</PopupView>);
    expect(queryAllByTestId('popup:close')).toHaveLength(0);
  });

  it('should handle "data-testid" prop', () => {
    const { queryAllByTestId } = render(
      <PopupView data-testid='my-popup'>This is POPUP!</PopupView>,
    );

    expect(queryAllByTestId('popup')).toHaveLength(0);
    expect(queryAllByTestId('my-popup')).toHaveLength(1);
  });
});

describe('Popup', () => {
  const TestComponent = ({ popupRef }: { popupRef?: Ref<HTMLDivElement> }) => {
    const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);

    return (
      <>
        <div data-testid='trigger' onClick={e => setAnchorEl(e.currentTarget)}>
          Hello
        </div>

        <Popup popupRef={popupRef} showFor={anchorEl} onDismiss={() => setAnchorEl(null)}>
          World
        </Popup>
      </>
    );
  };

  it('should render popup in portal only when anchor provided', () => {
    const { baseElement, getByTestId } = render(<TestComponent />);

    expect(baseElement.textContent).toContain('Hello');
    expect(baseElement.textContent).not.toContain('World');

    fireEvent.click(getByTestId('trigger'));
    expect(baseElement.textContent).toContain('Hello');
    expect(baseElement.textContent).toContain('World');
  });

  it('should handle "popupRef" prop', () => {
    const ref = createRef<HTMLDivElement>();
    const { getByTestId } = render(<TestComponent popupRef={ref} />);

    expect(ref.current).toBe(null);
    fireEvent.click(getByTestId('trigger'));
    expect(ref.current).toBe(getByTestId('popup'));
  });
});

describe('usePopupOnClick', () => {
  const TestComponent = () => {
    const [open, setOpen] = useState<boolean>(false);
    const floating = useFloating({ open, onOpenChange: setOpen });
    const { getReferenceProps, getFloatingProps } = usePopupOnClick(floating);

    return (
      <>
        <div {...getReferenceProps()} data-testid='opener'>
          opener
        </div>
        {open && (
          <div {...getFloatingProps()} data-testid='popup'>
            popup
          </div>
        )}
      </>
    );
  };

  it('should combine usePopupFloatingStyle, useClick, useDismiss, useInteractions', async () => {
    const user = userEvent.setup();
    const { container, getByTestId } = render(<TestComponent />);

    expect(container.textContent).toContain('opener');
    expect(container.textContent).not.toContain('popup');

    await user.click(getByTestId('opener'));

    expect(container.textContent).toContain('opener');
    expect(container.textContent).toContain('popup');

    await user.pointer({ keys: '[MouseLeft]', target: container });

    expect(container.textContent).toContain('opener');
    expect(container.textContent).not.toContain('popup');
  });
});

describe('useFocusTrap', () => {
  const TestComponent = ({ afterDeactivate }: { afterDeactivate: () => void }) => {
    const ref = useRef<HTMLDivElement>(null);

    useFocusTrap(ref, {
      enabled: true,
      afterDeactivate,
    });

    const [focused, setFocused] = useState<string>('nothing');

    const onFocus = (event: FocusEvent) => setFocused(event.currentTarget.id);

    return (
      <div ref={ref}>
        <p>Focused: {focused}</p>
        <input type='text' id='name' data-testid='name' onFocus={onFocus} />
        <input type='text' id='age' data-testid='age' onFocus={onFocus} />
        <button type='button' id='submit' data-testid='submit' onFocus={onFocus}>
          Submit
        </button>
      </div>
    );
  };

  it('should create, activate and deactivate trap properly', async () => {
    const user = userEvent.setup();
    const spy = new EventTarget();

    const { getByTestId, findByText, unmount } = render(
      <TestComponent afterDeactivate={() => spy.dispatchEvent(new Event('test-event'))} />,
    );

    await findByText('Focused: nothing');
    await user.keyboard('[Tab]');

    await findByText('Focused: name');
    expect(document.activeElement).toBe(getByTestId('name'));

    await user.keyboard('[Tab]');
    expect(document.activeElement).toBe(getByTestId('age'));

    await user.keyboard('[Tab]');
    expect(document.activeElement).toBe(getByTestId('submit'));

    await user.keyboard('[Tab]');
    expect(document.activeElement).toBe(getByTestId('name'));

    unmount();
    await waitFor(() => new Promise(done => spy.addEventListener('test-event', done)), {
      timeout: 1000,
    });
  });
});
