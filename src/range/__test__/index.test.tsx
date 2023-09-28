import { createRef } from 'react';
import { act, fireEvent, render } from '@testing-library/react';
import { Range } from '..';

describe('Range', () => {
  it('should works without props', () => {
    const { container } = render(<Range />);

    expect(container).toMatchSnapshot();
  });

  it('should handle "wrapperProps" prop', () => {
    const { container } = render(
      <Range wrapperProps={{ className: 'test-wrapper', 'data-test': 123 } as any} />,
    );

    expect(container.querySelector('.range-wrapper-base')?.className).toContain('test-wrapper');
    expect(container.querySelector('.range-wrapper-base')?.getAttribute('data-test')).toBe('123');
  });

  it('should handle "disabled" prop', () => {
    const ref = createRef();
    const { container, rerender } = render(<Range disabled ref={ref as any} />);
    const instance = ref.current as Range;

    expect(container.querySelector('.range-wrapper-base')?.className).toContain('disabled');

    jest.spyOn(instance, 'toggleGrabbed' as any);

    expect((instance as any).toggleGrabbed).toHaveBeenCalledTimes(0);
    act(() => {
      container.querySelector('.range-container-base')?.dispatchEvent(new MouseEvent('mousedown'));
    });
    expect((instance as any).toggleGrabbed).toHaveBeenCalledTimes(0);

    rerender(<Range disabled={false} ref={ref as any} />);
    container.querySelector('.range-container-base')?.dispatchEvent(new MouseEvent('mousedown'));
    expect((instance as any).toggleGrabbed).toHaveBeenCalledTimes(1);
  });

  it('should handle "onChange" and "onSlide" props', () => {
    const spy = jest.fn();
    const otherSpy = jest.fn();
    const ref = createRef();
    const { container } = render(
      <Range ref={ref as any} min={10} max={20} step={2} onChange={spy} onSlide={otherSpy} />,
    );
    const instance = ref.current as Range;
    expect(spy).toHaveBeenCalledTimes(0);

    // simulate drag start
    container.querySelector('.range-container-base')?.dispatchEvent(
      new MouseEvent('mousedown', {
        clientX: 10,
      }),
    );
    expect(spy).toHaveBeenCalledTimes(0);
    expect(otherSpy).toHaveBeenCalledTimes(1);

    // simulate drag move
    jest.spyOn(instance, 'constrainValue' as any).mockImplementation(() => 14);
    window.dispatchEvent(
      new MouseEvent('mousemove', {
        clientX: 14,
      }),
    );
    expect(spy).toHaveBeenCalledTimes(0);
    expect(otherSpy).toHaveBeenCalledTimes(2);

    // simulate drag end (without start)
    window.dispatchEvent(
      new MouseEvent('mouseup', {
        clientX: 14,
      }),
    );

    expect(spy).toHaveBeenCalledTimes(1);
    expect(otherSpy).toHaveBeenCalledTimes(2);
  });

  it('should place thumbs and range properly on props change', () => {
    const { container, rerender } = render(
      <Range min={0} max={10} step={1} startValue={2} finishValue={4} />,
    );

    expect(container.querySelectorAll<HTMLElement>('.thumb-base')[0].style.left).toBe('20%');
    expect(container.querySelectorAll<HTMLElement>('.thumb-base')[1].style.left).toBe('40%');
    expect(container.querySelector<HTMLElement>('.selected-base')?.style.left).toBe('20%');
    expect(container.querySelector<HTMLElement>('.selected-base')?.style.width).toBe('20%');

    // @todo не знаю почему но работает только так
    rerender(<Range min={0} max={10} step={1} startValue={2} finishValue={6} />);

    expect(container.querySelectorAll<HTMLElement>('.thumb-base')[0].style.left).toBe('20%');
    expect(container.querySelectorAll<HTMLElement>('.thumb-base')[1].style.left).toBe('60%');
    expect(container.querySelector<HTMLElement>('.selected-base')?.style.left).toBe('20%');
    expect(container.querySelector<HTMLElement>('.selected-base')?.style.width).toBe('40%');

    // @todo не знаю почему но работает только так
    rerender(<Range min={0} max={10} step={1} startValue={undefined} finishValue={undefined} />);

    expect(container.querySelectorAll<HTMLElement>('.thumb-base')[0].style.left).toBe('20%');
    expect(container.querySelectorAll<HTMLElement>('.thumb-base')[1].style.left).toBe('60%');
    expect(container.querySelector<HTMLElement>('.selected-base')?.style.left).toBe('20%');
    expect(container.querySelector<HTMLElement>('.selected-base')?.style.width).toBe('40%');
  });

  it('should unsubscribe event listeners on unmount', () => {
    const ref = createRef();

    render(<Range ref={ref as any} />);

    const instance = ref.current as Range;

    expect(() => {
      instance.componentWillUnmount();
    }).not.toThrow();
  });

  it('should handle drag start properly', () => {
    const ref = createRef();
    const { container, rerender } = render(<Range ref={ref as any} disabled />);
    const instance = ref.current as Range;

    jest.spyOn(instance, 'updateActiveThumb');
    jest.spyOn(instance, 'toggleGrabbed');
    jest.spyOn(instance, 'updateValues');

    fireEvent.mouseDown(container.querySelector('.range-container-base') as any);
    expect(instance.updateActiveThumb).toHaveBeenCalledTimes(0);
    expect(instance.toggleGrabbed).toHaveBeenCalledTimes(0);
    expect(instance.updateValues).toHaveBeenCalledTimes(0);

    rerender(<Range disabled={false} />);
    fireEvent.mouseDown(container.querySelector('.range-container-base') as any);
    expect(instance.updateActiveThumb).toHaveBeenCalledTimes(1);
    expect(instance.toggleGrabbed).toHaveBeenCalledTimes(1);
    expect(instance.updateValues).toHaveBeenCalledTimes(1);
  });

  it('should handle drag end properly', () => {
    const ref = createRef();
    const { container } = render(<Range ref={ref as any} />);
    const instance = ref.current as Range;
    jest.spyOn(instance, 'toggleGrabbed' as any);
    jest.spyOn(instance, 'fireEvent' as any);

    // simulate drag end (without start)
    window.dispatchEvent(new MouseEvent('mouseup'));
    expect((instance as any).toggleGrabbed).toHaveBeenCalledTimes(0);
    expect((instance as any).fireEvent).toHaveBeenCalledTimes(0);

    // simulate drag start
    fireEvent.mouseDown(container.querySelector('.range-container-base') as any);
    expect((instance as any).toggleGrabbed).toHaveBeenCalledTimes(1);
    expect((instance as any).fireEvent).toHaveBeenCalledTimes(1);

    // simulate drag end
    window.dispatchEvent(new MouseEvent('mouseup'));
    expect((instance as any).toggleGrabbed).toHaveBeenCalledTimes(2);
    expect((instance as any).fireEvent).toHaveBeenCalledTimes(2);
  });

  describe('constrainValue()', () => {
    it('should return value properly, INT step', () => {
      const ref = createRef();
      render(<Range ref={ref as any} min={2.5} max={200.1} step={1} />);
      const instance = ref.current as Range;

      // эти значения идентичны тем, которые выдает <input type="range" />
      expect(instance.constrainValue(10)).toBe(10.5);
      expect(instance.constrainValue(1)).toBe(2.5);
      expect(instance.constrainValue(81 * 2.5)).toBe(199.5);
    });

    it('should return value properly, FLOAT step', () => {
      const ref = createRef();
      render(<Range ref={ref as any} min={1} max={5} step={0.1} />);
      const instance = ref.current as Range;

      expect(instance.constrainValue(0.5)).toBe(1);
      expect(instance.constrainValue(1.04)).toBe(1);
      expect(instance.constrainValue(1.05)).toBe(1.1);
      expect(instance.constrainValue(1.1)).toBe(1.1);
      expect(instance.constrainValue(3.023)).toBe(3);
      expect(instance.constrainValue(5.1)).toBe(5);
      expect(instance.constrainValue(6)).toBe(5);
    });
  });

  it('updateValues() should set start thumb value on drag start', () => {
    const ref = createRef();
    const { container } = render(<Range ref={ref as any} min={20} max={30} step={1} />);
    const instance = ref.current as Range;

    jest.spyOn((instance as any).start, 'set');

    expect((instance as any).start.set).toHaveBeenCalledTimes(0);

    // simulate drag start
    container.querySelector('.range-container-base')?.dispatchEvent(
      new MouseEvent('mousedown', {
        clientX: -10,
      }),
    );

    expect(instance.start.set).toHaveBeenCalledTimes(1);
  });

  it('updateValues() should set finish thumb value on drag start', () => {
    const ref = createRef();
    const { container } = render(<Range ref={ref as any} min={20} max={30} step={1} />);
    const instance = ref.current as Range;

    jest.spyOn((instance as any).finish, 'set');

    expect((instance as any).finish.set).toHaveBeenCalledTimes(0);

    // simulate drag start
    container.querySelector('.range-container-base')?.dispatchEvent(
      new MouseEvent('mousedown', {
        clientX: 10,
      }),
    );

    expect((instance as any).finish.set).toHaveBeenCalledTimes(1);
  });

  it('updateValues() should not set start/finish value', () => {
    const ref = createRef();
    const { container } = render(<Range ref={ref as any} min={20} max={30} step={1} />);
    const instance = ref.current as Range;

    jest.spyOn((instance as any).finish, 'set');

    // simulate drag move (without start)
    window.dispatchEvent(new MouseEvent('mousemove'));
    expect((instance as any).finish.set).toHaveBeenCalledTimes(0);

    // simulate drag start
    container.querySelector('.range-container-base')?.dispatchEvent(
      new MouseEvent('mousedown', {
        clientX: 10,
      }),
    );

    expect((instance as any).finish.set).toHaveBeenCalledTimes(1);

    // simulate drag move
    window.dispatchEvent(
      new MouseEvent('mousemove', {
        clientX: 12,
      }),
    );
    expect((instance as any).finish.set).toHaveBeenCalledTimes(2);
  });

  it('updateThumbElements() should not throw when elements is not defined', () => {
    const ref = createRef();
    const { unmount } = render(<Range ref={ref as any} min={20} max={30} step={1} />);
    const instance = ref.current as Range;

    unmount();

    expect(() => (instance as any).updateThumbElements()).not.toThrow();
  });

  it('updateRangeElement() should not throw when elements is not defined', () => {
    const ref = createRef();
    const { unmount } = render(<Range ref={ref as any} min={20} max={30} step={1} />);
    const instance = ref.current as Range;

    unmount();

    expect(() => (instance as any).updateRangeElement()).not.toThrow();
  });

  it('getPercents() should return zeros', () => {
    expect(Range.prototype.getPercents.call({ props: { min: 10, max: 5 } })).toEqual([0, 0]);
  });

  it('should render buttons with aria-label attributes', () => {
    const { getByTestId } = render(<Range min={20} max={30} step={1} />);

    expect(getByTestId('range:thumb-start').getAttribute('aria-label')).toBe(
      'Начальное значение диапазона',
    );
    expect(getByTestId('range:thumb-end').getAttribute('aria-label')).toBe(
      'Конечное значение диапазона',
    );
  });
});
