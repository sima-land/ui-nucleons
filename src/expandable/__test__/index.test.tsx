import { it, expect, describe, jest } from '@jest/globals';
import { useEffect } from 'react';
import { act, fireEvent, render } from '@testing-library/react';
import { Expandable } from '..';
import { setBoundingClientRect } from './utils';

describe('Expandable.Group', () => {
  it('should hide opener by default when "defaultExpanded" is true', () => {
    const { queryAllByTestId } = render(
      <Expandable.Group defaultExpanded>
        <Expandable.Item>Foo</Expandable.Item>
        <Expandable.Item>Bar</Expandable.Item>
        <Expandable.Item>Baz</Expandable.Item>
      </Expandable.Group>,
    );

    expect(queryAllByTestId('expandable:opener')).toHaveLength(0);
  });

  it('should show opener by default when "defaultExpanded" is falsy', () => {
    const { queryAllByTestId } = render(
      <Expandable.Group defaultExpanded={undefined}>
        <Expandable.Item>Foo</Expandable.Item>
        <Expandable.Item>Bar</Expandable.Item>
        <Expandable.Item>Baz</Expandable.Item>
      </Expandable.Group>,
    );

    expect(queryAllByTestId('expandable:opener')).toHaveLength(1);
  });

  it('should call "onExpand" on opener click', () => {
    const spy = jest.fn();

    const { getByTestId } = render(
      <Expandable.Group onExpand={spy}>
        <Expandable.Item>Foo</Expandable.Item>
        <Expandable.Item>Bar</Expandable.Item>
        <Expandable.Item>Baz</Expandable.Item>
      </Expandable.Group>,
    );

    expect(spy).toHaveBeenCalledTimes(0);
    fireEvent.click(getByTestId('expandable:opener'));
    expect(spy).toHaveBeenCalledTimes(1);
  });

  it('should do not call "onExpand" on opener click', () => {
    const { getByTestId } = render(
      <Expandable.Group onExpand={undefined}>
        <Expandable.Item>Foo</Expandable.Item>
        <Expandable.Item>Bar</Expandable.Item>
        <Expandable.Item>Baz</Expandable.Item>
      </Expandable.Group>,
    );

    expect(() => {
      fireEvent.click(getByTestId('expandable:opener'));
    }).not.toThrow();
  });

  it('should handle "expanded" prop', () => {
    const { rerender, queryAllByTestId } = render(
      <Expandable.Group expanded>
        <Expandable.Item>Foo</Expandable.Item>
        <Expandable.Item>Bar</Expandable.Item>
        <Expandable.Item>Baz</Expandable.Item>
      </Expandable.Group>,
    );

    expect(queryAllByTestId('expandable:opener')).toHaveLength(0);

    rerender(
      <Expandable.Group expanded={false}>
        <Expandable.Item>Foo</Expandable.Item>
        <Expandable.Item>Bar</Expandable.Item>
        <Expandable.Item>Baz</Expandable.Item>
      </Expandable.Group>,
    );

    expect(queryAllByTestId('expandable:opener')).toHaveLength(1);
  });

  it('should ignore invalid children', () => {
    const spy = jest.fn<() => void>();

    function TestComponent() {
      useEffect(spy, []);

      spy();

      return <div>Hello</div>;
    }

    render(
      <Expandable.Group expanded>
        <Expandable.Item>Foo</Expandable.Item>
        <Expandable.Item>Bar</Expandable.Item>
        <Expandable.Item>Baz</Expandable.Item>
        <TestComponent />
      </Expandable.Group>,
    );

    expect(spy).toHaveBeenCalledTimes(0);
  });

  it('should hide elements properly', () => {
    const { container, getByTestId, getAllByTestId, rerender } = render(
      <Expandable.Group gap={0} itemHeight={30} lineLimit={1} openerWidth={30}>
        <Expandable.Item>One</Expandable.Item>
        <Expandable.Item>Two</Expandable.Item>
        <Expandable.Item>Three</Expandable.Item>
        <Expandable.Item>Four</Expandable.Item>
      </Expandable.Group>,
    );

    const outer = container.querySelector('.root') as HTMLElement;
    const [item1, item2, item3, item4] = getAllByTestId('expandable:item');
    const opener = getByTestId('expandable:opener');

    setBoundingClientRect(outer, { width: 100, height: 30 });
    setBoundingClientRect(item1, { width: 30, height: 30, x: 0 });
    setBoundingClientRect(item2, { width: 30, height: 30, x: 30 });
    setBoundingClientRect(item3, { width: 30, height: 30, x: 60 });
    setBoundingClientRect(item4, { width: 30, height: 30, x: 0, y: 30 });
    setBoundingClientRect(opener, { width: 30, height: 30, x: 30, y: 30 });

    rerender(
      <Expandable.Group gap={0} itemHeight={30} lineLimit={1} openerWidth={30}>
        <Expandable.Item>One</Expandable.Item>
        <Expandable.Item>Two</Expandable.Item>
        <Expandable.Item>Three</Expandable.Item>
        <Expandable.Item>Four</Expandable.Item>
      </Expandable.Group>,
    );

    expect(item1.classList.contains('hidden')).toBe(false);
    expect(item2.classList.contains('hidden')).toBe(false);
    expect(item3.classList.contains('hidden')).toBe(true);
    expect(item4.classList.contains('hidden')).toBe(true);
  });

  it('should reset state when root element width changes', async () => {
    const { container, getByTestId, getAllByTestId } = render(
      <Expandable.Group gap={0} itemHeight={30} lineLimit={1} openerWidth={30}>
        <Expandable.Item>One</Expandable.Item>
        <Expandable.Item>Two</Expandable.Item>
        <Expandable.Item>Three</Expandable.Item>
        <Expandable.Item>Four</Expandable.Item>
      </Expandable.Group>,
    );

    const outer = container.querySelector('.root') as HTMLElement;
    const [item1, item2, item3, item4] = getAllByTestId('expandable:item');
    const opener = getByTestId('expandable:opener');

    setBoundingClientRect(outer, { width: 100, height: 30 });
    setBoundingClientRect(item1, { width: 30, height: 30, x: 0 });
    setBoundingClientRect(item2, { width: 30, height: 30, x: 30 });
    setBoundingClientRect(item3, { width: 30, height: 30, x: 60 });
    setBoundingClientRect(item4, { width: 30, height: 30, x: 0, y: 30 });
    setBoundingClientRect(opener, { width: 30, height: 30, x: 30, y: 30 });

    await act(async () => {
      outer.dispatchEvent(new Event('test:resize'));
      await new Promise(requestAnimationFrame);
    });

    expect(item1.classList.contains('hidden')).toBe(false);
    expect(item2.classList.contains('hidden')).toBe(false);
    expect(item3.classList.contains('hidden')).toBe(true);
    expect(item4.classList.contains('hidden')).toBe(true);
  });

  it('should NOT reset expanded state when root element width changes', async () => {
    const { container, getAllByTestId } = render(
      <Expandable.Group gap={0} itemHeight={30} lineLimit={1} openerWidth={30} expanded>
        <Expandable.Item>One</Expandable.Item>
        <Expandable.Item>Two</Expandable.Item>
        <Expandable.Item>Three</Expandable.Item>
        <Expandable.Item>Four</Expandable.Item>
      </Expandable.Group>,
    );

    const outer = container.querySelector('.root') as HTMLElement;
    const [item1, item2, item3, item4] = getAllByTestId('expandable:item');

    setBoundingClientRect(outer, { width: 100, height: 30 });
    setBoundingClientRect(item1, { width: 30, height: 30, x: 0 });
    setBoundingClientRect(item2, { width: 30, height: 30, x: 30 });
    setBoundingClientRect(item3, { width: 30, height: 30, x: 60 });
    setBoundingClientRect(item4, { width: 30, height: 30, x: 0, y: 30 });

    await act(async () => {
      outer.dispatchEvent(new Event('test:resize'));
      await new Promise(requestAnimationFrame);
    });

    expect(item1.classList.contains('hidden')).toBe(false);
    expect(item2.classList.contains('hidden')).toBe(false);
    expect(item3.classList.contains('hidden')).toBe(false);
    expect(item4.classList.contains('hidden')).toBe(false);
  });
});
