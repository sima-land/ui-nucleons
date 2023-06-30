import { render } from 'react-dom';
import { defineSlots } from '../define-slots';

describe('defineSlots', () => {
  const Foo = () => <div>[Foo]</div>;
  const Bar = () => <div>[Bar]</div>;
  const Baz = () => <div>[Baz]</div>;

  const TestComponent: React.FC = ({ children }) => {
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

  let container: HTMLDivElement;

  beforeEach(() => {
    container = document.createElement('div');
    document.body.append(container);
  });

  afterEach(() => {
    container && container.remove();
  });

  it('should handle empty children', () => {
    render(<TestComponent />, container);

    expect(container.textContent).toBe('');
  });

  it('should handle all slots', () => {
    render(
      <TestComponent>
        <Foo />
        IgnoredText
        <Bar />
        <Baz />
        <span>IgnoredSpan</span>
      </TestComponent>,
      container,
    );

    expect(container.textContent).toBe('[Foo][Bar][Baz]');
  });
});
