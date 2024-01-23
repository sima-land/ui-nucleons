import { it, expect, describe } from '@jest/globals';
import { render } from '@testing-library/react';
import { defineSlots } from '../define-slots';
import { ReactNode } from 'react';

describe('defineSlots', () => {
  const Foo = () => <div>[Foo]</div>;
  const Bar = () => <div>[Bar]</div>;
  const Baz = () => <div>[Baz]</div>;

  const TestComponent = ({ children }: { children?: ReactNode }) => {
    const slots = defineSlots(children, {
      foo: Foo,
      bar: Bar,
      baz: Baz,
    });

    return (
      <div>
        {slots.foo}
        {slots.bar}
        {slots.baz}
      </div>
    );
  };

  it('should handle empty children', () => {
    const { container } = render(<TestComponent />);

    expect(container.textContent).toBe('');
  });

  it('should handle all slots', () => {
    const { container } = render(
      <TestComponent>
        <Foo />
        IgnoredText
        <Bar />
        <Baz />
        <span>IgnoredSpan</span>
      </TestComponent>,
    );

    expect(container.textContent).toBe('[Foo][Bar][Baz]');
  });
});
