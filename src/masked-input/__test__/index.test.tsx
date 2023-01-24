import React, { createRef } from 'react';
import { fireEvent, render } from '@testing-library/react';
import { MaskedInput } from '..';

describe('MaskedInput', () => {
  it('should renders Input', () => {
    const spy = jest.fn();
    const { queryAllByTestId, getByTestId } = render(
      <MaskedInput mask='____' placeholder='_' pattern={'\\d'} value='12a3' onChange={spy} />,
    );

    expect(queryAllByTestId('input')).toHaveLength(1);
    expect((getByTestId('base-input:field') as HTMLInputElement).value).toBe('123');

    fireEvent.focus(getByTestId('base-input:field'));
    fireEvent.change(getByTestId('base-input:field'), { target: { value: 'foo456' } });
    expect((getByTestId('base-input:field') as HTMLInputElement).value).toBe('1234');
  });

  it('should work as uncontrolled', () => {
    const spy = jest.fn();
    const { queryAllByTestId, getByTestId } = render(
      <MaskedInput
        mask='____'
        placeholder='_'
        pattern={'\\d'}
        defaultValue='12a3'
        onChange={spy}
      />,
    );

    expect(queryAllByTestId('input')).toHaveLength(1);
    expect((getByTestId('base-input:field') as HTMLInputElement).value).toBe('123');

    fireEvent.focus(getByTestId('base-input:field'));
    fireEvent.change(getByTestId('base-input:field'), { target: { value: 'foo456' } });
    expect((getByTestId('base-input:field') as HTMLInputElement).value).toBe('1234');
  });

  it('should work as uncontrolled without defaultValue', () => {
    const spy = jest.fn();
    const { queryAllByTestId, getByTestId } = render(
      <MaskedInput mask='____' placeholder='_' pattern={'\\d'} onChange={spy} />,
    );

    expect(queryAllByTestId('input')).toHaveLength(1);
    expect((getByTestId('base-input:field') as HTMLInputElement).value).toBe('');

    fireEvent.focus(getByTestId('base-input:field'));
    fireEvent.change(getByTestId('base-input:field'), { target: { value: 'foo456' } });
    expect((getByTestId('base-input:field') as HTMLInputElement).value).toBe('456');
  });

  it('should apply digits only mask by default', () => {
    const spy = jest.fn();
    const { queryAllByTestId, getByTestId } = render(<MaskedInput mask='___' onChange={spy} />);

    expect(queryAllByTestId('input')).toHaveLength(1);
    expect((getByTestId('base-input:field') as HTMLInputElement).value).toBe('');

    fireEvent.change(getByTestId('base-input:field'), { target: { value: 'AAA3G5__4' } });
    expect((getByTestId('base-input:field') as HTMLInputElement).value).toBe('354');
  });

  it('should handle "inputRef" prop', () => {
    const ref = createRef<HTMLInputElement>();
    const { getByTestId } = render(<MaskedInput mask='___' inputRef={ref} />);

    expect(ref.current instanceof HTMLInputElement).toBe(true);
    expect(getByTestId('base-input:field') === ref.current).toBe(true);
  });

  it('should handle "onBlur" prop', () => {
    const spy = jest.fn();
    const { getByTestId } = render(<MaskedInput mask='____' onBlur={spy} />);

    expect(spy).toHaveBeenCalledTimes(0);
    fireEvent.blur(getByTestId('base-input:field'));
    expect(spy).toHaveBeenCalledTimes(1);
  });

  it('should handle "baseInputProps.restPlaceholder" prop', () => {
    const { rerender, getByTestId, queryAllByTestId } = render(
      <MaskedInput mask='____' value='22' onChange={jest.fn()} />,
    );

    expect(getByTestId('rest-placeholder-shift').textContent).toBe('22');
    expect(getByTestId('rest-placeholder').textContent).toBe('__');

    rerender(
      <MaskedInput
        mask='____'
        value='22'
        onChange={jest.fn()}
        baseInputProps={{
          restPlaceholder: { value: '', shiftValue: '' },
        }}
      />,
    );

    expect(queryAllByTestId('rest-placeholder-shift')).toHaveLength(0);
    expect(queryAllByTestId('rest-placeholder')).toHaveLength(0);
  });
});
