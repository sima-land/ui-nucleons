import { act, fireEvent, render } from '@testing-library/react';
import { DotNav } from '..';

describe('DotNav', () => {
  it('should render single dot', () => {
    const { container } = render(<DotNav />);

    expect(container.querySelectorAll('.item')).toHaveLength(1);
  });

  it('should handle props', () => {
    const spy = jest.fn();

    const { container } = render(<DotNav current={2} total={12} onSelect={spy} />);

    expect(spy).toHaveBeenCalledTimes(0);

    act(() => {
      Array.from(container.querySelectorAll('.item'))
        .slice(5, 6)
        .forEach(el => {
          fireEvent.click(el);
        });
    });

    expect(spy).toHaveBeenCalledTimes(1);
    expect(spy).toHaveBeenCalledWith(5);
  });

  it('should handle "current" change', () => {
    const { container, rerender } = render(<DotNav current={0} total={9} />);

    // вперед
    for (let i = 0; i <= 8; i++) {
      rerender(<DotNav current={i} total={9} />);

      const target = container.querySelector(`.item:nth-child(${i + 1})`);

      expect(target?.classList.contains('active')).toBe(true);
    }

    // назад
    for (let i = 8; i >= 0; i--) {
      rerender(<DotNav current={i} total={9} />);

      const target = container.querySelector(`.item:nth-child(${i + 1})`);

      expect(target?.classList.contains('active')).toBe(true);
    }

    // вперед
    for (let i = 0; i <= 8; i++) {
      rerender(<DotNav current={i} total={9} />);

      const target = container.querySelector(`.item:nth-child(${i + 1})`);

      expect(target?.classList.contains('active')).toBe(true);
    }

    // назад
    for (let i = 8; i >= 0; i--) {
      rerender(<DotNav current={i} total={9} />);

      const target = container.querySelector(`.item:nth-child(${i + 1})`);

      expect(target?.classList.contains('active')).toBe(true);
    }
  });

  it('should handle "size" prop', () => {
    const { container } = render(<DotNav current={0} total={9} size='l' />);

    expect(container.querySelector('.root')?.classList.contains('size-l')).toBe(true);
  });

  it('should handle "onSelect" prop missing', () => {
    const { container } = render(<DotNav current={0} total={9} onSelect={undefined} />);

    expect(() => {
      act(() => {
        const target = container.querySelector(`.item:nth-child(3)`);
        fireEvent.click(target as HTMLElement);
      });
    }).not.toThrow();
  });
});
