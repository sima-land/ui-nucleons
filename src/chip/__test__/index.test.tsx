import { fireEvent, render } from '@testing-library/react';
import { Chip, ChipIconButton, getDeletableChipProps } from '..';

describe('Chip', () => {
  it('should render span by default', () => {
    const { getByTestId } = render(<Chip>Hello, world</Chip>);

    expect(getByTestId('chip').tagName).toBe('SPAN');
  });

  it('should render span depends on "as" prop', () => {
    const { getByTestId } = render(<Chip as='span'>Hello, world</Chip>);

    expect(getByTestId('chip').tagName).toBe('SPAN');
  });

  it('should render anchor depends on "as" prop', () => {
    const { getByTestId } = render(
      <Chip as='anchor' href='http://fake.com/'>
        Hello, world
      </Chip>,
    );

    expect(getByTestId('chip').tagName).toBe('A');
    expect(getByTestId('chip').getAttribute('href')).toBe('http://fake.com/');
  });

  it('should render button depends on "as" prop', () => {
    const { getByTestId } = render(
      <Chip as='button' type='button'>
        Hello, world
      </Chip>,
    );

    expect(getByTestId('chip').tagName).toBe('BUTTON');
    expect(getByTestId('chip').getAttribute('type')).toBe('button');
  });

  it('should render checked', () => {
    const { getByTestId } = render(<Chip checked>Hello, world</Chip>);

    expect(getByTestId('chip').classList.contains('checked')).toBe(true);
  });

  it('should render disabled', () => {
    const { getByTestId } = render(<Chip disabled>Hello, world</Chip>);

    expect(getByTestId('chip').classList.contains('disabled')).toBe(true);
  });

  it('should render checked disabled', () => {
    const { getByTestId } = render(
      <Chip checked disabled>
        Hello, world
      </Chip>,
    );

    expect(getByTestId('chip').classList.contains('checked')).toBe(true);
    expect(getByTestId('chip').classList.contains('disabled')).toBe(true);
  });

  it('should render end adornment', () => {
    const { getByTestId } = render(
      <Chip endAdornment={<span data-testid='adornment'>Adornment</span>}>Hello, world</Chip>,
    );

    expect(getByTestId('chip').textContent).toBe('Hello, worldAdornment');
    expect(getByTestId('adornment').textContent).toBe('Adornment');
  });

  it('should handle data-testid', () => {
    const { queryAllByTestId } = render(<Chip data-testid='foo-bar'>Hello, world</Chip>);

    expect(queryAllByTestId('chip')).toHaveLength(0);
    expect(queryAllByTestId('foo-bar')).toHaveLength(1);
  });
});

describe('ChipIconButton', () => {
  it('should render button', () => {
    const { container } = render(<ChipIconButton>hello</ChipIconButton>);

    expect(container.textContent).toBe('hello');
    expect(container.querySelectorAll('button')).toHaveLength(1);
  });
});

describe('getDeletableChipProps', () => {
  it('should properly configure Chip', () => {
    const spy = jest.fn();

    const { getByTestId } = render(
      <Chip {...getDeletableChipProps({ onDelete: spy })}>Deletable!</Chip>,
    );

    expect(getByTestId('chip').textContent).toBe('Deletable!');
    expect(getByTestId('chip').querySelectorAll('button')).toHaveLength(1);

    expect(spy).toHaveBeenCalledTimes(0);
    for (const item of getByTestId('chip').querySelectorAll('button')) {
      fireEvent.click(item);
    }
    expect(spy).toHaveBeenCalledTimes(1);
  });

  it('should properly configure Chip without options', () => {
    const { getByTestId } = render(<Chip {...getDeletableChipProps()}>Deletable!</Chip>);

    expect(getByTestId('chip').textContent).toBe('Deletable!');
    expect(getByTestId('chip').querySelectorAll('button')).toHaveLength(1);
  });
});
