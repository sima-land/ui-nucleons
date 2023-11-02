import { act, fireEvent, render } from '@testing-library/react';
import { Modal } from '..';
import { useLayer } from '../../helpers/layer';

describe('Modal', () => {
  it('should handle "children" prop', () => {
    const { rerender, container } = render(
      <Modal>
        <h1>Just title!</h1>
      </Modal>,
    );
    expect(container.textContent).toBe('Just title!');

    rerender(
      <Modal>
        <p>Lorem ipsum dolor sit amet</p>
      </Modal>,
    );
    expect(container.textContent).toBe('Lorem ipsum dolor sit amet');
  });

  it('should handle "size" prop', () => {
    const { rerender, getByTestId } = render(<Modal size='s' />);
    expect(getByTestId('modal-overlay').classList.contains('size-s')).toBe(true);

    rerender(<Modal size='m' />);
    expect(getByTestId('modal-overlay').classList.contains('size-m')).toBe(true);

    rerender(<Modal size='l' />);
    expect(getByTestId('modal-overlay').classList.contains('size-l')).toBe(true);

    rerender(<Modal size='xl' />);
    expect(getByTestId('modal-overlay').classList.contains('size-xl')).toBe(true);

    rerender(<Modal size='fullscreen' />);
    expect(getByTestId('modal-overlay').classList.contains('size-fullscreen')).toBe(true);

    rerender(<Modal />);
    expect(getByTestId('modal-overlay').classList.contains('size-m')).toBe(true);
  });

  it('should handle "rounds" prop', () => {
    const { rerender, getByTestId } = render(<Modal rounds='s' />);
    expect(getByTestId('modal-overlay').classList.contains('rounds-s')).toBe(true);

    rerender(<Modal rounds='m' />);
    expect(getByTestId('modal-overlay').classList.contains('rounds-m')).toBe(true);

    rerender(<Modal />);
    expect(getByTestId('modal-overlay').classList.contains('rounds-m')).toBe(true);
  });

  it('should handle "flexLayout" prop', () => {
    const { rerender, getByTestId } = render(<Modal flexLayout />);
    expect(getByTestId('modal').classList.contains('modal-layout')).toBe(true);

    rerender(<Modal flexLayout={false} />);
    expect(getByTestId('modal').classList.contains('modal-layout')).toBe(false);

    rerender(<Modal />);
    expect(getByTestId('modal').classList.contains('modal-layout')).toBe(true);
  });

  it('should handle "className" prop', () => {
    const { getByTestId } = render(<Modal className='my-modal' />);
    expect(getByTestId('modal').classList.contains('my-modal')).toBe(true);
  });

  it('should handle "style" prop', () => {
    const { getByTestId } = render(<Modal style={{ fontSize: '20px' }} />);
    expect(getByTestId('modal').style.fontSize).toBe('20px');
  });

  it('should handle "onClose" prop', () => {
    const spy = jest.fn();
    const { getByTestId } = render(<Modal onClose={spy} />);

    expect(spy).toHaveBeenCalledTimes(0);

    act(() => {
      fireEvent.mouseDown(getByTestId('modal-overlay'));
    });
    expect(spy).toHaveBeenCalledTimes(0);

    act(() => {
      fireEvent.mouseUp(getByTestId('modal-overlay'));
    });
    expect(spy).toHaveBeenCalledTimes(1);
  });

  it('should handle "overlayProps" prop', () => {
    const { getByTestId } = render(<Modal overlayProps={{ id: 'foo', className: 'bar' }} />);

    expect(getByTestId('modal-overlay').id).toBe('foo');
    expect(getByTestId('modal-overlay').classList.contains('bar')).toBe(true);
  });

  it('should handle "data-testid" prop', () => {
    const { rerender, queryAllByTestId } = render(<Modal data-testid='login' />);
    expect(queryAllByTestId('modal')).toHaveLength(0);
    expect(queryAllByTestId('login')).toHaveLength(1);

    rerender(<Modal />);
    expect(queryAllByTestId('modal')).toHaveLength(1);
    expect(queryAllByTestId('login')).toHaveLength(0);
  });

  it('should provide layer increase', () => {
    const TestComponent = () => {
      const layer = useLayer();
      return <>Layer value is {layer}</>;
    };

    const { getByTestId } = render(
      <>
        <div data-testid='outside-modal'>
          <TestComponent />
        </div>

        <Modal>
          <TestComponent />
        </Modal>
      </>,
    );

    expect(getByTestId('outside-modal').textContent).toBe('Layer value is 0');
    expect(getByTestId('modal').textContent).toBe('Layer value is 100');
  });
});
