import { DropdownItem, DropdownItemSize } from '..';
import { render } from '@testing-library/react';
import CrossSVG from '@sima-land/ui-quarks/icons/16x16/Stroked/Cross';

describe('DropdownItem', () => {
  it('should works with minimum props', () => {
    const { queryAllByTestId } = render(<DropdownItem>Hello</DropdownItem>);

    expect(queryAllByTestId('dropdown-item')).toHaveLength(1);
  });

  it('should handle "disabled" prop', () => {
    const { getByTestId } = render(<DropdownItem disabled>Hello</DropdownItem>);

    expect(getByTestId('dropdown-item').classList).toContain('disabled');
  });

  it('should render as checked', () => {
    const { getByTestId } = render(<DropdownItem checked>Hello</DropdownItem>);

    expect(getByTestId('dropdown-item').classList).toContain('checked');
  });

  it('should render as selected', () => {
    const { getByTestId } = render(<DropdownItem selected>Hello</DropdownItem>);

    expect(getByTestId('dropdown-item').classList).toContain('selected');
  });

  it('should render with no hover effect', () => {
    const { getByTestId } = render(<DropdownItem noHover>Hello</DropdownItem>);

    expect(getByTestId('dropdown-item').classList).toContain('no-hover');
  });

  it('should render with maximum content', () => {
    const { container, queryAllByTestId, rerender } = render(
      <DropdownItem
        size='xl'
        startIcon={CrossSVG}
        startContent={<span data-testid='custom-start-content'>Start content</span>}
        endContent={<span data-testid='custom-end-content'>End content</span>}
        comment={<span data-testid='custom-comment'>Comment for XL only</span>}
      >
        Hello, world!
      </DropdownItem>,
    );

    expect(queryAllByTestId('custom-start-content')).toHaveLength(0);
    expect(container.querySelectorAll('svg')).toHaveLength(1);
    expect(queryAllByTestId('custom-end-content')).toHaveLength(1);
    expect(queryAllByTestId('custom-comment')).toHaveLength(1);

    rerender(
      <DropdownItem
        size='l'
        startIcon={CrossSVG}
        startContent={<span data-testid='custom-start-content'>Start content</span>}
        endContent={<span data-testid='custom-end-content'>End content</span>}
        comment={<span data-testid='custom-comment'>Comment for XL only</span>}
      >
        Hello, world!
      </DropdownItem>,
    );

    expect(queryAllByTestId('custom-start-content')).toHaveLength(0);
    expect(container.querySelectorAll('svg')).toHaveLength(1);
    expect(queryAllByTestId('custom-end-content')).toHaveLength(1);
    expect(queryAllByTestId('custom-comment')).toHaveLength(0);
  });

  it('startIcon/endIcon must be on prior of startContent/endContent', () => {
    const { container, queryAllByTestId } = render(
      <DropdownItem
        startContent={<span data-testid='custom-content'>Start content</span>}
        endContent={<span data-testid='custom-content'>End content</span>}
        startIcon={CrossSVG}
        endIcon={CrossSVG}
      >
        Dropdown item
      </DropdownItem>,
    );

    expect(queryAllByTestId('custom-content')).toHaveLength(0);
    expect(container.querySelectorAll('svg')).toHaveLength(2);
  });

  it('should handle size prop', () => {
    const sizes: Array<DropdownItemSize> = ['s', 'm', 'l', 'xl'];
    const { getByTestId, rerender } = render(<DropdownItem>Hello</DropdownItem>);

    expect(getByTestId('dropdown-item').classList).toContain('size-m');

    for (const size of sizes) {
      rerender(<DropdownItem size={size}>Hello</DropdownItem>);

      expect(getByTestId('dropdown-item').classList).toContain(`size-${size}`);
    }
  });

  it('should handle "data-testid"', () => {
    const { queryAllByTestId } = render(<DropdownItem data-testid='custom-item' />);

    expect(queryAllByTestId('dropdown-item')).toHaveLength(0);
    expect(queryAllByTestId('custom-item')).toHaveLength(1);
  });

  it('should handle "dangerouslySetInnerHTML" properly', () => {
    const { container } = render(
      <DropdownItem
        dangerouslySetInnerHTML={{
          __html: 'Markup is <b>here</b>',
        }}
      />,
    );

    expect(container.textContent).toContain('Markup is here');
  });

  it('should throw error when "dangerouslySetInnerHTML" and "children" provider', () => {
    expect(() => {
      render(
        // eslint-disable-next-line react/no-danger-with-children
        <DropdownItem
          dangerouslySetInnerHTML={{
            __html: 'Markup is <b>here</b>',
          }}
          children={<>Children is here</>}
        />,
      );
    }).toThrow('Can only set one of `children` or `props.dangerouslySetInnerHTML`.');
  });
});
