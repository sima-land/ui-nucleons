import { it, expect, describe } from '@jest/globals';
import { render } from '@testing-library/react';
import { GroupOverflow } from '..';

describe('GroupOverflow', () => {
  it('should render children', () => {
    const { container } = render(
      <GroupOverflow>
        {[...Array(3).keys()].map(item => (
          <span key={item}>Item#{item}</span>
        ))}
      </GroupOverflow>,
    );

    expect(container.textContent).toBe('Item#0Item#1Item#2');
  });

  it('should handle gap prop', () => {
    const { container } = render(
      <GroupOverflow gap={12}>
        {[...Array(3).keys()].map(item => (
          <span key={item}>Item#{item}</span>
        ))}
      </GroupOverflow>,
    );

    const rootElement = container.querySelector<HTMLElement>('.root');

    expect(rootElement?.style.getPropertyValue('--group-overflow-gap')).toBe('12px');
  });

  it('should hide items properly', () => {
    const { container, getAllByTestId, rerender } = render(
      <GroupOverflow tail={() => <span>Tail!</span>}>
        {[...Array(5).keys()].map(item => (
          <span key={item} data-testid='test-item'>
            Item
          </span>
        ))}
      </GroupOverflow>,
    );

    const itemsContainer = container.querySelector<HTMLElement>('.items');

    Object.defineProperty(itemsContainer, 'getBoundingClientRect', {
      value: () => ({ right: 250 }),
    });

    getAllByTestId('test-item').forEach((elem, index) => {
      Object.defineProperty(elem, 'getBoundingClientRect', {
        value: () => ({ right: (index + 1) * 100 }),
      });
    });

    expect(container.textContent).not.toContain('Tail!');
    expect(getAllByTestId('test-item')).toHaveLength(5);

    rerender(
      <GroupOverflow tail={() => <span>Tail!</span>}>
        {[...Array(5).keys()].map(item => (
          <span key={item} data-testid='test-item'>
            Item
          </span>
        ))}
      </GroupOverflow>,
    );

    expect(getAllByTestId('test-item')).toHaveLength(2);
    expect(container.textContent).toContain('Tail!');
  });
});
