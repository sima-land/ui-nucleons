import React, { createRef } from 'react';
import { createEvent, fireEvent, render } from '@testing-library/react';
import { Stepper } from '..';

describe('<Stepper />', () => {
  it('should handle ref prop', () => {
    const ref = createRef<HTMLInputElement>();
    const { getByTestId } = render(<Stepper ref={ref} />);

    expect(ref.current instanceof HTMLInputElement).toBe(true);
    expect(getByTestId('stepper:input') === ref.current).toBe(true);
  });

  it('should render as "readonly"', () => {
    const { getByTestId } = render(<Stepper readOnly />);

    expect((getByTestId('stepper:input') as HTMLInputElement).readOnly).toBe(true);
    expect((getByTestId('stepper:plus') as HTMLButtonElement).disabled).toBe(true);
    expect((getByTestId('stepper:minus') as HTMLButtonElement).disabled).toBe(true);
  });

  it('should prevent blur on input when "buttonClickBehavior" prop is defined', () => {
    const { getByTestId } = render(<Stepper buttonClickBehavior='prevent-input-blur' />);

    const root = getByTestId('stepper');
    const plus = getByTestId('stepper:plus');
    const minus = getByTestId('stepper:minus');

    fireEvent.focus(getByTestId('stepper:input'));

    for (const el of [root, plus, minus]) {
      const event = createEvent.mouseDown(getByTestId('stepper:minus'));

      expect(event.defaultPrevented).toBe(false);
      fireEvent(el, event);
      expect(event.defaultPrevented).toBe(true);
    }
  });

  it('should NOT prevent blur on input when "buttonClickBehavior" prop is not defined', () => {
    const { getByTestId } = render(<Stepper buttonClickBehavior={undefined} />);

    const root = getByTestId('stepper');
    const plus = getByTestId('stepper:plus');
    const minus = getByTestId('stepper:minus');

    fireEvent.focus(getByTestId('stepper:input'));

    for (const el of [root, plus, minus]) {
      const event = createEvent.mouseDown(getByTestId('stepper:minus'));

      expect(event.defaultPrevented).toBe(false);
      fireEvent(el, event);
      expect(event.defaultPrevented).toBe(false);
    }
  });

  it('should render as "failed"', () => {
    const { getByTestId } = render(<Stepper failed />);

    expect(getByTestId('stepper').classList.contains('failed')).toBe(true);
  });

  it('should handle input props', () => {
    const changeSpy = jest.fn();
    const focusSpy = jest.fn();
    const blurSpy = jest.fn();

    const { getByTestId } = render(
      <Stepper
        defaultValue={123}
        disabled
        onFocus={focusSpy}
        onChange={changeSpy}
        onBlur={blurSpy}
      />,
    );

    expect(focusSpy).toBeCalledTimes(0);
    expect(changeSpy).toBeCalledTimes(0);
    expect(blurSpy).toBeCalledTimes(0);

    fireEvent.focus(getByTestId('stepper:input'));

    expect(focusSpy).toBeCalledTimes(1);
    expect(changeSpy).toBeCalledTimes(0);
    expect(blurSpy).toBeCalledTimes(0);

    fireEvent.change(getByTestId('stepper:input'), { target: { value: 'next' } });

    expect(focusSpy).toBeCalledTimes(1);
    expect(changeSpy).toBeCalledTimes(1);
    expect(blurSpy).toBeCalledTimes(0);

    fireEvent.blur(getByTestId('stepper:input'));

    expect(focusSpy).toBeCalledTimes(1);
    expect(changeSpy).toBeCalledTimes(1);
    expect(blurSpy).toBeCalledTimes(1);
  });

  it('should handle "onFocus" missing', () => {
    const spy = jest.fn();

    const { getByTestId, rerender } = render(<Stepper onFocus={spy} />);
    expect(spy).toBeCalledTimes(0);

    fireEvent.focus(getByTestId('stepper:input'));
    expect(spy).toBeCalledTimes(1);

    rerender(<Stepper onFocus={undefined} />);
    expect(spy).toBeCalledTimes(1);

    fireEvent.focus(getByTestId('stepper:input'));
    expect(spy).toBeCalledTimes(1);
  });

  it('should handle "onBlur" missing', () => {
    const spy = jest.fn();

    const { getByTestId, rerender } = render(<Stepper onBlur={spy} />);
    expect(spy).toBeCalledTimes(0);

    fireEvent.blur(getByTestId('stepper:input'));
    expect(spy).toBeCalledTimes(1);

    rerender(<Stepper onBlur={undefined} />);
    expect(spy).toBeCalledTimes(1);

    fireEvent.blur(getByTestId('stepper:input'));
    expect(spy).toBeCalledTimes(1);
  });

  it('should handle "size" prop', () => {
    const { getByTestId, rerender } = render(<Stepper />);

    expect(getByTestId('stepper').classList.contains('size-s')).toBe(false);
    expect(getByTestId('stepper').classList.contains('size-m')).toBe(true);

    rerender(<Stepper size='s' />);
    expect(getByTestId('stepper').classList.contains('size-s')).toBe(true);
    expect(getByTestId('stepper').classList.contains('size-m')).toBe(false);

    rerender(<Stepper size='m' />);
    expect(getByTestId('stepper').classList.contains('size-s')).toBe(false);
    expect(getByTestId('stepper').classList.contains('size-m')).toBe(true);
  });

  it('Props "canAdd/canSubtract" should hide plus/minus buttons', () => {
    const { queryAllByTestId, getByTestId, rerender } = render(<Stepper />);

    expect(queryAllByTestId('stepper:plus')).toHaveLength(1);
    expect((getByTestId('stepper:plus') as HTMLButtonElement).disabled).toBe(false);
    expect((getByTestId('stepper:plus') as HTMLButtonElement).hidden).toBe(false);
    expect(queryAllByTestId('stepper:minus')).toHaveLength(1);
    expect((getByTestId('stepper:minus') as HTMLButtonElement).disabled).toBe(false);
    expect((getByTestId('stepper:minus') as HTMLButtonElement).hidden).toBe(false);

    rerender(<Stepper canAdd canSubtract />);

    expect(queryAllByTestId('stepper:plus')).toHaveLength(1);
    expect((getByTestId('stepper:plus') as HTMLButtonElement).disabled).toBe(false);
    expect((getByTestId('stepper:plus') as HTMLButtonElement).hidden).toBe(false);
    expect(queryAllByTestId('stepper:minus')).toHaveLength(1);
    expect((getByTestId('stepper:minus') as HTMLButtonElement).disabled).toBe(false);
    expect((getByTestId('stepper:minus') as HTMLButtonElement).hidden).toBe(false);

    rerender(<Stepper canAdd={false} canSubtract />);

    expect((getByTestId('stepper:plus') as HTMLButtonElement).disabled).toBe(false);
    expect((getByTestId('stepper:plus') as HTMLButtonElement).hidden).toBe(true);
    expect(queryAllByTestId('stepper:minus')).toHaveLength(1);
    expect((getByTestId('stepper:minus') as HTMLButtonElement).disabled).toBe(false);
    expect((getByTestId('stepper:minus') as HTMLButtonElement).hidden).toBe(false);

    rerender(<Stepper canAdd canSubtract={false} />);

    expect((getByTestId('stepper:plus') as HTMLButtonElement).disabled).toBe(false);
    expect((getByTestId('stepper:plus') as HTMLButtonElement).hidden).toBe(false);
    expect(queryAllByTestId('stepper:minus')).toHaveLength(1);
    expect((getByTestId('stepper:minus') as HTMLButtonElement).disabled).toBe(false);
    expect((getByTestId('stepper:minus') as HTMLButtonElement).hidden).toBe(true);
  });

  it('Props "plusDisabled/minusDisabled" should makre plus/minus buttons disabled', () => {
    const { queryAllByTestId, getByTestId, rerender } = render(<Stepper />);

    expect(queryAllByTestId('stepper:plus')).toHaveLength(1);
    expect((getByTestId('stepper:plus') as HTMLButtonElement).disabled).toBe(false);
    expect((getByTestId('stepper:plus') as HTMLButtonElement).hidden).toBe(false);
    expect(queryAllByTestId('stepper:minus')).toHaveLength(1);
    expect((getByTestId('stepper:minus') as HTMLButtonElement).disabled).toBe(false);
    expect((getByTestId('stepper:minus') as HTMLButtonElement).hidden).toBe(false);

    rerender(<Stepper plusDisabled={false} minusDisabled={false} />);

    expect(queryAllByTestId('stepper:plus')).toHaveLength(1);
    expect((getByTestId('stepper:plus') as HTMLButtonElement).disabled).toBe(false);
    expect((getByTestId('stepper:plus') as HTMLButtonElement).hidden).toBe(false);
    expect(queryAllByTestId('stepper:minus')).toHaveLength(1);
    expect((getByTestId('stepper:minus') as HTMLButtonElement).disabled).toBe(false);
    expect((getByTestId('stepper:minus') as HTMLButtonElement).hidden).toBe(false);

    rerender(<Stepper plusDisabled minusDisabled={false} />);

    expect((getByTestId('stepper:plus') as HTMLButtonElement).disabled).toBe(true);
    expect((getByTestId('stepper:plus') as HTMLButtonElement).hidden).toBe(false);
    expect(queryAllByTestId('stepper:minus')).toHaveLength(1);
    expect((getByTestId('stepper:minus') as HTMLButtonElement).disabled).toBe(false);
    expect((getByTestId('stepper:minus') as HTMLButtonElement).hidden).toBe(false);

    rerender(<Stepper plusDisabled={false} minusDisabled />);

    expect((getByTestId('stepper:plus') as HTMLButtonElement).disabled).toBe(false);
    expect((getByTestId('stepper:plus') as HTMLButtonElement).hidden).toBe(false);
    expect(queryAllByTestId('stepper:minus')).toHaveLength(1);
    expect((getByTestId('stepper:minus') as HTMLButtonElement).disabled).toBe(true);
    expect((getByTestId('stepper:minus') as HTMLButtonElement).hidden).toBe(false);
  });
});
