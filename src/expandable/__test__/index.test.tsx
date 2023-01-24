import React, { useEffect } from 'react';
import { fireEvent, render } from '@testing-library/react';
import { Expandable } from '..';

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
    const spy = jest.fn();

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
});
