import React from 'react';
import { render } from '@testing-library/react';
import CrossSVG from '@sima-land/ui-quarks/icons/16x16/Stroked/cross';
import TrashSVG from '@sima-land/ui-quarks/icons/24x24/Stroked/trash';
import { TextButton } from '..';

describe('TextButton', () => {
  it('should works with basic props', () => {
    const { container, getByTestId } = render(<TextButton>My Button</TextButton>);

    expect(container.querySelectorAll('button')).toHaveLength(1);
    expect(getByTestId('text-button') instanceof HTMLButtonElement).toBe(true);
  });

  it('should render anchor', () => {
    const { container, getByTestId } = render(
      <TextButton as='anchor' href='https://www.test.com'>
        My Button
      </TextButton>,
    );

    expect(container.querySelectorAll('button')).toHaveLength(0);
    expect(container.querySelectorAll('a')).toHaveLength(1);
    expect(getByTestId('text-button') instanceof HTMLAnchorElement).toBe(true);
  });

  it('should render icons', () => {
    const { container } = render(
      <TextButton startIcon={CrossSVG} endIcon={TrashSVG}>
        My Button
      </TextButton>,
    );

    expect(container.querySelectorAll('svg')).toHaveLength(2);
    expect(container.querySelectorAll('svg.icon-start')).toHaveLength(1);
    expect(container.querySelectorAll('svg.icon-end')).toHaveLength(1);
  });

  it('should handle "data-testid" prop', () => {
    const { queryAllByTestId } = render(
      <TextButton data-testid='my-super-button'>My Button</TextButton>,
    );

    expect(queryAllByTestId('text-button')).toHaveLength(0);
    expect(queryAllByTestId('my-super-button')).toHaveLength(1);
  });

  it('should handle "disabled" prop', () => {
    const { getByTestId, rerender } = render(<TextButton disabled>My Button</TextButton>);

    expect((getByTestId('text-button') as HTMLButtonElement).disabled).toBe(true);
    expect(getByTestId('text-button').className).toContain('disabled');

    rerender(
      <TextButton as='anchor' href='https://www.foo.bar/' disabled>
        Foo Bar
      </TextButton>,
    );

    expect(getByTestId('text-button').className).toContain('disabled');
  });

  it('should handle "color" prop', () => {
    const { getByTestId, rerender } = render(<TextButton>My Button</TextButton>);

    expect(getByTestId('text-button').className).toContain('color-basic-blue');

    rerender(<TextButton color='basic-gray38'>Foo Bar</TextButton>);
    expect(getByTestId('text-button').className).toContain('color-basic-gray38');

    rerender(<TextButton color='basic-gray87'>Foo Bar</TextButton>);
    expect(getByTestId('text-button').className).toContain('color-basic-gray87');

    rerender(<TextButton color='basic-white'>Foo Bar</TextButton>);
    expect(getByTestId('text-button').className).toContain('color-basic-white');
  });

  it('should handle "size" prop', () => {
    const { getByTestId, rerender } = render(<TextButton>My Button</TextButton>);

    expect(getByTestId('text-button').className).toContain('size-m');

    rerender(<TextButton size='m'>Foo Bar</TextButton>);
    expect(getByTestId('text-button').className).toContain('size-m');

    rerender(<TextButton size='s'>Foo Bar</TextButton>);
    expect(getByTestId('text-button').className).toContain('size-s');
  });

  it('should handle "iconGutter" prop', () => {
    const { getByTestId, rerender } = render(<TextButton>My Button</TextButton>);

    expect(getByTestId('text-button').className).toContain('icon-gutter-8');

    rerender(<TextButton iconGutter={8}>Foo Bar</TextButton>);
    expect(getByTestId('text-button').className).toContain('icon-gutter-8');

    rerender(<TextButton iconGutter={4}>Foo Bar</TextButton>);
    expect(getByTestId('text-button').className).toContain('icon-gutter-4');
  });
});
