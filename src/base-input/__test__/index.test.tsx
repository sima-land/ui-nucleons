import React from 'react';
import { fireEvent, render } from '@testing-library/react';
import { BaseInput } from '..';
import { RestPlaceholder } from '../base-input';

describe('BaseInput', () => {
  it('should render rest placeholder', () => {
    const { container, getByTestId } = render(<BaseInput value='hello' restPlaceholder=' world' />);

    expect(container.querySelector('.rest-placeholder')?.textContent).toBe('hello world');

    const input = getByTestId('base-input:field') as HTMLInputElement;
    input.value = 'some text';
    fireEvent.input(getByTestId('base-input:field'));

    expect(container.querySelector('.rest-placeholder')?.textContent).toBe('some text world');
  });

  it('should render rest placeholder by definition', () => {
    const { container } = render(
      <BaseInput
        value='foo'
        restPlaceholder={{
          value: ' bar',
          shiftValue: 'foo',
        }}
      />,
    );

    expect(container.querySelector('.rest-placeholder')?.textContent).toBe('foo bar');
  });

  it('should render input or textarea depends on "multiline" prop', () => {
    const { container, rerender } = render(<BaseInput />);

    expect(container.querySelectorAll('input')).toHaveLength(1);
    expect(container.querySelectorAll('textarea')).toHaveLength(0);

    rerender(<BaseInput multiline={false} />);

    expect(container.querySelectorAll('input')).toHaveLength(1);
    expect(container.querySelectorAll('textarea')).toHaveLength(0);

    rerender(<BaseInput multiline />);

    expect(container.querySelectorAll('input')).toHaveLength(0);
    expect(container.querySelectorAll('textarea')).toHaveLength(1);
  });

  it('should properly set "data-testid" to elements', () => {
    const { container, rerender } = render(<BaseInput />);
    const find = (s: string) => container.querySelectorAll(s);

    expect(find('[data-testid="base-input"] input')).toHaveLength(1);
    expect(find('[data-testid="base-input"] [data-testid="base-input:field"]')).toHaveLength(1);

    rerender(<BaseInput data-testid='foo-bar' />);
    expect(find('[data-testid="foo-bar"] input')).toHaveLength(1);
    expect(find('[data-testid="foo-bar"] [data-testid="base-input:field"]')).toHaveLength(1);

    // multiline
    rerender(<BaseInput multiline />);
    expect(find('[data-testid="base-input"] textarea')).toHaveLength(1);
    expect(find('[data-testid="base-input"] [data-testid="base-input:field"]')).toHaveLength(1);

    rerender(<BaseInput multiline data-testid='foo-bar' />);
    expect(find('[data-testid="foo-bar"] textarea')).toHaveLength(1);
    expect(find('[data-testid="foo-bar"] [data-testid="base-input:field"]')).toHaveLength(1);
  });
});

describe('RestPlaceholder', () => {
  it('should handle element missing in inputRef', () => {
    expect(() => {
      render(
        <RestPlaceholder
          inputRef={{ current: null }}
          value='hello'
          defaultValue={undefined}
          definition={{
            value: 'hi',
            shiftValue: 'hello',
          }}
        />,
      );
    }).not.toThrow();
  });
});
